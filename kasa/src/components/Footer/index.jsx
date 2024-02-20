import WhiteLogo from '../../assets/whitelogo.svg'
import '../../styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <img className="footer__logo" src={WhiteLogo} alt="Kasa logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer