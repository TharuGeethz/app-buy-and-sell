import { Injectable } from '@angular/core';
import {
  User,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { BehaviorSubject, from, Observable, of, switchMap } from 'rxjs';
import { auth } from '../firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(auth, (user) => this.userSubject.next(user));
  }

    // token$ emits token (string) or null if logged out
  token$: Observable<string | null> = this.user$.pipe(
    switchMap((user) => (user ? from(user.getIdToken()) : of(null)))
  );


  signIn() {
    return signInWithPopup(auth, new GoogleAuthProvider());
  }

  signOut() {
    return signOut(auth);
  }
}