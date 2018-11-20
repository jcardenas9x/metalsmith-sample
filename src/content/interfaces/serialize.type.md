---
title: API Serialize Type 
layout: child.hbs
date: 2018-11-19
autotoc: true
---

A type in an abi

# Hierarchy

**Type**

# Properties

<a id="aliasofname"></a>

##  aliasOfName

**● aliasOfName**: *`string`*

*Defined in [eosjs-serialize.ts:33](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L33)*

Type name this is an alias of, if any

___
<a id="arrayof"></a>

##  arrayOf

**● arrayOf**: *[Type](serialize.type.md)*

*Defined in [eosjs-serialize.ts:36](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L36)*

Type this is an array of, if any

___
<a id="base"></a>

##  base

**● base**: *[Type](serialize.type.md)*

*Defined in [eosjs-serialize.ts:48](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L48)*

Base of this type, if this is a struct

___
<a id="basename"></a>

##  baseName

**● baseName**: *`string`*

*Defined in [eosjs-serialize.ts:45](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L45)*

Base name of this type, if this is a struct

___
<a id="deserialize"></a>

##  deserialize

**● deserialize**: *`function`*

*Defined in [eosjs-serialize.ts:57](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L57)*

Convert data in `buffer` from binary form

#### Type declaration
▸(buffer: *[SerialBuffer](../classes/serialize.serialbuffer.md)*, state?: *[SerializerState](../classes/serialize.serializerstate.md)*, allowExtensions?: *`boolean`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | [SerialBuffer](../classes/serialize.serialbuffer.md) |
| `Optional` state | [SerializerState](../classes/serialize.serializerstate.md) |
| `Optional` allowExtensions | `boolean` |

**Returns:** `any`

___
<a id="extensionof"></a>

## `<Optional>` extensionOf

**● extensionOf**: *[Type](serialize.type.md)*

*Defined in [eosjs-serialize.ts:42](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L42)*

Marks binary extension fields

___
<a id="fields"></a>

##  fields

**● fields**: *[Field](serialize.field.md)[]*

*Defined in [eosjs-serialize.ts:51](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L51)*

Contained fields, if this is a struct

___
<a id="name"></a>

##  name

**● name**: *`string`*

*Defined in [eosjs-serialize.ts:30](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L30)*

Type name

___
<a id="optionalof"></a>

##  optionalOf

**● optionalOf**: *[Type](serialize.type.md)*

*Defined in [eosjs-serialize.ts:39](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L39)*

Type this is an optional of, if any

___
<a id="serialize"></a>

##  serialize

**● serialize**: *`function`*

*Defined in [eosjs-serialize.ts:54](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L54)*

Convert `data` to binary form and store in `buffer`

#### Type declaration
▸(buffer: *[SerialBuffer](../classes/serialize.serialbuffer.md)*, data: *`any`*, state?: *[SerializerState](../classes/serialize.serializerstate.md)*, allowExtensions?: *`boolean`*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| buffer | [SerialBuffer](../classes/serialize.serialbuffer.md) |
| data | `any` |
| `Optional` state | [SerializerState](../classes/serialize.serializerstate.md) |
| `Optional` allowExtensions | `boolean` |

**Returns:** `void`

___
