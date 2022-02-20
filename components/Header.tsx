import { TokenModule } from '@3rdweb/sdk'
import React from 'react'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Result } from '../data/SanityCoins'
import TransferModal from './modal/TransferModal'

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 0,
    border: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)'
  }
}

interface HeaderProps {
  walletAddress: string
  sanityTokens: Result[]
  thirdWebTokens: TokenModule[]
}

const Header: React.FC<HeaderProps> = ({
  walletAddress,
  sanityTokens,
  thirdWebTokens,
}) => {
  const router = useRouter()

  return (
    <div className="flex w-full items-center border-b border-solid border-[#282b2f] py-4 px-5">
      <div className="flex-1 text-4xl font-semibold">Assets</div>
      <div className="flex">
        <div className="mr-4 flex flex-col items-center justify-center rounded-[50rem] border border-solid border-[#282b2f] py-0 px-4 text-sm">
          <div className="mb-[0.3rem] text-lg font-semibold text-green-600">
            Wallet Connected
          </div>
          <div className="text-sm">
            {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
          </div>
        </div>
        <button className="header-button bg-[#3773f5] text-black">
          Buy / Sell
        </button>
        <Link href={'/?transfer=1'}>
          <button className="header-button">Send / Receive</button>
        </Link>
      </div>
      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
        <TransferModal
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
          walletAddress={walletAddress} />
      </Modal>
    </div>
  )
}

export default Header
