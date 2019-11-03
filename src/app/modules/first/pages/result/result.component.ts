import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result= "alo ka samosaitus"
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.result = this.route.snapshot.paramMap.get('data')
  }

}
