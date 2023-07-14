'use client'

import { 
    Copy, 
    Edit, 
    MoreHorizontal, 
    Trash,
} from "lucide-react"
import { toast } from "react-hot-toast"
import { useRouter, useParams} from "next/navigation"

import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuItem, 
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

import { BillboardColumn } from "./columns"

interface CellActionsProps {
    data: BillboardColumn
}

export const CellActions: React.FC<CellActionsProps> = ({data}) =>{

    const router = useRouter()
    const params = useParams()

    const onCopy = ( id: string) => {
        navigator.clipboard.writeText(id)
        toast.success("Id Copied")
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open Menu</span>
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Actions
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={() => onCopy(data.id)}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Id
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=> router.push(`/${params.storeId}/billboards/${data.id}`)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Update
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}