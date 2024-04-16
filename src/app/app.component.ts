import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}
  
  isMenuEnabled(): boolean {
 
    return this.router.url.includes('/tab1') || this.router.url.includes('/tab2');
  }
}

