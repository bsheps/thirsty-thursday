import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DrinkDetailsI } from 'src/app/interfaces/drinks';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent {

  constructor(public dialogRef: MatDialogRef<DrinkDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: DrinkDetailsI) { }
}
