# About

This solution was made by [@pwsera](https://github.com/pwsera) during the [CSS for JS Developers course](https://css-for-js.dev/).

Access the initial files at the _main_ branch [here](https://github.com/pwsera/sole-and-ankle/tree/main) and try your own solution!


# Sole&Ankle — Module 4 workshop

In this workshop, our goal is to finish building an e-commerce store using flexbox properties and styled-components.


- Access the Figma: https://www.figma.com/file/kAL3AumTUV11y1IqHhltB6/Sole-and-Ankle-%E2%80%94-Mockup

This project uses Create React App. To get started, run the following terminal commands:

- `npm install`
- `npm run start`

You can then visit the app in-browser; it defaults to http://localhost:3000.

## Exercise 1: Superheader

Let's build the “Superheader” a thin grey strip that runs along the top of the page:

![Close-up screenshot of the superheader](./docs/exercise-1-solution.png)

Use Flexbox to correctly align the elements within `src/components/SuperHeader`.

## Exercise 2: Header

Continuing on down, let's tackle the main header:

![Close-up screenshot of the header and superheader](./docs/exercise-2-solution.png)

## Exercise 3: Shell

Next up, we want to tackle the "framing" around the shoe grid — the sidebar and title/filter.

![Screenshot of the store, with everything except the sneaker grid](./docs/exercise-3-solution.png)

_NOTE:_ To make life a bit easier, you may wish to comment out the `<ShoeGrid>` component. We'll work on integrating it in the next exercise.

## Exercise 4: Shoe Grid

This exercise features two mini-challenges. The second one is a chance to revisit some of the lessons learned in previous modules, and isn't as specific to Flexbox.

### 4A: Grid layout

Time to tackle the main feature of this application, the shoes!

Here's a screenshot of the final result:

![Screenshot of the store, with sneaker grid](./docs/exercise-4a-solution.png)

This is a tricky problem to solve with Flexbox—CSS Grid is a better tool for this job! Nevertheless, it can be done using Flexbox, with one caveat: the last row may be oversized:

![Screenshot of the shoe grid with one enormous sneaker, spanning 4 typical columns](./docs/giant-sneaker.png)

In a future module, we'll revisit this and see how CSS Grid can help us out :)

## 4B: Final touches

Our sneaker store is in pretty good shape, but there's a couple small bits of polish missing: the "New Release" / "Sale" flag, and the sale price detail.

_NOTE:_ This exercise has minimal flexbox implications, and is mainly about revisiting lessons learned in the previous modules (including positioned layout and styled-components). Feel free to skip it if you'd prefer!

![Screenshot of the store, with the final details added](./docs/exercise-4b-solution.png)

## To be continued!

Our sneaker store can flex to support different screen sizes, but there isn't a proper mobile or tablet view. Don't fret — we will revisit this workshop in a future module!

In the meantime, take a moment to congratulate yourself for making it through the Flexbox module!!
