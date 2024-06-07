import React from 'react'
import doctor from './img/doctor.png'

function About() {
  return (
    <div>
           <section class="bg-[#FFFAF1] pt-[160px] pb-[160px] section">
        <div class="max-w-[1160px] px-5   mx-auto">
            <div class=" md:flex gap-[67px]   items-center">
                <img class="mb-[60px]" src={doctor} alt=""/>
                <div>
                    <span class="font-bold text-[#00856F] text-sm">SOBRE NÓS</span>
                    <h4 class="max-w-[447px] font-bold text-[40px] text-[#061800]">Entenda quem somos e por que
                        existimos</h4>
                    <p class="max-w-[573px] font-normal text-base text-[#495057]">Amet minim mollit non deserunt ullamco
                        est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia
                        consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit
                        officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor
                        do amet sint.</p>

                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About