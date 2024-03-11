import {
  ErrorMessage,
  Field, Form, Formik,
} from 'formik';
import { useMutation } from '@apollo/client';
// @ts-ignore
import FormRatings from 'form-ratings';

import { CREATE_REVIEW, GET_ALL_REVIEW } from '../../../../api/reviewRequests';
import { reviewValidationSchema } from '../../../admin/components/excursions/constants';

import './styles.scss';

function CreateReview() {
  const [newReview] = useMutation(CREATE_REVIEW);
  return (
    <div className="review-super-container">
      <div className="review-and-image-container">
        <div className="review-form-flex">
          <div className="review-leave">Оставьте Ваш отзыв</div>
          <Formik
            initialValues={{
              name: '',
              date: '',
              face: 'https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.'
              + 'appspot.com/o/Page%2FReviews%2F1.jpeg?alt=media&token=6bb521da-2eae-4c7d-97da-f391acea41a2',
              text1: '',
              rating: 0,
              alt: 'фото',
              quotes: 'https://firebasestorage.googleapis.com/v0/b/georgia-excursion-project.'
              + 'appspot.com/o/Page%2FReviews%2Fquotes.jpg?alt=media&token=8811d9be-6825-412d-8af7-85e5aa88758f',
            }}
            validationSchema={reviewValidationSchema}
            onSubmit={(values, { resetForm }) => {
              newReview({
                variables: {
                  input: values,
                },
                refetchQueries: [{ query: GET_ALL_REVIEW }],
              });
              resetForm();
            }}
          >
            <Form id="exampleForm" className="review-form">
              <label htmlFor="name">Ваше имя:</label>
              <Field name="name" className="input-style" type="text" />
              <ErrorMessage name="name" component="div" className="error-color" />

              <label htmlFor="date">Дата экскурсии:</label>
              <Field name="date" type="date" className="input-select input-style" />
              <ErrorMessage name="date" component="div" className="error-color" />

              <label htmlFor="text1">Ваш отзыв:</label>
              <Field name="text1" as="textarea" className="text input-style" />
              <ErrorMessage name="text1" component="div" className="error-color" />

              <label htmlFor="rating">Вашa оценка:</label>
              <Field name="rating" as={FormRatings} />
              <button
                type="submit"
                className="review-btn"
              >Оставить отзыв
              </button>
            </Form>
          </Formik>
        </div>
        <img src={`${process.env.PUBLIC_URL}/Images/Review/Rectangle.svg`} alt="Горы" className="review-mountains" />
      </div>
    </div>
  );
}

export default CreateReview;
