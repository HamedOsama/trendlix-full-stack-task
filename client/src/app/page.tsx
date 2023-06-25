
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import TopCards from '@/components/TopCards'
import AllProducts from '@/components/AllProducts'
import RecentOrders from '@/components/RecentOrders'
import { getProducts } from '@/mongo/page'
export async function getServerSideProps(){

const product=await getProducts()

return {
  props:{product}
}


}

export default function Home() {

  return (
    <>
    <Sidebar>
    <main className="bg-gray-100 min-h-screen"> 
    <Header />
    <TopCards  />    
    <AllProducts  />    
    </main>
    </Sidebar>
    <RecentOrders />
    </>
  )
}

