import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { selectPage } from '../../../actions';
import { IMainPagePictureData } from '../../../types';
import { Direction } from '../components';

function DirectionContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedPage = (page: IMainPagePictureData) => {
    dispatch(selectPage(page));
    navigate('/tours');
  };

  return <Direction selectedPage={selectedPage} />;
}

export default DirectionContainer;
