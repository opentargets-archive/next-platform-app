import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import BasePage from '../../../src/components/BasePage';
// import ScrollToTop from '../../components/ScrollToTop';
import Header from '../../../src/sections/drug/Header';
import NotFoundPage from '../../../src/components/NotFoundPage';
import client from '../../../src/client';
// import { RoutingTab, RoutingTabs } from '../../components/RoutingTabs';

// const Profile = lazy(() => import('../DrugPage/Profile'));

import DRUG_PAGE_QUERY from './DrugPage.gql';

function DrugPage({ location, data, chemblId }) {
  if (!chemblId || !data || !data.drug) {
    return <NotFoundPage />;
  }

  const { name, crossReferences } = data?.drug || {};

  return (
    <BasePage
      title={`${name || chemblId} profile page`}
      description={`Annotation information for ${name || chemblId}`}
      location={location}
    >
      <Header
        loading={false}
        chemblId={chemblId}
        name={name}
        crossReferences={crossReferences}
      />
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

export async function getServerSideProps(context) {
  const { id: chemblId } = context.query;
  const { data } = await client.query({
    query: DRUG_PAGE_QUERY,
    variables: { chemblId },
  });

  return {
    props: {
      data,
      chemblId,
    },
  };
}

export default DrugPage;
