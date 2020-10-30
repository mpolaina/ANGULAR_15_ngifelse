import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  cargarAdmin(){
    this.newItemEvent.emit()
    document.getElementById('modulos').classList.remove('show')
  }

}
