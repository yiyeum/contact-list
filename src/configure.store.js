import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watchEntity from './sagas/saga';
import reducer from './reducers/index';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware,
    ];

    const store = createStore(reducer, initialState, compose(
        applyMiddleware(...middlewares),
    ));

    sagaMiddleware.run(watchEntity);

    return store;
}
