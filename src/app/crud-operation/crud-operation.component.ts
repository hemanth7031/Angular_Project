import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { deatilesModel } from './deatilesModel';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css']
})
export class CrudOperationComponent implements OnInit {
  formValue!: FormGroup;
  

  deatilesModelObj: deatilesModel = new deatilesModel()
  userData: any;
  showUpdate: boolean;
  showAdd: boolean;


  constructor(private formbulider: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.formValue = this.formbulider.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],

    })
    this.getAllData();

  }


  clickAddButton(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postObjectDeatiles() {
    this.deatilesModelObj.firstName = this.formValue.value.firstName;
    this.deatilesModelObj.lastName = this.formValue.value.lastName;
    this.deatilesModelObj.email = this.formValue.value.email;
    this.deatilesModelObj.mobile = this.formValue.value.mobile;
    this.deatilesModelObj.salary = this.formValue.value.salary;

    this.productService.postEmploye(this.deatilesModelObj)
      .subscribe(res => {
        console.log(res)
        alert("Added Successfully")
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllData();
      })
  }


  getAllData() {
    this.productService.getEmploye()
      .subscribe(res => {
        this.userData = res;
      })
  }


  deleteData(item: any) {
    this.productService.deleteEmploye(item.id)
      .subscribe(res => {
        alert("item was delete successfully");
        this.getAllData();
      })
  }


  editData(item:any){
    this.deatilesModelObj.id = item.id;
    this.formValue.controls['firstName'].setValue(item.firstName);
    this.formValue.controls['lastName'].setValue(item.lastName);
    this.formValue.controls['email'].setValue(item.email);
    this.formValue.controls['mobile'].setValue(item.mobile);
    this.formValue.controls['salary'].setValue(item.salary);
  }

  UpadteObjectDeatiles(){
    this.showAdd = false;
    this.showUpdate = true;
    this.deatilesModelObj.firstName = this.formValue.value.firstName;
    this.deatilesModelObj.lastName = this.formValue.value.lastName;
    this.deatilesModelObj.email = this.formValue.value.email;
    this.deatilesModelObj.mobile = this.formValue.value.mobile;
    this.deatilesModelObj.salary = this.formValue.value.salary;

    this.productService.updateEmploye(this.deatilesModelObj,this.deatilesModelObj.id)
    .subscribe(res=>{
      console.log(res)
        alert("Update Successfully")
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllData();
    })
  }
}
