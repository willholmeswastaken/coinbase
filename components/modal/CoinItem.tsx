import { TokenModule } from '@3rdweb/sdk';
import React from 'react'
import { Result } from '../../data/SanityCoins'

interface CoinItemProps {
    token: Result
    sender: string;
    isSelectedToken: boolean
    setSelectedToken: any
    thirdWebTokens: TokenModule[]
    sanityTokens: Result[] 
    setAction: any
}

const CoinItem: React.FC<CoinItemProps> = ({
    token,
    sender,
    isSelectedToken,
    setSelectedToken,
    thirdWebTokens,
    sanityTokens,
    setAction
}) => {
  return (
    <div>
        <div className="flex flex-1 items-center">
            <div id="icon" className="mr-4 h-7 w-7 rounded-lg overflow-hidden grid place-items-center">
                <img src="" alt="" className='h-[120%] w-[120%] object-cover' />
            </div>
            <div id="namedetails"></div>
            <div id="name" className="text-lg mb-1">

            </div>
            <div id="balance"></div>
        </div>
    </div>
  )
}

export default CoinItem