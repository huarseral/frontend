import type React from "react"

interface RowsProps{
    children:React.ReactNode
}

const Rows=({children}:RowsProps)=>{
    
    return <div className="p-2 flex gap-2 justify-end">
        {children}
    </div>

}

export default Rows