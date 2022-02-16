import { useWeb3 } from '@3rdweb/hooks'
import Head from 'next/head'
import Dashboard from './Dashboard'

export default function Home() {
  const { address, connectWallet } = useWeb3()

  return (
    <div className="min-w-screen grid min-h-screen place-items-center bg-black text-white">
      {address ? (
        <Dashboard address={address} />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <button
            className="rounded-md border border-solid border-[#282b2f] bg-[#3773f5] p-3 text-xl font-medium text-black hover:cursor-pointer"
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
          <div className="mt-4 text-center text-lg font-medium text-white">
            You need to be running a <br /> browser based upon chrome.
          </div>
        </div>
      )}
    </div>
  )
}
