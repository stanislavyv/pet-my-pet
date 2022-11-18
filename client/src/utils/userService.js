import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { post } from './requester';

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
        const firebaseResult = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const mongoRes = await post(
            {
                id: firebaseResult.user.uid,
                username,
                email,
            },
            collection
        );

        if (mongoRes.message) {
            return mongoRes;
        }
        
        setUserId(firebaseResult.user.uid);
        return firebaseResult;
    } catch (e) {
        console.log(`Couldn't add user - ${e.message}`);
    }
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
