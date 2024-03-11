import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';

export const links = [{
  href: 'https://instagram.com/georgia.open?igshid=MzNlNGNkZWQ4Mg==',
  icon: FaIcons.FaInstagram,
  id: 1,
},
{
  href: 'https://wa.me/995599567550',
  icon: FaIcons.FaWhatsapp,
  id: 2,
},
{
  href: 'viber://chat?number=%2B995599567550',
  icon: FaIcons.FaViber,
  id: 3,
},
{
  href: 'https://www.facebook.com/groups/opengeorgia',
  icon: FaIcons.FaFacebookSquare,
  id: 4,
},
{
  href: 'https://vk.com/id810228388',
  icon: FaIcons.FaVk,
  id: 5,
},
{
  href: 'https://tlgg.ru/@Armen198307',
  icon: FaIcons.FaTelegram,
  id: 6,
}];

export const sidebarData = [
  {
    title: 'Главная',
    path: '/',
    icon: <FiIcons.FiHome />,
    cName: 'nav-text',
    id: 1,
  },
  {
    title: 'Экскурсии',
    path: '/tours',
    icon: <FiIcons.FiMap />,
    cName: 'nav-text',
    id: 2,
  },
  {
    title: 'Трансфер',
    path: '/transfers',
    icon: <FaIcons.FaCar />,
    cName: 'nav-text',
    id: 3,
  },
  {
    title: 'Отзывы',
    path: '/reviews',
    icon: <FiIcons.FiMessageCircle />,
    cName: 'nav-text',
    id: 4,
  },
  {
    title: 'О нас',
    path: '/about',
    icon: <FiIcons.FiInfo />,
    cName: 'nav-text',
    id: 5,
  },
];
