import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2";
import { SmartcontractService } from "src/app/smartContract/smartcontract.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})

/***
 * Header Component
 */
export class HeaderComponent implements OnInit {

  @Input() navClass: string;
  @Input() buttonList: boolean;
  @Input() sliderTopbar: boolean;
  @Input() isdeveloper: boolean;
  @Input() shopPages: boolean;

  @ViewChild('successSwal')
  public readonly successSwal!: SwalComponent;
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
 


  constructor(private router: Router, private modalService: NgbModal ,private smartContractService:SmartcontractService) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }

  isCondensed = false;

  ngAfterViewInit() {
    this._activateMenuDropdown();
  }

  ngOnInit(): void {
  }

  _activateMenuDropdown() {
    /**
     * Menu activation reset
     */
    const resetParent = (el) => {
      el.classList.remove("active");
      const parent = el.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.remove("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.remove("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.remove("active");

            }
          }
        }
      }
    };
    let links = document.getElementsByClassName("nav-link-ref");
    let matchingMenuItem = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // reset menu
      resetParent(links[i]);
    }
    for (let i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i]["pathname"]) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      const parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");

              document.getElementById("navigation").style.display = "none";
              this.isCondensed = false;
            }
          }
        }
      }
    }
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
    if (document.getElementById("back-to-top")) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }
  /**
   * Toggle menu
   */
  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById("navigation").style.display = "block";
    } else {
      document.getElementById("navigation").style.display = "none";
    }
  }

  /**
   * Menu clicked show the submenu
   */
  onMenuClick(event) {
    event.preventDefault();
    const nextEl = event.target.nextSibling.nextSibling;
    if (nextEl && !nextEl.classList.contains("open")) {
      const parentEl = event.target.parentNode;
      if (parentEl) {
        parentEl.classList.remove("open");
      }
      nextEl.classList.add("open");
    } else if (nextEl) {
      nextEl.classList.remove("open");
    }
    return false;
  }

  developerModal(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  wishListModal(content) {
    this.modalService.open(content, { centered: true });
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
        if(error.status===200){
          this.successSwal!.fire()
        }
        
        console.log('error',error)

      },
      ()=>{

      }
    )
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

  
}
