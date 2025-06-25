import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleBackgroundComponent } from './ripple-background.component';

describe('RippleBackgroundComponent', () => {
  let component: RippleBackgroundComponent;
  let fixture: ComponentFixture<RippleBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippleBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RippleBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
