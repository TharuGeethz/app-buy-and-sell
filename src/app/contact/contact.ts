import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { FormsModule } from '@angular/forms';

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

  constructor(private route:ActivatedRoute, private router: Router)
  {}

  ngOnInit(): void {
    const listingId = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing=> listing.id === listingId);
    this.message = `Hi, I'm interested in ${this.listing?.name.toLowerCase()}!`;
  }

  sendMessage(): void{
    alert("Message has been sent to the seller!");
    this.router.navigateByUrl('/listings');
  }

}
