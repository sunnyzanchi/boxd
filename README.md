boxd
====
For use in the console. Create boxes around text.

Usage
-----
`boxd(String | Array, options)`

Where the first argument is a string or an array of strings, and the second is optional object. Options are:

+ `type`: Type of box to create. Supported types are light, heavy, double, arc, doubleDash, heavyDoubleDash, tripleDash, heavyTripleDash, quadDash, and heavyQuadDash. boxd uses Unicode box-drawing characters, if your console font doesn't have the character it won't display properly.
+ `centered`: Boolean, whether text should be centered horizontally in the box.
+ `consoleCentered`: Boolean, whether the box should be centered in the console.
