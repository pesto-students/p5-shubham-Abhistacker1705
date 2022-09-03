Description

First week assignment Exercise 1.1 asks what happens under the hood of a browser.

Solution

Browser basic functionality
A major role of a web browser is to accept a web URL via an address bar, fetch resources, and display them on the screen.

<img src="images/Basic Web working.png"/><br>


High Level Components

1. User interface - Interaction with user occurs on this layer.
2. Browser Engine - Acts as abridge between User Interface and Rendering Engine.
3. Rendering Engine - Renders requested webpage on screen by interpreting HTML,XML styled using CSS.
4. Data Persistence Layer - Local DB managed in browser for user cache,cookies, bookmarks and preferences.
5. Networking Layer - Responsible for retrieving URL's using Https or Ftp.
6. Javascript Interpreter - Component responsible interpreting and executing the javascript code embedded in a website.
7. UI Backend - Used for drawing basic widgets like combo boxes and windows.

<img src="images/Browser components.png"/><br>


Browsers functionality can be classified into four major sections and these include:

1)Fetch
2)Process
3)Display
4)Storage

=>Fetch

A major subsystem called network layer plays a vital role in fetching data from subsequent web servers via the internet.

The network layer

Accepts URLs from the browser user interface and is responsible for making network calls to fetch resources via HTTP/FTP protocols.

It feeds data to the process subsystem called rendering engine as it becomes available and is usually done in byte size to improve performance.

If the requested website implements a cache, a copy of the data is made in App Cache or Service Workers for next time. Caches are great for their quick response times and saving network requests for regular visits.

The browser initially looks for any cache availability on local memory for requested URLs. Otherwise, the network layer creates an HTTP packet with a domain name for requesting a web resource over the internet.

This layer plays a major role in the user experience. It can be a bottleneck in web performance, since browsers wait for remote data/content to arrive. Various techniques can be used to reduce this impact on the user’s experience.

=>Process
Data accepted from network layer is parsed and gone through a series of process to be displayed in screen.
Rendering Engine, Javascript Engine and UI backend are part of process.

Rendering Engine

<img src="images/Rendering Engine Flow.png"/><br>
Rendering Engine is responsible for displaying the web page requested by fetching resources ie. HTML, CSS, images etc. from the server done with the help of networking component .

<img src="images/Rendering HTML CSS.png"/><br>


HTML and CSS is parsed seperately to create DOM and CSSOM and then both are composited together to create a Render tree.
Once the render tree is constructed, it undergoes layout and painting processes, and displays the output on the screen.
The layout process includes calculating dimensions and exact coordinates where each element should appear on the viewport.
The painting process includes filing the layout with style attributes like color, background and other CSS properties.
The rendering engine processes data in chunks and displays the content as soon as possible. It will not wait until the entire document content undergoes the layout and painting processes.

JavaScript Engine

Enables parsing of Javascript code to machine code and executes it.
Different browsers use different engines.

Two components: the memory heap and the call stack.

The memory heap is where memory is allocated for variables, functions and other JS elements.

The call stack is basically a queue of sequential steps executed by the browser.

JavaScript is a single-threaded process and each entry or execution step is a stack frame.

=>Display
Systems responsible for displaying contents to users. User Interface and Browser Engine are components responible for displaying contents.

User Interface

The visual appearance of the browser normally includes an address bar to accept web URLs, and navigation buttons such as a back, forward, refresh, and a home and bookmarks bar , viewport for fetched contents and communicates with other components to display contents.

Browser Engine

The browser engine provides a high-level interface to the rendering engine loads a given URL and supports browsing actions such as navigating forward, back and reload.

It also provides hooks for viewing various aspects of the browsing session. For example, viewing current page load progress and JavaScript alerts.

The browser engine also allows for querying and manipulating the rendering engine settings.

=>Data Storage

Data persistence is achieved through various browser APIs. Some of them include:

1)Local storage
2)Session Storage
30Cookies
4)WebSQL
5)IndexedDB
6)FileSystem
7)AppCache
8)Service Workers

Local storage and Session storage are key-value pairs that can store any JS objects and functions in the browser.

Session storage persists the data on the browser as long as a website session is active. Local storage is the memory on the browser. It persists data until it is cleared or altered explicitly by the user or JavaScript code.These Session and Local web storage limits are 5MB per object, and 50MB per system.

Cookies are collections of key-pair data stored on the browser memory. They are sent back and forth between client and server.These are expensive and are the least performant of the data persistence methods. However, they are very useful when privacy and security come into the picture.

WebSQL, IndexedDB, and FileSystem have the abilities to store data on browser depending on size, performance, and necessity.

App Cache was introduced in HTML5. It stores website static content and serves UI content during network downtime.

Service Workers are Google’s new way of caching website data for offline usage.
