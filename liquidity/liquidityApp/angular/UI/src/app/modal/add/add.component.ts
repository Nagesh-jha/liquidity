import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addUserForm: FormGroup;

  constructor() {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    })

  }

  ngOnInit() {
  }

}
