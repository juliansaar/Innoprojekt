import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {
  @Input() datastory: string
  @Input() foilnumber: number
  @Input() phase: number
  @Input() last: boolean
  @Output() newItemEvent = new EventEmitter<number>();

  headline: string;
  question1: string;
  image1: any;
  file: File = null; // Variable to store file
  files: [];
  image2: string;
  answer1: string;
  radio_answers: string[] = ['Ja', 'Nein', 'Weiß ich nicht'];
  answer2: string;
  body: any;
  content: any;
  questions: string[];
  answers: string[];
  images: string[];
  data = undefined;
  constructor(private apiclient: ApiClientService) {

  }

  async ngOnInit() {
    console.log('t2 oninit', this.phase)
    if (this.phase !== 0)
      this.data = await this.apiclient.getDatastory(this.datastory).subscribe(response => {
        this.datastory = response.datastory;
        this.content = response.content;
        this.update()
      });

  }

  onSubmit() {
    if (this.phase === 0 && this.datastory === undefined) {
      window.alert("Bitte zuerst oben einen Namen für die Datastory vergeben!")
      return
    }
    this.questions = [this.question1]
    this.answers = [this.answer1, this.answer2]
    this.images = [this.image1, this.image2]
    console.log('onSubmit', this.questions);

    if (this.phase === 0) {
      this.body = { template: 'template2', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images, phase: this.phase }
      this.apiclient.createDataStory(this.body).subscribe(resopnse => { })
    }
    else if (this.phase === 1) {
      this.body = { template: 'template2', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images, phase: this.phase }
      this.apiclient.createDataStory(this.body).subscribe(resopnse => {
        console.log(resopnse)
      })
      console.log('t2 onsubmit', this.phase);
      console.log(this.answers);
    }
    else if (this.phase === 2) {
    }
    this.newItemEvent.emit(this.foilnumber);
  }

  update() {
    this.headline = this.content[this.foilnumber].headline
    this.question1 = this.content[this.foilnumber].questions[0]
    this.image1 = this.content[this.foilnumber].images[0]

    if (this.phase == 2) {
      this.answer1 = this.content[this.foilnumber].answers[0]
      this.answer2 = this.content[this.foilnumber].answers[1]
      console.log(this.question1);
      console.log(this.answer1, this.answer2);
    }
  }
  onChange1(event) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.image1 = reader.result as string;
    }
  }

}


