import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNetwirkComponent } from './my-netwirk.component';

describe('MyNetwirkComponent', () => {
  let component: MyNetwirkComponent;
  let fixture: ComponentFixture<MyNetwirkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNetwirkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNetwirkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
