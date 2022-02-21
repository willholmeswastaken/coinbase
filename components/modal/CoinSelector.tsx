import { TokenModule } from '@3rdweb/sdk'
import React, { useState } from 'react'
import { Result } from '../../data/SanityCoins'
import CoinItem from './CoinItem'

interface CoinSelectorProps {
  setAction: any
  selectedToken: Result
  setSelectedToken: any
  sanityTokens: Result[]
  thirdWebTokens: TokenModule[]
  walletAddress: string
}

const CoinSelector: React.FC<CoinSelectorProps> = ({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}) => {
  return (
    <div className="w-full">
      <div className="mb-4 w-full text-center text-2xl">Select Asset</div>
      <div className="flex flex-col">
        {sanityTokens.map((x, index) => (
          <CoinItem
            key={index}
            token={x}
            sender={walletAddress}
            isSelectedToken={selectedToken.symbol === x.symbol}
            setSelectedToken={setSelectedToken}
            thirdWebTokens={thirdWebTokens}
            sanityTokens={sanityTokens}
            setAction={setAction}
          />
        ))}
      </div>
    </div>
  )
}

export default CoinSelector
