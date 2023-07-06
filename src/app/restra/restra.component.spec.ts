import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestraComponent } from './restra.component';

describe('RestraComponent', () => {
  let component: RestraComponent;
  let fixture: ComponentFixture<RestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
