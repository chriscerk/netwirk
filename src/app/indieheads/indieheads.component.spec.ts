import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndieheadsComponent } from './indieheads.component';

describe('IndieheadsComponent', () => {
  let component: IndieheadsComponent;
  let fixture: ComponentFixture<IndieheadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndieheadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndieheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
