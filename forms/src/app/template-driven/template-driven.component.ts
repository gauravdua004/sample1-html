import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  generalDetails(formValue: NgForm) {
    console.log(formValue.value);
  }
  
    firstname: string ='';
    lastname: string ='';
    gender: string='';
    rollno: string ='';
    description: string='';
    terms: boolean=false;
  
    constructor() { }
  
    ngOnInit(): void {
    
  
      
  
    }
   
    resetForm(formValue:NgForm){
      formValue.resetForm();
    }
    loadValue(formValue:NgForm){
      let UserDetails={
        firstname:'gaurav',
        lastname: 'Dua',
        gender: '1',
        rollno: 2236780,
        description: 'in 2nd year',
        terms: true,
       
      }
      
      formValue.setValue(UserDetails);
      }

      onSubmit(){
        console.log(this.generalDetails);
      }
  
    
  }
