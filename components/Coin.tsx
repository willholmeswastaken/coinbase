import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Image from 'next/image'

interface CoinProps {
  name: string
  sign: string
  balanceUsd: number
  balanceCoin: number
  priceUsd: number
  allocation: number
  change: number;
  logo: any
}

const Coin: React.FC<CoinProps> = ({ name, logo, sign, balanceUsd, balanceCoin, priceUsd, change, allocation }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex w-full items-center justify-between py-[1rem] px-[2rem]">
        <div className='flex-[3]'>
          <div id="nameCol" className="flex items-center">
            <div id="coinIcon" className="mr-4 w-7">
              <Image src={logo} alt={name} />
            </div>
            <div>
              <div id="primary">
                {name}
              </div>
              <div id="secondary" className="text-sm text-[#8a919e]">
                {sign}
              </div>
            </div>
          </div>
        </div>
        <div className='flex-[2]'>
            <div>
                {`$${balanceUsd}`}
            </div>
            <div id="secondary" className="text-sm text-[#8a919e]">
                {balanceCoin} {sign}
            </div>
        </div>
        <div className="flex-[1]">
            <div>
                {`$${priceUsd}`}
            </div>
            <div className={`${change < 0 ? 'text-red-500' : 'text-green-400'}`}>
                {change > 0 && '+'}
                {change}%
            </div>
        </div>
        <div className="flex-[1]">
            {allocation}%
        </div>
        <div className="flex-[0]">
            <BsThreeDotsVertical />
        </div>
        {/* <div id="nameCol" className="flex items-center">
          <div id="primary" className="mb-1"></div>
          <div id="secondary" className="text-sm text-[#8a919e]"></div>
        </div> */}
      </div>
    </div>
  )
}

export default Coin
