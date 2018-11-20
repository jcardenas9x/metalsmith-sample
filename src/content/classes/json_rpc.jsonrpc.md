---
title: API RPC
layout: child.hbs
date: 2018-11-19
autotoc: true
---

Make RPC calls

# Hierarchy

**JsonRpc**

# Implements

* [AuthorityProvider](../interfaces/_eosjs_api_interfaces_.authorityprovider.md)
* [AbiProvider](../interfaces/_eosjs_api_interfaces_.abiprovider.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new JsonRpc**(endpoint: *`string`*, args?: *`object`*): [JsonRpc](json_rpc.jsonrpc.md)

*Defined in [eosjs-jsonrpc.ts:22](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L22)*

**Parameters:**

**endpoint: `string`**

**`Default value` args: `object`**

*   `fetch`:
    *   browsers: leave `null` or `undefined`
    *   node: provide an implementation

| Name | Type |
| ------ | ------ |
| `Optional` fetch | `function` |

**Returns:** [JsonRpc](json_rpc.jsonrpc.md)

___

# Properties

<a id="endpoint"></a>

##  endpoint

**● endpoint**: *`string`*

*Defined in [eosjs-jsonrpc.ts:21](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L21)*

___
<a id="fetchbuiltin"></a>

##  fetchBuiltin

**● fetchBuiltin**: *`function`*

*Defined in [eosjs-jsonrpc.ts:22](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L22)*

#### Type declaration
▸(input?: * `Request` &#124; `string`*, init?: *`RequestInit`*): `Promise`<`Response`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` input |  `Request` &#124; `string`|
| `Optional` init | `RequestInit` |

**Returns:** `Promise`<`Response`>

___

# Methods

<a id="db_size_get"></a>

##  db_size_get

▸ **db_size_get**(): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:177](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L177)*

Raw call to `/v1/db_size/get`

**Returns:** `Promise`<`any`>

___
<a id="fetch"></a>

##  fetch

▸ **fetch**(path: *`string`*, body: *`any`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:42](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L42)*

Post `body` to `endpoint + path`. Throws detailed error information in `RpcError` when available.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |
| body | `any` |

**Returns:** `Promise`<`any`>

___
<a id="getrawabi"></a>

##  getRawAbi

▸ **getRawAbi**(accountName: *`string`*): `Promise`<[BinaryAbi](../interfaces/_eosjs_api_interfaces_.binaryabi.md)>

*Defined in [eosjs-jsonrpc.ts:129](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L129)*

calls `/v1/chain/get_raw_code_and_abi` and pulls out unneeded raw wasm code

**Parameters:**

| Name | Type |
| ------ | ------ |
| accountName | `string` |

**Returns:** `Promise`<[BinaryAbi](../interfaces/_eosjs_api_interfaces_.binaryabi.md)>

___
<a id="getrequiredkeys"></a>

##  getRequiredKeys

▸ **getRequiredKeys**(args: *[AuthorityProviderArgs](../interfaces/_eosjs_api_interfaces_.authorityproviderargs.md)*): `Promise`<`string`[]>

*Defined in [eosjs-jsonrpc.ts:159](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L159)*

Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider`

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | [AuthorityProviderArgs](../interfaces/_eosjs_api_interfaces_.authorityproviderargs.md) |

**Returns:** `Promise`<`string`[]>

___
<a id="get_abi"></a>

##  get_abi

▸ **get_abi**(account_name: *`string`*): `Promise`<[GetAbiResult](../interfaces/_eosjs_rpc_interfaces_.getabiresult.md)>

*Defined in [eosjs-jsonrpc.ts:67](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L67)*

Raw call to `/v1/chain/get_abi`

**Parameters:**

| Name | Type |
| ------ | ------ |
| account_name | `string` |

**Returns:** `Promise`<[GetAbiResult](../interfaces/_eosjs_rpc_interfaces_.getabiresult.md)>

___
<a id="get_account"></a>

##  get_account

▸ **get_account**(account_name: *`string`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:73](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L73)*

Raw call to `/v1/chain/get_account`

**Parameters:**

| Name | Type |
| ------ | ------ |
| account_name | `string` |

**Returns:** `Promise`<`any`>

___
<a id="get_block"></a>

##  get_block

▸ **get_block**(block_num_or_id: * `number` &#124; `string`*): `Promise`<[GetBlockResult](../interfaces/_eosjs_rpc_interfaces_.getblockresult.md)>

*Defined in [eosjs-jsonrpc.ts:85](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L85)*

Raw call to `/v1/chain/get_block`

**Parameters:**

| Name | Type |
| ------ | ------ |
| block_num_or_id |  `number` &#124; `string`|

**Returns:** `Promise`<[GetBlockResult](../interfaces/_eosjs_rpc_interfaces_.getblockresult.md)>

___
<a id="get_block_header_state"></a>

##  get_block_header_state

▸ **get_block_header_state**(block_num_or_id: * `number` &#124; `string`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:79](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L79)*

Raw call to `/v1/chain/get_block_header_state`

**Parameters:**

| Name | Type |
| ------ | ------ |
| block_num_or_id |  `number` &#124; `string`|

**Returns:** `Promise`<`any`>

___
<a id="get_code"></a>

##  get_code

▸ **get_code**(account_name: *`string`*): `Promise`<[GetCodeResult](../interfaces/_eosjs_rpc_interfaces_.getcoderesult.md)>

*Defined in [eosjs-jsonrpc.ts:91](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L91)*

Raw call to `/v1/chain/get_code`

**Parameters:**

| Name | Type |
| ------ | ------ |
| account_name | `string` |

**Returns:** `Promise`<[GetCodeResult](../interfaces/_eosjs_rpc_interfaces_.getcoderesult.md)>

___
<a id="get_currency_balance"></a>

##  get_currency_balance

▸ **get_currency_balance**(code: *`string`*, account: *`string`*, symbol?: *`string`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:96](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L96)*

Raw call to `/v1/chain/get_currency_balance`

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| code | `string` | - |
| account | `string` | - |
| `Default value` symbol | `string` |  null |

**Returns:** `Promise`<`any`>

___
<a id="get_currency_stats"></a>

##  get_currency_stats

▸ **get_currency_stats**(code: *`string`*, symbol: *`string`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:101](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L101)*

Raw call to `/v1/chain/get_currency_stats`

**Parameters:**

| Name | Type |
| ------ | ------ |
| code | `string` |
| symbol | `string` |

**Returns:** `Promise`<`any`>

___
<a id="get_info"></a>

##  get_info

▸ **get_info**(): `Promise`<[GetInfoResult](../interfaces/_eosjs_rpc_interfaces_.getinforesult.md)>

*Defined in [eosjs-jsonrpc.ts:106](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L106)*

Raw call to `/v1/chain/get_info`

**Returns:** `Promise`<[GetInfoResult](../interfaces/_eosjs_rpc_interfaces_.getinforesult.md)>

___
<a id="get_producer_schedule"></a>

##  get_producer_schedule

▸ **get_producer_schedule**(): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:111](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L111)*

Raw call to `/v1/chain/get_producer_schedule`

**Returns:** `Promise`<`any`>

___
<a id="get_producers"></a>

##  get_producers

▸ **get_producers**(json?: *`boolean`*, lower_bound?: *`string`*, limit?: *`number`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:117](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L117)*

Raw call to `/v1/chain/get_producers`

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` json | `boolean` | true |
| `Default value` lower_bound | `string` | &quot;&quot; |
| `Default value` limit | `number` | 50 |

**Returns:** `Promise`<`any`>

___
<a id="get_raw_code_and_abi"></a>

##  get_raw_code_and_abi

▸ **get_raw_code_and_abi**(account_name: *`string`*): `Promise`<[GetRawCodeAndAbiResult](../interfaces/_eosjs_rpc_interfaces_.getrawcodeandabiresult.md)>

*Defined in [eosjs-jsonrpc.ts:123](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L123)*

Raw call to `/v1/chain/get_raw_code_and_abi`

**Parameters:**

| Name | Type |
| ------ | ------ |
| account_name | `string` |

**Returns:** `Promise`<[GetRawCodeAndAbiResult](../interfaces/_eosjs_rpc_interfaces_.getrawcodeandabiresult.md)>

___
<a id="get_table_rows"></a>

##  get_table_rows

▸ **get_table_rows**(__namedParameters: *`object`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:136](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L136)*

Raw call to `/v1/chain/get_table_rows`

**Parameters:**

**__namedParameters: `object`**

| Name | Type | Default value |
| ------ | ------ | ------ |
| code | `any` | - |
| json | `any` | true |
| limit | `any` | 10 |
| lower_bound | `any` | &quot;&quot; |
| scope | `any` | - |
| table | `any` | - |
| table_key | `any` | &quot;&quot; |
| upper_bound | `any` | &quot;&quot; |

**Returns:** `Promise`<`any`>

___
<a id="history_get_actions"></a>

##  history_get_actions

▸ **history_get_actions**(account_name: *`string`*, pos?: *`number`*, offset?: *`number`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:181](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L181)*

Raw call to `/v1/history/get_actions`

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| account_name | `string` | - |
| `Default value` pos | `number` |  null |
| `Default value` offset | `number` |  null |

**Returns:** `Promise`<`any`>

___
<a id="history_get_controlled_accounts"></a>

##  history_get_controlled_accounts

▸ **history_get_controlled_accounts**(controlling_account: *`string`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:199](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L199)*

Raw call to `/v1/history/get_controlled_accounts`

**Parameters:**

| Name | Type |
| ------ | ------ |
| controlling_account | `string` |

**Returns:** `Promise`<`any`>

___
<a id="history_get_key_accounts"></a>

##  history_get_key_accounts

▸ **history_get_key_accounts**(public_key: *`string`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:193](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L193)*

Raw call to `/v1/history/get_key_accounts`

**Parameters:**

| Name | Type |
| ------ | ------ |
| public_key | `string` |

**Returns:** `Promise`<`any`>

___
<a id="history_get_transaction"></a>

##  history_get_transaction

▸ **history_get_transaction**(id: *`string`*, block_num_hint?: *`number`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:187](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L187)*

Raw call to `/v1/history/get_transaction`

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| id | `string` | - |
| `Default value` block_num_hint | `number` |  null |

**Returns:** `Promise`<`any`>

___
<a id="push_transaction"></a>

##  push_transaction

▸ **push_transaction**(__namedParameters: *`object`*): `Promise`<`any`>

*Defined in [eosjs-jsonrpc.ts:167](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-jsonrpc.ts#L167)*

Push a serialized transaction

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| serializedTransaction | `Uint8Array` |
| signatures | `string`[] |

**Returns:** `Promise`<`any`>

___
