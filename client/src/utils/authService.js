import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth();

const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
};

export const onStateChange = (callback) => {
    onAuthStateChanged(auth, callback);
};

export const createUser = async (username, password) => {
    try {
        const result = await createUserWithEmailAndPassword(
            auth,
            username,
            password
        );
        const token = await result.user.getIdToken();
        setAccessToken(token);

        return result;
    } catch (e) {
        console.log(e);
    }
};

export const signIn = async (username, password) => {
    try {
        const result = await signInWithEmailAndPassword(
            auth,
            username,
            password
        );
        const token = await result.user.getIdToken();
        setAccessToken(token);

        return result;
    } catch (e) {
        console.log(e);
    }
};

export const logout = () => {
    signOut(auth)
        .then(() => {
            localStorage.removeItem('accessToken');
        })
        .catch(console.log);
};

export const useFirebaseAuthState = () => {
    return useAuthState(auth);
};
