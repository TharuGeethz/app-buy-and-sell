import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './listing-form.html',
  styleUrl: './listing-form.css',
})
export class ListingForm implements OnInit {
  @Input() componentMessage: string = '';
  @Input() buttonMessage: string = '';
  @Input() currentListing?: Listing;
  @Output() messageEvent = new EventEmitter<Listing>();

  id: string = '';
  name: string = '';
  description: string = '';
  price: string = '';
  views: number = 0;
  user_id: string = "";

  constructor() {
  }

  ngOnInit(): void {
    if (this.currentListing !== undefined) {
      this.id = this.currentListing.id;
      this.name = this.currentListing.name;
      this.description = this.currentListing.description;
      this.price = this.currentListing.price.toString();
      this.views = this.currentListing.views;
      this.user_id = this.currentListing.user_id;
    }

  }


  onSubmit(): void {
    const currentListing: Listing = {
      id: this.id,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      user_id: this.user_id,
      views: this.views
    }

    this.messageEvent.emit(currentListing);
  }

}
