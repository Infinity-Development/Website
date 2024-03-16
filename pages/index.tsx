import { NextPage } from 'next';
import Information from '../components/Layout/Information';
import About from '../components/Layout/About';
import { Projects, projectsData } from '../components/Layout/Projects';


const IndexPage: NextPage = () => {

  return (
    <>
      <main>
        <Information />
        <About />
        <Projects projects={projectsData} />
      </main>
    </>
  );
};

export default IndexPage;
