import { useState } from 'react';
import { useSelector } from 'react-redux';

import Admin from '../components/admin';
import { currentUserSelector } from '../selectors';
import { AdminsOptionsType } from '../types/AdminsOptionsType';

export default function AdminContainer() {
  const currentUser = useSelector(currentUserSelector);
  const [selectedOption, setSelectedOption] = useState(0);

  const setOption = (itemId: AdminsOptionsType) => {
    setSelectedOption(itemId);
  };

  return (
    <Admin
      setOption={setOption}
      selectedOption={selectedOption}
      email={currentUser.email}
    />
  );
}
