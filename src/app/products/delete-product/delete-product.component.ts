import { ProductsService } from './../products.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent {
  productId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data['id'];
    });

    this.ProductsService.deleteProduct(this.productId).subscribe((res) => {
      console.log(res);
    });
  }
}
