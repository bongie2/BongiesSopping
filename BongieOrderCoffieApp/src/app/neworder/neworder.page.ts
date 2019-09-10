import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.page.html',
  styleUrls: ['./neworder.page.scss'],
})
export class NeworderPage implements OnInit {
  categories
  
  constructor(public orderService:OrderService, public route:ActivatedRoute) {
    this.categories=this.orderService.getCategories()
   }

  ngOnInit() {
  }
  
  getName(name){
    this.orderService.getName(name);
  }
}
