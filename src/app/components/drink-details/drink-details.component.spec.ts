import { OverlayContainer } from '@angular/cdk/overlay/';
import { Component, DebugElement, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DrinkDetailsComponent } from './drink-details.component';

describe('DrinkDetailsComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let noop: ComponentFixture<DummyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DialogTestModule],
      providers: [
        {
          provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ]
    });

    dialog = TestBed.inject(MatDialog);
    noop = TestBed.createComponent(DummyComponent);
  });

  it('should create drink details dialog component', () => {
    expect(dialog).toBeTruthy();
  });
});

@Component({
  template: ''
})
class DummyComponent { }

const TEST_DIRECTIVES = [
  DrinkDetailsComponent,
  DummyComponent
];

@NgModule({
  imports: [MatDialogModule, NoopAnimationsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    DrinkDetailsComponent
  ],
})
class DialogTestModule { }
