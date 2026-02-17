# Getting Started

## Installation

You can install `plus-ultra` using your preferred package manager:

::: code-group

```sh [npm]
npm install @dometena/plus-ultra
```

```sh [pnpm]
pnpm add @dometena/plus-ultra
```

```sh [yarn]
yarn add @dometena/plus-ultra
```

:::

## Setup

There are two ways to include Plus Ultra in your project:

### 1. CSS Import (Quick Start)

If you don't need deep customization, simply import the pre-compiled CSS file.

```js
import "@dometena/plus-ultra";
```

### 2. Sass Import (Recommended)

To categorize usage of variables and mixins, or to customize the theme, import the Sass source files.

```scss
// 1. Set your custom variables
$primary: #6200ee;
$secondary: #03dac6;

// 2. Import Plus Ultra
@use "@dometena/plus-ultra";
```

## Basic Usage

Plus Ultra uses standard HTML structures with specific classes. Since it is built on simple CSS, you don't need any special JavaScript setup.

```html
<button class="button is-primary">Primary Action</button>

<div class="card">
  <div class="card-content">
    <p class="title">Card Title</p>
    <p class="subtitle">Card Subtitle</p>
  </div>
</div>
```
