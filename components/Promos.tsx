import React from 'react'

const Promos = () => {
  return (
    <div className="mt-8 pr-4">
        <div className="promo-offer-card">
            <div className="font-bold text-2xl mb-[0.1rem]">
                Yield earned 
            </div>
            <div className="text-lg">
                Earn up to 2.84% APY on your crypto
            </div>

            <div className="flex-[1]" />

            <div className="text-lg font-bold flex items-center justify-between">
                $0.000066 <span className="text-[#8a919e] text-base">2.84% APY</span>
            </div>
        </div>
        <div className="promo-offer-card">
            <div className="font-bold text-2xl mb-[0.1rem]">
                Learn and Earn 
            </div>
            <div className="text-lg">
                Earn up to 2.84% APY on your crypto
            </div>
            <div className="flex-[1]" />

            <div className="text-lg font-bold flex items-center justify-between">
                <span className="text-[#3773f5] ">Verify Identity</span>
            </div>
        </div>
    </div>
  )
}

export default Promos