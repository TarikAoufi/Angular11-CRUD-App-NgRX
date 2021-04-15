import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductState , ProductStateEnum } from 'src/app/ngrx/product.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productState$:Observable<ProductState>|null=null;
  readonly ProductStateEnum=ProductStateEnum;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.productState$=this.store.pipe(
      map((state)=> state.catalogState)
    );
  }

}
