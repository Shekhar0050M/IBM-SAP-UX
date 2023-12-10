using { books} from '../db/schema';

service MyService {

    entity Books as projection on books.Books;
    entity Authors as projection on books.Authors;
}