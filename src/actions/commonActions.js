import * as types from './actionTypes';

/**
 * Send error when there is a data fetch error or
 * trial to access inavlid url 
 */
export function sendError(error) {
    return {
        type: types.SEND_ERROR,
        error
    }
}

/**
 * Clear the error message and set
 * false to the status
 */
export function clearError() {
    return {
        type: types.CLEAR_ERROR
    }
}