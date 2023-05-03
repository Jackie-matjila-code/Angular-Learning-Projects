import { ProductsService } from './../products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent {
  productId = 0;
  productDetails: Product | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data['id'];

      this.ProductsService.viewProduct(this.productId).subscribe((res) => {
        this.productDetails = res;
      });
    });
  }
}
