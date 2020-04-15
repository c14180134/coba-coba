import { Component, Output } from '@angular/core';

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
  i=0
  c=0
  polaA(x,b){
    for(this.i=x;this.i<b;this.i++){
      for(this.c=0;this.c<this.i;this.c++){
        x='x'
        document.writeln("x");
      }
      document.writeln("<br/>");
    }
  }
  polaB(x,b){
    var k=1
    for(this.i=x;this.i>0;this.i--){
      for(this.c=0;this.c<this.i;this.c++){
      
      
        document.writeln("x");
        
      }
      var m=0
      while(m<k&&k<b ){
        m++;
        document.writeln("O")
      }
      document.writeln("<br/>");
      k++;
    }
  }

}
