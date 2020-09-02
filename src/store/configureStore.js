import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleware();

    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleWare)),
        runSaga: sagaMiddleWare.run(rootSaga)
    }
}

export default configureStore;