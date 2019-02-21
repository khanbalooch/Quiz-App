import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.page.html',
  styleUrls: ['./start-quiz.page.scss'],
})
export class StartQuizPage implements OnInit {

  quiz: any;
  constructor(private storage: Storage) {
  }

  async ngOnInit() {
    this.quiz = await this.storage.get(environment.quiz);
  }

}
