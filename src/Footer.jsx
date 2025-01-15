import React from 'react'

export default function Footer() {
  return (
    <footer className=' mt-[65px] flex flex-col gap-4 items-center'>
        <p className=' text-white font-bold text-2xl'>Follow me on:</p>
        <div className=' text-white font-semibold flex flex-wrap gap-3'>
            <a target='_blank' href="https://www.linkedin.com/in/vamshi-r3ddyy">Linkedin</a>
            <a  href="">Twitter</a>
            <a  href="">Facebook</a>
        </div>

    </footer>
  )
}