import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopsCountFilterComponent } from './stops-count-filter.component';

describe('StopsCountFilterComponent', () => {
  let component: StopsCountFilterComponent;
  let fixture: ComponentFixture<StopsCountFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopsCountFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopsCountFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
