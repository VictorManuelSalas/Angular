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

  //Objeto para  usar con Property Binding
  person = {
    name: 'Federico',
    age: 18,
    img: 'https://scontent.ftrc2-1.fna.fbcdn.net/v/t39.30808-6/313348912_6111870145540112_8446841635028844716_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BjgFbdNTXu0AX8L735H&_nc_ht=scontent.ftrc2-1.fna&oh=00_AfCrNOoeYtYYdfEXnjGXdAq_2Ob3GBdaa8puQM3ruudgyg&oe=6360C39C'
  }


  btnAbilitar() {
    //Aqui ponemos que esa variable sea falsa
    //this.btnDisabled = false;

    //Asi es para que al darle clic al btn se cambie a abilitar y debilitar
    this.btnDisabled = !this.btnDisabled;
  }

  incrementadoredad() {
    //incrementa 1 en 1
    this.person.age += 1
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  names: (string | number)[] = ['David', 'Hector', 'Pedro']
  newNames = '';
  addName() {
    this.names.push(this.newNames);
    this.newNames = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }

  //Emojis ngFor
  emojis: string[] = ['😂' , '🐦', '🐳','🌮', '💚'];

  addEmoji(event: Event) {
    const element: HTMLElement = event.target as HTMLElement;
    this.emojis.push(element.textContent!);
  }

}
