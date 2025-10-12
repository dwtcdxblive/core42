import React, { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';

export default function ServiceDetailsModal({
  show,
  onHide,
  serviceName = 'Service Details',
  costSaved = 0,
  timeSaved = 0,
  co2Reduced = 0,
}) {
  const modalRef = useRef(null);
  const instanceRef = useRef(null);

  const fmt = (n) => (Number(n) || 0).toLocaleString();

  useEffect(() => {
    if (!modalRef.current) return;
    if (!instanceRef.current) {
      instanceRef.current = new Modal(modalRef.current, {
        backdrop: true,
        focus: true,
        keyboard: true,
      });
      modalRef.current.addEventListener('hidden.bs.modal', () => onHide?.());
    }
    show ? instanceRef.current.show() : instanceRef.current.hide();
  }, [show, onHide]);

  return (
    <div
      ref={modalRef}
      className="modal fade"
      tabIndex="-1"
      aria-labelledby="serviceDetailsLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="serviceDetailsLabel">
              {serviceName} Details
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="modal-body">
            <div className="metric-card mb-3">
              <div className="metric-value">{fmt(costSaved)} AED</div>
              <p className="metric-label">Cost Saved</p>
            </div>
            <div className="metric-card mb-3">
              <div className="metric-value">{fmt(timeSaved)} Hours</div>
              <p className="metric-label">Time Saved</p>
            </div>
            <div className="metric-card">
              <div className="metric-value">{fmt(co2Reduced)} KGs</div>
              <p className="metric-label">CO2 Reduced</p>
            </div>
          </div>

          <div className="modal-footer justify-content-end">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
