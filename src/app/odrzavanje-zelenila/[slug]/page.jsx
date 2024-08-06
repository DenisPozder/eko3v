import MaintenanceGridData from '@/Data/MaintenanceData'
import Layout from '@/components/Layout/Layout'
import MSHero from './components/MSHero/MSHero'

export const generateMetadata = async({params}) => {
  const maintenance = MaintenanceGridData.find(item => item.slug === params.slug)
  return {
    title: maintenance.title,
    description: maintenance.desc
  }
}

const page = ({params}) => {

  return (
    <Layout>
      <main className='page_container'>
        <MSHero params={params} />
      </main>
    </Layout>
  )
}

export default page