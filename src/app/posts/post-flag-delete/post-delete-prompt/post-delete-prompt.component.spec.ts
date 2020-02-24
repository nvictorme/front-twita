import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeletePromptComponent } from './post-delete-prompt.component';

describe('PostDeletePromptComponent', () => {
  let component: PostDeletePromptComponent;
  let fixture: ComponentFixture<PostDeletePromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDeletePromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDeletePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
