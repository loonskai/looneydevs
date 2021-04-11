import Layout from '../components/layout';

const IndexPage = (): JSX.Element => {
  return <Layout>
    <div className="welcome-box">
      <h1>Welcome to <span className="heading-emphasis">Looney Devs!</span></h1>
      <p>We learn technologies by DIY.</p>
      <p>This application is currently in progress.</p>
      <p>Contact me at <a href="mailto:loonskai@gmail.com">loonskai@gmail.com</a></p>
    </div>;
  </Layout>;
};

export default IndexPage;
