import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listings',
  imports: [CommonModule, RouterLink],
  templateUrl: './listings.html',
  styleUrl: './listings.css',
})
export class Listings implements OnInit {

  allListings : Listing[] = [];

  constructor() {}

  ngOnInit(): void {

    this.allListings =  fakeListings;

  }



}
