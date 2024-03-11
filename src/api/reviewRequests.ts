import { gql } from '@apollo/client';

export const REMOVE_REVIEW = gql`
	mutation removeReview($reviewId: String!) {
		removeReview(reviewId: $reviewId) {
			message
		}
	}
`;

export const CREATE_REVIEW = gql`
	mutation createReview($input: ReviewInput) {
		createReview(input: $input) {
			alt, date, face, name, quotes, text1, rating
		}
	}
`;

export const GET_ALL_REVIEW = gql`
  query {
    getAllReviews {
      _id alt date face name quotes text1 rating
    }
  }    
`;
