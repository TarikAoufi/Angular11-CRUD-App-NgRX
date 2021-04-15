import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetAllProductAction, GetAvailableProductAction, GetSelectedProductAction, ProductActionType, SearchProductAction } from 'src/app/ngrx/product.actions';
import { ProductState } from 'src/app/ngrx/product.reducer';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  state:ProductState|null=null;
  readonly ProductActionType=ProductActionType;

  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.state=state.catalogState;
    });
  }

  onGetProducts() {
    this.store.dispatch(new GetAllProductAction({}))
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductAction({}))
  }

  onGetAvailableProducts() {
    this.store.dispatch(new GetAvailableProductAction({}))
  }

  onSearch(dataForm:any) {  
    this.store.dispatch(new SearchProductAction(dataForm.keyword.trim()))
  }
  
  onAddProduct() {
    this.router.navigateByUrl("/addProduct");
// ==   this.store.dispatch(new AddProductAction({}))
  }
}
