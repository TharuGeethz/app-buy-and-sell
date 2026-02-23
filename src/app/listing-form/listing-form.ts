import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-form',
  imports: [FormsModule],
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
  views: number=0;

  constructor(){
  }

  ngOnInit(): void {
    if(this.currentListing !== undefined){
      this.id = this.currentListing.id;
      this.name = this.currentListing.name;
      this.description = this.currentListing.description;
      this.price=this.currentListing.price.toString();
    }else{
      console.log("nothing..");
    }

  }


  onSubmit(): void {

    const currentListing:Listing = {
      id: this.id,
      name:this.name,
      description: this.description,
      price: Number(this.price),
      user_id:"",
      views:0
    }

    this.messageEvent.emit(currentListing);
  }

}
