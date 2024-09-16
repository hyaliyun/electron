### Common DOM interfaces

#### **2.6.1** Reflecting content attributes in IDL attributes

The building blocks for reflecting are as follows:

* A reflected target is an element or `<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#elementinternals">ElementInternals</a>` object. It is typically clear from context and typically identical to the interface of the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute). It is always identical to that interface when it is an `<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#elementinternals">ElementInternals</a>` object.
* A reflected IDL attribute is an attribute interface member.
* A reflected content attribute name is a string. When the [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) is an element, it represents the local name of a content attribute whose namespace is null. When the [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) is an `<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#elementinternals">ElementInternals</a>` object, it represents a key of the [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target)'s [target element](https://html.spec.whatwg.org/multipage/custom-elements.html#internals-target)'s [internal content attribute map](https://html.spec.whatwg.org/multipage/custom-elements.html#internal-content-attribute-map).

A [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) can be defined to reflect a [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name) of a [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target). In general this means that the IDL attribute getter returns the current value of the content attribute, and the setter changes the value of the content attribute to the given value.

If the [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) is an element, then the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) can additionally declare to support `ElementInternals`. This means that the `<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#elementinternals">ElementInternals</a>` interface also has a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute), with the same identifier, and that [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) [reflects](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the same [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name).

The `<var>fooBar</var>` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<var>foobar</var>` content attribute and [support `ElementInternals`](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#support-elementinternals).

[Reflected targets](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) have these associated algorithms:

* get the element: takes no arguments; returns an element.
* get the content attribute: takes no arguments; returns null or a string.
* set the content attribute: takes a string value; returns nothing.
* delete the content attribute: takes no arguments; returns nothing.

For a [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) that is an element element, these are defined as follows:

[get the element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-element)1. Return element.

[get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute)1. Let attribute be the result of running [get an attribute by namespace and local name](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace) given null, the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name), and element.

1. If attribute is null, then return null.
2. Return attribute's [value](https://dom.spec.whatwg.org/#concept-attribute-value).

[set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with a string value1. [Set an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) given element, the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name), and value.

[delete the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#delete-the-content-attribute)1. [Remove an attribute by namespace and local name](https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace) given null, the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name), and element.

For a [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) that is an `<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#elementinternals">ElementInternals</a>` object elementInternals, they are defined as follows:

[get the element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-element)1. Return elementInternals's [target element](https://html.spec.whatwg.org/multipage/custom-elements.html#internals-target).

[get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute)1. If elementInternals's [target element](https://html.spec.whatwg.org/multipage/custom-elements.html#internals-target)'s [internal content attribute map](https://html.spec.whatwg.org/multipage/custom-elements.html#internal-content-attribute-map)[the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name)] [does not exist](https://infra.spec.whatwg.org/#map-exists), then return null.

1. Return elementInternals's [target element](https://html.spec.whatwg.org/multipage/custom-elements.html#internals-target)'s [internal content attribute map](https://html.spec.whatwg.org/multipage/custom-elements.html#internal-content-attribute-map)[the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name)].

[set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with a string value1. [Set](https://infra.spec.whatwg.org/#map-set) elementInternals's [target element](https://html.spec.whatwg.org/multipage/custom-elements.html#internals-target)'s [internal content attribute map](https://html.spec.whatwg.org/multipage/custom-elements.html#internal-content-attribute-map)[the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name)] to value.

[delete the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#delete-the-content-attribute)1. [Remove](https://infra.spec.whatwg.org/#map-remove) elementInternals's [target element](https://html.spec.whatwg.org/multipage/custom-elements.html#internals-target)'s [internal content attribute map](https://html.spec.whatwg.org/multipage/custom-elements.html#internal-content-attribute-map)[the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name)].

This results in somewhat redundant data structures for `<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#elementinternals">ElementInternals</a>` objects as their [target element](https://html.spec.whatwg.org/multipage/custom-elements.html#internals-target)'s [internal content attribute map](https://html.spec.whatwg.org/multipage/custom-elements.html#internal-content-attribute-map) cannot be directly manipulated and as such reflection is only happening in a single direction. This approach was nevertheless chosen to make it less error-prone to define IDL attributes that are shared between [reflected targets](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) and benefit from common API semantics.

---

IDL attributes of type `<a data-x-internal="idl-domstring" href="https://webidl.spec.whatwg.org/#idl-DOMString">DOMString</a>` or `<a href="https://webidl.spec.whatwg.org/#idl-DOMString" id="reflecting-content-attributes-in-idl-attributes:idl-domstring-2" data-x-internal="idl-domstring">DOMString</a>?` that [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) [enumerated](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) content attributes can be limited to only known values. Per the processing models below, those will cause the getters for such IDL attributes to only return keywords for those enumerated attributes, or the empty string or null.

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<a data-x-internal="idl-domstring" href="https://webidl.spec.whatwg.org/#idl-DOMString">DOMString</a>`:

* The getter steps are:
  1. Let element be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-element).
  2. Let contentAttributeValue be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
  3. Let attributeDefinition be the attribute definition of element's content attribute whose namespace is null and local name is the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name).
  4. If attributeDefinition indicates it is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) and the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is defined to be [limited to only known values](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-known-values):
     1. If contentAttributeValue does not correspond to any state of attributeDefinition (e.g., it is null and there is no *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* ), or if it is in a state of attributeDefinition with no associated keyword value, then return the empty string.
     2. Return the [canonical keyword](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#canonical-keyword) for the state of attributeDefinition that contentAttributeValue corresponds to.
  5. If contentAttributeValue is null, then return the empty string.
  6. Return contentAttributeValue.
* The setter steps are to run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with the given value.

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<a href="https://webidl.spec.whatwg.org/#idl-DOMString" id="reflecting-content-attributes-in-idl-attributes:idl-domstring-4" data-x-internal="idl-domstring">DOMString</a>?`:

* The getter steps are:
  1. Let element be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-element).
  2. Let contentAttributeValue be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
  3. Let attributeDefinition be the attribute definition of element's content attribute whose namespace is null and local name is the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name).
  4. [Assert](https://infra.spec.whatwg.org/#assert): attributeDefinition indicates it is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute).
  5. [Assert](https://infra.spec.whatwg.org/#assert): the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [limited to only known values](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-known-values).
  6. [Assert](https://infra.spec.whatwg.org/#assert): contentAttributeValue corresponds to a state of attributeDefinition.
  7. If contentAttributeValue corresponds to a state of attributeDefinition with no associated keyword value, then return null.
  8. Return the [canonical keyword](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#canonical-keyword) for the state of attributeDefinition that contentAttributeValue corresponds to.
* The setter steps are:
  1. If the given value is null, then run [this](https://webidl.spec.whatwg.org/#this)'s [delete the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#delete-the-content-attribute).
  2. Otherwise, run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with the given value.

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<a data-x-internal="idl-domstring" href="https://webidl.spec.whatwg.org/#idl-DOMString">USVString</a>`:

* The getter steps are:
  1. Let element be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-element).
  2. Let contentAttributeValue be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
  3. Let attributeDefinition be the attribute definition of element's content attribute whose namespace is null and local name is the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name).
  4. If attributeDefinition indicates it contains a [URL](https://url.spec.whatwg.org/#concept-url):
     1. If contentAttributeValue is null, then return the empty string.
     2. Let urlString be the result of [encoding-parsing-and-serializing a URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-and-serializing-a-url) given contentAttributeValue, relative to element's [node document](https://dom.spec.whatwg.org/#concept-node-document).
     3. If urlString is not failure, then return urlString.
  5. Return contentAttributeValue, [converted to a scalar value string](https://infra.spec.whatwg.org/#javascript-string-convert).
* The setter steps are to run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with the given value.

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<a data-x-internal="idl-boolean" href="https://webidl.spec.whatwg.org/#idl-boolean">boolean</a>`:

* The getter steps are:
  1. Let contentAttributeValue be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
  2. If contentAttributeValue is null, then return false.
  3. Return true.
* The setter steps are:
  1. If the given value is false, then run [this](https://webidl.spec.whatwg.org/#this)'s [delete the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#delete-the-content-attribute).
  2. If the given value is true, then run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with the empty string.

This corresponds to the rules for [boolean content attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute).

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<a data-x-internal="idl-long" href="https://webidl.spec.whatwg.org/#idl-long">long</a>`, optionally limited to only non-negative numbers and optionally with a default value defaultValue:

* The getter steps are:
  1. Let contentAttributeValue be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
  2. If contentAttributeValue is not null:
     1. Let parsedValue be the result of [integer parsing](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-integers) contentAttributeValue if the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is not [limited to only non-negative numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers); otherwise the result of [non-negative integer parsing](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-non-negative-integers) contentAttributeValue.
     2. If parsedValue is not an error and is within the `<a data-x-internal="idl-long" href="https://webidl.spec.whatwg.org/#idl-long">long</a>` range, then return parsedValue.
  3. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has a [default value](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#default-value), then return defaultValue.
  4. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [limited to only non-negative numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers), then return −1.
  5. Return 0.
* The setter steps are:
  1. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [limited to only non-negative numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers) and the given value is negative, then throw an [&#34;`IndexSizeError`&#34;](https://webidl.spec.whatwg.org/#indexsizeerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
  2. Run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with the given value converted to the shortest possible string representing the number as a [valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer).

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<a data-x-internal="idl-unsigned-long" href="https://webidl.spec.whatwg.org/#idl-unsigned-long">unsigned long</a>`, optionally limited to only positive numbers, limited to only positive numbers with fallback, or clamped to the range [clampedMin, clampedMax], and optionally with a [default value](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#default-value) defaultValue:

* The getter steps are:

  1. Let contentAttributeValue be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
  2. Let minimum be 0.
  3. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [limited to only positive numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers-greater-than-zero) or [limited to only positive numbers with fallback](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers-greater-than-zero-with-fallback), then set minimum to 1.
  4. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [clamped to the range](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#clamped-to-the-range), then set minimum to clampedMin.
  5. Let maximum be 2147483647 if the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is not [clamped to the range](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#clamped-to-the-range); otherwise clampedMax.
  6. If contentAttributeValue is not null:
     1. Let parsedValue be the result of [non-negative integer parsing](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-non-negative-integers) contentAttributeValue.
     2. If parsedValue is not an error and is in the range minimum to maximum, inclusive, then return parsedValue.
     3. If parsedValue is not an error and the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [clamped to the range](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#clamped-to-the-range):
        1. If parsedValue is less than minimum, then return minimum.
        2. Return maximum.
  7. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has a [default value](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#default-value), then return defaultValue.
  8. Return minimum.
* The setter steps are:

  1. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [limited to only positive numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers-greater-than-zero) and the given value is 0, then throw an [&#34;`IndexSizeError`&#34;](https://webidl.spec.whatwg.org/#indexsizeerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
  2. Let minimum be 0.
  3. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [limited to only positive numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers-greater-than-zero) or [limited to only positive numbers with fallback](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers-greater-than-zero-with-fallback), then set minimum to 1.
  4. Let newValue be minimum.
  5. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has a [default value](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#default-value), then set newValue to defaultValue.
  6. If the given value is in the range minimum to 2147483647, inclusive, then set newValue to it.
  7. Run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with newValue converted to the shortest possible string representing the number as a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer).

  [Clamped to the range](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#clamped-to-the-range) has no effect on the setter steps.

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<a data-x-internal="idl-double" href="https://webidl.spec.whatwg.org/#idl-double">double</a>`, optionally [limited to only positive numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers-greater-than-zero) and optionally with a [default value](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#default-value) defaultValue:

* The getter steps are:
  1. Let contentAttributeValue be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
  2. If contentAttributeValue is not null:
     1. Let parsedValue be the result of [floating-point number parsing](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-floating-point-number-values) contentAttributeValue.
     2. If parsedValue is not an error and is greater than 0, then return parsedValue.
     3. If parsedValue is not an error and the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is not [limited to only positive numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers-greater-than-zero), then return parsedValue.
  3. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has a [default value](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#default-value), then return defaultValue.
  4. Return 0.
* The setter steps are:
  1. If the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) is [limited to only positive numbers](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-non-negative-numbers-greater-than-zero) and the given value is not greater than 0, then return.
  2. Run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with the given value, converted to the [best representation of the number as a floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#best-representation-of-the-number-as-a-floating-point-number).

The values Infinity and Not-a-Number (NaN) values throw an exception on setting, as defined in Web IDL. [[WEBIDL]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<a data-x-internal="domtokenlist" href="https://dom.spec.whatwg.org/#interface-domtokenlist">DOMTokenList</a>`, then its getter steps are to return a `<a data-x-internal="domtokenlist" href="https://dom.spec.whatwg.org/#interface-domtokenlist">DOMTokenList</a>` object whose associated element is [this](https://webidl.spec.whatwg.org/#this) and associated attribute's local name is the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name). Specification authors cannot use [support `ElementInternals`](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#support-elementinternals) for IDL attributes of this type.

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `<var>T</var>?`, where T is either `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>` or an interface that inherits from `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>`, then with attr being the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name):

* Its [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) has an explicitly set attr-element, which is a weak reference to an element or null. It is initially null.
* Its [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) reflectedTarget has a get the attr-associated element algorithm, that runs these steps:
  1. Let element be the result of running reflectedTarget's [get the element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-element).
  2. Let contentAttributeValue be the result of running reflectedTarget's [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
  3. If reflectedTarget's [explicitly set attr-element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-element) is not null:

     1. If reflectedTarget's [explicitly set attr-element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-element) is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of any of element's [shadow-including ancestors](https://dom.spec.whatwg.org/#concept-shadow-including-ancestor), then return reflectedTarget's [explicitly set attr-element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-element).
     2. Return null.
  4. Otherwise, if contentAttributeValue is not null, return the first element candidate, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), that meets the following criteria:

     * candidate's [root](https://dom.spec.whatwg.org/#concept-tree-root) is the same as element's [root](https://dom.spec.whatwg.org/#concept-tree-root);
     * candidate's [ID](https://dom.spec.whatwg.org/#concept-id) is contentAttributeValue; and
     * candidate [implements](https://webidl.spec.whatwg.org/#implements) T.

     If no such element exists, then return null.
  5. Return null.
* The getter steps are to return the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the attr-associated element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#attr-associated-element).
* The setter steps are:
  1. If the given value is null, then:
     1. Set [this](https://webidl.spec.whatwg.org/#this)'s [explicitly set attr-element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-element) to null.
     2. Run [this](https://webidl.spec.whatwg.org/#this)'s [delete the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#delete-the-content-attribute).
     3. Return.
  2. Run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with the empty string.
  3. Set [this](https://webidl.spec.whatwg.org/#this)'s [explicitly set attr-element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-element) to a weak reference to the given value.
* For element [reflected targets](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) only: the following [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext), given element, localName, oldValue, value, and namespace, are used to synchronize between the content attribute and the IDL attribute:
  1. If localName is not attr or namespace is not null, then return.
  2. Set element's [explicitly set attr-element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-element) to null.

[Reflected IDL attributes](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) of this type are strongly encouraged to have their identifier end in "`Element`" for consistency.

If a [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) has the type `FrozenArray<<var>T</var>>?`, where T is either `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>` or an interface that inherits from `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>`, then with attr being the [reflected content attribute name](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-content-attribute-name):

* Its [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) has an explicitly set attr-elements, which is either a [list](https://infra.spec.whatwg.org/#list) of weak references to elements or null. It is initially null.
* Its [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) has a cached attr-associated elements, which is a [list](https://infra.spec.whatwg.org/#list) of elements. It is initially « ».
* Its [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) has a cached attr-associated elements object, which is a `FrozenArray<<var>T</var>>?`. It is initially null.
* Its [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) reflectedTarget has a get the attr-associated elements algorithm, which runs these steps:

  1. Let elements be an empty [list](https://infra.spec.whatwg.org/#list).
  2. Let element be the result of running reflectedTarget's [get the element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-element).
  3. If reflectedTarget's [explicitly set attr-elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-elements) is not null:
     1. [For each](https://infra.spec.whatwg.org/#list-iterate) attrElement in reflectedTarget's [explicitly set attr-elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-elements):
        1. If attrElement is not a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of any of element's [shadow-including ancestors](https://dom.spec.whatwg.org/#concept-shadow-including-ancestor), then [continue](https://infra.spec.whatwg.org/#iteration-continue).
        2. [Append](https://infra.spec.whatwg.org/#list-append) attrElement to elements.
  4. Otherwise:
     1. Let contentAttributeValue be the result of running reflectedTarget's [get the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#get-the-content-attribute).
     2. If contentAttributeValue is null, then return null.
     3. Let tokens be contentAttributeValue, [split on ASCII whitespace](https://infra.spec.whatwg.org/#split-on-ascii-whitespace).
     4. [For each](https://infra.spec.whatwg.org/#list-iterate) id of tokens:
        1. Let candidate be the first element, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), that meets the following criteria:

           * candidate's [root](https://dom.spec.whatwg.org/#concept-tree-root) is the same as element's [root](https://dom.spec.whatwg.org/#concept-tree-root);
           * candidate's [ID](https://dom.spec.whatwg.org/#concept-id) is id; and
           * candidate [implements](https://webidl.spec.whatwg.org/#implements) T.

           If no such element exists, then [continue](https://infra.spec.whatwg.org/#iteration-continue).
        2. [Append](https://infra.spec.whatwg.org/#list-append) candidate to elements.
  5. Return elements.
* The getter steps are:

  1. Let elements be the result of running [this](https://webidl.spec.whatwg.org/#this)'s [get the attr-associated elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#attr-associated-elements).
  2. If the contents of elements is equal to the contents of [this](https://webidl.spec.whatwg.org/#this)'s [cached attr-associated elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#cached-attr-associated-elements), then return [this](https://webidl.spec.whatwg.org/#this)'s [cached attr-associated elements object](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#cached-attr-associated-elements-object).
  3. Let elementsAsFrozenArray be elements, [converted](https://webidl.spec.whatwg.org/#es-type-mapping) to a `FrozenArray<<var>T</var>>?`.
  4. Set [this](https://webidl.spec.whatwg.org/#this)'s [cached attr-associated elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#cached-attr-associated-elements) to elements.
  5. Set [this](https://webidl.spec.whatwg.org/#this)'s [cached attr-associated elements object](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#cached-attr-associated-elements-object) to elementsAsFrozenArray.
  6. Return elementsAsFrozenArray.

  This extra caching layer is necessary to preserve the invariant that `element.reflectedElements === element.reflectedElements`.
* The setter steps are:

  1. If the given value is null:
     1. Set [this](https://webidl.spec.whatwg.org/#this)'s [explicitly set attr-elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-elements) to null.
     2. Run [this](https://webidl.spec.whatwg.org/#this)'s [delete the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#delete-the-content-attribute).
     3. Return.
  2. Run [this](https://webidl.spec.whatwg.org/#this)'s [set the content attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#set-the-content-attribute) with the empty string.
  3. Let elements be an empty [list](https://infra.spec.whatwg.org/#list).
  4. [For each](https://infra.spec.whatwg.org/#list-iterate) element in the given value:
     1. [Append](https://infra.spec.whatwg.org/#list-append) a weak reference to element to elements.
  5. Set [this](https://webidl.spec.whatwg.org/#this)'s [explicitly set attr-elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-elements) to elements.
* For element [reflected targets](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target) only: the following [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext), given element, localName, oldValue, value, and namespace, are used to synchronize between the content attribute and the IDL attribute:

  1. If localName is not attr or namespace is not null, then return.
  2. Set element's [explicitly set attr-elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-elements) to null.

[Reflected IDL attributes](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) of this type are strongly encouraged to have their identifier end in "`Elements`" for consistency.

#### **2.6.2** Using reflect in specifications

[Reflection](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) is primarily about improving web developer ergonomics by giving them typed access to content attributes through [reflected IDL attributes](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute). The ultimate source of truth, which the web platform builds upon, is the content attributes themselves. That is, specification authors must not use the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) getter or setter steps, but instead must use the content attribute presence and value. (Or an abstraction on top, such as the state of an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute).)

Two important exceptions to this are [reflected IDL attributes](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute) whose type is one of the following:

* `<var>T</var>?`, where T is either `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>` or an interface that inherits from `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>`
* `FrozenArray<<var>T</var>>?`, where T is either `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>` or an interface that inherits from `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>`

For those, specification authors must use the [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target)'s [get the attr-associated element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#attr-associated-element) and [get the attr-associated elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#attr-associated-elements), respectively. The content attribute presence and value must not be used as they cannot be fully synchronized with the [reflected IDL attribute](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-idl-attribute).

A [reflected target](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflected-target)'s [explicitly set attr-element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-element), [explicitly set attr-elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#explicitly-set-attr-elements), [cached attr-associated elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#cached-attr-associated-elements), and [cached attr-associated elements object](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#cached-attr-associated-elements-object) are to be treated as internal implementation details and not to be built upon.

#### **2.6.3** Collections

The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlformcontrolscollection">HTMLFormControlsCollection</a>` and `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmloptionscollection">HTMLOptionsCollection</a>` interfaces are [collections](https://dom.spec.whatwg.org/#concept-collection) derived from the `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` interface. The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` interface is a [collection](https://dom.spec.whatwg.org/#concept-collection), but is not so derived.

##### **2.6.3.1** The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` interface

The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` interface is used for the legacy `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all">document.all</a>` attribute. It operates similarly to `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>`; the main differences are that it allows a staggering variety of different (ab)uses of its methods to all end up returning something, and that it can be called as a function as an alternative to property access.

All `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` objects are rooted at a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` and have a filter that matches all elements, so the elements [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection) of an `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` object consist of all the descendant elements of the root `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.

Objects that implement the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` interface are [legacy platform objects](https://webidl.spec.whatwg.org/#dfn-legacy-platform-object) with an additional [[Call]] internal method described in the [section below](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#HTMLAllCollection-call). They also have an [[[IsHTMLDDA]]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) internal slot.

Objects that implement the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` interface have several unusual behaviors, due of the fact that they have an [[[IsHTMLDDA]]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) internal slot:

* The [ToBoolean](https://tc39.es/ecma262/#sec-toboolean) abstract operation in JavaScript returns false when given objects implementing the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` interface.
* The [IsLooselyEqual](https://tc39.es/ecma262/#sec-islooselyequal) abstract operation, when given objects implementing the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` interface, returns true when compared to the `undefined` and `null` values. (Comparisons using the [IsStrictlyEqual](https://tc39.es/ecma262/#sec-isstrictlyequal) abstract operation, and IsLooselyEqual comparisons to other values such as strings or objects, are unaffected.)
* The `<a data-x-internal="js-typeof" href="https://tc39.es/ecma262/#sec-typeof-operator">typeof</a>` operator in JavaScript returns the string `"undefined"` when applied to objects implementing the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` interface.

These special behaviors are motivated by a desire for compatibility with two classes of legacy content: one that uses the presence of `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all">document.all</a>` as a way to detect legacy user agents, and one that only supports those legacy user agents and uses the `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all">document.all</a>` object without testing for its presence first. [[JAVASCRIPT]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

```
[=,
 ]
  {
      ;
    (  );
   (  )? ( );
  (  )? (  );

  // Note: HTMLAllCollection objects have a custom [[Call]] internal method and an [[IsHTMLDDA]] internal slot.
};
```

The object's [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices) are as defined for `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` objects.

The [supported property names](https://webidl.spec.whatwg.org/#dfn-supported-property-names) consist of the non-empty values of all the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attributes of all the elements [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection), and the non-empty values of all the `name` attributes of all the [&#34;all&#34;-named elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#all-named-elements) [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), ignoring later duplicates, with the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` of an element preceding its `name` if it contributes both, they differ from each other, and neither is the duplicate of an earlier entry.

The `length` getter steps are to return the number of nodes [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection).

The indexed property getter must return the result of [getting the &#34;all&#34;-indexed element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#concept-get-all-indexed) from [this](https://webidl.spec.whatwg.org/#this) given the passed index.

The `namedItem(<var>name</var>)` method steps are to return the result of [getting the &#34;all&#34;-named element(s)](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#concept-get-all-named) from [this](https://webidl.spec.whatwg.org/#this) given name.

The `item(<var>nameOrIndex</var>)` method steps are:

1. If nameOrIndex was not provided, return null.
2. Return the result of [getting the &#34;all&#34;-indexed or named element(s)](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#concept-get-all-indexed-or-named) from [this](https://webidl.spec.whatwg.org/#this), given nameOrIndex.

---

The following elements are "all"-named elements: `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>`, `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>`, `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>`, `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#frame">frame</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#frameset">frameset</a>`, `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`, `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`, `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>`, `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>`, `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>`, `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>`, and `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>`

To get the "all"-indexed element from an `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` collection given an index index, return the index^th^ element in collection, or null if there is no such index^th^ element.

To get the "all"-named element(s) from an `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` collection given a name name, perform the following steps:

1. If name is the empty string, return null.
2. Let subCollection be an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` object rooted at the same `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` as collection, whose filter matches only elements that are either:
   * [&#34;all&#34;-named elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#all-named-elements) with a `name` attribute equal to name, or,
   * elements with an [ID](https://dom.spec.whatwg.org/#concept-id) equal to name.
3. If there is exactly one element in subCollection, then return that element.
4. Otherwise, if subCollection is empty, return null.
5. Otherwise, return subCollection.

To get the "all"-indexed or named element(s) from an `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` collection given nameOrIndex:

1. If nameOrIndex, [converted](https://webidl.spec.whatwg.org/#es-type-mapping) to a JavaScript String value, is an [array index property name](https://webidl.spec.whatwg.org/#dfn-array-index-property-name), return the result of [getting the &#34;all&#34;-indexed element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#concept-get-all-indexed) from collection given the number represented by nameOrIndex.
2. Return the result of [getting the &#34;all&#34;-named element(s)](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#concept-get-all-named) from collection given nameOrIndex.

###### **2.6.3.1.1** [[Call]] ( thisArgument, argumentsList )

1. If argumentsList's [size](https://infra.spec.whatwg.org/#list-size) is zero, or if argumentsList[0] is undefined, return null.
2. Let nameOrIndex be the result of [converting](https://webidl.spec.whatwg.org/#es-type-mapping) argumentsList[0] to a `<a data-x-internal="idl-domstring" href="https://webidl.spec.whatwg.org/#idl-DOMString">DOMString</a>`.
3. Let result be the result of [getting the &#34;all&#34;-indexed or named element(s)](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#concept-get-all-indexed-or-named) from this `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlallcollection">HTMLAllCollection</a>` given nameOrIndex.
4. Return the result of [converting](https://webidl.spec.whatwg.org/#es-type-mapping) result to an ECMAScript value.

The thisArgument is ignored, and thus code such as `Function.prototype.call.call(document.all, null, "x")` will still search for elements. (`document.all.call` does not exist, since `document.all` does not inherit from `Function.prototype`.)

##### **2.6.3.2** The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlformcontrolscollection">HTMLFormControlsCollection</a>` interface

The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlformcontrolscollection">HTMLFormControlsCollection</a>` interface is used for [collections](https://dom.spec.whatwg.org/#concept-collection) of [listed elements](https://html.spec.whatwg.org/multipage/forms.html#category-listed) in `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>` elements.

**✔** MDN

```
[=]
  :  {
  // inherits length and item()
   (  )? ( ); // shadows inherited namedItem()
};

[=]
  :  {
    ;
};
```

`<var>collection</var>.<a href="https://dom.spec.whatwg.org/#dom-htmlcollection-length" id="dom-htmlcollection-length-dev" data-x-internal="dom-htmlcollection-length">length</a>`Returns the number of elements in collection.

`<var>element</var><span> </span>=<span> </span><var>collection</var>.<a href="https://dom.spec.whatwg.org/#dom-htmlcollection-item" id="dom-htmlcollection-item-dev" data-x-internal="dom-htmlcollection-item">item</a>(<var>index</var>)``<var>element</var><span> </span>=<span> </span><var>collection</var>[<var>index</var>]`Returns the item at index index in collection. The items are sorted in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

`<var>element</var><span> </span>=<span> </span><var>collection</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmlformcontrolscollection-nameditem" id="dom-htmlformcontrolscollection-nameditem-dev">namedItem</a>(<var>name</var>)`**✔** MDN

`<var>radioNodeList</var><span> </span>=<span> </span><var>collection</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmlformcontrolscollection-nameditem" id="the-htmlformcontrolscollection-interface:dom-htmlformcontrolscollection-nameditem-2">namedItem</a>(<var>name</var>)``<var>element</var><span> </span>=<span> </span><var>collection</var>[<var>name</var>]``<var>radioNodeList</var><span> </span>=<span> </span><var>collection</var>[<var>name</var>]`Returns the item with [ID](https://dom.spec.whatwg.org/#concept-id) or `<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name">name</a>` name from collection.

If there are multiple matching items, then a `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object containing all those elements is returned.

`<var>radioNodeList</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-radionodelist-value" id="dom-radionodelist-value-dev">value</a>`Returns the value of the first checked radio button represented by radioNodeList.

`<var>radioNodeList</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-radionodelist-value" id="the-htmlformcontrolscollection-interface:dom-radionodelist-value-2">value</a><span> </span>=<span> </span><var>value</var>`Checks the first radio button represented by radioNodeList that has value value.

The object's [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices) are as defined for `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` objects.

The [supported property names](https://webidl.spec.whatwg.org/#dfn-supported-property-names) consist of the non-empty values of all the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` and `<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name">name</a>` attributes of all the elements [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), ignoring later duplicates, with the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` of an element preceding its `<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name">name</a>` if it contributes both, they differ from each other, and neither is the duplicate of an earlier entry.

The `namedItem(<var>name</var>)` method must act according to the following algorithm:

1. If name is the empty string, return null and stop the algorithm.
2. If, at the time the method is called, there is exactly one node in the collection that has either an `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute or a `<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name">name</a>` attribute equal to name, then return that node and stop the algorithm.
3. Otherwise, if there are no nodes in the collection that have either an `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute or a `<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name">name</a>` attribute equal to name, then return null and stop the algorithm.
4. Otherwise, create a new `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object representing a [live](https://html.spec.whatwg.org/multipage/infrastructure.html#live) view of the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmlformcontrolscollection">HTMLFormControlsCollection</a>` object, further filtered so that the only nodes in the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object are those that have either an `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute or a `<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name">name</a>` attribute equal to name. The nodes in the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object must be sorted in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).
5. Return that `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object.

---

Members of the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` interface inherited from the `<a data-x-internal="nodelist" href="https://dom.spec.whatwg.org/#interface-nodelist">NodeList</a>` interface must behave as they would on a `<a data-x-internal="nodelist" href="https://dom.spec.whatwg.org/#interface-nodelist">NodeList</a>` object.

**✔** MDN

The `value` IDL attribute on the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object, on getting, must return the value returned by running the following steps:

1. Let element be the first element in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) represented by the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object that is an `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` element whose `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">type</a>` attribute is in the [Radio Button](https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio)) state and whose [checkedness](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-checked) is true. Otherwise, let it be null.
2. If element is null, return the empty string.
3. If element is an element with no `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-value">value</a>` attribute, return the string "`on`".
4. Otherwise, return the value of element's `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-value">value</a>` attribute.

On setting, the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-radionodelist-value">value</a>` IDL attribute must run the following steps:

1. If the new value is the string "`on`": let element be the first element in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) represented by the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object that is an `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` element whose `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">type</a>` attribute is in the [Radio Button](https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio)) state and whose `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-value">value</a>` content attribute is either absent, or present and equal to the new value, if any. If no such element exists, then instead let element be null.
   Otherwise: let element be the first element in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) represented by the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#radionodelist">RadioNodeList</a>` object that is an `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` element whose `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">type</a>` attribute is in the [Radio Button](https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio)) state and whose `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-value">value</a>` content attribute is present and equal to the new value, if any. If no such element exists, then instead let element be null.
2. If element is not null, then set its [checkedness](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-checked) to true.

##### **2.6.3.3** The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmloptionscollection">HTMLOptionsCollection</a>` interface

**✔** MDN

The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmloptionscollection">HTMLOptionsCollection</a>` interface is used for [collections](https://dom.spec.whatwg.org/#concept-collection) of `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` elements. It is always rooted on a `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` element and has attributes and methods that manipulate that element's descendants.

```
[=]
  :  {
  // inherits item(), namedItem()
  []    ; // shadows inherited length
  []   (  , ? );
  []  ((  ) ,  (  )?  = );
  []  ( );
    ;
};
```

`<var>collection</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-length" id="dom-htmloptionscollection-length-dev">length</a>`Returns the number of elements in collection.

`<var>collection</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-length" id="the-htmloptionscollection-interface:dom-htmloptionscollection-length-2">length</a><span> </span>=<span> </span><var>value</var>`When set to a smaller number than the existing length, truncates the number of `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` elements in the container corresponding to collection.

When set to a greater number than the existing length, if that number is less than or equal to 100000, adds new blank `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` elements to the container corresponding to collection.

`<var>element</var><span> </span>=<span> </span><var>collection</var>.<a href="https://dom.spec.whatwg.org/#dom-htmlcollection-item" id="the-htmloptionscollection-interface:dom-htmlcollection-item-2" data-x-internal="dom-htmlcollection-item">item</a>(<var>index</var>)``<var>element</var><span> </span>=<span> </span><var>collection</var>[<var>index</var>]`Returns the item at index index in collection. The items are sorted in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

`<var>collection</var>[<var>index</var>] =<span> </span><var>element</var>`When index is a greater number than the number of items in collection, adds new blank `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` elements in the corresponding container.

When set to null, removes the item at index index from collection.

When set to an `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` element, adds or replaces it at index index in collection.

`<var>element</var><span> </span>=<span> </span><var>collection</var>.<a href="https://dom.spec.whatwg.org/#dom-htmlcollection-nameditem" id="dom-htmlcollection-nameditem-dev" data-x-internal="dom-htmlcollection-nameditem">namedItem</a>(<var>name</var>)``<var>element</var><span> </span>=<span> </span><var>collection</var>[<var>name</var>]`Returns the item with [ID](https://dom.spec.whatwg.org/#concept-id) or `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#attr-option-name">name</a>` name from collection.

If there are multiple matching items, then the first is returned.

`<var>collection</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-add" id="dom-htmloptionscollection-add-dev">add</a>(<var>element</var>[,<span> </span><var>before</var>])`Inserts element before the node given by before.

The before argument can be a number, in which case element is inserted before the item with that number, or an element from collection, in which case element is inserted before that element.

If before is omitted, null, or a number out of range, then element will be added at the end of the list.

Throws a [&#34;`HierarchyRequestError`&#34;](https://webidl.spec.whatwg.org/#hierarchyrequesterror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>` if element is an ancestor of the element into which it is to be inserted.

`<var>collection</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-remove" id="dom-htmloptionscollection-remove-dev">remove</a>(<var>index</var>)`Removes the item with index index from collection.

`<var>collection</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-selectedindex" id="the-htmloptionscollection-interface:dom-htmloptionscollection-selectedindex-2">selectedIndex</a>`Returns the index of the first selected item, if any, or −1 if there is no selected item.

`<var>collection</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-selectedindex" id="dom-htmloptionscollection-selectedindex-dev">selectedIndex</a><span> </span>=<span> </span><var>index</var>`Changes the selection to the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` element at index index in collection.

The object's [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices) are as defined for `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` objects.

The `length` getter steps are to return the number of nodes [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection).

The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-length">length</a>` setter steps are:

1. Let current be the number of nodes [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection).
2. If the given value is greater than current, then:
   1. If the given value is greater than 100,000, then return.
   2. Let n be value − current.
   3. Append n new `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` elements with no attributes and no child nodes to the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` element on which [this](https://webidl.spec.whatwg.org/#this) is rooted.
3. If the given value is less than current, then:
   1. Let n be current − value.
   2. Remove the last n nodes in the collection from their parent nodes.

Setting `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-length">length</a>` never removes or adds any `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element">optgroup</a>` elements, and never adds new children to existing `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element">optgroup</a>` elements (though it can remove children from them).

The [supported property names](https://webidl.spec.whatwg.org/#dfn-supported-property-names) consist of the non-empty values of all the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` and `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#attr-option-name">name</a>` attributes of all the elements [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), ignoring later duplicates, with the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` of an element preceding its `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#attr-option-name">name</a>` if it contributes both, they differ from each other, and neither is the duplicate of an earlier entry.

When the user agent is to [set the value of a new indexed property](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-a-new-indexed-property) or [set the value of an existing indexed property](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-an-existing-indexed-property) for a given property index index to a new value value, it must run the following algorithm:

1. If value is null, invoke the steps for the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-htmloptionscollection-remove">remove</a>` method with index as the argument, and return.
2. Let length be the number of nodes [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection).
3. Let n be index minus length.
4. If n is greater than zero, then [append](https://dom.spec.whatwg.org/#concept-node-append) a `<a data-x-internal="documentfragment" href="https://dom.spec.whatwg.org/#interface-documentfragment">DocumentFragment</a>` consisting of n-1 new `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` elements with no attributes and no child nodes to the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` element on which the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmloptionscollection">HTMLOptionsCollection</a>` is rooted.
5. If n is greater than or equal to zero, [append](https://dom.spec.whatwg.org/#concept-node-append) value to the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` element. Otherwise, [replace](https://dom.spec.whatwg.org/#concept-node-replace) the indexth element in the collection by value.

The `add(<var>element</var>,<span> </span><var>before</var>)` method must act according to the following algorithm:

1. If element is an ancestor of the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` element on which the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmloptionscollection">HTMLOptionsCollection</a>` is rooted, then throw a [&#34;`HierarchyRequestError`&#34;](https://webidl.spec.whatwg.org/#hierarchyrequesterror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
2. If before is an element, but that element isn't a descendant of the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` element on which the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmloptionscollection">HTMLOptionsCollection</a>` is rooted, then throw a [&#34;`NotFoundError`&#34;](https://webidl.spec.whatwg.org/#notfounderror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
3. If element and before are the same element, then return.
4. If before is a node, then let reference be that node. Otherwise, if before is an integer, and there is a beforeth node in the collection, let reference be that node. Otherwise, let reference be null.
5. If reference is not null, let parent be the parent node of reference. Otherwise, let parent be the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` element on which the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmloptionscollection">HTMLOptionsCollection</a>` is rooted.
6. [Pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert) element into parent node before reference.

The `remove(<var>index</var>)` method must act according to the following algorithm:

1. If the number of nodes [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection) is zero, return.
2. If index is not a number greater than or equal to 0 and less than the number of nodes [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection), return.
3. Let element be the indexth element in the collection.
4. Remove element from its parent node.

The `selectedIndex` IDL attribute must act like the identically named attribute on the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` element on which the `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#htmloptionscollection">HTMLOptionsCollection</a>` is rooted

#### **2.6.4** The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#domstringlist">DOMStringList</a>` interface

**✔** MDN

The `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#domstringlist">DOMStringList</a>` interface is a non-fashionable retro way of representing a list of strings.

```
[=(,)]
  {
      ;
   ? (  );
   ( );
};
```

New APIs must use `sequence<DOMString>` or equivalent rather than `<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#domstringlist">DOMStringList</a>`.

`<var>strings</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-domstringlist-length" id="dom-domstringlist-length-dev">length</a>`Returns the number of strings in strings.

`<var>strings</var>[<var>index</var>]``<var>strings</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-domstringlist-item" id="dom-domstringlist-item-dev">item</a>(<var>index</var>)`Returns the string with index index from strings.

`<var>strings</var>.<a href="https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#dom-domstringlist-contains" id="dom-domstringlist-contains-dev">contains</a>(<var>string</var>)`Returns true if strings contains string, and false otherwise.
