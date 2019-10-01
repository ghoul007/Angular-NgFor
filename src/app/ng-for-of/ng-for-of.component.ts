import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-of',
  templateUrl: './ng-for-of.component.html',
  styleUrls: ['./ng-for-of.component.scss']
})
export class NgForOfComponent implements OnInit {
    data: any [] = []

  constructor() {


   }

  ngOnInit() {
      this.data = [

      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
    ]

  }

      trackByIndex(index: number, item: any) { return index; }

}
