import { Component } from '@angular/core';
import { CardComponent } from '../../components/common/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '../../models/logindto';
import { ApiResponse } from '../../models/apiresponse';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private _authService: AuthService){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  

  submit(){
    if(this.loginForm.valid){
      const loginDto = new LoginDto();
      loginDto.Email = this.loginForm.value.email;
      loginDto.Password = this.loginForm.value.password;

      this._authService.login(loginDto).subscribe((res: ApiResponse) => {
        if(res.isSuccess){
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          this.router.navigate(["/home"]);
        }
        else{
          alert(res.message);
        }
      })
    }
  }  
}
