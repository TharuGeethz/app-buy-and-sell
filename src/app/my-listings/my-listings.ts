import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListingsService } from '../services/listings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-listings',
  imports: [CommonModule, RouterLink],
  templateUrl: './my-listings.html',
  styleUrl: './my-listings.css',
})
export class MyListings implements OnInit {

  myListings$!: Observable<Listing[]>;

  constructor(private listingsService: ListingsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.myListings$ = this.listingsService.getListingsForCurrentUser();
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId).subscribe(res => {
      console.log(res);
      this.myListings$ = this.listingsService.getListingsForCurrentUser();
      this.cdr.markForCheck();
    });
  }

}
