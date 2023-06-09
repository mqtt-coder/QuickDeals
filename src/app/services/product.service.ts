import {Injectable} from "@angular/core";
import {Product} from "../models/product";
import {Category} from "../models/category";

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product(1, 'PS5', 'Una tra le migliori console di sempre', Category.Console, 499.99, ['ps5.png']),
    new Product(2, 'iPhone 12 a', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg', 'iphone12a.png', 'iphone12.png', 'iphone12.jpeg', 'iphone12a.png', 'iphone12.png'], 30.00),
    new Product(3, 'iPhone 12 b', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(4, 'iPhone 12 c', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(5, 'iPhone 12 d', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(6, 'iPhone 12 e', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(7, 'iPhone 12 f', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(4, 'iPhone 12 c', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(5, 'iPhone 12 d', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(6, 'iPhone 12 e', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(7, 'iPhone 12 f', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(4, 'iPhone 12 c', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(5, 'iPhone 12 d', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(6, 'iPhone 12 e', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(7, 'iPhone 12 f', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(4, 'iPhone 12 c', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(5, 'iPhone 12 d', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(6, 'iPhone 12 e', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(7, 'iPhone 12 f', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 eeeee', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(8, 'iPhone 12 g', 'Il nuovo iPhone 12', Category.Smartphone, 999.99, ['iphone12.jpeg']),
    new Product(9, 'NVIDIA RTX 3080', 'La nuova scheda video di NVIDIA', Category.Pc, 699.99, ['3080.jpg']),
  ];

  getById(id: number): Product | undefined {
    return this.products.find(p => p.id == id);
  }

  getCategories(): Category[] {
    return Object.values(Category);
  }

  getProductsByCategory(category: Category, page: number = 1, pageSize: number = 20): Product[] {
    return this.getProducts(p => p.category == category, page, pageSize);
  }

  getProductsByName(search: string, page: number = 1, pageSize: number = 20): Product[] {
    return this.getProducts(p => p.name.toLowerCase().includes(search.toLowerCase()), page, pageSize);
  }

  private getProducts(predicate: (p: Product) => boolean, page: number = 1, pageSize: number = 20): Product[] {
    return this.products
      .filter(predicate)
      .slice((page - 1) * pageSize, page * pageSize);
  }

  getRandomCategory(): Category {
    const randomIndex = Math.floor(Math.random() * this.getCategories().length);
    return this.getCategories()[randomIndex];
  }

  getRandomProduct(category: Category = this.getRandomCategory()): Product {
    const products = this.getProductsByCategory(category);  // Get random only from first page
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  }

  productPageCount(search: string, pageSize: number = 20): number {
    return Math.ceil(this.products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).length / pageSize);
  }

  categoryPageCount(category: Category, pageSize: number = 20): number {
    return Math.ceil(this.products.filter(p => p.category == category).length / pageSize);
  }
}
