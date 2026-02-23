import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-listings',
  imports: [CommonModule, RouterLink],
  templateUrl: './my-listings.html',
  styleUrl: './my-listings.css',
})
export class MyListings implements OnInit {

  myListings : Listing[] = [];


  ngOnInit(): void {
    this.myListings = fakeMyListings;
  }

  onDeleteClicked(listingId: string):void {
    alert(`The listing was deleted with id ${listingId}`)
  }




  




}
