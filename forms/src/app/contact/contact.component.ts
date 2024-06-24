import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormControl, FormGroup, MinLengthValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  addContactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  // trackContactName():void {
    // this.addContactForm.valueChanges.subscribe(data => {
    //   console.log(data);
    // })

    // this.addContactForm.get('contactName').valueChanges.subscribe(data => {
    //   console.log(data);
    // })
  // }

  ngOnInit(): void {

    
    // this.addContactForm=new FormGroup({
    //   'contactName': new FormControl(),
    //   'contactDescription' : new FormControl(),
    //   'contactType': new FormControl(),
    // })
    // this.addContactForm= this.fb.group({
    //   'contactName': new FormControl('gaurav'),
    //   'contactType': new FormControl('major'),
    //   'contactDescription' : new FormControl('1st'),
    // })

    this.addContactForm= this.fb.group({
      'contactName': new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20),
      ]),
      'contactType': new FormControl(),
      'contactDescription' : new FormControl('',[
        // Validators.required,
        // Validators.minLength(10),
        // Validators.maxLength(20),
      ]),
      'contactNumber': new FormControl(),
    })
    const newcontactObj={
      'contactName': 'gaurav',
      'contactType': 'major',
      'contactDescription' : 'dfghjkl',
      'contactNumber': '1234567890',
    }
    this.addContactForm.setValue(newcontactObj);
    //this.addContactForm.patchValue(newcontactObj);


    this.addContactForm.statusChanges.subscribe(data => {
      console.log(data);
    })
  }  
  

  addContact(){
    console.log(this.addContactForm);
  }

  reset(){
    this.addContactForm.reset();
  }
}
