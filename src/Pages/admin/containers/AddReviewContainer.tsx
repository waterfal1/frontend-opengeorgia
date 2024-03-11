import { useCallback, useState } from 'react';
import { useMutation } from '@apollo/client';

import AddReview from '../components/reviews/addReview';
import { IReview } from '../../reviews/types/IReview';
import { CREATE_REVIEW, GET_ALL_REVIEW } from '../../../api/reviewRequests';

function AddReviewContainer() {
  const [newReview] = useMutation(CREATE_REVIEW, {
    context: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  });
  const [imageBase64, setImageBase64] = useState<string | ArrayBuffer | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const toBase64 = (file: File): Promise<string | ArrayBuffer | null> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

  const handleImage = async (file: File) => {
    const response = await toBase64(file);
    setImageBase64(response);
    setSelectedImage(file);
  };

  const setImage = (file: File | null) => {
    setSelectedImage(file);
  };

  const handleSubmit = useCallback(async (values: Partial<IReview>, formikProps: {resetForm: () => void}) => {
    await newReview({
      variables: {
        input: { ...values, face: imageBase64 },
      },
      refetchQueries: [{ query: GET_ALL_REVIEW }],
    });
    formikProps.resetForm();
    setSelectedImage(null);
  }, [imageBase64, newReview]);

  return (
    <AddReview
      selectedImage={selectedImage}
      handleImage={handleImage}
      setImage={setImage}
      handleSubmit={handleSubmit}
    />
  );
}

export default AddReviewContainer;
