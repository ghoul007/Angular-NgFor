# Ngfor

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

---

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


---
## NgForOf

A structural directive that renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates.

[See more](https://angular.io/api/common/NgForOf#description)

```html
<ng-template ngFor [ngForOf]="data" [ngForTrackBy]="trackByIndex"
     let-cell let-i="index" let-odd="odd">
	{{i}}-{{cell.id}}/
</ng-template>

```
---

###  Index, First, Last, Even, odd

 - `index: number`: The index of the current item in the iterable.
 - `first: boolean`: True when the item is the first item in the iterable.
 - `last: boolean`: True when the item is the last item in the iterable.
 - `even: boolean`: True when the item has an even index in the iterable.
 - `odd: boolean`: True when the item has an odd index in the iterable.

 ```html
  <li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">
     {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
  </li>
 ```
