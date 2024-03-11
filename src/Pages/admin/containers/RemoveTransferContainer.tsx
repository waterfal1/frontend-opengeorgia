import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import RemoveTransfer from '../components/transfers/removeTransfer';
import { ITransfer } from '../../transfer/types';
import { LoadingComponent } from '../../../Components/Loading/Loading';
import { GET_ALL_TRANSFERS, REMOVE_TRANSFER } from '../../../api/transfersRequests';

function RemoveTransferContainer() {
  const [transfers, setTransfers] = useState<ITransfer[]>([{
    _id: '',
    id: 0,
    cost: '',
    placeName: '',
  }]);

  const { data, loading } = useQuery(GET_ALL_TRANSFERS);
  const [removeTransfer] = useMutation(REMOVE_TRANSFER);

  useEffect(() => {
    if (!loading) {
      setTransfers([...data.getAllTrans].sort((a: ITransfer, b: ITransfer) => a.id - b.id));
    }
  }, [data, loading]);

  const removeTransferRequest = async (transferId: string) => {
    await removeTransfer({
      variables: {
        transferId,
      },
      refetchQueries: [{ query: GET_ALL_TRANSFERS }],
    });
    setTransfers(transfers.filter((e) => e._id !== transferId));
  };

  if (loading) return <LoadingComponent />;

  return <RemoveTransfer removeTransferRequest={removeTransferRequest} transfers={transfers} />;
}

export default RemoveTransferContainer;
