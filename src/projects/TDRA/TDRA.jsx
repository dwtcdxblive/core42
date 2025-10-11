import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import EntityPage from './components/EntityPage';
import Rise from '../../assets/rise.png';
import Search from '../../assets/search.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// Helper slug
function slugify(text) {
  return text
    ? text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
    : '';
}

/** Service key -> display label (covers tricky cases; falls back gracefully) */
function displayServiceName(key = '') {
  const map = {
    Internet: 'Internet',
    SecureInternetAccess: 'Secure Internet Access',
    G2GConnectivity: 'G2G Connectivity',
    MPLS: 'MPLS',
    VPN: 'VPN',
    ApplicationPerformanceMonitoring: 'Application Performance Monitoring',
    InfrastructureasaService: 'Infrastructure as a Service',
    BackupasaService: 'Backup as a Service',
    DatabaseasaService: 'Database as a Service',
    DisasterRecoveryasaService: 'Disaster Recovery as a Service',
    EmailasaService: 'Email as a Service',
    AIServices: 'AI Services',
    KubernetesasaService: 'Kubernetes as a Service',
    GPUasaService: 'GPU as a Service',
    AdvancedLoadBalancingasaService: 'Advanced Load Balancing as a Service',
    AppLaunchpad: 'App Launchpad',
    SDWANasaService: 'SD-WAN as a Service',
    GSB: 'GSB',
    APIMarketplace: 'API Marketplace',
    DigitalVault: 'Digital Vault',
    UAEPASS: 'UAE PASS',
    NCRM: 'NCRM',
    MabroukMaYakUsrati: 'Mabrouk MaYak & Usrati',
    mSurvey: 'mSurvey',
    DigitalGovernmentFileshare: 'Digital Government Fileshare',
  };

  if (map[key]) return map[key];

  // Generic fallback: split camel case and fix "asa" → "as a"
  return key
    .replace(/asa/g, ' as a ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Robust numeric parser: handles numbers, strings, commas, and K/M suffixes */
function toNumber(val) {
  if (val == null) return 0;
  if (typeof val === 'number') return isFinite(val) ? val : 0;

  const s = String(val).replace(/[, ]/g, '');
  // Match "2.5M", "800K", "2500"
  const m = s.match(/^(-?\d*\.?\d+)([KkMm])?$/);
  if (m) {
    let n = parseFloat(m[1]);
    const suf = m[2]?.toLowerCase();
    if (suf === 'm') n *= 1_000_000;
    if (suf === 'k') n *= 1_000;
    return isNaN(n) ? 0 : n;
  }
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

/** Compact number formatter (e.g., 2.6M) */
const compactFmt = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 });
function formatAED(n) {
  const num = toNumber(n);
  return num ? `${compactFmt.format(num)} AED` : 'N/A';
}
function formatHours(n) {
  const num = toNumber(n);
  return num ? `${compactFmt.format(num)} Hours` : 'N/A';
}
function formatTonnes(n) {
  const num = toNumber(n);
  return num ? `${compactFmt.format(num)} Tonnes` : 'N/A';
}

export default function TDRA() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const dropdownRef = useRef(null);

  // MUST match Mongo schema suffixes (backend keys)
  const servicesList = [
    'Internet',
    'SecureInternetAccess',
    'G2GConnectivity',
    'MPLS',
    'VPN',
    'ApplicationPerformanceMonitoring',
    'InfrastructureasaService',
    'BackupasaService',
    'DatabaseasaService',
    'DisasterRecoveryasaService',
    'EmailasaService',
    'AIServices',
    'KubernetesasaService',
    'GPUasaService',
    'AdvancedLoadBalancingasaService',
    'AppLaunchpad',
    'SDWANasaService',
    'GSB',
    'APIMarketplace',
    'DigitalVault',
    'UAEPASS',
    'NCRM',
    'MabroukMaYakUsrati',
    'mSurvey',
    'DigitalGovernmentFileshare',
  ];

  // Fetch entities
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://events.dxblive.com/api/entities');

        const processedItems = (data || []).map((entity) => {
          const adoptedServices = [];
          const notAdoptedServices = [];

          servicesList.forEach((service) => {
            const usingKey = `Using${service}`;
            const costKey = `Annualcostsaving${service}`;
            const timeKey = `Annualtimesaving${service}`;
            const co2Key = `AnnualCo2reductions${service}`;

            if (entity[usingKey]) {
              adoptedServices.push({
                serviceKey: service,                      // backend key
                serviceName: displayServiceName(service), // UI label
                costSaved: toNumber(entity[costKey]),
                timeSaved: toNumber(entity[timeKey]),
                co2Reduced: toNumber(entity[co2Key]),
              });
            } else {
              notAdoptedServices.push(displayServiceName(service));
            }
          });

          // Compute totals dynamically across adopted services
          const totalCostSaved = adoptedServices.reduce((sum, s) => sum + toNumber(s.costSaved), 0);
          const totalTimeSavedGov = adoptedServices.reduce((sum, s) => sum + toNumber(s.timeSaved), 0);
          const totalCo2Reduced = adoptedServices.reduce((sum, s) => sum + toNumber(s.co2Reduced), 0);

          return {
            ...entity,
            adoptedServices,
            notAdoptedServices,
            totalCostSaved: formatAED(totalCostSaved),
            totalTimeSavedGov: formatHours(totalTimeSavedGov),
            totalCo2Reduced: formatTonnes(totalCo2Reduced),
          };
        });

        setItems(processedItems);
      } catch (err) {
        console.error('Error fetching data:', err);
        setItems([]);
      }
    };

    fetchData();
  }, []);

  // Filter by name
  const filteredItems = items.filter(
    (item) =>
      item.EntityName &&
      item.EntityName.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dropdownRef.current.classList.remove('show');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFocus = () => {
    if (dropdownRef.current) dropdownRef.current.classList.add('show');
  };

  // Also show dropdown while typing
  useEffect(() => {
    if (!dropdownRef.current) return;
    if ((searchTerm || '').trim().length > 0) {
      dropdownRef.current.classList.add('show');
    } else {
      dropdownRef.current.classList.remove('show');
    }
  }, [searchTerm]);

  const handleSelect = (entity) => {
    setSelectedEntity(entity);
    if (dropdownRef.current) dropdownRef.current.classList.remove('show');
    setSearchTerm('');
  };

  const renderOverallImpactButton = () => (
    <button
      type="button"
      className="modal-btn d-flex justify-content-around align-items-center p-2 drk-bg"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      <img src={Rise} className="btn-icon" alt="Rise" />
      <span>Overall impact</span>
    </button>
  );

  return (
    <div className="App">
      <Navbar />

      <div className={`App tdra-bg d-flex justify-content-center ${selectedEntity ? '' : 'centered'}`}>
        <div className="container">
          <div className="row justify-content-center flex-column align-items-center g-3">
            <div className="col-md-6 mt-4">
              {!selectedEntity && <h2 className="text-center">DGOV Impact</h2>}

              {/* Search (with unclipped dropdown) */}
              <div className="input-group mt-3 position-relative" style={{ zIndex: 1030 }}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder={selectedEntity ? selectedEntity.EntityName : 'Entity Name'}
                    aria-label="Search..."
                    aria-describedby="button-addon2"
                    onFocus={handleFocus}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                  />
                  <button className="btn btn-outline-secondary border-0 bg-white" type="button" id="button-addon2" tabIndex={-1}>
                    <img className="btn-icon" src={Search} alt="Search" />
                  </button>
                </div>

                <ul
                  className="dropdown-menu"
                  ref={dropdownRef}
                  style={{ maxHeight: '300px', overflowY: 'scroll' }}
                >
                  {filteredItems.map((item) => (
                    <li key={slugify(item.EntityName)}>
                      <button
                        type="button"
                        className="dropdown-item text-start py-2"
                        onClick={() => handleSelect(item)}
                      >
                        {item.EntityName}
                      </button>
                    </li>
                  ))}
                  {searchTerm && filteredItems.length === 0 && (
                    <li className="px-3 py-2 text-muted">No matches</li>
                  )}
                </ul>
              </div>
            </div>

            {!selectedEntity && renderOverallImpactButton()}

            {/* Overall impact modal (static example UI—replace with real overall totals if needed) */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Overall impact</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="card w-100 my-2">
                      <div className="card-body my-2">
                        <h5 className="card-title text-center">6/20</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">Services Adopted</h6>
                      </div>
                    </div>
                    <div className="card w-100 my-2">
                      <div className="card-body">
                        <h5 className="card-title text-center">2.6M AED</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">Cost Saved</h6>
                      </div>
                    </div>
                    <div className="card w-100 my-2">
                      <div className="card-body">
                        <h5 className="card-title text-center">8,000H</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">Time saved</h6>
                      </div>
                    </div>
                    <div className="card w-100 my-2">
                      <div className="card-body">
                        <h5 className="card-title text-center">5.3T</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">Co2 reduced</h6>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected entity renders below */}
            <div className="w-100 mt-3">
              {selectedEntity ? (
                <EntityPage
                  key={slugify(selectedEntity.EntityName)}
                  entityName={selectedEntity.EntityName}
                  totalCostSaved={selectedEntity.totalCostSaved}
                  totalTimeSavedGov={selectedEntity.totalTimeSavedGov}
                  totalCo2Reduced={selectedEntity.totalCo2Reduced}
                  totalServices={servicesList.length}
                  adoptedServices={selectedEntity.adoptedServices}        // [{serviceKey, serviceName, costSaved, timeSaved, co2Reduced}]
                  notAdoptedServices={selectedEntity.notAdoptedServices} // [displayName,...]
                />
              ) : (
                <div className="text-center text-muted">
                  Select an entity from the search to view details.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
