import React from 'react'
import geo from './img/geo.svg'
import email from './img/email.svg'
import whatsapp from './img/whatsapp.svg'
import nigga from './img/niga.png'


function Contact() {
  return (
    <div>
            <section class="bg-[#FFFFFF] py-[160px] section">
        <div class="max-w-[1160px] px-5  mx-auto md:flex gap-[141px] items-center">
            <div class="">
                <h4 class="font-bold  md:text-[40px] text-[30px] text-[#212529] max-w-[297px] md:max-w-[404px] mb-[40px]">
                    Entre em contato com a gente!
                </h4>
                <a class="mb-4 flex items-center gap-[8px]" href="R. Amauri Souza, 346">
                    <img class="mr-[8px]" src={geo} />
                    R. Amauri Souza, 346
                </a>
                <a class="flex items-center gap-[8px] mb-[40px]" href="">
                    <img class="mr-[8px]" src={email} />
                    contato@doctorcare.com
                </a>
                <button
                    class="flex items-center text-white uppercase gap-4 border-2 rounded-full px-8 py-4 mb-[60px]  bg-[#00856F]">
                    <img src={whatsapp} />
                    Agende sua consulta
                </button>
            </div>
            <div class="flex">
                <img src={nigga} />
            </div>
        </div>
    </section>


    </div>
  )
}

export default Contact