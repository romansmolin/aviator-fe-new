import React from 'react'

interface BestCasinosMonthlyProps {
    casinos: any
}

const BestCasinosMonthly:React.FC<BestCasinosMonthlyProps> = () => {
  return (
    <div className='mt-10'>
        <h2 className='text-2xl'>Our Top 10 Casinos of July</h2>
    </div>
  )
}

export default BestCasinosMonthly