import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 // private phonePattern: any = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

 name: FormControl = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]);
 phone: FormControl = new FormControl('', [Validators.required]);
 email: FormControl = new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]);
 message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(100)]);
 honeypot: FormControl = new FormControl('');
 submitted: boolean = false;
 isLoading: boolean = false;
 responseMessage: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
   // this.contactForm = this.createFormGroup();
   this.form = this.formBuilder.group({
     name: this.name,
     phone: this.phone,
     email: this.email,
     message: this.message,
     honeypot: this.honeypot
   });
   }

  ngOnInit(): void {
  }

  /*createFormGroup(){
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }*/

 /* resetForm(){
    this.contactForm.reset();
  }*/

  sendForm(){
   /* console.log('Sending form');
    console.log(this.contactForm.controls['name'].value);
    console.log(this.contactForm.controls['phone'].value);
    console.log(this.contactForm.controls['email'].value);
    console.log(this.contactForm.controls['message'].value);
    window.location.href = 'mailto: ' + this.contactForm.controls['email'] + 'body: ' + this.contactForm.controls['name'].value + "" +
    this.contactForm.controls['message'].value + "" + this.contactForm.controls['phone'];

    if(this.contactForm.valid){
      console.log('Message sended');
    }
    else {
      console.log('Error');
    }*/

    if (this.form.status == "VALID" && this.honeypot.value == ""){
      this.form.disable();
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("phone", this.form.get("phone").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value);

      this.isLoading = true;
      this.submitted = false;
      this.http.post("https://script.google.com/macros/s/AKfycbxuDmyCWUhUF-8Rk3GgWnRcIPItsNxZB7EhZQeJTW5dO1BcrYk/exec", formData).subscribe(
        (response) => {
          if (response["result"] == "success"){
            this.responseMessage ="Gracias por el mensaje";
          } else{
            this.responseMessage = "Ha habido un error al enviar el mensaje, prueba de nuevo";
          }
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
        },
        (error) => {
          this.responseMessage ="Ha ocurrico un error... Recarga la página";
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        }
      );
    }

  }
/*
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
*/
}
