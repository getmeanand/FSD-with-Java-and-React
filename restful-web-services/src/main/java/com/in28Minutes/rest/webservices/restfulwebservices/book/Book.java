package com.in28Minutes.rest.webservices.restfulwebservices.book;

import java.util.Date;

public class Book {
	private int id;
	private String bookName;
	private String author;
	private String user;
	private Date retDate;

	public Book(int id, String bookName, String author, String user,Date retDate) {
		super();
		this.id = id;
		this.bookName = bookName;
		this.author = author;
		this.user = user;
		this.retDate = retDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public Date getRetDate() {
		return retDate;
	}

	public void setRetDate(Date retDate) {
		this.retDate = retDate;
	}

}
