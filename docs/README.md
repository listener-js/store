> **[@listener-js/store](README.md)**

[Globals](globals.md) /

# @listener-js/store

Listener store

![store](media/store.png)

## Install

```bash
npm install @listener-js/listener @listener-js/store
```

## Setup

```js
import { listener } from "@listener-js/listener"
import { store } from "@listener-js/store"

listener({ store })
```

## Usage

```js
store.set([], ["hello", "world"], true)
store.get([], []) // { hello: { world: true } }
store.get([], ["hello"]) // { world: true }
store.get([], ["hello", "world"]) // true
store.merge([], ["hello"], { universe: true })
store.get([], []) // { hello: { universe: true, world: true } }
```