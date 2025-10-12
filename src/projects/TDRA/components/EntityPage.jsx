import React, { useState } from 'react';
import ServiceDetailsModal from './ServiceDetailModal'; // ensure filename matches (ServiceDetailsModal.jsx)

const EntityPage = ({
  entityName,
  totalCostSaved,
  totalTimeSavedGov,
  totalCo2Reduced,
  totalServices = 24,
  adoptedServices = [],
  notAdoptedServices = [],
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const adoptedCount = adoptedServices.length;
  const adoptionPercentage = Math.round((adoptedCount / totalServices) * 100);

  return (
    <div className="entity-page">
      <div className="card p-3">
        <h2>{entityName} Dashboard</h2>

        {/* Progress */}
        <h3>Services Adoption Progress</h3>
        <div className="d-flex justify-content-between">
          <div className="fw-900 total">
            {adoptedCount}/{totalServices}
          </div>
          <div className="percent">({adoptionPercentage}%)</div>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${adoptionPercentage}%` }}
            aria-valuenow={adoptionPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>

      {/* Totals */}
      <div className="card p-2 w-30 text-center mt-2">
        <p className="service-sub m-0">{totalCostSaved}</p>
        <p className="service-title m-2">Total Cost Saved:</p>
      </div>

      <div className="d-flex justify-content-between gap-2 mt-2">
        <div className="card p-2 w-50 text-center">
          <p className="service-sub m-0">{totalTimeSavedGov}</p>
          <p className="service-title m-2">Total Time Saved:</p>
        </div>
        <div className="card p-2 w-50 text-center">
          <p className="service-sub m-0">{totalCo2Reduced}</p>
          <p className="service-title m-2">Total CO2 Reduced:</p>
        </div>
      </div>

      {/* Adopted */}
      <h3 className="mt-3">Adopted Services</h3>
      {adoptedServices.length > 0 ? (
        <div className="adopted-services d-flex flex-wrap gap-2">
          {adoptedServices.map((service, i) => (
            <button
              key={`${service.serviceKey}-${i}`}
              className="btn btn-success p-2"
              onClick={() => handleServiceClick(service)}
            >
              {service.serviceName}
            </button>
          ))}
        </div>
      ) : (
        <p>No services adopted yet</p>
      )}

      {/* Not adopted */}
      <h3 className="mt-3">Not Adopted Services</h3>
      {notAdoptedServices.length > 0 ? (
        <div className="non-adopted-services d-flex flex-wrap gap-2">
          {notAdoptedServices.map((name, i) => (
            <button key={`${name}-${i}`} className="btn btn-secondary m-0" disabled>
              {name}
            </button>
          ))}
        </div>
      ) : (
        <p>All services adopted</p>
      )}

      {/* Details Modal */}
      {selectedService && (
        <ServiceDetailsModal
          show={modalVisible}
          onHide={() => setModalVisible(false)}
          serviceName={selectedService.serviceName}
          costSaved={selectedService.costSaved}
          timeSaved={selectedService.timeSaved}
          co2Reduced={selectedService.co2Reduced}
        />
      )}
    </div>
  );
};

export default EntityPage;
