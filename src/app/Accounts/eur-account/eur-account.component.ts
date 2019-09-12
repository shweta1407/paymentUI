import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-eur-account',
  templateUrl: './eur-account.component.html',
  styleUrls: ['./eur-account.component.css']
})
export class EurAccountComponent implements OnInit {

  account_number="xx556GGh9901";
  type="Savings";
  balance="€ 889,998";

  get_receipient_name: string;
  get_account_number: string;
  get_amount: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { receipient_name: this.get_receipient_name, account_number: this.get_account_number, amount: this.get_amount },
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(result);
      if (result === '') { // <- This is not ok, should check for undefined, not empty string
        console.log('The user has cancelled the operation');
      } else {
        console.log('The user has confirmed the operation');
        this.get_receipient_name = result.get_receipient_name;
        this.get_account_number = result.get_account_number;
        this.get_amount = result.get_amount;
      }
    });
  }

  ngOnInit() {
  }

  addHandleClick() {
    
    
  }

  viewHandleClick() {
    
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'eur-dialog-box.html',
})
export class DialogOverviewExampleDialog {

    description = "Enter these details to add transaction";

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {   } 
}
