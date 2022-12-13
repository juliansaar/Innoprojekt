import { Component, OnInit} from '@angular/core';
import { ApiClientService } from '../service/api-client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  show: boolean;
  show2 : boolean;
  show3: boolean;
  show4 : boolean;
  text1: string;
  text2: string;
  text3: string;
  text4: string;

  datastory: string;
  feedback: any;
  constructor(private apiClient: ApiClientService, private route: ActivatedRoute) { }

 ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.datastory = params['datastoryname'];
  }); 
 }

onSubmit(){
  this.feedback = {
    a1 : this.show,
    a2 : this.show2,
    a3 : this.show3,
    a4 : this.show4,
    t1 : this.text1,
    t2 : this.text2,
    t3 : this.text3,
    t4 : this.text4
  }

  var body = {template: 'survey', datastory: this.datastory, feedback:this.feedback, phase: 1}
  this.apiClient.createDataStory(body).subscribe((response) => {
    console.log(response);
  });
}
}




