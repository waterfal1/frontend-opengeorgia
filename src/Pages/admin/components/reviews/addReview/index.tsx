import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';

// @ts-ignore
import FormRatings from 'form-ratings';
import { IReview } from '../../../../reviews/types/IReview';
import { reviewInitialValues, reviewValidationSchema } from '../../excursions/constants';
import RemoveReview from '../../../containers/RemoveReviewContainer';

import './styles.scss';

type Props = {
  selectedImage: File | null;
  handleImage: (file: File) => void;
  setImage: (file: File | null) => void;
  handleSubmit: (values: Partial<IReview>, formikProps: {resetForm: () => void}) => void;
}

function AddReview(props: Props) {
  const {
    selectedImage, handleImage, setImage, handleSubmit,
  } = props;
  return (
    <div className="wrap-review">
      <Formik
        initialValues={reviewInitialValues}
        validationSchema={reviewValidationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <div className="align-form-center">
            <h2 className="align-center">Добавить отзыв</h2>
            <Form className="form-review">
              <label htmlFor="date">Дата экскурсии:</label>
              <Field name="date" type="date" className="field-style" />
              <ErrorMessage name="date" component="div" className="error-color" />

              {selectedImage && (
              <div>
                <img
                  className="photo"
                  alt="not fount"
                  height="50px"
                  width="50px"
                  src={URL.createObjectURL(selectedImage)}
                />
                <button
                  type="button"
                  className="nav-btn-auth-row margin-remove"
                  onClick={() => setImage(null)}
                >Remove
                </button>
              </div>
              )}
              <label htmlFor="file">Добавить фото</label>
              <Field
                type="file"
                name="file"
                accept="image/*"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files === null || event.target.files.length === 0) return;
                  handleImage(event.target.files[0]);
                }}
              />

              <label htmlFor="name">Добавить имя</label>
              <Field name="name" type="text" className="field-style" placeholder="Введите имя" />
              <ErrorMessage name="name" component="div" className="error-color" />

              <label htmlFor="text1">Добавить текст</label>
              <Field name="text1" type="textarea" as="textarea" placeholder="Добавить текст" className="add-textarea" />
              <ErrorMessage name="text1" component="div" className="error-color" />

              <label className="rating-label" htmlFor="rating">Вашa оценка:</label>
              <Field name="rating" as={FormRatings} />
              <button
                type="submit"
                className="field-style"
              >Добавить отзыв
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <RemoveReview />
    </div>
  );
}

export default AddReview;
