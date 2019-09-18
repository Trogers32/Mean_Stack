import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'Home',component: HomeComponent },
  { path: 'AuthorQuotes/:id',component: QuotesComponent },
  { path: 'Author/:id', component: AddQuoteComponent },
  { path: 'Author/Edit/:id', component: EditAuthorComponent },
  { path: 'AuthorCreation', component: AddAuthorComponent },
  // redirect to /Home if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
