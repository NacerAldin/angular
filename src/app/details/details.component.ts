import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() cont: number | undefined;
  @Input() desc: string | undefined;
  affichage=false;
  contenu="voir +";
  affich()
  {
    if(this.affichage==false){
      this.affichage=true;
      this.contenu="voir -"
      setTimeout(
        ()=>{
          this.affichage=false;
        }, 5000
      )
    }else{
      this.affichage=false;
      this.contenu="voir +"
    }
  }



  constructor() { }


  ngOnInit(): void {
  }

}
