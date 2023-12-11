using { books} from '../db/schema';

service MyService {

    entity Books @(restrict: [
        {
            grant: [
                'READ',
                'POST',
                'PUT',
                'PATCH'
            ],
            to   : 'Admin'
        },
        {
            grant: ['READ'],
            to   : 'Viewer'
        }
    ])  as projection on books.Books;
    entity Authors @(restrict: [
        {
            grant: [
                'READ',
                'POST',
                'PUT',
                'PATCH'
            ],
            to   : 'Admin'
        },
        {
            grant: ['READ'],
            to   : 'Viewer'
        }
    ])  as projection on books.Authors;
    // entity Books as projection on books.Books;
    // entity Authors as projection on books.Authors;
}

