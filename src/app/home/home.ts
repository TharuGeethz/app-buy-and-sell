import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../services/listings.service';
import { Observable } from 'rxjs';
import { Listing } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  listings$!: Observable<Listing[]>;

  constructor(private router: Router, private listingService: ListingsService) { }

  ngOnInit(): void {
    this.listings$ = this.listingService.getAllListings();
  }

  navigateToBrowseListings() : void{
    this.router.navigate(['/listings']);
  }

  createNewListing() : void{
    this.router.navigate(['/new-listing']);
  }

}
