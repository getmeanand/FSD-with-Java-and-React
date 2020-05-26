package com.in28Minutes.rest.webservices.restfulwebservices.book;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

	@Autowired
	private bookHardcodedService bookService;

	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean() {
		return new AuthenticationBean("You are authenticated");
	}

	@PutMapping("/users/{username}/books/{id}")
	public ResponseEntity<Book> updateTodo(@PathVariable String username, @PathVariable long id,
			@RequestBody Book book) {

		Book updatedBook = bookService.save(book);

		return new ResponseEntity<Book>(updatedBook, HttpStatus.OK);
	}

	@GetMapping("/users/{username}/books")
	public List<Book> getAllBooks(@PathVariable String username) {
		return bookService.findAll();

	}

	@GetMapping("/users/{username}/books/{id}")
	public Book getBookById(@PathVariable String username, @PathVariable int id) {
		return bookService.findById(id);

	}

	@PostMapping("/users/{username}/books")
	public ResponseEntity<Void> updatebook(@PathVariable String username, @RequestBody Book book) {

		Book createdBook = bookService.save(book);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdBook.getId())
				.toUri();
		System.out.println("uri:" + uri);

		return ResponseEntity.created(uri).build();
	}

}
