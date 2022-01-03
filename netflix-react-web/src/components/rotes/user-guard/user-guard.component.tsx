import {useSelector} from 'react-redux'
import {State} from '../../../store/store/store.types';
import {useEffect} from 'react';

export default function UserGuard({children}: any){
    const isUserAuthenticated = useSelector((state: State)  => !! state.user.data)

    useEffect(
        () => {
            if (isUserAuthenticated) {
                console.log(isUserAuthenticated)
            }
        },
        [children]
    )

    return children
}