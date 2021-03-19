import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  edadUno = 0;
  edadDos = 0;
  suma = 0;
  promedio = 0;

  profileForm = new FormGroup({
    edadUnoInput: new FormControl(''),
    edadDosInput: new FormControl(''),
    sumaInput: new FormControl(''),
    promedioInput: new FormControl('')
  });


  calcularClickHandler() {
    this.edadUno = Number(this.profileForm.value.edadUnoInput);
    this.edadDos = Number(this.profileForm.value.edadDosInput);
    this.suma = this.edadUno + this.edadDos;
    this.profileForm.patchValue({
      sumaInput: this.suma,
      promedioInput: this.suma / 2
    });
  }

  limpiarClickHandler() {
    this.profileForm.patchValue({
      sumaInput: '',
      promedioInput: '',
      edadUnoInput: '',
      edadDosInput: ''
    });
  }
}
