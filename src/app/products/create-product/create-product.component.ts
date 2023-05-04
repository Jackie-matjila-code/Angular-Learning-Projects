import { FormControl, FormControlName, FormGroup } from '@angular/forms';
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

  addProduct = new FormGroup({
    productName: new FormControl(''),
    categoryId: new FormControl(''),
    description: new FormControl(''),
    rating: new FormControl(''),
    price: new FormControl(''),
    productImage: new FormControl(''),
    isAvailable: new FormControl(''),
    reviews: new FormControl(''),
    color: new FormControl(''),
  });

  saveProduct() {
    this.ProductsService.createProduct(this.addProduct.value).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  // onSubmit(form: any) {
  //   console.log(form.value);

  //   let addProduct = {
  //     id: form.value.id,
  //     productName: form.value.product_name,
  //     categoryId: form.value.category_id,
  //     description: form.value.description,
  //     rating: form.value.product_rating,
  //     price: form.value.product_price,
  //     productImage: '',
  //     isAvailable: form.value.is_available,
  //     reviews: form.value.product_review,
  //     color: form.value.product_color,
  //   };

  //   console.log(addProduct);

  //   this.ProductsService.createProduct(addProduct).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
