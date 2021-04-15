import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
import { ProductAction , ProductActionType } from "./product.actions";


export enum ProductStateEnum {
    LOADING="Loading",  // Données en cours de chargement
    LOADED="Loaded",    // Données chargées
    ERROR="Error" ,     // Erreur
    INITIAL="Initial",  // Etat initiale
    ADD="Add",          // Ajout 
    EDIT="Edit",        // Edition
    UPDATED="Updated"   // MAJ
}

// Définie l'objet du state
export interface ProductState {
    products:Product[],
    errorMessage:string,
    dataState:ProductStateEnum,
    currentProduct: Partial<Product>, // Pour rendre Product optionnel
    currentAction: Partial<ProductAction>
}

/* Initialiser le state de l'appli (etat initiale)*/
const initState:ProductState={
    products:[],
    errorMessage:"",
    dataState:ProductStateEnum.INITIAL,
    currentProduct:{},
    currentAction:{}
}

/*
Permet de renvoyer un nouveau state,
à partir du state en cours, et de l'action dispatchée dans le store, 
fournies en entrée
*/
export function productReducer(state: ProductState=initState, action:Action):ProductState {
    switch(action.type) {
        /* Get All Products */
        case ProductActionType.GET_ALL_PRODUCTS:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} // copier le state actuel dans un nouveau objet
        case ProductActionType.GET_ALL_PRODUCTS_SUCCESS:
            return {...state, dataState:ProductStateEnum.LOADED, products:(<ProductAction>action).payload, currentAction:<ProductAction>action} 
        case ProductActionType.GET_ALL_PRODUCTS_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action} 
        
        /* Get Selected Products */
        case ProductActionType.GET_SELECTED_PRODUCTS:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.GET_SELECTED_PRODUCTS_SUCCESS:
            return {...state, dataState:ProductStateEnum.LOADED, products:(<ProductAction>action).payload, currentAction:<ProductAction>action} 
        case ProductActionType.GET_SELECTED_PRODUCTS_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action}
        
        /* Get Available Products */
        case ProductActionType.GET_AVAILABLE_PRODUCTS:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.GET_AVAILABLE_PRODUCTS_SUCCESS:
            return {...state, dataState:ProductStateEnum.LOADED, products:(<ProductAction>action).payload, currentAction:<ProductAction>action} 
        case ProductActionType.GET_AVAILABLE_PRODUCTS_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action} 
        
        /* Search Products */
        case ProductActionType.SEARCH_PRODUCTS:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.SEARCH_PRODUCTS_SUCCESS:
            return {...state, dataState:ProductStateEnum.LOADED, products:(<ProductAction>action).payload, currentAction:<ProductAction>action} 
        case ProductActionType.SEARCH_PRODUCTS_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action}

        /* Select Product */
        case ProductActionType.SELECT_PRODUCT:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.SELECT_PRODUCT_SUCCESS:
            let product: Product=(<ProductAction>action).payload;
            let listProduct = [...state.products]; // ... pour récupérer une copie de products
            let data:Product[]=listProduct.map(p=>p.id==product.id?product:p); // MAJ de la liste
            return {...state, dataState:ProductStateEnum.LOADED, products:data, currentAction:<ProductAction>action} 
        case ProductActionType.SELECT_PRODUCT_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action}
        
        /* Delete Product */
        case ProductActionType.DELETE_PRODUCT:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.DELETE_PRODUCT_SUCCESS:
            let prd: Product=(<ProductAction>action).payload;
            let index=state.products.indexOf(prd);
            let productList = [...state.products]; // ... pour récupérer une copie de products
            productList.splice(index,1);
            return {...state, dataState:ProductStateEnum.LOADED, products:productList, currentAction:<ProductAction>action} 
        case ProductActionType.DELETE_PRODUCT_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action}
        
        /* Add Product */
        case ProductActionType.ADD_PRODUCT:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.ADD_PRODUCT_SUCCESS:
            return {...state, dataState:ProductStateEnum.ADD, currentAction:<ProductAction>action} 
        case ProductActionType.ADD_PRODUCT_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action}
        
        /* Save Product */
        case ProductActionType.SAVE_PRODUCT:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.SAVE_PRODUCT_SUCCESS:
            let prods:Product[]=[...state.products];  // ... pour récupérer une copie de products
            prods.push((<ProductAction>action).payload);
            return {...state, dataState:ProductStateEnum.LOADED, products:prods, currentAction:<ProductAction>action} 
        case ProductActionType.SAVE_PRODUCT_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action}
        
        /* Edit Product */
        case ProductActionType.EDIT_PRODUCT:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.EDIT_PRODUCT_SUCCESS:
            return {...state, dataState:ProductStateEnum.LOADED, currentProduct:(<ProductAction>action).payload, currentAction:<ProductAction>action} 
        case ProductActionType.EDIT_PRODUCT_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action}
        
            /* Update Product */
        case ProductActionType.UPDATE_PRODUCT:
            return {...state, dataState:ProductStateEnum.LOADING, currentAction:<ProductAction>action} 
        case ProductActionType.UPDATE_PRODUCT_SUCCESS:
            let updateProduct: Product=(<ProductAction>action).payload;
            let productsList:Product[]=state.products.map(p=>(p.id==updateProduct.id)?updateProduct:p); // MAJ de la liste
            return {...state, dataState:ProductStateEnum.UPDATED, products:productsList, currentAction:<ProductAction>action} 
        case ProductActionType.UPDATE_PRODUCT_ERROR:
            return {...state, dataState:ProductStateEnum.ERROR, errorMessage:(<ProductAction>action).payload, currentAction:<ProductAction>action}
        
        default: return {...state}
    }
}