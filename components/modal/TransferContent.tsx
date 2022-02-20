import React, { useEffect, useState } from 'react'
import { FaWallet } from 'react-icons/fa'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../lib/sanity'

interface TransferContentProps {
  selectedToken: any
  setAction: any
  thirdWebTokens: any
  walletAddress: string
}

const TransferContent: React.FC<TransferContentProps> = ({
  selectedToken,
  setAction,
  thirdWebTokens,
  walletAddress,
}) => {
  const [amount, setAmount] = useState<string>()
  const [recipient, setRecipient] = useState<string>()
  useEffect(() => {
      if(selectedToken === undefined) return
      const url = imageUrlBuilder(client).image(selectedToken.logo).url()
      console.log(url)
  }, [selectedToken])
  return (
    <div className="flex h-full flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <div id="flex-input-container" className="flex flex-1 items-end">
          <input
            type="number"
            placeholder="0"
            className="mr-4 w-[45%] border-none bg-inherit text-right text-7xl text-[#3773f5] outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span className="mb-2 text-5xl text-[#3773f5]">ETH</span>
        </div>
        <div
          className={`pt-4 pr-0 pb-8 pl-0 text-center ${
            amount ? 'text-[#0a0b0d]' : 'text-[#8a919e]'
          }`}
        >
          Amount is a required field
        </div>
      </div>
      <div id="transferform" className="border border-solid border-[#282b2f]">
        <div className="transfer-row">
          <div className="transfer-field-name">To</div>
          <div className="ml-14 grid h-7 w-7 place-items-center overflow-hidden rounded-lg">
            <FaWallet />
          </div>
          <input
            type="text"
            placeholder="Address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="mr-2 flex border-none bg-inherit text-xl text-white outline-none"
          />
        </div>
        <div className="transfer-divider"></div>
        <div className="transfer-row">
          <div id="fieldname" className="transfer-field-name">
            Pay with
          </div>
          <div
            id="coin-select-list"
            className="flex h-full flex-[1.3] hover:cursor-pointer"
          >
            <div
              id="icon"
              className="mr-4 grid h-7 w-7 place-items-center overflow-hidden rounded-lg"
            >
              <img
                src="https://pbs.twimg.com/card_img/1492856766534537217/Rz9RJade?format=png&name=small"
                alt="coin"
                className="h-[120%] w-[120%] object-cover"
              />
            </div>
            <div
              id="coinname"
              className="mr-2 flex border-none bg-inherit text-xl text-white outline-none"
            >
              Ethereum
            </div>
          </div>
        </div>
      </div>
      <div className="transfer-row">
        <button className="w-full rounded-lg bg-[#3773f5] p-4 text-center text-xl text-white hover:cursor-pointer hover:bg-[#4a80f6]">
          Continue
        </button>
      </div>
      <div className="transfer-row">
        <div>ETH Balance</div>
        <div>1.2 ETH</div>
      </div>
    </div>
  )
}

export default TransferContent
