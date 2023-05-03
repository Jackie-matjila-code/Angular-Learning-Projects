import { Category } from '../category';
import { ProductsService } from './../../products/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categoryList: Category | any;

  constructor(private ProductsService: ProductsService) {}

  ngOnInit() {
    this.ProductsService.getAllCategories().subscribe((data) => {
      this.categoryList = data;
    });
  }
}
