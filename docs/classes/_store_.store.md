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
* [merge](_store_.store.md#merge)
* [parentState](_store_.store.md#private-parentstate)
* [set](_store_.store.md#set)

## Properties

###  state

• **state**: *object*

Defined in store.ts:2

## Methods

###  delete

▸ **delete**(`lid`: string[], `id`: string[]): *void*

Defined in store.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`id` | string[] |

**Returns:** *void*

___

###  get

▸ **get**(`lid`: string[], `id`: string[]): *any*

Defined in store.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`id` | string[] |

**Returns:** *any*

___

###  merge

▸ **merge**(`lid`: string[], `id`: string[], `value`: any): *void*

Defined in store.ts:18

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

Defined in store.ts:42

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |

**Returns:** *[object | undefined, object]*

___

###  set

▸ **set**(`lid`: string[], `id`: string[], `value`: any): *void*

Defined in store.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`lid` | string[] |
`id` | string[] |
`value` | any |

**Returns:** *void*
