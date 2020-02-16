import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavbarComponent } from './favbar.component';

describe('FavbarComponent', () => {
  let component: FavbarComponent;
  let fixture: ComponentFixture<FavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
