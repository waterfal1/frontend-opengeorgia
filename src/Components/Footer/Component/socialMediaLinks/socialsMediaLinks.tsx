const importNetworks = ['/Images/Footer/insta.jpg', '/Images/Footer/watsapp.jpg', '/Images/Footer/vk.jpg',
  '/Images/Footer/viber.jpg', '/Images/Footer/facebook.jpg', '/Images/Footer/telegramm.jpg'];
const alt = ['Instagram', 'whatApp', 'Vk', 'Viber', 'facebook', 'telegram'];
const classFooter = 'footer-flex-photo';
const link = ['https://instagram.com/georgia.open?igshid=MzNlNGNkZWQ4Mg==', 'https://wa.me/995599567550',
  'https://vk.com/id810228388', 'viber://chat?number=%2B995599567550',
  'https://www.facebook.com/groups/opengeorgia', 'https://tlgg.ru/@Armen198307'];

export function SocialsMediaLinks() {
  return (
    <>{importNetworks.map((item, index) => (
      <a key={index} href={link[index]} target="_blank" rel="noreferrer">
        <img key={index} src={process.env.PUBLIC_URL + item} alt={alt[index]} className={classFooter} />
      </a>
    ))}
    </>
  );
}
