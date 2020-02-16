import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabTwitaComponent } from './fab-twita.component';

describe('FabTwitaComponent', () => {
  let component: FabTwitaComponent;
  let fixture: ComponentFixture<FabTwitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabTwitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabTwitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
