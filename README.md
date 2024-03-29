# "Offline-First" TodoMVC Example

## Project Intention

This is my attempt at building an architecture for exactly what a todo application would need: offline-first, light-weight but syncs with remote server (when online) to be able to provide multi-device utilization.

## Project Progress

[NOTE: Each commit below is a working version of the application. Listed from latest to oldest.]

- [ ] Feature: Add offline caching capability
- [ ] Feature: Add server syncing
- [ ] Feature: Add routing capability
- [x] Feature: Add edit capability
- [x] Fix: address a11y bugs that are within control (some are design decisions from the original project)
- [x] Fix: bug with clicking just off the label completes wrong todo
- [x] Feature: Add all bulk functionality: complete all, delete completed (included interesting [debounce-like solution](https://github.com/cerebralideas/todomvc-offline-react-pouchdb/blob/7dbadb68bf4594e0557693faf35edfd53c19db08/client/state/utilities.ts)) [(#7dbadb6)](https://github.com/cerebralideas/todomvc-offline-react-pouchdb/commit/7dbadb68bf4594e0557693faf35edfd53c19db08)
- [x] Feature: Add all basic todo functionality: add, complete, delete [(#ddb09fb)](https://github.com/cerebralideas/todomvc-offline-react-pouchdb/commit/ddb09fb84cc21918e22b5dca246ca4e828f29a9e)
- [x] Get the app to rerender when the PouchDB is updated [(#c242fdb)](https://github.com/cerebralideas/todomvc-offline-react-pouchdb/commit/c242fdbb15df8bc324fb576d30aed464519fbc22)
- [x] Get the TodoMVC app to render todos stored within IndexedDB using PouchDB
- [x] Initialize the application from [this previous TodoMVC application](https://github.com/cerebralideas/todomvc-universal-react-pouchdb)


## Up and Running

  ```
  npm install
  npm run build
  ```

Open `public/index.html` in your browser.

## What's an "offline-first" application?

Coming soon ...

Here's the full tech-stack that we've chosen to execute this idea:

- **TypeScript**: used for transpiling (JSX and ES6) and module bundling for universal module design
- **React**: the V in MVC
- **Express**: our lightweight, un-opinionated, server framework
- **Page.js**: our client side routing technology
- **PouchDB**: for data storage and future "offline" capabilities

#### A bit on the top 4:

> TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.
>
> _[TypeScript - typescriptlang.org](http://typescriptlang.org)_

> React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.
>
> _[React - facebook.github.io/react](http://facebook.github.io/react)_

## Learning TypeScript

The [TypeScript website](http://typescriptlang.org) is a great resource for getting started.

Here are some links you may find helpful:

- [Tutorial](http://www.typescriptlang.org/Tutorial)
- [Code Playground](http://www.typescriptlang.org/Playground)
- [Documentation](https://github.com/Microsoft/TypeScript/wiki)
- [Applications built with TypeScript](http://www.typescriptlang.org/Samples)
- [Blog](http://blogs.msdn.com/b/typescript)
- [Source Code](https://github.com/Microsoft/TypeScript)

Articles and guides from the community:

- [Thoughts on TypeScript](http://www.nczonline.net/blog/2012/10/04/thoughts-on-typescript)
- [ScreenCast - Why I Like TypeScript](http://www.leebrimelow.com/why-i-like-typescripts)

Get help from other TypeScript users:

- [TypeScript on StackOverflow](http://stackoverflow.com/questions/tagged/typescript)
- [Forums](https://github.com/Microsoft/TypeScript/issues)
- [TypeScript on Twitter](http://twitter.com/typescriptlang)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._

## Learning Express

Express has been around for a very long time, so documentation is ubiquitous. But, if you need a reference, the framework's main site is the place to go: http://expressjs.com/.

## Learning React

The [React getting started documentation](http://facebook.github.io/react/docs/getting-started.html) is a great way to get started.

Here are some links you may find helpful:

- [Documentation](http://facebook.github.io/react/docs/getting-started.html)
- [API Reference](http://facebook.github.io/react/docs/reference.html)
- [Blog](http://facebook.github.io/react/blog/)
- [React on GitHub](https://github.com/facebook/react)
- [Support](http://facebook.github.io/react/support.html)

Articles and guides from the community:

- [How is Facebook's React JavaScript library](http://www.quora.com/React-JS-Library/How-is-Facebooks-React-JavaScript-library)
- [React: Under the hood](http://www.quora.com/Pete-Hunt/Posts/React-Under-the-Hood)

Get help from other React users:

* [React on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
* [Discussion Forum](https://discuss.reactjs.org/)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._

## How it works

Coming soon ...
