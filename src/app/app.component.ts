import { Component, Input, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    usuario: string = 'Manuel'

    admin:boolean = false

    cargarAdmin(){

      this.admin = !this.admin
    }

}
