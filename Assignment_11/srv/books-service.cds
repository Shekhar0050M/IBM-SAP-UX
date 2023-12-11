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

    annotate Books with @odata.draft.enabled;
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
}

