import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import BasePage from '../../../src/components/BasePage';
// import ScrollToTop from '../../components/ScrollToTop';
// import Header from './Header';
import NotFoundPage from '../../../src/components/NotFoundPage';
// import { RoutingTab, RoutingTabs } from '../../components/RoutingTabs';

// const Profile = lazy(() => import('../DrugPage/Profile'));

import DRUG_PAGE_QUERY from './DrugPage.gql';

function DrugPage({ location, match }) {
  const router = useRouter();
  const { id: chemblId } = router.query;
  const { loading, data } = useQuery(DRUG_PAGE_QUERY, {
    variables: { chemblId },
  });

  if (data && !data.drug) {
    return <NotFoundPage />;
  }

  const { name, crossReferences } = data?.drug || {};

  return (
    <BasePage
      title={`${name || chemblId} profile page`}
      description={`Annotation information for ${name || chemblId}`}
      location={location}
    >
      test
      {/* <Header
        loading={loading}
        chemblId={chemblId}
        name={name}
        crossReferences={crossReferences}
      /> */}
      {/* <ScrollToTop /> */}
      {/* <RoutingTabs>
        <RoutingTab
          label="Profile"
          path="/drug/:chemblId"
          component={() => <Profile chemblId={chemblId} name={name} />}
        />
      </RoutingTabs> */}
    </BasePage>
  );
}

export default DrugPage;
