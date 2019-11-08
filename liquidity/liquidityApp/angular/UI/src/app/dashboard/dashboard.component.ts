import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddComponent } from '../modal/add/add.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user_list: any = [{ id: '1', name: 'alka', email: 'alka.alka@gmail.com', phone: '9878676877', department: 'computer' }, { id: '2', name: 'alka', email: 'alka.alka@gmail.com', phone: '9878676877', department: 'computer' }]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  addUser(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      // width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
