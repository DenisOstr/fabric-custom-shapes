### A simple example of a **fabric js** application that allows you to create and modify custom shapes.

> Goal: Create a custom shape (star or gear) and modify their properties

#### Application structure

```
src
|
|___ controls       # Directory where all control logic files are located
|    | shapeControls.js     # The file responsible for drawing shapes
|    | setShapesData.js     # The file responsible for changing the parameters of the figures
|    | fillAndStroke.js     # The file responsible for changing the fill color and border
|
|___ shapes     # The directory in which the files responsible for the mathematical logic of the figures are located
|    | star.js       # A file that implements a star shape using a mathematical formula
|    | gear.js       # A file that implements a gear shape using a mathematical formula
|
|    index.html     # Main application file
|    index.js       # Main application file that creating a canvas
|    style.css      # Styles
```