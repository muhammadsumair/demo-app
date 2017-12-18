import { Injectable } from '@angular/core';

@Injectable()
export class BookService {
  books = [
    {
      id: 1,
      name : 'Book One',
      author : 'Author One',
      numberOfPages : 278,
      dateOfPublication : '2017-7-21'},
    {
      "id": "9781593275846",
      "name": "Eloquent JavaScript, Second Edition",
      "author": "Marijn Haverbeke",
      "dateOfPublication": "2014-12-14",
      "numberOfPages": 472
    },
    {
      "id": "9781449331818",
      "name": "Learning JavaScript Design Patterns",
      "author": "Addy Osmani",
      "dateOfPublication": "2012-07-01",
      "numberOfPages": 254
    },
    {
      "id": "9781449365035",
      "name": "Speaking JavaScript",
      "author": "Axel Rauschmayer",
      "dateOfPublication": "2014-02-01",
      "numberOfPages": 460
    },
    {
      "id": "9781491950296",
      "name": "Programming JavaScript Applications",
      "author": "Eric Elliott",
      "dateOfPublication": "2014-07-01",
      "numberOfPages": 254
    },
    {
      "id": "9781593277574",
      "name": "Understanding ECMAScript 6",
      "author": "Nicholas C. Zakas",
      "dateOfPublication": "2016-09-03",
      "numberOfPages": 352
    },
    {
      "id": "9781491904244",
      "name": "You Don't Know JS",
      "author": "Kyle Simpson",
      "dateOfPublication": "2015-12-27",
      "numberOfPages": 278
    },
    {
      "id": "9781449325862",
      "name": "Git Pocket Guide",
      "author": "Richard E. Silverman",
      "dateOfPublication": "2013-08-02",
      "numberOfPages": 234
    },
    {
      "id": "9781449337711",
      "name": "Designing Evolvable Web APIs with ASP.NET",
      "author": "Glenn Block, et al.",
      "dateOfPublication": "2014-04-07",
      "numberOfPages": 538
    }

  ];
  constructor() { }
}
