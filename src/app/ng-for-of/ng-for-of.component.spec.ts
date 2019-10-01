import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForOfComponent } from './ng-for-of.component';

describe('NgForOfComponent', () => {
  let component: NgForOfComponent;
  let fixture: ComponentFixture<NgForOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
