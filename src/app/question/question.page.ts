import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  quiz: any;
  questionIndex = 0;
  currentQuestion = null;
  constructor(private storage: Storage) { }

  async ngOnInit() {
    this.quiz = await this.storage.get(environment.quiz);
    this.currentQuestion = this.quiz.questions[this.questionIndex];
  }


}
