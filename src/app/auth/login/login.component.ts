import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackbarService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm(this.formBuilder)
  }

  private createForm(form: FormBuilder){
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit(){
    this.snackBarService.openSnackBar(`Olá digitou certinho!`, '', 'Success');
    if(this.formLogin.valid){
      this.snackBarService.openSnackBar(`Olá digitou certinho!`, '', 'Success');
      console.log(this.formLogin.value)
      this.router.navigate(['/home'])
    }
  }

}
