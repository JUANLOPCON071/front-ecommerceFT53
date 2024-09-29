"use client"
import { usePathname } from "next/navigation"

const ShowComponent = ({children}: {children: React.ReactNode}) => {
    const pathName = usePathname();
    console.log(pathName);
    

  return (
    <div>
        {
            pathName !== "/login" && (
                children
            )
        }
    </div>
  )
}

export default ShowComponent