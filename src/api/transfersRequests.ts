import { gql } from '@apollo/client';

export const REMOVE_TRANSFER = gql`
	mutation removeTransfer($transferId: String) {
		removeTransfer(transferId: $transferId) {
			message
		}
	}
`;

export const CREATE_TRANSFER = gql`
	mutation createTransfer($input: TransferInput) {
		createTransfer(input: $input) {
			id, cost, placeName
		}
	}
`;

export const GET_ALL_TRANSFERS = gql`
    query {
        getAllTrans {
           _id, id, cost, placeName
        }
    }
`;
