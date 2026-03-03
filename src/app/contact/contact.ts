import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { FormsModule } from '@angular/forms';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  email: string = 'example@gmail.com';
  message: string = '';
  listing?: Listing;


  constructor(private route: ActivatedRoute, private router: Router,
    private listingsService : ListingsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const listingId = this.route.snapshot.paramMap.get('id');
    if(listingId) this.listingsService.getListingById(listingId).subscribe(listing=> {
      this.listing = listing;
      this.message = `Hi, I'm interested in ${this.listing?.name.toLowerCase()}!`;
      this.cdr.markForCheck();
    });

  }

  sendMessage(): void {
    alert("Message has been sent to the seller!");
    this.router.navigateByUrl('/listings');
  }

}
