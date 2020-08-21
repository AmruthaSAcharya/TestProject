package com.librarybook.example.main;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class BookResource {

	@Autowired
	private BookJpaRepository bookRepository;

	@GetMapping("/lms/books")
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	@GetMapping("/lms/books/{id}")
	public Book getBook(@PathVariable long id) {
		return bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book Not Found with id " + id));
	}

	@DeleteMapping("/lms/books/{id}")
	public ResponseEntity<Void> deleteBook(@PathVariable long id) {

		bookRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}

	@PutMapping("/lms/books/{bookname}/{id}")
	public ResponseEntity<Book> updateBook(@PathVariable String bookname, @PathVariable long id,
			@RequestBody Book book) {
		
	//	Book existing = bookRepository.getOne(book.getId());
		 
		book.setBookName(bookname);
		
		Book bookUpdated = bookRepository.save(book);

		return new ResponseEntity<Book>(bookUpdated, HttpStatus.OK);
	}

	@PostMapping("/lms/books/{bookname}/{author}")
	public ResponseEntity<Void> createBook(@PathVariable String bookname,@PathVariable String author, @RequestBody Book book) {
		
		book.setBookName(bookname);
		book.setAuthor(author);

		Book createdBook = bookRepository.save(book);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdBook.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

}