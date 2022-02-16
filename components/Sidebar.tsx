import Image from 'next/image'
import React from 'react'
import CoinbaseLogo from '../assets/cb-logo.png'
import { navItems } from '../static/navItems'

const Sidebar = () => {
  return (
    <div className="h-auto border-r border-r-[#282b2f] border-solid w-[calc(22rem-16px-16px)] py-0 px-4">
        <div id="logoContainer" className="my-6 mx-0">
            <div id="logo" className="w-[44%] object-contain ml-5">
                <Image src={CoinbaseLogo} alt="Coinbase logo" />
            </div>
        </div>
        <div id="navItemsContainer" className="mt-12 hover:cursor-pointer">
            {
                navItems.map((x, index) => (
                    <div id="navItem" key={index} className="flex items-center text-xl font-medium rounded-lg mb-6 h-16 hover:bg-[#141519]">
                        <div id="navIcon" className={`bg-[#141519] p-3 rounded-[50%] my-0 mx-4 grid place-items-center text-[${x.title}]`}>
                            {x.icon}
                        </div>
                        <div>{x.title}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar