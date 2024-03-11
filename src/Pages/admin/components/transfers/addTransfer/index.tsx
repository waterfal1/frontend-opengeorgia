import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';

import { ITransfer } from '../../../../transfer/types';
import RemoveTransfer from '../../../containers/RemoveTransferContainer';
import { transferInitialValues, transferValidationSchema } from '../constants';

import './styles.scss';

type Props = {
  onSubmit: (values: Partial<ITransfer>, formikProps: {resetForm: () => void}) => void;
}

function AddTransfer(props: Props) {
  return (
    <div className="wrap-review">
      <Formik
        initialValues={transferInitialValues}
        validationSchema={transferValidationSchema}
        enableReinitialize
        onSubmit={props.onSubmit}
      >
        {(formikProps) => (

          <div className="align-form-center">
            <h2 className="align-center">Добавить трансфер</h2>
            <Form className="form-review">
              <label className="add-transfer-margin" htmlFor="placeName">Название</label>
              <Field
                name="placeName"
                type="text"
                className="field-style"
                placeholder="Введите название"
              />
              <ErrorMessage name="placeName" component="div" className="error-color" />

              <label htmlFor="text" className="add-transfer-margin">Добавить цену</label>
              <Field name="cost" type="text" placeholder="Добавить цену" className="field-style" />
              <ErrorMessage name="cost" component="div" className="error-color" />

              <button
                type="submit"
                className="field-style add-transfer-margin"
              >Добавить трансфер
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <RemoveTransfer />
    </div>
  );
}

export default AddTransfer;
