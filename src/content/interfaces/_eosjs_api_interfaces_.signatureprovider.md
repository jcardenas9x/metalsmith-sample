---
title: API Signature Provider 
layout: child.hbs
date: 2018-11-19
autotoc: true
---

Signs transactions

# Hierarchy

**SignatureProvider**

# Implemented by

* [JsSignatureProvider](../classes/js_sig.jssignatureprovider.md)

# Properties

<a id="getavailablekeys"></a>

##  getAvailableKeys

**● getAvailableKeys**: *`function`*

*Defined in [eosjs-api-interfaces.ts:63](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-api-interfaces.ts#L63)*

Public keys associated with the private keys that the `SignatureProvider` holds

#### Type declaration
▸(): `Promise`<`string`[]>

**Returns:** `Promise`<`string`[]>

___
<a id="sign"></a>

##  sign

**● sign**: *`function`*

*Defined in [eosjs-api-interfaces.ts:66](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-api-interfaces.ts#L66)*

Sign a transaction

#### Type declaration
▸(args: *[SignatureProviderArgs](_eosjs_api_interfaces_.signatureproviderargs.md)*): `Promise`<`string`[]>

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | [SignatureProviderArgs](_eosjs_api_interfaces_.signatureproviderargs.md) |

**Returns:** `Promise`<`string`[]>

___
