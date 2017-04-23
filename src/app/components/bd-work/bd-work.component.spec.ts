/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BdWorkComponent } from './bd-work.component';

describe('BdWorkComponent', () => {
  let component: BdWorkComponent;
  let fixture: ComponentFixture<BdWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
