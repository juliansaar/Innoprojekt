import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiClientService } from 'src/app/service/api-client.service';
@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {
  @Input() datastory: string
  @Input() foilnumber: number
  @Input() phase: number
  headline: string
  question1: string
  question2: string
  image1: any
  file: File = null; // Variable to store file
  files: []
  image2: string
  answer1: string
  answer2: string
  submitted: boolean;
  body: any;
  content: any;
  json: any;
  questions: string[]
  answers: string[]
  images: string[]
  data = undefined;
  basic_content: any;
  b: any;
  constructor(private apiclient: ApiClientService) {

  }

  async ngOnInit() {
    console.log(this.phase)
    if (this.phase !== 0)
      this.data = await this.apiclient.getDatastory(this.datastory).subscribe(response => {
        this.datastory = response.datastory;
        this.content = response.content;
        this.image1 = response.imgs;
        this.update()
      });

  }


  onSubmit() {
    this.questions = [this.question1, this.question2]
    this.answers = [this.answer1, this.answer2]
    this.images = [this.image1, this.image2]
    console.log(this.answers);

    if (this.phase === 0) {
      this.body = { template: 'template1', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images, phase: this.phase }
      this.postDataAndImage();
    }
    else if (this.phase === 1) {
      this.body = { template: 'template1', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images, phase: this.phase }
      this.apiclient.createDataStory(this.body).subscribe(resopnse => {
        console.log(resopnse)
      })
    }
    else if (this.phase === 2) {
    }
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

    this.basic_content = this.content[0].content_foilnumber_1
    
    this.headline = this.basic_content.headline
    this.question1 = this.basic_content.questions[0]
    this.question2 = this.basic_content.questions[1]

    if (this.phase == 2) {
      this.answer1 = this.basic_content.answers[0]
      this.answer2 = this.basic_content.answers[1]
      console.log(this.question1, this.question2);
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


