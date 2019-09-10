import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
Orders=[]
Sugar:Int32Array;
Milk:Boolean;
Quantity:number = 1;
Price:number;
TotalPrice
Name;
ProductPrice;
Categories=[{CatImage:"cappaccino.jpg", CatName:"Cappacino",CatPrice:20},
{CatImage:"latte.jpg",CatName:"Latte",CatPrice:25},
{CatImage:"Espressor.jpg",CatName:"Espresso",CatPrice:20},
{CatImage:"plain-coffee.jpg",CatName:"Plain coffee",CatPrice:18}]
  constructor() { }
  
  getCategories(){
    return this.Categories
  }

  getName(name){
    this.Name = name.CatName;
    this.ProductPrice = name.CatPrice;
  }
 
  CalcTotalprice(Quantity){
    this.TotalPrice = this.ProductPrice * Quantity;
    return this.TotalPrice;
  }

  Placeorder(name,sugar,milk,quantity,total){
    this.Orders.push({Name: name,Sugar:sugar,Milk:milk,Quantity:quantity,Price:total})
  }

  getOrder(){
    return this.Orders;
  }

  getCatName(){
    return this.Name;
  }

  getPrice() {
    return this.ProductPrice;
  }
  
}
