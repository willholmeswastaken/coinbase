import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

interface DashboardProps {
  address: string
}

const Dashboard: React.FC<DashboardProps> = ({ address }) => {
  return (
    <div className="flex h-screen w-screen bg-black text-white">
      <div className="flex-1">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default Dashboard
