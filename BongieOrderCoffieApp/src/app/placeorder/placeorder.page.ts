import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.page.html',
  styleUrls: ['./placeorder.page.scss'],
})
export class PlaceorderPage implements OnInit {
orders
newName;
placeNewOrder
Sugar;
Milk;
Quantity;
totalprice
Total_Price;
productPrice
constructor(public orderService:OrderService, public route:ActivatedRoute) {
  this.orders=this.orderService.getOrder();
  this.newName = this.orderService.getCatName();
  this.productPrice = this.orderService.getPrice()
 }

 getSugar(event){
  this.Sugar=event.detail.value;
  console.log(this.Sugar);
  
 }

 getMilk(event){
  this.Milk=event.detail.value;
  console.log(this.Milk);
  
 }

 getQuantity(event){
   this.Quantity=event.detail.value
   console.log(this.Quantity);
 }

 PlaceOrder(){
  this.orderService.Placeorder(this.newName,this.Sugar,this.Milk,this.Quantity,this.orderService.CalcTotalprice(this.Quantity))
}

CalcTotalprice(){
    this.totalprice = this.orderService.CalcTotalprice(this.Quantity)
  }
  ngOnInit() {
  }

}
