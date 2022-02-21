import React, { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'
import { BiCopy } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa'
import { Result } from '../../data/SanityCoins'

interface ReceiveProps {
  setAction: any
  selectedToken: Result
  walletAddress: string
}

const Receive: React.FC<ReceiveProps> = ({
  setAction,
  selectedToken,
  walletAddress,
}) => {
  const [imageUrl, setImageUrl] = useState<string>()
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    const url = imageUrlBuilder(client).image(selectedToken.logo).url()
    setImageUrl(url)
  }, [selectedToken])
  return (
    <div className="h-full w-full">
      <div
        id="content"
        className="flex h-full flex-col rounded-lg border border-solid border-[#282b2f]"
      >
        <div id="qrContainer" className="grid flex-1 place-items-center">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${walletAddress}`}
            alt="qr code"
          />
        </div>
        <div className="transfer-divider"></div>
        <div
          id="row"
          className="flex w-full items-center justify-center p-4 text-xl text-[#8a919e]"
        >
          <div className="flex h-full flex-[1.3] hover:cursor-pointer">
            <div
              id="icon"
              className="mr-4 grid h-7 w-7 place-items-center overflow-hidden rounded-full"
            >
              <img
                src={imageUrl}
                alt="icon logo"
                className="h-[120%] w-[120%] object-cover"
              />
            </div>
            <div
              id="coinName"
              className="mr-2 flex-1 border-none bg-inherit text-xl text-white outline-none"
            >
              {selectedToken.name}
            </div>
          </div>
        </div>
        <div className="transfer-divider"></div>
        <div
          id="row"
          className="flex w-full items-center p-4 text-xl text-[#8a919e]"
        >
          <div>
            <div id="title" className="mb-2 text-white">
              {selectedToken.symbol} Address
            </div>
            <div id="address" className="text-sm">
              {walletAddress}
            </div>
          </div>
          <div className='flex items-end justify-end w-full'>
            <div
              id="copyButton"
              className="cursor-pointer self-end"
              onClick={() => {
                navigator.clipboard.writeText(walletAddress)
                setCopied(true)
              }}
            >
              {copied ? <FaCheck className="text-[#27ad75]" /> : <BiCopy />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Receive
