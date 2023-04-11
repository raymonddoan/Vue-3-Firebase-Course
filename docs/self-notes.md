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

### Click Events

In Vue, directives are specific calls to functions that you can make to the component(?). For example:

- When looking for an event, `v-on` is used.
  - When specific to a click event, `v-on:click` is used.

### Conditional Rendering

`v-if` is the directive to allows for this. You can set the data of the component by using the `this` constructor.

- `v-if` completely removes the element from the DOM (less performant, so use cases would be login dependencies, etc)
- `v-show` only hides the element from the DOM (more performant)

## #3 - Vue.js Basics Part 2

### Other mouse events

There are other mouse events like `mouseover`, `mouseleave` and `dblClick`.

When using these mouse events, we get access to the `event` object. This is made possible by handling the mouse event.

`handleEvent($event, 5)` allows us to use the event object AND pass an explicit data point if needed.

### Outputting lists (v-for)

Used to render lists.

### Attribute Binding

`v-bind` allows the attribute to be dynamic.

ie. `v-bind:href` or `:href` will check the component to look for listed variable.

### Dynamic classes

Dynamic classes are added by `v-bind`ing variables to the class attribute of the DOM element.

### Computed properties

Computed properties are a way to define data in the component, based on the data within the component.

## #4 - The Vue CLI & Bigger Projects

### Project walkthrough

Since we are directly importing Vue, then we don't need to use `Vue.createApp`. We can also get the specific module into the code, not the whole Vue package.

### Vue files & templates

No need for a `<div>` to wrap everything.

### Template refs

Adding 'handle' for DOM element allows us to reference to the specific DOM element in the script. To reference in the `<script>`, you use `this.$refs`.

### Multiple components

Split applications into multiple Vue components.

Reasons:

- Makes it reusable
- More maintainable

Component Tree -> Parents Component (1st parent is generally the App.vue) -> Children Component

Naming convention: Create the component in PascalCase

## Vue CLI & Bigger Projects

### Scoped & global CSS

Styling is passed down from the parent to the child component, however the styling in the child component will persist through the entire application.

To avoid this:

- Set `<style scoped>` to scope all the style to the component itself (Vue is able to do this by adding a specific but randomised `data-v` attribute)
  - Downsides are a performance hit and you might want to pass the styling into the html file but cannot because it is scoped.
- Make it the styling more specific (ie. `.modal h1`)

### Props

Prop drilling - passing props from parent component to the child component. Good so that we can define the data in one place.

### Emitting custom events

Fire an event within the child component and then the parent listen to the child component

### Click event modifiers

Use this to customise (add restrictions, etc) the click event. Some of these modifiers include `@click.self`, `@click.right`, etc...

### Slots

Slots are useful to passing in templates into components. Props pass in primitives, whilst slots are for templates.

You can also do named slots:

In App.vue:

```vue
<template v-slot:links>
  <a href="#">Sign up now</a>
  <a href="#">More info</a>
</template>
```

In Modal.vue:

```vue
<slot name="links"></slot>
```

### Teleport

Taking a small part of another modal and injecting it in another area. We can do this by using the `<teleport to="{specific class}"></teleport>`.

Note: You will lose the styling on the component as it is now "injected" into another DOM element, which means you would need to update the styling.

## #6 - Build a Reaction Timer Game

### Lifecycle Hooks

created -> mounted -> updated -> unmounted/destroyed

- beforeCreate: before the component is initialised
- created: can't access data or template
- beforeMount: component compiles, but not mounted. Can access the data and template.
- mounted:
- beforeUpdate & updated: this occurs when data changes
- beforeUnmount & unmounted: used for component cleanup

More details in [link](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)

## #7 - Forms & Inputs

### VModel && 2-way data binding

VModel = Another Vue directive to track the data and update it accordingly.

2-way data binding means the template updates the data, and then the data also updates the template as well.

## #8 - The Vue Router

### Why Vue Router?

Redirects the client to render another component without making a call back to the server.

### Vue Router Setup


