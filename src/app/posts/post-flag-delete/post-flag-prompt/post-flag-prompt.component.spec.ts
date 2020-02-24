import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFlagPromptComponent } from './post-flag-prompt.component';

describe('PostFlagPromptComponent', () => {
  let component: PostFlagPromptComponent;
  let fixture: ComponentFixture<PostFlagPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFlagPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFlagPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
