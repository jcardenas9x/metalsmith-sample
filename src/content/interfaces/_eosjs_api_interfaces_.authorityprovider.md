---
title: API AuthorityProvider
layout: child.hbs
date: 2018-11-19
autotoc: true
---

Get subset of `availableKeys` needed to meet authorities in `transaction`

# Hierarchy

**AuthorityProvider**

# Implemented by

* [JsonRpc](../classes/json_rpc.jsonrpc.md)

# Properties

<a id="getrequiredkeys"></a>

##  getRequiredKeys

**● getRequiredKeys**: *`function`*

*Defined in [eosjs-api-interfaces.ts:17](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-api-interfaces.ts#L17)*

Get subset of `availableKeys` needed to meet authorities in `transaction`

#### Type declaration
▸(args: *[AuthorityProviderArgs](_eosjs_api_interfaces_.authorityproviderargs.md)*): `Promise`<`string`[]>

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | [AuthorityProviderArgs](_eosjs_api_interfaces_.authorityproviderargs.md) |

**Returns:** `Promise`<`string`[]>

___
