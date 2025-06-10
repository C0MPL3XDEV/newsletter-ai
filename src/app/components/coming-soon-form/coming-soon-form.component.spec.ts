import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonFormComponent } from './coming-soon-form.component';

describe('ComingSoonFormComponent', () => {
  let component: ComingSoonFormComponent;
  let fixture: ComponentFixture<ComingSoonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComingSoonFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComingSoonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
