import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CropService } from '../crop.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { statesOfIndia } from '../constants/state-of-india';
declare var $: any;
@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {
  constructor(private route: Router, private cropService: CropService) { }
  statesOfIndia = statesOfIndia;
  showCity = false;
  cropForm = new FormGroup({
    nitrogen: new FormControl(0, Validators.required),
    phosphorous: new FormControl(0, Validators.required),
    pottasium: new FormControl(0, Validators.required),
    phlevel: new FormControl(0, Validators.required),
    rainfall: new FormControl(0, Validators.required),
    state: new FormControl(''),
    city: new FormControl('')
  });
  submitted = false;
  ngOnInit(): void {
   this.cropForm.get('state')?.valueChanges.subscribe(data => {
     if (data) {
       this.showCity = true;
     }
     else {
       this.showCity = false;
     }
   });
  }
  // tslint:disable-next-line:typedef
  get f() {return this.cropForm.controls; }
  // tslint:disable-next-line:typedef
  predict() {
    this.submitted = true;
    // tslint:disable-next-line:max-line-length
    if (this.f.nitrogen.value === 0 || this.f.phosphorous.value === 0 || this.f.pottasium.value === 0
      || this.f.phlevel.value === 0 || this.f.rainfall.value === 0 || this.f.state.value === '' || this.f.city.value === '') {
      Swal.fire({
        icon: 'warning',
        text: 'Fields cannot be empty!'
      });
      return;
    }
    else {
      // api call
      this.cropService.predictCrop(this.cropForm.getRawValue()).subscribe(data => {
        console.log(data);
        if (data !== null) {
          this.cropService.cropData(data);
          Swal.fire({
            icon: 'success',
            text: 'crop prediction done'
          });
        }
      }, err => {
        console.log('Error: ', err);
      });
    }
  }

}
