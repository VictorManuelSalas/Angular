import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CursFundamentos';
  name: string = 'Manuel'
  age = 18;
  img: any = 'https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/313348912_6111870145540112_8446841635028844716_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BjgFbdNTXu0AX8L735H&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfCrNOoeYtYYdfEXnjGXdAq_2Ob3GBdaa8puQM3ruudgyg&oe=6360C39C'


  btnDisabled = true;


}
