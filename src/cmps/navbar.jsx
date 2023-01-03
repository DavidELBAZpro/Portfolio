import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"
import { useState } from "react"

export const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" className={ activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={ activeNav === '#experiences' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}
