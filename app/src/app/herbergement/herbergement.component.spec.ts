import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbergementComponent } from './herbergement.component';

describe('HerbergementComponent', () => {
  let component: HerbergementComponent;
  let fixture: ComponentFixture<HerbergementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerbergementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerbergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
