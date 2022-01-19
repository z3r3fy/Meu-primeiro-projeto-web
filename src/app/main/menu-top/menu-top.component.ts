import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/Auth.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {

  constructor(
    private authservice: AuthService 
  ) { }

  ngOnInit(): void {
  }

  isTelaLogin(){
    return this.authservice.isTelaLogin;
  }

}
