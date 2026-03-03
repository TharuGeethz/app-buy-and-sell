import { Routes } from '@angular/router';
import { Listings } from './listings/listings';
import { ListingDetail } from './listing-detail/listing-detail';
import { Contact } from './contact/contact';
import { MyListings } from './my-listings/my-listings';
import { EditListing } from './edit-listing/edit-listing';
import { NewListing } from './new-listing/new-listing';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:Home},
    {path:'about-us', component:AboutUs},
    {path: 'listings', component: Listings, pathMatch: 'full'},
    {path: 'listings/:id', component: ListingDetail},
    {path: 'contact/:id', component: Contact},
    {path: 'edit-listing/:id', component: EditListing},
    {path: 'my-listings', component: MyListings},
    {path: 'new-listing', component: NewListing}
];
