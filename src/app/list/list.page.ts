import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  quizzes = [
    {
      id: 1,
      title: 'Surah Rehman Juz 1',
      description: 'Surah Rehman Ayat No.01 to Ayat No.05 Quiz No.1 Juzz 1',
      questionCount: 2,
      marks: 10,
      questions : [
        {
          question: 'How many sahaba martyred in ghazw e Uhud ?',
          answers: [ '13', '100', '70', '77'],
          trueOption: '2',
          userOption: ''
        },
        {
          question: 'Sulha Hudaibia was done after how many years of Hijrat ?',
          answers: [ 'one', 'two', 'three', 'four'],
          trueOption: '0',
          userOption: ''
        },
        {
          question: 'Which of the follwing is not a Nabi name',
          answers: [ 'Hazrat Ibrahim A.S', 'Hazrat Dawood A.S', 'Hazrat Idress A.S', 'Hazrat kamran A.S'],
          trueOption: '3',
          userOption: ''
        }
      ]
    }
  ];
  constructor(private router: Router,
              private storage: Storage ) {}

  ngOnInit() {
  }

  openQuizDetails(quiz: any) {
    this.router.navigate(['start-quiz']);
    this.storage.set(environment.quiz, quiz);
  }
}
