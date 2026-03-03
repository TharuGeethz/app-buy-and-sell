import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListingsService } from '../services/listings.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listings',
  imports: [CommonModule, RouterLink],
  templateUrl: './listings.html',
  styleUrl: './listings.css',
})
export class Listings implements OnInit {

  allListings: Listing[] = [];

  constructor(private listingsService: ListingsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.listingsService.getAllListings().subscribe(listings => {
      this.allListings = listings;
      this.cdr.markForCheck();     // preferred for OnPush
      // // this.cdr.detectChanges();  // stronger bcz it forces immediate update
      console.log("allListings variable: ", this.allListings)
    });
  }



}
