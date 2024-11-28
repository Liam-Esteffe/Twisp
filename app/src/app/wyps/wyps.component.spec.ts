import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WypsComponent } from './wyps.component';

describe('WypsComponent', () => {
  let component: WypsComponent;
  let fixture: ComponentFixture<WypsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WypsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WypsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
