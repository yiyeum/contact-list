import * as types from './actionTypes';

/**
 * Get all the list of contacts
 */
export function getLists() {
    return {
        type: types.GET_LISTS
    }
}

/**
 * Used from saga to send the data
 * to redux store
 * @param {*} data list of contacts
 */
export function gotLists(data) {
    return {
        type: types.GOT_LISTS,
        data
    }
}

/**
 * Get the list by id 
 * @param {*} id id sent from the component
 */
export function getListById(id) {
    return {
        type: types.GET_LIST_BY_ID,
        id
    }
}

/**
 * Used from saga to send the data filtered
 * by id to redux store
 * @param {*} data filtered data by id
 */
export function gotListById(data) {
    return {
        type: types.GOT_LIST_BY_ID,
        data
    }
}