//because of the overflow-x:hidden I needed to use this to fix the smooth behavior

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SmoothScrollService {
  constructor() {}

  initSmoothScroll(): void {
    const anchors =
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();

        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
          'href'
        );
        if (targetId) {
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }
}
