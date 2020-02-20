import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentPostsComponent } from './user-recent-posts.component';

describe('UserRecentPostsComponent', () => {
  let component: UserRecentPostsComponent;
  let fixture: ComponentFixture<UserRecentPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecentPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
