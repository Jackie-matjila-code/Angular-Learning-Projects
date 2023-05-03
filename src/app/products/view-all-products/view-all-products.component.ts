import { Product } from '../product';
import { ProductsService } from './../products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss'],
})
export class ViewAllProductsComponent {
  productsList!: Product | any;

  constructor(private ProductsService: ProductsService) {}

  ngOnInit() {
    this.ProductsService.getAllProducts().subscribe((data) => {
      this.productsList = data;
      console.log(this.productsList);
    });
  }
}
