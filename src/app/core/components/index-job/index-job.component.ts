import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SmartcontractService } from 'src/app/smartContract/smartcontract.service';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";


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

  
   @ViewChild('successSwal')
   public readonly successSwal!: SwalComponent;

 
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

  lastIndex:number

  

  constructor(private spinner: NgxSpinnerService,private modalService: NgbModal,private smartContractService:SmartcontractService, private router:Router) { }

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
    this.spinner.show();
    this.getAllTerrain()
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
    // this.successSwal!.fire()

  }

  onAddTerrain(){
    this.spinner.show()
      
    this.lastIndex=0

    console.log("id proprietaire",this.idCni)
    this.smartContractService.addTerrain({coordGeo:this.coordGeo,
      dateNaissance:this.dateNaissance,
      idCni:this.idCni.toString(),
      idNumeroT:this.idNumeroT.toString,
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

        if(error.status===200){
          this.spinner.hide()
        
          this.successSwal!.fire()
        }
        console.log('error',error)

      },
      ()=>{
        window.location.reload()

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

        this.lastIndex=this.newTransaction.length
        this.transaction===this.newTransaction
        // console.log('response',this.newTransaction)
        // console.log('lastIndex',this.lastIndex)
        
      },
      (error)=>{
        
      },
      ()=>{
        this.spinner.hide()
      }
    )
  }


  // change reverse a liste
  reverseList(data:any[]):any[]{
    let list:any[]=[]
    let i=0;
    for(i=data?.length;i--;i>=0){
      list.push(data[i])
    }
    // console.log('list', list)

    return list



  }

  // dataValue(data:any){
  //   if (data.status==="applied" && data.parameter.entrypoint==="addterrain") {
  //     return true
  //   }
  //   return false

  // }
  

  getTitreByValue(data:string){
    this.spinner.show()
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
    this.spinner.hide()
  }

  onCreateLink(data){
    this.link=`https://ithacanet.tzkt.io/${data}`
    window.open(this.link, "_blank");

  }

  OnService(){
    this.dateNaissance=''
    this.idCni=''
    this.idNumeroT=''
    this.lieuNaissance=''
    this.limite=''
    this.limite=''
    this.nom=''
    this.prenom=''
  }

  ongetNewTitre(){
     this.getAllTerrain()
    if(this.lastIndex<this.newTransaction.length){
      this.tabfiltre=this.newTransaction
      this.newTransaction=[]
      this.newTransaction.push(this.tabfiltre[this.lastIndex+1])

    }


  }

}
