# Lab 8 - Starter
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

   - Within a Github action that runs whenever code is pushed, because this would allow me to catch any errors in my code as soon as possible, and prevent them from making it into the production environment.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    - No, to test individual functions, I would use unit tests. 

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    - Yes, unit tests are designed to test individual units of code, such as functions or classes. The “message” feature of a messaging application is a function, so it is a good candidate for unit testing.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    - Yes, unit tests are designed to test individual units of code, such as functions or classes. The “max message length” feature of a messaging application is a function, so it is a good candidate for unit testing.