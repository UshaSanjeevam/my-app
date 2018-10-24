import { Component, OnInit } from '@angular/core';
import {NgbProgressbar,NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  providers: [NgbProgressbar,NgbProgressbarConfig]
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
