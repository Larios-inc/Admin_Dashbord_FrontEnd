import { format } from 'date-fns'

import prismadb from "@/lib/prismadb"

import BillboarClient from "./components/client"
import { BillboardColumn } from "./components/columns"

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

  const formattedBillboards: BillboardColumn[] = billboards.map((item)=>({
    id: item.id,
    label: item.label,
    createAt: format(item.createAt,"MMMM do, yyyy")
  }))

  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <BillboarClient data={formattedBillboards}/>
            
        </div>
    </div>
  )
}

export default BillboardsPage