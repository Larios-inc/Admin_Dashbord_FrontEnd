'use client'

import { useState } from 'react';
import axios from "axios"
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

import { ProductColumn } from "./columns"
import { AlertModal } from '@/components/modals/alret-modal';

interface CellActionsProps {
    data: ProductColumn
}

export const CellActions: React.FC<CellActionsProps> = ({data}) =>{

    const router = useRouter()
    const params = useParams()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const onCopy = ( id: string) => {
        navigator.clipboard.writeText(id)
        toast.success("Product Id Copied")
    }

    const onDelete = async () =>{
        try {

            setLoading(true)
            await axios.delete(`/api/${params.storeId}/products/${data.id}`)
            router.refresh()
            toast.success("Product deleted")

        } catch (error) {
            toast.error("Something went wrong deleting a product")

        }finally{
            setLoading(false)
            setOpen(false)
        }
    }

    return(
        <>
        <AlertModal
            isOpen={open}
            onClose={()=> setOpen(false)}
            onConfirm={onDelete}
            loading={loading}
        />
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
                <DropdownMenuItem onClick={()=> router.push(`/${params.storeId}/products/${data.id}`)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Update
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setOpen(true)}>
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </>
    )
}