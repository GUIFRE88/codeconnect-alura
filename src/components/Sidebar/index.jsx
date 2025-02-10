import Logo from '../Sidebar/assets/Logo.svg'
import Feed from '../Sidebar/assets/feed.svg'
import Info from '../Sidebar/assets/info.svg'
import Logout from '../Sidebar/assets/logout.svg'
import Perfil from '../Sidebar/assets/account_circle.svg'
import './styles.css'

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do code connect" />
      <nav>
        <ul className='lista-sidebar'>
          <li>
            <a href='#' className='item__link_publicacao'>Publicar</a>
          </li>
          <li>
            <a href='#' className='item__link item__link--active'>
              <img src={Feed} alt="" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href='#' className='item__link'>
              <img src={Perfil} alt="" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href='#' className='item__link'>
              <img src={Info} alt="" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href='#' className='item__link'>
              <img src={Logout} alt="" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
