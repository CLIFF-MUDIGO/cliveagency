import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
    const MenuItems =[
        {
            Title : "Home",
            Path : "/",
            Icon : "",
        },
        {
            Title : "About",
            Path :"/about",
            Icon :"",
        },
        {
            Title :"Clients",
            Path : "/clients",
            Icon : "",
        },
        {
            Title : "Contact",
            Path : "/contact",
            Icon : "",
        },
    ]
  return (
    <div>
        {/*content*/}
        <div className="">
            {children}
        </div>
        {/*footer*/}
      <div className="fixed bottom-0 right-0 left-0"  >
        <div className="flex">
            {MenuItems.map((item)=>(
                <div>
                  <Link to={`${item.Path}`}>{item.Title}</Link>
                </div>

            ))}
        </div>

      </div>
    </div>
  )
}

export default Layout
