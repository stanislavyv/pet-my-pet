import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithCustomToken,
} from 'firebase/auth';
import auth from '../config/firebase';

import { get, post } from '../lib/requester';

const collection = '/users';

export const onStateChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};

const setUserId = (id) => {
    localStorage.setItem('uid', id);
};

export const createUser = async (email, username, password) => {
    const result = await post(
        {
            username,
            email,
            password,
        },
        collection
    );

    if (result.message) {
        throw new Error(result.message);
    }

    const signInResult = await signInWithCustomToken(auth, result);

    setUserId(signInResult.user.uid);
    return result;
};

export const getUserById = async (uid) => {
    try {
        const user = await get(`${collection}/${uid}`);
        return user;
    } catch (e) {
        console.log(e);
    }
};

export const getUsernameById = async (uid) => {
    const user = await getUserById(uid);
    return user.username;
};

export const signIn = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);

    setUserId(result.user.uid);
    return result;
};

export const logout = () => {
    signOut(auth).then(localStorage.removeItem('uid')).catch(console.log);
};

export const getAccessToken = async () => {
    if (!auth.currentUser) return undefined;

    return auth.currentUser.getIdToken();
};
