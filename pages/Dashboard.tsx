import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

interface DashboardProps {
  address: string
}

const Dashboard: React.FC<DashboardProps> = ({ address }) => {
  return (
    <div className="flex h-auto w-screen bg-black text-white overflow-auto">
      <Sidebar />
      <div className="flex-1">
        <Header walletAddress={address} connectWallet={() => {}} />
        <Main />
      </div>
    </div>
  )
}

export default Dashboard
