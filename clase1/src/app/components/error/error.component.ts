import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorMsg = 'Ha ocurrido un error';

  constructor() { }

  ngOnInit(): void {
  }


}
