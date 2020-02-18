import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTextFormComponent } from './post-text-form.component';

describe('PostTextFormComponent', () => {
  let component: PostTextFormComponent;
  let fixture: ComponentFixture<PostTextFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTextFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
