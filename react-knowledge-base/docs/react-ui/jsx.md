---
id: jsx
title: JSX in React
sidebar_label: JSX
---
# JSX in React

JSX stands for **JavaScript XML** — a special syntax extension that lets you write HTML-like code **inside JavaScript**. It's one of the core reasons why React development feels intuitive and fluid.

Instead of separating structure (HTML), behavior (JavaScript), and styling (CSS), JSX embraces the idea of **component-based UI**, where structure and logic live together — making code more readable, expressive, and powerful.

---

## 🌟 Why JSX Is a Game Changer

Imagine writing a UI like you’re telling a story — “display this title, then a button, and when it's clicked, do this.” JSX makes that possible in a single flow, **without switching between files or templating engines**.

### 👶 Real-life Analogy

Think of JSX like LEGO blocks for UI. Instead of building a house from instructions in three separate books (HTML, CSS, JS), you're now using **interactive blocks that contain their own rules and behaviors**, all snapped together in one place.

---

## 🧱 Basic Markup with JSX

Let’s start by writing something familiar — a basic UI element:

```
function App() {
  return (
    <h1>Hello, world!</h1>
  );
}
```

Looks like HTML? It is — **almost**. JSX lets you write HTML-like code inside your JavaScript, but it’s not exactly HTML.

### Key differences:

- Use `className` instead of `class`
- All tags must be closed, even self-closing ones like `<img />`, `<input />`

### 🧪 Example

```
function App() {
  return (
    <div className="container">
      <h1>Welcome to React</h1>
      <p>This is your first JSX element!</p>
      <img src="https://via.placeholder.com/100" alt="Sample" />
    </div>
  );
}
```

:::tip
JSX **must return one root element** — use a wrapper like `<div>` or React Fragments (`<>...</>`) to group multiple elements.
:::

---

## 🔁 Using JavaScript Inside JSX

JSX is not a string — it’s real JavaScript syntax. You can inject JavaScript expressions inside curly braces (`{}`), right inside your markup.

### Example:

```
const user = {
  name: "Mortadha",
  age: 19,
};

function App() {
  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>You are {user.age} years old.</p>
    </div>
  );
}
```

What’s inside `{}` can be:

- Variables
- Expressions (e.g. `1 + 2`)
- Function calls

Not allowed:

- Statements (e.g. `if`, `for`) — handle those above the return or use ternaries/`map()`.

---

## 🧠 Conditional Rendering

You’ll often want to show elements based on certain conditions. JSX supports this using:

- Ternary operators
- Short-circuiting (`&&`)

### ✅ Example with ternary:

```
const isLoggedIn = true;

function App() {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}
```

---

## 🔁 Rendering Lists

You can dynamically render arrays using `.map()` inside JSX.

### Example:

```
const items = ["React", "JSX", "Hooks"];

function App() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

:::tip
Always include a `key` prop when rendering lists in React. It helps React track element changes and updates efficiently.
:::

---

## 💡 Why Not Use Pure JavaScript or HTML?

You **could** use `document.createElement()` or manipulate the DOM by hand — but it becomes a mess quickly. JSX is:

- Easier to read
- Closer to how you think about UIs
- Declarative — you say **what** should appear, not **how** to do it

---

## 🧭 When JSX Gets Tricky

A few common things you’ll bump into:


| Problem                          | JSX Fix                          |
| -------------------------------- | -------------------------------- |
| `class` in HTML                  | Use`className` in JSX            |
| Multiple root elements           | Wrap with a`<div>` or `<>...</>` |
| Comments inside JSX              | Use`{/* comment */}`             |
| JavaScript logic in return block | Move logic above`return`         |

---

:::note
Here’s a helpful diagram showing how JSX is transpiled and rendered by React.

![JSX Flowchart](/img/jsx-flowchart.svg)

Figure 1 : How JSX Exactly works
:::
