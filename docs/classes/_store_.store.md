> **[@listener-js/store](../README.md)**

[Globals](../globals.md) / ["store"](../modules/_store_.md) / [Store](_store_.store.md) /

# Class: Store

## Hierarchy

* **Store**

## Index

### Properties

* [listeners](_store_.store.md#static-listeners)
* [state](_store_.store.md#static-state)

### Methods

* [delete](_store_.store.md#static-delete)
* [get](_store_.store.md#static-get)
* [merge](_store_.store.md#static-merge)
* [parentState](_store_.store.md#static-private-parentstate)
* [set](_store_.store.md#static-set)

## Properties

### `Static` listeners

▪ **listeners**: *string[]* =  ["delete", "get", "merge", "set"]

Defined in store.ts:2

___

### `Static` state

▪ **state**: *object*

Defined in store.ts:3

## Methods

### `Static` delete

▸ **delete**(`eid`: string[], `id`: string[]): *void*

Defined in store.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`eid` | string[] |
`id` | string[] |

**Returns:** *void*

___

### `Static` get

▸ **get**(`eid`: string[], `id`: string[]): *any*

Defined in store.ts:15

**Parameters:**

Name | Type |
------ | ------ |
`eid` | string[] |
`id` | string[] |

**Returns:** *any*

___

### `Static` merge

▸ **merge**(`eid`: string[], `id`: string[], `value`: any): *void*

Defined in store.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`eid` | string[] |
`id` | string[] |
`value` | any |

**Returns:** *void*

___

### `Static` `Private` parentState

▸ **parentState**(`id`: string[]): *[object | undefined, object]*

Defined in store.ts:43

**Parameters:**

Name | Type |
------ | ------ |
`id` | string[] |

**Returns:** *[object | undefined, object]*

___

### `Static` set

▸ **set**(`eid`: string[], `id`: string[], `value`: any): *void*

Defined in store.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`eid` | string[] |
`id` | string[] |
`value` | any |

**Returns:** *void*