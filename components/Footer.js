import React from 'react'

const Footer = () => {
  const date = new Date(Date.now());
  return (
    <div>
      <hr />
      <p className='p-5 text-center text-xs text-slate-600'>© Copyright {date.getFullYear()} - Developed by Manimaran. All right reserved.</p>
    </div>
  )
}

export default Footer
