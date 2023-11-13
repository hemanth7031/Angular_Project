import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  heroForm!: FormGroup;
  
  constructor(private formBulider:FormBuilder, private api : ApiService, private dialog: MatDialogRef<DialogComponent>) { }
 
  ngOnInit(): void {
    this.heroForm = this.formBulider.group({
          productName : ['',Validators.required],
          category :['',Validators.required],
          freshness:['',Validators.required],
          price:['',Validators.required],
          comment:['',Validators.required],
          date:['',Validators.required]
        });
  // this.createForm();
  }

 addProductCart(){
  if(this.heroForm.value){
    this.api.postProduct(this.heroForm.value).subscribe({
      next:(res)=>{
        alert ("add product successfully");
        this.heroForm.reset();
        this.dialog.close();
      },
      error:()=>{
        alert ("error add cart")
      }
    })
  }
  
 }
}
