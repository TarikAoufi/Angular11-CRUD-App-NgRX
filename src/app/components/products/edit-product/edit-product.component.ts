import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditProductAction, UpdateProductAction } from 'src/app/ngrx/product.actions';
import { ProductState, ProductStateEnum } from 'src/app/ngrx/product.reducer';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productID:number;
  state:ProductState|null=null;
  productFormGroup:FormGroup;
  readonly ProductStateEnum=ProductStateEnum;
  formBuilt:boolean=false;
  submitted:boolean=false;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private store:Store<any>,
    private formBuilder: FormBuilder,
    private router:Router) {
    this.productID=activatedRoute.snapshot.params.id;
    this.productFormGroup=this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productID));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      if(this.state?.dataState==ProductStateEnum.LOADED) {
        if(this.state.currentProduct!=null) {
          // Parcours des champs d'une manière dynamique
          let data:any=this.state.currentProduct;
          for (let f in data) {
            this.productFormGroup?.addControl(f,new FormControl(data[f], Validators.required));
          }
          this.formBuilt=true;
          // ======================================
         /* 
         // Parcours des champs d'une manière statique
          this.productFormGroup=this.formBuilder.group({
            id:[this.state?.currentProduct.id],
            name:[this.state.currentProduct.name,Validators.required],
            price:[this.state.currentProduct.price,Validators.required],
            quantity:[this.state.currentProduct.quantity,Validators.required],
            selected:[this.state.currentProduct.selected],
            available:[this.state.currentProduct.available]   
          });
          this.formBuilt=true;
          */
         // =========================================
        }
      } 
    });
  }

  okUpdated() {
    this.router.navigateByUrl("/products");
  }

  onUpdateProduct() {
    this.submitted=true;
    if(this.productFormGroup?.invalid) return;
    this.store.dispatch(new UpdateProductAction(this.productFormGroup?.value));
  }


}
