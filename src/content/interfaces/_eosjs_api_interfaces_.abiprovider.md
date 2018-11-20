---
title: API ABI Provider
layout: child.hbs
date: 2018-11-19
autotoc: true
---

Retrieves raw ABIs for a specified accountName

# Hierarchy

**AbiProvider**

# Implemented by

* [JsonRpc](../classes/json_rpc.jsonrpc.md)

# Properties

<a id="getrawabi"></a>

##  getRawAbi

**● getRawAbi**: *`function`*

*Defined in [eosjs-api-interfaces.ts:23](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-api-interfaces.ts#L23)*

Retrieve the BinaryAbi

#### Type declaration
▸(accountName: *`string`*): `Promise`<[BinaryAbi](_eosjs_api_interfaces_.binaryabi.md)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| accountName | `string` |

**Returns:** `Promise`<[BinaryAbi](_eosjs_api_interfaces_.binaryabi.md)>

___
