import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListingForm } from '../listing-form/listing-form';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing',
  imports: [ListingForm],
  templateUrl: './edit-listing.html',
  styleUrl: './edit-listing.css',
})
export class EditListing implements OnInit {

  currentListing?: Listing;
  id: string = '';
  name: string = '';
  description: string = '';
  price: string = '';
  editComponentMessage: string = 'Edit Listing';
  buttonText: string = "Save Changes"


  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const curId = this.route.snapshot.paramMap.get('id');
    this.currentListing = fakeMyListings.find(myListing => myListing.id === curId);
  }

  editListing(message: Listing) {
    this.id = message.id;
    this.name = message.name;
    this.description = message.description;
    this.price = message.price.toString();
    alert(`Listing added with ${this.name} and ${this.description} and ${this.price} `);
    this.router.navigateByUrl('/my-listings');
  }

}
