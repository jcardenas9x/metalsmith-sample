---
title: API Serialize CreateTypeArgs 
layout: child.hbs
date: 2018-11-19
autotoc: true
---

# Hierarchy

**CreateTypeArgs**

# Properties

<a id="aliasofname"></a>

## `<Optional>` aliasOfName

**● aliasOfName**: *`string`*

*Defined in [eosjs-serialize.ts:724](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L724)*

___
<a id="arrayof"></a>

## `<Optional>` arrayOf

**● arrayOf**: *[Type](serialize.type.md)*

*Defined in [eosjs-serialize.ts:725](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L725)*

___
<a id="base"></a>

## `<Optional>` base

**● base**: *[Type](serialize.type.md)*

*Defined in [eosjs-serialize.ts:729](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L729)*

___
<a id="basename"></a>

## `<Optional>` baseName

**● baseName**: *`string`*

*Defined in [eosjs-serialize.ts:728](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L728)*

___
<a id="deserialize"></a>

## `<Optional>` deserialize

**● deserialize**: *`function`*

*Defined in [eosjs-serialize.ts:732](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L732)*

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

*Defined in [eosjs-serialize.ts:727](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L727)*

___
<a id="fields"></a>

## `<Optional>` fields

**● fields**: *[Field](serialize.field.md)[]*

*Defined in [eosjs-serialize.ts:730](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L730)*

___
<a id="name"></a>

## `<Optional>` name

**● name**: *`string`*

*Defined in [eosjs-serialize.ts:723](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L723)*

___
<a id="optionalof"></a>

## `<Optional>` optionalOf

**● optionalOf**: *[Type](serialize.type.md)*

*Defined in [eosjs-serialize.ts:726](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L726)*

___
<a id="serialize"></a>

## `<Optional>` serialize

**● serialize**: *`function`*

*Defined in [eosjs-serialize.ts:731](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L731)*

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
