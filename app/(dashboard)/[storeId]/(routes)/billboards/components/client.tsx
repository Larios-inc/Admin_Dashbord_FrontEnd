'use client'

import { useParams ,useRouter} from "next/navigation"

import { Heading } from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"

const BillboarClient = () => {

    const router = useRouter()
    const params = useParams()

  return (
    <>
        <div className="flex items-center justify-between">
            <Heading 
                title="Billboards (0)"
                description="Manage Billboards for your stores"
            />
            <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className="mr-2 h-4 w-4"/>
                Add new
            </Button>
        </div>
        <Separator />
    </>
  )
}

export default BillboarClient