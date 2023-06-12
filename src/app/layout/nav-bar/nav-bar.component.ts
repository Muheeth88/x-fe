import { ChangeDetectorRef, Component, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private router: Router) { }


  ngOnInit(): void {
  }

  goToHomePage() {
    this.router.navigate(["/",])
  }

  goToMyProfile() {
    this.router.navigate(["/", "profile"])
  }
}
