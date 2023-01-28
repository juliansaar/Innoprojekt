import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiClientService } from 'src/app/service/api-client.service';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {
  @Input() datastory: string
  @Input() foilnumber: number
  @Input() phase: number
  @Input() last: boolean
  @Output() newItemEvent = new EventEmitter<number>();

  adressat: string;
  stand: string;
  datensatz: string;
  zeitraum_von: Date;
  zeitraum_bis: Date;
  messungsintervall: string;
  eintraege: number;
  file: any;
  image1: string;
  data: any;
  body: any;
  content: any;
  answers: any;

  constructor(private apiclient: ApiClientService) { }

  ngOnInit(): void {
    console.log(this.phase)
    if (this.phase !== 0)
      this.data = this.apiclient.getDatastory(this.datastory).subscribe(response => {
        this.datastory = response.datastory;
        this.content = response.content;
        this.update()
      });
  }

  onSubmit(){
    if (this.phase === 0 && this.datastory === undefined) {
      window.alert("Bitte zuerst oben einen Namen für die Datastory vergeben!")
      return
    }
    if (this.phase === 0) {
      var con = {
        component: 'template3',
        adressat: this.adressat,
        stand: this.stand,
        datensatz: this.datensatz,
        zeitraum_von: this.zeitraum_von,
        zeitraum_bis: this.zeitraum_bis,
        messungsintervall: this.messungsintervall,
        eintraege: this.eintraege,
        images: this.image1
      }
      this.body = { template: 'template3', datastory: this.datastory, foilnumber: this.foilnumber, content3:con, phase: this.phase }
      this.apiclient.createDataStory(this.body).subscribe(resopnse => {})
    }
     else if (this.phase === 1) {
    
      this.body = { template: 'template3', datastory: this.datastory, foilnumber: this.foilnumber, phase: this.phase }
      this.apiclient.createDataStory(this.body).subscribe(resopnse => {
        console.log(resopnse)
      })
  
    }
 
    this.newItemEvent.emit(this.foilnumber);
  }

  update() {
    this.image1 = this.content[this.foilnumber].images
    this.adressat = this.content[this.foilnumber].adressat
    this.stand = this.content[this.foilnumber].stand
    this.datensatz = this.content[this.foilnumber].datensatz
    this.zeitraum_von = this.content[this.foilnumber].zeitraum_von
    this.zeitraum_bis = this.content[this.foilnumber].zeitraum_bis
    this.messungsintervall = this.content[this.foilnumber].messungsintervall
    this.eintraege = this.content[this.foilnumber].eintraege

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
