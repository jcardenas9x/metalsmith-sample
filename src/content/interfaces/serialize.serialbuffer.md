---
title: API Serialize Buffer
layout: child.hbs
date: 2018-11-19
autotoc: true
---

Serialize and deserialize data

# Hierarchy

**SerialBuffer**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new SerialBuffer**(__namedParameters?: *`object`*): [SerialBuffer](serialize.serialbuffer.md)

*Defined in [eosjs-serialize.ts:107](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L107)*

**Parameters:**

**`Default value` __namedParameters: `object`**

*   `array`: `null` if serializing, or binary data to deserialize
*   `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
*   `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser

| Name | Type |
| ------ | ------ |
| array | `Uint8Array` |
| textDecoder | `TextDecoder` |
| textEncoder | `TextEncoder` |

**Returns:** [SerialBuffer](serialize.serialbuffer.md)

___

# Properties

<a id="array"></a>

##  array

**● array**: *`Uint8Array`*

*Defined in [eosjs-serialize.ts:101](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L101)*

Data in serialized (binary) form

___
<a id="length"></a>

##  length

**● length**: *`number`*

*Defined in [eosjs-serialize.ts:98](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L98)*

Amount of valid data in `array`

___
<a id="readpos"></a>

##  readPos

**● readPos**: *`number`* = 0

*Defined in [eosjs-serialize.ts:104](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L104)*

Current position while reading (deserializing)

___
<a id="textdecoder"></a>

##  textDecoder

**● textDecoder**: *`TextDecoder`*

*Defined in [eosjs-serialize.ts:107](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L107)*

___
<a id="textencoder"></a>

##  textEncoder

**● textEncoder**: *`TextEncoder`*

*Defined in [eosjs-serialize.ts:106](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L106)*

___

# Methods

<a id="asuint8array"></a>

##  asUint8Array

▸ **asUint8Array**(): `Uint8Array`

*Defined in [eosjs-serialize.ts:148](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L148)*

Return data with excess storage trimmed away

**Returns:** `Uint8Array`

___
<a id="get"></a>

##  get

▸ **get**(): `number`

*Defined in [eosjs-serialize.ts:165](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L165)*

Get a single byte

**Returns:** `number`

___
<a id="getasset"></a>

##  getAsset

▸ **getAsset**(): `string`

*Defined in [eosjs-serialize.ts:464](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L464)*

Get an asset

**Returns:** `string`

___
<a id="getbytes"></a>

##  getBytes

▸ **getBytes**(): `Uint8Array`

*Defined in [eosjs-serialize.ts:364](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L364)*

Get length-prefixed binary data

**Returns:** `Uint8Array`

___
<a id="getfloat32"></a>

##  getFloat32

▸ **getFloat32**(): `number`

*Defined in [eosjs-serialize.ts:283](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L283)*

Get a `float32`

**Returns:** `number`

___
<a id="getfloat64"></a>

##  getFloat64

▸ **getFloat64**(): `number`

*Defined in [eosjs-serialize.ts:293](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L293)*

Get a `float64`

**Returns:** `number`

___
<a id="getname"></a>

##  getName

▸ **getName**(): `string`

*Defined in [eosjs-serialize.ts:329](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L329)*

Get a `name`

**Returns:** `string`

___
<a id="getprivatekey"></a>

##  getPrivateKey

▸ **getPrivateKey**(): `string`

*Defined in [eosjs-serialize.ts:496](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L496)*

Get a private key

**Returns:** `string`

___
<a id="getpublickey"></a>

##  getPublicKey

▸ **getPublicKey**(): `string`

*Defined in [eosjs-serialize.ts:482](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L482)*

Get a public key

**Returns:** `string`

___
<a id="getsignature"></a>

##  getSignature

▸ **getSignature**(): `string`

*Defined in [eosjs-serialize.ts:510](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L510)*

Get a signature

**Returns:** `string`

