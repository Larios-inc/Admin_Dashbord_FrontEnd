
import prismadb from "@/lib/prismadb"


import BillboarClient from "./components/client"

interface BillboardsPageProps{

}

const BillboardsPage = async({
  params
}:{
  params:{ storeId:string }
}) => {

  const billboards = await prismadb.billboard.findMany({
    where:{
      storeId : params.storeId
    },
    orderBy:{
      createAt: 'desc'
    }
  })

  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <BillboarClient data={billboards}/>
            
        </div>
    </div>
  )
}

export default BillboardsPage