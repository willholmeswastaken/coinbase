import React from 'react'

const Header = () => {
  return (
    <div className="flex w-[calc(100%-3rem)] items-center border-b border-solid border-[#282b2f] py-4 px-5">
      <div className='text-4xl font-semibold flex-1'>Assets</div>
      <div className="flex">
          <button className="header-button bg-[#3773f5] text-black">Buy / Sell</button>
          <button className="header-button">Send / Receive</button>
      </div>
    </div>
  )
}

export default Header
