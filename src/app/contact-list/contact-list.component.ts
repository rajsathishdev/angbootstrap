import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.contacts = this.dataService.getContacts();
  }

}
