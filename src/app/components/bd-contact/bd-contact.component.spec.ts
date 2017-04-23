/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BdContactComponent } from './bd-contact.component';

describe('BdContactComponent', () => {
  let component: BdContactComponent;
  let fixture: ComponentFixture<BdContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
