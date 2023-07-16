import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { AngularFireDatabase, AngularFireList} from '@angular/fire//database';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactUs: AngularFireList<any>;
  firstParagraph;
  email;
  secondParagraph;
  thirdParagraph;

  constructor(private db: AngularFireDatabase, public router: Router) {
    this.contactUs = this.db.list(environment.contactTable.name)
    this.contactUs.valueChanges().subscribe(content => {
      this.firstParagraph = content[1];
      this.email = content[0];
      this.secondParagraph = content[4];
      this.thirdParagraph = content[2];
    });
  }

  ngOnInit(): void {
  }

}
