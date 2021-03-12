import { Component, OnInit } from '@angular/core';
import { CropService } from '../crop.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cropService: CropService) { }

  resultData: any;

  ngOnInit(): void {
    this.resultData = this.cropService.currentCropSource$;
  }

}
