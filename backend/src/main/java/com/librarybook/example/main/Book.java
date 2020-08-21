package com.librarybook.example.main;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.DynamicUpdate;

@Entity
@DynamicUpdate
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String bookname;
	
	@Column
	private String author;
	
	
	  @ManyToOne
	  
	  @JoinColumn(name="library_id") private Library library;
	 

	public Book() {

	}

	public Book(Long id, String bookName, String author) {
		super();
		this.id = id;
		this.bookname = bookName;
		this.author = author;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBookName() {
		return bookname;
	}

	public void setBookName(String bookName) {
		this.bookname = bookName;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
	
	
	  public Library getLibrary() { return library; }
	  
	  public void setLibrary(Library library) { this.library = library; }
	 

	
	  @Override public int hashCode() { 
		  final int prime = 31; int result = 1;
		  
	  result = prime * result + ((author == null) ? 0 : author.hashCode());
	  result
	  = prime * result + ((id == null) ? 0 : id.hashCode()); result = prime *
	  result + ((bookname == null) ? 0 : bookname.hashCode()); return result; }
	 

	
	  @Override public boolean equals(Object obj) { if (this == obj) return true;
	  if (obj == null) return false; if (getClass() != obj.getClass()) return
	  false; Book other = (Book) obj; if (author == null) { if (other.author !=
	  null) return false; } else if (!author.equals(other.author)) return false; if
	  (id == null) { if (other.id != null) return false; } else if
	  (!id.equals(other.id)) return false; if (bookname == null) { if
	  (other.bookname != null) return false; } else if
	  (!bookname.equals(other.bookname)) return false; return true; }
	 

}