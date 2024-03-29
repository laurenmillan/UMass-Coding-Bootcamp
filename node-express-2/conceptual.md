### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
\
_JWT stands for JSON Web Token. It is used in web and mobile apps for authentication and authorization to securely transmit information about the user between the client and server._ 

- What is the signature portion of the JWT?  What does it do?
\
_The signature portion of the JWT is a digital signature, which is used to verify authenticity of the token. It is created by signing the header and payload of the JWT using a secret key. It allows the recipient to trust that the contents of the token are valid and were generated by a trusted source._

- If a JWT is intercepted, can the attacker see what's inside the payload?
\
_The contents of a JWT payload are encrypted, preventing an attacker from seeing the data it contains. The attacker will only see the encrypted payload._

- How can you implement authentication with a JWT?  Describe how it works at a high level.
\
_A client sends a request to the server to authenticate a user, usually with a username and password. The server verifies the credentials to determine if they are correct, then generates a JWT and sends it back to the client. The client will then store the JWT. The server receives requests from the client and verifies the JWT to determine the identity of the user making requests. The server uses the information to authorize or deny access to resources._

- Compare and contrast unit, integration and end-to-end tests.
\
_Unit tests focus on individual components of code. It is used to validate each component is working. Integration tests are used to test how different components work together. End-to-end tests are used to test the entire code from start to finish. They simulate how the user interacts with the application. All of these tests are used to ensure the software is working appropriately and is ready to be released for production._

- What is a mock? What are some things you would mock?
\
_A mock is a simulated object designed to mimic the behavior of a real object in a controlled environment. Mocks are used to isolate units of code being tested. The following can be mocked in development: databases, APIs, network connections, file systems, classes and objects._

- What is continuous integration?
\
_Continuous integration(CI) is a practice that is used by developers to frequently share code, usually in a Git repo. The goal of CI is to regularly build, test and deploy software._ 

- What is an environment variable and what are they used for?
\
_It is used to store information that may need to be shared across various programs or shell sessions._

- What is TDD? What are some benefits and drawbacks?
\
_TDD stands for test driven development. It is a practice which tests are written for each feature before the implementation of the specific feature. Its purpose is to ensure code meets the requirements and is working as planned. Benefits include improved quality of code, quicker development, easier to debug and improved documentation._

- What is the value of using JSONSchema for validation?
\
_The value of using JSONSchema is to validate a JSON file, which ensures the file contains valid data and ensures data integrity. It improves documentation and prevents bugs or errors._

- What are some ways to decide which code to test?
\
_Test the main logic of the code first, then test edge cases, security cases, test how the code integrates with other systems, user interfaces, and test code that is frequently changed._

- What does `RETURNING` do in SQL? When would you use it?
\
_`RETURNING` in SQL is used to return the values of certain columns. It is used after using insert, update, or delete._

- What are some differences between Web Sockets and HTTP?
\
_HTTP is used for simple requests and transfers of small amounts of data. Web Sockets are used for real-time communication and can handle large amounts of data._

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
\
_I felt like I had a harder time working with Express. It didn't come as easy for me to comprehend like Flask did._
