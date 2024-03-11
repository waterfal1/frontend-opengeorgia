import { NavLink, Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';

import { IconContext } from 'react-icons';
import LinkedButton from '../../../../services/LinkedButton';
import { links } from '../../сontants';
import { IAuth } from '../../../../reducers/auth';
import { UserRole } from '../../../../Pages/Auth/Components/constants';

import './styles.scss';

type Props = {
    onLogout: () => void;
    showSideBar: () => void;
    sidebar: boolean;
    sideLinks: JSX.Element[];
    currentUser: IAuth;
    upLinks: JSX.Element[];
}

export default function Navbar(props: Props) {
  const {
    onLogout, showSideBar, sidebar, currentUser, upLinks, sideLinks,
  } = props;
  return (
    <div className="header_bar">
      <IconContext.Provider value={{ color: 'black' }}>
        <nav className="navbar">
          <NavLink rel="canonical" to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} />
          </NavLink>
          <NavLink rel="canonical" to="/" className="logo_img_btn">
            <img className="logo-img" src={`${process.env.PUBLIC_URL}/Images/Navbar/OpenGeorgia.png`} alt="" />
          </NavLink>
          <ul className="nav-list">
            {upLinks}
            {currentUser.role === UserRole.admin && (
            <li className="nav-text_row">
              <Link rel="canonical" to="/admin">
                <span>Админ</span>
              </Link>
            </li>
            )}
          </ul>
          <LinkedButton className="nav_btn" to="/book" btnText="Связаться с нами" />
          <LinkedButton
            to={currentUser.token ? '#' : '/signin'}
            btnText={currentUser.token ? 'Выйти' : 'Войти'}
            className={currentUser.token ? 'nav-btn-auth nav-btn-auth-row' : 'login nav_btn-row nav_btn_order-row'}
            onClick={onLogout}
          />
        </nav>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" rel="canonical" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sideLinks}
            {currentUser.role === UserRole.admin && (
            <li className="nav-text">
              <Link rel="canonical" to="/admin">
                <FiIcons.FiUser />
                <span>Админ</span>
              </Link>
            </li>
            )}
            <div className={sidebar ? 'contacts active' : 'contacts'}>
              <LinkedButton className="nav_btn-row nav_btn_order-row" to="/book" btnText="Связаться с нами" />
              <p>+995-59-979-87-07</p>
              <p>Turipogruziimailru@mail.ru</p>
            </div>
            <div className="signIn-btn-small-screen">
              <LinkedButton
                to={currentUser.token ? '#' : '/signin'}
                btnText={currentUser.token ? 'Выйти' : 'Войти'}
                className={currentUser.token ? 'nav-btn-auth-row' : 'login nav_btn-row nav_btn_order-row'}
                onClick={onLogout}
              />

            </div>
            <div className={sidebar ? 'contacts_links active' : 'contacts_links'}>
              {links.map((item) => (
                <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
                  {!sidebar && <item.icon className="Icon_img" />}
                </a>
              ))}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
