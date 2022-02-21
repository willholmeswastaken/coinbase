import { TokenModule } from '@3rdweb/sdk'
import React, { useEffect, useState } from 'react'
import { Result } from '../../data/SanityCoins'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'
import { FaCheck } from 'react-icons/fa'

interface CoinItemProps {
  token: Result
  sender: string
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
  setAction,
}) => {
  const [balance, setBalance] = useState<string>('Fetching...')
  const [imageUrl, setImageUrl] = useState<string>()

  useEffect(() => {
    const getBalance = async () => {
      const activeThirdWebToken = thirdWebTokens.find(
        (x) => x.address === token.contractAddress
      )
      const thirdWebBalance = await activeThirdWebToken?.balanceOf(sender)
      setBalance(thirdWebBalance?.displayValue.split('.')[0]!)
    }
    setImageUrl(imageUrlBuilder(client).image(token.logo).url())
    getBalance()
  }, [])
  return (
    <div
      className={`mb-1 flex w-full items-center rounded-md py-4 px-2 hover:cursor-pointer hover:bg-[#454546] ${
        isSelectedToken && 'bg-[#141519]'
      }`}
      onClick={() => {
        setSelectedToken(token)
        setAction('send')
      }}
    >
      <div className="flex flex-1 items-center">
        <div
          id="icon"
          className="mr-4 grid h-7 w-7 place-items-center overflow-hidden rounded-lg"
        >
          <img
            src={imageUrl}
            alt={`${token.symbol} logo`}
            className="h-[120%] w-[120%] object-cover"
          />
        </div>
        <div id="namedetails">
          <div id="name" className="mb-1 text-lg">
            {token.name}
          </div>
          <div>{token.symbol}</div>
        </div>
      </div>

      <div id="balance">
        {balance} {token.symbol}
      </div>
      <div id="isSelected" className="ml-2 text-[#3773f5]">
        {isSelectedToken && <FaCheck />}
      </div>
    </div>
  )
}

export default CoinItem
