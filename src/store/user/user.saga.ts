import {put, takeEvery, all, call} from 'redux-saga/effects'
import axiosInstance from '../../modules/axios/axios.module'
import {userActions} from "./user.slice"
import { AccessTokenStorageKey } from './user.types'
import { UserAction } from './user.types'

export function* login(props: UserAction){
    try {
        yield put(userActions.setSettings({isLoading: true}))
        const {email, password} = props.payload
        // @ts-ignore
        const { data: { user, accessToken}}: PostSessionNew = yield call(sessionService().postSessionNew, {email, password})
        localStorage.setItem(AccessTokenStorageKey, accessToken)

        yield put(userActions.setData({ ...user }))
    } catch (error) {
        // @ts-ignore
        yield put(userActions.setError(error.response.data.message))
    } finally {
        yield put(userActions.setSettings({isLoading:false}))
    }
}


function* watchLogin(){
    yield takeEvery('user/Login',login)
}

export default function* userSaga(){
    yield all([
        watchLogin(),
    ])
}

