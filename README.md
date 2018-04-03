# easy-comms
Abstraction for fetch API, in order to simplify front end code.

## Essay on the reason for writing this code

### Problem Statement

The fetch function is a refressing new addition that introduces a simplified, Promise based wrapper around the traditional ajax request XMLHttpRequest and serves as an alternative to $.ajax (Squidward curls up on the floor exclaiming, 'Jaaaakeee Weeeaarryyy...'). I like the fetch function. However there is an aparent problems that remains when writing code on a large project where fetch will be heavily used.

1. Reusing configuration

In order to create a reusable configured fetch function you will most likely write some header instance factory, or have a config, or generate get request, and other method options from a function. However you choose to abstract the creation of fetch functions you are in essence creating an abstraction from the fetch function. This means that there is a part that is not entirely abstracted properly.

2. Simplified, Configurable factory methods

If you are like me, you immediately jump to writing an abstraction as soon as you hit a point where two (with certainty of more) or three recurrances happen. When configuring a call method with fetch I commonly find myself copy and pasting parts of my config and then fixing unique parts on my template. I would like not to retype method / coppy headers. It is this action that I want to avoid, saving 10 seconds for every fetch call being made world wide :). This will apply even if you have some configureable factory method.

3. Extendability

If you want to use fetch to extend current functionality with your own, you might be tempted to do something like.
```
// Obviously wont work
class MyFetch extends fetch {}

// Obviously wont work
class MyFetch extends fetch {}

// And this is not going to work either
Object.assign({}, fetch, { talk: 'meow' });
```

### Possible Objections and Critisism

1. But OOP is dead, why not just create a method.

Carefull now, or your career might die. In an internet full of opinions it is hard to find academic reasoning that substantiate half of those opinions (even this one here). At the time of writing this I can not recall the guys name. But we all know the image of the famous engineer sitting by his electric piano just bellow the image's view but high enough to see, with his computer flickering in the back. This engineer said something along the line of, people seem to take issue with OOP but yet most of what they consider to be OOP is not OOP (Butchered that one). The point here is simple, don't think you know it all because some opinion says so.

...

### Solution

### Usage

### Contribute
