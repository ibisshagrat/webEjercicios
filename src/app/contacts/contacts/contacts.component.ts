import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Option } from '../models/option';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  public header = 'Contacts';
  public description = 'Manage your contact list';
  public numContacts = 0;
  public counterClass = 'tag secondary';
  public formHidden = false;
  public workStatuses: Option[];
  public contact: Contact;
  public contacts: Contact[];
  constructor() { }
  public ngOnInit(): void {
    this.workStatuses = [
      { id: 0, description: 'unknow' },
      { id: 1, description: 'student' },
      { id: 2, description: 'unemployed' },
      { id: 3, description: 'employed' }
    ];
    this.contact = {
      name: '',
      isVIP: false,
      gender: '',
      workStatus: 0,
      company: '',
      education: ''
    };
    this.contacts = [];
  }


  public saveContact(): void {
  this.contacts.push({ ...this.contact });
  this.numContacts = this.contacts.length;
  console.log(this.contacts);
}

  public deleteContact(contact: Contact): void {
  this.contacts = this.contacts.filter(c => c.name !== contact.name);
  this.numContacts = this.contacts.length;
}

}
