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
  image1: string
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
    if (this.phase !== 0)
    this.data = await this.apiclient.getDatastory(this.datastory).subscribe(response => {
      this.datastory = response.datastory;
      this.content = response.content;
      this.update()
    });

  }


  onSubmit() {
    this.questions = [this.question1, this.question2]
    this.answers = [this.answer1, this.answer2]
    this.images = [this.image1, this.image2]

    if (this.phase === 0) {
      this.body = { template: 'template1', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images,phase: this.phase }
    }
    else if (this.phase === 1) {
      this.body = { template: 'template1', datastory: this.datastory, foilnumber: this.foilnumber, headline: this.headline, questions: this.questions, answers: this.answers, images: this.images,phase: this.phase }
    }
  
    this.apiclient.createDataStory(this.body).subscribe(resopnse => {
      console.log(resopnse)
    })
    
    //this.images.forEach((element,index) => { ${index}
      
    //});
    
  }
  
  update() {
    
    this.basic_content = this.content[0].content_foilnumber_1
    this.b = JSON.parse(this.basic_content)
    this.headline = this.b.headline
    this.question1 = this.b.questions[0]
    this.question2 = this.b.questions[1]
    
    if (this.phase == 2){
      this.answer1 = this.b.answers[0]
      this.answer2 = this.b.answers[1]
     }
    } 
    // onChange1(event){
    //   this.file = event.target.files[0];
    // }
    // onUpload(){
    //  // this.apiclient.imageUploadAction(this.file,'name')
    // }
}


