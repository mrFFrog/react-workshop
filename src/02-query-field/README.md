# Step 2 - Query Field

The goal of this step is learning how to deal with forms. HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. Regular HTML forms _do_ work in React, but in most cases, it's convenient to have React keep track of the input that the user has entered into a form. The standard way to achieve this is with a technique called ["controlled components"](https://reactjs.org/docs/forms.html#controlled-components).

[Handling events](https://reactjs.org/docs/handling-events.html) within React elements is very similar to handling events on DOM elements. Event handlers will be passed instances of [`SyntheticEvent`](https://reactjs.org/docs/events.html), a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event (including`stopPropagation()` and `preventDefault()`), except the events work identically across all browsers!

🏅 Ultimately, the goal of this step is to keep the current value of the search query field in UI state.

If you run into trouble with the [tasks](#tasks) or [exercises](#exercises), you can take a peek at the final [source code](./).

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, you can jump right in by copying the step.

Complete the [setup instructions](../../README.md#setup) if you have not yet followed them.

Re-run the setup script, but use the previous step as a starting point:

```sh
npm run setup -- src/01-jsx
```

This will also back up your `src/workshop` folder, saving your work.

Now restart the app:

```sh
npm start
```

After some initial compiling, a new browser window should open up at http://localhost:3000/, and you should be able to continue on with the tasks below.

</details>

## 🐇 Jump Around

[Concepts](#-concepts) | [Tasks](#-tasks) | [Exercises](#-exercises) | [Elaboration & Feedback](#-elaboration--feedback) | [Resources](#-resources)

## ⭐ Concepts

- Maintaining UI state with the `useState` hook
- Handling user interaction
- Handling HTML form elements

## 📝 Tasks

Add a search form with a query field:

```js
const App = () => {
  return (
    <main>
      <h1>Giphy Search!</h1>

      <form>
        <input type="search" placeholder="Search Giphy" defaultValue="" />
      </form>
    </main>
  )
}
```

As of now, the DOM is maintaining the state of the input fields; React has no idea what the values of the fields are. They are currently ["uncontrolled components"](https://reactjs.org/docs/uncontrolled-components.html). We want to make them "controlled components" so we can keep track of their state within the app.

Using the [`useState` hook](https://reactjs.org/docs/hooks-state.html), add a new state variable for the query field and pass it as the `value` of the `<input>`. Then for `onChange`, update the state.

```js
import React, { useState } from 'react' // 👈🏾 import `useState`

const App = () => {
  // new state variable 👇🏾
  const [inputValue, setInputValue] = useState('')

  return (
    <main>
      <h1>Giphy Search!</h1>

      <form>
        <input
          type="search"
          placeholder="Search Giphy"
          value={inputValue} // 👈🏾 set value
          onChange={(e) => {
            // 👆🏾 pass event handler
            setInputValue(e.target.value)
          }}
        />
      </form>
    </main>
  )
}
```

> NOTE: Be sure to import `useState` from the `react` package at the top.

## 💡 Exercises

- Use the React Developer Tools to watch the `state` of `App` update as you type into the fields
- Add a `<p>` below that will display "You are typing **[inputValue]** in the field." (with the displayed value in **bold**)
- 🤓 **BONUS:** Add a button that when clicked will toggle the text in the `<p>` between being upper-cased and not
  - 🔑 _HINT:_ You will need to add a second `useState`

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=React+FUNdamentals+Workshop&entry.1984987236=Step+2+-+Query+Field). It will help seal in what you've learned.

## 👉🏾 Next Step

Go to [Step 3 - API](../03-api/).

## 📕 Resources

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [Why React hooks?](https://tylermcginnis.com/why-react-hooks/)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [`SyntheticEvent`](https://reactjs.org/docs/events.html)
- [Forms](https://reactjs.org/docs/forms.html)
- [DOM Elements](https://reactjs.org/docs/dom-elements.html)

## ❓ Questions

Got questions? Need further clarification? Feel free to post a question in [Ben Ilegbodu's AMA](http://www.benmvp.com/ama/)!
