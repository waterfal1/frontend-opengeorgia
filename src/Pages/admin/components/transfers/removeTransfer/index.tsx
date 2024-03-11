import * as FaIcons from 'react-icons/fa';

import { ITransfer } from '../../../../transfer/types';

import './styles.scss';

type Props = {
  removeTransferRequest: (transferId: string) => void;
  transfers: ITransfer[];
}

function RemoveTransfer(props: Props) {
  return (
    <div>
      <h2 className="remove-review">Удалить трансфер</h2>
      <div className="remove-wrap">
        {props.transfers.map((item: ITransfer) => (
          <div key={item.id} className="review-box-admin transfer-box-admin-width">
            <FaIcons.FaWindowClose
              onClick={() => props.removeTransferRequest(item._id)}
              size={18}
              color="ff0000"
              className="review-controls"
            />
            <h4 className="transfer-name">{item.placeName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RemoveTransfer;
