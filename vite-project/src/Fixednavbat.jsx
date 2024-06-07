import React, { useState } from 'react'

function Fixednavbat() {
    const [ fix , setFix ] = useState(false)


    function setFixed() {
        if (window.scrollY >= 392) {
            setFix(true)
        }else{
            setFix(false)
        }
    }

    window.addEventListener('scroll' , setFixed)
  return (
    <div>
        <header className='max-w-[1200px] px-5 mx-auto bg--500 py-5'>
            <nav className={fix ? 'navbar fixed' : 'navbar'}>
                <a href="#" className='brand'>Han</a>
                <ul className='flex '>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <button className='bg-black text-white'>
                        cick me
                    </button>
                </ul>
            </nav>
        </header>
        <section className='max-w-[1200px] px-5 mx-auto'>
        <section className=' w-[600px] h-[600px] bg-green-500'>
            1
        </section>
        <section className=' w-[600px] h-[600px] bg-green-500'>
            1
        </section>
        <section className=' w-[600px] h-[600px] bg-green-500'>
            1
        </section>
        <section className=' w-[600px] h-[600px] bg-green-500'>
            1
        </section>
        <section className=' w-[600px] h-[600px] bg-green-500'>
            1
        </section>
        <section className=' w-[600px] h-[600px] bg-green-500'>
            1
        </section>
        </section>
    </div>
  )
}

export default Fixednavbat