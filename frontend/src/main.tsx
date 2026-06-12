import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { useAlertStore } from './stores/alertStore';
import { useMaintenanceStore } from './stores/maintenanceStore';
import { useVehicleStore } from './stores/vehicleStore';
import './styles/global.css';

const { checkMaintenanceDue } = useAlertStore.getState();
const { records } = useMaintenanceStore.getState();
const { vehicles } = useVehicleStore.getState();
checkMaintenanceDue(records, vehicles);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
