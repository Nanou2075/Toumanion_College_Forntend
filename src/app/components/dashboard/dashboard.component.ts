import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,RouterOutlet,MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
