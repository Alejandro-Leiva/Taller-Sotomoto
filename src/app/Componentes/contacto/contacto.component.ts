import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 // private phonePattern: any = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;


  constructor() {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  createFormGroup(){
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      checkbox: new FormControl(false, [Validators.requiredTrue])
    });
  }

  resetForm(){
    this.contactForm.reset();
  }

  sendForm(){
    console.log('Sending form');
    console.log(this.contactForm.controls['name'].value);
    console.log(this.contactForm.controls['email'].value);
    console.log(this.contactForm.controls['message'].value);
    console.log(this.contactForm.controls['subject'].value);
    window.location.href = 'mailto:' + this.contactForm.controls['email'].value + 'subject:' +
    this.contactForm.controls['subject'].value + 'body:' + this.contactForm.controls['name'].value +
    this.contactForm.controls['message'].value + this.contactForm.controls['phone'];

    if(this.contactForm.valid){
      console.log('Message sended');
    }
    else {
      console.log('Error');
    }
  }

  get name(){
    return this.contactForm.get('name')
  }

  get phone(){
    return this.contactForm.get('phone')
  }

  get email(){
    return this.contactForm.get('email')
  }

  get subject(){
    return this.contactForm.get('subject')
  }

  get message(){
    return this.contactForm.get('message')
  }

  get checkbox(){
    return this.contactForm.get('checkbox')
  }

}
