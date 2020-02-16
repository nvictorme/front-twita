import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabReplyComponent } from './fab-reply.component';

describe('FabReplyComponent', () => {
  let component: FabReplyComponent;
  let fixture: ComponentFixture<FabReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
