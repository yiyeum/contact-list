import * as types from './actionTypes';

export function getLists() {
    return {
        type: types.GET_LISTS
    }
}

export function gotLists(data) {
    return {
        type: types.GOT_LISTS,
        data
    }
}

export function getListById(id) {
    return {
        type: types.GET_LIST_BY_ID,
        id
    }
}

export function gotListById(data) {
    return {
        type: types.GOT_LIST_BY_ID,
        data
    }
}