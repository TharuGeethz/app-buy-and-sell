import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingForm } from '../listing-form/listing-form';
import { Listing } from '../types';

@Component({
  selector: 'app-new-listing',
  imports: [ ListingForm],
  templateUrl: './new-listing.html',
  styleUrl: './new-listing.css',
})
export class NewListing {

  constructor(private router: Router){

  }

  name: string = '';
  description: string = '';
  price: string = '';
 

  newComponentMessage: string = 'New Listing!!!';
  buttonMessage: string = "Create New Listing";



    addListing(message: Listing){
      this.name=message.name;
      this.description = message.description;
      this.price = message.price.toString();
      console.log(message);
 
   
     alert(`Listing added with ${this.name} and ${this.description} and ${this.price} `);
     this.router.navigateByUrl('/my-listings');
  }

}
