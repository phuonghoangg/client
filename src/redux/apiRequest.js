import axios from 'axios';
import {
    loginFail,
    loginStart,
    loginSuccess,
    logoutFail,
    logoutStart,
    logoutSuccess,
    registerFail,
    registerStart,
} from './authSlice';
import {
    addDocFail,
    addDocStart,
    addDocSuccess,
    deleteDocFail,
    deleteDocStart,
    deleteDocSuccess,
    findDocFail,
    findDocStart,
    findDocSuccess,
    getAllDocFail,
    getAllDocStart,
    getAllDocSuccess,
    getDocFail,
    getDocStart,
    getDocSuccess,
    updateDocFail,
    updateDocStart,
    updateDocSuccess,
} from './docSlice';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:3005/v1/user/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(loginFail());
    }
};
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('http://localhost:3005/v1/user/register', user);
        navigate('/');
    } catch (error) {
        dispatch(registerFail());
    }
};

export const logoutUser = async (accessToken, dispatch, navigate, id) => {
    dispatch(logoutStart());
    try {
        await axios.post('http://localhost:3005/v1/user/logout', id, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logoutSuccess());
        navigate('/');
    } catch (error) {
        dispatch(logoutFail());
    }
};
export const addDocs = async (doc, accessToken, dispatch, navigate) => {
    dispatch(addDocStart());
    try {
        await axios.post('http://localhost:3005/v1/doc/', doc, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(addDocSuccess());
        navigate('/');
    } catch (error) {
        dispatch(addDocFail());
    }
};

export const getAnDoc = async (id, dispatch) => {
    dispatch(getDocStart());
    try {
        const res = await axios.get(`http://localhost:3005/v1/doc/${id}`);
        dispatch(getDocSuccess(res.data));
    } catch (error) {
        dispatch(getDocFail());
    }
};

export const getAllDoc = async (dispatch) => {
    dispatch(getAllDocStart());
    try {
        const res = await axios.get('http://localhost:3005/v1/doc/');
        dispatch(getAllDocSuccess(res.data));
    } catch (error) {
        dispatch(getAllDocFail());
    }
};

export const DeleteDoc = async (id, dispatch, navigate, accessToken) => {
    dispatch(deleteDocStart());
    try {
        await axios.delete(`http://localhost:3005/v1/doc/${id}`, {
            headers: { token: `Bearer ${accessToken}` },
        });
        const res = await axios.get('http://localhost:3005/v1/doc/');
        dispatch(deleteDocSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispatch(deleteDocFail());
    }
};


export const findDoc = async (id,dispatch,page) => {
    dispatch(findDocStart())
    try {
        const res = await axios.get(`http://localhost:3005/v1/doc/f/${id}?page=${page}`)
        dispatch(findDocSuccess(res.data))
    } catch (error) {
        dispatch(findDocFail())
    }
};

export const UpdateDoc = async (id,dispatch,updateValue)=>{
    dispatch(updateDocStart())
    try {
        await axios.put(`http://localhost:3005/v1/doc/${id}`,updateValue)
        const res = await axios.get('http://localhost:3005/v1/doc/');
        dispatch(updateDocSuccess(res.data));
    } catch (error) {
        dispatch(updateDocFail())
    }
}
