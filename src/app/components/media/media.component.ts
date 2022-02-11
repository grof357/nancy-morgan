import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {


  cards: any[] = [
    {
      "cardId": 1,
      "cardProduct":"Product symposium 2c_1",
      "cardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      "cardPicture":"/assets/pictures/batica.png"

    },
    {
      "cardId": 2,
      "cardProduct":"Product symposium 2c_1",
      "cardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      "cardPicture":"/assets/pictures/batica.png"

    },
    {
      "cardId": 3,
      "cardProduct":"Product symposium 2c_1",
      "cardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      "cardPicture":"/assets/pictures/batica.png"

    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
