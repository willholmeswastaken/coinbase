import { TokenModule } from '@3rdweb/sdk'
import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Result } from '../../data/SanityCoins'
import CoinSelector from './CoinSelector'
import TransferContent from './TransferContent'

interface TransferModalProps {
  sanityTokens: Result[]
  thirdWebTokens: TokenModule[]
  walletAddress: string
}

const TransferModal: React.FC<TransferModalProps> = ({
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}) => {
  const [action, setAction] = useState<string>('send')
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0])
  useEffect(() => {
    if (selectedToken === undefined && sanityTokens.length > 0)
      setSelectedToken(sanityTokens[0])
  }, [sanityTokens])

  const selectedModal = (option: string) => {
    switch (option) {
      case 'receive':
        return <h2>receive</h2>
      case 'transfer':
        return (
          <div className="flex h-full w-full flex-col items-center justify-center text-2xl">
            <h2>Transfer in progress...</h2>
            <TailSpin
              height="100"
              width="100"
              color="#3773f5"
              ariaLabel="loading"
            />
          </div>
        )
      case 'transferred':
        return (
          <div className="flex flex-col h-full w-full items-center justify-center text-3xl font-semibold text-[#27ad75]">
            Transfer complete!
            <button
              className="w-full mt-8 rounded-lg bg-[#3773f5] p-4 text-center text-xl text-white hover:cursor-pointer hover:bg-[#4a80f6]"
              onClick={() => setAction('send' )}
            >
              Done
            </button>
          </div>
        )
      case 'select':
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityTokens}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        )
      default:
        return (
          <TransferContent
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={walletAddress}
          />
        )
    }
  }

  return (
    <div className="flex h-[35rem] w-[27rem] flex-col border border-solid border-[#282b2f] text-white">
      <div id="selector" className="flex h-20 items-center justify-evenly">
        <div
          className={`send-recieve-option ${
            action === 'send' || action == 'select'
              ? 'selected-option'
              : 'unselected-option'
          }`}
          onClick={() => setAction('send')}
        >
          <p>Send</p>
        </div>
        <div
          className={`send-recieve-option ${
            action === 'receive' ? 'selected-option' : 'unselected-option'
          }`}
          onClick={() => setAction('receive')}
        >
          <p>Receive</p>
        </div>
      </div>
      <div className="flex h-full p-4">{selectedModal(action)}</div>
    </div>
  )
}

export default TransferModal
