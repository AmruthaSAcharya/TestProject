insert into library (id, name, address)
values (101,'library1', 'address1'),
(102,'library2', 'address2');

insert into book(id,bookname,author,library_id)
values(10001, 'book1', 'author1',101),
(10002, 'book2', 'author2',101),
(10003, 'book3', 'author3',102),
(10004, 'book4', 'author4',102);

