import { NavLink } from 'react-router-dom';

type Props = {
  className: string;
  btnText: string;
  rel?: string;
  to: string;
  onClick?: () => void;
}

export default function LinkedButton(props : Props) {
  const {
    className, btnText, rel, to, onClick,
  } = props;
  return (
    <NavLink rel={rel || 'canonical'} to={to}>
      <button onClick={onClick} className={className} type="button">{btnText}</button>
    </NavLink>
  );
}
