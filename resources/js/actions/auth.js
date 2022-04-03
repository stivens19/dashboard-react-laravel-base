import axios from 'axios';
import {
    types
} from './../types/types';
import Swal from 'sweetalert2';
export const startLogin = (dni, password) => {
    return async (dispatch) => {
        try {
            const {
                data
            } = await axios.post('/api/auth/login', {
                dni,
                password
            });

            localStorage.setItem('token', data.access_token);
            dispatch(login(data.user))
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Ingrese las credenciales correctamente',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }

    }
}
export const startChecking = () => {
    return async (dispatch) => {
        try {
            if (!!localStorage.getItem('token')) {
                const {
                    data
                } = await axios.get('/api/auth/renew/user');
                dispatch(login(data.user))
            }else{
                dispatch(checkingFinish())
            }
        } catch (error) {
            dispatch(checkingFinish());
        }

    }
}
const checkingFinish = () => ({
    type: types.authCheckingFinish
});
const login = (user) => ({
    type: types.authLogin,
    payload: user
});
export const startLogout = () => {
    return async (dispatch) => {
        try {
            await axios.get('/api/auth/logout');
            localStorage.clear();
            dispatch(logout());
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'No se pudo cerrar sesión',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }

    }
}

const logout = () => ({
    type: types.authLogout
})
