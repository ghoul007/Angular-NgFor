import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackElementComponent } from './track-element.component';

describe('TrackElementComponent', () => {
  let component: TrackElementComponent;
  let fixture: ComponentFixture<TrackElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
