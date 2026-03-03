import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';
import { ListingsService } from '../services/listings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listing-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './listing-detail.html',
  styleUrl: './listing-detail.css',
})
export class ListingDetail implements OnInit {


  listing$!: Observable<Listing>;

  constructor(private route: ActivatedRoute, private listingsService: ListingsService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.listing$ = this.listingsService.getListingById(id);

      this.listingsService.addViewToListing(id).subscribe(l => {
        if (l) console.log("View count updated");
      });
    }
  }

}
