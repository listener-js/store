[@listener-js/store](../README.md) › [Globals](../globals.md) › ["store"](../modules/_store_.md) › [Store](_store_.store.md)

# Class: Store

## Hierarchy

* **Store**

## Index

### Properties

* [listeners](_store_.store.md#listeners)
* [state](_store_.store.md#state)

### Methods

* [delete](_store_.store.md#delete)
* [get](_store_.store.md#get)
* [merge](_store_.store.md#merge)
* [parentState](_store_.store.md#private-parentstate)
* [set](_store_.store.md#set)

## Properties

###  listeners

• **listeners**: *string[]* =  ["delete", "get", "merge", "set"]

Defined in store.ts:2

___

###  state

• **state**: *object*

Defined in store.ts:3

## Methods

###  delete

▸ **delete**(`eid`: string[], `id`: string[]): *void*

Defined in store.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`eid` | string[] |
`id` | string[] |

**Returns:** *void*

___

###  get

▸ **get**(`eid`: string[], `id`: string[]): *any*

Defined in store.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`eid` | string[] |
`id` | string[] |

**Returns:** *any*

___

###  merge

▸ **merge**(`eid`: string[], `id`: string[], `value`: any): *void*

Defined in store.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`eid` | string[] |
`id` | string[] |
`value` | any |

**Returns:** *void*

___

### `Private` parentState

▸ **parentState**(`id`: string[]): *[object | undefined, object]*

Defined in store.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |

**Returns:** *[object | undefined, object]*

___

###  set

▸ **set**(`eid`: string[], `id`: string[], `value`: any): *void*

Defined in store.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`eid` | string[] |
`id` | string[] |
`value` | any |

**Returns:** *void*
