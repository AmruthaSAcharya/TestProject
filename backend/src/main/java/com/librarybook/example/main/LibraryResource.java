package com.librarybook.example.main;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class LibraryResource {

	@Autowired
	private LibraryJpaRepository libraryRepository;

	
	  @GetMapping("/lms/library") 
	  public List<Library> getAllLibraries() { 
		  return libraryRepository.findAll(); 
	  }
	  
	  @GetMapping("/lms/library/books/{id}") 
	  public Library getBooks(@PathVariable long libraryId) { 
		  return libraryRepository.findById(libraryId).orElseThrow(()
	  -> new RuntimeException("Library Not Found with id " + libraryId)); 
		  }
	 

}