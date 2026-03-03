import { Component, OnInit } from '@angular/core';
import { ListingForm } from '../listing-form/listing-form';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';
import { ListingsService } from '../services/listings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-listing',
  imports: [ListingForm, CommonModule],
  templateUrl: './edit-listing.html',
  styleUrl: './edit-listing.css',
})
export class EditListing implements OnInit {

  currentListing$!: Observable<Listing>;
  editComponentMessage: string = 'Edit Listing';
  buttonText: string = "Save Changes"

  constructor(private router: Router, private route: ActivatedRoute, private listingsService: ListingsService) { }

  ngOnInit(): void {
    const curId = this.route.snapshot.paramMap.get('id');
    if (curId) this.currentListing$ = this.listingsService.getListingById(curId)

  }

  editListing(message: Listing): void {
    this.listingsService.updateListing(message.id, message).subscribe(res => {
      console.log(res)
      this.router.navigateByUrl('/my-listings');
    })

  }

}
