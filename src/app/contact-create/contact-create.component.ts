import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {
  contact: any = {};
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addContact(id: HTMLInputElement, name: HTMLInputElement,email: HTMLInputElement, desc: HTMLInputElement) {
    this.contact = {
      id: id.value,
      name: name.value,
      email: email.value,
      description: desc.value
    }
    this.dataService.createContact(this.contact);
    return false;
  }

}
