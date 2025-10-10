// TDRA.jsx
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import EntityPage from './components/EntityPage';
import Rise from '../../assets/rise.png';
import Search from '../../assets/search.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// Optional helper if you need stable keys
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
}

export default function TDRA() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const dropdownRef = useRef(null);

  // MUST match MongoDB schema suffixes
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
        const { data } = await axios.get('https://events.dxblive.com/data/api/entities');

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
                serviceName: service,
                costSaved: entity[costKey] ?? 'N/A',
                timeSaved: entity[timeKey] ?? 'N/A',
                co2Reduced: entity[co2Key] ?? 'N/A',
              });
            } else {
              notAdoptedServices.push(service);
            }
          });

          return {
            ...entity,
            adoptedServices,
            notAdoptedServices,
            totalCostSaved: entity.AnnualcostsavingSecureInternetAccess ?? 'N/A',
            totalTimeSavedGov:
              entity.AnnualtimesavingSecureInternetAccess ?? 'N/A',
            totalCo2Reduced:
              entity.AnnualCo2reductionsSecureInternetAccess ?? 'N/A',
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
      item.EntityName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
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

  // Toggle dropdown visibility while typing
  useEffect(() => {
    if (!dropdownRef.current) return;
    if (searchTerm.trim().length > 0) {
      dropdownRef.current.classList.add('show');
    } else {
      dropdownRef.current.classList.remove('show');
    }
  }, [searchTerm]);

  const handleSelect = (entity) => {
    setSelectedEntity(entity);
    if (dropdownRef.current) dropdownRef.current.classList.remove('show');
  };

  return (
    <div className="App">
      <Navbar />

      <div className="App tdra-bg d-flex justify-content-center vh-150">
        <div className="container">
          <div className="row justify-content-center flex-column align-items-center g-5">
            <div className="col-md-6 mt-4 pt-5">
              <h2 className="text-center">Entity adoption</h2>
              <h3 className="text-center">Status and impact</h3>

              <div className="input-group mt-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="button-addon2"
                    onFocus={handleFocus}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                  />
                  <button
                    className="btn btn-outline-secondary border-0 bg-white"
                    type="button"
                    id="button-addon2"
                  >
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
                        className="dropdown-item text-start"
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

            {/* Overall impact modal trigger */}
            <button
              type="button"
              className="modal-btn d-flex justify-content-around align-items-center p-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <img src={Rise} className="btn-icon" alt="Rise" />
              <span>Overall impact</span>
            </button>

            {/* Modal */}
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
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Overall impact
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="card w-100 my-2">
                      <div className="card-body my-2">
                        <h5 className="card-title text-center">6/20</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">
                          Services Adopted
                        </h6>
                      </div>
                    </div>
                    <div className="card w-100 my-2">
                      <div className="card-body">
                        <h5 className="card-title text-center">2.6M AED</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">
                          Cost Saved
                        </h6>
                      </div>
                    </div>
                    <div className="card w-100 my-2">
                      <div className="card-body">
                        <h5 className="card-title text-center">8,000H</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">
                          Time saved
                        </h6>
                      </div>
                    </div>
                    <div className="card w-100 my-2">
                      <div className="card-body">
                        <h5 className="card-title text-center">5.3T</h5>
                        <h6 className="card-subtitle text-center mb-2 text-body-secondary">
                          Co2 reduced
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected entity renders here */}
            <div className="w-100 mt-3">
              {selectedEntity ? (
                <EntityPage
                  key={slugify(selectedEntity.EntityName)}
                  entityName={selectedEntity.EntityName}
                  totalCostSaved={selectedEntity.totalCostSaved}
                  totalTimeSavedGov={selectedEntity.totalTimeSavedGov}
                  totalCo2Reduced={selectedEntity.totalCo2Reduced}
                  servicesAdopted={selectedEntity.adoptedServices}
                  totalServices={24}
                  adoptedServices={selectedEntity.adoptedServices}
                  notAdoptedServices={selectedEntity.notAdoptedServices}
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
