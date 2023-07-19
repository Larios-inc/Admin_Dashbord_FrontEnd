'use client'

import { useParams } from "next/navigation"

import { useOrigin } from "@/hooks/use-origin"
import { ApiAlert } from "@/components/ui/api-alert"

interface ApiListProps {
    entityName: string
    entityIdName: string
}

export const ApiList: React.FC<ApiListProps> = ({
    entityName,
    entityIdName
}) => {

    const params = useParams()
    const origin = useOrigin()

    const baseURL = `${origin}/api/${params.storeId}`

    return (
        <>
            <ApiAlert
                description={`${baseURL}/${entityName}`} 
                title="GET" 
                variant="public"
            />
            <ApiAlert
                description={`${baseURL}/${entityName}/{${entityIdName}}`} 
                title="GET" 
                variant="public"
            />
            <ApiAlert
                description={`${baseURL}/${entityName}`} 
                title="POST" 
                variant="admin"
            />
            <ApiAlert
                description={`${baseURL}/${entityName}/{${entityIdName}}`} 
                title="PATCH" 
                variant="admin"
            />
            <ApiAlert
                description={`${baseURL}/${entityName}/{${entityIdName}}`} 
                title="DELETE" 
                variant="admin"
            />
        </>
    )
}