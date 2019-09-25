import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: true,
      enabled: true
    },
    {
      name: 'secondary',
      selected: true,
      enabled: false
    },
    {
      name: 'tertiary',
      selected: false,
      enabled: true
    },
    {
      name: 'success',
      selected: false,
      enabled: true
    },
    {
      name: 'warning',
      selected: false,
      enabled: false
    },
    {
      name: 'danger',
      selected: true,
      enabled: true
    },
    {
      name: 'light',
      selected: false,
      enabled: false
    },
    {
      name: 'medium',
      selected: false,
      enabled: true
    },
    {
      name: 'dark',
      selected: false,
      enabled: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick( item) {
    console.log(item);
  }

}
