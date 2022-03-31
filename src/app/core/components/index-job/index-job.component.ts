import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SmartcontractService } from 'src/app/smartContract/smartcontract.service';


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

  //Owner Info
  idCni:string
  nom:string;
  prenom:string;
  dateNaissance:string;
  lieuNaissance:string;

  //terrain Info
  idNumeroT:string
  local:string;
  limite:string;
  coordGeo:string;

  

  constructor(private modalService: NgbModal,private smartContractService:SmartcontractService) { }

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
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onAddTerrain(){

    console.log("id proprietaire",this.idCni)
    this.smartContractService?.addTerrain({coordGeo:this.coordGeo,
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
  

}
