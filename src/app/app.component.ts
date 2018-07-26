import { Component } from '@angular/core';
import { AppLibService } from './Services/app-lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public applib: AppLibService) {

  }
}
