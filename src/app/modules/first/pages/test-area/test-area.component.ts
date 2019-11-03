import { Component, OnInit } from '@angular/core';
import { tree } from 'src/app/shared/modals/node';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-area',
  templateUrl: './test-area.component.html',
  styleUrls: ['./test-area.component.scss']
})
export class TestAreaComponent implements OnInit {
  showIndex = 0;
  questions = tree;
  currentQuestion = tree[0];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  previous() {
    if (this.showIndex != 0){
      this.showIndex -= 1;
    }
    
  }
  next() {
    this.showIndex += 1;
  }
  resultUpdate(data) {
    let newQuestion;
    if (data.result == 'true') {
       newQuestion = this.currentQuestion.left
    }
    else {
       newQuestion = this.currentQuestion.right
    }
    tree.forEach(question => {
      if(question.data == newQuestion) {
        this.currentQuestion = question
        if(this.currentQuestion.left == null && this.currentQuestion.right == null) {
          this.router.navigate(['/','first','landing-page','result',this.currentQuestion.data])
        }

      }
    })
  }
}
