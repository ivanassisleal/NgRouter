import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Array<Person> = [];

  constructor() {
    this.persons.push(new Person(1,"Fulano", "De Tal"));
    this.persons.push(new Person(2,"Siclano", "De Tal"));
    this.persons.push(new Person(3,"Beltrano", "De Tal"));
  }

  ngOnInit() {
  }

}
