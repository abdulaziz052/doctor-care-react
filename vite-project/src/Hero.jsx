import React from 'react'
import whatsapp from './img/whatsapp.svg'
import hero from './img/hero.png'

function Hero() {
  return (
    <div>
        <section class="bg-[#DCE9E2] pt-[40px] md:pt-[2px] section">
        <div class="max-w-[1160px] px-5 md:text-start text-center mx-auto  md:flex items-center gap-[51px] animate__backInRight">
            <div class="">
                <span class="text-[#00856F] font-bold mb-4 ">BOAS-VINDAS A DOCTORCARE 👋</span>
                <h1 class="text-[34px] md:text-[52px] max-w-[605px] font-bold mb-6">Assistência médica simplificada para
                    todos</h1>
                <p class="text-[#495057] font-normal text-lg max-w-[585px] mb-8">Os médicos da DoctorCare vão além dos
                    sintomas
                    para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.</p>
                <button
                    class="mx-auto md:mx-0 flex items-center text-white uppercase gap-4 border-2 rounded-full px-8 py-4 bg-[#00856F]">
                    <img src={whatsapp}/>
                    Agende sua consulta
                </button>
            </div>
            <img class="flex" src={hero}/>
        </div>
    </section>
    </div>
  )
}

export default Hero