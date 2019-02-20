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
  constructor(private storage: Storage) { }

  async ngOnInit() {
    this.quiz = await this.storage.get(environment.quiz);
  }


}
