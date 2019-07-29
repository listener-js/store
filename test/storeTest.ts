import { listener } from "@listener-js/listener"
import { Store } from "../"

listener({ Store })

beforeEach((): void => { Store.state = {} })

test("defined", (): void => {
  expect(Store).not.toBeUndefined()
})

test("get", (): void => {
  Store.set([], ["hello"], true)
  expect(Store.get([], ["hello"])).toBe(true)
})

test("get two ids", (): void => {
  Store.set([], ["hello", "world"], true)
  expect(Store.get([], ["hello", "world"])).toEqual(true)
})

test("set", (): void => {
  Store.set([], ["hello"], true)
  expect(Store.get([], [])).toEqual({ hello: true })
})

test("set overwrite", (): void => {
  Store.set([], ["hello"], true)
  Store.set([], ["hello"], false)
  expect(Store.get([], [])).toEqual({ hello: false })
})

test("set nested overwrite", (): void => {
  Store.set([], ["hello"], true)
  Store.set([], ["hello", "world"], true)
  expect(Store.get([], [])).toEqual({ hello: true })
})

test("set two ids", (): void => {
  Store.set([], ["hello", "world"], true)
  expect(Store.get([], []))
    .toEqual({ hello: { world: true } })
})

test("merge", (): void => {
  Store.set([], ["hello"], { world: true })
  Store.merge([], ["hello"], { universe: true })
  expect(Store.get([], [])).toEqual({
    hello: { universe: true, world: true }
  })
})

test("delete", (): void => {
  Store.set([], ["hello"], { world: true })
  Store.delete([], ["hello"])
  expect(Store.get([], [])).toEqual({})
})

test("immutable", (): void => {
  const s1a = Store.get([], [])
  Store.set([], ["hello"], { world: true })
  const s1b = Store.get([], [])
  const s2a = Store.get([], ["hello"])
  Store.set([], ["hello", "universe"], true)
  const s1c = Store.get([], [])
  const s2b = Store.get([], ["hello"])
  expect(s1a).not.toBe(s1b)
  expect(s1b).not.toBe(s1c)
  expect(s2a).not.toBe(s2b)
})
