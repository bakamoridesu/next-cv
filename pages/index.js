import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { experience } from '../config/experience'
import { Card } from '../components/card'
import { education } from '../config/education'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingXl}>Опыт работы</h2>
        {
          experience.map(exp => (
            <Card data={exp}/>
          ))
        }
        <h2 className={utilStyles.headingXl}>Образование</h2>
        {
          education.map(edu => (
            <Card data={edu}/>
          ))
        }
        <h2 className={utilStyles.headingXl}>Хобби</h2>
        <div className={utilStyles.regular}>Кроссфит, видеоигры, аниме, японский язык</div>
      </section>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
