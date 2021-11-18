import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits=[
    {
      nom:"scandal" ,
      photo:"https://www.nocibe.fr/medias/produits/216193/216193-jean-paul-gaultier-scandal-eau-de-parfum-vaporisateur-50-ml-1000x1000.jpg?frz-v=3908",
      description: "le nez poivré , un ton floral",
      marque:"civenchy",
      prix:100,
      contenance:100,

    },
    {
      nom:"Boss" ,
      photo:"https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwc976b673/images/hi-res/SKU/SKU_6/96666_swatch.jpg",
      description: "Musqué ,affirme toute la puissance de l'homme",
      marque:"hugo boss",
      prix:50,
      contenace:50,

    },
    {
    nom:"Opium" ,
    photo:"https://www.nocibe.fr/medias/produits/163668/163668-yves-saint-laurent-opium-eau-de-toilette-vaporisateur-90-ml-1000x1000.jpg?frz-v=3908",
    description: "Musqué ,",
    marque:"Yeves Saint llaurent ",
    prix:130,
    contenance:90
  },
  {
    nom:"Rive gauch" ,
    photo:"https://cdn.shopify.com/s/files/1/0103/2722/8473/products/divain-175-rive-gauche-ysl_x360.jpg?v=1613123296",
    description: "leger ,poudré",
    marque:"Yeves Saint llaurent ",
    prix:130,
    contenance:90
  },
  {
    nom:"channel N°5",
    photo:"https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw6dce3bc6/images/hi-res/SKU/SKU_6/60385_swatch.jpg?sw=585&sh=585&sm=fit",
    description:"puissance et floral",
    marque:"channel",
    prix:180,


  },


  ]
  panier= Array();
  quantite=0;

  ajoutPanier(parfum: object , nom: string)
  {
    //panier taotalment vide
    if(this.panier.length==0 )
    {
      this.panier.push(parfum);
      this.panier[0].quantite=1;
      this.quantite +=1;
    //il ya au moindre un
    }else{
      if(this.panier.includes(parfum)){
          for(var i=0; i<this.panier.length; i++){
            if(nom==this.panier[i].nom){
              this.panier[i].quantite +=1;
              this.quantite +=1;
            }

          }

      }else{
        this.panier.push(parfum);
        this.panier[this.panier.length -1].quantite=1;
        this.quantite+=1;
      }

    }
  }
  retraitPanier(nom: string)
  {
    for(var i=0; i< this.panier.length ; i++){
      if(nom== this.panier[i].nom)
      {
        if(this.panier[i].quantite==1){
          this.panier.splice(i,1);
        }else{
          this.panier[i].quantite -=1;
        }
      }
    }
    this.quantite -=1;

  }
   total()
   {
     var total=0;
     this.panier.forEach(function(parfum)
     {
       total +=parfum.prix*parfum.quantite;
     }
     );
     return total;


   }
  constructor() { }

  ngOnInit(): void {
  }

}
