import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddProductAction, SaveProductAction } from 'src/app/ngrx/product.actions';
import { ProductState, ProductStateEnum } from 'src/app/ngrx/product.reducer';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormGroup:FormGroup|null=null;
  state:ProductState|null=null;
  readonly ProductStateEnum=ProductStateEnum;
  submitted:boolean=false;

  constructor(
    private formBuilder:FormBuilder, 
    private store:Store<any>,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new AddProductAction({}));
    this.store.subscribe(state=>{
      this.state=state.catalogState; 
      if(this.state?.dataState==ProductStateEnum.ADD) {
        this.productFormGroup=this.formBuilder.group({
          name:["",Validators.required],
          price:[0,Validators.required],
          quantity:[0,Validators.required],
          selected:[true,Validators.required],
          available:[true,Validators.required],
        });
      }
    })
  }

  addProduct() {
    this.store.dispatch(new AddProductAction({}));
  }

  onSaveProduct() {
    this.submitted=true;
    if(!this.productFormGroup?.valid) return;
    this.store.dispatch(new SaveProductAction(this.productFormGroup?.value));
  }

}
