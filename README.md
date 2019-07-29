# store

Listener store

![store](media/store.png)

## Install

```bash
npm install @listener-js/listener @listener-js/store
```

## Setup

```js
import { listener } from "@listener-js/listener"
import { Store } from "@listener-js/store"

listener({ Store })
```

## Usage

```js
Store.set([], ["hello", "world"], true)
Store.get([], []) // { hello: { world: true } }
Store.get([], ["hello"]) // { world: true }
Store.get([], ["hello", "world"]) // true
Store.merge([], ["hello"], { universe: true })
Store.get([], []) // { hello: { universe: true, world: true } }
```
