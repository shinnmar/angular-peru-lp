import { Component } from '@angular/core';
import { FooterComponent } from '../../components/container/footer/footer.component';
import { HeaderComponent } from '../../components/container/header/header.component';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [FooterComponent, HeaderComponent],
})
export class HomePageComponent {

}
