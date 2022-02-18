import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { Result } from '../data/SanityCoins'
import { ThirdwebSDK, TokenModule } from '@3rdweb/sdk'
import { ethers } from 'ethers'

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY!,
    ethers.getDefaultProvider(
      'https://rinkeby.infura.io/v3/bb9f167f44164496a909e435225b30ea'
    )
  )
)

interface DashboardProps {
  address: string
}
const Dashboard: React.FC<DashboardProps> = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState<Result[]>([])
  const [thirdWebTokens, setThirdWebTokens] = useState<TokenModule[]>([])
  useEffect(() => {
    const initTokens = async () => {
      const coins = await fetch(
        'https://yo5ayrdx.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27coins%27%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D'
      )
      const sanityTokens: Result[] = (await coins.json()).result
      setSanityTokens(sanityTokens)

      setThirdWebTokens(
        sanityTokens.map((x) => sdk.getTokenModule(x.contractAddress))
      )
    }
    initTokens()
  }, [])

  return (
    <div className="flex h-auto w-screen overflow-auto bg-black text-white">
      <Sidebar />
      <div className="flex-1">
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
      </div>
    </div>
  )
}

export default Dashboard
