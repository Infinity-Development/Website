import { NextPage } from 'next'
import Head from 'next/head'
import Information from '../components/Layout/Information'
import About from '../components/Layout/About'
import { Projects, projectsData } from '../components/Layout/Projects'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Infinity Development</title>
        <link rel="icon" href="../public/infinitydevs.png" />
      </Head>
      <main>
        <Information />
        <About />
        <Projects projects={projectsData} />
      </main>
    </>
  )
}

export default IndexPage
