import React, { useState } from 'react'
import { useRef } from "react";
import logo from './img/official logo.svg'
import hamburger_menu from './img/hamburger.svg'
import hamburger_fixed from './img/fixed-hamburger.svg'
import logo_svg from './img/Logo.svg'
import close_menu from './img/Close.svg'
import instagram_icon from './img/fa-instagram.svg'
import facebook_icon from './img/fa-facebook.svg'
import youtube_icon from './img/fa-youtube.svg'
import title_ from './img/title.svg'


function Header() {

    const navRef = useRef();
    const [ fix , setFix ] = useState(false)
    const [ log , setLog ] = useState(false)
    const [ logo1 , setLogo ] = useState(true)
    const [ ham , setHam ] = useState(true)
    const [ ham1 , setHam1 ] = useState(false)


    
    function setFixed() {
        if (window.scrollY >= 300) {
            setFix(true)
            setLog(true)
            setLogo(false)
            setHam(false)
            setHam1(true)
        }else{
            setFix(false)
            setLog(false)
            setLogo(true)
            setHam(true)
            setHam1(false)
        }
    }

    window.addEventListener('scroll' , setFixed)


    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
 

    return (
        <div>
            <header id="header" className="pt-[27px] pb-[19px] bg-[#DCE9E2]">
                <div className="max-w-[1160px] px-5  mx-auto">
                    <div className={fix ? 'navbar fixed' : 'navbar'}>
                        <a href="./index.html">
                            <img className={logo1 ? 'logo1 fixed-logo1' : 'logo1'} id="logo" src={logo} />
                            <img className={log ? 'logo fixed-logo' : 'logo'} id="fixed-logo" src={title_} />
                        </a>
                        <ul className="hidden gap-8 transition-all md:flex ">
                            <li >
                                <a id="text" className="text-[#00856F] transition-all hover:font-semibold hover:text-[#00856F] pb-[24px] hover:border-b-2 border-[#00856F] active-border1"
                                    href="">Início</a>
                            </li>
                            <li>
                                <a id="text" className="text-[#00856F] transition-all hover:font-semibold hover:text-[#00856F] pb-[24px] hover:border-b-2 border-[#00856F] "
                                    href="">Sobre</a>
                            </li>
                            <li>
                                <a id="text" className="text-[#00856F] transition-all hover:font-semibold hover:text-[#00856F] pb-[24px] hover:border-b-2 border-[#00856F] "
                                    href="">Serviços</a>
                            </li>
                            <li>
                                <a id="text" className="text-[#00856F] transition-all hover:font-semibold hover:text-[#00856F] pb-[24px] hover:border-b-2 border-[#00856F] "
                                    href="">Depoimentos</a>
                            </li>
                        </ul>
                        <button  id="fix-btn"
                            className=" hidden md:block text-[#00856F] border-2 rounded-full border-[#00856F] px-6 py-3 uppercase hover:bg-[#00856F] hover:text-white">Agendar
                            consulta</button>
                        <div className="md:hidden block">
                            <button    id="hamburger-menu" className="md:hidden block">
                                <img onClick={showNavbar} className={ham ? 'hamburger fix' : 'hamburger'}  id="gamburger" src={hamburger_menu} />
                                <img onClick={showNavbar} className={ham1 ? 'hamburger1 fix1' : 'hamburger1'} id="fixed-gamburger" src={hamburger_fixed} />
                            </button>
                        </div>
                        <div ref={navRef} id="responsive-menu" 
                            className="z-30 transition-all md:hidden block w-full px-14   max-h-[932px] h-full bg-[#00856F] fixed top-0 -right-full">
                            <div className="flex items-center justify-between pt-[27px] ">

                                <a href="#">
                                    <img src={logo_svg} />
                                </a>
                                <button onClick={showNavbar} id="close-menu">
                                    <img src={close_menu} />
                                </button>
                            </div>
                            <ul className="text-center pt-[60px] flex flex-col gap-[48px] ">
                                <li>
                                    <a className="font-bold text-2xl text-[#FFFAF1]" href="#">Início</a>
                                </li>
                                <li>
                                    <a className="font-bold text-2xl text-[#FFFAF1]" href="#">Sobre</a>
                                </li>
                                <li>
                                    <a className="font-bold text-2xl text-[#FFFAF1]" href="#">Serviços</a>
                                </li>
                                <li>
                                    <a className="font-bold text-2xl text-[#FFFAF1]" href="#">Depoimentos</a>
                                </li>
                                <button
                                    className="w-[274px] text-[#00856F] bg-white uppercase mb-[80px]  font-bold py-4 px-8 rounded-[40px]">Agende
                                    sua consulta</button>
                            </ul>
                            <ul className="flex items-center justify-center gap-[32px] pb-[289px]">
                                <li>
                                    <a href="#">
                                        <img src={instagram_icon} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={facebook_icon} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={youtube_icon} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
// style="transition:  .5s all;
// style="transition: .8s all;
// style="transition: .5s all;"

export default Header