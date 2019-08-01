import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuidlingComponent } from './buidling.component';

describe('BuidlingComponent', () => {
  let component: BuidlingComponent;
  let fixture: ComponentFixture<BuidlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuidlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuidlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
