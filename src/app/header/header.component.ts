import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  linkOne:string = "acceuil";
  linkTwo:string = "todo list";
  linkThree:string = "create todo";

  constructor() { }

  ngOnInit() {
    console.log(`============> oninit pour HeaderComponent`);
  }
  getLink(selection:number){
    switch (selection) {
      case 1:
        return this.linkOne;
      case 2:
        return this.linkTwo;
      case 3:
        return this.linkThree;
      default:
        return `link not found`;
    }
  }
  clickOnLinkOne = (data) => {
    console.log(`============> clicked on first link. Here is the data that is returned : ${data}`);
    console.log(data);
  }

}

