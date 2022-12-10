import { Component, OnInit, Input, AfterViewInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiClientService } from 'src/app/service/api-client.service';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {
  @Input() datastory: string
  @Input() foilnumber: number
  @Input() phase: number
  
  headline: string;
  question1: string;
  //question2: string
  image1: any;
  file: File = null; // Variable to store file
  files: [];
  image2: string;
  answer1: string;
  radio_answers: string[] = ['Ja', 'Nein', 'Weiß ich nicht'];
  answer2: string;
  submitted: boolean;
  body: any;
  content: any;
  json: any;
  questions: string[];
  answers: string[];
  images: string[];
  data = undefined;
  basic_content: any;
  b: any;
  next: boolean;
  constructor(private apiclient: ApiClientService) {

  }

  async ngOnInit() {
    this.next = false;
    console.log('t2 oninit',this.phase)
    if (this.phase !== 0)
      this.data = await this.apiclient.getDatastory(this.datastory).subscribe(response => {
        this.datastory = response.datastory;
        this.content = response.content;
        this.image1 = response.imgs;
        this.update()
      });

  }


  onSubmit() {
    this.questions = [this.question1] //, this.question2]
    this.answers = [this.answer1, this.answer2]
    this.images = [this.image1, this.image2]
    console.log('onSubmit',this.questions);

    if (this.phase === 0) {
      this.body = { template: 'template2', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images, phase: this.phase }
      this.postDataAndImage();
    }
    else if (this.phase === 1) {
      this.body = { template: 'template2', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images, phase: this.phase }
      this.apiclient.createDataStory(this.body).subscribe(resopnse => {
        console.log(resopnse)
      })
      console.log('t2 onsubmit',this.phase);
      console.log(this.answers);
    }
    else if (this.phase === 2) {
      this.body = { template: 'template2', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images, phase: this.phase }
      this.postDataAndImage();
    }
    this.next = true;
  }
  postDataAndImage() {
    let promise = new Promise((resolve, reject) => {
      this.apiclient.createDataStory(this.body).subscribe(resopnse => {
        resolve(resopnse)
      })
    });

    promise.then((resopnse) => {
      console.log('Image successfully posted after getting response: ', resopnse)
      this.apiclient.imageUploadAction2(this.file, `${this.datastory}_0`)
    });
  }

  update() {
    this.headline = this.content[this.foilnumber].headline
    this.question1 = this.content[this.foilnumber].questions[0]
    //this.question2 = this.content[this.foilnumber].questions[1]

    if (this.phase == 2) {
      this.answer1 = this.content[this.foilnumber].answers[0]
      this.answer2 =  this.content[this.foilnumber].answers[1]
      console.log(this.question1);
      console.log(this.answer1, this.answer2);
    }
  }
  onChange1(event) {
    this.file = event.target.files[0];
  }
  onUpload() {
    this.apiclient.imageUploadAction2(this.file, `${this.datastory}_0`)
  }
}


