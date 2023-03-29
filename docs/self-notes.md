# Vue JS 3 Tutorial for Beginners

This will be notes of the course.

## #1 - Introduction

### Vue Widgets

Vue components to be created to drop into a page (either Vue or non-Vue):

- The component state would be managed based on that page, independent of the other states if the component is used elsewhere.

### Vue Websites

Creating a SPA (Single Page Application) and is most commonly used. Vue's SPA intercepts the requests from the client and retriggers it, when normally they are sent to the server.

### Vue 3 New Features

- Composition API: `setup()` function is all we need to do this (will be in Part 9)
- Multiple Root Elements: Many root elements side by side
- Teleport Component: render content from one component in a different place in DOM
- Suspense Component
- TS Support
- Improved reactivity & performance gains

## #2 - Vue Basics

Once Vue is injected via CDN, we can use the whole Vue suite.

- template:
  - When see `data-v-app`, that means we are using Vue app to mount the DOM.
- data:
- functions:

### Data & Templates

To do dynamic data or data from the html into the component, we use the `data` function in the Vue component. Being able to use this means that we are not hard coding data and we manipulate it in the Vue component.

Note: Accessing the variable must be within the Vue component and the naming must be very exact.
