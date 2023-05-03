import { ProductsService } from './../products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  constructor(private ProductsService: ProductsService) {}

  ngOnInit() {}

  onSubmit(form: any) {
    console.log(form.value);

    let addProduct = {
      id: form.value.id,
      productName: form.value.product_name,
      categoryId: form.value.category_id,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImage: '',
      isAvailable: form.value.is_available,
      reviews: form.value.product_review,
      color: form.value.product_color,
    };

    console.log(addProduct);

    this.ProductsService.createProduct(addProduct).subscribe((res) => {
      console.log(res);
    });
  }
}
