### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
  - PSQL is an object relational database management system (ORDMS) that allows a developer to create a database to store data.

- What is the difference between SQL and PostgreSQL?
  - SQL (Structured Query Language) is a human-readable language for relational databases. PSQL allows object inheritance. It is a terminal-based program for issuing database commands.

- In `psql`, how do you connect to a database?
  - To connect to a db, a developer must use the shell on the terminal, type createdb (name of db), then type psql, connect to db by typing \c (name of db), then type SELECT * FROM, to see available tables.

- What is the difference between `HAVING` and `WHERE`?
  - `HAVING` determines which grouped results to keep. `WHERE` decides which rows to use.

- What is the difference between an `INNER` and `OUTER` join?
  - `INNER` and `OUTER` join are types of joins. The `JOIN` operation allows a developer to create a table in memory by combining information from different tables. Data from tables is matched according to a join condition. The `INNER` type join only the rows that match the condition in both tables. A developer can use the `OUTER` type to join the left, right and full rows.

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
  - The difference between `LEFT OUTER` and `RIGHT OUTER` join, is that a `LEFT OUTER` type joins all the rows from the first table (left), combined with matching rows from the second table (right). The `RIGHT OUTER` type joins the matching rows form the first table (left), combined with all the rows from the second table (right).

- What is an ORM? What do they do?
  - Python is a Object-relational Mapping (ORM). It is a translation between object oriented programming in the server language and relational data in the db.

- What are some differences between making HTTP requests using AJAX and from the server side using a library like `requests`?
  - HTTP requests using AJAX, a developer uses XMLHttpRequest object to communicate with the server. Where as, using a library like `requests`, a developer can make a request to an API, and work more dynamically with the data that is being requested, while adding parameters to extract specific data.

- What is CSRF? What is the purpose of the CSRF token?
  - CSRF token is a secure random token which is used to prevent CSRF attacks. It is a uniqure token for each user session.

- What is the purpose of `form.hidden_tag()`?
  - The purpose is to protect the form against CSRF attacks. 
