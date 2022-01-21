import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomeComponent } from './home/home.component';
import { ReportingComponent } from './reporting/reporting.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'detailsProduit', component: DetailsProductComponent },
  { path: 'manageStock', component: ManageStockComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reporting', component: ReportingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
