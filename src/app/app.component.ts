import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private toastr: ToastrService) {}
  
  faCoffee =faCoffee;

  title = 'x-fe';
  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
