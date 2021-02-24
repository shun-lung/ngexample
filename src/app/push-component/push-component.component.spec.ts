import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushComponentComponent } from './push-component.component';

describe('PushComponentComponent', () => {
  let component: PushComponentComponent;
  let fixture: ComponentFixture<PushComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
