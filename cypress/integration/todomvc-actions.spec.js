/// <reference types="cypress" />

// it.only() to run only selected tests

import { TodoPage } from '../page-objects/todo-page'

describe('todo actions', () => {

    const todoPage = new TodoPage();

    beforeEach(() => {
        //cy.visit('http://todomvc-app-for-testing.surge.sh/');  ?delay-new-todo=4000
        // cy.get('.new-todo', {timeout: 1000}).type("Clean room{enter}");
        todoPage.navigate();
        todoPage.addTodo('Clean room');

    })

    it('should add a new todo to the list', () => {
        todoPage.validateTodoText(0, 'Clean room')
    
        cy.get('.toggle').should('not.be.checked') // assert
    })
    
    
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
    
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through') // assert
    })
    
    
    it('should clear completed todos', () => {
        cy.get('.toggle').click()

        cy.contains('Clear').click()
    
        cy.get('.todo-list').should('not.have.descendants', 'li') // assert
    })
})

