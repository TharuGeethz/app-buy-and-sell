import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../config/auth-configuration';

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);