package com.in28Minutes.rest.webservices.restfulwebservices.book;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class bookHardcodedService {

	private static List<Book> bookList = new ArrayList<Book>();
	private static int idCounter = 0;
	static {
		bookList.add(new Book(++idCounter, "Micro Services1", "Anandha", "abc",new Date()));
		bookList.add(new Book(++idCounter, "Java", "Janani", "der",new Date()));
		bookList.add(new Book(++idCounter, "Azure Services", "Anandha", "vgf",new Date()));
		bookList.add(new Book(++idCounter, "C++", "Anandha", "eer",new Date()));

	}

	public List<Book> findAll() {
		return bookList;
	}

	public Book save(Book book) {

		if (book.getId() == -1 || book.getId() == 0) {
			book.setId(++idCounter);
			bookList.add(book);
		} else {
			deleteById(book.getId());
			bookList.add(book);
		}

		return book;
	}

	public Book deleteById(long id) {
		Book book = findById(id);
		if (book == null)
			return null;

		if (bookList.remove(book)) {
			return book;
		}

		return null;
	}

	public Book findById(long id) {
		for (Book book : bookList) {
			if (book.getId() == id) {
				System.out.println("Book Found" + id);
				return book;
			}
		}

		return null;
	}
}
