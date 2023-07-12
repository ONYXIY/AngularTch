
import { Component, OnInit } from '@angular/core';
import { errorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent implements OnInit {

  constructor(public errorService: errorService){

  }

  ngOnInit(): void {
    
  }
}
