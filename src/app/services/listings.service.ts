import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Listing } from '../types';
import { filter, from, Observable, switchMap } from 'rxjs';
import { AuthService } from './auth.service.';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json',
  })
}

@Injectable({
  providedIn: 'root',
})
export class ListingsService {

  private baseUrl = 'https://buy-and-sell-f4c5a.ts.r.appspot.com/api';

  constructor(private http: HttpClient, private auth:AuthService) { }

  getAllListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.baseUrl}/listings`);
  }

  getListingById(listingId: string): Observable<Listing> {
    return this.http.get<Listing>(`${this.baseUrl}/listings/${listingId}`);
  }

  getListingsByUserId(userId: string): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.baseUrl}/users/${userId}/listings`);
  }

  getListingsForCurrentUser(): Observable<Listing[]> {
    return this.auth.user$.pipe(
      filter((u): u is NonNullable<typeof u> => !!u), // type guard: now user is not null
      switchMap((user) =>
        from(user.getIdToken()).pipe(
          switchMap((token) => {
            const headers = new HttpHeaders({
              Authorization: `Bearer ${token}`,
            });

            return this.http.get<Listing[]>(
              `${this.baseUrl}/users/${user.uid}/listings`,
              { headers }
            );
          })
        )
      )
    );
  }




  addViewToListing(listingId: string): Observable<Listing> {
    return this.http.patch<Listing>(`${this.baseUrl}/listings/${listingId}/views`, null);
  }

  createNewListing(newListing: Listing): Observable<Listing> {
    return this.http.post<Listing>(`${this.baseUrl}/listings`, newListing, httpOptions);
  }

  deleteListing(listingId: string): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/listings/${listingId}`);
  }

  updateListing(listingId: string, listing: Listing): Observable<Listing> {
    return this.http.put<Listing>(`${this.baseUrl}/listings/${listingId}`, listing, httpOptions);
  }



}
