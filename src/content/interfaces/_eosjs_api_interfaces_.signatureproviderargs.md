---
title: API Signature Provider Args 
layout: child.hbs
date: 2018-11-19
autotoc: true
---

Arguments to `sign`

# Hierarchy

**SignatureProviderArgs**

# Properties

<a id="abis"></a>

##  abis

**● abis**: *[BinaryAbi](_eosjs_api_interfaces_.binaryabi.md)[]*

*Defined in [eosjs-api-interfaces.ts:57](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-api-interfaces.ts#L57)*

ABIs for all contracts with actions included in `serializedTransaction`

___
<a id="chainid"></a>

##  chainId

**● chainId**: *`string`*

*Defined in [eosjs-api-interfaces.ts:48](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-api-interfaces.ts#L48)*

Chain transaction is for

___
<a id="requiredkeys"></a>

##  requiredKeys

**● requiredKeys**: *`string`[]*

*Defined in [eosjs-api-interfaces.ts:51](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-api-interfaces.ts#L51)*

Public keys associated with the private keys needed to sign the transaction

___
<a id="serializedtransaction"></a>

##  serializedTransaction

**● serializedTransaction**: *`Uint8Array`*

*Defined in [eosjs-api-interfaces.ts:54](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-api-interfaces.ts#L54)*

Transaction to sign

___
