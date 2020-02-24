import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFlagDeleteComponent } from './post-flag-delete.component';

describe('PostFlagDeleteComponent', () => {
  let component: PostFlagDeleteComponent;
  let fixture: ComponentFixture<PostFlagDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFlagDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFlagDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
