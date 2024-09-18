ACCEPTANCE CRITERIA



Feature: BookStore

  Background:
     Given: The user must be registered on the website
     And: The user must log in to the website
     And: The user is placed in the "BookStore"

  Scenario 1: User creates a book from the store
     When: the user selects a book from the list
     And: click on the title of the book to create it
     Then: You should be redirected to the PLP of the selected book
     API: GET: Books => Status 200

Feature: Get books from store
   
  Scenario 2: The user obtains a Book from the Bookstore
    Given: The user is placed in the PDP of the selected book
    When: You click the "Add to your collection" button
    Then: You should add the selected book to the collection.
    And: A popup should appear saying "The book is already present in your collection"
    API: POST: Books => Status 200