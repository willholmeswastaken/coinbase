import { TokenModule } from '@3rdweb/sdk';
import React, { useEffect, useState } from 'react'
import { Result } from '../../data/SanityCoins'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'

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
    const [balance, setBalance] = useState<string>('Fetching...')
    const [imageUrl, setImageUrl] = useState<string>()
    
    useEffect(() => {
        const getBalance = async () => {
            const activeThirdWebToken = thirdWebTokens.find(x => x.address === token.contractAddress)
            const thirdWebBalance = await activeThirdWebToken?.balanceOf(sender)
            setBalance(thirdWebBalance?.displayValue.split('.')[0]!)
        }
    })
  return (
    <div className='flex items-center py-4 px-2 rounded-md mb-1 hover:bg-[#0e0f14]'>
        <div className="flex flex-1 items-center">
            <div id="icon" className="mr-4 h-7 w-7 rounded-lg overflow-hidden grid place-items-center">
                <img src="" alt="" className='h-[120%] w-[120%] object-cover' />
            </div>
            <div id="namedetails"></div>
            <div id="name" className="text-lg mb-1">

            </div>
            <div id="balance"></div>
            <div id="isSelected" className="ml-2 text-[#3773f5]"></div>
        </div>
    </div>
  )
}

export default CoinItem