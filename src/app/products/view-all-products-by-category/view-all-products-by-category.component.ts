import { Category } from './../../layout/category';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.scss'],
})
export class ViewAllProductsByCategoryComponent {
  searchCategory: Category | any;
  productsList: Product | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.searchCategory = data['id'];
      this.ProductsService.searchCategoryProducts(
        this.searchCategory
      ).subscribe((categoryData) => {
        this.productsList = categoryData;
      });
    });
  }
}
