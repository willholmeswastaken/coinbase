import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins'
import Coin from './Coin'

const Portfolio = () => {
  return (
    <div className="flex flex-[1] justify-center">
      <div className="w-full max-w-[1000px] pt-8 px-4">
        <div className="mt-2 rounded-md border border-solid border-[#282b2f]">
          <div id="tableItem" className="pt-4 pl-8 pb-4">
            <div className="text-2xl font-semibold">Your Assets</div>
          </div>
          <div className="divider"></div>
          <table className="w-full">
            <div id="tableItem" className="py-[1rem] px-[2rem]">
              <tr className="portfolio-table-row">
                <div className="flex-[3]">Name</div>
                <div className="flex-[2]">Balance</div>
                <div className="flex-[1]">Price</div>
                <div className="flex-[1]">Allocation</div>
                <div className="flex-[0]">
                  <BsThreeDotsVertical />
                </div>
              </tr>
            </div>
            <div className="divider"></div>
            <div>
              {coins.map((x) => (
                <div>
                  <Coin
                    name={x.name}
                    logo={x.logo}
                    sign={x.sign}
                    balanceUsd={x.balanceUsd}
                    balanceCoin={x.balanceCoin}
                    priceUsd={x.priceUsd}
                    change={x.change}
                    allocation={x.allocation}
                  />
                  <div className="divider"></div>
                </div>
              ))}
            </div>
            <th className="text-left"></th>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
