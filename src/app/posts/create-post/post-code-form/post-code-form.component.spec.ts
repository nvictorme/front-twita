import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCodeFormComponent } from './post-code-form.component';

describe('PostCodeFormComponent', () => {
  let component: PostCodeFormComponent;
  let fixture: ComponentFixture<PostCodeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCodeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
