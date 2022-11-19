import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    signInWithCustomToken,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { get, post } from './requester';

const collection = '/users';

const auth = getAuth();

export const onStateChange = (callback) => {
    onAuthStateChanged(auth, callback);
};

const setUserId = (id) => {
    localStorage.setItem('uid', id);
};

export const createUser = async (email, username, password) => {
    try {
        const result = await post(
            {
                username,
                email,
                password,
            },
            collection
        );

        if (result.message) {
            return result;
        }

        const signInResult = await signInWithCustomToken(auth, result);

        setUserId(signInResult.user.uid);
        return result;
    } catch (e) {
        console.log(`Couldn't add user - ${e.message}`);
    }
};

export const getUsernameById = async (uid) => {
    const user = await get(`${collection}/${uid}`);
    return user.username;
};

export const signIn = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);

        setUserId(result.user.uid);
        return result;
    } catch (e) {
        console.log(e);
    }
};

export const logout = () => {
    signOut(auth).then(localStorage.removeItem('uid')).catch(console.log);
};

export const useFirebaseAuthState = () => {
    return useAuthState(auth);
};

export const getAccessToken = async () => {
    if (!auth.currentUser) return undefined;

    return auth.currentUser.getIdToken();
};
