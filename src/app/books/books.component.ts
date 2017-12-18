import { Component } from '@angular/core';

//Services
import { BookService } from './book.service';

@Component({
  selector: 'books-cmp',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor(private bookService : BookService) {}

  //sorting
  key: string = 'name'; //set default
  //initializing p to one
  p: number = 1;

}
