import { ITransfer } from '../types';

import '../styles.scss';

type Props ={
  setSelectedTransfer: (item: ITransfer) => void;
  transfers: ITransfer[];
}

export function TransfersComponent(props: Props) {
  const { setSelectedTransfer, transfers } = props;

  return (
    <div className="transfer-container">
      {transfers.map((item: ITransfer) => (
        <div
          key={item.id}
          className="tour-transfer"
          tabIndex={item.id}
          role="button"
          onClick={() => setSelectedTransfer(item)}
        >
          {item.placeName}{'  '}{item.cost}
          <button className="transfer_btn" type="button">Забронировать</button>
        </div>
      ))}
    </div>
  );
}
