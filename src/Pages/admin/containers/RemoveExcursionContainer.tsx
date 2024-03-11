import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import RemoveExcursion from '../components/excursions/removeExcursion';
import { IDirection } from '../../tours/types/IDirection';
import { LoadingComponent } from '../../../Components/Loading/Loading';
import { GET_ALL_DIRECTION, REMOVE_EXCURSION } from '../../../api/excursionsRequests';

function RemoveExcursionContainer() {
  const [directions, setDirections] = useState<IDirection[]>([{
    cost: '',
    excursions: [{
      cost: '',
      full_text: '',
      images: [{ img: '' }],
      name: '',
      plan: [{ text: '' }],
      text: '',
      directionName: '',
    }],
    id: 0,
    img: '',
    main_img: '',
    name: '',
    text: '',
  }]);

  const { data, loading } = useQuery(GET_ALL_DIRECTION);
  const [removeExcursion] = useMutation(REMOVE_EXCURSION);

  useEffect(() => {
    if (!loading) {
      setDirections([...data.getAllDirections]);
    }
  }, [data, loading]);

  const removeReviewRequest = async (directionName: string, excursionName: string) => {
    await removeExcursion({
      variables: {
        directionName,
        excursionName,
      },
      refetchQueries: [{ query: GET_ALL_DIRECTION }],
    });
  };

  if (loading) return <LoadingComponent />;

  return (
    <RemoveExcursion
      directions={directions}
      removeReviewRequest={removeReviewRequest}
    />
  );
}

export default RemoveExcursionContainer;
