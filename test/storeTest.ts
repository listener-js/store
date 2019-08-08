import { listener } from "@listener-js/listener"
import { log } from "@listener-js/log"
import { store } from "../"

listener({ log, store })

beforeEach((): void => { store.state = {} })

test("defined", (): void => {
  expect(store).not.toBeUndefined()
})

test("get", (): void => {
  store.set([], ["hello"], true)
  expect(store.get([], ["hello"])).toBe(true)
})

test("get two ids", (): void => {
  store.set([], ["hello", "world"], true)
  expect(store.get([], ["hello", "world"])).toEqual(true)
})

test("set", (): void => {
  store.set([], ["hello"], true)
  expect(store.get([], [])).toEqual({ hello: true })
})

test("set overwrite", (): void => {
  store.set([], ["hello"], true)
  store.set([], ["hello"], false)
  expect(store.get([], [])).toEqual({ hello: false })
})

test("set nested overwrite", (): void => {
  store.set([], ["hello"], true)
  store.set([], ["hello", "world"], true)
  expect(store.get([], [])).toEqual({ hello: true })
})

test("set two ids", (): void => {
  store.set([], ["hello", "world"], true)
  expect(store.get([], []))
    .toEqual({ hello: { world: true } })
})

test("merge", (): void => {
  store.set([], ["hello"], { world: true })
  store.merge([], ["hello"], { universe: true })
  expect(store.get([], [])).toEqual({
    hello: { universe: true, world: true }
  })
})

test("delete", (): void => {
  store.set([], ["hello"], { world: true })
  store.delete([], ["hello"])
  expect(store.get([], [])).toEqual({})
})

test("immutable", (): void => {
  const s1a = store.get([], [])
  store.set([], ["hello"], { world: true })
  const s1b = store.get([], [])
  const s2a = store.get([], ["hello"])
  store.set([], ["hello", "universe"], true)
  const s1c = store.get([], [])
  const s2b = store.get([], ["hello"])
  expect(s1a).not.toBe(s1b)
  expect(s1b).not.toBe(s1c)
  expect(s2a).not.toBe(s2b)
})
