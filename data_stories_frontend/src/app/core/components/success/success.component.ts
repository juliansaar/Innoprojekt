import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  showSuccessAnimation = true;
  datastory: string;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.datastory = params['datastoryname'];
    }); 
  }

  btnClick= function () {
    this.router.navigateByUrl('/survey/' + this.datastory);
  };
}
