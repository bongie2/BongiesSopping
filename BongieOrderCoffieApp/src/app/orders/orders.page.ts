import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
Coffee = [];
  constructor(public orderService:OrderService) { 
    this.Coffee=this.orderService.getOrder();
  }

  ngOnInit() {
  }

}
