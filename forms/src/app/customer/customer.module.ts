import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: CustomerComponent }
];

@NgModule({
  declarations: [
    CustomerComponent,
   
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
