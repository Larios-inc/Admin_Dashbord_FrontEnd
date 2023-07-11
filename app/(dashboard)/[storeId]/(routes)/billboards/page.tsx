import BillboarClient from "./components/client"

interface BillboardsPageProps{

}

const BillboardsPage = () => {
  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <BillboarClient />
        </div>
    </div>
  )
}

export default BillboardsPage