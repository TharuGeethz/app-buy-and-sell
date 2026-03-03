import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingForm } from '../listing-form/listing-form';
import { Listing } from '../types';
import { ListingsService } from '../services/listings.service';
import { AuthService } from '../services/auth.service.';
import { take } from 'rxjs';

@Component({
  selector: 'app-new-listing',
  imports: [ListingForm],
  templateUrl: './new-listing.html',
  styleUrl: './new-listing.css',
})
export class NewListing {
  newComponentMessage: string = 'Create your new listing';
  buttonMessage: string = "Create New Listing";

  constructor(private router: Router, private listingService: ListingsService, private authservice: AuthService) {

  }

addListing(message: Listing): void {
  this.authservice.user$
    .pipe(take(1))
    .subscribe(user => {

      if (!user) {
        console.error('User not logged in');
        return;
      }

      message.user_id = user.uid;

      this.listingService.createNewListing(message).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/my-listings');
      });

    });
}

}
