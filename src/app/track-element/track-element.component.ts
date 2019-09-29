import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-element',
  templateUrl: './track-element.component.html',
  styleUrls: ['./track-element.component.scss']
})
export class TrackElementComponent implements OnInit {
  todos: { "userId": number; "id": number; "title": string; "completed": boolean; }[];

  constructor() {


    this.todos = [

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

  ngOnInit() {
  }

  trackElement(index: number, element: any) {
    return element ? element.id : null
  }

  refreshBtn() {
    this.todos =

    [

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
         {
        "userId": 1,
        "id": 7,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
    ]
  }


}
