import Search from './Search';
import Page from './Page';
import NavBar from './NavBar';
import Footer from './Footer';
import { externalLinks, mainMenuItems } from '../constants';

const BasePage = ({ title, children, description, location }) => {
  // const composedTitle = `${title ? title + ' | ' : ''} ${appTitle}`;

  return (
    <Page
      header={
        <NavBar
          name="Platform"
          search={<Search embedded />}
          items={mainMenuItems}
        />
      }
      footer={<Footer externalLinks={externalLinks} />}
    >
      {children}
    </Page>
  );
};

export default BasePage;
