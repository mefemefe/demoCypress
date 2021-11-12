export class TodoPage {
    
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    validateTodoText(todoIndex, expectedText) {
        cy.get(`todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }
}

// can also use "export function" for every method, instead of using a class