import React from 'react'

interface HeaderProps {
    walletAddress: string;
    connectWallet: any;
}

const Header: React.FC<HeaderProps> = ({ walletAddress, connectWallet }) => {
  return (
    <div className="flex w-[calc(100%-3rem)] items-center border-b border-solid border-[#282b2f] py-4 px-5">
      <div className='text-4xl font-semibold flex-1'>Assets</div>
      <div className="flex">
          <div className="text-sm border border-solid border-[#282b2f] rounded-[50rem] mr-4 py-0 px-4 flex flex-col items-center justify-center">
              <div className="text-lg mb-[0.3rem] text-green-600 font-semibold">Wallet Connected</div>
              <div className="text-sm">
                  {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
              </div>
          </div>
          <button className="header-button bg-[#3773f5] text-black">Buy / Sell</button>
          <button className="header-button">Send / Receive</button>
      </div>
    </div>
  )
}

export default Header
