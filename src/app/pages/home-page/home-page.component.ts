import { Component } from '@angular/core';
import { FooterComponent } from '../../components/container/footer/footer.component';
import { HeaderComponent } from '../../components/container/header/header.component';
import { TeamComponent } from '../../components/container/team/team.component';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [FooterComponent, HeaderComponent, TeamComponent],
})
export class HomePageComponent {
  members = [
    {
      name: 'Jimy Dolores',
      role: 'Senior Frontend Architect',
      imgSrc: '../icons/headshot_Jimy_Dolores.jpeg',
      linkedinUrl: 'https://linkedin.com/in/jimy',
    },
    {
      name: 'Kevin Dávila',
      role: 'Senior Frontend Developer',
      imgSrc: '../icons/headshot_Kevin_Davila.jpg',
      linkedinUrl: 'https://linkedin.com/in/kevin',
    },
    {
      name: 'Luis Eduardo Pérez',
      role: 'Senior Frontend Developer',
      imgSrc: '../icons/headshot_Luis_Eduardo.JPEG',
      linkedinUrl: 'https://linkedin.com/in/luis',
    },
    {
      name: 'Shirley Ramos',
      role: 'Ssr Frontend Developer & UI designer',
      imgSrc: '../icons/headshot_ShirleyRamos.jpeg',
      linkedinUrl: 'https://linkedin.com/in/shirley',
    },
    {
      name: 'Betany Gonzales',
      role: 'Senior Frontend Developer',
      imgSrc: '../icons/headshot_Betany_Gonzales.jpeg',
      linkedinUrl: 'https://linkedin.com/in/betany',
    },
  ];
}
