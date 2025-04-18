import { Route } from 'react-router-dom';

import { ErrorTrackingRoutes } from '@dapps-frontend/error-tracking';

import { OnLogin, InfoText } from '@/components';

import { Create } from './create';
import { Home } from './home';
import { NFT } from './nft';

const routes = [
  { path: '/', Page: Home },
  { path: 'nft/:id', Page: NFT },
  { path: 'create', Page: Create, isPrivate: true },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page, isPrivate }) => (
      <Route
        key={path}
        path={path}
        element={
          isPrivate ? (
            <OnLogin fallback={<InfoText text="In order to use all features, please login" />}>
              <Page />
            </OnLogin>
          ) : (
            <Page />
          )
        }
      />
    ));

  return <ErrorTrackingRoutes>{getRoutes()}</ErrorTrackingRoutes>;
}

export { Routing };
