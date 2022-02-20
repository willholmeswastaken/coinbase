import { TokenModule } from '@3rdweb/sdk'
import React, { useEffect, useState } from 'react'
import { Result } from '../../data/SanityCoins'
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
    if(selectedToken === undefined && sanityTokens.length > 0) setSelectedToken(sanityTokens[0])
  }, [sanityTokens])

  const selectedModal = (option: string) => {
    switch (option) {
      case 'receive':
        return <h2>receive</h2>
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
            action === 'send' ? 'selected-option' : 'unselected-option'
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
