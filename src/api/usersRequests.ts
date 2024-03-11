import { gql } from '@apollo/client';

export const GET_USER = gql`
	mutation getUser($_id: String!){
		user(_id: $_id){
			isActivated activationLink email _id role
		}
	}
`;

export const GET_USER_EMAIL = gql`
	mutation getUser($_id: String!){
		user(_id: $_id){
			email
		}
	}
`;
