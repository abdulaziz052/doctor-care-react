import React from 'react'
import footer_logo from './img/foot-logo.svg'
import instagram_icon from './img/fa-instagram.svg'
import facebook_icon from './img/fa-facebook.svg'
import youtube_icon from './img/fa-youtube.svg'

function Footer() {
  return (
    <div>
            <section class="py-[80px] bg-[#00856F] section">
        <div class="max-w-[1160px] px-5  mx-auto md:flex justify-between">
            <div>
                <a class="" href="./index.html">
                    <img class="mb-6" src={footer_logo} />
                </a>
                <p class="font-normal text-sm text-[#FFFAF1] mb-[15px]">©2022 - DoctorCare.</p>
                <p class="font-normal text-sm text-[#FFFAF1] mb-[32px]">Todos os direitos reservados.</p>
            </div>
            <div class="flex items-center gap-[32px]">
                <a href="">
                    <img src={instagram_icon} />
                </a>
                <a href="">
                    <img src={facebook_icon} />
                </a>
                <a href="">
                    <img src={youtube_icon} />
                </a>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Footer