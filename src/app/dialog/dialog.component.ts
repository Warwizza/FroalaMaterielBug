import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  title: string = 'Dialog title bound from the ts file';
  content: string = 'Dialog content bound from the ts file';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
