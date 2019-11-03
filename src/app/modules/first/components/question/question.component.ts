import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Result } from 'src/app/shared/modals/result';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questionShow = "Do you have the alo ka samosa problem ?"
  @Input() question: any;
  @Output() results = new EventEmitter<Result>();
  questionForm: FormGroup;
  result: Result;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.questionShow = this.question;
    this.createForm()
  }
  createForm() {
    this.questionForm = this.fb.group({
      yes: ['',Validators.required],
      }
    )
  }
  submitAnswer(data) {
    this.result = {
      question: this.questionShow,
      result: data.yes
    }
    this.results.emit(this.result)
  }
}
