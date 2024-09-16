### Safe passing of structured data

To support passing JavaScript objects, including [platform objects](https://webidl.spec.whatwg.org/#dfn-platform-object), across [realm](https://tc39.es/ecma262/#sec-code-realms) boundaries, this specification defines the following infrastructure for serializing and deserializing objects, including in some cases transferring the underlying data instead of copying it. Collectively this serialization/deserialization process is known as "structured cloning", although most APIs perform separate serialization and deserialization steps. (With the notable exception being the `<a href="https://html.spec.whatwg.org/multipage/structured-data.html#dom-structuredclone">structuredClone()</a>` method.)

This section uses the terminology and typographic conventions from the JavaScript specification. [[JAVASCRIPT]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

#### **2.7.1** Serializable objects

MDN

[Serializable objects](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects) support being serialized, and later deserialized, in a way that is independent of any given [realm](https://tc39.es/ecma262/#sec-code-realms). This allows them to be stored on disk and later restored, or cloned across [agent](https://tc39.es/ecma262/#sec-agents) and even [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) boundaries.

Not all objects are [serializable objects](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects), and not all aspects of objects that are [serializable objects](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects) are necessarily preserved when they are serialized.

[Platform objects](https://webidl.spec.whatwg.org/#dfn-platform-object) can be [serializable objects](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects) if their [primary interface](https://webidl.spec.whatwg.org/#dfn-primary-interface) is decorated with the `[Serializable]` IDL [extended attribute](https://webidl.spec.whatwg.org/#dfn-extended-attribute). Such interfaces must also define the following algorithms:

serialization steps, taking a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) value, a [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) serialized, and a boolean forStorageA set of steps that serializes the data in value into fields of serialized. The resulting data serialized into serialized must be independent of any [realm](https://tc39.es/ecma262/#sec-code-realms).

These steps may throw an exception if serialization is not possible.

These steps may perform a [sub-serialization](https://html.spec.whatwg.org/multipage/structured-data.html#sub-serialization) to serialize nested data structures. They should not call [StructuredSerialize](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserialize) directly, as doing so will omit the important memory argument.

The introduction of these steps should omit mention of the forStorage argument if it is not relevant to the algorithm.

deserialization steps, taking a [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) serialized, a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) value, and a [realm](https://tc39.es/ecma262/#sec-code-realms) targetRealmA set of steps that deserializes the data in serialized, using it to set up value as appropriate. value will be a newly-created instance of the [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) type in question, with none of its internal data set up; setting that up is the job of these steps.

These steps may throw an exception if deserialization is not possible.

These steps may perform a [sub-deserialization](https://html.spec.whatwg.org/multipage/structured-data.html#sub-deserialization) to deserialize nested data structures. They should not call [StructuredDeserialize](https://html.spec.whatwg.org/multipage/structured-data.html#structureddeserialize) directly, as doing so will omit the important targetRealm and memory arguments.

It is up to the definition of individual platform objects to determine what data is serialized and deserialized by these steps. Typically the steps are very symmetric.

The `<a href="https://html.spec.whatwg.org/multipage/structured-data.html#serializable">[Serializable]</a>` extended attribute must take no arguments, and must only appear on an interface. It must not appear more than once on an interface.

For a given [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object), only the object's [primary interface](https://webidl.spec.whatwg.org/#dfn-primary-interface) is considered during the (de)serialization process. Thus, if inheritance is involved in defining the interface, each `<a href="https://html.spec.whatwg.org/multipage/structured-data.html#serializable">[Serializable]</a>`-annotated interface in the inheritance chain needs to define standalone [serialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#serialization-steps) and [deserialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#deserialization-steps), including taking into account any important data that might come from inherited interfaces.

Let's say we were defining a platform object `Person`, which had associated with it two pieces of associated data:

* a name value, which is a string; and
* a best friend value, which is either another `Person` instance or null.

We could then define `Person` instances to be [serializable objects](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects) by annotating the `Person` interface with the `<a href="https://html.spec.whatwg.org/multipage/structured-data.html#serializable">[Serializable]</a>` [extended attribute](https://webidl.spec.whatwg.org/#dfn-extended-attribute), and defining the following accompanying algorithms:

[serialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#serialization-steps)1. Set serialized.[[Name]] to value's associated name value.

1. Let serializedBestFriend be the [sub-serialization](https://html.spec.whatwg.org/multipage/structured-data.html#sub-serialization) of value's associated best friend value.
2. Set serialized.[[BestFriend]] to serializedBestFriend.

[deserialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#deserialization-steps)1. Set value's associated name value to serialized.[[Name]].

1. Let deserializedBestFriend be the [sub-deserialization](https://html.spec.whatwg.org/multipage/structured-data.html#sub-deserialization) of serialized.[[BestFriend]].
2. Set value's associated best friend value to deserializedBestFriend.

Objects defined in the JavaScript specification are handled by the [StructuredSerialize](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserialize) abstract operation directly.

Originally, this specification defined the concept of "cloneable objects", which could be cloned from one [realm](https://tc39.es/ecma262/#sec-code-realms) to another. However, to better specify the behavior of certain more complex situations, the model was updated to make the serialization and deserialization explicit.

#### **2.7.2** Transferable objects

[Transferable objects](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects) support being transferred across [agents](https://tc39.es/ecma262/#sec-agents). Transferring is effectively recreating the object while sharing a reference to the underlying data and then detaching the object being transferred. This is useful to transfer ownership of expensive resources. Not all objects are [transferable objects](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects) and not all aspects of objects that are [transferable objects](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects) are necessarily preserved when transferred.

Transferring is an irreversible and non-idempotent operation. Once an object has been transferred, it cannot be transferred, or indeed used, again.

[Platform objects](https://webidl.spec.whatwg.org/#dfn-platform-object) can be [transferable objects](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects) if their [primary interface](https://webidl.spec.whatwg.org/#dfn-primary-interface) is decorated with the `[Transferable]` IDL [extended attribute](https://webidl.spec.whatwg.org/#dfn-extended-attribute). Such interfaces must also define the following algorithms:

transfer steps, taking a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) value and a [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) dataHolderA set of steps that transfers the data in value into fields of dataHolder. The resulting data held in dataHolder must be independent of any [realm](https://tc39.es/ecma262/#sec-code-realms).

These steps may throw an exception if transferral is not possible.

transfer-receiving steps, taking a [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) dataHolder and a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) valueA set of steps that receives the data in dataHolder, using it to set up value as appropriate. value will be a newly-created instance of the [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) type in question, with none of its internal data set up; setting that up is the job of these steps.

These steps may throw an exception if it is not possible to receive the transfer.

It is up to the definition of individual platform objects to determine what data is transferred by these steps. Typically the steps are very symmetric.

The `<a href="https://html.spec.whatwg.org/multipage/structured-data.html#transferable">[Transferable]</a>` extended attribute must take no arguments, and must only appear on an interface. It must not appear more than once on an interface.

For a given [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object), only the object's [primary interface](https://webidl.spec.whatwg.org/#dfn-primary-interface) is considered during the transferring process. Thus, if inheritance is involved in defining the interface, each `<a href="https://html.spec.whatwg.org/multipage/structured-data.html#transferable">[Transferable]</a>`-annotated interface in the inheritance chain needs to define standalone [transfer steps](https://html.spec.whatwg.org/multipage/structured-data.html#transfer-steps) and [transfer-receiving steps](https://html.spec.whatwg.org/multipage/structured-data.html#transfer-receiving-steps), including taking into account any important data that might come from inherited interfaces.

[Platform objects](https://webidl.spec.whatwg.org/#dfn-platform-object) that are [transferable objects](https://html.spec.whatwg.org/multipage/structured-data.html#transferable-objects) have a [[Detached]] internal slot. This is used to ensure that once a platform object has been transferred, it cannot be transferred again.

Objects defined in the JavaScript specification are handled by the [StructuredSerializeWithTransfer](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializewithtransfer) abstract operation directly.

#### **2.7.3** StructuredSerializeInternal ( value, forStorage [ , memory ] )

The [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal) abstract operation takes as input a JavaScript value value and serializes it to a [realm](https://tc39.es/ecma262/#sec-code-realms)-independent form, represented here as a [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type). This serialized form has all the information necessary to later deserialize into a new JavaScript value in a different realm.

This process can throw an exception, for example when trying to serialize un-serializable objects.

1. If memory was not supplied, let memory be an empty [map](https://infra.spec.whatwg.org/#ordered-map).
   The purpose of the memory map is to avoid serializing objects twice. This ends up preserving cycles and the identity of duplicate objects in graphs.
2. If memory[value] [exists](https://infra.spec.whatwg.org/#map-exists), then return memory[value].
3. Let deep be false.
4. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(value) is Undefined, Null, Boolean, Number, BigInt, or String, then return { : "primitive", [[Value]]: value }.
5. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(value) is Symbol, then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
6. Let serialized be an uninitialized value.
7. If value has a [[BooleanData]] internal slot, then set serialized to { : "Boolean", [[BooleanData]]: value.[[BooleanData]] }.
8. Otherwise, if value has a [[NumberData]] internal slot, then set serialized to { : "Number", [[NumberData]]: value.[[NumberData]] }.
9. Otherwise, if value has a [[BigIntData]] internal slot, then set serialized to { : "BigInt", [[BigIntData]]: value.[[BigIntData]] }.
10. Otherwise, if value has a [[StringData]] internal slot, then set serialized to { : "String", [[StringData]]: value.[[StringData]] }.
11. Otherwise, if value has a [[DateValue]] internal slot, then set serialized to { : "Date", [[DateValue]]: value.[[DateValue]] }.
12. Otherwise, if value has a [[RegExpMatcher]] internal slot, then set serialized to { : "RegExp", [[RegExpMatcher]]: value.[[RegExpMatcher]], [[OriginalSource]]: value.[[OriginalSource]], [[OriginalFlags]]: value.[[OriginalFlags]] }.
13. Otherwise, if value has an [[ArrayBufferData]] internal slot, then:

    1. If [IsSharedArrayBuffer](https://tc39.es/ecma262/#sec-issharedarraybuffer)(value) is true, then:
       1. If the [current settings object](https://html.spec.whatwg.org/multipage/webappapis.html#current-settings-object)'s [cross-origin isolated capability](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-cross-origin-isolated-capability) is false, then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
          This check is only needed when serializing (and not when deserializing) as the [cross-origin isolated capability](https://html.spec.whatwg.org/multipage/webappapis.html#concept-settings-object-cross-origin-isolated-capability) cannot change over time and a `<a data-x-internal="sharedarraybuffer" href="https://tc39.es/ecma262/#sec-sharedarraybuffer-objects">SharedArrayBuffer</a>` cannot leave an [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters).
       2. If forStorage is true, then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
       3. If value has an [[ArrayBufferMaxByteLength]] internal slot, then set serialized to { : "GrowableSharedArrayBuffer", [[ArrayBufferData]]: value.[[ArrayBufferData]], [[ArrayBufferByteLengthData]]: value.[[ArrayBufferByteLengthData]], [[ArrayBufferMaxByteLength]]: value.[[ArrayBufferMaxByteLength]], [[AgentCluster]]: the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)'s [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) }.
       4. Otherwise, set serialized to { : "SharedArrayBuffer", [[ArrayBufferData]]: value.[[ArrayBufferData]], [[ArrayBufferByteLength]]: value.[[ArrayBufferByteLength]], [[AgentCluster]]: the [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)'s [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) }.
    2. Otherwise:
       1. If [IsDetachedBuffer](https://tc39.es/ecma262/#sec-isdetachedbuffer)(value) is true, then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
       2. Let size be value.[[ArrayBufferByteLength]].
       3. Let dataCopy be ? [CreateByteDataBlock](https://tc39.es/ecma262/#sec-createbytedatablock)(size).
          This can throw a `<a data-x-internal="js-rangeerror" href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-rangeerror">RangeError</a>` exception upon allocation failure.
       4. Perform [CopyDataBlockBytes](https://tc39.es/ecma262/#sec-copydatablockbytes)(dataCopy, 0, value.[[ArrayBufferData]], 0, size).
       5. If value has an [[ArrayBufferMaxByteLength]] internal slot, then set serialized to { : "ResizableArrayBuffer", [[ArrayBufferData]]: dataCopy, [[ArrayBufferByteLength]]: size, [[ArrayBufferMaxByteLength]]: value.[[ArrayBufferMaxByteLength]] }.
       6. Otherwise, set serialized to { : "ArrayBuffer", [[ArrayBufferData]]: dataCopy, [[ArrayBufferByteLength]]: size }.
14. Otherwise, if value has a [[ViewedArrayBuffer]] internal slot, then:

    1. If [IsArrayBufferViewOutOfBounds](https://tc39.es/proposal-resizablearraybuffer/#sec-isarraybufferviewoutofbounds)(value) is true, then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
    2. Let buffer be the value of value's [[ViewedArrayBuffer]] internal slot.
    3. Let bufferSerialized be ? [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal)(buffer, forStorage, memory).
    4. [Assert](https://infra.spec.whatwg.org/#assert): bufferSerialized. is "ArrayBuffer", "ResizableArrayBuffer", "SharedArrayBuffer", or "GrowableSharedArrayBuffer".
    5. If value has a [[DataView]] internal slot, then set serialized to { : "ArrayBufferView", [[Constructor]]: "DataView", [[ArrayBufferSerialized]]: bufferSerialized, [[ByteLength]]: value.[[ByteLength]], [[ByteOffset]]: value.[[ByteOffset]] }.
    6. Otherwise:
       1. [Assert](https://infra.spec.whatwg.org/#assert): value has a [[TypedArrayName]] internal slot.
       2. Set serialized to { : "ArrayBufferView", [[Constructor]]: value.[[TypedArrayName]], [[ArrayBufferSerialized]]: bufferSerialized, [[ByteLength]]: value.[[ByteLength]], [[ByteOffset]]: value.[[ByteOffset]], [[ArrayLength]]: value.[[ArrayLength]] }.
15. Otherwise, if value has [[MapData]] internal slot, then:

    1. Set serialized to { : "Map", [[MapData]]: a new empty [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type) }.
    2. Set deep to true.
16. Otherwise, if value has [[SetData]] internal slot, then:

    1. Set serialized to { : "Set", [[SetData]]: a new empty [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type) }.
    2. Set deep to true.
17. Otherwise, if value has an [[ErrorData]] internal slot and value is not a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object), then:

    1. Let name be ? [Get](https://tc39.es/ecma262/#sec-get-o-p)(value, "name").
    2. If name is not one of "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", or "URIError", then set name to "Error".
    3. Let valueMessageDesc be ? value.[[GetOwnProperty]]("`message`").
    4. Let message be undefined if [IsDataDescriptor](https://tc39.es/ecma262/#sec-isdatadescriptor)(valueMessageDesc) is false, and ? [ToString](https://tc39.es/ecma262/#sec-tostring)(valueMessageDesc.[[Value]]) otherwise.
    5. Set serialized to { : "Error", [[Name]]: name, [[Message]]: message }.
    6. User agents should attach a serialized representation of any interesting accompanying data which are not yet specified, notably the `stack` property, to serialized.
       See the Error Stacks proposal for in-progress work on specifying this data. [[JSERRORSTACKS]](https://html.spec.whatwg.org/multipage/references.html#refsJSERRORSTACKS)
18. Otherwise, if value is an Array exotic object, then:

    1. Let valueLenDescriptor be ? [OrdinaryGetOwnProperty](https://tc39.es/ecma262/#sec-ordinarygetownproperty)(value, "`length`").
    2. Let valueLen be valueLenDescriptor.[[Value]].
    3. Set serialized to { : "Array", [[Length]]: valueLen, [[Properties]]: a new empty [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type) }.
    4. Set deep to true.
19. Otherwise, if value is a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) that is a [serializable object](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects):

    1. If value has a [[[Detached]]](https://html.spec.whatwg.org/multipage/structured-data.html#detached) internal slot whose value is true, then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
    2. Let typeString be the identifier of the [primary interface](https://webidl.spec.whatwg.org/#dfn-primary-interface) of value.
    3. Set serialized to { : typeString }.
    4. Set deep to true.
20. Otherwise, if value is a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object), then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
21. Otherwise, if [IsCallable](https://tc39.es/ecma262/#sec-iscallable)(value) is true, then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
22. Otherwise, if value has any internal slot other than [[Prototype]], [[Extensible]], or [[PrivateElements]], then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
    For instance, a [[PromiseState]] or [[WeakMapData]] internal slot.
23. Otherwise, if value is an exotic object and value is not the [%Object.prototype%](https://tc39.es/ecma262/#sec-properties-of-the-object-prototype-object) intrinsic object associated with any [realm](https://tc39.es/ecma262/#sec-code-realms), then throw a [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
    For instance, a proxy object.
24. Otherwise:

    1. Set serialized to { : "Object", [[Properties]]: a new empty [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type) }.
    2. Set deep to true.

    [%Object.prototype%](https://tc39.es/ecma262/#sec-properties-of-the-object-prototype-object) will end up being handled via this step and subsequent steps. The end result is that its exoticness is ignored, and after deserialization the result will be an empty object (not an [immutable prototype exotic object](https://tc39.es/ecma262/#immutable-prototype-exotic-object)).
25. [Set](https://infra.spec.whatwg.org/#map-set) memory[value] to serialized.
26. If deep is true, then:

    1. If value has a [[MapData]] internal slot, then:
       1. Let copiedList be a new empty [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type).
       2. [For each](https://infra.spec.whatwg.org/#list-iterate) [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) { [[Key]], [[Value]] } entry of value.[[MapData]]:
          1. Let copiedEntry be a new [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) { [[Key]]: entry.[[Key]], [[Value]]: entry.[[Value]] }.
          2. If copiedEntry.[[Key]] is not the special value *empty* , [append](https://infra.spec.whatwg.org/#list-append) copiedEntry to copiedList.
       3. [For each](https://infra.spec.whatwg.org/#list-iterate) [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) { [[Key]], [[Value]] } entry of copiedList:
          1. Let serializedKey be ? [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal)(entry.[[Key]], forStorage, memory).
          2. Let serializedValue be ? [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal)(entry.[[Value]], forStorage, memory).
          3. [Append](https://infra.spec.whatwg.org/#list-append) { [[Key]]: serializedKey, [[Value]]: serializedValue } to serialized.[[MapData]].
    2. Otherwise, if value has a [[SetData]] internal slot, then:
       1. Let copiedList be a new empty [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type).
       2. [For each](https://infra.spec.whatwg.org/#list-iterate) entry of value.[[SetData]]:
          1. If entry is not the special value *empty* , [append](https://infra.spec.whatwg.org/#list-append) entry to copiedList.
       3. [For each](https://infra.spec.whatwg.org/#list-iterate) entry of copiedList:
          1. Let serializedEntry be ? [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal)(entry, forStorage, memory).
          2. [Append](https://infra.spec.whatwg.org/#list-append) serializedEntry to serialized.[[SetData]].
    3. Otherwise, if value is a [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object) that is a [serializable object](https://html.spec.whatwg.org/multipage/structured-data.html#serializable-objects), then perform the [serialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#serialization-steps) for value's [primary interface](https://webidl.spec.whatwg.org/#dfn-primary-interface), given value, serialized, and forStorage.
       The [serialization steps](https://html.spec.whatwg.org/multipage/structured-data.html#serialization-steps) may need to perform a sub-serialization. This is an operation which takes as input a value subValue, and returns [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal)(subValue, forStorage, memory). (In other words, a [sub-serialization](https://html.spec.whatwg.org/multipage/structured-data.html#sub-serialization) is a specialization of [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal) to be consistent within this invocation.)
    4. Otherwise, for each key in ! [EnumerableOwnProperties](https://tc39.es/ecma262/#sec-enumerableownproperties)(value, key):
       1. If ! [HasOwnProperty](https://tc39.es/ecma262/#sec-hasownproperty)(value, key) is true, then:
          1. Let inputValue be ? value.[[Get]](key, value).
          2. Let outputValue be ? [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal)(inputValue, forStorage, memory).
          3. [Append](https://infra.spec.whatwg.org/#list-append) { [[Key]]: key, [[Value]]: outputValue } to serialized.[[Properties]].
27. Return serialized.

It's important to realize that the [Records](https://tc39.es/ecma262/#sec-list-and-record-specification-type) produced by [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal) might contain "pointers" to other records that create circular references. For example, when we pass the following JavaScript object into [StructuredSerializeInternal](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal):

