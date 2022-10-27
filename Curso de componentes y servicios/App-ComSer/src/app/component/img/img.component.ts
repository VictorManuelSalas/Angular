import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() nameSchol: any;
  //vARIABLE PARA RECIBIR DEL PADRE
  @Input() img: any;
  constructor() { }

  ngOnInit(): void {
  }

}
