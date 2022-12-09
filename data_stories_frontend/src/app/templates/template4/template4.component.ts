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
  constructor(private apiclient: ApiClientService) { }

  ngOnInit(): void {
    if (this.phase !== 0)
      this.data = this.apiclient.getDatastory(this.datastory).subscribe(response => {
        this.datastory = response.datastory;
        this.content = response.content;
        this.update()
      });
  }
  update() {
    this.jsonForm = this.content[0].content_foilnumber_1.jsonForm
  }
  onSubmit(submission: any) {
    if (this.phase == 1){
    var body = {template: "template2", datastory: this.datastory, foilnumber: this.foilnumber, "answeredform": this.data, phase: 1}
    this.apiclient.createDataStory(this.datastory).subscribe(response => {
      this.updatedData = response.content[0].content_foilnumber_1.jsonForm
    })
    console.log(submission);
    }}
}
