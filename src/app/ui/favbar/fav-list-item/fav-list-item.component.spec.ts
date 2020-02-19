import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavListItemComponent } from './fav-list-item.component';

describe('FavListItemComponent', () => {
  let component: FavListItemComponent;
  let fixture: ComponentFixture<FavListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
