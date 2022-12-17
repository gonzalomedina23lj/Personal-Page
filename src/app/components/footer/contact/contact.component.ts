import { Component, OnInit } from '@angular/core';
import { FormControl, NgControl, NgForm } from '@angular/forms';
import { formFields } from 'src/app/shared/formFields';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  submited = false;
  

  onSubmit(values: formFields):void { 
    this.submited=true;
    console.log("Form is submited!");
    console.log(values);

  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
