'use client'

import { useParams ,useRouter} from "next/navigation"
import { Billboard } from '@prisma/client';

import { Heading } from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"

interface BillboardClientProps {
    data:Billboard[]
}

const BillboarClient: React.FC<BillboardClientProps> = ({
    data
}) => {

    const router = useRouter()
    const params = useParams()

  return (
    <>
        <div className="flex items-center justify-between">
            <Heading 
                title={`Billboards (${data.length})`}
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