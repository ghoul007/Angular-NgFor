# Ngfor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## TrackBy

The trackBy function takes the index and the current item as arguments and returns the unique identifier by which that item should be tracked

```diff
<ul>
- <li *ngFor="let todo of todos">{{todo.id}}</li>
+ <li *ngFor="let todo of todos; trackBy:trackElement ">{{todo.id}}</li>
</ul>
```

```js
  trackElement(index: number, element: any) {
    return element ? element.id : null
  }
```

|  Without trackBy | With trackBy  |
|---|---|
| <img src="https://raw.githubusercontent.com/ghoul007/Angular-NgFor/master/media/1.png" />  | <img src="https://raw.githubusercontent.com/ghoul007/Angular-NgFor/master/media/2.png" />  |



