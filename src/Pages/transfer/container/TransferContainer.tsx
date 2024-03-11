import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { LoadingComponent } from '../../../Components/Loading/Loading';
import { GET_ALL_TRANSFERS } from '../../../api/transfersRequests';
import { TransfersComponent } from '../components/transvers';
import { selectedTransfer } from '../actions';
import { ITransfer } from '../types';

import '../styles.scss';

export function TransfersContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_ALL_TRANSFERS);

  const setSelectedTransfer = useCallback((transfer: ITransfer) => {
    dispatch(selectedTransfer(transfer));
    navigate('/book');
  }, [dispatch, navigate]);

  if (loading) return <LoadingComponent />;

  return <TransfersComponent transfers={data.getAllTrans} setSelectedTransfer={setSelectedTransfer} />;
}
