import { Component } from '@angular/core';
import { RouterModule,RouterLink } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule,RouterLink,NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
