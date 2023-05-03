import { ProductsService } from './../products.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent {
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

  updateProducts(form: any) {
    console.log(form.value);
    const addProduct = {
      id: form.value.id,
      productName: form.value.productName,
      categoryId: form.value.category_id,
      description: form.value.description,
      rating: form.value.rating,
      price: form.value.price,
      productImage: '',
      isAvailable: form.value.isAvailable,
      reviews: form.value.reviews,
      color: form.value.color,
    };

    console.log(addProduct);
    this.ProductsService.updateProduct(this.productId, addProduct).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
