import { Component, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, MinLengthValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  addDetails: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.addDetails= this.fb.group({
      'firstName': new FormControl('',[
        Validators.required,
        Validators.minLength(6),
      ]),
      'lastName': new FormControl(),
      'gender': new FormControl(),
      'rollno': new FormControl(),
      'description': new FormControl(),
      'terms': new FormControl(),

    })
  }
    
  addData(){
    console.log(this.addDetails.value);
  }
  reset(){
    this.addDetails.reset();
  }
  loadValues(){
    let UserDetails={
    'firstName': 'Gaurav',
    'lastName': 'Dua',
    'gender': '1',
    'rollno': '1234567890',
    'description': 'in 2nd year',
    'terms': 'true'
    
  }
  this.addDetails.setValue(UserDetails);

}
onSubmit(){
  console.log(this.addDetails.value);
}
}


