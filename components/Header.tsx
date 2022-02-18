import { TokenModule } from '@3rdweb/sdk'
import React from 'react'
import { Result } from '../data/SanityCoins'

interface HeaderProps {
  walletAddress: string
  sanityTokens: Result[]
  thirdWebTokens: TokenModule[]
}

const Header: React.FC<HeaderProps> = ({
  walletAddress,
  sanityTokens,
  thirdWebTokens,
}) => {
  return (
    <div className="flex w-full items-center border-b border-solid border-[#282b2f] py-4 px-5">
      <div className="flex-1 text-4xl font-semibold">Assets</div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center justify-center rounded-[50rem] border border-solid border-[#282b2f] py-0 px-4 text-sm">
          <div className="mb-[0.3rem] text-lg font-semibold text-green-600">
            Wallet Connected
          </div>
          <div className="text-sm">
            {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
          </div>
        </div>
        <button className="header-button bg-[#3773f5] text-black">
          Buy / Sell
        </button>
        <button className="header-button">Send / Receive</button>
      </div>
    </div>
  )
}

export default Header
