import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SmartcontractService } from 'src/app/smartContract/smartcontract.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index-job',
  templateUrl: './index-job.component.html',
  styleUrls: ['./index-job.component.css']
})

/**
 * Job Component
 */
export class IndexJobComponent implements OnInit {

  /***
   * Footer bg color set
   */
  footerClass: true;
  footerVariant = 'bg-light';
  transaction : any[]
  newTransaction:any[]
  tabfiltre:any[];

  /**
  * Member Data
  */
  memberData = [
    {
      profile: "assets/images/client/01.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    },
    {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    },
    {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    },
    {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    }
  ];

  link:string

  //Owner Info
  idCni:string
  nom:string;
  prenom:string;
  dateNaissance:string;
  lieuNaissance:string;

  idTransaction:any[]
  allTerrain:any[]

  //terrain Info
  idNumeroT:string
  local:string;
  limite:string;
  coordGeo:string;
  searchVal:string;

  

  constructor(private modalService: NgbModal,private smartContractService:SmartcontractService, private router:Router) { }

  /**
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
    nav: false
  };

  ngOnInit(): void {
    this.getAllTerrain()
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onAddTerrain(){

    console.log("id proprietaire",this.idCni)
    this.smartContractService.addTerrain({coordGeo:this.coordGeo,
      dateNaissance:this.dateNaissance,
      idCni:this.idCni,
      idNumeroT:this.idNumeroT,
      lieuNaissance:this.lieuNaissance,
      limite:this.limite,
      local:this.limite,
      noms:this.nom,
      prenoms:this.prenom
    }).subscribe(
      (res)=>{
        console.log('reponse',res)

      },
      (error)=>{
        console.log('error',error)

      },
      ()=>{

      }
    )
  }

  getAllTerrain(){
    this.smartContractService.getAllTerrain().subscribe(
      (res)=>{
        this.newTransaction=[]
        this.idTransaction=[]
        this.allTerrain=[]

        
        this.transaction=res
        this.transaction

        for(let item of this.transaction){
          if(item.parameter.entrypoint==="addterrain"&& item.status==="applied"){
            this.allTerrain.push(item)
            this.newTransaction.push(item)
            this.idTransaction.push(item.parameter.value.idNumeroT)
          }

        }
        this.transaction===this.newTransaction
        console.log('response',this.newTransaction)
        
      }
    )
  }

  // dataValue(data:any){
  //   if (data.status==="applied" && data.parameter.entrypoint==="addterrain") {
  //     return true
  //   }
  //   return false

  // }
  

  getTitreByValue(data:string){
    this.tabfiltre=[]
    console.log('searchVal',data)
    console.log('idTransaction',this.idTransaction)

    // for(let item of this.idTransaction){
    //   if(item===data){
    //     this.tabfiltre.push(item)
    //   }
    // }
    this.newTransaction=this.allTerrain

    for(let item of this.newTransaction){

      if(item.parameter.value.idNumeroT===data){

        this.tabfiltre.push(item)
      }
      // if()
    }

    this.newTransaction=this.tabfiltre
    console.log("tabfiltre",this.tabfiltre)
    // this.ngOnInit()
  }

  onCreateLink(data){
    this.link=`https://ithacanet.tzkt.io/${data}`
    window.open(this.link, "_blank");

    
    
    
  }

}
