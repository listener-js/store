[@listener-js/store](../README.md) › [Globals](../globals.md) › ["store"](../modules/_store_.md) › [Store](_store_.store.md)

# Class: Store

## Hierarchy

* **Store**

## Index

### Properties

* [state](_store_.store.md#state)

### Methods

* [delete](_store_.store.md#delete)
* [get](_store_.store.md#get)
* [listenerLoaded](_store_.store.md#private-listenerloaded)
* [merge](_store_.store.md#merge)
* [parentState](_store_.store.md#private-parentstate)
* [set](_store_.store.md#set)
* [store](_store_.store.md#private-store)
* [storeEmit](_store_.store.md#private-storeemit)

## Properties

###  state

• **state**: *object*

Defined in store.ts:4

## Methods

###  delete

▸ **delete**(`lid`: string[], `id`: string[]): *void*

Defined in store.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`id` | string[] |

**Returns:** *void*

___

###  get

▸ **get**(`lid`: string[], `id`: string[]): *any*

Defined in store.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`id` | string[] |

**Returns:** *any*

___

### `Private` listenerLoaded

▸ **listenerLoaded**(`lid`: string[], `__namedParameters`: object): *void*

Defined in store.ts:44

**Parameters:**

▪ **lid**: *string[]*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`instance` | any |
`listener` | Listener |

**Returns:** *void*

___

###  merge

▸ **merge**(`lid`: string[], `id`: string[], `value`: any): *void*

Defined in store.ts:20

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`id` | string[] |
`value` | any |

**Returns:** *void*

___

### `Private` parentState

▸ **parentState**(`id`: string[]): *[object | undefined, object]*

Defined in store.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |

**Returns:** *[object | undefined, object]*

___

###  set

▸ **set**(`lid`: string[], `id`: string[], `value`: any): *void*

Defined in store.ts:32

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`id` | string[] |
`value` | any |

**Returns:** *void*

___

### `Private` store

▸ **store**(`lid`: string[], `value`: any): *Promise‹any› | void*

Defined in store.ts:77

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`value` | any |

**Returns:** *Promise‹any› | void*

___

### `Private` storeEmit

▸ **storeEmit**(`lid`: string[], `id`: string[], `value`: any): *Promise‹any› | void*

Defined in store.ts:84

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`id` | string[] |
`value` | any |

**Returns:** *Promise‹any› | void*
