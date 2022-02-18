import { TokenModule } from '@3rdweb/sdk'
import React from 'react'
import { Result } from '../data/SanityCoins'
import Portfolio from './Portfolio'
import Promos from './Promos'

interface MainProps {
  walletAddress: string
  sanityTokens: Result[]
  thirdWebTokens: TokenModule[]
}

const Main: React.FC<MainProps> = ({
  walletAddress,
  sanityTokens,
  thirdWebTokens,
}) => {
  return (
    <div className="flex max-h-[calc(100vh-64px)] overflow-auto">
      <Portfolio
        walletAddress={walletAddress}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promos />
    </div>
  )
}

export default Main
