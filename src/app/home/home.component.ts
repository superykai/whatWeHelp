import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { environment } from '../../environments/environment';
import { AngularFireDatabase, AngularFireList} from '@angular/fire//database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  updateContent: AngularFireList<any>;
  firstParagraph;
  secondParagraph;

  constructor(private db: AngularFireDatabase, public router: Router) {
    this.updateContent = this.db.list(environment.contentTable.name)
    this.updateContent.valueChanges().subscribe(content => {
      this.firstParagraph = content[0];
      this.secondParagraph = content[1];
    });
  }

  ngOnInit(): void {
    // this.router.navigate(
    //     ['/Shop'],
    //     {queryParams: {category: 'crochet'}}
    // );
  }

}
