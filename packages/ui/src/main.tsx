import * as ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './app/app';
import { IAMClientProvider } from './common/iam-client-react';
import { NotificationProvider } from './components/common';
import { configVariables } from 'packages/libs/shared-services/src/config';

const authServerUrl = configVariables.APP_IAM_SERVER_URL;
const clientId = configVariables.APP_IAM_CLIENT_ID;

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <NotificationProvider>
      <IAMClientProvider authServerUrl={authServerUrl} clientId={clientId}>
        <App />
      </IAMClientProvider>
    </NotificationProvider>
  </Router>
);