___
<a id="getstring"></a>

##  getString

▸ **getString**(): `string`

*Defined in [eosjs-serialize.ts:374](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L374)*

Get a string

**Returns:** `string`

___
<a id="getsymbol"></a>

##  getSymbol

▸ **getSymbol**(): `object`

*Defined in [eosjs-serialize.ts:415](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L415)*

Get a `symbol`

**Returns:** `object`

___
<a id="getsymbolcode"></a>

##  getSymbolCode

▸ **getSymbolCode**(): `string`

*Defined in [eosjs-serialize.ts:392](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L392)*

Get a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision.

**Returns:** `string`

___
<a id="getuint16"></a>

##  getUint16

▸ **getUint16**(): `number`

*Defined in [eosjs-serialize.ts:196](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L196)*

Get a `uint16`

**Returns:** `number`

___
<a id="getuint32"></a>

##  getUint32

▸ **getUint32**(): `number`

*Defined in [eosjs-serialize.ts:209](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L209)*

Get a `uint32`

**Returns:** `number`

___
<a id="getuint64asnumber"></a>

##  getUint64AsNumber

▸ **getUint64AsNumber**(): `number`

*Defined in [eosjs-serialize.ts:228](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L228)*

Get a `uint64` as a `number`. _Caution_: `number` only has 53 bits of precision; some values will change. `numeric.binaryToDecimal(serialBuffer.getUint8Array(8))` recommended instead

**Returns:** `number`

___
<a id="getuint8array"></a>

##  getUint8Array

▸ **getUint8Array**(len: *`number`*): `Uint8Array`

*Defined in [eosjs-serialize.ts:181](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L181)*

Get `len` bytes

**Parameters:**

| Name | Type |
| ------ | ------ |
| len | `number` |

**Returns:** `Uint8Array`

___
<a id="getvarint32"></a>

##  getVarint32

▸ **getVarint32**(): `number`

*Defined in [eosjs-serialize.ts:268](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L268)*

Get a `varint32`

**Returns:** `number`

___
<a id="getvaruint32"></a>

##  getVaruint32

▸ **getVaruint32**(): `number`

*Defined in [eosjs-serialize.ts:248](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L248)*

Get a `varuint32`

**Returns:** `number`

___
<a id="havereaddata"></a>

##  haveReadData

▸ **haveReadData**(): `boolean`

*Defined in [eosjs-serialize.ts:138](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L138)*

Is there data available to read?

**Returns:** `boolean`

___
<a id="push"></a>

##  push

▸ **push**(...v: *`number`[]*): `void`

*Defined in [eosjs-serialize.ts:160](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L160)*

