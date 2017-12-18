import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Services
import { BookService } from '../books/book.service';

@Component({
  selector: 'book-list-cmp',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  edit : boolean = false;
  book : any;
  editableBook : any;
  bookId : any;
  name : any;
  author : any;
  numberOfPages : any;
  dateOfPublication : any;
  constructor(private bookService : BookService, public route: ActivatedRoute) {
    this.bookId = this.route.snapshot.params['id'];
    this.book = bookService.books.filter(book => book.id == this.bookId)[0];
    this.editableBook = this.book;
    this.name = this.book.name;
    this.author = this.book.author;
    this.numberOfPages = this.book.numberOfPages;
    this.dateOfPublication = this.book.dateOfPublication;
  }

  onSubmit(form){
    let updateBook = form.value;
    updateBook.id = this.bookId;
    var index = this.bookService.books.findIndex((book)=>{return book.id == this.bookId});
    if(index >= 0){
      this.bookService.books[index] = form.value;
    }
    this.book = this.bookService.books.filter(book => book.id == this.bookId);
    this.book = this.book[0];
    this.edit = !this.edit;
  }

  onCancel(){
    this.name = this.book.name;
    this.author = this.book.author;
    this.numberOfPages = this.book.numberOfPages;
    this.dateOfPublication = this.book.dateOfPublication;
  }
}
