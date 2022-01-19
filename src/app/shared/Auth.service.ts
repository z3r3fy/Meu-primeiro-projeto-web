import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute,NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isTelaLogin: boolean = false;

  usuario = {
    isregistrated: false,
    email: "",
    token: ""
  }

  constructor(
    private http: HttpClient,
    private activeRoute:ActivatedRoute,
    ) {}

  login(email: string, senha: string): Observable<any> {
    const credential = { email: email, password: senha };
    return this.http.post(`${environment.TELLESCOM_API}/login`, credential);
  }

  registra(token: string) {
    this.usuario = {
      isregistrated: true,
      email: "",
      token: token
    };
    localStorage.setItem("email",'teste@teste.com');
    localStorage.setItem("token",token);

   // this.activeRoute.navigate("login");

  }

  unRegistra(token: string) {
    this.usuario = {
      isregistrated: false,
      email: "",
      token: ""
    };
    localStorage.clear();
  }

  isregistrated(){
    return this.usuario.isregistrated;
  }


}
