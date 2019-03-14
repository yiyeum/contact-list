import {
    call, put, all, takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';
import * as contactDataAction from '../actions/contactDataActions';
import * as commonAction from '../actions/commonActions';

const CONTACT_API_URL = 'https://jsonplaceholder.typicode.com/users';
function* getLists() {
    try {
        const { data } = yield call(axios.get, CONTACT_API_URL);
        if (data) {
            yield put(contactDataAction.gotLists(data));
            yield put(commonAction.clearError());
        }
    } catch (err) {
        const error = {
            status: true,
            message: "There was an error fetching the data. Please try again."
        }
        yield put(commonAction.sendError(error));
    }
}

function* getListById({ id }) {
    try {
        const { data } = yield call(axios.get, `${CONTACT_API_URL}/${id}`);
        if (data) {
            yield put(contactDataAction.gotListById(data));
            yield put(commonAction.clearError());
        }
    } catch (err) {
        const error = {
            status: true,
            message: "There was an error fetching the data. Please try again."
        }
        yield put(commonAction.sendError(error));
    }
}

function* watchEntity() {
    yield all([
        takeEvery(types.GET_LISTS, getLists),
        takeEvery(types.GET_LIST_BY_ID, getListById)
    ]);
}

export default watchEntity;
