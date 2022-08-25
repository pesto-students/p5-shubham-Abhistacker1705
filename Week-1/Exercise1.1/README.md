 Description

First week assignment Exercise 1.1 asks what happens under the hood of a browser.

Solution

Browser basic functionality
A browser is a software application used to locate, retrieve and display content on the World Wide Web, including Web pages, images, video and other files.

High Level Components 

1) User interface  - Interaction with user occurs on this layer.
2)Browser Engine - Acts as abridge between User Interface and Rendering Engine.
3)Rendering Engine - Renders requested webpage on screen by interpreting HTML,XML styled using CSS.
4)Data Persistence Layer - Local DB managed in browser for user cache,cookies, bookmarks and preferences.
5)Networking Layer - Responsible for retrieving URL's using Https or Ftp.
6)Javascript Interpreter - Component responsible interpreting and executing the javascript code embedded in a website.
7)UI Backend -  Used for drawing basic widgets like combo boxes and windows.

HTML and CSS Parsers

The HTML parsing algorithm consists of two stages: tokenization and tree construction.
WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files. 

Script Execution

Scripts to be parsed and executed immediately when the parser reaches a <script> tag.
Script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched.
HTML5 can asynchronous parsing.