Append bytes

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` v | `number`[] |

**Returns:** `void`

___
<a id="pusharray"></a>

##  pushArray

▸ **pushArray**(v: * `number`[] &#124; `Uint8Array`*): `void`

*Defined in [eosjs-serialize.ts:153](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L153)*

Append bytes

**Parameters:**

| Name | Type |
| ------ | ------ |
| v |  `number`[] &#124; `Uint8Array`|

**Returns:** `void`

___
<a id="pushasset"></a>

##  pushAsset

▸ **pushAsset**(s: *`string`*): `void`

*Defined in [eosjs-serialize.ts:429](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L429)*

Append an asset

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `void`

___
<a id="pushbytes"></a>

##  pushBytes

▸ **pushBytes**(v: * `number`[] &#124; `Uint8Array`*): `void`

*Defined in [eosjs-serialize.ts:358](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L358)*

Append length-prefixed binary data

**Parameters:**

| Name | Type |
| ------ | ------ |
| v |  `number`[] &#124; `Uint8Array`|

**Returns:** `void`

___
<a id="pushfloat32"></a>

##  pushFloat32

▸ **pushFloat32**(v: *`number`*): `void`

*Defined in [eosjs-serialize.ts:278](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L278)*

Append a `float32`

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="pushfloat64"></a>

##  pushFloat64

▸ **pushFloat64**(v: *`number`*): `void`

*Defined in [eosjs-serialize.ts:288](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L288)*

Append a `float64`

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="pushname"></a>

##  pushName

▸ **pushName**(s: *`string`*): `void`

*Defined in [eosjs-serialize.ts:298](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L298)*

Append a `name`

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `void`

___
<a id="pushnumberasuint64"></a>

##  pushNumberAsUint64

▸ **pushNumberAsUint64**(v: *`number`*): `void`

*Defined in [eosjs-serialize.ts:219](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L219)*

Append a `uint64`. _Caution_: `number` only has 53 bits of precision

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="pushprivatekey"></a>

##  pushPrivateKey

▸ **pushPrivateKey**(s: *`string`*): `void`

*Defined in [eosjs-serialize.ts:489](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L489)*

Append a private key

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `void`

___
<a id="pushpublickey"></a>

##  pushPublicKey

▸ **pushPublicKey**(s: *`string`*): `void`

*Defined in [eosjs-serialize.ts:475](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L475)*

Append a public key

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `void`

___
<a id="pushsignature"></a>

##  pushSignature

▸ **pushSignature**(s: *`string`*): `void`

*Defined in [eosjs-serialize.ts:503](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L503)*

Append a signature

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `void`

___
<a id="pushstring"></a>

##  pushString

▸ **pushString**(v: *`string`*): `void`

*Defined in [eosjs-serialize.ts:369](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L369)*

Append a string

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `string` |

**Returns:** `void`

___
<a id="pushsymbol"></a>

##  pushSymbol

▸ **pushSymbol**(__namedParameters: *`object`*): `void`

*Defined in [eosjs-serialize.ts:405](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L405)*

Append a `symbol`

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| name | `string` |
| precision | `number` |

**Returns:** `void`

___
<a id="pushsymbolcode"></a>

##  pushSymbolCode

▸ **pushSymbolCode**(name: *`string`*): `void`

*Defined in [eosjs-serialize.ts:379](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L379)*

Append a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `void`

___
<a id="pushuint16"></a>

##  pushUint16

▸ **pushUint16**(v: *`number`*): `void`

*Defined in [eosjs-serialize.ts:191](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L191)*

Append a `uint16`

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="pushuint32"></a>

##  pushUint32

▸ **pushUint32**(v: *`number`*): `void`

*Defined in [eosjs-serialize.ts:204](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L204)*

Append a `uint32`

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="pushuint8arraychecked"></a>

##  pushUint8ArrayChecked

▸ **pushUint8ArrayChecked**(v: *`Uint8Array`*, len: *`number`*): `void`

*Defined in [eosjs-serialize.ts:173](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L173)*

Append bytes in `v`. Throws if `len` doesn't match `v.length`

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `Uint8Array` |
| len | `number` |

**Returns:** `void`

___
<a id="pushvarint32"></a>

##  pushVarint32

▸ **pushVarint32**(v: *`number`*): `void`

*Defined in [eosjs-serialize.ts:263](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L263)*

Append a `varint32`

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="pushvaruint32"></a>

##  pushVaruint32

▸ **pushVaruint32**(v: *`number`*): `void`

*Defined in [eosjs-serialize.ts:235](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L235)*

Append a `varuint32`

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="reserve"></a>

##  reserve

▸ **reserve**(size: *`number`*): `void`

*Defined in [eosjs-serialize.ts:124](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L124)*

Resize `array` if needed to have at least `size` bytes free

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `number` |

**Returns:** `void`

___
<a id="restartread"></a>

##  restartRead

▸ **restartRead**(): `void`

*Defined in [eosjs-serialize.ts:143](https://github.com/EOSIO/eosjs/blob/e5ca122/src/eosjs-serialize.ts#L143)*

Restart reading from the beginning

**Returns:** `void`

___
