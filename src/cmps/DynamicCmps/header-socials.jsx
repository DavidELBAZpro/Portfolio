import { BsLinkedin } from "react-icons/bs"
import { GoMarkGithub } from "react-icons/go"
import { BsTwitter } from "react-icons/bs"

export const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/davidelbaz1/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/DavidELBAZpro" target="_blank">
        <GoMarkGithub />
      </a>
      <a href="https://twitter.com/DvdElbaz" target="_blank">
        <BsTwitter />
      </a>
    </div>
  )
}

