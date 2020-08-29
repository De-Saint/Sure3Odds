import { AuthenicationProvider } from './../../providers/authenication/authenication';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var jQuery:any;

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage  implements OnInit{
  loginForm: FormGroup;
  submitted = false;
  error: string;
  respData: any;
  constructor(private navCtrl: NavController, 
    private auth: AuthenicationProvider,
    private formBuilder: FormBuilder) {
  }
ngOnInit():void{
  this.loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });
}

  rootPage(page){
   
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(page) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.auth.login(this.f.email.value, this.f.password.value)
        .subscribe(resp => {
          this.respData = resp;
          console.log(this.respData.statusCode);
          if (this.respData.statusCode === 200) {
            this.navCtrl.setRoot(page);
          }else{
            this.error = this.respData.description;
            jQuery('.success-alert').removeClass('d-none');
            jQuery('.success-alert').addClass('alert alert-danger');
            jQuery('.success-alert').html(this.respData.description).fadeIn(1200);
            jQuery(".success-alert").fadeTo(2000, 500).slideUp(500, function () {
              jQuery(".success-alert").slideUp(500);
            });
          }

        }, error => {
          this.error = error;
        });
    }
  }

 
}
