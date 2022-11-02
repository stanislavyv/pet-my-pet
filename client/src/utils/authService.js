import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth();

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

        return result;
    } catch (e) {
        console.log(e);
    }
};

export const signIn = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);

        return result;
    } catch (e) {
        console.log(e);
    }
};

export const logout = () => {
    signOut(auth).catch(console.log);
};

export const useFirebaseAuthState = () => {
    return useAuthState(auth);
};

export const getAccessToken = async () => {
    if (!auth.currentUser) return undefined;

    return auth.currentUser.getIdToken();
};
