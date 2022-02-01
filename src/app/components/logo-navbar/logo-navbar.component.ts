import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-navbar',
  templateUrl: './logo-navbar.component.html',
  styleUrls: ['./logo-navbar.component.scss']
})
export class LogoNavbarComponent implements OnInit {

  constructor() { }
  slideIndex: number = 1;
  ngOnInit(): void {
    this.showDivs(this.slideIndex);
  }



   plusDivs(n: any) {
    this.showDivs(this.slideIndex += n);
  }

   showDivs(n: any) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
      // @ts-ignore
      x[i].style.display = 'none';
    }
     // @ts-ignore
     x[this.slideIndex - 1].style.display = "flex";
  }
}
