import { useCallback, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import AddExcursion from '../components/excursions/addExcursion';
import { IExcursion } from '../../tours/types/IExcursion';
import { LoadingComponent } from '../../../Components/Loading/Loading';
import { CREATE_EXCURSION, GET_ALL_DIRECTION } from '../../../api/excursionsRequests';

function AddExcursionContainer() {
  const [newExcursion] = useMutation(CREATE_EXCURSION);
  const { data, loading } = useQuery(GET_ALL_DIRECTION);
  const [imagesBase64, setImagesBase64] = useState<(string | ArrayBuffer | null)[]>([]);
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);

  const toBase64 = (file: File): Promise<string | ArrayBuffer | null> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  const handleImage = async (files: FileList) => {
    const response = Array.from(files).map((async (file) => toBase64(file)));
    const images: (string | ArrayBuffer | null)[] = [];
    response.map((filePromise) => filePromise.then((image) => images.push(image)));
    setImagesBase64(images);
    setSelectedImages(files);
  };

  const handleSubmit = useCallback(async (
    values: Partial<IExcursion> & {direction: string},
    formikProps: {resetForm: () => void},
  ) => {
    await newExcursion({
      variables: {
        input: { ...values, images: imagesBase64 },
      },
      refetchQueries: [{ query: GET_ALL_DIRECTION }],
    });
    formikProps.resetForm();
    setSelectedImages(null);
  }, [imagesBase64, newExcursion]);

  if (loading) return <LoadingComponent />;

  return (
    <AddExcursion
      handleSubmit={handleSubmit}
      handleImage={handleImage}
      data={data.getAllDirections}
      selectedImages={selectedImages}
    />
  );
}

export default AddExcursionContainer;
