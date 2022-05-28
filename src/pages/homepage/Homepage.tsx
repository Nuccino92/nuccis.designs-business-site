import { Helmet } from "react-helmet-async";
import HomepageAboutMe from "../../components/homepage/aboutMe/HomePageAboutMe";
import HomepageCategories from "../../components/homepage/categories/HomepageCategories";
import HomepageClients from "../../components/homepage/clients/HomepageClients";
import HomepageContact from "../../components/homepage/contact/HomepageContact";
import HomepageHeader from "../../components/homepage/header/HomepageHeader";

const Homepage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>nuccis designs</title>
        <meta
          name="description"
          content="For all you customized product needs! - Anything you want, we have!"
        ></meta>
      </Helmet>
      <header>
        <HomepageHeader />
      </header>
      <HomepageCategories />
      <HomepageAboutMe />
      <HomepageClients />
      <HomepageContact />
    </div>
  );
};

export default Homepage;
