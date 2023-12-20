import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class NavigationComponent implements OnInit {
  jsonData = data;
  dataTable = this.jsonData.data;

  filteredData = [...this.dataTable];
  searchText: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataTable);
  }

  sortTitle() {
    this.filteredData.sort((a, b) => (a.attributes.content > b.attributes.content ? 1 : -1));
  }

  sort() {
    this.filteredData.sort((a, b) => (a.attributes.display_properties.type > b.attributes.display_properties.type ? 1 : -1));
  }

  filter() {
    this.filteredData = this.filteredData.filter(
      (item) =>
        item.attributes.content.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
