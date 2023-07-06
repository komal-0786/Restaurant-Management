import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestaurantData } from './restra.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-restra',
  templateUrl: './restra.component.html',
  styleUrls: ['./restra.component.css']
})
export class RestraComponent implements OnInit {

  formValue!: FormGroup
  restraModelObj: RestaurantData = new RestaurantData;
  allRestaurantData: any
  showAdd!: boolean
  showbtn!: boolean
  constructor(private formBuilder: FormBuilder, private api: ApiService) {

  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: [''],
      address: [''],
      services: ['']
    })
    this.getAllData()
  }
  clickAddRestra() {
    this.formValue.reset()
    this.showAdd = true
    this.showbtn = false
  }


  //details of customer
  addRestra() {
    this.restraModelObj.name = this.formValue.value.name
    this.restraModelObj.email = this.formValue.value.email
    this.restraModelObj.contact = this.formValue.value.contact
    this.restraModelObj.address = this.formValue.value.address
    this.restraModelObj.services = this.formValue.value.services

    this.api.postRestaurant(this.restraModelObj).subscribe(res => {
      console.log(res)
      alert("Restaurant Record Added Successfully");
      //clear fill form details
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset
      this.getAllData(); //no require to refresh when add data
    })
  }
  //Get All Data
  getAllData() {
    this.api.getRestaurant().subscribe(res => {
      this.allRestaurantData = res;
    })
  }

  //Delete Data
  deleteRestra(data: any) {
    this.api.deleteRestaurant(data.id).subscribe(res => {
      alert("Record Deleted Successfully")
      this.getAllData(); //Quick Refresh Data
    })
  }

  //Edit form
  onEditRestra(data: any) {
    this.showAdd = false
    this.showbtn = true
    this.restraModelObj.id = data.id
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['contact'].setValue(data.contact);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);

  }


  //Update Record
  updateRestra() {
    this.restraModelObj.name = this.formValue.value.name
    this.restraModelObj.email = this.formValue.value.email
    this.restraModelObj.contact = this.formValue.value.contact
    this.restraModelObj.address = this.formValue.value.address
    this.restraModelObj.services = this.formValue.value.services

    this.api.updateRestaurant(this.restraModelObj, this.restraModelObj.id).subscribe(res => {
      alert('Restaurant Record Updated Successfully')

      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset
      this.getAllData(); //no require to refresh when add data
    })

  }
}
