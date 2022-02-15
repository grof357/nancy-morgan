import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {



  cards: any[] = [
    {
      "cardId": 1,
      "firstCardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
      "cardPicture":"/assets/pictures/Edema-lymphatic-diagnosis-on-blue-folder-with-stethoscope.-516797034_4912x3264-scaled-1000x500.png",
      "cardDate": "JULY 25, 2020",
      "secondCardText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      "secondCardSubtitle":"LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING",
      "secondCardPicture":"/assets/pictures/glavusa4.png",
      "secondCardName":"Susan Andrews",
      "secondCardProfession":"Registered Nurse"

    },
    {
      "cardId": 2,
      "firstCardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
      "cardPicture":"/assets/pictures/stock-photo-surgeon-medical-people-handshaking-doctors-and-nurses-in-a-medical-team-stacking-handscross-595903445.png",
      "cardDate": "JUNE 19, 2020",
      "secondCardText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      "secondCardSubtitle":"LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING",
      "secondCardPicture":"/assets/pictures/glavusa2.png",
      "secondCardName":"William Alexander",
      "secondCardProfession":"Pediatrician"
    },
    {
      "cardId": 3,
      "firstCardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
      "cardPicture":"/assets/pictures/stock-photo-medical-staff-working-at-the-hospital-doctor-and-nurse-checking-a-patient-s-medical-record-on-a-772546597.png",
      "cardDate": "JUNE 8, 2020",
      "secondCardText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      "secondCardSubtitle":"LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING",
      "secondCardPicture":"/assets/pictures/glavusa3.png",
      "secondCardName":"Jennifer Jones",
      "secondCardProfession":"Registered Nurse"

    },
    {
      "cardId": 4,
      "firstCardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
      "cardPicture":"/assets/pictures/stock-photo-learning-to-heal-wounds-706383262.png",
      "cardDate": "MAY 28, 2020",
      "secondCardText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      "secondCardSubtitle":"LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING",
      "secondCardPicture":"/assets/pictures/glavusa5.png",
      "secondCardName":"James John",
      "secondCardProfession":"Surgeon"

    }

  ]




  constructor() { }

  ngOnInit(): void {
  }

}
