# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Basically the process is as follows:

1. The browser, through the underlying network interface, submits a request to the ISP DNS Server requesting access to https://www.techtonic.com/.
2. The ISP DNS Server searches for the site https://www.techtonic.com/ in its cache:
  - if it obtains the IP address of the domain in the cache, it sends the IP address to the browser
  - If the domain is not in the cache:
    - The ISP's DNS server queries another DNS Server (Root DNS Server).
    - Once the DNS Server of the ISP receives the domain address, it saves it in its cache for future requests
    - and, finally it sends the corresponding IP address to the browser.
3. The browser now connects directly to the server https://www.techtonic.com/ to request any resource or service.


## From start to finish, how does data reach you to be rendered in the browser?

put your answer here

## What code is rendered in the browser?

put your answer here

## What is the server-side code’s main function?

put your answer here

## What is the client-side code’s main function?

put your answer here

## What is runtime?

put your answer here

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

put your answer here

## How many instances of the server-side code are available at any given time?

put your answer here

## How many instances of the databases connected to the server application are created?

put your answer here
