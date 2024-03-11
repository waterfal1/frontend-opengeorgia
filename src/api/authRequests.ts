import { gql } from '@apollo/client';

export const ACTIVATE_EMAIL = gql`
	mutation activate($activationLink: String!){
		activate(activationLink: $activationLink) {
			message
		}
	}
`;

export const LOG_IN = gql`
	mutation Login($email: String!, $password: String!){
		login(email: $email, password: $password) {
			userId
			token
			tokenExpiration
			role
			email
		}
	}
`;

export const LOG_UP = gql`
	mutation createUser($userInput: UserInput){
		createUser(userInput: $userInput) {
			_id email
		}
	}
`;

export const REQUEST_RESET_PASSWORD = gql`
	mutation GET_REQUEST_RESET($email: String!) {
		requestResetPassword(email: $email) {
			message
		}
	}
`;

export const RESET_PASSWORD = gql`
	mutation RESET_PASSWORD($password: String!, $token: String!) {
		resetPassword(password: $password, token: $token) {
			message
		}
	}
`;

export const SEND_MAIL = gql`
	mutation sendActivationMail($email: String!, $activationLink: String!){
		sendActivationMail(email: $email, activationLink: $activationLink) {
			message
		}
	}
`;

export {};
