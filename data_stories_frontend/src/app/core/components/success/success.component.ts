import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  showSuccessAnimation = true;
  datastory: string;
  phase: string;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.datastory = params['datastoryname'];
      this.phase = params['phase'];
      console.log(this.phase);
    }); 
    if(this.phase === '0'){
    setTimeout(() => {
      this.router.navigate(['/']);
  }, 4000); }
  }

  btnClick= function () {
    this.router.navigateByUrl('/survey/' + this.datastory);
  };
}
