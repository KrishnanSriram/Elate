/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BdServicesComponent } from './bd-services.component';

describe('BdServicesComponent', () => {
  let component: BdServicesComponent;
  let fixture: ComponentFixture<BdServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
