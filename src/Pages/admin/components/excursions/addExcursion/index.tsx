import React from 'react';
import {
  ErrorMessage, Field, FieldArray, Form, Formik,
} from 'formik';

import { excursionsValidationSchema, initialValues } from '../constants';
import { IExcursion } from '../../../../tours/types/IExcursion';
import { IDirection } from '../../../../tours/types/IDirection';
import RemoveExcursion from '../../../containers/RemoveExcursionContainer';

import './styles.scss';

type Props = {
  handleSubmit: (values: Partial<IExcursion> & {direction: string},
  formikProps: {resetForm: () => void}) => void;
  handleImage: (files: FileList) => void;
  data: IDirection[];
  selectedImages: FileList | null;
}

function AddExcursion(props: Props) {
  const {
    handleSubmit, handleImage, data, selectedImages,
  } = props;
  return (
    <div className="wrap-review">
      <Formik
        initialValues={initialValues}
        validationSchema={excursionsValidationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
        render={({ values }) => (
          <Form>
            <div className="align-form-center">
              <div className="form-review">
                <h2 className="align-center">Добавить Экскурсию</h2>
                <Field name="direction" as="select" className="field-style background-white">
                  <option>Выберите направление</option>
                  {data.map((item: IDirection, index: number) => (
                    <option key={index}>{item.name}</option>
                  ))}
                </Field>
                <div className="img-collection">
                  {selectedImages?.length ? Array.from(selectedImages).map((image: File, index: number) => (
                    <img
                      className="photo"
                      key={index}
                      alt="not fount"
                      height="50px"
                      width="50px"
                      src={URL.createObjectURL(image)}
                    />
                  )) : null}
                </div>
                <label htmlFor="file">Добавить фото</label>
                <Field
                  type="file"
                  title="Необходимо выбрать минимум один файл"
                  required="required"
                  multiple="multiple"
                  name="files[]"
                  accept="image/*"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (event.target.files === null || event.target.files.length === 0) return;
                    handleImage(event.target.files);
                  }}
                />

                <label htmlFor="name">Добавить имя</label>
                <Field name="name" type="text" className="field-style" placeholder="Введите имя" />
                <ErrorMessage name="name" component="div" className="error-color" />

                <label htmlFor="text">Добавить текст</label>
                <Field
                  name="full_text"
                  type="textarea"
                  as="textarea"
                  placeholder="Добавить текст"
                  className="field-style"
                />
                <ErrorMessage name="full_text" component="div" className="error-color" />

                <label htmlFor="text">Добавить цену</label>
                <Field name="cost" type="text" placeholder="Добавить цену" className="field-style" />
                <ErrorMessage name="cost" component="div" className="error-color" />
                <div className="bottom-indent" />
                <FieldArray
                  name="excursionPlan"
                  render={(arrayHelpers) => (
                    <div>
                      <button
                        className="field-style shortened-width-date"
                        type="button"
                        onClick={() => arrayHelpers.push('')}
                      >
                        Добавить остановку
                      </button>
                      {values.excursionPlan.map((plan, index) => (
                        <>
                          <div key={index}>
                            <Field className="field-style" name={`excursionPlan.${index}`} />
                            <button
                              type="button"
                              className="remove-button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              -
                            </button>
                          </div>
                          <div className="bottom-indent" />
                        </>
                      ))}
                    </div>
                  )}
                />

                <button
                  type="submit"
                  className="field-style"
                >Добавить Экскурсию
                </button>
              </div>
            </div>
          </Form>
        )}
      />
      <RemoveExcursion />
    </div>
  );
}

export default AddExcursion;
