import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  hasil=0
  hitung(x,b){
  this.hasil = Math.pow(x,b);
  };

}
