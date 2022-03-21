# Thinkful JavaScript Project - Decoder Ring

### **Project Description**:
_You're planning a surprise birthday party for a friend who loves escape rooms and puzzles. What better way to practice your new coding skills than to build an application that will help you encode and decode all kinds of fun messages?_

This project involved writing complex algorithms in JavaScript, as well as unit tests using Mocha and Chai. There are three ciphers in which I wrote functions to either encode or decode a string message. These include a Caesar Shift, a Polybius Square, and a Substitution Cipher.

Click *[here](https://mojonesy.github.io/thinkful-decoder-ring-project/) to view the webpage and test out the ciphers!

---

- _Caesar Shift_ - This cipher shifts the letters of the alphabet left or right by a given number: a positive number shifts to the right, and a negative number to the left. To encode a message, the user provides a shift number along with the message. To decode, the user needs to know the shift number of the original message.  
`Shift = 3: "A" to "D" // Shift = -3: "A" to "X"`

- _Polybius Square_ - The standard alphabet is arranged into a grid, and each letter represents a coordinate.
![Polybius Square referenced from geeksforgeeks.org](https://media.geeksforgeeks.org/wp-content/uploads/polybius-square.png)
A message is represented by the two corresponding numbers in the grid.
`"message" = 23513434112251"`

- _Substitution Cipher_ - This cipher requires the user to provide a substitution alphabet. To encode a message, a letter from the standard alphabet is transposed to a letter in the corresponding position in the subsitution alphabet. Decoding involves the opposite process.
`"abcdefghijklmnopqrstuvwxyz" = "xoyqmcgrukswaflnthdjpzibev"` therefore
`"message" = "eykkmgy"`

---
I did not write the HTML and CSS code for the webpage. These were provided by Thinkful.

Polybius Square image - https://media.geeksforgeeks.org/wp-content/uploads/polybius-square.png
