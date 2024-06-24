import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
addCustomer(formValue: NgForm) {
  console.log(formValue.value);
}

  firstname: string ='';
  terms: boolean=false;
  customerType: string ='';
  description: string ='';

  constructor() { }

  ngOnInit(): void {

    

  }
 
  resetForm(formValue:NgForm){
    formValue.resetForm();
  }

  loadValue(formValue:NgForm){
    let UserDetails={
      firstname:'Gaurav',
      terms:false,
      customerType: '1',
      description: 'sdfghjdfghj'
    }
    formValue.setValue(UserDetails);
  }
}
