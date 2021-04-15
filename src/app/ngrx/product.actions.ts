import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";


export enum ProductActionType {
    /* Get All Products */
    GET_ALL_PRODUCTS="[Products] Get All products",
    GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
    GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",
    /* Get Selected Products */
    GET_SELECTED_PRODUCTS="[Products] Get Selected products",
    GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected products Success",
    GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected products Error",
    /* Get Available Products */
    GET_AVAILABLE_PRODUCTS="[Products] Get Available products",
    GET_AVAILABLE_PRODUCTS_SUCCESS="[Products] Get Available products Success",
    GET_AVAILABLE_PRODUCTS_ERROR="[Products] Get Available products Error",
    /* Search Products */
    SEARCH_PRODUCTS="[Products] Search products",
    SEARCH_PRODUCTS_SUCCESS="[Products] Search products Success",
    SEARCH_PRODUCTS_ERROR="[Products] Search products Error",
    /* Select Product */
    SELECT_PRODUCT="[Product] Select product",
    SELECT_PRODUCT_SUCCESS="[Product] Select product Success",
    SELECT_PRODUCT_ERROR="[Product] Select product Error",
    /* Delete Product */
    DELETE_PRODUCT="[Product] Delete product",
    DELETE_PRODUCT_SUCCESS="[Product] Delete product Success",
    DELETE_PRODUCT_ERROR="[Product] Delete product Error",
    /* Add Product */
    ADD_PRODUCT="[Product] Add product",
    ADD_PRODUCT_SUCCESS="[Product] Add product Success",
    ADD_PRODUCT_ERROR="[Product] Add product Error",
    /* Save Product */
    SAVE_PRODUCT="[Product] Save product",
    SAVE_PRODUCT_SUCCESS="[Product] Save product Success",
    SAVE_PRODUCT_ERROR="[Product] Save product Error",
    /* Edit Product */
    EDIT_PRODUCT="[product] Edit Product",
    EDIT_PRODUCT_SUCCESS="[Product] Edit Product Success",
    EDIT_PRODUCT_ERROR="[Product] Edit Product Error",
    /* Update Product */
    UPDATE_PRODUCT="[product] Update Product",
    UPDATE_PRODUCT_SUCCESS="[Product] Update Product Success",
    UPDATE_PRODUCT_ERROR="[Product] Update Product Error",
}

/* Get All Products Actions */
export class GetAllProductAction implements Action {
    type: ProductActionType=ProductActionType.GET_ALL_PRODUCTS;
    constructor(public payload:any) {
    }
}
export class GetAllProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]) {      
    }
}
export class GetAllProductActionError implements Action {
    type: ProductActionType=ProductActionType.GET_ALL_PRODUCTS_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Get Selected Products Actions */
export class GetSelectedProductAction implements Action {
    type: ProductActionType=ProductActionType.GET_SELECTED_PRODUCTS;
    constructor(public payload:any) {
    }
}
export class GetSelectedProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.GET_SELECTED_PRODUCTS_SUCCESS;  
    constructor(public payload:Product[]) {      
    }
}
export class GetSelectedProductActionError implements Action {
    type: ProductActionType=ProductActionType.GET_SELECTED_PRODUCTS_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Get Available Products Actions */
export class GetAvailableProductAction implements Action {
    type: ProductActionType=ProductActionType.GET_AVAILABLE_PRODUCTS;
    constructor(public payload:any) {
    }
}
export class GetAvailableProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.GET_AVAILABLE_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]) {      
    }
}
export class GetAvailableProductActionError implements Action {
    type: ProductActionType=ProductActionType.GET_AVAILABLE_PRODUCTS_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Search Products Actions */
export class SearchProductAction implements Action {
    type: ProductActionType=ProductActionType.SEARCH_PRODUCTS;
    constructor(public payload:string) {
    }
}
export class SearchProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.SEARCH_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]) {      
    }
}
export class SearchProductActionError implements Action {
    type: ProductActionType=ProductActionType.SEARCH_PRODUCTS_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Select Product Actions */
export class SelectProductAction implements Action {
    type: ProductActionType=ProductActionType.SELECT_PRODUCT;
    constructor(public payload:Product) {
    }
}
export class SelectProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.SELECT_PRODUCT_SUCCESS;
    constructor(public payload:Product) {      
    }
}
export class SelectProductActionError implements Action {
    type: ProductActionType=ProductActionType.SELECT_PRODUCT_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Delete Product Actions */
export class DeleteProductAction implements Action {
    type: ProductActionType=ProductActionType.DELETE_PRODUCT;
    constructor(public payload:Product) {
    }
}
export class DeleteProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.DELETE_PRODUCT_SUCCESS;
    constructor(public payload:Product) {      
    }
}
export class DeleteProductActionError implements Action {
    type: ProductActionType=ProductActionType.DELETE_PRODUCT_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Add Product Actions */
export class AddProductAction implements Action {
    type: ProductActionType=ProductActionType.ADD_PRODUCT;
    constructor(public payload:any) {
    }
}
export class AddProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.ADD_PRODUCT_SUCCESS;
    constructor(public payload:any) {      
    }
}
export class AddProductActionError implements Action {
    type: ProductActionType=ProductActionType.ADD_PRODUCT_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Save Product Actions */
export class SaveProductAction implements Action {
    type: ProductActionType=ProductActionType.SAVE_PRODUCT;
    constructor(public payload:Product) {
    }
}
export class SaveProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.SAVE_PRODUCT_SUCCESS;
    constructor(public payload:Product) {      
    }
}
export class SaveProductActionError implements Action {
    type: ProductActionType=ProductActionType.SAVE_PRODUCT_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Edit Product Actions */
export class EditProductAction implements Action {
    type: ProductActionType=ProductActionType.EDIT_PRODUCT;
    constructor(public payload:number) {
    }
}
export class EditProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.EDIT_PRODUCT_SUCCESS;
    constructor(public payload:Product) {      
    }
}
export class EditProductActionError implements Action {
    type: ProductActionType=ProductActionType.EDIT_PRODUCT_ERROR;  
    constructor(public payload:string) {    
    }
}

/* Update Product Actions */
export class UpdateProductAction implements Action {
    type: ProductActionType=ProductActionType.UPDATE_PRODUCT;
    constructor(public payload:Product) {
    }
}
export class UpdateProductActionSuccess implements Action {
    type: ProductActionType=ProductActionType.UPDATE_PRODUCT_SUCCESS;
    constructor(public payload:Product) {      
    }
}
export class UpdateProductActionError implements Action {
    type: ProductActionType=ProductActionType.UPDATE_PRODUCT_ERROR;  
    constructor(public payload:string) {    
    }
}

export type ProductAction=
    GetAllProductAction | GetAllProductActionSuccess | GetAllProductActionError
|   GetSelectedProductAction | GetSelectedProductActionSuccess | GetSelectedProductActionError 
|   GetAvailableProductAction | GetAvailableProductActionSuccess | GetAvailableProductActionError  
|   SearchProductAction | SearchProductActionSuccess | SearchProductActionError  
|   SelectProductAction | SelectProductActionSuccess | SelectProductActionError  
|   DeleteProductAction | DeleteProductActionSuccess | DeleteProductActionError 
|   AddProductAction | AddProductActionSuccess | AddProductActionError 
|   SaveProductAction | SaveProductActionSuccess | SaveProductActionError 
|   EditProductAction | EditProductActionSuccess | EditProductActionError
;
