import React from 'react'
import tick from './img/tikc.svg'

function Services() {
  return (
    <div>
          <section class="bg-[#F7F9F9] pb-[160px] section">
        <div class="flex justify-center py-14">
          
              <div class="md:flex gap-[100px] px-[120px] pb-[40px] rounded-[6px] bg-[#FFFAF1] md:w-[1120px] w-[355px]  md:h-[210px] h-[500px] mt-[-100px] z-20">
                <div class="text-center pt-[60px] md:border-r-2 md:pr-[100px] border-[#7FBFAF]">
                    <p class="font-bold text-5xl">+3.500</p>
                    <p class="text-base font-normal text-[#00856F]">Pacientes atendidos</p>
                </div>
                <div class="text-center pt-[60px]">
                    <p class="font-bold text-5xl">+15</p>
                    <p class="text-base font-normal text-[#00856F]">Especialistas disponíveis</p>
                </div>
                <div class="text-center pt-[60px] md:border-l-2 md:pl-[100px] border-[#7FBFAF] ">
                    <p class="font-bold text-5xl">+10</p>
                    <p class="text-base font-normal text-[#00856F] ">Anos no mercado</p>
                </div>

              </div>

        </div>
        <div class="max-w-[1160px] px-5 mx-auto">
            <div class="text-center pt-[100px] md:pt-[160px] justify-center mx-auto">
                <span class="text-sm font-bold text-[#00856F]  mb-4">SERVIÇOS</span>
                <h2 class="  text-[#212529] md:text-[40px] text-[30px] font-bold leading-[52px] mb-16">Como podemos ajudá-lo <br/> a se
                    sentir melhor?</h2>
                <div class="grid md:grid-cols-3 gap-[40px] mx-auto">
                    <div class="text-start w-full md:w-[347px] h-[207px] border-2 border-[#DCE9E2] py-6 px-6  bg-[#FFFFFF]">
                        <img class="mb-4" src={tick} />
                        <h4 class="font-bold text-2xl mb-4">Problemas digestivos</h4>
                        <p class="max-w-[299px] font-normal text-sm">Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                    </div>
                    <div class="text-start w-full md:w-[347px] h-[207px] border-2 border-[#DCE9E2] py-6 px-6  bg-[#FFFFFF]">
                        <img class="mb-4" src={tick} />
                        <h4 class="font-bold text-2xl mb-4">Saúde Hormonal</h4>
                        <p class="max-w-[299px] font-normal text-sm">Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                    </div>
                    <div class="text-start w-full md:w-[347px] h-[207px] border-2 border-[#DCE9E2] py-6 px-6  bg-[#FFFFFF]">
                        <img class="mb-4" src={tick} />
                        <h4 class="font-bold text-2xl mb-4">Bem-estar mental</h4>
                        <p class="max-w-[299px] font-normal text-sm">Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                    </div>
                    <div class="text-start w-full md:w-[347px] h-[207px] border-2 border-[#DCE9E2] py-6 px-6  bg-[#FFFFFF]">
                        <img class="mb-4" src={tick} />
                        <h4 class="font-bold text-2xl mb-4">Autoimune e Inflamação</h4>
                        <p class="max-w-[299px] font-normal text-sm">Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                    </div>
                    <div class="text-start w-full md:w-[347px] h-[207px] border-2 border-[#DCE9E2] py-6 px-6  bg-[#FFFFFF]">
                        <img class="mb-4" src={tick} />
                        <h4 class="font-bold text-2xl mb-4">Saúde do Coração</h4>
                        <p class="max-w-[299px] font-normal text-sm">Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                    </div>
                    <div class="text-start w-full md:w-[347px] h-[207px] border-2 border-[#DCE9E2] py-6 px-6  bg-[#FFFFFF]">
                        <img class="mb-4" src={tick} />
                        <h4 class="font-bold text-2xl mb-4">Problemas digestivos</h4>
                        <p class="max-w-[299px] font-normal text-sm">Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services