import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Overview } from '../pages/Overview';
import { TripReplay } from '../pages/TripReplay';
import { MaintenanceCalendar } from '../pages/MaintenanceCalendar';
import { AlertCenter } from '../pages/AlertCenter';
import { VehicleProfile } from '../pages/VehicleProfile';

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/overview" replace /> },
  { path: '/overview', element: <Overview /> },
  { path: '/trip-replay', element: <TripReplay /> },
  { path: '/maintenance', element: <MaintenanceCalendar /> },
  { path: '/alerts', element: <AlertCenter /> },
  { path: '/vehicles', element: <VehicleProfile /> },
]);
