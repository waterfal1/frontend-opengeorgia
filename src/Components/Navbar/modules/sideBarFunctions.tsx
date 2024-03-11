import { Link } from 'react-router-dom';
import '../сomponents/navbar/styles.scss';

export function sideBarRender<T extends {id: number; cName: string;
  path: string; title: string; icon: JSX.Element}>(data: T[], isRow = true) {
  return data.map((item) => (
    <li key={item.id} className={isRow ? item.cName : `${item.cName}_row`}>
      <Link rel="canonical" to={item.path}>
        {isRow ? item?.icon : null}
        <span>{item.title}</span>
      </Link>
    </li>
  ));
}
