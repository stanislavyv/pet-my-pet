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

export const createUser = async (email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const token = await result.user.getIdToken();
        setAccessToken(token);

        return result;
    } catch (e) {
        console.log(e);
    }
};

export const signIn = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
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
