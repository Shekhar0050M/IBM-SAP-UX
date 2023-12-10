namespace books;

using { Currency, managed,cuid } from '@sap/cds/common';

entity Books : managed, cuid{

    @title : 'Book Title'
    title: String;
    
    @title : 'Book Description'
    descr: String;
    
    @title : 'Book Stock'
    stock: Integer;
    
    @title : 'Book Price'
    price: Decimal;
    
    @title : 'Book Currency'
    currency: Currency;
    
    @title : 'Book Authors'
    authors: Association to one Authors;
}

entity Authors: managed, cuid {
    
    @title : 'Author Name'
    name: String;
}

