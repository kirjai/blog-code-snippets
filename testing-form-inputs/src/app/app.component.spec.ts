/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

let getInput = (debugElement: DebugElement): DebugElement => {
  return debugElement.query(By.css('#mainInput'));
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create an instance', () => {
    expect(component).toBeDefined();
  });

  it('should bind the input to correct property', () => {
    fixture.detectChanges();
    let input = getInput(debugElement);
    let inputElement = input.nativeElement;
    inputElement.value = 'test value';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.myValue).toBe('test value');
  });

  it('should do something on blur', () => {
    // test prep
    spyOn(component, 'someMethod');

    // test start
    fixture.detectChanges();
    let input = getInput(debugElement);
    let inputElement = input.nativeElement;
    inputElement.dispatchEvent(new Event('blur'));
    expect(component.someMethod).toHaveBeenCalled();
  });
});
