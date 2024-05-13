import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressboxComponent } from './addressbox.component';

describe('AddressboxComponent', () => {
  let component: AddressboxComponent;
  let fixture: ComponentFixture<AddressboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
