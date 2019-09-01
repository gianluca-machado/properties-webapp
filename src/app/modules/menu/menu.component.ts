import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public isCollapsed = false;

  /**
   * @ignore
   */
  constructor(
    private router: Router,
  ) { }

  /**
   * @ignore
   */
  ngOnInit() { }

  logout() {
    this.router.navigate(['login']);
  }

}
