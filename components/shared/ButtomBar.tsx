"use client"
import { sidebarLinks } from "@/constants/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
const ButtomBar = () => {
  const pathName = usePathname();
  return ( 
    <section className="bottombar">
      <div className="bottombar_container">
        {
          sidebarLinks.map(link =>
            {
              const active = 
              (pathName.includes(link.route)&&link.route.length>1)
              ||
              pathName === link.route
              return (
                <Link  href={link.route} key={link.label} 
                className={`leftsidebar_link ${active&&"bg-primary-500"}`}
                >
                  <Image  src={link.imgURL} alt={link.label} height={25} width={25}/>
                  <p className='text-subtle-medium text-light-1 max-sm:hidden'>
                    {link.label.split(/\s+/)[0]}</p>
                </Link>
              )
            }
          )

        }
      </div>
    </section>
   );
}
 
export default ButtomBar;