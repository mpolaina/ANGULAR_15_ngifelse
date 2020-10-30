import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  constructor() {

    adminElements: [
      {
        nombre: 'Diseño de Entidades',
        img: '<i class="fal fa-object-group"></i>'
      },
      {
        nombre: 'Elementos',
        img: '<i class="fal fa-bring-front"></i>'
      },
      {
        nombre: 'Formularios',
        img: '<i class="fal fa-file-signature"></i>'
      }
    ]

  }

  ngOnInit(): void {
  }

}
