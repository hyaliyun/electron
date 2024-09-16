## **2** Common infrastructure

This specification depends on Infra. [[INFRA]](https://html.spec.whatwg.org/multipage/references.html#refsINFRA)

### **2.1** Terminology

This specification refers to both HTML and XML attributes and IDL attributes, often in the same context. When it is not clear which is being referred to, they are referred to as content attributes for HTML and XML attributes, and IDL attributes for those defined on IDL interfaces. Similarly, the term "properties" is used for both JavaScript object properties and CSS properties. When these are ambiguous they are qualified as object properties and CSS properties respectively.

Generally, when the specification states that a feature applies to [the HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax) or [the XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html#the-xhtml-syntax), it also includes the other. When a feature specifically only applies to one of the two languages, it is called out by explicitly stating that it does not apply to the other format, as in "for HTML, ... (this does not apply to XML)".

This specification uses the term document to refer to any use of HTML, ranging from short static documents to long essays or reports with rich multimedia, as well as to fully-fledged interactive applications. The term is used to refer both to `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` objects and their descendant DOM trees, and to serialized byte streams using the [HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax) or the [XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html#the-xhtml-syntax), depending on context.

In the context of the DOM structures, the terms [HTML document](https://dom.spec.whatwg.org/#html-document) and [XML document](https://dom.spec.whatwg.org/#xml-document) are used as defined in DOM, and refer specifically to two different modes that `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` objects can find themselves in. [[DOM]](https://html.spec.whatwg.org/multipage/references.html#refsDOM) (Such uses are always hyperlinked to their definition.)

In the context of byte streams, the term HTML document refers to resources labeled as `<a href="https://html.spec.whatwg.org/multipage/iana.html#text/html">text/html</a>`, and the term XML document refers to resources labeled with an [XML MIME type](https://mimesniff.spec.whatwg.org/#xml-mime-type).

---

For simplicity, terms such as shown, displayed, and visible might sometimes be used when referring to the way a document is rendered to the user. These terms are not meant to imply a visual medium; they must be considered to apply to other media in equivalent ways.

#### **2.1.1** Parallelism

To run steps in parallel means those steps are to be run, one after another, at the same time as other logic in the standard (e.g., at the same time as the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)). This standard does not define the precise mechanism by which this is achieved, be it time-sharing cooperative multitasking, fibers, threads, processes, using different hyperthreads, cores, CPUs, machines, etc. By contrast, an operation that is to run immediately must interrupt the currently running task, run itself, and then resume the previously running task.

For guidance on writing specifications that leverage parallelism, see [Dealing with the event loop from other specifications](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-for-spec-authors).

To avoid race conditions between different [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) algorithms that operate on the same data, a [parallel queue](https://html.spec.whatwg.org/multipage/infrastructure.html#parallel-queue) can be used.

A parallel queue represents a queue of algorithm steps that must be run in series.

A [parallel queue](https://html.spec.whatwg.org/multipage/infrastructure.html#parallel-queue) has an algorithm queue (a [queue](https://infra.spec.whatwg.org/#queue)), initially empty.

To enqueue steps to a [parallel queue](https://html.spec.whatwg.org/multipage/infrastructure.html#parallel-queue), [enqueue](https://infra.spec.whatwg.org/#queue-enqueue) the algorithm steps to the [parallel queue](https://html.spec.whatwg.org/multipage/infrastructure.html#parallel-queue)'s [algorithm queue](https://html.spec.whatwg.org/multipage/infrastructure.html#algorithm-queue).

To start a new parallel queue, run the following steps:

1. Let parallelQueue be a new [parallel queue](https://html.spec.whatwg.org/multipage/infrastructure.html#parallel-queue).
2. Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):
   1. While true:

      1. Let steps be the result of [dequeueing](https://infra.spec.whatwg.org/#queue-dequeue) from parallelQueue's [algorithm queue](https://html.spec.whatwg.org/multipage/infrastructure.html#algorithm-queue).
      2. If steps is not nothing, then run steps.
      3. [Assert](https://infra.spec.whatwg.org/#assert): running steps did not throw an exception, as steps running [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) are not allowed to throw.

      Implementations are not expected to implement this as a continuously running loop. Algorithms in standards are to be easy to understand and are not necessarily great for battery life or performance.
3. Return parallelQueue.

Steps running [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel) can themselves run other steps in [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel). E.g., inside a [parallel queue](https://html.spec.whatwg.org/multipage/infrastructure.html#parallel-queue) it can be useful to run a series of steps in parallel with the queue.

Imagine a standard defined nameList (a [list](https://infra.spec.whatwg.org/#list)), along with a method to add a name to nameList, unless nameList already [contains](https://infra.spec.whatwg.org/#list-contain) name, in which case it rejects.

The following solution suffers from race conditions:

1. Let p be a new promise created in [this](https://webidl.spec.whatwg.org/#this)'s [relevant realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm).
2. Run the following steps [in parallel](https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel):
   1. If nameList [contains](https://infra.spec.whatwg.org/#list-contain) name, then [queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) given [this](https://webidl.spec.whatwg.org/#this)'s [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global) to reject p with a `<a data-x-internal="typeerror" href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror">TypeError</a>`, and abort these steps.
   2. Do some potentially lengthy work.
   3. [Append](https://infra.spec.whatwg.org/#list-append) name to nameList.
   4. [Queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) given [this](https://webidl.spec.whatwg.org/#this)'s [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global) to resolve p with undefined.
3. Return p.

Two invocations of the above could run simultaneously, meaning name isn't in nameList during step 2.1, but it *might be added* before step 2.3 runs, meaning name ends up in nameList twice.

Parallel queues solve this. The standard would let nameListQueue be the result of [starting a new parallel queue](https://html.spec.whatwg.org/multipage/infrastructure.html#starting-a-new-parallel-queue), then:

1. Let p be a new promise created in [this](https://webidl.spec.whatwg.org/#this)'s [relevant realm](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm).
2. =[Enqueue the following steps](https://html.spec.whatwg.org/multipage/infrastructure.html#enqueue-the-following-steps) to nameListQueue:=
   1. If nameList [contains](https://infra.spec.whatwg.org/#list-contain) name, then [queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) given [this](https://webidl.spec.whatwg.org/#this)'s [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global) to reject p with a `<a data-x-internal="typeerror" href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror">TypeError</a>`, and abort these steps.
   2. Do some potentially lengthy work.
   3. [Append](https://infra.spec.whatwg.org/#list-append) name to nameList.
   4. [Queue a global task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task) on the [DOM manipulation task source](https://html.spec.whatwg.org/multipage/webappapis.html#dom-manipulation-task-source) given [this](https://webidl.spec.whatwg.org/#this)'s [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global) to resolve p with undefined.
3. Return p.

The steps would now queue and the race is avoided.

#### **2.1.2** Resources

The specification uses the term supported when referring to whether a user agent has an implementation capable of decoding the semantics of an external resource. A format or type is said to be *supported* if the implementation can process an external resource of that format or type without critical aspects of the resource being ignored. Whether a specific resource is *supported* can depend on what features of the resource's format are in use.

For example, a PNG image would be considered to be in a supported format if its pixel data could be decoded and rendered, even if, unbeknownst to the implementation, the image also contained animation data.

An MPEG-4 video file would not be considered to be in a supported format if the compression format used was not supported, even if the implementation could determine the dimensions of the movie from the file's metadata.

What some specifications, in particular the HTTP specifications, refer to as a *representation* is referred to in this specification as a resource. [[HTTP]](https://html.spec.whatwg.org/multipage/references.html#refsHTTP)

A resource's critical subresources are those that the resource needs to have available to be correctly processed. Which resources are considered critical or not is defined by the specification that defines the resource's format.

For [CSS style sheets](https://drafts.csswg.org/cssom/#css-style-sheet), we tentatively define here that their critical subresources are other style sheets imported via `@import` rules, including those indirectly imported by other imported style sheets.

This definition is not fully interoperable; furthermore, some user agents seem to count resources like background images or web fonts as critical subresources. Ideally, the CSS Working Group would define this; see [w3c/csswg-drafts issue #1088](https://github.com/w3c/csswg-drafts/issues/1088) to track progress on that front.

#### **2.1.3** XML compatibility

To ease migration from HTML to XML, user agents conforming to this specification will place elements in HTML in the `<a data-x-internal="html-namespace-2" href="https://infra.spec.whatwg.org/#html-namespace">http://www.w3.org/1999/xhtml</a>` namespace, at least for the purposes of the DOM and CSS. The term "HTML elements" refers to any element in that namespace, even in XML documents.

Except where otherwise stated, all elements defined or mentioned in this specification are in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) ("`http://www.w3.org/1999/xhtml`"), and all attributes defined or mentioned in this specification have no namespace.

The term element type is used to refer to the set of elements that have a given local name and namespace. For example, `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>` elements are elements with the element type `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>`, meaning they have the local name "`button`" and (implicitly as defined above) the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace).

Attribute names are said to be XML-compatible if they match the `<a data-x-internal="xml-name" href="https://www.w3.org/TR/xml/#NT-Name">Name</a>` production defined in XML and they contain no U+003A COLON characters (:). [[XML]](https://html.spec.whatwg.org/multipage/references.html#refsXML)

#### **2.1.4** DOM trees

When it is stated that some element or attribute is ignored, or treated as some other value, or handled as if it was something else, this refers only to the processing of the node after it is in the DOM. A user agent must not mutate the DOM in such situations.

A content attribute is said to change value only if its new value is different than its previous value; setting an attribute to a value it already has does not change it.

The term empty, when used for an attribute value, `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node, or string, means that the [length](https://infra.spec.whatwg.org/#string-length) of the text is zero (i.e., not even containing [controls](https://infra.spec.whatwg.org/#control) or U+0020 SPACE).

An HTML element can have specific HTML element insertion steps, HTML element post-connection steps, and HTML element removing steps, all defined for the element's [local name](https://dom.spec.whatwg.org/#concept-element-local-name).

The [insertion steps](https://dom.spec.whatwg.org/#concept-node-insert-ext) for the HTML Standard, given insertedNode, are defined as the following:

1. If insertedNode is an element whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), and this standard defines [HTML element insertion steps](https://html.spec.whatwg.org/multipage/infrastructure.html#html-element-insertion-steps) for insertedNode's [local name](https://dom.spec.whatwg.org/#concept-element-local-name), then run the corresponding [HTML element insertion steps](https://html.spec.whatwg.org/multipage/infrastructure.html#html-element-insertion-steps) given insertedNode.
2. If insertedNode is a [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element) or the ancestor of a [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element), then:
   1. If the [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element)'s [parser inserted flag](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#parser-inserted-flag) is set, then return.
   2. [Reset the form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#reset-the-form-owner) of the [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element).
3. If insertedNode is an `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>` that is not on the [stack of open elements](https://html.spec.whatwg.org/multipage/parsing.html#stack-of-open-elements) of an [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser), then [process internal resource links](https://html.spec.whatwg.org/multipage/links.html#process-internal-resource-links) given insertedNode's [node document](https://dom.spec.whatwg.org/#concept-node-document).

The [post-connection steps](https://dom.spec.whatwg.org/#concept-node-post-connection-ext) for the HTML Standard, given insertedNode, are defined as the following:

1. If insertedNode is an element whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), and this standard defines [HTML element post-connection steps](https://html.spec.whatwg.org/multipage/infrastructure.html#html-element-post-connection-steps) for insertedNode's [local name](https://dom.spec.whatwg.org/#concept-element-local-name), then run the corresponding [HTML element post-connection steps](https://html.spec.whatwg.org/multipage/infrastructure.html#html-element-post-connection-steps) given insertedNode.

The [removing steps](https://dom.spec.whatwg.org/#concept-node-remove-ext) for the HTML Standard, given removedNode and oldParent, are defined as the following:

1. Let document be removedNode's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. If document's [focused area](https://html.spec.whatwg.org/multipage/interaction.html#focused-area-of-the-document) is removedNode, then set document's [focused area](https://html.spec.whatwg.org/multipage/interaction.html#focused-area-of-the-document) to document's [viewport](https://drafts.csswg.org/css2/#viewport), and set document's [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global)'s [navigation API](https://html.spec.whatwg.org/multipage/nav-history-apis.html#window-navigation-api)'s [focus changed during ongoing navigation](https://html.spec.whatwg.org/multipage/nav-history-apis.html#focus-changed-during-ongoing-navigation) to false.
   This does *not* perform the [unfocusing steps](https://html.spec.whatwg.org/multipage/interaction.html#unfocusing-steps), [focusing steps](https://html.spec.whatwg.org/multipage/interaction.html#focusing-steps), or [focus update steps](https://html.spec.whatwg.org/multipage/interaction.html#focus-update-steps), and thus no `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-blur">blur</a>` or `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-change">change</a>` events are fired.
3. If removedNode is an element whose [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) is the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), and this standard defines [HTML element removing steps](https://html.spec.whatwg.org/multipage/infrastructure.html#html-element-removing-steps) for removedNode's [local name](https://dom.spec.whatwg.org/#concept-element-local-name), then run the corresponding [HTML element removing steps](https://html.spec.whatwg.org/multipage/infrastructure.html#html-element-removing-steps) given removedNode and oldParent.
4. If removedNode is a [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element) or the ancestor of a [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element), then:
   1. If the [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element) has a [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) and the [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element) and its [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) are no longer in the same [tree](https://dom.spec.whatwg.org/#concept-tree), then [reset the form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#reset-the-form-owner) of the [form-associated element](https://html.spec.whatwg.org/multipage/forms.html#form-associated-element).
5. If removedNode's `<a href="https://html.spec.whatwg.org/multipage/popover.html#attr-popover">popover</a>` attribute is not in the [no popover state](https://html.spec.whatwg.org/multipage/popover.html#attr-popover-none-state), then run the [hide popover algorithm](https://html.spec.whatwg.org/multipage/popover.html#hide-popover-algorithm) given removedNode, false, false, and false.

A node is inserted into a document when the [insertion steps](https://dom.spec.whatwg.org/#concept-node-insert-ext) are invoked with it as the argument and it is now [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree). Analogously, a node is removed from a document when the [removing steps](https://dom.spec.whatwg.org/#concept-node-remove-ext) are invoked with it as the argument and it is now no longer [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree).

A node becomes connected when the [insertion steps](https://dom.spec.whatwg.org/#concept-node-insert-ext) are invoked with it as the argument and it is now [connected](https://dom.spec.whatwg.org/#connected). Analogously, a node becomes disconnected when the [removing steps](https://dom.spec.whatwg.org/#concept-node-remove-ext) are invoked with it as the argument and it is now no longer [connected](https://dom.spec.whatwg.org/#connected).

A node is browsing-context connected when it is [connected](https://dom.spec.whatwg.org/#connected) and its [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root)'s [browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc) is non-null. A node becomes browsing-context connected when the [insertion steps](https://dom.spec.whatwg.org/#concept-node-insert-ext) are invoked with it as the argument and it is now [browsing-context connected](https://html.spec.whatwg.org/multipage/infrastructure.html#browsing-context-connected). A node becomes browsing-context disconnected either when the [removing steps](https://dom.spec.whatwg.org/#concept-node-remove-ext) are invoked with it as the argument and it is now no longer [browsing-context connected](https://html.spec.whatwg.org/multipage/infrastructure.html#browsing-context-connected), or when its [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root)'s [browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc) becomes null.

#### **2.1.5** Scripting

The construction "a `Foo` object", where `Foo` is actually an interface, is sometimes used instead of the more accurate "an object implementing the interface `Foo`".

An IDL attribute is said to be getting when its value is being retrieved (e.g. by author script), and is said to be setting when a new value is assigned to it.

If a DOM object is said to be live, then the attributes and methods on that object must operate on the actual underlying data, not a snapshot of the data.

#### **2.1.6** Plugins

The term plugin refers to an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) set of content handlers used by the user agent that can take part in the user agent's rendering of a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object, but that neither act as [child navigables](https://html.spec.whatwg.org/multipage/document-sequences.html#child-navigable) of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` nor introduce any `<a data-x-internal="node" href="https://dom.spec.whatwg.org/#interface-node">Node</a>` objects to the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s DOM.

Typically such content handlers are provided by third parties, though a user agent can also designate built-in content handlers as plugins.

A user agent must not consider the types `<a data-x-internal="text/plain" href="https://www.rfc-editor.org/rfc/rfc2046#section-4.1.3">text/plain</a>` and `<a data-x-internal="application/octet-stream" href="https://www.rfc-editor.org/rfc/rfc2046#section-4.5.1">application/octet-stream</a>` as having a registered [plugin](https://html.spec.whatwg.org/multipage/infrastructure.html#plugin).

One example of a plugin would be a PDF viewer that is instantiated in a [navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) when the user navigates to a PDF file. This would count as a plugin regardless of whether the party that implemented the PDF viewer component was the same as that which implemented the user agent itself. However, a PDF viewer application that launches separate from the user agent (as opposed to using the same interface) is not a plugin by this definition.

This specification does not define a mechanism for interacting with plugins, as it is expected to be user-agent- and platform-specific. Some UAs might opt to support a plugin mechanism such as the Netscape Plugin API; others might use remote content converters or have built-in support for certain types. Indeed, this specification doesn't require user agents to support plugins at all. [[NPAPI]](https://html.spec.whatwg.org/multipage/references.html#refsNPAPI)

Browsers should take extreme care when interacting with external content intended for [plugins](https://html.spec.whatwg.org/multipage/infrastructure.html#plugin). When third-party software is run with the same privileges as the user agent itself, vulnerabilities in the third-party software become as dangerous as those in the user agent.

(https://infra.spec.whatwg.org/#tracking-vector "There is a tracking vector here.")Since different users having different sets of [plugins](https://html.spec.whatwg.org/multipage/infrastructure.html#plugin) provides a tracking vector that increases the chances of users being uniquely identified, user agents are encouraged to support the exact same set of [plugins](https://html.spec.whatwg.org/multipage/infrastructure.html#plugin) for each user.

#### **2.1.7** Character encodings

A [character encoding](https://encoding.spec.whatwg.org/#encoding), or just *encoding* where that is not ambiguous, is a defined way to convert between byte streams and Unicode strings, as defined in Encoding. An [encoding](https://encoding.spec.whatwg.org/#encoding) has an [encoding name](https://encoding.spec.whatwg.org/#name) and one or more [encoding labels](https://encoding.spec.whatwg.org/#label), referred to as the encoding's *name* and *labels* in the Encoding standard. [[ENCODING]](https://html.spec.whatwg.org/multipage/references.html#refsENCODING)

#### **2.1.8** Conformance classes

This specification describes the conformance criteria for user agents (relevant to implementers) and documents (relevant to authors and authoring tool implementers).

Conforming documents are those that comply with all the conformance criteria for documents. For readability, some of these conformance requirements are phrased as conformance requirements on authors; such requirements are implicitly requirements on documents: by definition, all documents are assumed to have had an author. (In some cases, that author may itself be a user agent — such user agents are subject to additional rules, as explained below.)

For example, if a requirement states that "authors must not use the `foobar` element", it would imply that documents are not allowed to contain elements named `foobar`.

There is no implied relationship between document conformance requirements and implementation conformance requirements. User agents are not free to handle non-conformant documents as they please; the processing model described in this specification applies to implementations regardless of the conformity of the input documents.

User agents fall into several (overlapping) categories with different conformance requirements.

Web browsers and other interactive user agentsWeb browsers that support [the XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html#the-xhtml-syntax) must process elements and attributes from the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) found in XML documents as described in this specification, so that users can interact with them, unless the semantics of those elements have been overridden by other specifications.

A conforming web browser would, upon finding a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` element in an XML document, execute the script contained in that element. However, if the element is found within a transformation expressed in XSLT (assuming the user agent also supports XSLT), then the processor would instead treat the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` element as an opaque element that forms part of the transform.

Web browsers that support [the HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax) must process documents labeled with an [HTML MIME type](https://mimesniff.spec.whatwg.org/#html-mime-type) as described in this specification, so that users can interact with them.

User agents that support scripting must also be conforming implementations of the IDL fragments in this specification, as described in Web IDL. [[WEBIDL]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)

Unless explicitly stated, specifications that override the semantics of HTML elements do not override the requirements on DOM objects representing those elements. For example, the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` element in the example above would still implement the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#htmlscriptelement">HTMLScriptElement</a>` interface.

Non-interactive presentation user agentsUser agents that process HTML and XML documents purely to render non-interactive versions of them must comply to the same conformance criteria as web browsers, except that they are exempt from requirements regarding user interaction.

Typical examples of non-interactive presentation user agents are printers (static UAs) and overhead displays (dynamic UAs). It is expected that most static non-interactive presentation user agents will also opt to [lack scripting support](https://html.spec.whatwg.org/multipage/infrastructure.html#non-scripted).

A non-interactive but dynamic presentation UA would still execute scripts, allowing forms to be dynamically submitted, and so forth. However, since the concept of "focus" is irrelevant when the user cannot interact with the document, the UA would not need to support any of the focus-related DOM APIs.

Visual user agents that support the suggested default renderingUser agents, whether interactive or not, may be designated (possibly as a user option) as supporting the suggested default rendering defined by this specification.

This is not required. In particular, even user agents that do implement the suggested default rendering are encouraged to offer settings that override this default to improve the experience for the user, e.g. changing the color contrast, using different focus styles, or otherwise making the experience more accessible and usable to the user.

User agents that are designated as supporting the suggested default rendering must, while so designated, implement the rules [the Rendering section](https://html.spec.whatwg.org/multipage/rendering.html#rendering) defines as the behavior that user agents are *expected* to implement.

User agents with no scripting supportImplementations that do not support scripting (or which have their scripting features disabled entirely) are exempt from supporting the events and DOM interfaces mentioned in this specification. For the parts of this specification that are defined in terms of an events model or in terms of the DOM, such user agents must still act as if events and the DOM were supported.

Scripting can form an integral part of an application. Web browsers that do not support scripting, or that have scripting disabled, might be unable to fully convey the author's intent.

Conformance checkersConformance checkers must verify that a document conforms to the applicable conformance criteria described in this specification. Automated conformance checkers are exempt from detecting errors that require interpretation of the author's intent (for example, while a document is non-conforming if the content of a `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element">blockquote</a>` element is not a quote, conformance checkers running without the input of human judgement do not have to check that `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element">blockquote</a>` elements only contain quoted material).

Conformance checkers must check that the input document conforms when parsed without a [browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc) (meaning that no scripts are run, and that the parser's [scripting flag](https://html.spec.whatwg.org/multipage/parsing.html#scripting-flag) is disabled), and should also check that the input document conforms when parsed with a [browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc) in which scripts execute, and that the scripts never cause non-conforming states to occur other than transiently during script execution itself. (This is only a "SHOULD" and not a "MUST" requirement because it has been proven to be impossible. [[COMPUTABLE]](https://html.spec.whatwg.org/multipage/references.html#refsCOMPUTABLE))

The term "HTML validator" can be used to refer to a conformance checker that itself conforms to the applicable requirements of this specification.

XML DTDs cannot express all the conformance requirements of this specification. Therefore, a validating XML processor and a DTD cannot constitute a conformance checker. Also, since neither of the two authoring formats defined in this specification are applications of SGML, a validating SGML system cannot constitute a conformance checker either.

To put it another way, there are three types of conformance criteria:

1. Criteria that can be expressed in a DTD.
2. Criteria that cannot be expressed by a DTD, but can still be checked by a machine.
3. Criteria that can only be checked by a human.

A conformance checker must check for the first two. A simple DTD-based validator only checks for the first class of errors and is therefore not a conforming conformance checker according to this specification.

Data mining toolsApplications and tools that process HTML and XML documents for reasons other than to either render the documents or check them for conformance should act in accordance with the semantics of the documents that they process.

A tool that generates [document outlines](https://html.spec.whatwg.org/multipage/sections.html#outline) but increases the nesting level for each paragraph and does not increase the nesting level for [headings](https://html.spec.whatwg.org/multipage/sections.html#concept-heading) would not be conforming.

Authoring tools and markup generatorsAuthoring tools and markup generators must generate [conforming documents](https://html.spec.whatwg.org/multipage/infrastructure.html#conforming-documents). Conformance criteria that apply to authors also apply to authoring tools, where appropriate.

Authoring tools are exempt from the strict requirements of using elements only for their specified purpose, but only to the extent that authoring tools are not yet able to determine author intent. However, authoring tools must not automatically misuse elements or encourage their users to do so.

For example, it is not conforming to use an `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-address-element">address</a>` element for arbitrary contact information; that element can only be used for marking up contact information for its nearest `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-article-element">article</a>` or `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` element ancestor. However, since an authoring tool is likely unable to determine the difference, an authoring tool is exempt from that requirement. This does not mean, though, that authoring tools can use `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-address-element">address</a>` elements for any block of italics text (for instance); it just means that the authoring tool doesn't have to verify that when the user uses a tool for inserting contact information for an `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-article-element">article</a>` element, that the user really is doing that and not inserting something else instead.

In terms of conformance checking, an editor has to output documents that conform to the same extent that a conformance checker will verify.

When an authoring tool is used to edit a non-conforming document, it may preserve the conformance errors in sections of the document that were not edited during the editing session (i.e. an editing tool is allowed to round-trip erroneous content). However, an authoring tool must not claim that the output is conformant if errors have been so preserved.

Authoring tools are expected to come in two broad varieties: tools that work from structure or semantic data, and tools that work on a What-You-See-Is-What-You-Get media-specific editing basis (WYSIWYG).

The former is the preferred mechanism for tools that author HTML, since the structure in the source information can be used to make informed choices regarding which HTML elements and attributes are most appropriate.

However, WYSIWYG tools are legitimate. WYSIWYG tools should use elements they know are appropriate, and should not use elements that they do not know to be appropriate. This might in certain extreme cases mean limiting the use of flow elements to just a few elements, like `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>`, `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element">b</a>`, `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`, and `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>` and making liberal use of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` attribute.

All authoring tools, whether WYSIWYG or not, should make a best effort attempt at enabling users to create well-structured, semantically rich, media-independent content.

For compatibility with existing content and prior specifications, this specification describes two authoring formats: one based on [XML](https://html.spec.whatwg.org/multipage/xhtml.html#the-xhtml-syntax), and one using a [custom format](https://html.spec.whatwg.org/multipage/syntax.html#writing) inspired by SGML (referred to as [the HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax)). Implementations must support at least one of these two formats, although supporting both is encouraged.

Some conformance requirements are phrased as requirements on elements, attributes, methods or objects. Such requirements fall into two categories: those describing content model restrictions, and those describing implementation behavior. Those in the former category are requirements on documents and authoring tools. Those in the second category are requirements on user agents. Similarly, some conformance requirements are phrased as requirements on authors; such requirements are to be interpreted as conformance requirements on the documents that authors produce. (In other words, this specification does not distinguish between conformance criteria on authors and conformance criteria on documents.)

#### **2.1.9** Dependencies

This specification relies on several other underlying specifications.

InfraThe following terms are defined in Infra: [[INFRA]](https://html.spec.whatwg.org/multipage/references.html#refsINFRA)

* The general iteration terms [while](https://infra.spec.whatwg.org/#iteration-while), [continue](https://infra.spec.whatwg.org/#iteration-continue), and [break](https://infra.spec.whatwg.org/#iteration-break).
* [Assert](https://infra.spec.whatwg.org/#assert)
* [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined)
* [tracking vector](https://infra.spec.whatwg.org/#tracking-vector)
* [code point](https://infra.spec.whatwg.org/#code-point) and its synonym [character](https://infra.spec.whatwg.org/#code-point)
* [surrogate](https://infra.spec.whatwg.org/#surrogate)
* [scalar value](https://infra.spec.whatwg.org/#scalar-value)
* [tuple](https://infra.spec.whatwg.org/#tuple)
* [noncharacter](https://infra.spec.whatwg.org/#noncharacter)
* [string](https://infra.spec.whatwg.org/#string), [code unit](https://infra.spec.whatwg.org/#code-unit), [code unit prefix](https://infra.spec.whatwg.org/#code-unit-prefix), [code unit less than](https://infra.spec.whatwg.org/#code-unit-less-than), [starts with](https://infra.spec.whatwg.org/#string-starts-with), [ends with](https://infra.spec.whatwg.org/#string-ends-with), [length](https://infra.spec.whatwg.org/#string-length), and [code point length](https://infra.spec.whatwg.org/#string-code-point-length)
* The string equality operations [is](https://infra.spec.whatwg.org/#string-is) and [identical to](https://infra.spec.whatwg.org/#string-is)
* [scalar value string](https://infra.spec.whatwg.org/#scalar-value-string)
* [convert](https://infra.spec.whatwg.org/#javascript-string-convert)
* [ASCII string](https://infra.spec.whatwg.org/#ascii-string)
* [ASCII tab or newline](https://infra.spec.whatwg.org/#ascii-tab-or-newline)
* [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace)
* [control](https://infra.spec.whatwg.org/#control)
* [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit)
* [ASCII upper hex digit](https://infra.spec.whatwg.org/#ascii-upper-hex-digit)
* [ASCII lower hex digit](https://infra.spec.whatwg.org/#ascii-lower-hex-digit)
* [ASCII hex digit](https://infra.spec.whatwg.org/#ascii-hex-digit)
* [ASCII upper alpha](https://infra.spec.whatwg.org/#ascii-upper-alpha)
* [ASCII lower alpha](https://infra.spec.whatwg.org/#ascii-lower-alpha)
* [ASCII alpha](https://infra.spec.whatwg.org/#ascii-alpha)
* [ASCII alphanumeric](https://infra.spec.whatwg.org/#ascii-alphanumeric)
* [isomorphic decode](https://infra.spec.whatwg.org/#isomorphic-decode)
* [isomorphic encode](https://infra.spec.whatwg.org/#isomorphic-encode)
* [ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase)
* [ASCII uppercase](https://infra.spec.whatwg.org/#ascii-uppercase)
* [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive)
* [strip newlines](https://infra.spec.whatwg.org/#strip-newlines)
* [normalize newlines](https://infra.spec.whatwg.org/#normalize-newlines)
* [strip leading and trailing ASCII whitespace](https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace)
* [strip and collapse ASCII whitespace](https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace)
* [split a string on ASCII whitespace](https://infra.spec.whatwg.org/#split-on-ascii-whitespace)
* [split a string on commas](https://infra.spec.whatwg.org/#split-on-commas)
* [collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) and its associated [position variable](https://infra.spec.whatwg.org/#string-position-variable)
* [skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace)
* The [ordered map](https://infra.spec.whatwg.org/#ordered-map) data structure and the associated definitions for [key](https://infra.spec.whatwg.org/#map-key), [value](https://infra.spec.whatwg.org/#map-value), [empty](https://infra.spec.whatwg.org/#map-is-empty), [entry](https://infra.spec.whatwg.org/#map-entry), [exists](https://infra.spec.whatwg.org/#map-exists), [getting the value of an entry](https://infra.spec.whatwg.org/#map-get), [setting the value of an entry](https://infra.spec.whatwg.org/#map-set), [removing an entry](https://infra.spec.whatwg.org/#map-remove), [clear](https://infra.spec.whatwg.org/#map-clear), [getting the keys](https://infra.spec.whatwg.org/#map-getting-the-keys), [getting the values](https://infra.spec.whatwg.org/#map-getting-the-values), [sorting in descending order](https://infra.spec.whatwg.org/#map-sort-in-descending-order), [size](https://infra.spec.whatwg.org/#map-size), and [iterate](https://infra.spec.whatwg.org/#map-iterate)
* The [list](https://infra.spec.whatwg.org/#list) data structure and the associated definitions for [append](https://infra.spec.whatwg.org/#list-append), [extend](https://infra.spec.whatwg.org/#list-extend), [prepend](https://infra.spec.whatwg.org/#list-prepend), [replace](https://infra.spec.whatwg.org/#list-replace), [remove](https://infra.spec.whatwg.org/#list-remove), [empty](https://infra.spec.whatwg.org/#list-empty), [contains](https://infra.spec.whatwg.org/#list-contain), [size](https://infra.spec.whatwg.org/#list-size), [indices](https://infra.spec.whatwg.org/#list-get-the-indices), [is empty](https://infra.spec.whatwg.org/#list-is-empty), [item](https://infra.spec.whatwg.org/#list-item), [iterate](https://infra.spec.whatwg.org/#list-iterate), and [clone](https://infra.spec.whatwg.org/#list-clone) [sort in ascending order](https://infra.spec.whatwg.org/#list-sort-in-ascending-order) [sort in descending order](https://infra.spec.whatwg.org/#list-sort-in-descending-order)
* The [stack](https://infra.spec.whatwg.org/#stack) data structure and the associated definitions for [push](https://infra.spec.whatwg.org/#stack-push) and [pop](https://infra.spec.whatwg.org/#stack-pop)
* The [queue](https://infra.spec.whatwg.org/#queue) data structure and the associated definitions for [enqueue](https://infra.spec.whatwg.org/#queue-enqueue) and [dequeue](https://infra.spec.whatwg.org/#queue-dequeue)
* The [ordered set](https://infra.spec.whatwg.org/#ordered-set) data structure and the associated definition for [append](https://infra.spec.whatwg.org/#set-append) and [union](https://infra.spec.whatwg.org/#set-union)
* The [struct](https://infra.spec.whatwg.org/#struct) specification type and the associated definition for [item](https://infra.spec.whatwg.org/#struct-item)
* The [byte sequence](https://infra.spec.whatwg.org/#byte-sequence) data structure
* The [forgiving-base64 encode](https://infra.spec.whatwg.org/#forgiving-base64-encode) and [forgiving-base64 decode](https://infra.spec.whatwg.org/#forgiving-base64-decode) algorithms
* [exclusive range](https://infra.spec.whatwg.org/#the-exclusive-range)
* [parse a JSON string to an Infra value](https://infra.spec.whatwg.org/#parse-a-json-string-to-an-infra-value)
* [HTML namespace](https://infra.spec.whatwg.org/#html-namespace)
* [MathML namespace](https://infra.spec.whatwg.org/#mathml-namespace)
* [SVG namespace](https://infra.spec.whatwg.org/#svg-namespace)
* [XLink namespace](https://infra.spec.whatwg.org/#xlink-namespace)
* [XML namespace](https://infra.spec.whatwg.org/#xml-namespace)
* [XMLNS namespace](https://infra.spec.whatwg.org/#xmlns-namespace)

Unicode and EncodingThe Unicode character set is used to represent textual data, and Encoding defines requirements around [character encodings](https://encoding.spec.whatwg.org/#encoding). [[UNICODE]](https://html.spec.whatwg.org/multipage/references.html#refsUNICODE)

This specification [introduces terminology](https://html.spec.whatwg.org/multipage/infrastructure.html#encoding-terminology) based on the terms defined in those specifications, as described earlier.

The following terms are used as defined in Encoding: [[ENCODING]](https://html.spec.whatwg.org/multipage/references.html#refsENCODING)

* [Getting an encoding](https://encoding.spec.whatwg.org/#concept-encoding-get)
* [Get an output encoding](https://encoding.spec.whatwg.org/#get-an-output-encoding)
* The generic [decode](https://encoding.spec.whatwg.org/#decode) algorithm which takes a byte stream and an encoding and returns a character stream
* The [UTF-8 decode](https://encoding.spec.whatwg.org/#utf-8-decode) algorithm which takes a byte stream and returns a character stream, additionally stripping one leading UTF-8 Byte Order Mark (BOM), if any
* The [UTF-8 decode without BOM](https://encoding.spec.whatwg.org/#utf-8-decode-without-bom) algorithm which is identical to [UTF-8 decode](https://encoding.spec.whatwg.org/#utf-8-decode) except that it does not strip one leading UTF-8 Byte Order Mark (BOM)
* The [encode](https://encoding.spec.whatwg.org/#encode) algorithm which takes a character stream and an encoding and returns a byte stream
* The [UTF-8 encode](https://encoding.spec.whatwg.org/#utf-8-encode) algorithm which takes a character stream and returns a byte stream
* The [BOM sniff](https://encoding.spec.whatwg.org/#bom-sniff) algorithm which takes a byte stream and returns an encoding or null.

XML and related specificationsImplementations that support [the XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html#the-xhtml-syntax) for HTML must support some version of XML, as well as its corresponding namespaces specification, because that syntax uses an XML serialization with namespaces. [[XML]](https://html.spec.whatwg.org/multipage/references.html#refsXML) [[XMLNS]](https://html.spec.whatwg.org/multipage/references.html#refsXMLNS)

Data mining tools and other user agents that perform operations on content without running scripts, evaluating CSS or XPath expressions, or otherwise exposing the resulting DOM to arbitrary content, may "support namespaces" by just asserting that their DOM node analogues are in certain namespaces, without actually exposing the namespace strings.

In [the HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax), namespace prefixes and namespace declarations do not have the same effect as in XML. For instance, the colon has no special meaning in HTML element names.

---

The attribute with the name [`space`](https://www.w3.org/TR/xml/#sec-white-space) in the [XML namespace](https://infra.spec.whatwg.org/#xml-namespace) is defined by Extensible Markup Language (XML). [[XML]](https://html.spec.whatwg.org/multipage/references.html#refsXML)

The [`Name`](https://www.w3.org/TR/xml/#NT-Name) production is defined in XML. [[XML]](https://html.spec.whatwg.org/multipage/references.html#refsXML)

This specification also references the [`<?xml-stylesheet?>`](https://www.w3.org/TR/xml-stylesheet/#the-xml-stylesheet-processing-instruction) processing instruction, defined in Associating Style Sheets with XML documents. [[XMLSSPI]](https://html.spec.whatwg.org/multipage/references.html#refsXMLSSPI)

This specification also non-normatively mentions the `XSLTProcessor` interface and its `transformToFragment()` and `transformToDocument()` methods. [[XSLTP]](https://html.spec.whatwg.org/multipage/references.html#refsXSLTP)

URLsThe following terms are defined in URL: [[URL]](https://html.spec.whatwg.org/multipage/references.html#refsURL)

* [host](https://url.spec.whatwg.org/#concept-host)
* [public suffix](https://url.spec.whatwg.org/#host-public-suffix)
* [domain](https://url.spec.whatwg.org/#concept-domain)
* [IP address](https://url.spec.whatwg.org/#ip-address)
* [URL](https://url.spec.whatwg.org/#concept-url)
* [Origin](https://url.spec.whatwg.org/#concept-url-origin) of URLs
* [Absolute URL](https://url.spec.whatwg.org/#syntax-url-absolute)
* [Relative URL](https://url.spec.whatwg.org/#syntax-url-relative)
* [registrable domain](https://url.spec.whatwg.org/#host-registrable-domain)
* The [URL parser](https://url.spec.whatwg.org/#concept-url-parser)
* The [basic URL parser](https://url.spec.whatwg.org/#concept-basic-url-parser) and its [url](https://url.spec.whatwg.org/#basic-url-parser-url) and [state override](https://url.spec.whatwg.org/#basic-url-parser-state-override) arguments, as well as these parser states:
  * [scheme start state](https://url.spec.whatwg.org/#scheme-start-state)
  * [host state](https://url.spec.whatwg.org/#host-state)
  * [hostname state](https://url.spec.whatwg.org/#hostname-state)
  * [port state](https://url.spec.whatwg.org/#port-state)
  * [path start state](https://url.spec.whatwg.org/#path-start-state)
  * [query state](https://url.spec.whatwg.org/#query-state)
  * [fragment state](https://url.spec.whatwg.org/#fragment-state)
* [URL record](https://url.spec.whatwg.org/#concept-url), as well as its individual components:
  * [scheme](https://url.spec.whatwg.org/#concept-url-scheme)
  * [username](https://url.spec.whatwg.org/#concept-url-username)
  * [password](https://url.spec.whatwg.org/#concept-url-password)
  * [host](https://url.spec.whatwg.org/#concept-url-host)
  * [port](https://url.spec.whatwg.org/#concept-url-port)
  * [path](https://url.spec.whatwg.org/#concept-url-path)
  * [query](https://url.spec.whatwg.org/#concept-url-query)
  * [fragment](https://url.spec.whatwg.org/#concept-url-fragment)
  * [blob URL entry](https://url.spec.whatwg.org/#concept-url-blob-entry)
* [valid URL string](https://url.spec.whatwg.org/#valid-url-string)
* The [cannot have a username/password/port](https://url.spec.whatwg.org/#cannot-have-a-username-password-port) concept
* The [opaque path](https://url.spec.whatwg.org/#url-opaque-path) concept
* [URL serializer](https://url.spec.whatwg.org/#concept-url-serializer) and its [exclude fragment](https://url.spec.whatwg.org/#url-serializer-exclude-fragment) argument
* [URL path serializer](https://url.spec.whatwg.org/#url-path-serializer)
* The [host parser](https://url.spec.whatwg.org/#concept-host-parser)
* The [host serializer](https://url.spec.whatwg.org/#concept-host-serializer)
* [Host equals](https://url.spec.whatwg.org/#concept-host-equals)
* [URL equals](https://url.spec.whatwg.org/#concept-url-equals) and its [exclude fragments](https://url.spec.whatwg.org/#url-equals-exclude-fragments) argument
* [serialize an integer](https://url.spec.whatwg.org/#serialize-an-integer)
* [Default encode set](https://url.spec.whatwg.org/#default-encode-set)
* [component percent-encode set](https://url.spec.whatwg.org/#component-percent-encode-set)
* [UTF-8 percent-encode](https://url.spec.whatwg.org/#string-utf-8-percent-encode)
* [percent-decode](https://url.spec.whatwg.org/#string-percent-decode)
* [set the username](https://url.spec.whatwg.org/#set-the-username)
* [set the password](https://url.spec.whatwg.org/#set-the-password)
* The [`application/x-www-form-urlencoded`](https://url.spec.whatwg.org/#concept-urlencoded) format
* The [`application/x-www-form-urlencoded` serializer](https://url.spec.whatwg.org/#concept-urlencoded-serializer)
* [is special](https://url.spec.whatwg.org/#is-special)

A number of schemes and protocols are referenced by this specification also:

* The [`about:`](https://www.rfc-editor.org/rfc/rfc6694#section-2) scheme [[ABOUT]](https://html.spec.whatwg.org/multipage/references.html#refsABOUT)
* The [`blob:`](https://w3c.github.io/FileAPI/#DefinitionOfScheme) scheme [[FILEAPI]](https://html.spec.whatwg.org/multipage/references.html#refsFILEAPI)
* The [`data:`](https://www.rfc-editor.org/rfc/rfc2397#section-2) scheme [[RFC2397]](https://html.spec.whatwg.org/multipage/references.html#refsRFC2397)
* The [`http:`](https://httpwg.org/specs/rfc7230.html#http.uri) scheme [[HTTP]](https://html.spec.whatwg.org/multipage/references.html#refsHTTP)
* The [`https:`](https://httpwg.org/specs/rfc7230.html#https.uri) scheme [[HTTP]](https://html.spec.whatwg.org/multipage/references.html#refsHTTP)
* The [`mailto:`](https://www.rfc-editor.org/rfc/rfc6068#section-2) scheme [[MAILTO]](https://html.spec.whatwg.org/multipage/references.html#refsMAILTO)
* The [`sms:`](https://www.rfc-editor.org/rfc/rfc5724#section-2) scheme [[SMS]](https://html.spec.whatwg.org/multipage/references.html#refsSMS)
* The [`urn:`](https://www.rfc-editor.org/rfc/rfc2141#section-2) scheme [[URN]](https://html.spec.whatwg.org/multipage/references.html#refsURN)

[Media fragment syntax](https://www.w3.org/TR/media-frags/#media-fragment-syntax) is defined in Media Fragments URI. [[MEDIAFRAG]](https://html.spec.whatwg.org/multipage/references.html#refsMEDIAFRAG)

HTTP and related specificationsThe following terms are defined in the HTTP specifications: [[HTTP]](https://html.spec.whatwg.org/multipage/references.html#refsHTTP)

* `[`Accept`](https://httpwg.org/specs/rfc7231.html#header.accept)` header
* `[`Accept-Language`](https://httpwg.org/specs/rfc7231.html#header.accept-language)` header
* `[`Cache-Control`](https://httpwg.org/specs/rfc7234.html#header.cache-control)` header
* `[`Content-Disposition`](https://httpwg.org/specs/rfc6266.html)` header
* `[`Content-Language`](https://httpwg.org/specs/rfc7231.html#header.content-language)` header
* `[`Content-Range`](https://httpwg.org/specs/rfc7233.html#header.content-range)` header
* `[`Last-Modified`](https://httpwg.org/specs/rfc7232.html#header.last-modified)` header
* `[`Range`](https://httpwg.org/specs/rfc7233.html#header.range)` header
* `[`Referer`](https://httpwg.org/specs/rfc7231.html#header.referer)` header

The following terms are defined in HTTP State Management Mechanism: [[COOKIES]](https://html.spec.whatwg.org/multipage/references.html#refsCOOKIES)

* [cookie-string](https://httpwg.org/specs/rfc6265.html#sane-cookie-syntax)
* [receives a set-cookie-string](https://httpwg.org/specs/rfc6265.html#storage-model)
* `[`Cookie`](https://httpwg.org/specs/rfc6265.html#cookie)` header

The following term is defined in Web Linking: [[WEBLINK]](https://html.spec.whatwg.org/multipage/references.html#refsWEBLINK)

* `[`Link`](https://httpwg.org/specs/rfc8288.html#header)` header
* [Parsing a ``Link`` field value](https://httpwg.org/specs/rfc8288.html#parse-fv)

The following terms are defined in Structured Field Values for HTTP: [[STRUCTURED-FIELDS]](https://html.spec.whatwg.org/multipage/references.html#refsSTRUCTURED-FIELDS)

* [structured header](https://httpwg.org/specs/rfc8941.html)
* [boolean](https://httpwg.org/specs/rfc8941.html#boolean)
* [token](https://httpwg.org/specs/rfc8941.html#token)
* [parameters](https://httpwg.org/specs/rfc8941.html#param)

The following terms are defined in MIME Sniffing: [[MIMESNIFF]](https://html.spec.whatwg.org/multipage/references.html#refsMIMESNIFF)

* [MIME type](https://mimesniff.spec.whatwg.org/#mime-type)
* [MIME type essence](https://mimesniff.spec.whatwg.org/#mime-type-essence)
* [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type)
* [valid MIME type string with no parameters](https://mimesniff.spec.whatwg.org/#valid-mime-type-with-no-parameters)
* [HTML MIME type](https://mimesniff.spec.whatwg.org/#html-mime-type)
* [JavaScript MIME type](https://mimesniff.spec.whatwg.org/#javascript-mime-type) and [JavaScript MIME type essence match](https://mimesniff.spec.whatwg.org/#javascript-mime-type-essence-match)
* [JSON MIME type](https://mimesniff.spec.whatwg.org/#json-mime-type)
* [XML MIME type](https://mimesniff.spec.whatwg.org/#xml-mime-type)
* [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type)
* [audio or video MIME type](https://mimesniff.spec.whatwg.org/#audio-or-video-mime-type)
* [font MIME type](https://mimesniff.spec.whatwg.org/#font-mime-type)
* [parse a MIME type](https://mimesniff.spec.whatwg.org/#parse-a-mime-type)
* [is MIME type supported by the user agent?](https://mimesniff.spec.whatwg.org/#supported-by-the-user-agent)

FetchThe following terms are defined in Fetch: [[FETCH]](https://html.spec.whatwg.org/multipage/references.html#refsFETCH)

* [ABNF](https://fetch.spec.whatwg.org/#abnf)
* `about:blank`
* An [HTTP(S) scheme](https://fetch.spec.whatwg.org/#http-scheme)
* A URL which [is local](https://fetch.spec.whatwg.org/#is-local)
* A [local scheme](https://fetch.spec.whatwg.org/#local-scheme)
* A [fetch scheme](https://fetch.spec.whatwg.org/#fetch-scheme)
* [CORS protocol](https://fetch.spec.whatwg.org/#http-cors-protocol)
* [default ``User-Agent`` value](https://fetch.spec.whatwg.org/#default-user-agent-value)
* [extract a MIME type](https://fetch.spec.whatwg.org/#concept-header-extract-mime-type)
* [legacy extract an encoding](https://fetch.spec.whatwg.org/#legacy-extract-an-encoding)
* [fetch](https://fetch.spec.whatwg.org/#concept-fetch)
* [fetch controller](https://fetch.spec.whatwg.org/#fetch-controller)
* [process the next manual redirect](https://fetch.spec.whatwg.org/#fetch-controller-process-the-next-manual-redirect)
* [ok status](https://fetch.spec.whatwg.org/#ok-status)
* [navigation request](https://fetch.spec.whatwg.org/#navigation-request)
* [network error](https://fetch.spec.whatwg.org/#concept-network-error)
* [aborted network error](https://fetch.spec.whatwg.org/#concept-aborted-network-error)
* `[`Origin`](https://fetch.spec.whatwg.org/#http-origin)` header
* `[`Cross-Origin-Resource-Policy`](https://fetch.spec.whatwg.org/#http-cross-origin-resource-policy)` header
* [getting a structured field value](https://fetch.spec.whatwg.org/#concept-header-list-get-structured-header)
* [header list](https://fetch.spec.whatwg.org/#concept-header-list)
* [set](https://fetch.spec.whatwg.org/#concept-header-list-set)
* [get, decode, and split](https://fetch.spec.whatwg.org/#concept-header-list-get-decode-split)
* [abort](https://fetch.spec.whatwg.org/#fetch-controller-abort)
* [cross-origin resource policy check](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-check)
* the [`RequestCredentials`](https://fetch.spec.whatwg.org/#requestcredentials) enumeration
* the [`RequestDestination`](https://fetch.spec.whatwg.org/#requestdestination) enumeration
* the [`fetch()`](https://fetch.spec.whatwg.org/#dom-global-fetch) method
* [report timing](https://fetch.spec.whatwg.org/#finalize-and-report-timing)
* [serialize a response URL for reporting](https://fetch.spec.whatwg.org/#serialize-a-response-url-for-reporting)
* [safely extracting a body](https://fetch.spec.whatwg.org/#bodyinit-safely-extract)
* [incrementally reading a body](https://fetch.spec.whatwg.org/#body-incrementally-read)
* [processResponseConsumeBody](https://fetch.spec.whatwg.org/#process-response-end-of-body)
* [processResponseEndOfBody](https://fetch.spec.whatwg.org/#fetch-processresponseendofbody)
* [processResponse](https://fetch.spec.whatwg.org/#process-response)
* [useParallelQueue](https://fetch.spec.whatwg.org/#fetch-useparallelqueue)
* [processEarlyHintsResponse](https://fetch.spec.whatwg.org/#fetch-processearlyhintsresponse)
* [connection pool](https://fetch.spec.whatwg.org/#concept-connection-pool)
* [obtain a connection](https://fetch.spec.whatwg.org/#concept-connection-obtain)
* [determine the network partition key](https://fetch.spec.whatwg.org/#determine-the-network-partition-key)
* [extract full timing info](https://fetch.spec.whatwg.org/#extract-full-timing-info)
* [as a body](https://fetch.spec.whatwg.org/#byte-sequence-as-a-body)
* [response body info](https://fetch.spec.whatwg.org/#response-body-info)
* [resolve an origin](https://fetch.spec.whatwg.org/#resolve-an-origin)
* [response](https://fetch.spec.whatwg.org/#concept-response) and its associated:
  * [type](https://fetch.spec.whatwg.org/#concept-response-type)
  * [URL](https://fetch.spec.whatwg.org/#concept-response-url)
  * [URL list](https://fetch.spec.whatwg.org/#concept-response-url-list)
  * [status](https://fetch.spec.whatwg.org/#concept-response-status)
  * [header list](https://fetch.spec.whatwg.org/#concept-response-header-list)
  * [body](https://fetch.spec.whatwg.org/#concept-response-body)
  * [body info](https://fetch.spec.whatwg.org/#concept-response-body-info)
  * [internal response](https://fetch.spec.whatwg.org/#concept-internal-response)
  * [location URL](https://fetch.spec.whatwg.org/#concept-response-location-url)
  * [timing info](https://fetch.spec.whatwg.org/#concept-response-timing-info)
  * [service worker timing info](https://fetch.spec.whatwg.org/#response-service-worker-timing-info)
  * [has-cross-origin-redirects](https://fetch.spec.whatwg.org/#response-has-cross-origin-redirects)
  * [timing allow passed](https://fetch.spec.whatwg.org/#concept-response-timing-allow-passed)
  * [extract content-range values](https://wicg.github.io/background-fetch/#extract-content-range-values)
* [request](https://fetch.spec.whatwg.org/#concept-request) and its associated:
  * [URL](https://fetch.spec.whatwg.org/#concept-request-url)
  * [method](https://fetch.spec.whatwg.org/#concept-request-method)
  * [header list](https://fetch.spec.whatwg.org/#concept-request-header-list)
  * [body](https://fetch.spec.whatwg.org/#concept-request-body)
  * [client](https://fetch.spec.whatwg.org/#concept-request-client)
  * [URL list](https://fetch.spec.whatwg.org/#concept-request-url-list)
  * [current URL](https://fetch.spec.whatwg.org/#concept-request-current-url)
  * [reserved client](https://fetch.spec.whatwg.org/#concept-request-reserved-client)
  * [replaces client id](https://fetch.spec.whatwg.org/#concept-request-replaces-client-id)
  * [initiator](https://fetch.spec.whatwg.org/#concept-request-initiator)
  * [destination](https://fetch.spec.whatwg.org/#concept-request-destination)
  * [potential destination](https://fetch.spec.whatwg.org/#concept-potential-destination)
  * [translating](https://fetch.spec.whatwg.org/#concept-potential-destination-translate) a [potential destination](https://fetch.spec.whatwg.org/#concept-potential-destination)
  * [script-like](https://fetch.spec.whatwg.org/#request-destination-script-like) [destinations](https://fetch.spec.whatwg.org/#concept-request-destination)
  * [priority](https://fetch.spec.whatwg.org/#request-priority)
  * [origin](https://fetch.spec.whatwg.org/#concept-request-origin)
  * [referrer](https://fetch.spec.whatwg.org/#concept-request-referrer)
  * [synchronous flag](https://fetch.spec.whatwg.org/#synchronous-flag)
  * [mode](https://fetch.spec.whatwg.org/#concept-request-mode)
  * [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode)
  * [use-URL-credentials flag](https://fetch.spec.whatwg.org/#concept-request-use-url-credentials-flag)
  * [unsafe-request flag](https://fetch.spec.whatwg.org/#unsafe-request-flag)
  * [cache mode](https://fetch.spec.whatwg.org/#concept-request-cache-mode)
  * [redirect count](https://fetch.spec.whatwg.org/#concept-request-redirect-count)
  * [redirect mode](https://fetch.spec.whatwg.org/#concept-request-redirect-mode)
  * [policy container](https://fetch.spec.whatwg.org/#concept-request-policy-container)
  * [referrer policy](https://fetch.spec.whatwg.org/#concept-request-referrer-policy)
  * [cryptographic nonce metadata](https://fetch.spec.whatwg.org/#concept-request-nonce-metadata)
  * [integrity metadata](https://fetch.spec.whatwg.org/#concept-request-integrity-metadata)
  * [parser metadata](https://fetch.spec.whatwg.org/#concept-request-parser-metadata)
  * [reload-navigation flag](https://fetch.spec.whatwg.org/#concept-request-reload-navigation-flag)
  * [history-navigation flag](https://fetch.spec.whatwg.org/#concept-request-history-navigation-flag)
  * [user-activation](https://fetch.spec.whatwg.org/#request-user-activation)
  * [render-blocking](https://fetch.spec.whatwg.org/#request-render-blocking)
  * [initiator type](https://fetch.spec.whatwg.org/#request-initiator-type)
  * [add a range header](https://fetch.spec.whatwg.org/#concept-request-add-range-header)
* [fetch timing info](https://fetch.spec.whatwg.org/#fetch-timing-info) and its associated:
  * [start time](https://fetch.spec.whatwg.org/#fetch-timing-info-start-time)
  * [end time](https://fetch.spec.whatwg.org/#fetch-timing-info-end-time)

The following terms are defined in Referrer Policy: [[REFERRERPOLICY]](https://html.spec.whatwg.org/multipage/references.html#refsREFERRERPOLICY)

* [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy)
* The `[`Referrer-Policy`](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-header-dfn)` HTTP header
* The [parse a referrer policy from a ``Referrer-Policy`` header](https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header) algorithm
* The "[`no-referrer`](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-no-referrer)", "[`no-referrer-when-downgrade`](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-no-referrer-when-downgrade)", "[`origin-when-cross-origin`](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-origin-when-cross-origin)", and "[`unsafe-url`](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-unsafe-url)" referrer policies
* The [default referrer policy](https://w3c.github.io/webappsec-referrer-policy/#default-referrer-policy)

The following terms are defined in Mixed Content: [[MIX]](https://html.spec.whatwg.org/multipage/references.html#refsMIX)

* [*a priori* authenticated URL](https://w3c.github.io/webappsec-mixed-content/#a-priori-authenticated-url)

The following terms are defined in Subresource Integrity: [[SRI]](https://html.spec.whatwg.org/multipage/references.html#refsSRI)

* [parse integrity metadata](https://w3c.github.io/webappsec-subresource-integrity/#parse-metadata)
* [the requirements of the integrity attribute](https://w3c.github.io/webappsec-subresource-integrity/#the-integrity-attribute)
* [get the strongest metadata from set](https://w3c.github.io/webappsec-subresource-integrity/#get-the-strongest-metadata)

Paint TimingThe following terms are defined in Paint Timing: [[PAINTTIMING]](https://html.spec.whatwg.org/multipage/references.html#refsPAINTTIMING)

* [mark paint timing](https://w3c.github.io/paint-timing/#mark-paint-timing)

Navigation TimingThe following terms are defined in Navigation Timing: [[NAVIGATIONTIMING]](https://html.spec.whatwg.org/multipage/references.html#refsNAVIGATIONTIMING)

* [create the navigation timing entry](https://w3c.github.io/navigation-timing/#dfn-create-the-navigation-timing-entry)
* [queue the navigation timing entry](https://w3c.github.io/navigation-timing/#dfn-queue-the-navigation-timing-entry)
* [`NavigationTimingType`](https://w3c.github.io/navigation-timing/#dom-navigationtimingtype) and its "[`navigate`](https://w3c.github.io/navigation-timing/#dom-navigationtimingtype-navigate)", "[`reload`](https://w3c.github.io/navigation-timing/#dom-navigationtimingtype-reload)", and "[`back_forward`](https://w3c.github.io/navigation-timing/#dom-navigationtimingtype-back_forward)" values.

Resource TimingThe following terms are defined in Resource Timing: [[RESOURCETIMING]](https://html.spec.whatwg.org/multipage/references.html#refsRESOURCETIMING)

* [Mark resource timing](https://w3c.github.io/resource-timing/#dfn-mark-resource-timing)

Performance TimelineThe following terms are defined in Performance Timeline: [[PERFORMANCETIMELINE]](https://html.spec.whatwg.org/multipage/references.html#refsPERFORMANCETIMELINE)

* [`PerformanceEntry`](https://w3c.github.io/performance-timeline/#dom-performanceentry) and its [`name`](https://w3c.github.io/performance-timeline/#dom-performanceentry-name), [`entryType`](https://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype), [`startTime`](https://w3c.github.io/performance-timeline/#dom-performanceentry-starttime), and [`duration`](https://w3c.github.io/performance-timeline/#dom-performanceentry-duration) attributes.
* [Queue a performance entry](https://w3c.github.io/performance-timeline/#queue-a-performanceentry)

Long Animation FramesThe following terms are defined in Long Animation Frames: [[LONGANIMATIONFRAMES]](https://html.spec.whatwg.org/multipage/references.html#refsLONGANIMATIONFRAMES)

* [record task start time](https://w3c.github.io/long-animation-frames/#record-task-start-time)
* [record task end time](https://w3c.github.io/long-animation-frames/#record-task-end-time)
* [record rendering time](https://w3c.github.io/long-animation-frames/#record-rendering-time)
* [record classic script creation time](https://w3c.github.io/long-animation-frames/#record-classic-script-creation-time)
* [record classic script execution start time](https://w3c.github.io/long-animation-frames/#record-classic-script-execution-start-time)
* [record module script execution start time](https://w3c.github.io/long-animation-frames/#record-module-script-execution-start-time)
* [Record pause duration](https://w3c.github.io/long-animation-frames/#record-pause-duration)
* [record timing info for timer handler](https://w3c.github.io/long-animation-frames/#record-timing-info-for-timer-handler)
* [record timing info for microtask checkpoint](https://w3c.github.io/long-animation-frames/#record-timing-info-for-microtask-checkpoint)

Long TasksThe following terms are defined in Long Tasks: [[LONGTASKS]](https://html.spec.whatwg.org/multipage/references.html#refsLONGTASKS)

* [report long tasks](https://w3c.github.io/longtasks/#report-long-tasks)

Web IDLThe IDL fragments in this specification must be interpreted as required for conforming IDL fragments, as described in Web IDL. [[WEBIDL]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)

The following terms are defined in Web IDL:

* [this](https://webidl.spec.whatwg.org/#this)
* [extended attribute](https://webidl.spec.whatwg.org/#dfn-extended-attribute)
* [named constructor](https://webidl.spec.whatwg.org/#dfn-named-constructor)
* [constructor operation](https://webidl.spec.whatwg.org/#idl-constructors)
* [overridden constructor steps](https://webidl.spec.whatwg.org/#overridden-constructor-steps)
* [internally create a new object implementing the interface](https://webidl.spec.whatwg.org/#internally-create-a-new-object-implementing-the-interface)
* [array index property name](https://webidl.spec.whatwg.org/#dfn-array-index-property-name)
* [supports indexed properties](https://webidl.spec.whatwg.org/#dfn-support-indexed-properties)
* [supported property indices](https://webidl.spec.whatwg.org/#dfn-supported-property-indices)
* [determine the value of an indexed property](https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-an-indexed-property)
* [set the value of an existing indexed property](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-an-existing-indexed-property)
* [set the value of a new indexed property](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-a-new-indexed-property)
* [support named properties](https://webidl.spec.whatwg.org/#dfn-support-named-properties)
* [supported property names](https://webidl.spec.whatwg.org/#dfn-supported-property-names)
* [determine the value of a named property](https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-a-named-property)
* [set the value of an existing named property](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-an-existing-named-property)
* [set the value of a new named property](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-a-new-named-property)
* [delete an existing named property](https://webidl.spec.whatwg.org/#dfn-delete-an-existing-named-property)
* [perform a security check](https://webidl.spec.whatwg.org/#dfn-perform-a-security-check)
* [platform object](https://webidl.spec.whatwg.org/#dfn-platform-object)
* [legacy platform object](https://webidl.spec.whatwg.org/#dfn-legacy-platform-object)
* [primary interface](https://webidl.spec.whatwg.org/#dfn-primary-interface)
* [interface object](https://webidl.spec.whatwg.org/#dfn-interface-object)
* [named properties object](https://webidl.spec.whatwg.org/#dfn-named-properties-object)
* [include](https://webidl.spec.whatwg.org/#include)
* [inherit](https://webidl.spec.whatwg.org/#dfn-inherit)
* [interface prototype object](https://webidl.spec.whatwg.org/#dfn-interface-prototype-object)
* [implements](https://webidl.spec.whatwg.org/#implements)
* [associated realm](https://webidl.spec.whatwg.org/#dfn-associated-realm)
* [[[Realm]] field of a platform object](https://webidl.spec.whatwg.org/#es-platform-objects)
* [[[GetOwnProperty]] internal method of a named properties object](https://webidl.spec.whatwg.org/#named-properties-object-getownproperty)
* [callback context](https://webidl.spec.whatwg.org/#dfn-callback-context)
* [frozen array](https://webidl.spec.whatwg.org/#dfn-frozen-array-type) and [creating a frozen array](https://webidl.spec.whatwg.org/#dfn-create-frozen-array)
* [create a new object implementing the interface](https://webidl.spec.whatwg.org/#new)
* [callback this value](https://webidl.spec.whatwg.org/#dfn-callback-this-value)
* [converting](https://webidl.spec.whatwg.org/#es-type-mapping) between Web IDL types and JS types
* [invoking](https://webidl.spec.whatwg.org/#invoke-a-callback-function) and [constructing](https://webidl.spec.whatwg.org/#construct-a-callback-function) callback functions
* [overload resolution algorithm](https://webidl.spec.whatwg.org/#dfn-overload-resolution-algorithm)
* [exposed](https://webidl.spec.whatwg.org/#dfn-exposed)
* [a promise resolved with](https://webidl.spec.whatwg.org/#a-promise-resolved-with)
* [a promise rejected with](https://webidl.spec.whatwg.org/#a-promise-rejected-with)
* [wait for all](https://webidl.spec.whatwg.org/#wait-for-all)
* [upon rejection](https://webidl.spec.whatwg.org/#upon-rejection)
* [upon fulfillment](https://webidl.spec.whatwg.org/#upon-fulfillment)
* [mark as handled](https://webidl.spec.whatwg.org/#mark-a-promise-as-handled)
* [`[Global]`](https://webidl.spec.whatwg.org/#Global)
* [`[LegacyFactoryFunction]`](https://webidl.spec.whatwg.org/#LegacyFactoryFunction)
* [`[LegacyLenientThis]`](https://webidl.spec.whatwg.org/#LegacyLenientThis)
* [`[LegacyNullToEmptyString]`](https://webidl.spec.whatwg.org/#LegacyNullToEmptyString)
* [`[LegacyOverrideBuiltIns]`](https://webidl.spec.whatwg.org/#LegacyOverrideBuiltIns)
* [LegacyPlatformObjectGetOwnProperty](https://webidl.spec.whatwg.org/#LegacyPlatformObjectGetOwnProperty)
* [`[LegacyTreatNonObjectAsNull]`](https://webidl.spec.whatwg.org/#LegacyTreatNonObjectAsNull)
* [`[LegacyUnenumerableNamedProperties]`](https://webidl.spec.whatwg.org/#LegacyUnenumerableNamedProperties)
* [`[LegacyUnforgeable]`](https://webidl.spec.whatwg.org/#LegacyUnforgeable)
* [set entries](https://webidl.spec.whatwg.org/#dfn-set-entries)

Web IDL also defines the following types that are used in Web IDL fragments in this specification:

* [`ArrayBuffer`](https://webidl.spec.whatwg.org/#idl-ArrayBuffer)
* [`ArrayBufferView`](https://webidl.spec.whatwg.org/#common-ArrayBufferView)
* [`boolean`](https://webidl.spec.whatwg.org/#idl-boolean)
* [`DOMString`](https://webidl.spec.whatwg.org/#idl-DOMString)
* [`double`](https://webidl.spec.whatwg.org/#idl-double)
* [enumeration](https://webidl.spec.whatwg.org/#idl-enums)
* [`Function`](https://webidl.spec.whatwg.org/#common-Function)
* [`long`](https://webidl.spec.whatwg.org/#idl-long)
* [`object`](https://webidl.spec.whatwg.org/#idl-object)
* [`Promise`](https://webidl.spec.whatwg.org/#idl-promise)
* [`Uint8ClampedArray`](https://webidl.spec.whatwg.org/#idl-Uint8ClampedArray)
* [`unrestricted double`](https://webidl.spec.whatwg.org/#idl-unrestricted-double)
* [`unsigned long`](https://webidl.spec.whatwg.org/#idl-unsigned-long)
* [`USVString`](https://webidl.spec.whatwg.org/#idl-USVString)
* [`VoidFunction`](https://webidl.spec.whatwg.org/#VoidFunction)

The term [throw](https://webidl.spec.whatwg.org/#dfn-throw) in this specification is used as defined in Web IDL. The [`DOMException`](https://webidl.spec.whatwg.org/#dfn-DOMException) type and the following exception names are defined by Web IDL and used by this specification:

* [&#34;`IndexSizeError`&#34;](https://webidl.spec.whatwg.org/#indexsizeerror)
* [&#34;`HierarchyRequestError`&#34;](https://webidl.spec.whatwg.org/#hierarchyrequesterror)
* [&#34;`InvalidCharacterError`&#34;](https://webidl.spec.whatwg.org/#invalidcharactererror)
* [&#34;`NoModificationAllowedError`&#34;](https://webidl.spec.whatwg.org/#nomodificationallowederror)
* [&#34;`NotFoundError`&#34;](https://webidl.spec.whatwg.org/#notfounderror)
* [&#34;`NotSupportedError`&#34;](https://webidl.spec.whatwg.org/#notsupportederror)
* [&#34;`InvalidStateError`&#34;](https://webidl.spec.whatwg.org/#invalidstateerror)
* [&#34;`SyntaxError`&#34;](https://webidl.spec.whatwg.org/#syntaxerror)
* [&#34;`InvalidAccessError`&#34;](https://webidl.spec.whatwg.org/#invalidaccesserror)
* [&#34;`SecurityError`&#34;](https://webidl.spec.whatwg.org/#securityerror)
* [&#34;`NetworkError`&#34;](https://webidl.spec.whatwg.org/#networkerror)
* [&#34;`AbortError`&#34;](https://webidl.spec.whatwg.org/#aborterror)
* [&#34;`QuotaExceededError`&#34;](https://webidl.spec.whatwg.org/#quotaexceedederror)
* [&#34;`DataCloneError`&#34;](https://webidl.spec.whatwg.org/#datacloneerror)
* [&#34;`EncodingError`&#34;](https://webidl.spec.whatwg.org/#encodingerror)
* [&#34;`NotAllowedError`&#34;](https://webidl.spec.whatwg.org/#notallowederror)

When this specification requires a user agent to create a `Date` object representing a particular time (which could be the special value Not-a-Number), the milliseconds component of that time, if any, must be truncated to an integer, and the time value of the newly created `<a data-x-internal="date" href="https://tc39.es/ecma262/#sec-date-objects">Date</a>` object must represent the resulting truncated time.

For instance, given the time 23045 millionths of a second after 01:00 UTC on January 1st 2000, i.e. the time 2000-01-01T00:00:00.023045Z, then the `<a data-x-internal="date" href="https://tc39.es/ecma262/#sec-date-objects">Date</a>` object created representing that time would represent the same time as that created representing the time 2000-01-01T00:00:00.023Z, 45 millionths earlier. If the given time is NaN, then the result is a `<a data-x-internal="date" href="https://tc39.es/ecma262/#sec-date-objects">Date</a>` object that represents a time value NaN (indicating that the object does not represent a specific instant of time).

JavaScriptSome parts of the language described by this specification only support JavaScript as the underlying scripting language. [[JAVASCRIPT]](https://html.spec.whatwg.org/multipage/references.html#refsJAVASCRIPT)

The term "JavaScript" is used to refer to ECMA-262, rather than the official term ECMAScript, since the term JavaScript is more widely known.

The following terms are defined in the JavaScript specification and used in this specification:

* [active function object](https://tc39.es/ecma262/#active-function-object)
* [agent](https://tc39.es/ecma262/#sec-agents) and [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)
* [automatic semicolon insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion)
* [candidate execution](https://tc39.es/ecma262/#sec-candidate-executions)
* The [current realm](https://tc39.es/ecma262/#current-realm)
* [clamping](https://tc39.es/ecma262/#clamping) a mathematical value
* [early error](https://tc39.es/ecma262/#early-error-rule)
* [forward progress](https://tc39.es/ecma262/#sec-forward-progress)
* [invariants of the essential internal methods](https://tc39.es/ecma262/#sec-invariants-of-the-essential-internal-methods)
* [JavaScript execution context](https://tc39.es/ecma262/#sec-execution-contexts)
* [JavaScript execution context stack](https://tc39.es/ecma262/#execution-context-stack)
* [realm](https://tc39.es/ecma262/#sec-code-realms)
* [JobCallback Record](https://tc39.es/ecma262/#sec-jobcallback-records)
* [NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects)
* [running JavaScript execution context](https://tc39.es/ecma262/#running-execution-context)
* [surrounding agent](https://tc39.es/ecma262/#surrounding-agent)
* [abstract closure](https://tc39.es/ecma262/#sec-abstract-closure)
* [immutable prototype exotic object](https://tc39.es/ecma262/#immutable-prototype-exotic-object)
* [Well-Known Symbols](https://tc39.es/ecma262/#sec-well-known-symbols), including %Symbol.hasInstance%, %Symbol.isConcatSpreadable%, %Symbol.toPrimitive%, and %Symbol.toStringTag%
* [Well-Known Intrinsic Objects](https://tc39.es/ecma262/#sec-well-known-intrinsic-objects), including [%Array.prototype%](https://tc39.es/ecma262/#sec-properties-of-the-array-prototype-object), [%Error.prototype%](https://tc39.es/ecma262/#sec-properties-of-the-error-prototype-object), %EvalError.prototype%, [%Function.prototype%](https://tc39.es/ecma262/#sec-properties-of-the-function-prototype-object), [%JSON.parse%](https://tc39.es/ecma262/#sec-json.parse), [%Object.prototype%](https://tc39.es/ecma262/#sec-properties-of-the-object-prototype-object), [%Object.prototype.valueOf%](https://tc39.es/ecma262/#sec-object.prototype.valueof), %RangeError.prototype%, %ReferenceError.prototype%, %SyntaxError.prototype%, %TypeError.prototype%, and %URIError.prototype%
* The [*FunctionBody*](https://tc39.es/ecma262/#prod-FunctionBody) production
* The [*Module*](https://tc39.es/ecma262/#prod-Module) production
* The [*Pattern*](https://tc39.es/ecma262/#prod-Pattern) production
* The [*Script*](https://tc39.es/ecma262/#prod-Script) production
* The [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) notation
* The [Completion Record](https://tc39.es/ecma262/#sec-completion-record-specification-type) specification type
* The [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type) and [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) specification types
* The [Property Descriptor](https://tc39.es/ecma262/#sec-property-descriptor-specification-type) specification type
* The [Script Record](https://tc39.es/ecma262/#sec-script-records) specification type
* The [Cyclic Module Record](https://tc39.es/ecma262/#sec-cyclic-module-records) specification type
* The [Source Text Module Record](https://tc39.es/ecma262/#sec-source-text-module-records) specification type and its [Evaluate](https://tc39.es/ecma262/#sec-moduleevaluation), [Link](https://tc39.es/ecma262/#sec-moduledeclarationlinking) and [LoadRequestedModules](https://tc39.es/ecma262/#sec-LoadRequestedModules) methods
* The [ArrayCreate](https://tc39.es/ecma262/#sec-arraycreate) abstract operation
* The [Call](https://tc39.es/ecma262/#sec-call) abstract operation
* The [ClearKeptObjects](https://tc39.es/ecma262/#sec-clear-kept-objects) abstract operation
* The [CleanupFinalizationRegistry](https://tc39.es/ecma262/#sec-cleanup-finalization-registry) abstract operation
* The [Construct](https://tc39.es/ecma262/#sec-construct) abstract operation
* The [CopyDataBlockBytes](https://tc39.es/ecma262/#sec-copydatablockbytes) abstract operation
* The [CreateBuiltinFunction](https://tc39.es/ecma262/#sec-createbuiltinfunction) abstract operation
* The [CreateByteDataBlock](https://tc39.es/ecma262/#sec-createbytedatablock) abstract operation
* The [CreateDataProperty](https://tc39.es/ecma262/#sec-createdataproperty) abstract operation
* The [DefinePropertyOrThrow](https://tc39.es/ecma262/#sec-definepropertyorthrow) abstract operation
* The [DetachArrayBuffer](https://tc39.es/ecma262/#sec-detacharraybuffer) abstract operation
* The [EnumerableOwnProperties](https://tc39.es/ecma262/#sec-enumerableownproperties) abstract operation
* The [FinishLoadingImportedModule](https://tc39.es/ecma262/#sec-FinishLoadingImportedModule) abstract operation
* The [OrdinaryFunctionCreate](https://tc39.es/ecma262/#sec-ordinaryfunctioncreate) abstract operation
* The [Get](https://tc39.es/ecma262/#sec-get-o-p) abstract operation
* The [GetActiveScriptOrModule](https://tc39.es/ecma262/#sec-getactivescriptormodule) abstract operation
* The [GetFunctionRealm](https://tc39.es/ecma262/#sec-getfunctionrealm) abstract operation
* The [HasOwnProperty](https://tc39.es/ecma262/#sec-hasownproperty) abstract operation
* The [HostCallJobCallback](https://tc39.es/ecma262/#sec-hostcalljobcallback) abstract operation
* The [HostEnqueueFinalizationRegistryCleanupJob](https://tc39.es/ecma262/#sec-host-cleanup-finalization-registry) abstract operation
* The [HostEnqueueGenericJob](https://tc39.es/ecma262/#sec-hostenqueuegenericjob) abstract operation
* The [HostEnqueuePromiseJob](https://tc39.es/ecma262/#sec-hostenqueuepromisejob) abstract operation
* The [HostEnqueueTimeoutJob](https://tc39.es/ecma262/#sec-hostenqueuetimeoutjob) abstract operation
* The [HostEnsureCanAddPrivateElement](https://tc39.es/ecma262/#sec-hostensurecanaddprivateelement) abstract operation
* The [HostLoadImportedModule](https://tc39.es/proposal-import-attributes/#sec-HostLoadImportedModule) abstract operation
* The [HostMakeJobCallback](https://tc39.es/ecma262/#sec-hostmakejobcallback) abstract operation
* The [HostPromiseRejectionTracker](https://tc39.es/ecma262/#sec-host-promise-rejection-tracker) abstract operation
* The [InitializeHostDefinedRealm](https://tc39.es/ecma262/#sec-initializehostdefinedrealm) abstract operation
* The [IsAccessorDescriptor](https://tc39.es/ecma262/#sec-isaccessordescriptor) abstract operation
* The [IsCallable](https://tc39.es/ecma262/#sec-iscallable) abstract operation
* The [IsConstructor](https://tc39.es/ecma262/#sec-isconstructor) abstract operation
* The [IsDataDescriptor](https://tc39.es/ecma262/#sec-isdatadescriptor) abstract operation
* The [IsDetachedBuffer](https://tc39.es/ecma262/#sec-isdetachedbuffer) abstract operation
* The [IsSharedArrayBuffer](https://tc39.es/ecma262/#sec-issharedarraybuffer) abstract operation
* The [NewObjectEnvironment](https://tc39.es/ecma262/#sec-newobjectenvironment) abstract operation
* The [NormalCompletion](https://tc39.es/ecma262/#sec-normalcompletion) abstract operation
* The [OrdinaryGetPrototypeOf](https://tc39.es/ecma262/#sec-ordinarygetprototypeof) abstract operation
* The [OrdinarySetPrototypeOf](https://tc39.es/ecma262/#sec-ordinarysetprototypeof) abstract operation
* The [OrdinaryIsExtensible](https://tc39.es/ecma262/#sec-ordinaryisextensible) abstract operation
* The [OrdinaryPreventExtensions](https://tc39.es/ecma262/#sec-ordinarypreventextensions) abstract operation
* The [OrdinaryGetOwnProperty](https://tc39.es/ecma262/#sec-ordinarygetownproperty) abstract operation
* The [OrdinaryDefineOwnProperty](https://tc39.es/ecma262/#sec-ordinarydefineownproperty) abstract operation
* The [OrdinaryGet](https://tc39.es/ecma262/#sec-ordinaryget) abstract operation
* The [OrdinarySet](https://tc39.es/ecma262/#sec-ordinaryset) abstract operation
* The [OrdinaryDelete](https://tc39.es/ecma262/#sec-ordinarydelete) abstract operation
* The [OrdinaryOwnPropertyKeys](https://tc39.es/ecma262/#sec-ordinaryownpropertykeys) abstract operation
* The [OrdinaryObjectCreate](https://tc39.es/ecma262/#sec-objectcreate) abstract operation
* The [ParseModule](https://tc39.es/ecma262/#sec-parsemodule) abstract operation
* The [ParseScript](https://tc39.es/ecma262/#sec-parse-script) abstract operation
* The [NewPromiseReactionJob](https://tc39.es/ecma262/#sec-newpromisereactionjob) abstract operation
* The [NewPromiseResolveThenableJob](https://tc39.es/ecma262/#sec-newpromiseresolvethenablejob) abstract operation
* The [RegExpBuiltinExec](https://tc39.es/ecma262/#sec-regexpbuiltinexec) abstract operation
* The [RegExpCreate](https://tc39.es/ecma262/#sec-regexpcreate) abstract operation
* The [RunJobs](https://tc39.es/ecma262/#sec-runjobs) abstract operation
* The [SameValue](https://tc39.es/ecma262/#sec-samevalue) abstract operation
* The [ScriptEvaluation](https://tc39.es/ecma262/#sec-runtime-semantics-scriptevaluation) abstract operation
* The [SetImmutablePrototype](https://tc39.es/ecma262/#sec-set-immutable-prototype) abstract operation
* The [ToBoolean](https://tc39.es/ecma262/#sec-toboolean) abstract operation
* The [ToString](https://tc39.es/ecma262/#sec-tostring) abstract operation
* The [ToUint32](https://tc39.es/ecma262/#sec-touint32) abstract operation
* The [TypedArrayCreate](https://tc39.es/ecma262/#typedarray-create) abstract operation
* The [IsLooselyEqual](https://tc39.es/ecma262/#sec-islooselyequal) abstract operation
* The [IsStrictlyEqual](https://tc39.es/ecma262/#sec-isstrictlyequal) abstract operation
* The [`Atomics`](https://tc39.es/ecma262/#sec-atomics-object) object
* The [`Atomics.waitAsync`](https://tc39.es/ecma262/#sec-atomics.waitasync) object
* The [`Date`](https://tc39.es/ecma262/#sec-date-objects) class
* The [`FinalizationRegistry`](https://tc39.es/ecma262/#sec-finalization-registry-objects) class
* The [`RegExp`](https://tc39.es/ecma262/#sec-regexp-regular-expression-objects) class
* The [`SharedArrayBuffer`](https://tc39.es/ecma262/#sec-sharedarraybuffer-objects) class
* The [`SyntaxError`](https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-syntaxerror) class
* The [`TypeError`](https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror) class
* The [`RangeError`](https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-rangeerror) class
* The [`WeakRef`](https://tc39.es/ecma262/#sec-weak-ref-objects) class
* The [`eval()`](https://tc39.es/ecma262/#sec-eval-x) function
* The [`WeakRef.prototype.deref()`](https://tc39.es/ecma262/#sec-weak-ref.prototype.deref) function
* The [[[IsHTMLDDA]]](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) internal slot
* [`import()`](https://tc39.es/ecma262/#sec-import-calls)
* [`import.meta`](https://tc39.es/ecma262/#sec-meta-properties)
* The [HostGetImportMetaProperties](https://tc39.es/ecma262/#sec-hostgetimportmetaproperties) abstract operation
* The [`typeof`](https://tc39.es/ecma262/#sec-typeof-operator) operator
* The [`delete`](https://tc39.es/ecma262/#sec-delete-operator) operator
* [The TypedArray Constructors](https://tc39.es/ecma262/#table-49) table

Users agents that support JavaScript must also implement the Dynamic Code Brand Checks proposal. The following terms are defined there, and used in this specification: [[JSDYNAMICCODEBRANDCHECKS]](https://html.spec.whatwg.org/multipage/references.html#refsJSDYNAMICCODEBRANDCHECKS)

* The [HostEnsureCanCompileStrings](https://tc39.es/proposal-dynamic-code-brand-checks/#sec-hostensurecancompilestrings) abstract operation
* The [HostGetCodeForEval](https://tc39.es/proposal-dynamic-code-brand-checks/#sec-hostgetcodeforeval) abstract operation

Users agents that support JavaScript must also implement ECMAScript Internationalization API. [[JSINTL]](https://html.spec.whatwg.org/multipage/references.html#refsJSINTL)

User agents that support JavaScript must also implement the Import Attributes proposal. The following terms are defined there, and used in this specification: [[JSIMPORTATTRIBUTES]](https://html.spec.whatwg.org/multipage/references.html#refsJSIMPORTATTRIBUTES)

* The [ModuleRequest Record](https://tc39.es/proposal-import-attributes/#sec-modulerequest-record) specification type
* The [HostGetSupportedImportAttributes](https://tc39.es/proposal-import-attributes/#sec-hostgetsupportedimportattributes) abstract operation

User agents that support JavaScript must also implement the JSON modules proposal. The following terms are defined there, and used in this specification: [[JSJSONMODULES]](https://html.spec.whatwg.org/multipage/references.html#refsJSJSONMODULES)

* The [CreateDefaultExportSyntheticModule](https://tc39.es/proposal-json-modules/#sec-create-default-export-synthetic-module) abstract operation
* The [SetSyntheticModuleExport](https://tc39.es/proposal-json-modules/#sec-setsyntheticmoduleexport) abstract operation
* The [Synthetic Module Record](https://tc39.es/proposal-json-modules/#sec-synthetic-module-records) specification type
* The [ParseJSONModule](https://tc39.es/proposal-json-modules/#sec-parse-json-module) abstract operation

User agents that support JavaScript must also implement the Resizable ArrayBuffer and growable SharedArrayBuffer proposal. The following terms are defined there, and used in this specification: [[JSRESIZABLEBUFFERS]](https://html.spec.whatwg.org/multipage/references.html#refsJSRESIZABLEBUFFERS)

* The [IsArrayBufferViewOutOfBounds](https://tc39.es/proposal-resizablearraybuffer/#sec-isarraybufferviewoutofbounds) abstract operation

User agents that support JavaScript must also implement the Temporal proposal. The following terms are defined there, and used in this specification: [[JSTEMPORAL]](https://html.spec.whatwg.org/multipage/references.html#refsJSTEMPORAL)

* The [HostSystemUTCEpochNanoseconds](https://tc39.es/proposal-temporal/#sec-hostsystemutcepochnanoseconds) abstract operation
* The [nsMaxInstant](https://tc39.es/proposal-temporal/#eqn-nsMaxInstant) and [nsMinInstant](https://tc39.es/proposal-temporal/#eqn-nsMinInstant) values

WebAssemblyThe following term is defined in WebAssembly JavaScript Interface: [[WASMJS]](https://html.spec.whatwg.org/multipage/references.html#refsWASMJS)

* [`WebAssembly.Module`](https://webassembly.github.io/spec/js-api/#module)

DOMThe Document Object Model (DOM) is a representation — a model — of a document and its content. The DOM is not just an API; the conformance criteria of HTML implementations are defined, in this specification, in terms of operations on the DOM. [[DOM]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

Implementations must support DOM and the events defined in UI Events, because this specification is defined in terms of the DOM, and some of the features are defined as extensions to the DOM interfaces. [[DOM]](https://html.spec.whatwg.org/multipage/references.html#refsDOM) [[UIEVENTS]](https://html.spec.whatwg.org/multipage/references.html#refsUIEVENTS)

In particular, the following features are defined in DOM: [[DOM]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

* [`Attr`](https://dom.spec.whatwg.org/#interface-attr) interface
* [`CharacterData`](https://dom.spec.whatwg.org/#interface-characterdata) interface
* [`Comment`](https://dom.spec.whatwg.org/#interface-comment) interface
* [`DOMImplementation`](https://dom.spec.whatwg.org/#interface-domimplementation) interface
* [`Document`](https://dom.spec.whatwg.org/#interface-document) interface and its [`doctype`](https://dom.spec.whatwg.org/#dom-document-doctype) attribute
* [`DocumentOrShadowRoot`](https://dom.spec.whatwg.org/#documentorshadowroot) interface
* [`DocumentFragment`](https://dom.spec.whatwg.org/#interface-documentfragment) interface
* [`DocumentType`](https://dom.spec.whatwg.org/#interface-documenttype) interface
* [`ChildNode`](https://dom.spec.whatwg.org/#interface-childnode) interface
* [`Element`](https://dom.spec.whatwg.org/#interface-element) interface
* [`attachShadow()`](https://dom.spec.whatwg.org/#dom-element-attachshadow) method.
* An element's [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root)
* A [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root)'s [mode](https://dom.spec.whatwg.org/#shadowroot-mode)
* A [shadow root](https://dom.spec.whatwg.org/#concept-element-shadow-root)'s [declarative](https://dom.spec.whatwg.org/#shadowroot-declarative) member
* The [attach a shadow root](https://dom.spec.whatwg.org/#concept-attach-a-shadow-root) algorithm
* The [retargeting algorithm](https://dom.spec.whatwg.org/#retarget)
* [`Node`](https://dom.spec.whatwg.org/#interface-node) interface
* [`NodeList`](https://dom.spec.whatwg.org/#interface-nodelist) interface
* [`ProcessingInstruction`](https://dom.spec.whatwg.org/#interface-processinginstruction) interface
* [`ShadowRoot`](https://dom.spec.whatwg.org/#interface-shadowroot) interface
* [`Text`](https://dom.spec.whatwg.org/#interface-text) interface
* [`Range`](https://dom.spec.whatwg.org/#interface-range) interface
* [node document](https://dom.spec.whatwg.org/#concept-node-document) concept
* [document type](https://dom.spec.whatwg.org/#concept-document-type) concept
* [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) concept
* The [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) concept, and its [delegates focus](https://dom.spec.whatwg.org/#shadowroot-delegates-focus), [available to element internals](https://dom.spec.whatwg.org/#shadowroot-available-to-element-internals), [clonable](https://dom.spec.whatwg.org/#shadowroot-clonable), and [serializable](https://dom.spec.whatwg.org/#shadowroot-serializable).
* The [shadow host](https://dom.spec.whatwg.org/#element-shadow-host) concept
* [`HTMLCollection`](https://dom.spec.whatwg.org/#interface-htmlcollection) interface, its [`length`](https://dom.spec.whatwg.org/#dom-htmlcollection-length) attribute, and its [`item()`](https://dom.spec.whatwg.org/#dom-htmlcollection-item) and [`namedItem()`](https://dom.spec.whatwg.org/#dom-htmlcollection-nameditem) methods
* The terms [collection](https://dom.spec.whatwg.org/#concept-collection) and [represented by the collection](https://dom.spec.whatwg.org/#represented-by-the-collection)
* [`DOMTokenList`](https://dom.spec.whatwg.org/#interface-domtokenlist) interface, and its [`value`](https://dom.spec.whatwg.org/#dom-domtokenlist-value) attribute and [`supports`](https://dom.spec.whatwg.org/#dom-domtokenlist-supports) operation
* [`createDocument()`](https://dom.spec.whatwg.org/#dom-domimplementation-createdocument) method
* [`createHTMLDocument()`](https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument) method
* [`createElement()`](https://dom.spec.whatwg.org/#dom-document-createelement) method
* [`createElementNS()`](https://dom.spec.whatwg.org/#dom-document-createelementns) method
* [`getElementById()`](https://dom.spec.whatwg.org/#dom-nonelementparentnode-getelementbyid) method
* [`getElementsByClassName()`](https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname) method
* [`append()`](https://dom.spec.whatwg.org/#dom-node-append) method
* [`appendChild()`](https://dom.spec.whatwg.org/#dom-node-appendchild) method
* [`cloneNode()`](https://dom.spec.whatwg.org/#dom-node-clonenode) method
* [`importNode()`](https://dom.spec.whatwg.org/#dom-document-importnode) method
* [`preventDefault()`](https://dom.spec.whatwg.org/#dom-event-preventdefault) method
* [`id`](https://dom.spec.whatwg.org/#dom-element-id) attribute
* [`setAttribute()`](https://dom.spec.whatwg.org/#dom-element-setattribute) method
* [`textContent`](https://dom.spec.whatwg.org/#dom-node-textcontent) attribute
* The [tree](https://dom.spec.whatwg.org/#concept-tree), [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree), and [node tree](https://dom.spec.whatwg.org/#concept-node-tree) concepts
* The [tree order](https://dom.spec.whatwg.org/#concept-tree-order) and [shadow-including tree order](https://dom.spec.whatwg.org/#concept-shadow-including-tree-order) concepts
* The [element](https://dom.spec.whatwg.org/#concept-element) concept
* The [child](https://dom.spec.whatwg.org/#concept-tree-child) concept
* The [root](https://dom.spec.whatwg.org/#concept-tree-root) and [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root) concepts
* The [inclusive ancestor](https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor), [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant), [shadow-including ancestor](https://dom.spec.whatwg.org/#concept-shadow-including-ancestor), [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant), [shadow-including inclusive descendant](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant), and [shadow-including inclusive ancestor](https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-ancestor) concepts
* The [first child](https://dom.spec.whatwg.org/#concept-tree-first-child), [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling), [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling), and [parent](https://dom.spec.whatwg.org/#concept-tree-parent) concepts
* The [parent element](https://dom.spec.whatwg.org/#parent-element) concept
* The [document element](https://dom.spec.whatwg.org/#document-element) concept
* The [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree), [in a document](https://dom.spec.whatwg.org/#in-a-document) (legacy), and [connected](https://dom.spec.whatwg.org/#connected) concepts
* The [slot](https://dom.spec.whatwg.org/#concept-slot) concept, and its [name](https://dom.spec.whatwg.org/#slot-name) and [assigned nodes](https://dom.spec.whatwg.org/#slot-assigned-nodes)
* The [assigned slot](https://dom.spec.whatwg.org/#slotable-assigned-slot) concept
* The [slot assignment](https://dom.spec.whatwg.org/#dom-shadowroot-slot-assignment) concept
* The [slottable](https://dom.spec.whatwg.org/#concept-slotable) concept
* The [assign slottables for a tree](https://dom.spec.whatwg.org/#assign-slotables-for-a-tree) algorithm
* The [`slotchange`](https://dom.spec.whatwg.org/#eventdef-htmlslotelement-slotchange) event
* The [inclusive descendant](https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant) concept
* The [find flattened slottables](https://dom.spec.whatwg.org/#find-flattened-slotables) algorithm
* The [manual slot assignment](https://dom.spec.whatwg.org/#slottable-manual-slot-assignment) concept
* The [assign a slot](https://dom.spec.whatwg.org/#assign-a-slot) algorithm
* The [pre-insert](https://dom.spec.whatwg.org/#concept-node-pre-insert), [insert](https://dom.spec.whatwg.org/#concept-node-insert), [append](https://dom.spec.whatwg.org/#concept-node-append), [replace](https://dom.spec.whatwg.org/#concept-node-replace), [replace all](https://dom.spec.whatwg.org/#concept-node-replace-all), [string replace all](https://dom.spec.whatwg.org/#string-replace-all), [remove](https://dom.spec.whatwg.org/#concept-node-remove), and [adopt](https://dom.spec.whatwg.org/#concept-node-adopt) algorithms for nodes
* The [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) concept
* The [insertion steps](https://dom.spec.whatwg.org/#concept-node-insert-ext),
* The [post-connection steps](https://dom.spec.whatwg.org/#concept-node-post-connection-ext), [removing steps](https://dom.spec.whatwg.org/#concept-node-remove-ext), [adopting steps](https://dom.spec.whatwg.org/#concept-node-adopt-ext), and [children changed steps](https://dom.spec.whatwg.org/#concept-node-children-changed-ext) hooks for elements
* The [change](https://dom.spec.whatwg.org/#concept-element-attributes-change), [append](https://dom.spec.whatwg.org/#concept-element-attributes-append), [remove](https://dom.spec.whatwg.org/#concept-element-attributes-remove), [replace](https://dom.spec.whatwg.org/#concept-element-attributes-replace), [get an attribute by namespace and local name](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace), [set value](https://dom.spec.whatwg.org/#concept-element-attributes-set-value), and [remove an attribute by namespace and local name](https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace) algorithms for attributes
* The [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) hook for attributes
* The [value](https://dom.spec.whatwg.org/#concept-attribute-value) concept for attributes
* The [local name](https://dom.spec.whatwg.org/#concept-attribute-local-name) concept for attributes
* The [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute) concept
* The [data](https://dom.spec.whatwg.org/#concept-cd-data) of a `<a data-x-internal="characterdata" href="https://dom.spec.whatwg.org/#interface-characterdata">CharacterData</a>` node and its [replace data](https://dom.spec.whatwg.org/#concept-cd-replace) algorithm
* The [child text content](https://dom.spec.whatwg.org/#concept-child-text-content) of a node
* The [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content) of a node
* The [name](https://dom.spec.whatwg.org/#concept-doctype-name), [public ID](https://dom.spec.whatwg.org/#concept-doctype-publicid), and [system ID](https://dom.spec.whatwg.org/#concept-doctype-systemid) of a doctype
* [`Event`](https://dom.spec.whatwg.org/#interface-event) interface
* [`Event` and derived interfaces constructor behavior](https://dom.spec.whatwg.org/#concept-event-constructor)
* [`EventTarget`](https://dom.spec.whatwg.org/#interface-eventtarget) interface
* The [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior) hook
* The [legacy-pre-activation behavior](https://dom.spec.whatwg.org/#eventtarget-legacy-pre-activation-behavior) hook
* The [legacy-canceled-activation behavior](https://dom.spec.whatwg.org/#eventtarget-legacy-canceled-activation-behavior) hook
* The [create an event](https://dom.spec.whatwg.org/#concept-event-create) algorithm
* The [fire an event](https://dom.spec.whatwg.org/#concept-event-fire) algorithm
* The [canceled flag](https://dom.spec.whatwg.org/#canceled-flag)
* The [dispatch flag](https://dom.spec.whatwg.org/#dispatch-flag)
* The [dispatch](https://dom.spec.whatwg.org/#concept-event-dispatch) algorithm
* [`EventInit`](https://dom.spec.whatwg.org/#dictdef-eventinit) dictionary type
* [`type`](https://dom.spec.whatwg.org/#dom-event-type) attribute
* An event's [target](https://dom.spec.whatwg.org/#concept-event-target)
* [`currentTarget`](https://dom.spec.whatwg.org/#dom-event-currenttarget) attribute
* [`bubbles`](https://dom.spec.whatwg.org/#dom-event-bubbles) attribute
* [`cancelable`](https://dom.spec.whatwg.org/#dom-event-cancelable) attribute
* [`composed`](https://dom.spec.whatwg.org/#dom-event-composed) attribute
* [composed flag](https://dom.spec.whatwg.org/#composed-flag)
* [`isTrusted`](https://dom.spec.whatwg.org/#dom-event-istrusted) attribute
* [`initEvent()`](https://dom.spec.whatwg.org/#dom-event-initevent) method
* [add an event listener](https://dom.spec.whatwg.org/#add-an-event-listener)
* [`addEventListener()`](https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener) method
* The [remove an event listener](https://dom.spec.whatwg.org/#remove-an-event-listener) and [remove all event listeners](https://dom.spec.whatwg.org/#remove-all-event-listeners) algorithms
* [`EventListener`](https://dom.spec.whatwg.org/#callbackdef-eventlistener) callback interface
* The [type](https://dom.spec.whatwg.org/#dom-event-type) of an event
* An [event listener](https://dom.spec.whatwg.org/#concept-event-listener) and its [type](https://dom.spec.whatwg.org/#event-listener-type) and [callback](https://dom.spec.whatwg.org/#event-listener-callback)
* The [encoding](https://dom.spec.whatwg.org/#concept-document-encoding) (herein the *character encoding* ), [mode](https://dom.spec.whatwg.org/#concept-document-mode), [allow declarative shadow roots](https://dom.spec.whatwg.org/#concept-document-allow-declarative-shadow-roots), and [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`
* The distinction between [XML documents](https://dom.spec.whatwg.org/#xml-document) and [HTML documents](https://dom.spec.whatwg.org/#html-document)
* The terms [quirks mode](https://dom.spec.whatwg.org/#concept-document-quirks), [limited-quirks mode](https://dom.spec.whatwg.org/#concept-document-limited-quirks), and [no-quirks mode](https://dom.spec.whatwg.org/#concept-document-no-quirks)
* The algorithm to [clone](https://dom.spec.whatwg.org/#concept-node-clone) a `<a data-x-internal="node" href="https://dom.spec.whatwg.org/#interface-node">Node</a>`, and the concept of [cloning steps](https://dom.spec.whatwg.org/#concept-node-clone-ext) used by that algorithm
* The concept of base URL change steps and the definition of what happens when an element is affected by a base URL change
* The concept of an element's [unique identifier (ID)](https://dom.spec.whatwg.org/#concept-id)
* The concept of an element's [classes](https://dom.spec.whatwg.org/#concept-class)
* The term [supported tokens](https://dom.spec.whatwg.org/#concept-supported-tokens)
* The concept of a DOM [range](https://dom.spec.whatwg.org/#concept-range), and the terms [start node](https://dom.spec.whatwg.org/#concept-range-start-node), [start](https://dom.spec.whatwg.org/#concept-range-start), [end](https://dom.spec.whatwg.org/#concept-range-end), and [boundary point](https://dom.spec.whatwg.org/#concept-range-bp) as applied to ranges.
* The [create an element](https://dom.spec.whatwg.org/#concept-create-element) algorithm
* The [element interface](https://dom.spec.whatwg.org/#concept-element-interface) concept
* The concepts of [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state), and of [defined](https://dom.spec.whatwg.org/#concept-element-defined) and [custom](https://dom.spec.whatwg.org/#concept-element-custom) elements
* An element's [namespace](https://dom.spec.whatwg.org/#concept-element-namespace), [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix), [local name](https://dom.spec.whatwg.org/#concept-element-local-name), [custom element definition](https://dom.spec.whatwg.org/#concept-element-custom-element-definition), and [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value)
* [`MutationObserver`](https://dom.spec.whatwg.org/#mutationobserver) interface and [mutation observers](https://dom.spec.whatwg.org/#mutation-observers) in general
* [`AbortController`](https://dom.spec.whatwg.org/#abortcontroller) and its [signal](https://dom.spec.whatwg.org/#abortcontroller-signal)
* [`AbortSignal`](https://dom.spec.whatwg.org/#abortsignal)
* [aborted](https://dom.spec.whatwg.org/#abortsignal-aborted)
* [signal abort](https://dom.spec.whatwg.org/#abortcontroller-signal-abort)
* [add](https://dom.spec.whatwg.org/#abortsignal-add)
* The [get an attribute by name](https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name) algorithm

The following features are defined in UI Events: [[UIEVENTS]](https://html.spec.whatwg.org/multipage/references.html#refsUIEVENTS)

* The [`MouseEvent`](https://w3c.github.io/uievents/#mouseevent) interface
* The `<a data-x-internal="mouseevent" href="https://w3c.github.io/uievents/#mouseevent">MouseEvent</a>` interface's [`relatedTarget`](https://w3c.github.io/uievents/#dom-mouseevent-relatedtarget) attribute
* [`MouseEventInit`](https://w3c.github.io/uievents/#dictdef-mouseeventinit) dictionary type
* The [`FocusEvent`](https://w3c.github.io/uievents/#focusevent) interface
* The `<a data-x-internal="focusevent" href="https://w3c.github.io/uievents/#focusevent">FocusEvent</a>` interface's [`relatedTarget`](https://w3c.github.io/uievents/#dom-focusevent-relatedtarget) attribute
* The [`UIEvent`](https://w3c.github.io/uievents/#uievent) interface
* The `<a data-x-internal="uievent" href="https://w3c.github.io/uievents/#uievent">UIEvent</a>` interface's [`view`](https://w3c.github.io/uievents/#dom-uievent-view) attribute
* [`auxclick`](https://w3c.github.io/uievents/#event-type-auxclick) event
* [`beforeinput`](https://w3c.github.io/uievents/#event-type-beforeinput) event
* [`click`](https://w3c.github.io/uievents/#event-type-click) event
* [`contextmenu`](https://w3c.github.io/uievents/#event-type-contextmenu) event
* [`dblclick`](https://w3c.github.io/uievents/#event-type-dblclick) event
* [`input`](https://w3c.github.io/uievents/#event-type-input) event
* [`mousedown`](https://w3c.github.io/uievents/#event-type-mousedown) event
* [`mouseenter`](https://w3c.github.io/uievents/#event-type-mouseenter) event
* [`mouseleave`](https://w3c.github.io/uievents/#event-type-mouseleave) event
* [`mousemove`](https://w3c.github.io/uievents/#event-type-mousemove) event
* [`mouseout`](https://w3c.github.io/uievents/#event-type-mouseout) event
* [`mouseover`](https://w3c.github.io/uievents/#event-type-mouseover) event
* [`mouseup`](https://w3c.github.io/uievents/#event-type-mouseup) event
* [`wheel`](https://w3c.github.io/uievents/#event-type-wheel) event
* [`keydown`](https://w3c.github.io/uievents/#event-type-keydown) event
* [`keypress`](https://w3c.github.io/uievents/#event-type-keypress) event
* [`keyup`](https://w3c.github.io/uievents/#event-type-keyup) event

The following features are defined in Touch Events: [[TOUCH]](https://html.spec.whatwg.org/multipage/references.html#refsTOUCH)

* [`Touch`](https://w3c.github.io/touch-events/#touch-interface) interface
* [Touch point](https://w3c.github.io/touch-events/#dfn-touch-point) concept
* [`touchend`](https://w3c.github.io/touch-events/#event-touchend) event

The following features are defined in Pointer Events: [[POINTEREVENTS]](https://html.spec.whatwg.org/multipage/references.html#refsPOINTEREVENTS)

* The [`PointerEvent`](https://w3c.github.io/pointerevents/#pointerevent-interface) interface
* The `<a data-x-internal="pointerevent" href="https://w3c.github.io/pointerevents/#pointerevent-interface">PointerEvent</a>` interface's [`pointerType`](https://w3c.github.io/pointerevents/#dom-pointerevent-pointertype) attribute
* [fire a pointer event](https://w3c.github.io/pointerevents/#dfn-fire-a-pointer-event)
* [`pointerdown`](https://w3c.github.io/pointerevents/#the-pointerdown-event) event
* [`pointerup`](https://w3c.github.io/pointerevents/#the-pointerup-event) event
* [`pointercancel`](https://w3c.github.io/pointerevents/#the-pointercancel-event) event

The following events are defined in Clipboard API and events: [[CLIPBOARD-APIS]](https://html.spec.whatwg.org/multipage/references.html#refsCLIPBOARD-APIS)

* [`copy`](https://w3c.github.io/clipboard-apis/#clipboard-event-copy) event
* [`cut`](https://w3c.github.io/clipboard-apis/#clipboard-event-cut) event
* [`paste`](https://w3c.github.io/clipboard-apis/#clipboard-event-paste) event

This specification sometimes uses the term name to refer to the event's [type](https://dom.spec.whatwg.org/#dom-event-type); as in, "an event named `click`" or "if the event name is `keypress`". The terms "name" and "type" for events are synonymous.

The following features are defined in DOM Parsing and Serialization: [[DOMPARSING]](https://html.spec.whatwg.org/multipage/references.html#refsDOMPARSING)

* [`XML serialization`](https://w3c.github.io/DOM-Parsing/#dfn-xml-serialization)

The following features are defined in Selection API: [[SELECTION]](https://html.spec.whatwg.org/multipage/references.html#refsSELECTION)

* [selection](https://w3c.github.io/selection-api/#dfn-selection)
* [`Selection`](https://w3c.github.io/selection-api/#selection-interface)

User agents are encouraged to implement the features described in execCommand. [[EXECCOMMAND]](https://html.spec.whatwg.org/multipage/references.html#refsEXECCOMMAND)

The following features are defined in Fullscreen API: [[FULLSCREEN]](https://html.spec.whatwg.org/multipage/references.html#refsFULLSCREEN)

* [`requestFullscreen()`](https://fullscreen.spec.whatwg.org/#dom-element-requestfullscreen)
* [`fullscreenchange`](https://fullscreen.spec.whatwg.org/#eventdef-document-fullscreenchange)
* [run the fullscreen steps](https://fullscreen.spec.whatwg.org/#run-the-fullscreen-steps)
* [fully exit fullscreen](https://fullscreen.spec.whatwg.org/#fully-exit-fullscreen)
* [fullscreen element](https://fullscreen.spec.whatwg.org/#fullscreen-element)
* [fullscreen flag](https://fullscreen.spec.whatwg.org/#fullscreen-flag)

High Resolution Time provides the following features: [[HRT]](https://html.spec.whatwg.org/multipage/references.html#refsHRT)

* [current high resolution time](https://w3c.github.io/hr-time/#dfn-current-high-resolution-time)
* [relative high resolution time](https://w3c.github.io/hr-time/#dfn-relative-high-resolution-time)
* [unsafe shared current time](https://w3c.github.io/hr-time/#dfn-unsafe-shared-current-time)
* [shared monotonic clock](https://w3c.github.io/hr-time/#dfn-shared-monotonic-clock)
* [unsafe moment](https://w3c.github.io/hr-time/#dfn-unsafe-moment)
* [duration from](https://w3c.github.io/hr-time/#dfn-duration-from)
* [coarsen time](https://w3c.github.io/hr-time/#dfn-coarsen-time)
* [current wall time](https://w3c.github.io/hr-time/#dfn-current-wall-time)
* [Unix epoch](https://w3c.github.io/hr-time/#dfn-unix-epoch)
* [`DOMHighResTimeStamp`](https://w3c.github.io/hr-time/#dom-domhighrestimestamp)

File APIThis specification uses the following features defined in File API: [[FILEAPI]](https://html.spec.whatwg.org/multipage/references.html#refsFILEAPI)

* The [`Blob`](https://w3c.github.io/FileAPI/#dfn-Blob) interface and its [`type`](https://w3c.github.io/FileAPI/#dfn-type) attribute
* The [`File`](https://w3c.github.io/FileAPI/#dfn-file) interface and its [`name`](https://w3c.github.io/FileAPI/#dfn-name) and [`lastModified`](https://w3c.github.io/FileAPI/#dfn-lastModified) attributes
* The [`FileList`](https://w3c.github.io/FileAPI/#filelist-section) interface
* The concept of a `<a data-x-internal="blob" href="https://w3c.github.io/FileAPI/#dfn-Blob">Blob</a>`'s [snapshot state](https://w3c.github.io/FileAPI/#snapshot-state)
* The concept of read errors
* [Blob URL Store](https://w3c.github.io/FileAPI/#BlobURLStore)
* [blob URL entry](https://w3c.github.io/FileAPI/#blob-url-entry) and its [object](https://w3c.github.io/FileAPI/#blob-url-entry-object) and [environment](https://w3c.github.io/FileAPI/#blob-url-entry-environment)

Indexed Database APIThis specification uses [cleanup Indexed Database transactions](https://w3c.github.io/IndexedDB/#cleanup-indexed-database-transactions) defined by Indexed Database API. [[INDEXEDDB]](https://html.spec.whatwg.org/multipage/references.html#refsINDEXEDDB)

Media Source ExtensionsThe following terms are defined in Media Source Extensions: [[MEDIASOURCE]](https://html.spec.whatwg.org/multipage/references.html#refsMEDIASOURCE)

* [`MediaSource`](https://w3c.github.io/media-source/#idl-def-mediasource) interface
* [detaching from a media element](https://w3c.github.io/media-source/#mediasource-detach)

Media Capture and StreamsThe following terms are defined in Media Capture and Streams: [[MEDIASTREAM]](https://html.spec.whatwg.org/multipage/references.html#refsMEDIASTREAM)

* [`MediaStream`](https://w3c.github.io/mediacapture-main/getusermedia.html#idl-def-mediastream) interface

ReportingThe following terms are defined in Reporting: [[REPORTING]](https://html.spec.whatwg.org/multipage/references.html#refsREPORTING)

* [Queue a report](https://w3c.github.io/reporting/#queue-report)
* [report type](https://w3c.github.io/reporting/#report-type)
* [visible to `ReportingObserver`s](https://w3c.github.io/reporting/#visible-to-reportingobservers)

XMLHttpRequestThe following features and terms are defined in XMLHttpRequest: [[XHR]](https://html.spec.whatwg.org/multipage/references.html#refsXHR)

* The [`XMLHttpRequest`](https://xhr.spec.whatwg.org/#xmlhttprequest) interface, and its [`responseXML`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-responsexml) attribute
* The [`ProgressEvent`](https://xhr.spec.whatwg.org/#interface-progressevent) interface, and its [`lengthComputable`](https://xhr.spec.whatwg.org/#dom-progressevent-lengthcomputable), [`loaded`](https://xhr.spec.whatwg.org/#dom-progressevent-loaded), and [`total`](https://xhr.spec.whatwg.org/#dom-progressevent-total) attributes
* The [`FormData`](https://xhr.spec.whatwg.org/#formdata) interface, and its associated [entry list](https://xhr.spec.whatwg.org/#concept-formdata-entry-list)

Battery StatusThe following features are defined in Battery Status API: [[BATTERY]](https://html.spec.whatwg.org/multipage/references.html#refsBATTERY)

* [`getBattery()`](https://w3c.github.io/battery/#widl-Navigator-getBattery-Promise-BatteryManager) method

Media QueriesImplementations must support Media Queries. The [&lt;media-condition&gt;](https://drafts.csswg.org/mediaqueries/#typedef-media-condition) feature is defined therein. [[MQ]](https://html.spec.whatwg.org/multipage/references.html#refsMQ)

CSS modulesWhile support for CSS as a whole is not required of implementations of this specification (though it is encouraged, at least for web browsers), some features are defined in terms of specific CSS requirements.

When this specification requires that something be [parsed according to a particular CSS grammar](https://drafts.csswg.org/css-syntax/#parse-grammar), the relevant algorithm in CSS Syntax must be followed, including error handling rules. [[CSSSYNTAX]](https://html.spec.whatwg.org/multipage/references.html#refsCSSSYNTAX)

For example, user agents are required to close all open constructs upon finding the end of a style sheet unexpectedly. Thus, when parsing the string "`rgb(0,0,0`" (with a missing close-parenthesis) for a color value, the close parenthesis is implied by this error handling rule, and a value is obtained (the color 'black'). However, the similar construct "`rgb(0,0,`" (with both a missing parenthesis and a missing "blue" value) cannot be parsed, as closing the open construct does not result in a viable value.

The following terms and features are defined in Cascading Style Sheets (CSS): [[CSS]](https://html.spec.whatwg.org/multipage/references.html#refsCSS)

* [viewport](https://drafts.csswg.org/css2/#viewport)
* [line box](https://drafts.csswg.org/css2/#line-box)
* [out-of-flow](https://drafts.csswg.org/css2/#out-of-flow)
* [in-flow](https://drafts.csswg.org/css2/#in-flow)
* [collapsing margins](https://drafts.csswg.org/css2/#collapsing-margins)
* [containing block](https://drafts.csswg.org/css2/#containing-block-details)
* [inline box](https://drafts.csswg.org/css2/#inline-box)
* [block box](https://drafts.csswg.org/css2/#block-boxes%E2%91%A0)
* The [&#39;top&#39;](https://drafts.csswg.org/css2/#propdef-top), [&#39;bottom&#39;](https://drafts.csswg.org/css2/#propdef-bottom), [&#39;left&#39;](https://drafts.csswg.org/css2/#propdef-left), and [&#39;right&#39;](https://drafts.csswg.org/css2/#propdef-right) properties
* The [&#39;float&#39;](https://drafts.csswg.org/css2/#float-position) property
* The [&#39;clear&#39;](https://drafts.csswg.org/css2/#flow-control) property
* The [&#39;width&#39;](https://drafts.csswg.org/css2/#the-width-property) property
* The [&#39;height&#39;](https://drafts.csswg.org/css2/#the-height-property) property
* The [&#39;min-width&#39;](https://drafts.csswg.org/css2/#min-max-widths) property
* The [&#39;min-height&#39;](https://drafts.csswg.org/css2/#min-max-heights) property
* The [&#39;max-width&#39;](https://drafts.csswg.org/css2/#min-max-widths) property
* The [&#39;max-height&#39;](https://drafts.csswg.org/css2/#min-max-heights) property
* The [&#39;line-height&#39;](https://drafts.csswg.org/css2/#propdef-line-height) property
* The [&#39;vertical-align&#39;](https://drafts.csswg.org/css2/#propdef-vertical-align) property
* The [&#39;content&#39;](https://drafts.csswg.org/css2/#content%E2%91%A0) property
* The [&#39;inline-block&#39;](https://drafts.csswg.org/css2/#value-def-inline-block) value of the [&#39;display&#39;](https://drafts.csswg.org/css2/#display-prop) property
* The [&#39;visibility&#39;](https://drafts.csswg.org/css2/#propdef-visibility) property

The basic version of the [&#39;display&#39;](https://drafts.csswg.org/css2/#display-prop) property is defined in CSS, and the property is extended by other CSS modules. [[CSS]](https://html.spec.whatwg.org/multipage/references.html#refsCSS) [[CSSRUBY]](https://html.spec.whatwg.org/multipage/references.html#refsCSSRUBY) [[CSSTABLE]](https://html.spec.whatwg.org/multipage/references.html#refsCSSTABLE)

The following terms and features are defined in CSS Box Model: [[CSSBOX]](https://html.spec.whatwg.org/multipage/references.html#refsCSSBOX)

* [content area](https://drafts.csswg.org/css-box/#content-area)
* [content box](https://drafts.csswg.org/css-box/#content-box)
* [border box](https://drafts.csswg.org/css-box/#border-box)
* [margin box](https://drafts.csswg.org/css-box/#margin-box)
* [border edge](https://drafts.csswg.org/css-box/#border-edge)
* [margin edge](https://drafts.csswg.org/css-box/#margin-edge)
* The [&#39;margin-top&#39;](https://drafts.csswg.org/css-box/#propdef-margin-top), [&#39;margin-bottom&#39;](https://drafts.csswg.org/css-box/#propdef-margin-bottom), [&#39;margin-left&#39;](https://drafts.csswg.org/css-box/#propdef-margin-left), and [&#39;margin-right&#39;](https://drafts.csswg.org/css-box/#propdef-margin-right) properties
* The [&#39;padding-top&#39;](https://drafts.csswg.org/css-box/#propdef-padding-top), [&#39;padding-bottom&#39;](https://drafts.csswg.org/css-box/#propdef-padding-bottom), [&#39;padding-left&#39;](https://drafts.csswg.org/css-box/#propdef-padding-left), and [&#39;padding-right&#39;](https://drafts.csswg.org/css-box/#propdef-padding-right) properties

The following features are defined in CSS Logical Properties: [[CSSLOGICAL]](https://html.spec.whatwg.org/multipage/references.html#refsCSSLOGICAL)

* The [&#39;margin-block&#39;](https://drafts.csswg.org/css-logical/#propdef-margin-block), [&#39;margin-block-start&#39;](https://drafts.csswg.org/css-logical/#propdef-margin-block-start), [&#39;margin-block-end&#39;](https://drafts.csswg.org/css-logical/#propdef-margin-block-end), [&#39;margin-inline&#39;](https://drafts.csswg.org/css-logical/#propdef-margin-inline), [&#39;margin-inline-start&#39;](https://drafts.csswg.org/css-logical/#propdef-margin-inline-start), and [&#39;margin-inline-end&#39;](https://drafts.csswg.org/css-logical/#propdef-margin-inline-end) properties
* The [&#39;padding-block&#39;](https://drafts.csswg.org/css-logical/#propdef-padding-block), [&#39;padding-block-start&#39;](https://drafts.csswg.org/css-logical/#propdef-padding-block-start), [&#39;padding-block-end&#39;](https://drafts.csswg.org/css-logical/#propdef-padding-block-end), [&#39;padding-inline&#39;](https://drafts.csswg.org/css-logical/#propdef-padding-inline), [&#39;padding-inline-start&#39;](https://drafts.csswg.org/css-logical/#propdef-padding-inline-start), and [&#39;padding-inline-end&#39;](https://drafts.csswg.org/css-logical/#propdef-padding-inline-end) properties
* The [&#39;border-block-width&#39;](https://drafts.csswg.org/css-logical/#propdef-border-block-width), [&#39;border-block-start-width&#39;](https://drafts.csswg.org/css-logical/#propdef-border-block-start-width), [&#39;border-block-end-width&#39;](https://drafts.csswg.org/css-logical/#propdef-border-block-end-width), [&#39;border-inline-width&#39;](https://drafts.csswg.org/css-logical/#propdef-border-inline-width), [&#39;border-inline-start-width&#39;](https://drafts.csswg.org/css-logical/#propdef-border-inline-start-width), [&#39;border-inline-end-width&#39;](https://drafts.csswg.org/css-logical/#propdef-border-inline-end-width), [&#39;border-block-style&#39;](https://drafts.csswg.org/css-logical/#propdef-border-block-style), [&#39;border-block-start-style&#39;](https://drafts.csswg.org/css-logical/#propdef-border-block-start-style), [&#39;border-block-end-style&#39;](https://drafts.csswg.org/css-logical/#propdef-border-block-end-style), [&#39;border-inline-style&#39;](https://drafts.csswg.org/css-logical/#propdef-border-inline-style), [&#39;border-inline-start-style&#39;](https://drafts.csswg.org/css-logical/#propdef-border-inline-start-style), [&#39;border-inline-end-style&#39;](https://drafts.csswg.org/css-logical/#propdef-border-inline-end-style), [&#39;border-block-start-color&#39;](https://drafts.csswg.org/css-logical/#propdef-border-block-start-color), [&#39;border-block-end-color&#39;](https://drafts.csswg.org/css-logical/#propdef-border-block-end-color), [&#39;border-inline-start-color&#39;](https://drafts.csswg.org/css-logical/#propdef-border-inline-start-color), [&#39;border-inline-end-color&#39;](https://drafts.csswg.org/css-logical/#propdef-border-inline-end-color), [&#39;border-start-start-radius&#39;](https://drafts.csswg.org/css-logical/#propdef-border-start-start-radius), [&#39;border-start-end-radius&#39;](https://drafts.csswg.org/css-logical/#propdef-border-start-end-radius), [&#39;border-end-start-radius&#39;](https://drafts.csswg.org/css-logical/#propdef-border-end-start-radius), and [&#39;border-end-end-radius&#39;](https://drafts.csswg.org/css-logical/#propdef-border-end-end-radius) properties
* The [&#39;block-size&#39;](https://drafts.csswg.org/css-logical/#propdef-block-size) property
* The [&#39;inline-size&#39;](https://drafts.csswg.org/css-logical/#propdef-inline-size) property
* The [&#39;inset-block-start&#39;](https://drafts.csswg.org/css-logical/#propdef-inset-block-start) property
* The [&#39;inset-block-end&#39;](https://drafts.csswg.org/css-logical/#propdef-inset-block-end) property

The following terms and features are defined in CSS Color: [[CSSCOLOR]](https://html.spec.whatwg.org/multipage/references.html#refsCSSCOLOR)

* [named color](https://drafts.csswg.org/css-color/#named-color)
* [&lt;color&gt;](https://drafts.csswg.org/css-color/#typedef-color)
* The [&#39;color&#39;](https://drafts.csswg.org/css-color/#the-color-property) property
* The [&#39;currentcolor&#39;](https://drafts.csswg.org/css-color/#valdef-color-currentcolor) value
* [opaque black](https://drafts.csswg.org/css-color/#opaque-black)
* [transparent black](https://drafts.csswg.org/css-color/#transparent-black)
* [&#39;srgb&#39;](https://drafts.csswg.org/css-color/#valdef-color-srgb) color space
* [&#39;display-p3&#39;](https://drafts.csswg.org/css-color/#valdef-color-display-p3) color space
* [&#39;relative-colorimetric&#39;](https://drafts.csswg.org/css-color/#valdef-color-profile-rendering-intent-relative-colorimetric) rendering intent
* [parse a CSS &lt;color&gt; value](https://drafts.csswg.org/css-color/#parse-a-css-color-value)

The following terms are defined in CSS Images: [[CSSIMAGES]](https://html.spec.whatwg.org/multipage/references.html#refsCSSIMAGES)

* [default object size](https://drafts.csswg.org/css-images/#default-object-size)
* [concrete object size](https://drafts.csswg.org/css-images/#concrete-object-size)
* [natural dimensions](https://drafts.csswg.org/css-images/#natural-dimensions)
* [natural height](https://drafts.csswg.org/css-images/#natural-height)
* [natural width](https://drafts.csswg.org/css-images/#natural-width)
* The [&#39;image-orientation&#39;](https://drafts.csswg.org/css-images-3/#the-image-orientation) property
* [&#39;conic-gradient&#39;](https://drafts.csswg.org/css-images-4/#funcdef-conic-gradient)
* The [&#39;object-fit&#39;](https://drafts.csswg.org/css-images/#the-object-fit) property

The term [paint source](https://drafts.csswg.org/css-images-4/#paint-source) is used as defined in CSS Images Level 4 to define the interaction of certain HTML elements with the CSS 'element()' function. [[CSSIMAGES4]](https://html.spec.whatwg.org/multipage/references.html#refsCSSIMAGES4)

The following features are defined in CSS Backgrounds and Borders: [[CSSBG]](https://html.spec.whatwg.org/multipage/references.html#refsCSSBG)

* The [&#39;background-color&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-background-color), [&#39;background-image&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-background-image), [&#39;background-repeat&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-background-repeat), [&#39;background-attachment&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-background-attachment), [&#39;background-position&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-background-position), [&#39;background-clip&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-background-clip), [&#39;background-origin&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-background-origin), and [&#39;background-size&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-background-size) properties
* The [&#39;border-radius&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-radius), [&#39;border-top-left-radius&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-top-left-radius), [&#39;border-top-right-radius&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-top-right-radius), [&#39;border-bottom-right-radius&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-right-radius), [&#39;border-bottom-left-radius&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-left-radius) properties
* The [&#39;border-image-source&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-image-source), [&#39;border-image-slice&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-image-slice), [&#39;border-image-width&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-image-width), [&#39;border-image-outset&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-image-outset), and [&#39;border-image-repeat&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-image-repeat) properties

CSS Backgrounds and Borders also defines the following border properties: [[CSSBG]](https://html.spec.whatwg.org/multipage/references.html#refsCSSBG)

Border properties|                              | Top | Bottom | Left | Right |
| ------------------------------ | ----- | -------- | ------ | ------- |
| Width                        | [&#39;border-top-width&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-top-width) | [&#39;border-bottom-width&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-width) | [&#39;border-left-width&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-left-width) | [&#39;border-right-width&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-right-width) |
| Style                        | [&#39;border-top-style&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-top-style) | [&#39;border-bottom-style&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-style) | [&#39;border-left-style&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-left-style) | [&#39;border-right-style&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-right-style) |
| Color                        | [&#39;border-top-color&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-top-color) | [&#39;border-bottom-color&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-bottom-color) | [&#39;border-left-color&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-left-color) | [&#39;border-right-color&#39;](https://drafts.csswg.org/css-backgrounds/#propdef-border-right-color) |

The following features are defined in CSS Box Alignment: [[CSSALIGN]](https://html.spec.whatwg.org/multipage/references.html#refsCSSALIGN)

* The [&#39;align-content&#39;](https://drafts.csswg.org/css-align/#propdef-align-content) property
* The [&#39;align-items&#39;](https://drafts.csswg.org/css-align/#propdef-align-items) property
* The [&#39;align-self&#39;](https://drafts.csswg.org/css-align/#propdef-align-self) property
* The [&#39;justify-self&#39;](https://drafts.csswg.org/css-align/#propdef-justify-self) property
* The [&#39;justify-content&#39;](https://drafts.csswg.org/css-align/#propdef-propdef-justify-content) property
* The [&#39;justify-items&#39;](https://drafts.csswg.org/css-align/#propdef-propdef-justify-items) property

The following terms and features are defined in CSS Display: [[CSSDISPLAY]](https://html.spec.whatwg.org/multipage/references.html#refsCSSDISPLAY)

* [outer display type](https://drafts.csswg.org/css-display/#outer-display-type)
* [inner display type](https://drafts.csswg.org/css-display/#inner-display-type)
* [block-level](https://drafts.csswg.org/css-display/#block-level)
* [block container](https://drafts.csswg.org/css-display/#block-container)
* [formatting context](https://drafts.csswg.org/css-display/#formatting-context)
* [block formatting context](https://drafts.csswg.org/css-display/#block-formatting-context)
* [inline formatting context](https://drafts.csswg.org/css-display/#inline-formatting-context)
* [replaced element](https://drafts.csswg.org/css-display/#replaced-element)
* [CSS box](https://drafts.csswg.org/css-display/#css-box)

The following features are defined in CSS Flexible Box Layout: [[CSSFLEXBOX]](https://html.spec.whatwg.org/multipage/references.html#refsCSSFLEXBOX)

* The [&#39;flex-direction&#39;](https://drafts.csswg.org/css-flexbox/#propdef-flex-direction) property
* The [&#39;flex-wrap&#39;](https://drafts.csswg.org/css-flexbox/#propdef-flex-wrap) property

The following terms and features are defined in CSS Fonts: [[CSSFONTS]](https://html.spec.whatwg.org/multipage/references.html#refsCSSFONTS)

* [first available font](https://drafts.csswg.org/css-fonts/#first-available-font)
* The [&#39;font-family&#39;](https://drafts.csswg.org/css-fonts/#font-family-prop) property
* The [&#39;font-weight&#39;](https://drafts.csswg.org/css-fonts/#font-weight-prop) property
* The [&#39;font-size&#39;](https://drafts.csswg.org/css-fonts/#font-size-prop) property
* The [&#39;font&#39;](https://drafts.csswg.org/css-fonts/#font-prop) property
* The [&#39;font-kerning&#39;](https://drafts.csswg.org/css-fonts/#propdef-font-kerning) property
* The [&#39;font-stretch&#39;](https://drafts.csswg.org/css-fonts/#propdef-font-stretch) property
* The [&#39;font-variant-caps&#39;](https://drafts.csswg.org/css-fonts/#propdef-font-variant-caps) property
* The [&#39;small-caps&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-variant-caps-small-caps) value
* The [&#39;all-small-caps&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-variant-caps-all-small-caps) value
* The [&#39;petite-caps&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-variant-caps-petite-caps) value
* The [&#39;all-petite-caps&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-variant-caps-all-petite-caps) value
* The [&#39;unicase&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-variant-caps-unicase) value
* The [&#39;titling-caps&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-variant-caps-titling-caps) value
* The [&#39;ultra-condensed&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-stretch-ultra-condensed) value
* The [&#39;extra-condensed&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-stretch-extra-condensed) value
* The [&#39;condensed&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-stretch-condensed) value
* The [&#39;semi-condensed&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-stretch-semi-condensed) value
* The [&#39;semi-expanded&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-stretch-semi-expanded) value
* The [&#39;expanded&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-stretch-expanded) value
* The [&#39;extra-expanded&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-stretch-extra-expanded) value
* The [&#39;ultra-expanded&#39;](https://drafts.csswg.org/css-fonts/#valdef-font-stretch-ultra-expanded) value

The following features are defined in CSS Grid Layout: [[CSSGRID]](https://html.spec.whatwg.org/multipage/references.html#refsCSSGRID)

* The [&#39;grid-auto-columns&#39;](https://drafts.csswg.org/css-grid/#propdef-grid-auto-columns) property
* The [&#39;grid-auto-flow&#39;](https://drafts.csswg.org/css-grid/#propdef-grid-auto-flow) property
* The [&#39;grid-auto-rows&#39;](https://drafts.csswg.org/css-grid/#propdef-grid-auto-rows) property
* The [&#39;grid-column-gap&#39;](https://drafts.csswg.org/css-grid/#propdef-grid-column-gap) property
* The [&#39;grid-row-gap&#39;](https://drafts.csswg.org/css-grid/#propdef-grid-row-gap) property
* The [&#39;grid-template-areas&#39;](https://drafts.csswg.org/css-grid/#propdef-grid-template-areas) property
* The [&#39;grid-template-columns&#39;](https://drafts.csswg.org/css-grid/#propdef-grid-template-columns) property
* The [&#39;grid-template-rows&#39;](https://drafts.csswg.org/css-grid/#propdef-grid-template-rows) property

The following terms are defined in CSS Inline Layout: [[CSSINLINE]](https://html.spec.whatwg.org/multipage/references.html#refsCSSINLINE)

* [alphabetic baseline](https://drafts.csswg.org/css-inline/#alphabetic-baseline)
* [ascent metric](https://drafts.csswg.org/css-inline/#ascent-metric)
* [descent metric](https://drafts.csswg.org/css-inline/#descent-metric)
* [hanging baseline](https://drafts.csswg.org/css-inline/#hanging-baseline)
* [ideographic-under baseline](https://drafts.csswg.org/css-inline/#ideographic-under-baseline)

The following terms and features are defined in CSS Box Sizing: [[CSSSIZING]](https://html.spec.whatwg.org/multipage/references.html#refsCSSSIZING)

* [fit-content inline size](https://drafts.csswg.org/css-sizing/#fit-content-inline-size)
* [&#39;aspect-ratio&#39;](https://drafts.csswg.org/css-sizing-4/#aspect-ratio) property
* [intrinsic size](https://drafts.csswg.org/css-sizing/#intrinsic-size)

The following features are defined in CSS Lists and Counters. [[CSSLISTS]](https://html.spec.whatwg.org/multipage/references.html#refsCSSLISTS)

* [list item](https://drafts.csswg.org/css-lists/#list-item)
* The [&#39;counter-reset&#39;](https://drafts.csswg.org/css-lists/#propdef-counter-reset) property
* The [&#39;counter-set&#39;](https://drafts.csswg.org/css-lists/#propdef-counter-set) property
* The [&#39;list-style-type&#39;](https://drafts.csswg.org/css-lists/#propdef-list-style-type) property

The following features are defined in CSS Overflow. [[CSSOVERFLOW]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOVERFLOW)

* The [&#39;overflow&#39;](https://drafts.csswg.org/css-overflow/#propdef-overflow) property and its [&#39;hidden&#39;](https://drafts.csswg.org/css-overflow/#valdef-overflow-hidden) value
* The [&#39;text-overflow&#39;](https://drafts.csswg.org/css-overflow/#propdef-text-overflow) property
* The term [scroll container](https://drafts.csswg.org/css-overflow/#scroll-container)

The following terms and features are defined in CSS Positioned Layout: [[CSSPOSITION]](https://html.spec.whatwg.org/multipage/references.html#refsCSSPOSITION)

* [absolutely-positioned](https://drafts.csswg.org/css-position/#absolute-position)
* The [&#39;position&#39;](https://drafts.csswg.org/css-position/#position-property) property and its [&#39;static&#39;](https://drafts.csswg.org/css-position/#valdef-position-static) value
* The [top layer](https://drafts.csswg.org/css-position-4/#document-top-layer) (an [ordered set](https://infra.spec.whatwg.org/#ordered-set))
* [add an element to the top layer](https://drafts.csswg.org/css-position-4/#add-an-element-to-the-top-layer)
* [request an element to be removed from the top layer](https://drafts.csswg.org/css-position-4/#request-an-element-to-be-removed-from-the-top-layer)
* [remove an element from the top layer immediately](https://drafts.csswg.org/css-position-4/#remove-an-element-from-the-top-layer-immediately)
* [process top layer removals](https://drafts.csswg.org/css-position-4/#process-top-layer-removals)

The following features are defined in CSS Multi-column Layout. [[CSSMULTICOL]](https://html.spec.whatwg.org/multipage/references.html#refsCSSMULTICOL)

* The [&#39;column-count&#39;](https://drafts.csswg.org/css-multicol/#propdef-column-count) property
* The [&#39;column-fill&#39;](https://drafts.csswg.org/css-multicol/#propdef-column-fill) property
* The [&#39;column-gap&#39;](https://drafts.csswg.org/css-multicol/#propdef-column-gap) property
* The [&#39;column-rule&#39;](https://drafts.csswg.org/css-multicol/#propdef-column-rule) property
* The [&#39;column-width&#39;](https://drafts.csswg.org/css-multicol/#propdef-column-width) property

The [&#39;ruby-base&#39;](https://drafts.csswg.org/css-ruby/#valdef-display-ruby-base) value of the [&#39;display&#39;](https://drafts.csswg.org/css2/#display-prop) property is defined in CSS Ruby Layout. [[CSSRUBY]](https://html.spec.whatwg.org/multipage/references.html#refsCSSRUBY)

The following features are defined in CSS Table: [[CSSTABLE]](https://html.spec.whatwg.org/multipage/references.html#refsCSSTABLE)

* The [&#39;border-spacing&#39;](https://drafts.csswg.org/css-tables/#propdef-border-spacing) property
* The [&#39;border-collapse&#39;](https://drafts.csswg.org/css-tables/#border-collapse-property) property
* The [&#39;table-cell&#39;](https://drafts.csswg.org/css-tables/#table-cell), [&#39;table-row&#39;](https://drafts.csswg.org/css-tables/#table-row), [&#39;table-caption&#39;](https://drafts.csswg.org/css-tables/#table-caption), and [&#39;table&#39;](https://drafts.csswg.org/css-tables/#table) values of the [&#39;display&#39;](https://drafts.csswg.org/css2/#display-prop) property

The following features are defined in CSS Text: [[CSSTEXT]](https://html.spec.whatwg.org/multipage/references.html#refsCSSTEXT)

* The [&#39;text-transform&#39;](https://drafts.csswg.org/css-text/#text-transform-property) property
* The [&#39;white-space&#39;](https://drafts.csswg.org/css-text/#white-space-property) property
* The [&#39;text-align&#39;](https://drafts.csswg.org/css-text/#text-align-property) property
* The [&#39;letter-spacing&#39;](https://drafts.csswg.org/css-text/#letter-spacing-property) property
* The [&#39;word-spacing&#39;](https://drafts.csswg.org/css-text/#propdef-word-spacing) property

The following features are defined in CSS Writing Modes: [[CSSWM]](https://html.spec.whatwg.org/multipage/references.html#refsCSSWM)

* The [&#39;direction&#39;](https://drafts.csswg.org/css-writing-modes/#direction) property
* The [&#39;unicode-bidi&#39;](https://drafts.csswg.org/css-writing-modes/#unicode-bidi) property
* The [&#39;writing-mode&#39;](https://drafts.csswg.org/css-writing-modes/#propdef-writing-mode) property
* The [block flow direction](https://drafts.csswg.org/css-writing-modes/#block-flow-direction), [block axis](https://drafts.csswg.org/css-writing-modes/#block-axis), [inline axis](https://drafts.csswg.org/css-writing-modes/#inline-axis), [block size](https://drafts.csswg.org/css-writing-modes/#block-size), [inline size](https://drafts.csswg.org/css-writing-modes/#inline-size), [block-start](https://drafts.csswg.org/css-writing-modes/#block-start), [block-end](https://drafts.csswg.org/css-writing-modes/#block-end), [inline-start](https://drafts.csswg.org/css-writing-modes/#inline-start), [inline-end](https://drafts.csswg.org/css-writing-modes/#inline-end), [line-left](https://drafts.csswg.org/css-writing-modes/#line-left), and [line-right](https://drafts.csswg.org/css-writing-modes/#line-right) concepts

The following features are defined in CSS Basic User Interface: [[CSSUI]](https://html.spec.whatwg.org/multipage/references.html#refsCSSUI)

* The [&#39;outline&#39;](https://drafts.csswg.org/css-ui/#outline) property
* The [&#39;cursor&#39;](https://drafts.csswg.org/css-ui/#cursor) property
* The [&#39;appearance&#39;](https://drafts.csswg.org/css-ui/#appearance-switching) property, its [&lt;compat-auto&gt;](https://drafts.csswg.org/css-ui/#typedef-appearance-compat-auto) non-terminal value type, its [&#39;textfield&#39;](https://drafts.csswg.org/css-ui/#valdef-appearance-textfield) value, and its [&#39;menulist-button&#39;](https://drafts.csswg.org/css-ui/#valdef-appearance-menulist-button) value.
* The [&#39;field-sizing&#39;](https://drafts.csswg.org/css-ui/#field-sizing) property, and its [&#39;content&#39;](https://drafts.csswg.org/css-ui/#valdef-field-sizing-content) value.
* The concept [widget](https://drafts.csswg.org/css-ui/#widget)
* The concept [native appearance](https://drafts.csswg.org/css-ui/#native-appearance)
* The concept [primitive appearance](https://drafts.csswg.org/css-ui/#primitive-appearance)
* The concept [element with default preferred size](https://drafts.csswg.org/css-ui/#element-with-default-preferred-size)
* The [non-devolvable widget](https://drafts.csswg.org/css-ui/#non-devolvable) and [devolvable widget](https://drafts.csswg.org/css-ui/#devolvable) classification, and the related [devolved widget](https://drafts.csswg.org/css-ui/#devolved) state.
* The [&#39;pointer-events&#39;](https://drafts.csswg.org/css-ui-4/#pointer-events-control) property
* The [&#39;user-select&#39;](https://drafts.csswg.org/css-ui-4/#content-selection) property

The algorithm to [update animations and send events](https://drafts.csswg.org/web-animations-1/#update-animations-and-send-events) is defined in Web Animations. [[WEBANIMATIONS]](https://html.spec.whatwg.org/multipage/references.html#refsWEBANIMATIONS)

Implementations that support scripting must support the CSS Object Model. The following features and terms are defined in the CSSOM specifications: [[CSSOM]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOM) [[CSSOMVIEW]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOMVIEW)

* [`Screen`](https://drafts.csswg.org/cssom-view/#the-screen-interface) interface
* [`LinkStyle`](https://drafts.csswg.org/cssom/#the-linkstyle-interface) interface
* [`CSSStyleDeclaration`](https://drafts.csswg.org/cssom/#the-cssstyledeclaration-interface) interface
* [`style`](https://drafts.csswg.org/cssom/#dom-elementcssinlinestyle-style) IDL attribute
* [`cssText`](https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-csstext) attribute of `<a data-x-internal="cssstyledeclaration" href="https://drafts.csswg.org/cssom/#the-cssstyledeclaration-interface">CSSStyleDeclaration</a>`
* [`StyleSheet`](https://drafts.csswg.org/cssom/#the-stylesheet-interface) interface
* [`CSSStyleSheet`](https://drafts.csswg.org/cssom/#the-cssstylesheet-interface) interface
* [create a CSS style sheet](https://drafts.csswg.org/cssom/#create-a-css-style-sheet)
* [remove a CSS style sheet](https://drafts.csswg.org/cssom/#remove-a-css-style-sheet)
* [associated CSS style sheet](https://drafts.csswg.org/cssom/#associated-css-style-sheet)
* [create a constructed `CSSStyleSheet`](https://drafts.csswg.org/cssom/#create-a-constructed-cssstylesheet)
* [synchronously replace the rules of a `CSSStyleSheet`](https://drafts.csswg.org/cssom/#synchronously-replace-the-rules-of-a-cssstylesheet)
* [disable a CSS style sheet](https://drafts.csswg.org/cssom/#disable-a-css-style-sheet)
* [CSS style sheets](https://drafts.csswg.org/cssom/#css-style-sheet) and their properties:
  * [type](https://drafts.csswg.org/cssom/#concept-css-style-sheet-type)
  * [location](https://drafts.csswg.org/cssom/#concept-css-style-sheet-location)
  * [parent CSS style sheet](https://drafts.csswg.org/cssom/#concept-css-style-sheet-parent-css-style-sheet)
  * [owner node](https://drafts.csswg.org/cssom/#concept-css-style-sheet-owner-node)
  * [owner CSS rule](https://drafts.csswg.org/cssom/#concept-css-style-sheet-owner-css-rule)
  * [media](https://drafts.csswg.org/cssom/#concept-css-style-sheet-media)
  * [title](https://drafts.csswg.org/cssom/#concept-css-style-sheet-title)
  * [alternate flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-alternate-flag)
  * [disabled flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-disabled-flag)
  * [CSS rules](https://drafts.csswg.org/cssom/#concept-css-style-sheet-css-rules)
  * [origin-clean flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-origin-clean-flag)
* [CSS style sheet set](https://drafts.csswg.org/cssom/#css-style-sheet-set)
* [CSS style sheet set name](https://drafts.csswg.org/cssom/#css-style-sheet-set-name)
* [preferred CSS style sheet set name](https://drafts.csswg.org/cssom/#preferred-css-style-sheet-set-name)
* [change the preferred CSS style sheet set name](https://drafts.csswg.org/cssom/#change-the-preferred-css-style-sheet-set-name)
* [Serializing a CSS value](https://drafts.csswg.org/cssom/#serialize-a-css-value)
* [run the resize steps](https://drafts.csswg.org/cssom-view/#document-run-the-resize-steps)
* [run the scroll steps](https://drafts.csswg.org/cssom-view/#document-run-the-scroll-steps)
* [evaluate media queries and report changes](https://drafts.csswg.org/cssom-view/#evaluate-media-queries-and-report-changes)
* [Scroll a target into view](https://drafts.csswg.org/cssom-view/#scroll-a-target-into-view)
* [Scroll to the beginning of the document](https://drafts.csswg.org/cssom-view/#scroll-to-the-beginning-of-the-document)
* The [`resize`](https://drafts.csswg.org/cssom-view/#eventdef-window-resize) event
* The [`scroll`](https://drafts.csswg.org/cssom-view/#eventdef-document-scroll) event
* The [`scrollend`](https://drafts.csswg.org/cssom-view/#eventdef-document-scrollend) event
* [set up browsing context features](https://drafts.csswg.org/cssom-view/#set-up-browsing-context-features)

The following features and terms are defined in CSS Syntax: [[CSSSYNTAX]](https://html.spec.whatwg.org/multipage/references.html#refsCSSSYNTAX)

* [conformant style sheet](https://drafts.csswg.org/css-syntax/#conform-classes)
* [parse a list of component values](https://drafts.csswg.org/css-syntax/#parse-a-list-of-component-values)
* [parse a comma-separated list of component values](https://drafts.csswg.org/css-syntax/#parse-a-comma-separated-list-of-component-values)
* [component value](https://drafts.csswg.org/css-syntax/#component-value)
* [environment encoding](https://drafts.csswg.org/css-syntax/#environment-encoding)
* [&lt;whitespace-token&gt;](https://drafts.csswg.org/css-syntax/#typedef-whitespace-token)

The following terms are defined in Selectors: [[SELECTORS]](https://html.spec.whatwg.org/multipage/references.html#refsSELECTORS)

* [type selector](https://drafts.csswg.org/selectors/#type-selector)
* [attribute selector](https://drafts.csswg.org/selectors/#attribute-selector)
* [pseudo-class](https://drafts.csswg.org/selectors/#pseudo-class)
* [`:focus-visible`](https://drafts.csswg.org/selectors/#the-focus-visible-pseudo) pseudo-class
* [indicate focus](https://drafts.csswg.org/selectors/#indicate-focus)
* [pseudo-element](https://drafts.csswg.org/selectors/#pseudo-element)

The following features are defined in CSS Values and Units: [[CSSVALUES]](https://html.spec.whatwg.org/multipage/references.html#refsCSSVALUES)

* [&lt;length&gt;](https://drafts.csswg.org/css-values/#lengths)
* The [&#39;em&#39;](https://drafts.csswg.org/css-values/#em) unit
* The [&#39;ex&#39;](https://drafts.csswg.org/css-values/#ex) unit
* The [&#39;vw&#39;](https://drafts.csswg.org/css-values/#vw) unit
* The [&#39;in&#39;](https://drafts.csswg.org/css-values/#in) unit
* The [&#39;px&#39;](https://drafts.csswg.org/css-values/#px) unit
* The [&#39;pt&#39;](https://drafts.csswg.org/css-values/#pt) unit
* The [&#39;attr()&#39;](https://drafts.csswg.org/css-values/#funcdef-attr) function
* The [math functions](https://drafts.csswg.org/css-values/#math-function)

The following features are defined in CSS View Transitions: [[CSSVIEWTRANSITIONS]](https://html.spec.whatwg.org/multipage/references.html#refsCSSVIEWTRANSITIONS)

* [perform pending transition operations](https://drafts.csswg.org/css-view-transitions/#perform-pending-transition-operations)
* [rendering suppression for view transitions](https://drafts.csswg.org/css-view-transitions/#document-rendering-suppression-for-view-transitions)
* [activate view transition](https://drafts.csswg.org/css-view-transitions/#activate-view-transition)
* [`ViewTransition`](https://drafts.csswg.org/css-view-transitions/#viewtransition)
* [view transition page visibility change steps](https://drafts.csswg.org/css-view-transitions/#view-transition-page-visibility-change-steps)
* [resolving inbound cross-document view-transition](https://drafts.csswg.org/css-view-transitions-2/#resolve-inbound-cross-document-view-transition)
* [setting up a cross-document view-transition](https://drafts.csswg.org/css-view-transitions-2/#setup-cross-document-view-transition)
* [can navigation trigger a cross-document view-transition?](https://drafts.csswg.org/css-view-transitions-2/#can-navigation-trigger-a-cross-document-view-transition)

The term [style attribute](https://drafts.csswg.org/css-style-attr/#style-attribute) is defined in CSS Style Attributes. [[CSSATTR]](https://html.spec.whatwg.org/multipage/references.html#refsCSSATTR)

The following terms are defined in the CSS Cascading and Inheritance: [[CSSCASCADE]](https://html.spec.whatwg.org/multipage/references.html#refsCSSCASCADE)

* [cascaded value](https://drafts.csswg.org/css-cascade/#cascaded-value)
* [specified value](https://drafts.csswg.org/css-cascade/#specified-value)
* [computed value](https://drafts.csswg.org/css-cascade/#computed-value)
* [used value](https://drafts.csswg.org/css-cascade/#used-value)
* [cascade origin](https://drafts.csswg.org/css-cascade/#origin)
* [Author Origin](https://drafts.csswg.org/css-cascade/#cascade-origin-author)
* [User Origin](https://drafts.csswg.org/css-cascade/#cascade-origin-user)
* [User Agent Origin](https://drafts.csswg.org/css-cascade/#cascade-origin-ua)
* [Animation Origin](https://drafts.csswg.org/css-cascade/#cascade-origin-animation)
* [Transition Origin](https://drafts.csswg.org/css-cascade/#cascade-origin-transition)
* [initial value](https://drafts.csswg.org/css-cascade/#initial-value)

The `<a href="https://html.spec.whatwg.org/multipage/canvas.html#canvasrenderingcontext2d">CanvasRenderingContext2D</a>` object's use of fonts depends on the features described in the CSS Fonts and Font Loading specifications, including in particular `FontFace` objects and the [font source](https://drafts.csswg.org/css-font-loading/#font-source) concept. [[CSSFONTS]](https://html.spec.whatwg.org/multipage/references.html#refsCSSFONTS) [[CSSFONTLOAD]](https://html.spec.whatwg.org/multipage/references.html#refsCSSFONTLOAD)

The following interfaces and terms are defined in Geometry Interfaces: [[GEOMETRY]](https://html.spec.whatwg.org/multipage/references.html#refsGEOMETRY)

* [`DOMMatrix`](https://drafts.fxtf.org/geometry/#dommatrix) interface, and associated [m11 element](https://drafts.fxtf.org/geometry/#matrix-m11-element), [m12 element](https://drafts.fxtf.org/geometry/#matrix-m12-element), [m21 element](https://drafts.fxtf.org/geometry/#matrix-m21-element), [m22 element](https://drafts.fxtf.org/geometry/#matrix-m22-element), [m41 element](https://drafts.fxtf.org/geometry/#matrix-m41-element), and [m42 element](https://drafts.fxtf.org/geometry/#matrix-m42-element)
* [`DOMMatrix2DInit`](https://drafts.fxtf.org/geometry/#dictdef-dommatrix2dinit) and [`DOMMatrixInit`](https://drafts.fxtf.org/geometry/#dictdef-dommatrixinit) dictionaries
* The [create a `DOMMatrix` from a dictionary](https://drafts.fxtf.org/geometry/#create-a-dommatrix-from-the-dictionary) and [create a `DOMMatrix` from a 2D dictionary](https://drafts.fxtf.org/geometry/#create-a-dommatrix-from-the-2d-dictionary) algorithms for `<a data-x-internal="dommatrix2dinit" href="https://drafts.fxtf.org/geometry/#dictdef-dommatrix2dinit">DOMMatrix2DInit</a>` or `<a data-x-internal="dommatrixinit" href="https://drafts.fxtf.org/geometry/#dictdef-dommatrixinit">DOMMatrixInit</a>`
* The [`DOMPointInit`](https://drafts.fxtf.org/geometry/#dictdef-dompointinit) dictionary, and associated x and y members
* [Matrix multiplication](https://drafts.fxtf.org/geometry/#matrix-multiply)

The following terms are defined in the CSS Scoping: [[CSSSCOPING]](https://html.spec.whatwg.org/multipage/references.html#refsCSSSCOPING)

* [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree)

The following terms and features are defined in CSS Color Adjustment: [[CSSCOLORADJUST]](https://html.spec.whatwg.org/multipage/references.html#refsCSSCOLORADJUST)

* [&#39;color-scheme&#39;](https://drafts.csswg.org/css-color-adjust/#color-scheme-prop)
* [page&#39;s supported color-schemes](https://drafts.csswg.org/css-color-adjust/#pages-supported-color-schemes)

The following terms are defined in CSS Pseudo-Elements: [[CSSPSEUDO]](https://html.spec.whatwg.org/multipage/references.html#refsCSSPSEUDO)

* [&#39;::details-content&#39;](https://drafts.csswg.org/css-pseudo/#details-content-pseudo)
* [&#39;::file-selector-button&#39;](https://drafts.csswg.org/css-pseudo/#file-selector-button-pseudo)

The following terms are defined in CSS Containment: [[CSSCONTAIN]](https://html.spec.whatwg.org/multipage/references.html#refsCSSCONTAIN)

* [skips its contents](https://drafts.csswg.org/css-contain/#skips-its-contents)
* [relevant to the user](https://drafts.csswg.org/css-contain/#relevant-to-the-user)
* [proximity to the viewport](https://drafts.csswg.org/css-contain/#proximity-to-the-viewport)
* [layout containment](https://drafts.csswg.org/css-contain/#containment-layout)
* [&#39;content-visibility&#39;](https://drafts.csswg.org/css-contain/#content-visibility) property
* [&#39;auto&#39;](https://drafts.csswg.org/css-contain/#propdef-content-visibility) value for [&#39;content-visibility&#39;](https://drafts.csswg.org/css-contain/#content-visibility)

Intersection ObserverThe following term is defined in Intersection Observer: [[INTERSECTIONOBSERVER]](https://html.spec.whatwg.org/multipage/references.html#refsINTERSECTIONOBSERVER)

* [run the update intersection observations steps](https://w3c.github.io/IntersectionObserver/#run-the-update-intersection-observations-steps)
* [`IntersectionObserver`](https://w3c.github.io/IntersectionObserver/#intersectionobserver)
* [`IntersectionObserverInit`](https://w3c.github.io/IntersectionObserver/#dictdef-intersectionobserverinit)
* [`observe`](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-observe)
* [`unobserve`](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-unobserve)
* [`isIntersecting`](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-isintersecting)
* [`target`](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-target)

Resize ObserverThe following terms are defined in Resize Observer: [[RESIZEOBSERVER]](https://html.spec.whatwg.org/multipage/references.html#refsRESIZEOBSERVER)

* [gather active resize observations at depth](https://w3c.github.io/csswg-drafts/resize-observer-1/#gather-active-observations-h)
* [has active resize observations](https://w3c.github.io/csswg-drafts/resize-observer-1/#has-active-observations-h)
* [has skipped resize observations](https://w3c.github.io/csswg-drafts/resize-observer-1/#has-skipped-observations-h)
* [broadcast active resize observations](https://w3c.github.io/csswg-drafts/resize-observer-1/#broadcast-resize-notifications-h)
* [deliver resize loop error](https://w3c.github.io/csswg-drafts/resize-observer-1/#deliver-resize-error)

WebGLThe following interfaces are defined in the WebGL specifications: [[WEBGL]](https://html.spec.whatwg.org/multipage/references.html#refsWEBGL)

* [`WebGLRenderingContext`](https://www.khronos.org/registry/webgl/specs/latest/1.0/#WebGLRenderingContext) interface
* [`WebGL2RenderingContext`](https://www.khronos.org/registry/webgl/specs/latest/2.0/#WebGL2RenderingContext) interface
* [`WebGLContextAttributes`](https://www.khronos.org/registry/webgl/specs/latest/1.0/#WebGLContextAttributes) dictionary

WebGPUThe following interfaces are defined in WebGPU: [[WEBGPU]](https://html.spec.whatwg.org/multipage/references.html#refsWEBGPU)

* [`GPUCanvasContext`](https://gpuweb.github.io/gpuweb/#canvas-context) interface

WebVTTImplementations may support WebVTT as a text track format for subtitles, captions, metadata, etc., for media resources. [[WEBVTT]](https://html.spec.whatwg.org/multipage/references.html#refsWEBVTT)

The following terms, used in this specification, are defined in WebVTT:

* [WebVTT file](https://w3c.github.io/webvtt/#webvtt-file)
* [WebVTT file using cue text](https://w3c.github.io/webvtt/#webvtt-file-using-cue-text)
* [WebVTT file using only nested cues](https://w3c.github.io/webvtt/#webvtt-file-using-only-nested-cues)
* [WebVTT parser](https://w3c.github.io/webvtt/#webvtt-parser)
* The [rules for updating the display of WebVTT text tracks](https://w3c.github.io/webvtt/#rules-for-updating-the-display-of-webvtt-text-tracks)
* The WebVTT [text track cue writing direction](https://w3c.github.io/webvtt/#webvtt-cue-writing-direction)
* [`VTTCue`](https://w3c.github.io/webvtt/#vttcue) interface

ARIAThe `role` attribute is defined in Accessible Rich Internet Applications (ARIA), as are the following roles: [[ARIA]](https://html.spec.whatwg.org/multipage/references.html#refsARIA)

* [`button`](https://w3c.github.io/aria/#button)
* [`presentation`](https://w3c.github.io/aria/#presentation)

In addition, the following `aria-*` content attributes are defined in ARIA: [[ARIA]](https://html.spec.whatwg.org/multipage/references.html#refsARIA)

* [`aria-checked`](https://w3c.github.io/aria/#aria-checked)
* [`aria-describedby`](https://w3c.github.io/aria/#aria-describedby)
* [`aria-disabled`](https://w3c.github.io/aria/#aria-disabled)
* [`aria-label`](https://w3c.github.io/aria/#aria-label)

Finally, the following terms are defined ARIA: [[ARIA]](https://html.spec.whatwg.org/multipage/references.html#refsARIA)

* [role](https://w3c.github.io/aria/#dfn-role)
* [accessible name](https://w3c.github.io/aria/#dfn-accessible-name)
* The [`ARIAMixin`](https://w3c.github.io/aria/#ARIAMixin) interface, with its associated [`ARIAMixin` getter steps](https://w3c.github.io/aria/#dfn-ariamixin-getter-steps) and [`ARIAMixin` setter steps](https://w3c.github.io/aria/#dfn-ariamixin-setter-steps) hooks

Content Security PolicyThe following terms are defined in Content Security Policy: [[CSP]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)

* [Content Security Policy](https://w3c.github.io/webappsec-csp/#content-security-policy-object)
* [disposition](https://w3c.github.io/webappsec-csp/#policy-disposition)
* [directive set](https://w3c.github.io/webappsec-csp/#policy-directive-set)
* [Content Security Policy directive](https://w3c.github.io/webappsec-csp/#directives)
* [CSP list](https://w3c.github.io/webappsec-csp/#csp-list)
* The [Content Security Policy syntax](https://w3c.github.io/webappsec-csp/#grammardef-serialized-policy)
* [enforce the policy](https://w3c.github.io/webappsec-csp/#enforced)
* The [parse a serialized Content Security Policy](https://w3c.github.io/webappsec-csp/#parse-serialized-policy) algorithm
* The [Run CSP initialization for a Document](https://w3c.github.io/webappsec-csp/#run-document-csp-initialization) algorithm
* The [Run CSP initialization for a global object](https://w3c.github.io/webappsec-csp/#run-global-object-csp-initialization) algorithm
* The [Should element&#39;s inline behavior be blocked by Content Security Policy?](https://w3c.github.io/webappsec-csp/#should-block-inline) algorithm
* The [Should navigation request of type be blocked by Content Security Policy?](https://w3c.github.io/webappsec-csp/#should-block-navigation-request) algorithm
* The [Should navigation response to navigation request of type in target be blocked by Content Security Policy?](https://w3c.github.io/webappsec-csp/#should-block-navigation-response) algorithm
* The [`report-uri` directive](https://w3c.github.io/webappsec-csp/#report-uri)
* The [EnsureCSPDoesNotBlockStringCompilation](https://w3c.github.io/webappsec-csp/#can-compile-strings) abstract operation
* The [Is base allowed for Document?](https://w3c.github.io/webappsec-csp/#allow-base-for-document) algorithm
* The [`frame-ancestors` directive](https://w3c.github.io/webappsec-csp/#frame-ancestors)
* The [`sandbox` directive](https://w3c.github.io/webappsec-csp/#sandbox)
* The [contains a header-delivered Content Security Policy](https://w3c.github.io/webappsec-csp/#contains-a-header-delivered-content-security-policy) property.
* The [Parse a response&#39;s Content Security Policies](https://w3c.github.io/webappsec-csp/#parse-response-csp) algorithm.
* [`SecurityPolicyViolationEvent`](https://w3c.github.io/webappsec-csp/#securitypolicyviolationevent) interface
* The [`securitypolicyviolation`](https://w3c.github.io/webappsec-csp/#eventdef-globaleventhandlers-securitypolicyviolation) event

Service WorkersThe following terms are defined in Service Workers: [[SW]](https://html.spec.whatwg.org/multipage/references.html#refsSW)

* [active worker](https://w3c.github.io/ServiceWorker/#dfn-active-worker)
* [client message queue](https://w3c.github.io/ServiceWorker/#dfn-client-message-queue)
* [control](https://w3c.github.io/ServiceWorker/#dfn-control)
* [handle fetch](https://w3c.github.io/ServiceWorker/#on-fetch-request-algorithm)
* [match service worker registration](https://w3c.github.io/ServiceWorker/#scope-match-algorithm)
* [service worker](https://w3c.github.io/ServiceWorker/#dfn-service-worker)
* [service worker client](https://w3c.github.io/ServiceWorker/#serviceworkercontainer-service-worker-client)
* [`ServiceWorker`](https://w3c.github.io/ServiceWorker/#serviceworker) interface
* [`ServiceWorkerContainer`](https://w3c.github.io/ServiceWorker/#serviceworkercontainer) interface
* [`ServiceWorkerGlobalScope`](https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope) interface

Secure ContextsThe following algorithms are defined in Secure Contexts: [[SECURE-CONTEXTS]](https://html.spec.whatwg.org/multipage/references.html#refsSECURE-CONTEXTS)

* [Is url potentially trustworthy?](https://w3c.github.io/webappsec-secure-contexts/#potentially-trustworthy-url)

Permissions PolicyThe following terms are defined in Permissions Policy: [[PERMISSIONSPOLICY]](https://html.spec.whatwg.org/multipage/references.html#refsPERMISSIONSPOLICY)

* [permissions policy](https://w3c.github.io/webappsec-feature-policy/#permissions-policy)
* [policy-controlled feature](https://w3c.github.io/webappsec-feature-policy/#policy-controlled-feature)
* [container policy](https://w3c.github.io/webappsec-feature-policy/#container-policy)
* [serialized permissions policy](https://w3c.github.io/webappsec-feature-policy/#serialized-permissions-policy)
* [default allowlist](https://w3c.github.io/webappsec-feature-policy/#default-allowlist)
* The [creating a permissions policy](https://w3c.github.io/webappsec-feature-policy/#create-for-navigable) algorithm
* The [creating a permissions policy from a response](https://w3c.github.io/webappsec-feature-policy/#create-from-response) algorithm
* The [is feature enabled by policy for origin](https://w3c.github.io/webappsec-feature-policy/#is-feature-enabled) algorithm
* The [process permissions policy attributes](https://w3c.github.io/webappsec-feature-policy/#process-permissions-policy-attributes) algorithm

Payment Request APIThe following feature is defined in Payment Request API: [[PAYMENTREQUEST]](https://html.spec.whatwg.org/multipage/references.html#refsPAYMENTREQUEST)

* [`PaymentRequest`](https://w3c.github.io/payment-request/#dom-paymentrequest) interface

MathMLWhile support for MathML as a whole is not required by this specification (though it is encouraged, at least for web browsers), certain features depend upon small parts of MathML being implemented. [[MATHML]](https://html.spec.whatwg.org/multipage/references.html#refsMATHML)

The following features are defined in Mathematical Markup Language (MathML):

* [MathML `annotation-xml`](https://w3c.github.io/mathml-core/#dfn-annotation-xml) element
* [MathML `math`](https://w3c.github.io/mathml-core/#the-top-level-math-element) element
* [MathML `merror`](https://w3c.github.io/mathml-core/#error-message-merror) element
* [MathML `mi`](https://w3c.github.io/mathml-core/#the-mi-element) element
* [MathML `mn`](https://w3c.github.io/mathml-core/#number-mn) element
* [MathML `mo`](https://w3c.github.io/mathml-core/#operator-fence-separator-or-accent-mo) element
* [MathML `ms`](https://w3c.github.io/mathml-core/#string-literal-ms) element
* [MathML `mtext`](https://w3c.github.io/mathml-core/#text-mtext) element

SVGWhile support for SVG as a whole is not required by this specification (though it is encouraged, at least for web browsers), certain features depend upon parts of SVG being implemented.

User agents that implement SVG must implement the SVG 2 specification, and not any earlier revisions.

The following features are defined in the SVG 2 specification: [[SVG]](https://html.spec.whatwg.org/multipage/references.html#refsSVG)

* [`SVGElement`](https://svgwg.org/svg2-draft/types.html#InterfaceSVGElement) interface
* [`SVGImageElement`](https://svgwg.org/svg2-draft/embedded.html#InterfaceSVGImageElement) interface
* [`SVGScriptElement`](https://svgwg.org/svg2-draft/interact.html#InterfaceSVGScriptElement) interface
* [`SVGSVGElement`](https://svgwg.org/svg2-draft/struct.html#InterfaceSVGSVGElement) interface
* [SVG `a`](https://svgwg.org/svg2-draft/linking.html#AElement) element
* [SVG `desc`](https://svgwg.org/svg2-draft/struct.html#DescElement) element
* [SVG `foreignObject`](https://svgwg.org/svg2-draft/embedded.html#ForeignObjectElement) element
* [SVG `image`](https://svgwg.org/svg2-draft/embedded.html#ImageElement) element
* [SVG `script`](https://svgwg.org/svg2-draft/interact.html#ScriptElement) element
* [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement) element
* [SVG `title`](https://svgwg.org/svg2-draft/struct.html#TitleElement) element
* [SVG `use`](https://svgwg.org/svg2-draft/struct.html#UseElement) element
* [SVG `text-rendering`](https://svgwg.org/svg2-draft/painting.html#TextRendering) property

Filter EffectsThe following features are defined in Filter Effects: [[FILTERS]](https://html.spec.whatwg.org/multipage/references.html#refsFILTERS)

* [&lt;filter-value-list&gt;](https://drafts.fxtf.org/filter-effects/#typedef-filter-value-list)

CompositingThe following features are defined in Compositing and Blending: [[COMPOSITE]](https://html.spec.whatwg.org/multipage/references.html#refsCOMPOSITE)

* [&lt;blend-mode&gt;](https://drafts.fxtf.org/compositing/#ltblendmodegt)
* [&lt;composite-mode&gt;](https://drafts.fxtf.org/compositing/#compositemode)
* [source-over](https://drafts.fxtf.org/compositing/#porterduffcompositingoperators_srcover)
* [copy](https://drafts.fxtf.org/compositing/#porterduffcompositingoperators_src)

Cooperative Scheduling of Background TasksThe following features are defined in Cooperative Scheduling of Background Tasks: [[REQUESTIDLECALLBACK]](https://html.spec.whatwg.org/multipage/references.html#refsREQUESTIDLECALLBACK)

* [`requestIdleCallback()`](https://w3c.github.io/requestidlecallback/#the-requestidlecallback-method)
* [start an idle period algorithm](https://w3c.github.io/requestidlecallback/#start-an-idle-period-algorithm)

Screen OrientationThe following terms are defined in Screen Orientation: [[SCREENORIENTATION]](https://html.spec.whatwg.org/multipage/references.html#refsSCREENORIENTATION)

* [screen orientation change steps](https://w3c.github.io/screen-orientation/#dfn-screen-orientation-change-steps)

StorageThe following terms are defined in Storage: [[STORAGE]](https://html.spec.whatwg.org/multipage/references.html#refsSTORAGE)

* [obtain a local storage bottle map](https://storage.spec.whatwg.org/#obtain-a-local-storage-bottle-map)
* [obtain a session storage bottle map](https://storage.spec.whatwg.org/#obtain-a-session-storage-bottle-map)
* [obtain a storage key for non-storage purposes](https://storage.spec.whatwg.org/#obtain-a-storage-key-for-non-storage-purposes)
* [storage key equal](https://storage.spec.whatwg.org/#storage-key-equal)
* [storage proxy map](https://storage.spec.whatwg.org/#storage-proxy-map)
* [legacy-clone a traversable storage shed](https://storage.spec.whatwg.org/#legacy-clone-a-traversable-storage-shed)

Web App ManifestThe following features are defined in Web App Manifest: [[MANIFEST]](https://html.spec.whatwg.org/multipage/references.html#refsMANIFEST)

* [application manifest](https://w3c.github.io/manifest/#dfn-manifest)
* [installed web application](https://w3c.github.io/manifest/#dfn-installed-web-application)
* [process the manifest](https://w3c.github.io/manifest/#dfn-processing-a-manifest)

WebAssembly JavaScript Interface: ESM IntegrationThe following terms are defined in WebAssembly JavaScript Interface: ESM Integration: [[WASMESM]](https://html.spec.whatwg.org/multipage/references.html#refsWASMESM)

* [WebAssembly Module Record](https://webassembly.github.io/esm-integration/js-api/index.html#webassembly-module-record)
* [parse a WebAssembly module](https://webassembly.github.io/esm-integration/js-api/index.html#parse-a-webassembly-module)

WebCodecsThe following features are defined in WebCodecs: [[WEBCODECS]](https://html.spec.whatwg.org/multipage/references.html#refsWEBCODECS)

* [`VideoFrame`](https://w3c.github.io/webcodecs/#videoframe-interface) interface.
* [[[display width]]](https://w3c.github.io/webcodecs/#dom-videoframe-display-width-slot)
* [[[display height]]](https://w3c.github.io/webcodecs/#dom-videoframe-display-height-slot)

WebDriverThe following terms are defined in WebDriver: [[WEBDRIVER]](https://html.spec.whatwg.org/multipage/references.html#refsWEBDRIVER)

* [extension command](https://w3c.github.io/webdriver/#dfn-extension-commands)
* [remote end steps](https://w3c.github.io/webdriver/#dfn-remote-end-steps)
* [WebDriver error](https://w3c.github.io/webdriver/#dfn-errors)
* [WebDriver error code](https://w3c.github.io/webdriver/#dfn-error-code)
* [invalid argument](https://w3c.github.io/webdriver/#dfn-invalid-argument)
* [getting a property](https://w3c.github.io/webdriver/#dfn-getting-properties)
* [success](https://w3c.github.io/webdriver/#dfn-success)
* [WebDriver&#39;s security considerations](https://w3c.github.io/webdriver/#security)
* [current browsing context](https://w3c.github.io/webdriver/#dfn-current-browsing-context)

WebDriver BiDiThe following terms are defined in WebDriver BiDi: [[WEBDRIVERBIDI]](https://html.spec.whatwg.org/multipage/references.html#refsWEBDRIVERBIDI)

* [WebDriver BiDi navigation status](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-navigation-status)
* [navigation status id](https://w3c.github.io/webdriver-bidi/#navigation-status-id)
* [navigation status status](https://w3c.github.io/webdriver-bidi/#navigation-status-status)
* [navigation status canceled](https://w3c.github.io/webdriver-bidi/#navigation-status-canceled)
* [navigation status pending](https://w3c.github.io/webdriver-bidi/#navigation-status-pending)
* [navigation status complete](https://w3c.github.io/webdriver-bidi/#navigation-status-complete)
* [navigation status url](https://w3c.github.io/webdriver-bidi/#navigation-status-url)
* [WebDriver BiDi navigation started](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-navigation-started)
* [WebDriver BiDi navigation aborted](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-navigation-aborted)
* [WebDriver BiDi navigation failed](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-navigation-failed)
* [WebDriver BiDi download started](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-download-started)
* [WebDriver BiDi fragment navigated](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-fragment-navigated)
* [WebDriver BiDi DOM content loaded](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-dom-content-loaded)
* [WebDriver BiDi load complete](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-load-complete)
* [WebDriver BiDi navigable created](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-navigable-created)
* [WebDriver BiDi navigable destroyed](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-navigable-destroyed)
* [WebDriver BiDi user prompt closed](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-user-prompt-closed)
* [WebDriver BiDi user prompt opened](https://w3c.github.io/webdriver-bidi/#webdriver-bidi-user-prompt-opened)

Web Cryptography APIThe following terms are defined in Web Cryptography API: [[WEBCRYPTO]](https://html.spec.whatwg.org/multipage/references.html#refsWEBCRYPTO)

* [generating a random UUID](https://w3c.github.io/webcrypto/#dfn-generate-a-random-uuid)

WebSocketsThe following terms are defined in WebSockets: [[WEBSOCKETS]](https://html.spec.whatwg.org/multipage/references.html#refsWEBSOCKETS)

* [`WebSocket`](https://websockets.spec.whatwg.org/#websocket)
* [make disappear](https://websockets.spec.whatwg.org/#make-disappear)

WebTransportThe following terms are defined in WebTransport: [[WEBTRANSPORT]](https://html.spec.whatwg.org/multipage/references.html#refsWEBTRANSPORT)

* [`WebTransport`](https://w3c.github.io/webtransport/#webtransport)
* [`context cleanup steps`](https://w3c.github.io/webtransport/#context-cleanup-steps)

Web Authentication: An API for accessing Public Key CredentialsThe following terms are defined in Web Authentication: An API for accessing Public Key Credentials: [[WEBAUTHN]](https://html.spec.whatwg.org/multipage/references.html#refsWEBAUTHN)

* [public key credential](https://w3c.github.io/webauthn/#public-key-credential)

Credential ManagementThe following terms are defined in Credential Management: [[CREDMAN]](https://html.spec.whatwg.org/multipage/references.html#refsCREDMAN)

* [conditional mediation](https://w3c.github.io/webappsec-credential-management/#dom-credentialmediationrequirement-conditional)
* [credential](https://w3c.github.io/webappsec-credential-management/#credential)
* [`navigator.credentials.get()`](https://w3c.github.io/webappsec-credential-management/#dom-credentialscontainer-get)

ConsoleThe following terms are defined in Console: [[CONSOLE]](https://html.spec.whatwg.org/multipage/references.html#refsCONSOLE)

* [report a warning to the console](https://console.spec.whatwg.org/#report-a-warning-to-the-console)

Web Locks APIThe following terms are defined in Web Locks API: [[WEBLOCKS]](https://html.spec.whatwg.org/multipage/references.html#refsWEBLOCKS)

* [locks](https://w3c.github.io/web-locks/#lock-concept)
* [lock requests](https://w3c.github.io/web-locks/#lock-request)

Trusted TypesThis specification uses the following features defined in Trusted Types: [[TRUSTED-TYPES]](https://html.spec.whatwg.org/multipage/references.html#refsTRUSTED-TYPES)

* [`TrustedHTML`](https://w3c.github.io/trusted-types/dist/spec/#trustedhtml)
* [data](https://w3c.github.io/trusted-types/dist/spec/#trustedhtml-data)
* [`TrustedScript`](https://w3c.github.io/trusted-types/dist/spec/#trusted-script)
* [`data`](https://w3c.github.io/trusted-types/dist/spec/#trustedscript-data)
* [`TrustedScriptURL`](https://w3c.github.io/trusted-types/dist/spec/#trustedscripturl)
* [Get Trusted Type compliant string](https://w3c.github.io/trusted-types/dist/spec/#get-trusted-type-compliant-string-algorithm)

---

This specification does not *require* support of any particular network protocol, style sheet language, scripting language, or any of the DOM specifications beyond those required in the list above. However, the language described by this specification is biased towards CSS as the styling language, JavaScript as the scripting language, and HTTP as the network protocol, and several features assume that those languages and protocols are in use.

A user agent that implements the HTTP protocol must implement HTTP State Management Mechanism (Cookies) as well. [[HTTP]](https://html.spec.whatwg.org/multipage/references.html#refsHTTP) [[COOKIES]](https://html.spec.whatwg.org/multipage/references.html#refsCOOKIES)

This specification might have certain additional requirements on character encodings, image formats, audio formats, and video formats in the respective sections.

#### **2.1.10** Extensibility

Vendor-specific proprietary user agent extensions to this specification are strongly discouraged. Documents must not use such extensions, as doing so reduces interoperability and fragments the user base, allowing only users of specific user agents to access the content in question.

All extensions must be defined so that the use of extensions neither contradicts nor causes the non-conformance of functionality defined in the specification.

For example, while strongly discouraged from doing so, an implementation could add a new IDL attribute "`typeTime`" to a control that returned the time it took the user to select the current value of a control (say). On the other hand, defining a new control that appears in a form's `<a href="https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements">elements</a>` array would be in violation of the above requirement, as it would violate the definition of `<a href="https://html.spec.whatwg.org/multipage/forms.html#dom-form-elements">elements</a>` given in this specification.

---

When vendor-neutral extensions to this specification are needed, either this specification can be updated accordingly, or an extension specification can be written that overrides the requirements in this specification. When someone applying this specification to their activities decides that they will recognize the requirements of such an extension specification, it becomes an applicable specification for the purposes of conformance requirements in this specification.

Someone could write a specification that defines any arbitrary byte stream as conforming, and then claim that their random junk is conforming. However, that does not mean that their random junk actually is conforming for everyone's purposes: if someone else decides that that specification does not apply to their work, then they can quite legitimately say that the aforementioned random junk is just that, junk, and not conforming at all. As far as conformance goes, what matters in a particular community is what that community *agrees* is applicable.

---

User agents must treat elements and attributes that they do not understand as semantically neutral; leaving them in the DOM (for DOM processors), and styling them according to CSS (for CSS processors), but not inferring any meaning from them.

When support for a feature is disabled (e.g. as an emergency measure to mitigate a security problem, or to aid in development, or for performance reasons), user agents must act as if they had no support for the feature whatsoever, and as if the feature was not mentioned in this specification. For example, if a particular feature is accessed via an attribute in a Web IDL interface, the attribute itself would be omitted from the objects that implement that interface — leaving the attribute on the object but making it return null or throw an exception is insufficient.

#### **2.1.11** Interactions with XPath and XSLT

Implementations of XPath 1.0 that operate on [HTML documents](https://dom.spec.whatwg.org/#html-document) parsed or created in the manners described in this specification (e.g. as part of the `document.evaluate()` API) must act as if the following edit was applied to the XPath 1.0 specification.

First, remove this paragraph:

> A [QName](https://www.w3.org/TR/REC-xml-names/#NT-QName) in the node test is expanded into an [expanded-name](https://www.w3.org/TR/1999/REC-xpath-19991116/#dt-expanded-name) using the namespace declarations from the expression context. This is the same way expansion is done for element type names in start and end-tags except that the default namespace declared with `xmlns` is not used: if the [QName](https://www.w3.org/TR/REC-xml-names/#NT-QName) does not have a prefix, then the namespace URI is null (this is the same way attribute names are expanded). It is an error if the [QName](https://www.w3.org/TR/REC-xml-names/#NT-QName) has a prefix for which there is no namespace declaration in the expression context.

Then, insert in its place the following:

> A QName in the node test is expanded into an expanded-name using the namespace declarations from the expression context. If the QName has a prefix, then there must be a namespace declaration for this prefix in the expression context, and the corresponding namespace URI is the one that is associated with this prefix. It is an error if the QName has a prefix for which there is no namespace declaration in the expression context.
>
> If the QName has no prefix and the principal node type of the axis is element, then the default element namespace is used. Otherwise, if the QName has no prefix, the namespace URI is null. The default element namespace is a member of the context for the XPath expression. The value of the default element namespace when executing an XPath expression through the DOM3 XPath API is determined in the following way:
>
> 1. If the context node is from an HTML DOM, the default element namespace is "http://www.w3.org/1999/xhtml".
> 2. Otherwise, the default element namespace URI is null.
>
> This is equivalent to adding the default element namespace feature of XPath 2.0 to XPath 1.0, and using the HTML namespace as the default element namespace for HTML documents. It is motivated by the desire to have implementations be compatible with legacy HTML content while still supporting the changes that this specification introduces to HTML regarding the namespace used for HTML elements, and by the desire to use XPath 1.0 rather than XPath 2.0.

This change is a [willful violation](https://html.spec.whatwg.org/multipage/introduction.html#willful-violation) of the XPath 1.0 specification, motivated by desire to have implementations be compatible with legacy content while still supporting the changes that this specification introduces to HTML regarding which namespace is used for HTML elements. [[XPATH10]](https://html.spec.whatwg.org/multipage/references.html#refsXPATH10)

---

XSLT 1.0 processors outputting to a DOM when the output method is "html" (either explicitly or via the defaulting rule in XSLT 1.0) are affected as follows:

If the transformation program outputs an element in no namespace, the processor must, prior to constructing the corresponding DOM element node, change the namespace of the element to the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace), [ASCII-lowercase](https://infra.spec.whatwg.org/#ascii-lowercase) the element's local name, and [ASCII-lowercase](https://infra.spec.whatwg.org/#ascii-lowercase) the names of any non-namespaced attributes on the element.

This requirement is a [willful violation](https://html.spec.whatwg.org/multipage/introduction.html#willful-violation) of the XSLT 1.0 specification, required because this specification changes the namespaces and case-sensitivity rules of HTML in a manner that would otherwise be incompatible with DOM-based XSLT transformations. (Processors that serialize the output are unaffected.) [[XSLT10]](https://html.spec.whatwg.org/multipage/references.html#refsXSLT10)

---

This specification does not specify precisely how XSLT processing interacts with the [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) infrastructure (for example, whether an XSLT processor acts as if it puts any elements into a [stack of open elements](https://html.spec.whatwg.org/multipage/parsing.html#stack-of-open-elements)). However, XSLT processors must [stop parsing](https://html.spec.whatwg.org/multipage/parsing.html#stop-parsing) if they successfully complete, and must [update the current document readiness](https://html.spec.whatwg.org/multipage/dom.html#update-the-current-document-readiness) first to "`interactive`" and then to "`complete`" if they are aborted.

---

This specification does not specify how XSLT interacts with the [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate) algorithm, how it fits in with the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop), nor how error pages are to be handled (e.g. whether XSLT errors are to replace an incremental XSLT output, or are rendered inline, etc.).

There are also additional non-normative comments regarding the interaction of XSLT and HTML [in the `script` element section](https://html.spec.whatwg.org/multipage/scripting.html#scriptTagXSLT), and of XSLT, XPath, and HTML [in the `template` element section](https://html.spec.whatwg.org/multipage/scripting.html#template-XSLT-XPath).
