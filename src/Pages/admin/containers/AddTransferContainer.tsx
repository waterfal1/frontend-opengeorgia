import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { ITransfer } from '../../transfer/types';
import AddTransfer from '../components/transfers/addTransfer';
import { CREATE_TRANSFER, GET_ALL_TRANSFERS } from '../../../api/transfersRequests';

function AddTransferContainer() {
  const [newTransfer] = useMutation(CREATE_TRANSFER);

  const onSubmit = useCallback(async (values: Partial<ITransfer>, formikProps: {resetForm: () => void}) => {
    await newTransfer({
      variables: {
        input: { ...values },
      },
      refetchQueries: [{ query: GET_ALL_TRANSFERS }],
    });
    formikProps.resetForm();
  }, [newTransfer]);

  return <AddTransfer onSubmit={onSubmit} />;
}

export default AddTransferContainer;
