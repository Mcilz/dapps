import '@gear-js/vara-ui/dist/style-deprecated.css';
import { useApi, useAccount } from '@gear-js/react-hooks';

import { Footer } from '@dapps-frontend/ui';

import { useGetSubscriberQuery } from '@/app/utils';
import { Header, ApiLoader } from '@/components';
import { withProviders } from '@/hocs';
import { Routing } from '@/pages';

import './App.scss';

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();
  const { isFetched } = useGetSubscriberQuery();

  const isAppReady = isApiReady && isAccountReady && isFetched;

  return (
    <>
      <Header />
      <main>{isAppReady ? <Routing /> : <ApiLoader />}</main>
      <Footer />
    </>
  );
}

export const App = withProviders(Component);
