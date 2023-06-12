import { Component } from '@angular/core';

interface Icon {
  name: string;
  path: string;
  link: string;
}

@Component({
  selector: 'app-dream-nav-bar',
  templateUrl: './dream-nav-bar.component.html',
  styleUrls: ['./dream-nav-bar.component.scss']
})
export class DreamNavBarComponent {

  socialIcons: Icon[] = [
    { name: 'Github', path: 'icons8-github-500.png', link: 'https://github.com/Daniel-Ope06' },
    { name: 'LinkedIn', path: 'icons8-linkedin-500.png', link: 'https://linkedin.com/in/opeoluwa-oyedeji' },
    { name: 'YouTube', path: 'icons8-youtube-500.png', link: 'https://www.youtube.com/@daniel_ope' },
    { name: 'Email', path: 'icons8-mail-500.png', link: 'mailto:opeoluwaoyedeji06@gmail.com' }
  ];

}
