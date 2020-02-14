import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import FroalaEditor from 'froala-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'froala-material-bug';

  froalaToolbar: string[] = ['dialogButton'];
  froalaOptions: any = {
    toolbarButtons: this.froalaToolbar,
    toolbarButtonsXS: this.froalaToolbar,
    toolbarButtonsSM: this.froalaToolbar,
    toolbarButtonsMD: this.froalaToolbar
  }

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    let component: AppComponent = this;

    FroalaEditor.DefineIcon('dialogButtonIcon', { NAME: 'dialog', SVG_KEY:'help'});
    // Define a button.
    FroalaEditor.RegisterCommand('dialogButton', {
      // Button title and tooltip.
      title: 'Open dialog',
      // Specify the icon for the button.
      // If this option is not specified, the button name will be used.
      icon: 'dialogButtonIcon',
      // Save the button action into undo stack.
      undo: true,
      // Focus inside the editor before the callback.
      focus: true,
      // Show the button on mobile or not.
      showOnMobile: false,
      // Refresh the buttons state after the callback.
      refreshAfterCallback: true,
      // Called when the button is hit.
      callback: function () {
        component.openDialog();
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '70%',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
