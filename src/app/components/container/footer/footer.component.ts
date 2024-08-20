import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialNetworkList = [
    {
      name: 'Youtube',
      icon: 'icons/ico_youtube.svg',
      link: 'https://www.youtube.com/@AngularCommunityPeru',
    },
    {
      name: 'Facebook',
      icon: 'icons/ico_facebook.svg',
      link: 'https://www.facebook.com/AngularPeruNG/?utm_source=landingNgConfPeru&utm_medium=section_footer&utm_campaign=landingNgConfPeru&utm_id=ngConfPeru',
    },
    {
      name: 'Twitter',
      icon: 'icons/ico_x.svg',
      link: 'https://x.com/AngularPeruNG/?utm_source=landingNgConfPeru&utm_medium=section_footer&utm_campaign=landingNgConfPeru&utm_id=ngConfPeru',
    },
    {
      name: 'Instagram',
      icon: 'icons/ico_instagram.svg',
      link: 'https://www.instagram.com/angularperu/?utm_source=landingNgConfPeru&utm_medium=section_footer&utm_campaign=landingNgConfPeru&utm_id=ngConfPeru',
    },
    {
      name: 'LinkedIn',
      icon: 'icons/ico_linkedin.svg',
      link: 'https://www.linkedin.com/company/angular-community-peru/?utm_source=landingNgConfPeru&utm_medium=section_footer&utm_campaign=landingNgConfPeru&utm_id=ngConfPeru',
    },
  ];
}
