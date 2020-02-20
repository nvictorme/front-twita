import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMetaComponent } from './user-meta.component';

describe('UserMetaComponent', () => {
  let component: UserMetaComponent;
  let fixture: ComponentFixture<UserMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
