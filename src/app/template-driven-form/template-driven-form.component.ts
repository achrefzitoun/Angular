import { Component, OnInit } from '@angular/core';
import { Atelier } from '../core/model/Atelier';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  atelier!:Atelier;
  constructor() { }

  ngOnInit(): void {
    this.atelier= new Atelier;
  }

}
