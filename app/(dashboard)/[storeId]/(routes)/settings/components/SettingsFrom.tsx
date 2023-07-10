'use client'
import { Store } from "@prisma/client"
import { Trash } from "lucide-react"

import { Heading } from "@/components/ui/Heading"
import { Button } from "@/components/ui/button"

interface SettingsFormProps {
    initialData: Store
}

const SettingsFrom: React.FC<SettingsFormProps> = ({ initialData }) => {

  return (
    <>
         <div className="flex items-center justify-between">
            <Heading 
                title="Settings"
                description="Manege store preferences"
            />
            <Button 
               variant="destructive"
               size="icon"
               onClick={()=>{}}
            >
                <Trash className="h-4 w-4" />
            </Button>
        </div>
    </>
  )
}

export default SettingsFrom