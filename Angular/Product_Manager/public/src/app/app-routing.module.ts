import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  { path: 'Home',component: HomeComponent },
  { path: 'ProductList',component: ProductListComponent },
  { path: 'ProductList/Edit/:id', component: EditProductComponent },
  { path: 'ProductCreation', component: ProductCreationComponent },
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
