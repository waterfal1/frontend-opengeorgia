import { gql } from '@apollo/client';

export const REMOVE_EXCURSION = gql`
mutation removeExcursion($directionName: String, $excursionName: String) {
	removeExcursion(directionName: $directionName, excursionName: $excursionName) {
		message
	}
}`;

export const CREATE_EXCURSION = gql`
    mutation createExcursion($input: ExcursionInput) {
	    createExcursion(input: $input) {
		    message
	}
}
`;

export const GET_ALL_DIRECTION = gql`
    query {
        getAllDirections {
            cost
            excursions {
                cost
                full_text
                images {
                    img
                }
                name
                plan {
                    text
                }
                text
                directionName
            }
            id
            img
            main_img
            name
            text
        }
    }    
`;
