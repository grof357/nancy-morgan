import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-library',
  templateUrl: './resource-library.component.html',
  styleUrls: ['./resource-library.component.scss']
})
export class ResourceLibraryComponent implements OnInit {

  cards: any[] = [
    {
      "cardId": 1,
      "cardResourceItem":"Resource Item 1",
      "cardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      "cardPicture":"/assets/pictures/effective_wound_cleaning_1000x500-1000x500.png"

    },
    {
      "cardId": 2,
      "cardResourceItem":"Resource Item 2",
      "cardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      "cardPicture":"/assets/pictures/what_to_do_when_the_basics_1000x500.png"

    },
    {
      "cardId": 3,
      "cardResourceItem":"Resource Item 3",
      "cardText":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
      "cardPicture":"/assets/pictures/understanding_positioning_and_support_surfaces_1000x500.png"

    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
