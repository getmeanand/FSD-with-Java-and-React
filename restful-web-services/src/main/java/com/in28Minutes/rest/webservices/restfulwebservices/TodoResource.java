package com.in28Minutes.rest.webservices.restfulwebservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.in28Minutes.rest.webservices.restfulwebservices.todo.Todo;
import com.in28Minutes.rest.webservices.restfulwebservices.todo.TodoHardcodedService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class TodoResource {

	@Autowired
	private TodoHardcodedService todoService;

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.findAll();

	}
}
