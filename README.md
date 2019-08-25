# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Basically the process is as follows:

1. The browser, through the underlying network interface, submits a request to the ISP DNS Server requesting access to https://www.techtonic.com/.
2. The ISP DNS Server searches for the site https://www.techtonic.com/ in its cache:
  - if it obtains the IP address of the domain in the cache, it sends the IP address to the browser
  - If the domain is not in the cache:
    - The ISP's DNS server queries another DNS Servers (Root DNS Server).
    - Once the IPS's DNS Server receives the domain address, it saves it in its cache for future requests
    - and, finally it sends the corresponding IP address to the browser.
3. The browser now connects directly to the server https://www.techtonic.com/ to request any resource or service.


## From start to finish, how does data reach you to be rendered in the browser?

The browser (specifically the browser engine) is responsible for the process of presenting the data on the screen. In general terms the process is something like this:

1. The browser converts the flow of received bytes (either from the network or from the local system) into nodes to build the render tree (DOM + CSSOM).
2. Then a Layout process, take the render tree, to calculate the positions and sizes of each of the elements in the browser viewport.
3. Once you have the exact layout of the computed elements, the browser draws each individual node on the screen.

Note: with respect to JavaScript, during step 1, if a <script> node is found during the construction of the DOM, it stops, until the execution of the JavaScript is finished, then the DOM continues its construction. On the other hand, JavaScript execution always waits until the CSSOM is ready.

The entire process, of the steps since the browser receives HTML, CCS and JS as bytes, and converts them into elements represented on the screen is known as THE CRITICAL RENDERING PATH.

## What code is rendered in the browser?

Specifically, the data that is rendered in the browser comes from the nodes of the Render Tree.
Which are a set of elements (texts, images, video, etc.) obtained from HTML tags, CSS styles, JavaScript, and resources (audio, video, image) from a remote server or from a local system. The browser during the execution of the Critical Rendering Path identifies the elements that it must represent on the screen.

## What is the server-side code’s main function?

In general terms, the main function is to provide access to the application's business logic services , connections to resources and databases, another business services such as messaging queue , etc. by abstracting the business logic of the presentation logic (usually on the side of the client). This code is executed on the server side (web server / enterprise server), typically written in languages such as Java, Ruby, Python, Go, among others.

## What is the client-side code’s main function?

The main function is to perform the presentation logic of a web application, as well as improve the appearance, behavior and user experience. The necessary validations and logic verifications are delegated here before sending a request to the remote server. It also handles the presentation of errors and messages suitable for the end user. This type of code is executed in the browser, and is typically written in HTML, CSS, JavaScript, React JS, etc.

## What is runtime?

A runtime, in simple terms, is an environment in which a program runs. Runtime systems are responsible for providing to the running programs with various services so they can run, these services can include: memory management, how the program should access the variables, access to system resources, mechanisms for passing parameters, etc

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

If you refer to the server side (hosting), we can say that there is an instance of these assets. Now, as these client-side assets are sent to the client's browser, we can say that multiple instances are sent according to the requests, it is up to the browser and its cache system whether or not to store those instances on the client side.

## How many instances of the server-side code are available at any given time?

In general, it depends on the programming language used and the characteristics of the application server, as well as the architecture of the service we are designing. For example, in Java the application server can instantiate different instances of a service concurrently to respond to customer requests, and depending on the service life cycle it may be active or inactive at a given time. As for the source code, the server has the file of the service or program that is running.



## How many instances of the databases connected to the server application are created?

First, let's clarify the term Database Instance, which generally describes a complete database environment, including RDBMS, table structure, stored procedures, and other functionalities. Thus, for example, an administrator may create multiple instances of the same database for different purposes (production, QA or development for example).

Then, being so, typically the application server will connect to a database instance to execute, for example, some SQL instructions. For this, the server will use a pool of connections that it can reuse and reassign to different requests.

Now, it may be the case, according to the architecture of the service that we are designing, that we can have a Database Cluster, or a swarm, or a Cloud Database, in which we may have multiple instances of the BD.

In any case, depending on the architecture where we are working, our server will usually go against an instance of the database regardless of the underlying implementation. But, if for example our system needs to connect to different instances of Databases, then the server will connect to the appropriate instance or appropriate instances depending on the requirement that it is processing.
