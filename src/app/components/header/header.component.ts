import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public _service: CommonService, private router: Router) { }

  ngOnInit() { }

  logout() {
    // routerLink="login"
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

}
