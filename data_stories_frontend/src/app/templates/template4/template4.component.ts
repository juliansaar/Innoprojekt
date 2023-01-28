import { Component, Input, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {

  @Input() datastory: string
  @Input() foilnumber: number
  @Input() phase: number
  
  data: any;
  updatedData: any
  content: any;
  jsonForm: any;
  answer: any;
  constructor(private apiclient: ApiClientService) { }

  async ngOnInit()  {
    if (this.phase !== 0)
      this.data = this.apiclient.getDatastory(this.datastory).subscribe(response => {
        this.datastory = response.datastory;
        this.content = response.content;
        this.update()
      });
  }
  update() {
    this.jsonForm = this.content[this.foilnumber].jsonForm
    if (this.phase == 2) {
    this.answer = this.content[this.foilnumber].answeredform
    console.log(this.answer)
    }
  }
  onSubmit(submission: any) {
    if (this.phase === 0 && this.datastory === undefined) {
      window.alert("Bitte zuerst oben einen Namen für die Datastory vergeben!")
      return
    }
    if (this.phase == 1){
    var body = {template: "template4", datastory: this.datastory, foilnumber: this.foilnumber, "answeredform": submission.data, phase: 1}
    this.apiclient.createDataStory(body).subscribe(response => {
      this.updatedData = response.content[this.foilnumber].jsonForm
    })
    console.log(submission);
    }}
}
