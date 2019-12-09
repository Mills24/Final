import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.services';

@Component ({
    selector: 'pm-products',
    templateUrl: './product.component.html'
})
export class ProductListComponent{
    pageTitle: string = "Acme Product Managemant";
    imageWidth: number = 50;
    imageMargin: number = 5;
    showImage: boolean = true;
    //listFilter: string = "Filter Me";
    products: IProduct[] 
    filteredProducts: IProduct[];
      constructor(private productService : ProductService){
        //this.products = productService.getProducts();
        this.productService.getProducts().subscribe(prodObserved =>{
          this.products = prodObserved;
          this.filteredProducts = this.products;
        });
        
      }
      
      toggleImage(): void{
          this.showImage = !this.showImage;
      }

      _listFilter: string = "Filter Me";
      get listFilter(): string{
        return this._listFilter;
      }

      set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = value ? this.performFilter(value) : this.products;
      }
      
      performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter(( product => product.productName.toLowerCase().indexOf(filterBy) !== -1));
      }

      gotClicked(message : string) : void{
        this.pageTitle = message;
      }

}