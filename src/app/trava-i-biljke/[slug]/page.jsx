import Layout from '@/components/Layout/Layout'
import GrassGridData from '@/Data/GrassData'
import GSHero from './components/GSHero/GSHero'

export const generateMetadata = async({params}) => {
  const grass = GrassGridData.find(item => item.slug === params.slug)
  return {
    title: grass.title,
    description: grass.desc
  }
}

const page = ({params}) => {

  return (
    <Layout>
      <main className='page_container'>
        <GSHero params={params} />
      </main>
    </Layout>
  )
}

export default page