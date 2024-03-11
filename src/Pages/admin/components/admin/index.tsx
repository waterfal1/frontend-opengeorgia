import { options } from '../../constants';
import { AdminsOptionsType } from '../../types/AdminsOptionsType';
import AdminExcursionComponent from '../excursions';
import AdminReviewComponent from '../reviews';
import AdminTransferComponent from '../transfers';

import './styles.scss';

type Props = {
    email?: string;
    setOption: (itemId: number) => void;
    selectedOption: AdminsOptionsType;
}

export default function Admin(props: Props) {
  return (
    <div className="admin-container">
      <aside>
        <div className="menu-list-container">
          <article>
            <select className="logged">
              <option> You logged as {props.email}</option>
            </select>
            {options.map((option, index) => (
              <div
                key={index}
                role="button"
                tabIndex={option.id}
                className={props.selectedOption === index
                  ? 'menu-item-container back-color' : 'menu-item-container'}
                onClick={() => props.setOption(option.id)}
              >
                <div className="menu-item">{option.name}</div>
              </div>
            ))}

          </article>
        </div>
      </aside>
      {props.selectedOption === AdminsOptionsType.Reviews && <AdminReviewComponent />}
      {props.selectedOption === AdminsOptionsType.Transfers && <AdminTransferComponent />}
      {props.selectedOption === AdminsOptionsType.Excursions && <AdminExcursionComponent />}
    </div>
  );
}
