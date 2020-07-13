import { Component, OnInit, OnDestroy } from "@angular/core";
import { CompanyService, Company} from '../../Services/company.service';

@Component({
  templateUrl: "../Angular/Admin/CompanyTestApp/company.template.html"
})
export class CompanyTestConponent implements OnInit, OnDestroy {

  allCompanies: Company[];
  constructor(private readonly companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.loadCompanies();
  }

  private loadCompanies(): void {
    this.companyService.getAllCompanies("").subscribe(result => {
      console.log(result);
      this.allCompanies = result.value;
    });
  }

  private selectCompany(selectedCompany: any): void {
    console.log(selectedCompany);
  }
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }

  

}
