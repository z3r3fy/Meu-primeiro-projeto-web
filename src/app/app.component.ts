import { Component,OnInit } from '@angular/core';
import { AuthService } from './shared/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FRONTEND';

  constructor(
    private authservice:AuthService
  ){}

  ngOnInit(): void {
    
  }

  isregistrated(){
    return this.authservice.isregistrated();
  }

}
