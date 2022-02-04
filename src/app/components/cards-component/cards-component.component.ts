import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss']
})
export class CardsComponentComponent implements OnInit {

  cards: any[] = [
    {
      "cardId": 1,
      "cardPrice":"$29.99",
      "cardText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "cardPicture":"/assets/pictures/stock-photo-close-up-doctor-is-bandaging-upper-limb-of-patient-563836756.png"

    },
    {
      "cardId": 2,
      "cardPrice":"$10.99",
      "cardText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "cardPicture":"/assets/pictures/stock-photo-doctor-hand-check-with-pencil-in-checkbox-positive-sign-677902390.png"

    },
    {
      "cardId": 3,
      "cardPrice":"FREE",
      "cardText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "cardPicture":"/assets/pictures/stock-photo-learning-to-heal-wounds-706383262.png"

    },
    {
      "cardId": 4,
      "cardPrice":"$39.99",
      "cardText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "cardPicture":"/assets/pictures/covek u kolicima.png"

    },
    {
      "cardId": 5,
      "cardPrice":"$59.99",
      "cardText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "cardPicture":"/assets/pictures/stock-photo-close-up-knee-replacement-surgery-after-operation-patient-on-the-bed-in-hospital-513458401.png"

    },
    {
      "cardId": 6,
      "cardPrice":"$FREE",
      "cardText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "cardPicture":"/assets/pictures/stock-photo-medical-examination-and-healthcare-business-graph-582412642.png"

    },
    {
      "cardId": 7,
      "cardPrice":"$49.99",
      "cardText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "cardPicture":"/assets/pictures/stock-photo-decontamination-and-disinfection-of-the-wound-on-his-knee-female-disinfects-the-wound-on-his-knee-457868701.png"

    },
    {
      "cardId": 8,
      "cardPrice":"$29.99",
      "cardText":"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "cardPicture":"/assets/pictures/stock-photo-wound-on-the-skin-body-with-collarbone-injury-the-operating-seam-is-visible-the-gauze-swab-is-1040391640.png"

    }

  ]






  constructor() { }

  ngOnInit(): void {
  }

}
