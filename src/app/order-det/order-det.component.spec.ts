import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetComponent } from './order-det.component';

describe('OrderDetComponent', () => {
  let component: OrderDetComponent;
  let fixture: ComponentFixture<OrderDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetComponent]
    });
    fixture = TestBed.createComponent(OrderDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
