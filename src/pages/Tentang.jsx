import React from 'react'
import { Link } from 'react-router-dom'

const Tentang = () => {
  return (
    <>
        <Link to="/" className="mx-2 text-blue-500">
          Beranda
        </Link>
        <Link to="/tentang" className="mx-2 text-blue-500">
          Tentang
        </Link>
        <div className="text-center mt-10">
            <h1 className='text-3xl font-bold'>Tentang Aplikasi</h1>
            <p className='mt-4'>Aplikasi ini dibuat untuk mencatat kegiatan yang ingin kamu lakukan</p>
        </div>
    </>
  )
}

export default Tentang