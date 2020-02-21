import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPerformanceGaugeComponent } from './user-performance-gauge.component';

describe('UserPerformanceGaugeComponent', () => {
  let component: UserPerformanceGaugeComponent;
  let fixture: ComponentFixture<UserPerformanceGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPerformanceGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPerformanceGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
