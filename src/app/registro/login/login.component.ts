import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/shared/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  alert: any;

  ispenner = false;

  constructor(
    private fb: FormBuilder, 
    private authservice: AuthService
    ) {
    this.authservice.isTelaLogin = true;
  }

  ngOnInit(): void {
    this.gerarForm();
    this.form.controls.email.setValue('teste@teste.com');
    this.form.controls.senha.setValue('password');
  }
  gerarForm() {
    //metodo de mapear o formulario
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // obriga a ser um email
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  // ação de logar
  logar() {
    this.ispenner = true;
    this.authservice
      .login(this.form.controls.email.value, this.form.controls.senha.value)
      .subscribe((res) => {
        if (res.error) {
          console.log(res.error); // mostrar alerta e fazer controle de 3 tentativas
        } else if (res.token) {
          this.authservice.registra(res.token); // criar registro
        }
        this.ispenner = false;
      });
  }
}
