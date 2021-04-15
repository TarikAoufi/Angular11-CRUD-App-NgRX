import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { ProductService } from "../services/product.service";
import { AddProductActionError, AddProductActionSuccess, DeleteProductActionError, DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess, GetAllProductActionError, GetAllProductActionSuccess, GetAvailableProductActionError, GetAvailableProductActionSuccess, GetSelectedProductActionError, GetSelectedProductActionSuccess, ProductAction, ProductActionType, SaveProductActionError, SaveProductActionSuccess, SearchProductActionError, SearchProductActionSuccess, SelectProductActionError, SelectProductActionSuccess, UpdateProductActionError, UpdateProductActionSuccess } from "./product.actions";
import { catchError, map , mergeMap } from "rxjs/operators";


@Injectable()
export class ProductsEffects {

    constructor(
        private productService:ProductService, 
        private effectAction:Actions) {
    }
    /*
    reçoie une fct sans paramètre, et 
    vérifie le type d'action, et appelle le service concerné
    et retourne une action
    */
    getAllProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.GET_ALL_PRODUCTS),
            mergeMap((action:ProductAction)=>{
                return this.productService.getProducts()
                    .pipe(
                        map((products)=> new GetAllProductActionSuccess(products)), 
                        catchError((err)=>of(new GetAllProductActionError(err.message)))
                    )
            })
        )
    );

    /* Get Selected Products Effect */
    getSelectedProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.GET_SELECTED_PRODUCTS),
            mergeMap((action:ProductAction)=>{
                return this.productService.getSelectedProducts()
                    .pipe(
                        map((products)=> new GetSelectedProductActionSuccess(products)), 
                        catchError((err)=>of(new GetSelectedProductActionError(err.message)))
                    )
            })
        )
    );

    /* Get Available Products Effect */
    getAvailableProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.GET_AVAILABLE_PRODUCTS),
            mergeMap((action:ProductAction)=>{
                return this.productService.getAvailableProducts()
                    .pipe(
                        map((products)=> new GetAvailableProductActionSuccess(products)), 
                        catchError((err)=>of(new GetAvailableProductActionError(err.message)))
                    )
            })
        )
    );

    /* Search Products Effect */   
    searchProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.SEARCH_PRODUCTS),
            mergeMap((action:ProductAction)=>{
                return (this.productService.searchProducts(action.payload))
                    .pipe(
                        map((products)=> new SearchProductActionSuccess(products)), 
                        catchError((err)=>of(new SearchProductActionError(err.message)))
                    )
            })
        )
    );

    /* Select Product Effect */   
    selectProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.SELECT_PRODUCT),
            mergeMap((action:ProductAction)=>{
                return (this.productService.selectProduct(action.payload))
                    .pipe(
                        map((product)=> new SelectProductActionSuccess(product)), 
                        catchError((err)=>of(new SelectProductActionError(err.message)))
                    )
            })
        )
    );

    /* Delete Product Effect */   
    deleteProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.DELETE_PRODUCT),
            mergeMap((action:ProductAction)=>{
                return (this.productService.deleteProduct(action.payload.id))
                    .pipe(
                        map(()=> new DeleteProductActionSuccess(action.payload)), 
                        catchError((err)=>of(new DeleteProductActionError(err.message)))
                    )
            })
        )
    );

    /* Add Product Effect */
    addProductEffect:Observable<Action>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.ADD_PRODUCT),
            map((action:ProductAction)=>{
                return new AddProductActionSuccess({});
            })
        )
    );

    /* Save Product Effect */   
    saveProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.SAVE_PRODUCT),
            mergeMap((action:ProductAction)=>{
                return (this.productService.saveProduct(action.payload))
                    .pipe(
                        map((product)=> new SaveProductActionSuccess(product)), 
                        catchError((err)=>of(new SaveProductActionError(err.message)))
                    )
            })
        )
    );

    /* Edit Product Effect */   
    editProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.EDIT_PRODUCT),
            mergeMap((action:ProductAction)=>{
                return (this.productService.getProduct(action.payload))
                    .pipe(
                        map((product)=> new EditProductActionSuccess(product)), 
                        catchError((err)=>of(new EditProductActionError(err.message)))
                    )
            })
        )
    );

    /* Update Product Effect */   
    updateProductEffect:Observable<ProductAction>=createEffect(
        ()=>this.effectAction.pipe(
            ofType(ProductActionType.UPDATE_PRODUCT),
            mergeMap((action:ProductAction)=>{
                return (this.productService.updateProduct(action.payload))
                    .pipe(
                        map((product)=> new UpdateProductActionSuccess(product)), 
                        catchError((err)=>of(new UpdateProductActionError(err.message)))
                    )
            })
        )
    );

}