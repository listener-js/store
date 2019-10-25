import expect from "expect"
import { load } from "@listener-js/listener"
import log from "@listener-js/log"
import store from "../src"

load([], { log, store })

beforeEach((): void => {
  store.state = {}
})

it("defined", (): void => {
  expect(store).not.toBeUndefined()
})

it("get", (): void => {
  store.set([], ["hello"], true)
  expect(store.get([], ["hello"])).toBe(true)
})

it("get two ids", (): void => {
  store.set([], ["world", "hello"], true)
  expect(store.get([], ["world", "hello"])).toEqual(true)
})

it("set", (): void => {
  store.set([], ["hello"], true)
  expect(store.get([], [])).toEqual({ hello: true })
})

it("set overwrite", (): void => {
  store.set([], ["hello"], true)
  store.set([], ["hello"], false)
  expect(store.get([], [])).toEqual({ hello: false })
})

it("set nested overwrite", (): void => {
  store.set([], ["hello"], true)
  store.set([], ["world", "hello"], true)
  expect(store.get([], [])).toEqual({ hello: true })
})

it("set two ids", (): void => {
  store.set([], ["world", "hello"], true)
  expect(store.get([], [])).toEqual({
    hello: { world: true },
  })
})

it("merge", (): void => {
  store.set([], ["hello"], { world: true })
  store.merge([], ["hello"], { universe: true })
  expect(store.get([], [])).toEqual({
    hello: { universe: true, world: true },
  })
})

it("delete", (): void => {
  store.set([], ["hello"], { world: true })
  store.delete([], ["hello"])
  expect(store.get([], [])).toEqual({})
})

it("delete two ids", (): void => {
  store.set([], ["hello"], { world: true })
  store.delete([], ["world", "hello"])
  expect(store.get([], [])).toEqual({ hello: {} })
})

it("immutable", (): void => {
  const s1a = store.get([], [])
  store.set([], ["hello"], { world: true })
  const s1b = store.get([], [])
  const s2a = store.get([], ["hello"])
  store.set([], ["universe", "hello"], true)
  const s1c = store.get([], [])
  const s2b = store.get([], ["hello"])
  expect(s1a).not.toBe(s1b)
  expect(s1b).not.toBe(s1c)
  expect(s2a).not.toBe(s2b)
})
