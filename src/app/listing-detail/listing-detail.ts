import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './listing-detail.html',
  styleUrl: './listing-detail.css',
})
export class ListingDetail implements OnInit {

  listing?: Listing;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.listing = fakeListings.find(listing=> listing.id === id);
    }



}
