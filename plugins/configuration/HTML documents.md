## HTML documents

### **3.1** Documents

Every XML and HTML document in an HTML UA is represented by a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object. [[DOM]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object's [URL](https://dom.spec.whatwg.org/#concept-document-url) is defined in DOM. It is initially set when the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object is created, but can change during the lifetime of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object; for example, it changes when the user [navigates](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate) to a [fragment](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate-fragid) on the page and when the `<a href="https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-history-pushstate">pushState()</a>` method is called with a new [URL](https://url.spec.whatwg.org/#concept-url). [[DOM]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

Interactive user agents typically expose the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object's [URL](https://dom.spec.whatwg.org/#concept-document-url) in their user interface. This is the primary mechanism by which a user can tell if a site is attempting to impersonate another.

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object's [origin](https://dom.spec.whatwg.org/#concept-document-origin) is defined in DOM. It is initially set when the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object is created, and can change during the lifetime of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` only upon setting `<a href="https://html.spec.whatwg.org/multipage/browsers.html#dom-document-domain">document.domain</a>`. A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s [origin](https://dom.spec.whatwg.org/#concept-document-origin) can differ from the [origin](https://url.spec.whatwg.org/#concept-url-origin) of its [URL](https://dom.spec.whatwg.org/#concept-document-url); for example when a [child navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#child-navigable) is [created](https://html.spec.whatwg.org/multipage/document-sequences.html#create-a-new-child-navigable), its [active document](https://html.spec.whatwg.org/multipage/document-sequences.html#nav-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin) is inherited from its [parent](https://html.spec.whatwg.org/multipage/document-sequences.html#nav-parent)'s [active document](https://html.spec.whatwg.org/multipage/document-sequences.html#nav-document)'s [origin](https://dom.spec.whatwg.org/#concept-document-origin), even though its [active document](https://html.spec.whatwg.org/multipage/document-sequences.html#nav-document)'s [URL](https://dom.spec.whatwg.org/#concept-document-url) is `<a href="https://html.spec.whatwg.org/multipage/infrastructure.html#about:blank">about:blank</a>`. [[DOM]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

When a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is created by a [script](https://html.spec.whatwg.org/multipage/webappapis.html#concept-script) using the `<a data-x-internal="dom-domimplementation-createdocument" href="https://dom.spec.whatwg.org/#dom-domimplementation-createdocument">createDocument()</a>` or `<a data-x-internal="dom-domimplementation-createhtmldocument" href="https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument">createHTMLDocument()</a>` methods, the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is [ready for post-load tasks](https://html.spec.whatwg.org/multipage/parsing.html#ready-for-post-load-tasks) immediately.

The document's referrer is a string (representing a [URL](https://url.spec.whatwg.org/#concept-url)) that can be set when the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is created. If it is not explicitly set, then its value is the empty string.

#### **3.1.1** The `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object

**✔** MDN

DOM defines a `<a data-x-internal="dom-document" href="https://dom.spec.whatwg.org/#interface-document">Document</a>` interface, which this specification extends significantly.

```
  { , ,  };
  { ,  };
 (  ) ;

[]
   {
    ((  ) );

  // resource metadata management
  [=, ]   ? ;
    ;
     ;
    ;
     ;
     ;

  // DOM tree accessors
    ( );
  []   ;
  []   ;
  []  ? ;
    ? ;
  []    ;
  []    ;
  []    ;
  []    ;
  []    ;
  []    ;
   ( );
    ? ; // classic scripts in a document tree only

  // dynamic markup insertion
  []  (  ,   ); // both arguments are ignored
  ? ( ,  ,  );
  []  ();
  []  ((  )... );
  []  ((  )... );

  // user interaction
    ? ;
   ();
  []   ;
  []  ( ,    = ,    = "");
   ( );
   ( );
   ( );
   ( );
   ( );
     ;
     ;

  // special event handler IDL attributes that only apply to Document objects
  []   ;
    ;

  // also has obsolete members
};
  ;
```

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a policy container (a [policy container](https://html.spec.whatwg.org/multipage/browsers.html#policy-container)), initially a new policy container, which contains policies which apply to the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a permissions policy, which is a [permissions policy](https://w3c.github.io/webappsec-feature-policy/#permissions-policy), which is initially empty.

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a module map, which is a [module map](https://html.spec.whatwg.org/multipage/webappapis.html#module-map), initially empty.

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has an opener policy, which is an [opener policy](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-opener-policy), initially a new opener policy.

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has an is initial `about:blank`, which is a boolean, initially false.

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a during-loading navigation ID for WebDriver BiDi, which is a [navigation ID](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigation-id) or null, initially null.

As the name indicates, this is used for interfacing with the WebDriver BiDi specification, which needs to be informed about certain occurrences during the early parts of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s lifecycle, in a way that ties them to the original [navigation ID](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigation-id) used when the navigation that created this `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` was the [ongoing navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#ongoing-navigation). This eventually gets set back to null, after WebDriver BiDi considers the loading process to be finished. [[BIDI]](https://html.spec.whatwg.org/multipage/references.html#refsBIDI)

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has an about base URL, which is a [URL](https://url.spec.whatwg.org/#concept-url) or null, initially null.

This is only populated for "`about:`"-schemed `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`s.

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a bfcache blocking details, which is a [set](https://infra.spec.whatwg.org/#ordered-set) of [not restored reason details](https://html.spec.whatwg.org/multipage/nav-history-apis.html#nrr-details-struct), initially empty.

#### **3.1.2** The `<a href="https://html.spec.whatwg.org/multipage/dom.html#documentorshadowroot">DocumentOrShadowRoot</a>` interface

DOM defines the `<a data-x-internal="dom-documentorshadowroot" href="https://dom.spec.whatwg.org/#documentorshadowroot">DocumentOrShadowRoot</a>` mixin, which this specification extends.

```
    {
    ? ;
};
```

#### **3.1.3** Resource metadata management

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-referrer" id="dom-document-referrer-dev">referrer</a>`**✔** MDN

Returns the [URL](https://dom.spec.whatwg.org/#concept-document-url) of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` from which the user navigated to this one, unless it was blocked or there was no such document, in which case it returns the empty string.

The `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-noreferrer">noreferrer</a>` link type can be used to block the referrer.

The `referrer` attribute must return [the document&#39;s referrer](https://html.spec.whatwg.org/multipage/dom.html#the-document's-referrer).

---

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-cookie" id="dom-document-cookie-dev">cookie</a><span> </span>[ =<span> </span><var>value</var><span> </span>]`Returns the HTTP cookies that apply to the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`. If there are no cookies or cookies can't be applied to this resource, the empty string will be returned.

Can be set, to add a new cookie to the element's set of HTTP cookies.

If the contents are [sandboxed into an opaque origin](https://html.spec.whatwg.org/multipage/browsers.html#sandboxed-origin-browsing-context-flag) (e.g., in an `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>` with the `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox">sandbox</a>` attribute), a [&#34;`SecurityError`&#34;](https://webidl.spec.whatwg.org/#securityerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>` will be thrown on getting and setting.

**✔** MDN

The `cookie` attribute represents the cookies of the resource identified by the document's [URL](https://dom.spec.whatwg.org/#concept-document-url).

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object that falls into one of the following conditions is a cookie-averse `Document` object:

* A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object whose [browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc) is null.
* A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` whose [URL](https://dom.spec.whatwg.org/#concept-document-url)'s [scheme](https://url.spec.whatwg.org/#concept-url-scheme) is not an [HTTP(S) scheme](https://fetch.spec.whatwg.org/#http-scheme).

(https://infra.spec.whatwg.org/#tracking-vector "There is a tracking vector here.")On getting, if the document is a [cookie-averse `Document` object](https://html.spec.whatwg.org/multipage/dom.html#cookie-averse-document-object), then the user agent must return the empty string. Otherwise, if the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s [origin](https://dom.spec.whatwg.org/#concept-document-origin) is an [opaque origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque), the user agent must throw a [&#34;`SecurityError`&#34;](https://webidl.spec.whatwg.org/#securityerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`. Otherwise, the user agent must return the [cookie-string](https://httpwg.org/specs/rfc6265.html#sane-cookie-syntax) for the document's [URL](https://dom.spec.whatwg.org/#concept-document-url) for a "non-HTTP" API, decoded using [UTF-8 decode without BOM](https://encoding.spec.whatwg.org/#utf-8-decode-without-bom). [[COOKIES]](https://html.spec.whatwg.org/multipage/references.html#refsCOOKIES)

On setting, if the document is a [cookie-averse `Document` object](https://html.spec.whatwg.org/multipage/dom.html#cookie-averse-document-object), then the user agent must do nothing. Otherwise, if the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s [origin](https://dom.spec.whatwg.org/#concept-document-origin) is an [opaque origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque), the user agent must throw a [&#34;`SecurityError`&#34;](https://webidl.spec.whatwg.org/#securityerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`. Otherwise, the user agent must act as it would when [receiving a set-cookie-string](https://httpwg.org/specs/rfc6265.html#storage-model) for the document's [URL](https://dom.spec.whatwg.org/#concept-document-url) via a "non-HTTP" API, consisting of the new value [encoded as UTF-8](https://encoding.spec.whatwg.org/#utf-8-encode). [[COOKIES]](https://html.spec.whatwg.org/multipage/references.html#refsCOOKIES) [[ENCODING]](https://html.spec.whatwg.org/multipage/references.html#refsENCODING)

Since the `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-cookie">cookie</a>` attribute is accessible across frames, the path restrictions on cookies are only a tool to help manage which cookies are sent to which parts of the site, and are not in any way a security feature.

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-cookie">cookie</a>` attribute's getter and setter synchronously access shared state. Since there is no locking mechanism, other browsing contexts in a multiprocess user agent can modify cookies while scripts are running. A site could, for instance, try to read a cookie, increment its value, then write it back out, using the new value of the cookie as a unique identifier for the session; if the site does this twice in two different browser windows at the same time, it might end up using the same "unique" identifier for both sessions, with potentially disastrous effects.

---

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-lastmodified" id="dom-document-lastmodified-dev">lastModified</a>`**✔** MDN

Returns the date of the last modification to the document, as reported by the server, in the form "`MM/DD/YYYY hh:mm:ss`", in the user's local time zone.

If the last modification date is not known, the current time is returned instead.

The `lastModified` attribute, on getting, must return the date and time of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s source file's last modification, in the user's local time zone, in the following format:

1. The month component of the date.
2. A U+002F SOLIDUS character (/).
3. The day component of the date.
4. A U+002F SOLIDUS character (/).
5. The year component of the date.
6. A U+0020 SPACE character.
7. The hours component of the time.
8. A U+003A COLON character (:).
9. The minutes component of the time.
10. A U+003A COLON character (:).
11. The seconds component of the time.

All the numeric components above, other than the year, must be given as two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) representing the number in base ten, zero-padded if necessary. The year must be given as the shortest possible string of four or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) representing the number in base ten, zero-padded if necessary.

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s source file's last modification date and time must be derived from relevant features of the networking protocols used, e.g. from the value of the HTTP ``<a data-x-internal="http-last-modified" href="https://httpwg.org/specs/rfc7232.html#header.last-modified">Last-Modified</a>`` header of the document, or from metadata in the file system for local files. If the last modification date and time are not known, the attribute must return the current date and time in the above format.

#### **3.1.4** Reporting document loading status

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-readystate" id="dom-document-readystate-dev">readyState</a>`Returns "`loading`" while the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is loading, "`interactive`" once it is finished parsing but still loading subresources, and "`complete`" once it has loaded.

The `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-readystatechange">readystatechange</a>` event fires on the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object when this value changes.

The `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-domcontentloaded">DOMContentLoaded</a>` event fires after the transition to "`interactive`" but before the transition to "`complete`", at the point where all subresources apart from `<a href="https://html.spec.whatwg.org/multipage/scripting.html#attr-script-async">async</a>` `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` elements have loaded.

**✔** MDN

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a current document readiness, a string, initially "`complete`".

For `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` objects created via the [create and initialize a `Document` object](https://html.spec.whatwg.org/multipage/document-lifecycle.html#initialise-the-document-object) algorithm, this will be immediately reset to "`loading`" before any script can observe the value of `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-readystate">document.readyState</a>`. This default applies to other cases such as [initial `about:blank`](https://html.spec.whatwg.org/multipage/dom.html#is-initial-about:blank) `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`s or `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`s without a [browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc).

The `readyState` getter steps are to return [this](https://webidl.spec.whatwg.org/#this)'s [current document readiness](https://html.spec.whatwg.org/multipage/dom.html#current-document-readiness).

To update the current document readiness for `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` document to readinessValue:

1. If document's [current document readiness](https://html.spec.whatwg.org/multipage/dom.html#current-document-readiness) equals readinessValue, then return.
2. Set document's [current document readiness](https://html.spec.whatwg.org/multipage/dom.html#current-document-readiness) to readinessValue.
3. If document is associated with an [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser), then:
   1. Let now be the [current high resolution time](https://w3c.github.io/hr-time/#dfn-current-high-resolution-time) given document's [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global).
   2. If readinessValue is "`complete`", and document's [load timing info](https://html.spec.whatwg.org/multipage/dom.html#load-timing-info)'s [DOM complete time](https://html.spec.whatwg.org/multipage/dom.html#dom-complete-time) is 0, then set document's [load timing info](https://html.spec.whatwg.org/multipage/dom.html#load-timing-info)'s [DOM complete time](https://html.spec.whatwg.org/multipage/dom.html#dom-complete-time) to now.
   3. Otherwise, if readinessValue is "`interactive`", and document's [load timing info](https://html.spec.whatwg.org/multipage/dom.html#load-timing-info)'s [DOM interactive time](https://html.spec.whatwg.org/multipage/dom.html#dom-interactive-time) is 0, then set document's [load timing info](https://html.spec.whatwg.org/multipage/dom.html#load-timing-info)'s [DOM interactive time](https://html.spec.whatwg.org/multipage/dom.html#dom-interactive-time) to now.
4. [Fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-readystatechange">readystatechange</a>` at document.

---

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is said to have an active parser if it is associated with an [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) or an [XML parser](https://html.spec.whatwg.org/multipage/xhtml.html#xml-parser) that has not yet been [stopped](https://html.spec.whatwg.org/multipage/parsing.html#stop-parsing) or [aborted](https://html.spec.whatwg.org/multipage/parsing.html#abort-a-parser).

---

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a [document load timing info](https://html.spec.whatwg.org/multipage/dom.html#document-load-timing-info) load timing info.

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a [document unload timing info](https://html.spec.whatwg.org/multipage/dom.html#document-unload-timing-info) previous document unload timing.

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a boolean was created via cross-origin redirects, initially false.

The document load timing info [struct](https://infra.spec.whatwg.org/#struct) has the following [items](https://infra.spec.whatwg.org/#struct-item):

navigation start time (default 0)A numberDOM interactive time (default 0)DOM content loaded event start time (default 0)DOM content loaded event end time (default 0)DOM complete time (default 0)load event start time (default 0)load event end time (default 0)`<a data-x-internal="domhighrestimestamp" href="https://w3c.github.io/hr-time/#dom-domhighrestimestamp">DOMHighResTimeStamp</a>` valuesThe document unload timing info [struct](https://infra.spec.whatwg.org/#struct) has the following [items](https://infra.spec.whatwg.org/#struct-item):

unload event start time (default 0)unload event end time (default 0)`<a data-x-internal="domhighrestimestamp" href="https://w3c.github.io/hr-time/#dom-domhighrestimestamp">DOMHighResTimeStamp</a>` values#### **3.1.5** Render-blocking mechanism

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a render-blocking element set, a [set](https://infra.spec.whatwg.org/#ordered-set) of elements, initially the empty set.

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` document allows adding render-blocking elements if document's [content type](https://dom.spec.whatwg.org/#concept-document-content-type) is "`<a href="https://html.spec.whatwg.org/multipage/iana.html#text/html">text/html</a>`" and [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2) of document is null.

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` document is render-blocked if both of the following are true:

* document's [render-blocking element set](https://html.spec.whatwg.org/multipage/dom.html#render-blocking-element-set) is non-empty, or document [allows adding render-blocking elements](https://html.spec.whatwg.org/multipage/dom.html#allows-adding-render-blocking-elements).
* The [current high resolution time](https://w3c.github.io/hr-time/#dfn-current-high-resolution-time) given document's [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global) has not exceeded an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) timeout value.

An element el is render-blocking if el's [node document](https://dom.spec.whatwg.org/#concept-node-document) document is [render-blocked](https://html.spec.whatwg.org/multipage/dom.html#render-blocked), and el is in document's [render-blocking element set](https://html.spec.whatwg.org/multipage/dom.html#render-blocking-element-set).

To block rendering on an element el:

1. Let document be el's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. If document [allows adding render-blocking elements](https://html.spec.whatwg.org/multipage/dom.html#allows-adding-render-blocking-elements), then [append](https://infra.spec.whatwg.org/#set-append) el to document's [render-blocking element set](https://html.spec.whatwg.org/multipage/dom.html#render-blocking-element-set).

To unblock rendering on an element el:

1. Let document be el's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. [Remove](https://infra.spec.whatwg.org/#list-remove) el from document's [render-blocking element set](https://html.spec.whatwg.org/multipage/dom.html#render-blocking-element-set).

Whenever a [render-blocking](https://html.spec.whatwg.org/multipage/dom.html#render-blocking) element el [becomes browsing-context disconnected](https://html.spec.whatwg.org/multipage/infrastructure.html#becomes-browsing-context-disconnected), or el's [blocking attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute)'s value is changed so that el is no longer [potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking), then [unblock rendering](https://html.spec.whatwg.org/multipage/dom.html#unblock-rendering) on el.

#### **3.1.6** DOM tree accessors

The `html` element of a document is its [document element](https://dom.spec.whatwg.org/#document-element), if it's an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element, and null otherwise.

---

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-head" id="dom-document-head-dev">head</a>`**✔** MDN

Returns [the `head` element](https://html.spec.whatwg.org/multipage/dom.html#the-head-element-2).

The `head` element of a document is the first `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element that is a child of [the `html` element](https://html.spec.whatwg.org/multipage/dom.html#the-html-element-2), if there is one, or null otherwise.

The `head` attribute, on getting, must return [the `head` element](https://html.spec.whatwg.org/multipage/dom.html#the-head-element-2) of the document (a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element or null).

---

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#document.title" id="dom-document-title-dev">title</a><span> </span>[ =<span> </span><var>value</var><span> </span>]`Returns the document's title, as given by [the `title` element](https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2) for HTML and as given by the [SVG `title`](https://svgwg.org/svg2-draft/struct.html#TitleElement) element for SVG.

Can be set, to update the document's title. If there is no appropriate element to update, the new value is ignored.

The `title` element of a document is the first `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element in the document (in [tree order](https://dom.spec.whatwg.org/#concept-tree-order)), if there is one, or null otherwise.

**✔** MDN

The `title` attribute must, on getting, run the following algorithm:

1. If the [document element](https://dom.spec.whatwg.org/#document-element) is an [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement) element, then let value be the [child text content](https://dom.spec.whatwg.org/#concept-child-text-content) of the first [SVG `title`](https://svgwg.org/svg2-draft/struct.html#TitleElement) element that is a child of the [document element](https://dom.spec.whatwg.org/#document-element).
2. Otherwise, let value be the [child text content](https://dom.spec.whatwg.org/#concept-child-text-content) of [the `title` element](https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2), or the empty string if [the `title` element](https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2) is null.
3. [Strip and collapse ASCII whitespace](https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace) in value.
4. Return value.

On setting, the steps corresponding to the first matching condition in the following list must be run:

If the [document element](https://dom.spec.whatwg.org/#document-element) is an [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement) element1. If there is an [SVG `title`](https://svgwg.org/svg2-draft/struct.html#TitleElement) element that is a child of the [document element](https://dom.spec.whatwg.org/#document-element), let element be the first such element.

1. Otherwise:
   1. Let element be the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given the [document element](https://dom.spec.whatwg.org/#document-element)'s [node document](https://dom.spec.whatwg.org/#concept-node-document), `<a data-x-internal="svg-title" href="https://svgwg.org/svg2-draft/struct.html#TitleElement">title</a>`, and the [SVG namespace](https://infra.spec.whatwg.org/#svg-namespace).
   2. Insert element as the [first child](https://dom.spec.whatwg.org/#concept-tree-first-child) of the [document element](https://dom.spec.whatwg.org/#document-element).
2. [String replace all](https://dom.spec.whatwg.org/#string-replace-all) with the given value within element.

If the [document element](https://dom.spec.whatwg.org/#document-element) is in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace)1. If [the `title` element](https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2) is null and [the `head` element](https://html.spec.whatwg.org/multipage/dom.html#the-head-element-2) is null, then return.

1. If [the `title` element](https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2) is non-null, let element be [the `title` element](https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2).
2. Otherwise:
   1. Let element be the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given the [document element](https://dom.spec.whatwg.org/#document-element)'s [node document](https://dom.spec.whatwg.org/#concept-node-document), `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>`, and the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace).
   2. [Append](https://dom.spec.whatwg.org/#concept-node-append) element to [the `head` element](https://html.spec.whatwg.org/multipage/dom.html#the-head-element-2).
3. [String replace all](https://dom.spec.whatwg.org/#string-replace-all) with the given value within element.

OtherwiseDo nothing.

---

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-body" id="dom-document-body-dev">body</a><span> </span>[ =<span> </span><var>value</var><span> </span>]`**✔** MDN

Returns [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2).

Can be set, to replace [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2).

If the new value is not a `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` or `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#frameset">frameset</a>` element, this will throw a [&#34;`HierarchyRequestError`&#34;](https://webidl.spec.whatwg.org/#hierarchyrequesterror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.

The body element of a document is the first of [the `html` element](https://html.spec.whatwg.org/multipage/dom.html#the-html-element-2)'s children that is either a `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` element or a `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#frameset">frameset</a>` element, or null if there is no such element.

The `body` attribute, on getting, must return [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2) of the document (either a `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` element, a `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#frameset">frameset</a>` element, or null). On setting, the following algorithm must be run:

1. If the new value is not a `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` or `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#frameset">frameset</a>` element, then throw a [&#34;`HierarchyRequestError`&#34;](https://webidl.spec.whatwg.org/#hierarchyrequesterror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
2. Otherwise, if the new value is the same as [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2), return.
3. Otherwise, if [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2) is not null, then [replace](https://dom.spec.whatwg.org/#concept-node-replace) [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2) with the new value within [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2)'s parent and return.
4. Otherwise, if there is no [document element](https://dom.spec.whatwg.org/#document-element), throw a [&#34;`HierarchyRequestError`&#34;](https://webidl.spec.whatwg.org/#hierarchyrequesterror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
5. Otherwise, [the body element](https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2) is null, but there's a [document element](https://dom.spec.whatwg.org/#document-element). [Append](https://dom.spec.whatwg.org/#concept-node-append) the new value to the [document element](https://dom.spec.whatwg.org/#document-element).

The value returned by the `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-body">body</a>` getter is not always the one passed to the setter.

In this example, the setter successfully inserts a `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` element (though this is non-conforming since SVG does not allow a `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` as child of [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement)). However the getter will return null because the document element is not `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>`.

```
 
 
  documentbody  documentcreateElementNS 
  consoleassertdocumentbody  
 
```

---

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-images" id="dom-document-images-dev">images</a>`**✔** MDN

Returns an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` of the `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` elements in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-embeds" id="dom-document-embeds-dev">embeds</a>`**✔** MDN

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-plugins" id="dom-document-plugins-dev">plugins</a>`**✔** MDN

Returns an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` of the `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>` elements in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-links" id="dom-document-links-dev">links</a>`**✔** MDN

Returns an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` of the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>` elements in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` that have `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>` attributes.

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-forms" id="dom-document-forms-dev">forms</a>`**✔** MDN

Returns an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` of the `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>` elements in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-scripts" id="dom-document-scripts-dev">scripts</a>`**✔** MDN

Returns an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` of the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` elements in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.

The `images` attribute must return an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` rooted at the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` node, whose filter matches only `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` elements.

The `embeds` attribute must return an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` rooted at the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` node, whose filter matches only `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>` elements.

The `plugins` attribute must return the same object as that returned by the `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-embeds">embeds</a>` attribute.

The `links` attribute must return an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` rooted at the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` node, whose filter matches only `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` elements with `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>` attributes and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>` elements with `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>` attributes.

The `forms` attribute must return an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` rooted at the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` node, whose filter matches only `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>` elements.

The `scripts` attribute must return an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` rooted at the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` node, whose filter matches only `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` elements.

---

`<var>collection</var><span> </span>=<span> </span><var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-getelementsbyname" id="dom-document-getelementsbyname-dev">getElementsByName</a>(<var>name</var>)`**✔** MDN

Returns a `<a data-x-internal="nodelist" href="https://dom.spec.whatwg.org/#interface-nodelist">NodeList</a>` of elements in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` that have a `name` attribute with the value name.

The `getElementsByName(<var>elementName</var>)` method steps are to return a [live](https://html.spec.whatwg.org/multipage/infrastructure.html#live) `<a data-x-internal="nodelist" href="https://dom.spec.whatwg.org/#interface-nodelist">NodeList</a>` containing all the [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) in that document that have a `name` attribute whose value is [identical to](https://infra.spec.whatwg.org/#string-is) the elementName argument, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order). When the method is invoked on a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object again with the same argument, the user agent may return the same as the object returned by the earlier call. In other cases, a new `<a data-x-internal="nodelist" href="https://dom.spec.whatwg.org/#interface-nodelist">NodeList</a>` object must be returned.

---

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-currentscript" id="dom-document-currentscript-dev">currentScript</a>`**✔** MDN

Returns the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` element, or the [SVG `script`](https://svgwg.org/svg2-draft/interact.html#ScriptElement) element, that is currently executing, as long as the element represents a [classic script](https://html.spec.whatwg.org/multipage/webappapis.html#classic-script). In the case of reentrant script execution, returns the one that most recently started executing amongst those that have not yet finished executing.

Returns null if the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is not currently executing a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` or [SVG `script`](https://svgwg.org/svg2-draft/interact.html#ScriptElement) element (e.g., because the running script is an event handler, or a timeout), or if the currently executing `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` or [SVG `script`](https://svgwg.org/svg2-draft/interact.html#ScriptElement) element represents a [module script](https://html.spec.whatwg.org/multipage/webappapis.html#module-script).

The `currentScript` attribute, on getting, must return the value to which it was most recently set. When the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is created, the `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-currentscript">currentScript</a>` must be initialized to null.

This API has fallen out of favor in the implementer and standards community, as it globally exposes `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` or [SVG `script`](https://svgwg.org/svg2-draft/interact.html#ScriptElement) elements. As such, it is not available in newer contexts, such as when running [module scripts](https://html.spec.whatwg.org/multipage/webappapis.html#module-script) or when running scripts in a [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree). We are looking into creating a new solution for identifying the running script in such contexts, which does not make it globally available: see [issue #1013](https://github.com/whatwg/html/issues/1013).

---

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` interface [supports named properties](https://webidl.spec.whatwg.org/#dfn-support-named-properties). The [supported property names](https://webidl.spec.whatwg.org/#dfn-supported-property-names) of a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object document at any moment consist of the following, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) according to the element that contributed them, ignoring later duplicates, and with values from `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attributes coming before values from `name` attributes when the same element contributes both:

* the value of the `name` content attribute for all [exposed](https://html.spec.whatwg.org/multipage/dom.html#exposed) `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>`, `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>`, `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`, `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`, and [exposed](https://html.spec.whatwg.org/multipage/dom.html#exposed) `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` elements that have a non-empty `name` content attribute and are [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree) with document as their [root](https://dom.spec.whatwg.org/#concept-tree-root);
* the value of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` content attribute for all [exposed](https://html.spec.whatwg.org/multipage/dom.html#exposed) `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` elements that have a non-empty `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` content attribute and are [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree) with document as their [root](https://dom.spec.whatwg.org/#concept-tree-root); and
* the value of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` content attribute for all `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` elements that have both a non-empty `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` content attribute and a non-empty `name` content attribute, and are [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree) with document as their [root](https://dom.spec.whatwg.org/#concept-tree-root).

To [determine the value of a named property](https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-a-named-property) name for a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`, the user agent must return the value obtained using the following steps:

1. Let elements be the list of [named elements](https://html.spec.whatwg.org/multipage/dom.html#dom-document-nameditem-filter) with the name name that are [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree) with the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` as their [root](https://dom.spec.whatwg.org/#concept-tree-root).
   There will be at least one such element, since the algorithm would otherwise not have been [invoked by Web IDL](https://webidl.spec.whatwg.org/#LegacyPlatformObjectGetOwnProperty).
2. If elements has only one element, and that element is an `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>` element, and that `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>` element's [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable) is not null, then return the [active `WindowProxy`](https://html.spec.whatwg.org/multipage/document-sequences.html#nav-wp) of the element's [content navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#content-navigable).
3. Otherwise, if elements has only one element, return that element.
4. Otherwise, return an `<a data-x-internal="htmlcollection" href="https://dom.spec.whatwg.org/#interface-htmlcollection">HTMLCollection</a>` rooted at the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` node, whose filter matches only [named elements](https://html.spec.whatwg.org/multipage/dom.html#dom-document-nameditem-filter) with the name name.

Named elements with the name name, for the purposes of the above algorithm, are those that are either:

* [Exposed](https://html.spec.whatwg.org/multipage/dom.html#exposed) `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>`, `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>`, `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`, `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`, or [exposed](https://html.spec.whatwg.org/multipage/dom.html#exposed) `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` elements that have a `name` content attribute whose value is name, or
* [Exposed](https://html.spec.whatwg.org/multipage/dom.html#exposed) `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` elements that have an `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` content attribute whose value is name, or
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` elements that have an `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` content attribute whose value is name, and that have a non-empty `name` content attribute present also.

An `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>` or `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` element is said to be exposed if it has no [exposed](https://html.spec.whatwg.org/multipage/dom.html#exposed) `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` ancestor, and, for `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` elements, is additionally either not showing its [fallback content](https://html.spec.whatwg.org/multipage/dom.html#fallback-content) or has no `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` or `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>` descendants.

---

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-document-dir">dir</a>` attribute on the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` interface is defined along with the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` content attribute.

### **3.2** Elements

#### **3.2.1** Semantics

Elements, attributes, and attribute values in HTML are defined (by this specification) to have certain meanings (semantics). For example, the `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element">ol</a>` element represents an ordered list, and the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` attribute represents the language of the content.

These definitions allow HTML processors, such as web browsers or search engines, to present and use documents and applications in a wide variety of contexts that the author might not have considered.

As a simple example, consider a web page written by an author who only considered desktop computer web browsers:

```

 
 
  My Page
 
 
  Welcome to my page
  I like cars and lorries and have a big Jeep!
  Where I live
  I live in a small hut on a mountain!
 
```

Because HTML conveys *meaning* , rather than presentation, the same page can also be used by a small browser on a mobile phone, without any change to the page. Instead of headings being in large letters as on the desktop, for example, the browser on the mobile phone might use the same size text for the whole page, but with the headings in bold.

But it goes further than just differences in screen size: the same page could equally be used by a blind user using a browser based around speech synthesis, which instead of displaying the page on a screen, reads the page to the user, e.g. using headphones. Instead of large text for the headings, the speech browser might use a different volume or a slower voice.

That's not all, either. Since the browsers know which parts of the page are the headings, they can create a document outline that the user can use to quickly navigate around the document, using keys for "jump to next heading" or "jump to previous heading". Such features are especially common with speech browsers, where users would otherwise find quickly navigating a page quite difficult.

Even beyond browsers, software can make use of this information. Search engines can use the headings to more effectively index a page, or to provide quick links to subsections of the page from their results. Tools can use the headings to create a table of contents (that is in fact how this very specification's table of contents is generated).

This example has focused on headings, but the same principle applies to all of the semantics in HTML.

Authors must not use elements, attributes, or attribute values for purposes other than their appropriate intended semantic purpose, as doing so prevents software from correctly processing the page.

For example, the following snippet, intended to represent the heading of a corporate site, is non-conforming because the second line is not intended to be a heading of a subsection, but merely a subheading or subtitle (a subordinate heading for the same section).

```

 ACME Corporation
 The leaders in arbitrary fast delivery since 1920
 ...
```

The `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element">hgroup</a>` element can be used for these kinds of situations:

```

 
  ACME Corporation
  The leaders in arbitrary fast delivery since 1920
 
 ...
```

The document in this next example is similarly non-conforming, despite being syntactically correct, because the data placed in the cells is clearly not tabular data, and the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element">cite</a>` element mis-used:

```

 
   Demonstration  
 
  
     My favourite animal is the cat.  
   
  
     — Ernest,
     in an essay from 1992
  
   
  
 
```

This would make software that relies on these semantics fail: for example, a speech browser that allowed a blind user to navigate tables in the document would report the quote above as a table, confusing the user; similarly, a tool that extracted titles of works from pages would extract "Ernest" as the title of a work, even though it's actually a person's name, not a title.

A corrected version of this document might be:

```

 
   Demonstration  
 
  
    My favourite animal is the cat. 
  
  
   — Ernest,
   in an essay from 1992
  
 
```

Authors must not use elements, attributes, or attribute values that are not permitted by this specification or [other applicable specifications](https://html.spec.whatwg.org/multipage/infrastructure.html#other-applicable-specifications), as doing so makes it significantly harder for the language to be extended in the future.

In the next example, there is a non-conforming attribute value ("carpet") and a non-conforming attribute ("texture"), which is not permitted by this specification:

```
Carpet:  
```

Here would be an alternative and correct way to mark this up:

```
Carpet:   
```

DOM nodes whose [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc) is null are exempt from all document conformance requirements other than the [HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#writing) requirements and [XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html#writing-xhtml-documents) requirements.

In particular, the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element">template</a>` element's [template contents](https://html.spec.whatwg.org/multipage/scripting.html#template-contents)'s [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [browsing context](https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc) is null. For example, the [content model](https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model) requirements and attribute value microsyntax requirements do not apply to a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element">template</a>` element's [template contents](https://html.spec.whatwg.org/multipage/scripting.html#template-contents). In this example an `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` element has attribute values that are placeholders that would be invalid outside a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element">template</a>` element.

```

 
  
  
 
```

However, if the above markup were to omit the `</h1>` end tag, that would be a violation of the [HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#writing), and would thus be flagged as an error by conformance checkers.

Through scripting and using other mechanisms, the values of attributes, text, and indeed the entire structure of the document may change dynamically while a user agent is processing it. The semantics of a document at an instant in time are those represented by the state of the document at that instant in time, and the semantics of a document can therefore change over time. User agents must update their presentation of the document as this occurs.

HTML has a `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element">progress</a>` element that describes a progress bar. If its "value" attribute is dynamically updated by a script, the UA would update the rendering to show the progress changing.

#### **3.2.2** Elements in the DOM

The nodes representing [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) in the DOM must implement, and expose to scripts, the interfaces listed for them in the relevant sections of this specification. This includes [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) in [XML documents](https://dom.spec.whatwg.org/#xml-document), even when those documents are in another context (e.g. inside an XSLT transform).

Elements in the DOM represent things; that is, they have intrinsic *meaning* , also known as semantics.

For example, an `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element">ol</a>` element represents an ordered list.

Elements can be referenced (referred to) in some way, either explicitly or implicitly. One way that an element in the DOM can be explicitly referenced is by giving an `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute to the element, and then creating a [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) with that `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute's value as the [fragment](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate-fragid) for the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink)'s `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>` attribute value. Hyperlinks are not necessary for a reference, however; any manner of referring to the element in question will suffice.

Consider the following `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element">figure</a>` element, which is given an `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute:

```
 
   
     

  Figure 27: a simple module graph
```

A [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink)-based [reference](https://html.spec.whatwg.org/multipage/dom.html#referenced) could be created using the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` element, like so:

```
As we can see in  figure 27, ...
```

However, there are many other ways of [referencing](https://html.spec.whatwg.org/multipage/dom.html#referenced) the `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element">figure</a>` element, such as:

* "As depicted in the figure of modules A, B, C, and D..."
* "In Figure 27..." (without a hyperlink)
* "From the contents of the 'simple module graph' figure..."
* "In the figure below..." (but [this is discouraged](https://html.spec.whatwg.org/multipage/grouping-content.html#figure-note-about-references))

The basic interface, from which all the [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements)' interfaces inherit, and which must be used by elements that have no additional requirements, is the `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>` interface.

**✔** MDN

```
[=]
  :  {
  [] ();

  // metadata attributes
  []   ;
  []   ;
  []   ;
  []   ;

  // user interaction
  []  (     )? ;
  []   ;
   ();
  []   ;
     ;
  []   ;
  []   ;
  []   ;
  []   ;
  []   ;

  []  []  ;
  []  []  ;

   ();

  // The popover API
   ();
   ();
   (  );
  []  ? ;
};

  ;
  ;
  ;

[=]
  :  {
  // Note: intentionally no [HTMLConstructor]
};
```

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>` interface holds methods and attributes related to a number of disparate features, and the members of this interface are therefore described in various different sections of this specification.

---

The [element interface](https://dom.spec.whatwg.org/#concept-element-interface) for an element with name name in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) is determined as follows:

1. If name is `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#applet">applet</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#bgsound">bgsound</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#blink">blink</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#isindex">isindex</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#keygen">keygen</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#multicol">multicol</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#nextid">nextid</a>`, or `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#spacer">spacer</a>`, then return `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement">HTMLUnknownElement</a>`.
2. If name is `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#acronym">acronym</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#basefont">basefont</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#big">big</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#center">center</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#nobr">nobr</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#noembed">noembed</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#noframes">noframes</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#plaintext">plaintext</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#rb">rb</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#rtc">rtc</a>`, `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#strike">strike</a>`, or `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#tt">tt</a>`, then return `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>`.
3. If name is `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#listing">listing</a>` or `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#xmp">xmp</a>`, then return `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#htmlpreelement">HTMLPreElement</a>`.
4. Otherwise, if this specification defines an interface appropriate for the [element type](https://html.spec.whatwg.org/multipage/infrastructure.html#element-type) corresponding to the local name name, then return that interface.
5. If [other applicable specifications](https://html.spec.whatwg.org/multipage/infrastructure.html#other-applicable-specifications) define an appropriate interface for name, then return the interface they define.
6. If name is a [valid custom element name](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name), then return `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>`.
7. Return `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement">HTMLUnknownElement</a>`.

The use of `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>` instead of `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement">HTMLUnknownElement</a>` in the case of [valid custom element names](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) is done to ensure that any potential future [upgrades](https://html.spec.whatwg.org/multipage/custom-elements.html#upgrades) only cause a linear transition of the element's prototype chain, from `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>` to a subclass, instead of a lateral one, from `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement">HTMLUnknownElement</a>` to an unrelated subclass.

Features shared between HTML and SVG elements use the `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement">HTMLOrSVGElement</a>` interface mixin: [[SVG]](https://html.spec.whatwg.org/multipage/references.html#refsSVG)

```
   {
  []    ;
    ; // intentionally no [CEReactions]

  []   ;
  []   ;
   (   = {});
   ();
};
```

An example of an element that is neither an HTML nor SVG element is one created as follows:

```
const el = document.createElementNS("some namespace", "example");
console.assert(el.constructor === Element);
```

#### **3.2.3** HTML element constructors

To support the [custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements) feature, all HTML elements have special constructor behavior. This is indicated via the `[HTMLConstructor]` IDL [extended attribute](https://webidl.spec.whatwg.org/#dfn-extended-attribute). It indicates that the interface object for the given interface will have a specific behavior when called, as defined in detail below.

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlconstructor">[HTMLConstructor]</a>` extended attribute must take no arguments, and must only appear on [constructor operations](https://webidl.spec.whatwg.org/#idl-constructors). It must appear only once on a constructor operation, and the interface must contain only the single, annotated constructor operation, and no others. The annotated constructor operation must be declared to take no arguments.

Interfaces declared with constructor operations that are annotated with the `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlconstructor">[HTMLConstructor]</a>` extended attribute have the following [overridden constructor steps](https://webidl.spec.whatwg.org/#overridden-constructor-steps):

1. Let registry be the [current global object](https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object)'s `<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#customelementregistry">CustomElementRegistry</a>` object.
2. If [NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects) is equal to the [active function object](https://tc39.es/ecma262/#active-function-object), then throw a `<a data-x-internal="typeerror" href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror">TypeError</a>`.
   This can occur when a custom element is defined using an [element interface](https://dom.spec.whatwg.org/#concept-element-interface) as its constructor:

   ```
   customElementsdefine HTMLButtonElement
    HTMLButtonElement        
   documentcreateElement  
   ```

   In this case, during the execution of `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#htmlbuttonelement">HTMLButtonElement</a>` (either explicitly, as in (1), or implicitly, as in (2)), both the [active function object](https://tc39.es/ecma262/#active-function-object) and [NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects) are `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#htmlbuttonelement">HTMLButtonElement</a>`. If this check was not present, it would be possible to create an instance of `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#htmlbuttonelement">HTMLButtonElement</a>` whose local name was `bad-1`.
3. Let definition be the entry in registry with [constructor](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-constructor) equal to [NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects). If there is no such definition, then throw a `<a data-x-internal="typeerror" href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror">TypeError</a>`.
   Since there can be no entry in registry with a [constructor](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-constructor) of undefined, this step also prevents HTML element constructors from being called as functions (since in that case [NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects) will be undefined).
4. Let is value be null.
5. If definition's [local name](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-local-name) is equal to definition's [name](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-name) (i.e., definition is for an [autonomous custom element](https://html.spec.whatwg.org/multipage/custom-elements.html#autonomous-custom-element)), then:

   1. If the [active function object](https://tc39.es/ecma262/#active-function-object) is not `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>`, then throw a `<a data-x-internal="typeerror" href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror">TypeError</a>`.
      This can occur when a custom element is defined to not extend any local names, but inherits from a non-`<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>` class:

      ```
      customElementsdefine  Bad2  HTMLParagraphElement 
      ```

      In this case, during the (implicit) `super()` call that occurs when constructing an instance of `Bad2`, the [active function object](https://tc39.es/ecma262/#active-function-object) is `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#htmlparagraphelement">HTMLParagraphElement</a>`, not `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlelement">HTMLElement</a>`.
6. Otherwise (i.e., if definition is for a [customized built-in element](https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element)):

   1. Let valid local names be the list of local names for elements defined in this specification or in [other applicable specifications](https://html.spec.whatwg.org/multipage/infrastructure.html#other-applicable-specifications) that use the [active function object](https://tc39.es/ecma262/#active-function-object) as their [element interface](https://dom.spec.whatwg.org/#concept-element-interface).
   2. If valid local names does not contain definition's [local name](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-local-name), then throw a `<a data-x-internal="typeerror" href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror">TypeError</a>`.
      This can occur when a custom element is defined to extend a given local name but inherits from the wrong class:

      ```
      customElementsdefine  Bad3  HTMLQuoteElement   
      ```

      In this case, during the (implicit) `super()` call that occurs when constructing an instance of `Bad3`, valid local names is the list containing `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element">q</a>` and `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element">blockquote</a>`, but definition's [local name](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-local-name) is `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>`, which is not in that list.
   3. Set is value to definition's [name](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-name).
7. If definition's [construction stack](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-construction-stack) is empty, then:

   1. Let element be the result of [internally creating a new object implementing the interface](https://webidl.spec.whatwg.org/#internally-create-a-new-object-implementing-the-interface) to which the [active function object](https://tc39.es/ecma262/#active-function-object) corresponds, given the [current realm](https://tc39.es/ecma262/#current-realm) and [NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects).
   2. Set element's [node document](https://dom.spec.whatwg.org/#concept-node-document) to the [current global object](https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object)'s [associated `Document`](https://html.spec.whatwg.org/multipage/nav-history-apis.html#concept-document-window).
   3. Set element's [namespace](https://dom.spec.whatwg.org/#concept-element-namespace) to the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace).
   4. Set element's [namespace prefix](https://dom.spec.whatwg.org/#concept-element-namespace-prefix) to null.
   5. Set element's [local name](https://dom.spec.whatwg.org/#concept-element-local-name) to definition's [local name](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-local-name).
   6. Set element's [custom element state](https://dom.spec.whatwg.org/#concept-element-custom-element-state) to "`custom`".
   7. Set element's [custom element definition](https://dom.spec.whatwg.org/#concept-element-custom-element-definition) to definition.
   8. Set element's [`is` value](https://dom.spec.whatwg.org/#concept-element-is-value) to is value.
   9. Return element.

   This occurs when author script constructs a new custom element directly, e.g. via `new MyCustomElement()`.
8. Let prototype be ? [Get](https://tc39.es/ecma262/#sec-get-o-p)([NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects), "prototype").
9. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(prototype) is not Object, then:

   1. Let realm be ? [GetFunctionRealm](https://tc39.es/ecma262/#sec-getfunctionrealm)([NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects)).
   2. Set prototype to the [interface prototype object](https://webidl.spec.whatwg.org/#dfn-interface-prototype-object) of realm whose interface is the same as the interface of the [active function object](https://tc39.es/ecma262/#active-function-object).

   The realm of the [active function object](https://tc39.es/ecma262/#active-function-object) might not be realm, so we are using the more general concept of "the same interface" across realms; we are not looking for equality of [interface objects](https://webidl.spec.whatwg.org/#dfn-interface-object). This fallback behavior, including using the realm of [NewTarget](https://tc39.es/ecma262/#sec-built-in-function-objects) and looking up the appropriate prototype there, is designed to match analogous behavior for the JavaScript built-ins and Web IDL's [internally create a new object implementing the interface](https://webidl.spec.whatwg.org/#internally-create-a-new-object-implementing-the-interface) algorithm.
10. Let element be the last entry in definition's [construction stack](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-construction-stack).
11. If element is an [*already constructed* marker](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-already-constructed-marker), then throw a `<a data-x-internal="typeerror" href="https://tc39.es/ecma262/#sec-native-error-types-used-in-this-standard-typeerror">TypeError</a>`.
    This can occur when the author code inside the [custom element constructor](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-constructor) [non-conformantly](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) creates another instance of the class being constructed, before calling `super()`:

    ```
     doSillyThing  

     DontDoThis  HTMLElement 
      constructor 
         doSillyThing 
          doSillyThing  
           DontDoThis






    ```

    This can also occur when author code inside the [custom element constructor](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-constructor) [non-conformantly](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance) calls `super()` twice, since per the JavaScript specification, this actually executes the superclass constructor (i.e. this algorithm) twice, before throwing an error:

    ```
     DontDoThisEither  HTMLElement 
      constructor 





    ```
12. Perform ? element.[[SetPrototypeOf]](prototype).
13. Replace the last entry in definition's [construction stack](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-construction-stack) with an [*already constructed* marker](https://html.spec.whatwg.org/multipage/custom-elements.html#concept-already-constructed-marker).
14. Return element.
    This step is normally reached when [upgrading](https://html.spec.whatwg.org/multipage/custom-elements.html#upgrades) a custom element; the existing element is returned, so that the `super()` call inside the [custom element constructor](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-constructor) assigns that existing element to **this** .

---

In addition to the constructor behavior implied by `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlconstructor">[HTMLConstructor]</a>`, some elements also have [named constructors](https://webidl.spec.whatwg.org/#dfn-named-constructor) (which are really factory functions with a modified `prototype` property).

Named constructors for HTML elements can also be used in an `extends` clause when defining a [custom element constructor](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-constructor):

```
 AutoEmbiggenedImage  Image 
  constructorwidth height 
    width   height  
  


customElementsdefine AutoEmbiggenedImage  

 image   AutoEmbiggenedImage 
consoleassertimagewidth  
consoleassertimageheight  
```

#### **3.2.4** Element definitions

Each element in this specification has a definition that includes the following information:

CategoriesA list of [categories](https://html.spec.whatwg.org/multipage/dom.html#content-categories) to which the element belongs. These are used when defining the [content models](https://html.spec.whatwg.org/multipage/dom.html#content-models) for each element.

Contexts in which this element can be usedA *non-normative* description of where the element can be used. This information is redundant with the content models of elements that allow this one as a child, and is provided only as a convenience.

For simplicity, only the most specific expectations are listed.

For example, all [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) is [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2). Thus, elements that are [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) will only be listed as "where [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) is expected", since this is the more-specific expectation. Anywhere that expects [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2) also expects [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2), and thus also meets this expectation.

Content modelA normative description of what content must be included as children and descendants of the element.

Tag omission in text/htmlA *non-normative* description of whether, in the `<a href="https://html.spec.whatwg.org/multipage/iana.html#text/html">text/html</a>` syntax, the [start](https://html.spec.whatwg.org/multipage/syntax.html#syntax-start-tag) and [end](https://html.spec.whatwg.org/multipage/syntax.html#syntax-end-tag) tags can be omitted. This information is redundant with the normative requirements given in the [optional tags](https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission) section, and is provided in the element definitions only as a convenience.

Content attributesA normative list of attributes that may be specified on the element (except where otherwise disallowed), along with non-normative descriptions of those attributes. (The content to the left of the dash is normative, the content to the right of the dash is not.)

Accessibility considerationsFor authors: Conformance requirements for use of ARIA `<a href="https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-role">role</a>` and `<a href="https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-*">aria-*</a>` attributes are defined in ARIA in HTML. [[ARIA]](https://html.spec.whatwg.org/multipage/references.html#refsARIA) [[ARIAHTML]](https://html.spec.whatwg.org/multipage/references.html#refsARIAHTML)

For implementers: User agent requirements for implementing accessibility API semantics are defined in HTML Accessibility API Mappings. [[HTMLAAM]](https://html.spec.whatwg.org/multipage/references.html#refsHTMLAAM)

DOM interfaceA normative definition of a DOM interface that such elements must implement.

This is then followed by a description of what the element [represents](https://html.spec.whatwg.org/multipage/dom.html#represents), along with any additional normative conformance criteria that may apply to authors and implementations. Examples are sometimes also included.

##### **3.2.4.1** Attributes

An attribute value is a string. Except where otherwise specified, attribute values on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) may be any string value, including the empty string, and there is no restriction on what text can be specified in such attribute values.

#### **3.2.5** Content models

Each element defined in this specification has a content model: a description of the element's expected [contents](https://html.spec.whatwg.org/multipage/dom.html#concept-html-contents). An [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) must have contents that match the requirements described in the element's content model. The contents of an element are its children in the DOM.

[ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) is always allowed between elements. User agents represent these characters between elements in the source markup as `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes in the DOM. Empty `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes and `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes consisting of just sequences of those characters are considered inter-element whitespace.

[Inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace), comment nodes, and processing instruction nodes must be ignored when establishing whether an element's contents match the element's content model or not, and must be ignored when following algorithms that define document and element semantics.

Thus, an element A is said to be *preceded or followed* by a second element B if A and B have the same parent node and there are no other element nodes or `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes (other than [inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace)) between them. Similarly, a node is the *only child* of an element if that element contains no other nodes other than [inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace), comment nodes, and processing instruction nodes.

Authors must not use [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) anywhere except where they are explicitly allowed, as defined for each element, or as explicitly required by other specifications. For XML compound documents, these contexts could be inside elements from other namespaces, if those elements are defined as providing the relevant contexts.

The Atom Syndication Format defines a `content` element. When its `type` attribute has the value `xhtml`, The Atom Syndication Format requires that it contain a single HTML `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>` element. Thus, a `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>` element is allowed in that context, even though this is not explicitly normatively stated by this specification. [[ATOM]](https://html.spec.whatwg.org/multipage/references.html#refsATOM)

In addition, [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) may be orphan nodes (i.e. without a parent node).

For example, creating a `<a href="https://html.spec.whatwg.org/multipage/tables.html#the-td-element">td</a>` element and storing it in a global variable in a script is conforming, even though `<a href="https://html.spec.whatwg.org/multipage/tables.html#the-td-element">td</a>` elements are otherwise only supposed to be used inside `<a href="https://html.spec.whatwg.org/multipage/tables.html#the-tr-element">tr</a>` elements.

```
 data  
  name 
  cell documentcreateElement
```

##### **3.2.5.1** The "nothing" content model

When an element's content model is nothing, the element must contain no `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes (other than [inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace)) and no element nodes.

Most HTML elements whose content model is "nothing" are also, for convenience, [void elements](https://html.spec.whatwg.org/multipage/syntax.html#void-elements) (elements that have no [end tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-end-tag) in the [HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax)). However, these are entirely separate concepts.

##### **3.2.5.2** Kinds of content

Each element in HTML falls into zero or more categories that group elements with similar characteristics together. The following broad categories are used in this specification:

* [Metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2)
* [Flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2)
* [Sectioning content](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content-2)
* [Heading content](https://html.spec.whatwg.org/multipage/dom.html#heading-content-2)
* [Phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2)
* [Embedded content](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category)
* [Interactive content](https://html.spec.whatwg.org/multipage/dom.html#interactive-content-2)

Some elements also fall into other categories, which are defined in other parts of this specification.

These categories are related as follows:

<iframe src="https://html.spec.whatwg.org/images/content-venn.svg" width="1000" height="288"></iframe>

Sectioning content, heading content, phrasing content, embedded content, and interactive content are all types of flow content. Metadata is sometimes flow content. Metadata and interactive content are sometimes phrasing content. Embedded content is also a type of phrasing content, and sometimes is interactive content.

Other categories are also used for specific purposes, e.g. form controls are specified using a number of categories to define common requirements. Some elements have unique requirements and do not fit into any particular category.

###### **3.2.5.2.1** Metadata content

Metadata content is content that sets up the presentation or behavior of the rest of the content, or that sets up the relationship of the document with other documents, or that conveys other "out of band" information.

* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>`
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>`
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element">noscript</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>`
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element">template</a>`
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>`

Elements from other namespaces whose semantics are primarily metadata-related (e.g. RDF) are also [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2).

Thus, in the XML serialization, one can use RDF, like this:

```
 
     
 
  Hedral's Home Page
  
  
         
    Cat Hedral
   
    Sir
   
  
 
 
  My home page
  I like playing with string, I guess. Sister says squirrels are fun
  too so sometimes I follow her to play with them.
 
```

This isn't possible in the HTML serialization, however.

###### **3.2.5.2.2** Flow content

Most elements that are used in the body of documents and applications are categorized as flow content.

* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element">abbr</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-address-element">address</a>`
* `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>` (if it is a descendant of a `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>` element)
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-article-element">article</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-aside-element">aside</a>`
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-audio-element">audio</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element">b</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element">bdi</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element">bdo</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element">blockquote</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element">br</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>`
* `<a href="https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element">canvas</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element">cite</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element">code</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element">data</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element">datalist</a>`
* `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element">details</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element">dfn</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element">dialog</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element">dl</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element">em</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element">fieldset</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element">figure</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-footer-element">footer</a>`
* `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h1</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h2</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h3</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h4</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h5</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h6</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-header-element">header</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element">hgroup</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element">hr</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`
* `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>`
* `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element">kbd</a>`
* `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-label-element">label</a>`
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` (if it is [allowed in the body](https://html.spec.whatwg.org/multipage/semantics.html#allowed-in-the-body))
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element">main</a>` (if it is a [hierarchically correct `main` element](https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element))
* `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element">mark</a>`
* [MathML `math`](https://w3c.github.io/mathml-core/#the-top-level-math-element)
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element">menu</a>`
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute is present)
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element">meter</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-nav-element">nav</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element">noscript</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element">ol</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element">output</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element">picture</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element">pre</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element">progress</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element">q</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element">ruby</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element">s</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element">samp</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element">search</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-section-element">section</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element">slot</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element">small</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element">strong</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements">sub</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements">sup</a>`
* [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement)
* `<a href="https://html.spec.whatwg.org/multipage/tables.html#the-table-element">table</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element">template</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element">time</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element">u</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element">ul</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-var-element">var</a>`
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-video-element">video</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element">wbr</a>`
* [autonomous custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#autonomous-custom-element)
* [text](https://html.spec.whatwg.org/multipage/dom.html#text-content)

###### **3.2.5.2.3** Sectioning content

Sectioning content is content that defines the scope of `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-header-element">header</a>` and `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-footer-element">footer</a>` elements.

* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-article-element">article</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-aside-element">aside</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-nav-element">nav</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-section-element">section</a>`

###### **3.2.5.2.4** Heading content

Heading content defines the heading of a section (whether explicitly marked up using [sectioning content](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content-2) elements, or implied by the heading content itself).

* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h1</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h2</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h3</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h4</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h5</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h6</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element">hgroup</a>` (if it has a descendant `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h1</a>` to `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h6</a>` element)

###### **3.2.5.2.5** Phrasing content

Phrasing content is the text of the document, as well as elements that mark up that text at the intra-paragraph level. Runs of [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) form [paragraphs](https://html.spec.whatwg.org/multipage/dom.html#paragraph).

* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element">abbr</a>`
* `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>` (if it is a descendant of a `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>` element)
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-audio-element">audio</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element">b</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element">bdi</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element">bdo</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element">br</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>`
* `<a href="https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element">canvas</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element">cite</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element">code</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element">data</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element">datalist</a>`
* `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element">dfn</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element">em</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`
* `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>`
* `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element">kbd</a>`
* `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-label-element">label</a>`
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` (if it is [allowed in the body](https://html.spec.whatwg.org/multipage/semantics.html#allowed-in-the-body))
* `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element">mark</a>`
* [MathML `math`](https://w3c.github.io/mathml-core/#the-top-level-math-element)
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute is present)
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element">meter</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element">noscript</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element">output</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element">picture</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element">progress</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element">q</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element">ruby</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element">s</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element">samp</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element">slot</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element">small</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element">strong</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements">sub</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements">sup</a>`
* [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement)
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element">template</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element">time</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element">u</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-var-element">var</a>`
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-video-element">video</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element">wbr</a>`
* [autonomous custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#autonomous-custom-element)
* [text](https://html.spec.whatwg.org/multipage/dom.html#text-content)

Most elements that are categorized as phrasing content can only contain elements that are themselves categorized as phrasing content, not any flow content.

Text, in the context of content models, means either nothing, or `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes. [Text](https://html.spec.whatwg.org/multipage/dom.html#text-content) is sometimes used as a content model on its own, but is also [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2), and can be [inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace) (if the `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes are empty or contain just [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace)).

`<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes and attribute values must consist of [scalar values](https://infra.spec.whatwg.org/#scalar-value), excluding [noncharacters](https://infra.spec.whatwg.org/#noncharacter), and [controls](https://infra.spec.whatwg.org/#control) other than [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace). This specification includes extra constraints on the exact value of `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes and attribute values depending on their precise context.

###### **3.2.5.2.6** Embedded content

Embedded content is content that imports another resource into the document, or content from another vocabulary that is inserted into the document.

* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-audio-element">audio</a>`
* `<a href="https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element">canvas</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`
* [MathML `math`](https://w3c.github.io/mathml-core/#the-top-level-math-element)
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element">picture</a>`
* [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement)
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-video-element">video</a>`

Elements that are from namespaces other than the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) and that convey content but not metadata, are [embedded content](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category) for the purposes of the content models defined in this specification. (For example, MathML or SVG.)

Some embedded content elements can have fallback content: content that is to be used when the external resource cannot be used (e.g. because it is of an unsupported format). The element definitions state what the fallback is, if any.

###### **3.2.5.2.7** Interactive content

Interactive content is content that is specifically intended for user interaction.

* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>` attribute is present)
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-audio-element">audio</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/media.html#attr-media-controls">controls</a>` attribute is present)
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element">details</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#attr-hyperlink-usemap">usemap</a>` attribute is present)
* `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">type</a>` attribute is *not* in the [Hidden](https://html.spec.whatwg.org/multipage/input.html#hidden-state-(type=hidden)) state)
* `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-label-element">label</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>`
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-video-element">video</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/media.html#attr-media-controls">controls</a>` attribute is present)

###### **3.2.5.2.8** Palpable content

As a general rule, elements whose content model allows any [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2) or [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) should have at least one node in its [contents](https://html.spec.whatwg.org/multipage/dom.html#concept-html-contents) that is palpable content and that does not have the `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden">hidden</a>` attribute specified.

[Palpable content](https://html.spec.whatwg.org/multipage/dom.html#palpable-content-2) makes an element non-empty by providing either some descendant non-empty [text](https://html.spec.whatwg.org/multipage/dom.html#text-content), or else something users can hear (`<a href="https://html.spec.whatwg.org/multipage/media.html#the-audio-element">audio</a>` elements) or view (`<a href="https://html.spec.whatwg.org/multipage/media.html#the-video-element">video</a>`, `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`, or `<a href="https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element">canvas</a>` elements) or otherwise interact with (for example, interactive form controls).

This requirement is not a hard requirement, however, as there are many cases where an element can be empty legitimately, for example when it is used as a placeholder which will later be filled in by a script, or when the element is part of a template and would on most pages be filled in but on some pages is not relevant.

Conformance checkers are encouraged to provide a mechanism for authors to find elements that fail to fulfill this requirement, as an authoring aid.

The following elements are palpable content:

* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element">abbr</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-address-element">address</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-article-element">article</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-aside-element">aside</a>`
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-audio-element">audio</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/media.html#attr-media-controls">controls</a>` attribute is present)
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element">b</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element">bdi</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element">bdo</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element">blockquote</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>`
* `<a href="https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element">canvas</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-cite-element">cite</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-code-element">code</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-data-element">data</a>`
* `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element">details</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-dfn-element">dfn</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element">dl</a>` (if the element's children include at least one name-value group)
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-em-element">em</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element">embed</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element">fieldset</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element">figure</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-footer-element">footer</a>`
* `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h1</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h2</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h3</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h4</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h5</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h6</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-header-element">header</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element">hgroup</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`
* `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` (if the `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">type</a>` attribute is *not* in the [Hidden](https://html.spec.whatwg.org/multipage/input.html#hidden-state-(type=hidden)) state)
* `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element">kbd</a>`
* `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-label-element">label</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element">main</a>`
* `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-mark-element">mark</a>`
* [MathML `math`](https://w3c.github.io/mathml-core/#the-top-level-math-element)
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element">menu</a>` (if the element's children include at least one `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element">li</a>` element)
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element">meter</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-nav-element">nav</a>`
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element">ol</a>` (if the element's children include at least one `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element">li</a>` element)
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element">output</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>`
* `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element">picture</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element">pre</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element">progress</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element">q</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element">ruby</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element">s</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-samp-element">samp</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element">search</a>`
* `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-section-element">section</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element">small</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-strong-element">strong</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements">sub</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements">sup</a>`
* [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement)
* `<a href="https://html.spec.whatwg.org/multipage/tables.html#the-table-element">table</a>`
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element">time</a>`
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element">u</a>`
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element">ul</a>` (if the element's children include at least one `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element">li</a>` element)
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-var-element">var</a>`
* `<a href="https://html.spec.whatwg.org/multipage/media.html#the-video-element">video</a>`
* [autonomous custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#autonomous-custom-element)
* [text](https://html.spec.whatwg.org/multipage/dom.html#text-content) that is not [inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace)

###### **3.2.5.2.9** Script-supporting elements

Script-supporting elements are those that do not [represent](https://html.spec.whatwg.org/multipage/dom.html#represents) anything themselves (i.e. they are not rendered), but are used to support scripts, e.g. to provide functionality for the user.

The following elements are script-supporting elements:

* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>`
* `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element">template</a>`

##### **3.2.5.3** Transparent content models

Some elements are described as transparent; they have "transparent" in the description of their content model. The content model of a [transparent](https://html.spec.whatwg.org/multipage/dom.html#transparent) element is derived from the content model of its parent element: the elements required in the part of the content model that is "transparent" are the same elements as required in the part of the content model of the parent of the transparent element in which the transparent element finds itself.

For instance, an `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>` element inside a `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element">ruby</a>` element cannot contain an `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element">rt</a>` element, because the part of the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element">ruby</a>` element's content model that allows `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>` elements is the part that allows [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2), and the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-rt-element">rt</a>` element is not [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2).

In some cases, where transparent elements are nested in each other, the process has to be applied iteratively.

Consider the following markup fragment:

```
 Apples
```

To check whether "Apples" is allowed inside the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` element, the content models are examined. The `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` element's content model is transparent, as is the `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>` element's, as is the `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>` element's, as is the part of the `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` element's in which the `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>` element is found. The `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` element is found in the `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` element, whose content model is [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2). Thus, "Apples" is allowed, as text is phrasing content.

When a transparent element has no parent, then the part of its content model that is "transparent" must instead be treated as accepting any [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2).

##### **3.2.5.4** Paragraphs

The term [paragraph](https://html.spec.whatwg.org/multipage/dom.html#paragraph) as defined in this section is used for more than just the definition of the `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` element. The [paragraph](https://html.spec.whatwg.org/multipage/dom.html#paragraph) concept defined here is used to describe how to interpret documents. The `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` element is merely one of several ways of marking up a [paragraph](https://html.spec.whatwg.org/multipage/dom.html#paragraph).

A paragraph is typically a run of [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) that forms a block of text with one or more sentences that discuss a particular topic, as in typography, but can also be used for more general thematic grouping. For instance, an address is also a paragraph, as is a part of a form, a byline, or a stanza in a poem.

In the following example, there are two paragraphs in a section. There is also a heading, which contains phrasing content that is not a paragraph. Note how the comments and [inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace) do not form paragraphs.

```

  Example of paragraphs
  This is the first paragraph in this example.
  This is the second.
  
```

Paragraphs in [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2) are defined relative to what the document looks like without the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>`, `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>`, `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>`, and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>` elements complicating matters, since those elements, with their hybrid content models, can straddle paragraph boundaries, as shown in the first two examples below.

Generally, having elements straddle paragraph boundaries is best avoided. Maintaining such markup can be difficult.

The following example takes the markup from the earlier example and puts `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>` and `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>` elements around some of the markup to show that the text was changed (though in this case, the changes admittedly don't make much sense). Notice how this example has exactly the same paragraphs as the previous one, despite the `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>` and `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>` elements — the `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>` element straddles the heading and the first paragraph, and the `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>` element straddles the boundary between the two paragraphs.

```

  Example of paragraphs
  This is the first paragraph in this example.
  This is the second.
  
```

Let view be a view of the DOM that replaces all `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>`, `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>`, `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>`, and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>` elements in the document with their [contents](https://html.spec.whatwg.org/multipage/dom.html#concept-html-contents). Then, in view, for each run of sibling [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) nodes uninterrupted by other types of content, in an element that accepts content other than [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) as well as [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2), let first be the first node of the run, and let last be the last node of the run. For each such run that consists of at least one node that is neither [embedded content](https://html.spec.whatwg.org/multipage/dom.html#embedded-content-category) nor [inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace), a paragraph exists in the original DOM from immediately before first to immediately after last. (Paragraphs can thus span across `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>`, `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>`, `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>`, and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-map-element">map</a>` elements.)

Conformance checkers may warn authors of cases where they have paragraphs that overlap each other (this can happen with `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>`, `<a href="https://html.spec.whatwg.org/multipage/media.html#the-video-element">video</a>`, `<a href="https://html.spec.whatwg.org/multipage/media.html#the-audio-element">audio</a>`, and `<a href="https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element">canvas</a>` elements, and indirectly through elements in other namespaces that allow HTML to be further embedded therein, like [SVG `svg`](https://svgwg.org/svg2-draft/struct.html#SVGElement) or [MathML `math`](https://w3c.github.io/mathml-core/#the-top-level-math-element)).

A [paragraph](https://html.spec.whatwg.org/multipage/dom.html#paragraph) is also formed explicitly by `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` elements.

The `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` element can be used to wrap individual paragraphs when there would otherwise not be any content other than phrasing content to separate the paragraphs from each other.

In the following example, the link spans half of the first paragraph, all of the heading separating the two paragraphs, and half of the second paragraph. It straddles the paragraphs and the heading.

```

 Welcome!
  
  This is home of...
  The Falcons!
  The Lockheed Martin multirole jet fighter aircraft!
 
 This page discusses the F-16 Fighting Falcon's innermost secrets.
```

Here is another way of marking this up, this time showing the paragraphs explicitly, and splitting the one link element into three:

```

 Welcome!  This is home of...
  The Falcons!
  The Lockheed Martin multirole jet
 fighter aircraft! This page discusses the F-16 Fighting
 Falcon's innermost secrets.
```

It is possible for paragraphs to overlap when using certain elements that define fallback content. For example, in the following section:

```

 My Cats
 You can play with my cat simulator.
  
  To see the cat simulator, use one of the following links:
  
    Download simulator file
    Use online simulator
  
  Alternatively, upgrade to the Mellblom Browser.
 
 I'm quite proud of it.
```

There are five paragraphs:

1. The paragraph that says "You can play with my cat simulator. *object* I'm quite proud of it.", where *object* is the `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element">object</a>` element.
2. The paragraph that says "To see the cat simulator, use one of the following links:".
3. The paragraph that says "Download simulator file".
4. The paragraph that says "Use online simulator".
5. The paragraph that says "Alternatively, upgrade to the Mellblom Browser.".

The first paragraph is overlapped by the other four. A user agent that supports the "cats.sim" resource will only show the first one, but a user agent that shows the fallback will confusingly show the first sentence of the first paragraph as if it was in the same paragraph as the second one, and will show the last paragraph as if it was at the start of the second sentence of the first paragraph.

To avoid this confusion, explicit `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` elements can be used. For example:

```

 My Cats
 You can play with my cat simulator.
  
  To see the cat simulator, use one of the following links:
  
    Download simulator file
    Use online simulator
  
  Alternatively, upgrade to the Mellblom Browser.
 
 I'm quite proud of it.
```

#### **3.2.6** Global attributes

MDN

The following attributes are common to and may be specified on all [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) (even those not defined in this specification):

* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#the-accesskey-attribute">accesskey</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-autocapitalize">autocapitalize</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-autocorrect">autocorrect</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-fe-autofocus">autofocus</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-contenteditable">contenteditable</a>`
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>`
* `<a href="https://html.spec.whatwg.org/multipage/dnd.html#attr-draggable">draggable</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-enterkeyhint">enterkeyhint</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden">hidden</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute">inert</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode">inputmode</a>`
* `<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is">is</a>`
* `<a href="https://html.spec.whatwg.org/multipage/microdata.html#attr-itemid">itemid</a>`
* `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>`
* `<a href="https://html.spec.whatwg.org/multipage/microdata.html#attr-itemref">itemref</a>`
* `<a href="https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope">itemscope</a>`
* `<a href="https://html.spec.whatwg.org/multipage/microdata.html#attr-itemtype">itemtype</a>`
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>`
* `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>`
* `<a href="https://html.spec.whatwg.org/multipage/popover.html#attr-popover">popover</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-spellcheck">spellcheck</a>`
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-tabindex">tabindex</a>`
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>`
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-translate">translate</a>`
* `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-writingsuggestions">writingsuggestions</a>`

These attributes are only defined by this specification as attributes for [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements). When this specification refers to elements having these attributes, elements from namespaces that are not defined as having these attributes must not be considered as being elements with these attributes.

For example, in the following XML fragment, the "`bogus`" element does not have a `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute as defined in this specification, despite having an attribute with the literal name "`dir`". Thus, [the directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) of the inner-most `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>` element is '[rtl](https://html.spec.whatwg.org/multipage/dom.html#concept-rtl)', inherited from the `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>` element indirectly through the "`bogus`" element.

```
  
   
   
  
 
```

---

**✔** MDN

DOM defines the user agent requirements for the `class`, `id`, and `slot` attributes for any element in any namespace. [[DOM]](https://html.spec.whatwg.org/multipage/references.html#refsDOM)

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#classes">class</a>`, `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>`, and `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-slot">slot</a>` attributes may be specified on all [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements).

When specified on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), the `<a href="https://html.spec.whatwg.org/multipage/dom.html#classes">class</a>` attribute must have a value that is a [set of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens) representing the various classes that the element belongs to.

Assigning classes to an element affects class matching in selectors in CSS, the `<a data-x-internal="dom-document-getelementsbyclassname" href="https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname">getElementsByClassName()</a>` method in the DOM, and other such features.

There are no additional restrictions on the tokens authors can use in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#classes">class</a>` attribute, but authors are encouraged to use values that describe the nature of the content, rather than values that describe the desired presentation of the content.

When specified on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute value must be unique amongst all the [IDs](https://dom.spec.whatwg.org/#concept-id) in the element's [tree](https://dom.spec.whatwg.org/#concept-tree) and must contain at least one character. The value must not contain any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute specifies its element's [unique identifier (ID)](https://dom.spec.whatwg.org/#concept-id).

There are no other restrictions on what form an ID can take; in particular, IDs can consist of just digits, start with a digit, start with an underscore, consist of just punctuation, etc.

An element's [unique identifier](https://dom.spec.whatwg.org/#concept-id) can be used for a variety of purposes, most notably as a way to link to specific parts of a document using [fragments](https://url.spec.whatwg.org/#concept-url-fragment), as a way to target an element when scripting, and as a way to style a specific element from CSS.

Identifiers are opaque strings. Particular meanings should not be derived from the value of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attribute.

There are no conformance requirements for the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-slot">slot</a>` attribute specific to [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements).

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-slot">slot</a>` attribute is used to [assign a slot](https://dom.spec.whatwg.org/#assign-a-slot) to an element: an element with a `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-slot">slot</a>` attribute is [assigned](https://dom.spec.whatwg.org/#assign-a-slot) to the [slot](https://dom.spec.whatwg.org/#concept-slot) created by the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element">slot</a>` element whose [name](https://html.spec.whatwg.org/multipage/scripting.html#attr-slot-name) attribute's value matches that `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-slot">slot</a>` attribute's value — but only if that `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element">slot</a>` element finds itself in the [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree) whose [root](https://dom.spec.whatwg.org/#concept-tree-root)'s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host) has the corresponding `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-slot">slot</a>` attribute value.

---

To enable assistive technology products to expose a more fine-grained interface than is otherwise possible with HTML elements and attributes, a set of [annotations for assistive technology products](https://html.spec.whatwg.org/multipage/dom.html#wai-aria) can be specified (the ARIA `<a href="https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-role">role</a>` and `<a href="https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-*">aria-*</a>` attributes). [[ARIA]](https://html.spec.whatwg.org/multipage/references.html#refsARIA)

---

The following [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes) may be specified on any [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements):

* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onauxclick">onauxclick</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onbeforeinput">onbeforeinput</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onbeforematch">onbeforematch</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onbeforetoggle">onbeforetoggle</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onblur">onblur</a>`*
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncancel">oncancel</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncanplay">oncanplay</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncanplaythrough">oncanplaythrough</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onchange">onchange</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onclick">onclick</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onclose">onclose</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncontextlost">oncontextlost</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncontextmenu">oncontextmenu</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncontextrestored">oncontextrestored</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncopy">oncopy</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncuechange">oncuechange</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncut">oncut</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondblclick">ondblclick</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondrag">ondrag</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondragend">ondragend</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondragenter">ondragenter</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondragleave">ondragleave</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondragover">ondragover</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondragstart">ondragstart</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondrop">ondrop</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondurationchange">ondurationchange</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onemptied">onemptied</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onended">onended</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onerror">onerror</a>`*
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onfocus">onfocus</a>`*
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onformdata">onformdata</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oninput">oninput</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oninvalid">oninvalid</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onkeydown">onkeydown</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onkeypress">onkeypress</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onkeyup">onkeyup</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onload">onload</a>`*
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onloadeddata">onloadeddata</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onloadedmetadata">onloadedmetadata</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onloadstart">onloadstart</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmousedown">onmousedown</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmouseenter">onmouseenter</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmouseleave">onmouseleave</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmousemove">onmousemove</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmouseout">onmouseout</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmouseover">onmouseover</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmouseup">onmouseup</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onpaste">onpaste</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onpause">onpause</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onplay">onplay</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onplaying">onplaying</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onprogress">onprogress</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onratechange">onratechange</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onreset">onreset</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onresize">onresize</a>`*
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onscroll">onscroll</a>`*
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onscrollend">onscrollend</a>`*
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onsecuritypolicyviolation">onsecuritypolicyviolation</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onseeked">onseeked</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onseeking">onseeking</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onselect">onselect</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onslotchange">onslotchange</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onstalled">onstalled</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onsubmit">onsubmit</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onsuspend">onsuspend</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ontimeupdate">ontimeupdate</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-ontoggle">ontoggle</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onvolumechange">onvolumechange</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onwaiting">onwaiting</a>`
* `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onwheel">onwheel</a>`

The attributes marked with an asterisk have a different meaning when specified on `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` elements as those elements expose [event handlers](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers) of the `<a href="https://html.spec.whatwg.org/multipage/nav-history-apis.html#window">Window</a>` object with the same names.

While these attributes apply to all elements, they are not useful on all elements. For example, only [media elements](https://html.spec.whatwg.org/multipage/media.html#media-element) will ever receive a `<a href="https://html.spec.whatwg.org/multipage/media.html#event-media-volumechange">volumechange</a>` event fired by the user agent.

---

[Custom data attributes](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute) (e.g. `data-foldername` or `data-msgid`) can be specified on any [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), to store custom data, state, annotations, and similar, specific to the page.

---

In [HTML documents](https://dom.spec.whatwg.org/#html-document), elements in the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) may have an `xmlns` attribute specified, if, and only if, it has the exact value "`http://www.w3.org/1999/xhtml`". This does not apply to [XML documents](https://dom.spec.whatwg.org/#xml-document).

In HTML, the `xmlns` attribute has absolutely no effect. It is basically a talisman. It is allowed merely to make migration to and from XML mildly easier. When parsed by an [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser), the attribute ends up in no namespace, not the "`http://www.w3.org/2000/xmlns/`" namespace like namespace declaration attributes in XML do.

In XML, an `xmlns` attribute is part of the namespace declaration mechanism, and an element cannot actually have an `xmlns` attribute in no namespace specified.

---

XML also allows the use of the `<a data-x-internal="attr-xml-space" href="https://www.w3.org/TR/xml/#sec-white-space">xml:space</a>` attribute in the [XML namespace](https://infra.spec.whatwg.org/#xml-namespace) on any element in an [XML document](https://dom.spec.whatwg.org/#xml-document). This attribute has no effect on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), as the default behavior in HTML is to preserve whitespace. [[XML]](https://html.spec.whatwg.org/multipage/references.html#refsXML)

There is no way to serialize the `<a data-x-internal="attr-xml-space" href="https://www.w3.org/TR/xml/#sec-white-space">xml:space</a>` attribute on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) in the `<a href="https://html.spec.whatwg.org/multipage/iana.html#text/html">text/html</a>` syntax.

##### **3.2.6.1** The `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute

**✔** MDN

The `title` attribute [represents](https://html.spec.whatwg.org/multipage/dom.html#represents) advisory information for the element, such as would be appropriate for a tooltip. On a link, this could be the title or a description of the target resource; on an image, it could be the image credit or a description of the image; on a paragraph, it could be a footnote or commentary on the text; on a citation, it could be further information about the source; on [interactive content](https://html.spec.whatwg.org/multipage/dom.html#interactive-content-2), it could be a label for, or instructions for, use of the element; and so forth. The value is text.

Relying on the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute is currently discouraged as many user agents do not expose the attribute in an accessible manner as required by this specification (e.g., requiring a pointing device such as a mouse to cause a tooltip to appear, which excludes keyboard-only users and touch-only users, such as anyone with a modern phone or tablet).

If this attribute is omitted from an element, then it implies that the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute of the nearest ancestor [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) with a `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute set is also relevant to this element. Setting the attribute overrides this, explicitly stating that the advisory information of any ancestors is not relevant to this element. Setting the attribute to the empty string indicates that the element has no advisory information.

If the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute's value contains U+000A LINE FEED (LF) characters, the content is split into multiple lines. Each U+000A LINE FEED (LF) character represents a line break.

Caution is advised with respect to the use of newlines in `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attributes.

For instance, the following snippet actually defines an abbreviation's expansion *with a line break in it* :

```
My logs show that there was some interest in  
HTTP today.
```

Some elements, such as `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>`, `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element">abbr</a>`, and `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>`, define additional semantics for the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute beyond the semantics described above.

The advisory information of an element is the value that the following algorithm returns, with the algorithm being aborted once a value is returned. When the algorithm returns the empty string, then there is no advisory information.

1. If the element has a `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute, then return the result of running [normalize newlines](https://infra.spec.whatwg.org/#normalize-newlines) on its value.
2. If the element has a parent element, then return the parent element's [advisory information](https://html.spec.whatwg.org/multipage/dom.html#advisory-information).
3. Return the empty string.

User agents should inform the user when elements have [advisory information](https://html.spec.whatwg.org/multipage/dom.html#advisory-information), otherwise the information would not be discoverable.

---

**✔** MDN

The `title` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` content attribute.

##### **3.2.6.2** The `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` and `<a data-x-internal="attr-xml-lang" href="https://www.w3.org/TR/xml/#sec-lang-tag">xml:lang</a>` attributes

**✔** MDN

The `lang` attribute (in no namespace) specifies the primary language for the element's contents and for any of the element's attributes that contain text. Its value must be a valid BCP 47 language tag, or the empty string. Setting the attribute to the empty string indicates that the primary language is unknown. [[BCP47]](https://html.spec.whatwg.org/multipage/references.html#refsBCP47)

The [`lang`](https://www.w3.org/TR/xml/#sec-lang-tag) attribute in the [XML namespace](https://infra.spec.whatwg.org/#xml-namespace) is defined in XML. [[XML]](https://html.spec.whatwg.org/multipage/references.html#refsXML)

If these attributes are omitted from an element, then the language of this element is the same as the language of its parent element, if any (except for `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element">slot</a>` elements in a [shadow tree](https://dom.spec.whatwg.org/#concept-shadow-tree)).

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` attribute in no namespace may be used on any [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements).

The [`lang` attribute in the XML namespace](https://www.w3.org/TR/xml/#sec-lang-tag) may be used on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) in [XML documents](https://dom.spec.whatwg.org/#xml-document), as well as elements in other namespaces if the relevant specifications allow it (in particular, MathML and SVG allow [`lang` attributes in the XML namespace](https://www.w3.org/TR/xml/#sec-lang-tag) to be specified on their elements). If both the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` attribute in no namespace and the [`lang` attribute in the XML namespace](https://www.w3.org/TR/xml/#sec-lang-tag) are specified on the same element, they must have exactly the same value when compared in an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) manner.

Authors must not use the [`lang` attribute in the XML namespace](https://www.w3.org/TR/xml/#sec-lang-tag) on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) in [HTML documents](https://dom.spec.whatwg.org/#html-document). To ease migration to and from XML, authors may specify an attribute in no namespace with no prefix and with the literal localname "`xml:lang`" on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) in [HTML documents](https://dom.spec.whatwg.org/#html-document), but such attributes must only be specified if a `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` attribute in no namespace is also specified, and both attributes must have the same value when compared in an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) manner.

The attribute in no namespace with no prefix and with the literal localname "`xml:lang`" has no effect on language processing.

---

To determine the language of a node, user agents must use the first appropriate step in the following list:

If the node is an element that has a [`lang` attribute in the XML namespace](https://www.w3.org/TR/xml/#sec-lang-tag) setUse the value of that attribute.

If the node is an [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) or an element in the [SVG namespace](https://infra.spec.whatwg.org/#svg-namespace), and it has a `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` in no namespace attribute setUse the value of that attribute.

If the node's parent is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)Use the [language](https://html.spec.whatwg.org/multipage/dom.html#language) of that [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)'s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host).

If the node's [parent element](https://dom.spec.whatwg.org/#parent-element) is not nullUse the [language](https://html.spec.whatwg.org/multipage/dom.html#language) of that [parent element](https://dom.spec.whatwg.org/#parent-element).

OtherwiseIf there is a [pragma-set default language](https://html.spec.whatwg.org/multipage/semantics.html#pragma-set-default-language) set, then that is the language of the node. If there is no [pragma-set default language](https://html.spec.whatwg.org/multipage/semantics.html#pragma-set-default-language) set, then language information from a higher-level protocol (such as HTTP), if any, must be used as the final fallback language instead. In the absence of any such language information, and in cases where the higher-level protocol reports multiple languages, the language of the node is unknown, and the corresponding language tag is the empty string.

If the resulting value is not a recognized language tag, then it must be treated as an unknown language having the given language tag, distinct from all other languages. For the purposes of round-tripping or communicating with other services that expect language tags, user agents should pass unknown language tags through unmodified, and tagged as being BCP 47 language tags, so that subsequent services do not interpret the data as another type of language description. [[BCP47]](https://html.spec.whatwg.org/multipage/references.html#refsBCP47)

Thus, for instance, an element with `lang="xyzzy"` would be matched by the selector `:lang(xyzzy)` (e.g. in CSS), but it would not be matched by `:lang(abcde)`, even though both are equally invalid. Similarly, if a web browser and screen reader working in unison communicated about the language of the element, the browser would tell the screen reader that the language was "xyzzy", even if it knew it was invalid, just in case the screen reader actually supported a language with that tag after all. Even if the screen reader supported both BCP 47 and another syntax for encoding language names, and in that other syntax the string "xyzzy" was a way to denote the Belarusian language, it would be *incorrect* for the screen reader to then start treating text as Belarusian, because "xyzzy" is not how Belarusian is described in BCP 47 codes (BCP 47 uses the code "be" for Belarusian).

If the resulting value is the empty string, then it must be interpreted as meaning that the language of the node is explicitly unknown.

---

User agents may use the element's language to determine proper processing or rendering (e.g. in the selection of appropriate fonts or pronunciations, for dictionary selection, or for the user interfaces of form controls such as date pickers).

---

**✔** MDN

The `lang` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` content attribute in no namespace.

##### **3.2.6.3** The `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-translate">translate</a>` attribute

**✔** MDN

The `translate` attribute is used to specify whether an element's attribute values and the values of its `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node children are to be translated when the page is localized, or whether to leave them unchanged. It is an attribute is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) with the following keywords and states:


| Keyword            | State | Brief description                                                                                                                                                                   |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yes`              | yes   | Sets[translation mode](https://html.spec.whatwg.org/multipage/dom.html#translation-mode) to [translate-enabled](https://html.spec.whatwg.org/multipage/dom.html#translate-enabled). |
| (the empty string) |       |                                                                                                                                                                                     |
| `no`               | no    | Sets[translation mode](https://html.spec.whatwg.org/multipage/dom.html#translation-mode) to [no-translate](https://html.spec.whatwg.org/multipage/dom.html#no-translate).           |

The attribute's *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* and *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* are both the inherit state.

Each element (even non-HTML elements) has a translation mode, which is in either the [translate-enabled](https://html.spec.whatwg.org/multipage/dom.html#translate-enabled) state or the [no-translate](https://html.spec.whatwg.org/multipage/dom.html#no-translate) state. If an [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements)'s `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-translate">translate</a>` attribute is in the [yes](https://html.spec.whatwg.org/multipage/dom.html#attr-translate-yes-state) state, then the element's [translation mode](https://html.spec.whatwg.org/multipage/dom.html#translation-mode) is in the [translate-enabled](https://html.spec.whatwg.org/multipage/dom.html#translate-enabled) state; otherwise, if the element's `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-translate">translate</a>` attribute is in the [no](https://html.spec.whatwg.org/multipage/dom.html#attr-translate-no-state) state, then the element's [translation mode](https://html.spec.whatwg.org/multipage/dom.html#translation-mode) is in the [no-translate](https://html.spec.whatwg.org/multipage/dom.html#no-translate) state. Otherwise, either the element's `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-translate">translate</a>` attribute is in the [inherit](https://html.spec.whatwg.org/multipage/dom.html#attr-translate-inherit-state) state, or the element is not an [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) and thus does not have a `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-translate">translate</a>` attribute; in either case, the element's [translation mode](https://html.spec.whatwg.org/multipage/dom.html#translation-mode) is in the same state as its [parent element](https://dom.spec.whatwg.org/#parent-element)'s, if any, or in the [translate-enabled](https://html.spec.whatwg.org/multipage/dom.html#translate-enabled) state, if the element's [parent element](https://dom.spec.whatwg.org/#parent-element) is null.

When an element is in the translate-enabled state, the element's [translatable attributes](https://html.spec.whatwg.org/multipage/dom.html#translatable-attributes) and the values of its `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node children are to be translated when the page is localized.

When an element is in the no-translate state, the element's attribute values and the values of its `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node children are to be left as-is when the page is localized, e.g. because the element contains a person's name or a name of a computer program.

The following attributes are translatable attributes:

* `<a href="https://html.spec.whatwg.org/multipage/tables.html#attr-th-abbr">abbr</a>` on `<a href="https://html.spec.whatwg.org/multipage/tables.html#the-th-element">th</a>` elements
* `alt` on `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-alt">area</a>`, `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-alt">img</a>`, and `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-alt">input</a>` elements
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements, if the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute specifies a metadata name whose value is known to be translatable
* `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download">download</a>` on `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>` elements
* `label` on `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-optgroup-label">optgroup</a>`, `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-label">option</a>`, and `<a href="https://html.spec.whatwg.org/multipage/media.html#attr-track-label">track</a>` elements
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements); must be "translated" to match the language used in the translation
* `placeholder` on `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-placeholder">input</a>` and `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-placeholder">textarea</a>` elements
* `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-srcdoc">srcdoc</a>` on `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>` elements; must be parsed and recursively processed
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements); must be parsed and recursively processed (e.g. for the values of [&#39;content&#39;](https://drafts.csswg.org/css2/#content%E2%91%A0) properties)
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` on all [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements)
* `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-value">value</a>` on `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` elements with a `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">type</a>` attribute in the [Button](https://html.spec.whatwg.org/multipage/input.html#button-state-(type=button)) state or the [Reset Button](https://html.spec.whatwg.org/multipage/input.html#reset-button-state-(type=reset)) state

Other specifications may define other attributes that are also [translatable attributes](https://html.spec.whatwg.org/multipage/dom.html#translatable-attributes). For example, ARIA would define the `<a data-x-internal="attr-aria-label" href="https://w3c.github.io/aria/#aria-label">aria-label</a>` attribute as translatable.

---

The `translate` IDL attribute must, on getting, return true if the element's [translation mode](https://html.spec.whatwg.org/multipage/dom.html#translation-mode) is [translate-enabled](https://html.spec.whatwg.org/multipage/dom.html#translate-enabled), and false otherwise. On setting, it must set the content attribute's value to "`yes`" if the new value is true, and set the content attribute's value to "`no`" otherwise.

In this example, everything in the document is to be translated when the page is localized, except the sample keyboard input and sample program output:

```

  
 
  The Bee Game 
 
 
  The Bee Game is a text adventure game in English.
  When the game launches, the first thing you should do is type
   eat honey. The game will respond with:
   Yum yum! That was some good honey!
 
```

##### **3.2.6.4** The `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute

**✔** MDN

The `dir` attribute is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) with the following keywords and states:


| Keyword | State | Brief description                                                                                                                                                                      |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ltr`   | ltr   | The contents of the element are explicitly directionally isolated left-to-right text.                                                                                                  |
| `rtl`   | rtl   | The contents of the element are explicitly directionally isolated right-to-left text.                                                                                                  |
| `auto`  | auto  | The contents of the element are explicitly directionally isolated text, but the direction is to be determined programmatically using the contents of the element (as described below). |

The heuristic used by the [auto](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-auto-state) state is very crude (it just looks at the first character with a strong directionality, in a manner analogous to the Paragraph Level determination in the bidirectional algorithm). Authors are urged to only use this value as a last resort when the direction of the text is truly unknown and no better server-side heuristic can be applied. [[BIDI]](https://html.spec.whatwg.org/multipage/references.html#refsBIDI)

For `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>` and `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element">pre</a>` elements, the heuristic is applied on a per-paragraph level.

The attribute's *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* and *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* are both the undefined state.

---

The directionality of an element (any element, not just an [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements)) is either 'ltr' or 'rtl'. To compute the [directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) given an element element, switch on element's `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute state:

[ltr](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-ltr-state)Return '[ltr](https://html.spec.whatwg.org/multipage/dom.html#concept-ltr)'.

[rtl](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-rtl-state)Return '[rtl](https://html.spec.whatwg.org/multipage/dom.html#concept-rtl)'.

[auto](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-auto-state)1. Let result be the [auto directionality](https://html.spec.whatwg.org/multipage/dom.html#auto-directionality) of element.

1. If result is null, then return '[ltr](https://html.spec.whatwg.org/multipage/dom.html#concept-ltr)'.
2. Return result.

[undefined](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-undefined-state)If element is a `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element">bdi</a>` element1. Let result be the [auto directionality](https://html.spec.whatwg.org/multipage/dom.html#auto-directionality) of element.

1. If result is null, then return '[ltr](https://html.spec.whatwg.org/multipage/dom.html#concept-ltr)'.
2. Return result.

If element is an `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` element whose `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">type</a>` attribute is in the [Telephone](https://html.spec.whatwg.org/multipage/input.html#telephone-state-(type=tel)) stateReturn '[ltr](https://html.spec.whatwg.org/multipage/dom.html#concept-ltr)'.

OtherwiseReturn the [parent directionality](https://html.spec.whatwg.org/multipage/dom.html#parent-directionality) of element.

Since the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute is only defined for [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), it cannot be present on elements from other namespaces. Thus, elements from other namespaces always end up using the [parent directionality](https://html.spec.whatwg.org/multipage/dom.html#parent-directionality).

The auto-directionality form-associated elements are:

* `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` elements whose `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-type">type</a>` attribute is in the [Hidden](https://html.spec.whatwg.org/multipage/input.html#hidden-state-(type=hidden)), [Text](https://html.spec.whatwg.org/multipage/input.html#text-(type=text)-state-and-search-state-(type=search)), [Search](https://html.spec.whatwg.org/multipage/input.html#text-(type=text)-state-and-search-state-(type=search)), [Telephone](https://html.spec.whatwg.org/multipage/input.html#telephone-state-(type=tel)), [URL](https://html.spec.whatwg.org/multipage/input.html#url-state-(type=url)), [Email](https://html.spec.whatwg.org/multipage/input.html#email-state-(type=email)), [Password](https://html.spec.whatwg.org/multipage/input.html#password-state-(type=password)), [Submit Button](https://html.spec.whatwg.org/multipage/input.html#submit-button-state-(type=submit)), [Reset Button](https://html.spec.whatwg.org/multipage/input.html#reset-button-state-(type=reset)), or [Button](https://html.spec.whatwg.org/multipage/input.html#button-state-(type=button)) state, and
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>` elements.

To compute the auto directionality given an element element:

1. If element is an [auto-directionality form-associated element](https://html.spec.whatwg.org/multipage/dom.html#auto-directionality-form-associated-elements):
   1. If element's [value](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-value) contains a character of bidirectional character type AL or R, and there is no character of bidirectional character type L anywhere before it in the element's [value](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-value), then return '[rtl](https://html.spec.whatwg.org/multipage/dom.html#concept-rtl)'. [[BIDI]](https://html.spec.whatwg.org/multipage/references.html#refsBIDI)
   2. If element's [value](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#concept-fe-value) is not the empty string, then return '[ltr](https://html.spec.whatwg.org/multipage/dom.html#concept-ltr)'.
   3. Return null.
2. If element is a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element">slot</a>` element whose [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root) and element's [assigned nodes](https://dom.spec.whatwg.org/#slot-assigned-nodes) are not empty:
   1. [For each](https://infra.spec.whatwg.org/#list-iterate) node child of element's [assigned nodes](https://dom.spec.whatwg.org/#slot-assigned-nodes):
      1. Let childDirection be null.
      2. If child is a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node, then set childDirection to the [text node directionality](https://html.spec.whatwg.org/multipage/dom.html#text-node-directionality) of child.
      3. Otherwise:
         1. [Assert](https://infra.spec.whatwg.org/#assert): child is an `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>` node.
         2. Set childDirection to the [contained text auto directionality](https://html.spec.whatwg.org/multipage/dom.html#contained-text-auto-directionality) of child with *[canExcludeRoot](https://html.spec.whatwg.org/multipage/dom.html#auto-directionality-can-exclude-root)* set to true.
      4. If childDirection is not null, then return childDirection.
   2. Return null.
3. Return the [contained text auto directionality](https://html.spec.whatwg.org/multipage/dom.html#contained-text-auto-directionality) of element with *[canExcludeRoot](https://html.spec.whatwg.org/multipage/dom.html#auto-directionality-can-exclude-root)* set to false.

To compute the contained text auto directionality of an element element with a boolean canExcludeRoot:

1. [For each](https://infra.spec.whatwg.org/#list-iterate) node descendant of element's [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order):
   1. If any of

      * descendant
      * any ancestor element of descendant that is a descendant of element
      * if canExcludeRoot is true, element

      is one of

      * a `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element">bdi</a>` element
      * a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` element
      * a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element
      * a `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>` element
      * an element whose `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute is not in the [undefined](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-undefined-state) state

      then [continue](https://infra.spec.whatwg.org/#iteration-continue).
   2. If descendant is a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element">slot</a>` element whose [root](https://dom.spec.whatwg.org/#concept-tree-root) is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then return the [directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) of that [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root)'s [host](https://dom.spec.whatwg.org/#concept-documentfragment-host).
   3. If descendant is not a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node, then [continue](https://infra.spec.whatwg.org/#iteration-continue).
   4. Let result be the [text node directionality](https://html.spec.whatwg.org/multipage/dom.html#text-node-directionality) of descendant.
   5. If result is not null, then return result.
2. Return null.

To compute the text node directionality given a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node text:

1. If text's [data](https://dom.spec.whatwg.org/#concept-cd-data) does not contain a code point whose bidirectional character type is L, AL, or R, then return null. [[BIDI]](https://html.spec.whatwg.org/multipage/references.html#refsBIDI)
2. Let codePoint be the first code point in text's [data](https://dom.spec.whatwg.org/#concept-cd-data) whose bidirectional character type is L, AL, or R.
3. If codePoint is of bidirectional character type AL or R, then return '[rtl](https://html.spec.whatwg.org/multipage/dom.html#concept-rtl)'.
4. If codePoint is of bidirectional character type L, then return '[ltr](https://html.spec.whatwg.org/multipage/dom.html#concept-ltr)'.

To compute the parent directionality given an element element:

1. Let parentNode be element's parent node.
2. If parentNode is a [shadow root](https://dom.spec.whatwg.org/#concept-shadow-root), then return the [directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) of parentNode's [host](https://dom.spec.whatwg.org/#concept-documentfragment-host).
3. If parentNode is an element, then return the [directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) of parentNode.
4. Return '[ltr](https://html.spec.whatwg.org/multipage/dom.html#concept-ltr)'.

This attribute [has rendering requirements involving the bidirectional algorithm](https://html.spec.whatwg.org/multipage/dom.html#bidireq).

---

The directionality of an attribute of an [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements), which is used when the text of that attribute is to be included in the rendering in some manner, is determined as per the first appropriate set of steps from the following list:

If the attribute is a [directionality-capable attribute](https://html.spec.whatwg.org/multipage/dom.html#directionality-capable-attribute) and the element's `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute is in the [auto](https://html.spec.whatwg.org/multipage/dom.html#attr-dir-auto-state) stateFind the first character (in logical order) of the attribute's value that is of bidirectional character type L, AL, or R. [[BIDI]](https://html.spec.whatwg.org/multipage/references.html#refsBIDI)

If such a character is found and it is of bidirectional character type AL or R, the [directionality of the attribute](https://html.spec.whatwg.org/multipage/dom.html#directionality-of-the-attribute) is '[rtl](https://html.spec.whatwg.org/multipage/dom.html#concept-rtl)'.

Otherwise, the [directionality of the attribute](https://html.spec.whatwg.org/multipage/dom.html#directionality-of-the-attribute) is '[ltr](https://html.spec.whatwg.org/multipage/dom.html#concept-ltr)'.

OtherwiseThe [directionality of the attribute](https://html.spec.whatwg.org/multipage/dom.html#directionality-of-the-attribute) is the same as [the element&#39;s directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality).The following attributes are directionality-capable attributes:

* `<a href="https://html.spec.whatwg.org/multipage/tables.html#attr-th-abbr">abbr</a>` on `<a href="https://html.spec.whatwg.org/multipage/tables.html#the-th-element">th</a>` elements
* `alt` on `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-alt">area</a>`, `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-alt">img</a>`, and `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-alt">input</a>` elements
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements, if the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute specifies a metadata name whose value is primarily intended to be human-readable rather than machine-readable
* `label` on `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-optgroup-label">optgroup</a>`, `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-option-label">option</a>`, and `<a href="https://html.spec.whatwg.org/multipage/media.html#attr-track-label">track</a>` elements
* `placeholder` on `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-placeholder">input</a>` and `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-textarea-placeholder">textarea</a>` elements
* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` on all [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements)

---

`<var>document</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-dir" id="dom-dir-dev">dir</a><span> </span>[ =<span> </span><var>value</var><span> </span>]`Returns [the `html` element](https://html.spec.whatwg.org/multipage/dom.html#the-html-element-2)'s `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute's value, if any.

Can be set, to either "`ltr`", "`rtl`", or "`auto`" to replace [the `html` element](https://html.spec.whatwg.org/multipage/dom.html#the-html-element-2)'s `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute's value.

If there is no [`html` element](https://html.spec.whatwg.org/multipage/dom.html#the-html-element-2), returns the empty string and ignores new values.

**✔** MDN

The `dir` IDL attribute on an element must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` content attribute of that element, [limited to only known values](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-known-values).

**✔** MDN

The `dir` IDL attribute on `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` objects must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` content attribute of [the `html` element](https://html.spec.whatwg.org/multipage/dom.html#the-html-element-2), if any, [limited to only known values](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-known-values). If there is no such element, then the attribute must return the empty string and do nothing on setting.

Authors are strongly encouraged to use the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute to indicate text direction rather than using CSS, since that way their documents will continue to render correctly even in the absence of CSS (e.g. as interpreted by search engines).

This markup fragment is of an IM conversation.

```
  Student: How do you write "What's your name?" in Arabic?
  Teacher: ما اسمك؟
  Student: Thanks.
  Teacher: That's written "شكرًا".
  Teacher: Do you know how to write "Please"?
  Student: "من فضلك", right?
```

Given a suitable style sheet and the default alignment styles for the `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` element, namely to align the text to the *start edge* of the paragraph, the resulting rendering could be as follows:

![Each paragraph rendered as a separate block, with the paragraphs left-aligned except the second paragraph and the last one, which would be right aligned, with the usernames ('Student' and 'Teacher' in this example) flush right, with a colon to their left, and the text first to the left of that.](https://html.spec.whatwg.org/images/im.png)

As noted earlier, the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir-auto">auto</a>` value is not a panacea. The final paragraph in this example is misinterpreted as being right-to-left text, since it begins with an Arabic character, which causes the "right?" to be to the left of the Arabic text.

##### **3.2.6.5** The `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` attribute

**✔** MDN

All [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) may have the `style` content attribute set. This is a [style attribute](https://drafts.csswg.org/css-style-attr/#style-attribute) as defined by CSS Style Attributes. [[CSSATTR]](https://html.spec.whatwg.org/multipage/references.html#refsCSSATTR)

In user agents that support CSS, the attribute's value must be parsed when the attribute is added or has its value changed, according to the rules given for [style attributes](https://drafts.csswg.org/css-style-attr/#style-attribute). [[CSSATTR]](https://html.spec.whatwg.org/multipage/references.html#refsCSSATTR)

However, if the [Should element&#39;s inline behavior be blocked by Content Security Policy?](https://w3c.github.io/webappsec-csp/#should-block-inline) algorithm returns "`Blocked`" when executed upon the attribute's [element](https://dom.spec.whatwg.org/#interface-element), "`style attribute`", and the attribute's value, then the style rules defined in the attribute's value must not be applied to the [element](https://dom.spec.whatwg.org/#interface-element). [[CSP]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)

Documents that use `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` attributes on any of their elements must still be comprehensible and usable if those attributes were removed.

In particular, using the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` attribute to hide and show content, or to convey meaning that is otherwise not included in the document, is non-conforming. (To hide and show content, use the `<a href="https://html.spec.whatwg.org/multipage/interaction.html#attr-hidden">hidden</a>` attribute.)

---

`<var>element</var>.<a href="https://drafts.csswg.org/cssom/#dom-elementcssinlinestyle-style" id="dom-style-dev" data-x-internal="dom-style">style</a>`Returns a `<a data-x-internal="cssstyledeclaration" href="https://drafts.csswg.org/cssom/#the-cssstyledeclaration-interface">CSSStyleDeclaration</a>` object for the element's `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` attribute.

The `<a data-x-internal="dom-style" href="https://drafts.csswg.org/cssom/#dom-elementcssinlinestyle-style">style</a>` IDL attribute is defined in CSS Object Model. [[CSSOM]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOM)

In the following example, the words that refer to colors are marked up using the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>` element and the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` attribute to make those words show up in the relevant colors in visual media.

```
My sweat suit is  
green and my eyes are  
blue.
```

##### **3.2.6.6** Embedding custom non-visible data with the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-data-*">data-*</a>` attributes

**✔** MDN

A custom data attribute is an attribute in no namespace whose name starts with the string "`data-`", has at least one character after the hyphen, is [XML-compatible](https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible), and contains no [ASCII upper alphas](https://infra.spec.whatwg.org/#ascii-upper-alpha).

All attribute names on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) in [HTML documents](https://dom.spec.whatwg.org/#html-document) get ASCII-lowercased automatically, so the restriction on ASCII uppercase letters doesn't affect such documents.

[Custom data attributes](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute) are intended to store custom data, state, annotations, and similar, private to the page or application, for which there are no more appropriate attributes or elements.

These attributes are not intended for use by software that is not known to the administrators of the site that uses the attributes. For generic extensions that are to be used by multiple independent tools, either this specification should be extended to provide the feature explicitly, or a technology like [microdata](https://html.spec.whatwg.org/multipage/microdata.html#microdata) should be used (with a standardized vocabulary).

For instance, a site about music could annotate list items representing tracks in an album with custom data attributes containing the length of each track. This information could then be used by the site itself to allow the user to sort the list by track length, or to filter the list for tracks of certain lengths.

```

  Beyond The Sea
 ...
```

It would be inappropriate, however, for the user to use generic software not associated with that music site to search for tracks of a certain length by looking at this data.

This is because these attributes are intended for use by the site's own scripts, and are not a generic extension mechanism for publicly-usable metadata.

Similarly, a page author could write markup that provides information for a translation tool that they are intending to use:

```
The third  claim covers the case of 
HTML markup.
```

In this example, the "`data-mytrans-de`" attribute gives specific text for the MyTrans product to use when translating the phrase "claim" to German. However, the standard `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-translate">translate</a>` attribute is used to tell it that in all languages, "HTML" is to remain unchanged. When a standard attribute is available, there is no need for a [custom data attribute](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute) to be used.

In this example, custom data attributes are used to store the result of a feature detection for `<a data-x-internal="paymentrequest" href="https://w3c.github.io/payment-request/#dom-paymentrequest">PaymentRequest</a>`, which could be used in CSS to style a checkout page differently.

```

    window 
   documentdocumentElementdatasethasPaymentRequest  
 
```

Here, the `data-has-payment-request` attribute is effectively being used as a [boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute); it is enough to check the presence of the attribute. However, if the author so wishes, it could later be populated with some value, maybe to indicate limited functionality of the feature.

Every [HTML element](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) may have any number of [custom data attributes](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute) specified, with any value.

Authors should carefully design such extensions so that when the attributes are ignored and any associated CSS dropped, the page is still usable.

User agents must not derive any implementation behavior from these attributes or values. Specifications intended for user agents must not define these attributes to have any meaningful values.

JavaScript libraries may use the [custom data attributes](https://html.spec.whatwg.org/multipage/dom.html#custom-data-attribute), as they are considered to be part of the page on which they are used. Authors of libraries that are reused by many authors are encouraged to include their name in the attribute names, to reduce the risk of clashes. Where it makes sense, library authors are also encouraged to make the exact name used in the attribute names customizable, so that libraries whose authors unknowingly picked the same name can be used on the same page, and so that multiple versions of a particular library can be used on the same page even when those versions are not mutually compatible.

For example, a library called "DoQuery" could use attribute names like `data-doquery-range`, and a library called "jJo" could use attributes names like `data-jjo-range`. The jJo library could also provide an API to set which prefix to use (e.g. `J.setDataPrefix('j2')`, making the attributes have names like `data-j2-range`).

---

`<var>element</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-dataset" id="dom-dataset-dev">dataset</a>`**✔** MDN

Returns a `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>` object for the element's `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-data-*">data-*</a>` attributes.

Hyphenated names become camel-cased. For example, `data-foo-bar=""` becomes `element.dataset.fooBar`.

The `dataset` IDL attribute provides convenient accessors for all the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-data-*">data-*</a>` attributes on an element. On getting, the `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-dataset">dataset</a>` IDL attribute must return a `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>` whose associated element is this element.

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>` interface is used for the `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-dataset">dataset</a>` attribute. Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>` has an associated element.

```
[=,
 ]
  {
    ( );
  []   ( ,  );
  []   ( );
};
```

To get a `DOMStringMap`'s name-value pairs, run the following algorithm:

1. Let list be an empty list of name-value pairs.
2. For each content attribute on the `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>`'s [associated element](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-element) whose first five characters are the string "`data-`" and whose remaining characters (if any) do not include any [ASCII upper alphas](https://infra.spec.whatwg.org/#ascii-upper-alpha), in the order that those attributes are listed in the element's [attribute list](https://dom.spec.whatwg.org/#concept-element-attribute), add a name-value pair to list whose name is the attribute's name with the first five characters removed and whose value is the attribute's value.
3. For each name in list, for each U+002D HYPHEN-MINUS character (-) in the name that is followed by an [ASCII lower alpha](https://infra.spec.whatwg.org/#ascii-lower-alpha), remove the U+002D HYPHEN-MINUS character (-) and replace the character that followed it by the same character [converted to ASCII uppercase](https://infra.spec.whatwg.org/#ascii-uppercase).
4. Return list.

The [supported property names](https://webidl.spec.whatwg.org/#dfn-supported-property-names) on a `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>` object at any instant are the names of each pair returned from [getting the `DOMStringMap`&#39;s name-value pairs](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-pairs) at that instant, in the order returned.

To [determine the value of a named property](https://webidl.spec.whatwg.org/#dfn-determine-the-value-of-a-named-property) name for a `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>`, return the value component of the name-value pair whose name component is name in the list returned from [getting the `DOMStringMap`&#39;s name-value pairs](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-pairs).

To [set the value of a new named property](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-a-new-named-property) or [set the value of an existing named property](https://webidl.spec.whatwg.org/#dfn-set-the-value-of-an-existing-named-property) for a `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>`, given a property name name and a new value value, run the following steps:

1. If name contains a U+002D HYPHEN-MINUS character (-) followed by an [ASCII lower alpha](https://infra.spec.whatwg.org/#ascii-lower-alpha), then throw a [&#34;`SyntaxError`&#34;](https://webidl.spec.whatwg.org/#syntaxerror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
2. For each [ASCII upper alpha](https://infra.spec.whatwg.org/#ascii-upper-alpha) in name, insert a U+002D HYPHEN-MINUS character (-) before the character and replace the character with the same character [converted to ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
3. Insert the string `data-` at the front of name.
4. If name does not match the XML `<a data-x-internal="xml-name" href="https://www.w3.org/TR/xml/#NT-Name">Name</a>` production, throw an [&#34;`InvalidCharacterError`&#34;](https://webidl.spec.whatwg.org/#invalidcharactererror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
5. [Set an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) for the `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>`'s [associated element](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-element) using name and value.

To [delete an existing named property](https://webidl.spec.whatwg.org/#dfn-delete-an-existing-named-property) name for a `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>`, run the following steps:

1. For each [ASCII upper alpha](https://infra.spec.whatwg.org/#ascii-upper-alpha) in name, insert a U+002D HYPHEN-MINUS character (-) before the character and replace the character with the same character [converted to ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
2. Insert the string `data-` at the front of name.
3. [Remove an attribute by name](https://dom.spec.whatwg.org/#concept-element-attributes-remove) given name and the `<a href="https://html.spec.whatwg.org/multipage/dom.html#domstringmap">DOMStringMap</a>`'s [associated element](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-element).

This algorithm will only get invoked by Web IDL for names that are given by the earlier algorithm for [getting the `DOMStringMap`&#39;s name-value pairs](https://html.spec.whatwg.org/multipage/dom.html#concept-domstringmap-pairs). [[WEBIDL]](https://html.spec.whatwg.org/multipage/references.html#refsWEBIDL)

If a web page wanted an element to represent a space ship, e.g. as part of a game, it would have to use the `<a href="https://html.spec.whatwg.org/multipage/dom.html#classes">class</a>` attribute along with `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-data-*">data-*</a>` attributes:

```
  
    
     
  
       
  Fire
 
```

Notice how the hyphenated attribute name becomes camel-cased in the API.

Given the following fragment and elements with similar constructions:

```
  
     
    
```

...one could imagine a function `splashDamage()` that takes some arguments, the first of which is the element to process:

```
 splashDamagenode x y damage 
   nodeclassListcontains  
      nodedatasetx  x  
      nodedatasety  y  
     hp  parseIntnodedatasethp 
    hp  hp  damage
     hp   
      hp  
      nodedatasetai   
       nodedatasetability 
  
    nodedatasethp  hp 
  
```

#### **3.2.7** The `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-innertext">innerText</a>` and `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-outertext">outerText</a>` properties

**✔** MDN

`<var>element</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-innertext" id="dom-innertext-dev">innerText</a><span> </span>[ =<span> </span><var>value</var><span> </span>]`Returns the element's text content "as rendered".

Can be set, to replace the element's children with the given value, but with line breaks converted to `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element">br</a>` elements.

`<var>element</var>.<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-outertext" id="dom-outertext-dev">outerText</a><span> </span>[ =<span> </span><var>value</var><span> </span>]`Returns the element's text content "as rendered".

Can be set, to replace the element with the given value, but with line breaks converted to `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element">br</a>` elements.

The get the text steps, given an [HTMLElement](https://html.spec.whatwg.org/multipage/dom.html#htmlelement) element, are:

1. If element is not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) or if the user agent is a non-CSS user agent, then return element's [descendant text content](https://dom.spec.whatwg.org/#concept-descendant-text-content).
   This step can produce surprising results, as when the `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-innertext">innerText</a>` getter is invoked on an element not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered), its text contents are returned, but when accessed on an element that is [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered), all of its children that are not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) have their text contents ignored.
2. Let results be a new empty [list](https://infra.spec.whatwg.org/#list).
3. For each child node node of element:
   1. Let current be the [list](https://infra.spec.whatwg.org/#list) resulting in running the [rendered text collection steps](https://html.spec.whatwg.org/multipage/dom.html#rendered-text-collection-steps) with node. Each item in results will either be a [string](https://infra.spec.whatwg.org/#string) or a positive integer (a *required line break count* ).
      Intuitively, a *required line break count* item means that a certain number of line breaks appear at that point, but they can be collapsed with the line breaks induced by adjacent *required line break count* items, reminiscent to CSS margin-collapsing.
   2. For each item item in current, append item to results.
4. [Remove](https://infra.spec.whatwg.org/#list-remove) any items from results that are the empty string.
5. [Remove](https://infra.spec.whatwg.org/#list-remove) any runs of consecutive *required line break count* items at the start or end of results.
6. [Replace](https://infra.spec.whatwg.org/#list-replace) each remaining run of consecutive *required line break count* items with a string consisting of as many U+000A LF code points as the maximum of the values in the *required line break count* items.
7. Return the concatenation of the string items in results.

**✔** MDN

The `innerText` and `outerText` getter steps are to return the result of running [get the text steps](https://html.spec.whatwg.org/multipage/dom.html#get-the-text-steps) with [this](https://webidl.spec.whatwg.org/#this).

The rendered text collection steps, given a [node](https://dom.spec.whatwg.org/#interface-node) node, are as follows:

1. Let items be the result of running the [rendered text collection steps](https://html.spec.whatwg.org/multipage/dom.html#rendered-text-collection-steps) with each child node of node in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), and then concatenating the results to a single [list](https://infra.spec.whatwg.org/#list).
2. If node's [computed value](https://drafts.csswg.org/css-cascade/#computed-value) of [&#39;visibility&#39;](https://drafts.csswg.org/css2/#propdef-visibility) is not 'visible', then return items.
3. If node is not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered), then return items. For the purpose of this step, the following elements must act as described if the [computed value](https://drafts.csswg.org/css-cascade/#computed-value) of the [&#39;display&#39;](https://drafts.csswg.org/css2/#display-prop) property is not 'none':

   * `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element">select</a>` elements have an associated non-replaced inline [CSS box](https://drafts.csswg.org/css-display/#css-box) whose child boxes include only those of `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element">optgroup</a>` and `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` element child nodes;
   * `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element">optgroup</a>` elements have an associated non-replaced block-level [CSS box](https://drafts.csswg.org/css-display/#css-box) whose child boxes include only those of `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` element child nodes; and
   * `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element">option</a>` element have an associated non-replaced block-level [CSS box](https://drafts.csswg.org/css-display/#css-box) whose child boxes are as normal for non-replaced block-level [CSS boxes](https://drafts.csswg.org/css-display/#css-box).

   items can be non-empty due to 'display:contents'.
4. If node is a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node, then for each CSS text box produced by node, in content order, compute the text of the box after application of the CSS [&#39;white-space&#39;](https://drafts.csswg.org/css-text/#white-space-property) processing rules and [&#39;text-transform&#39;](https://drafts.csswg.org/css-text/#text-transform-property) rules, set items to the [list](https://infra.spec.whatwg.org/#list) of the resulting strings, and return items. The CSS [&#39;white-space&#39;](https://drafts.csswg.org/css-text/#white-space-property) processing rules are slightly modified: collapsible spaces at the end of lines are always collapsed, but they are only removed if the line is the last line of the block, or it ends with a `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element">br</a>` element. Soft hyphens should be preserved. [[CSSTEXT]](https://html.spec.whatwg.org/multipage/references.html#refsCSSTEXT)
5. If node is a `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element">br</a>` element, then [append](https://infra.spec.whatwg.org/#list-append) a string containing a single U+000A LF code point to items.
6. If node's [computed value](https://drafts.csswg.org/css-cascade/#computed-value) of [&#39;display&#39;](https://drafts.csswg.org/css2/#display-prop) is [&#39;table-cell&#39;](https://drafts.csswg.org/css-tables/#table-cell), and node's [CSS box](https://drafts.csswg.org/css-display/#css-box) is not the last [&#39;table-cell&#39;](https://drafts.csswg.org/css-tables/#table-cell) box of its enclosing [&#39;table-row&#39;](https://drafts.csswg.org/css-tables/#table-row) box, then [append](https://infra.spec.whatwg.org/#list-append) a string containing a single U+0009 TAB code point to items.
7. If node's [computed value](https://drafts.csswg.org/css-cascade/#computed-value) of [&#39;display&#39;](https://drafts.csswg.org/css2/#display-prop) is [&#39;table-row&#39;](https://drafts.csswg.org/css-tables/#table-row), and node's [CSS box](https://drafts.csswg.org/css-display/#css-box) is not the last [&#39;table-row&#39;](https://drafts.csswg.org/css-tables/#table-row) box of the nearest ancestor [&#39;table&#39;](https://drafts.csswg.org/css-tables/#table) box, then [append](https://infra.spec.whatwg.org/#list-append) a string containing a single U+000A LF code point to items.
8. If node is a `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` element, then [append](https://infra.spec.whatwg.org/#list-append) 2 (a *required line break count* ) at the beginning and end of items.
9. If node's [used value](https://drafts.csswg.org/css-cascade/#used-value) of [&#39;display&#39;](https://drafts.csswg.org/css2/#display-prop) is [block-level](https://drafts.csswg.org/css-display/#block-level) or [&#39;table-caption&#39;](https://drafts.csswg.org/css-tables/#table-caption), then [append](https://infra.spec.whatwg.org/#list-append) 1 (a *required line break count* ) at the beginning and end of items. [[CSSDISPLAY]](https://html.spec.whatwg.org/multipage/references.html#refsCSSDISPLAY)
   Floats and absolutely-positioned elements fall into this category.
10. Return items.

Note that descendant nodes of most replaced elements (e.g., `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>`, `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>`, and `<a href="https://html.spec.whatwg.org/multipage/media.html#the-video-element">video</a>` — but not `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>`) are not rendered by CSS, strictly speaking, and therefore have no [CSS boxes](https://drafts.csswg.org/css-display/#css-box) for the purposes of this algorithm.

This algorithm is amenable to being generalized to work on [ranges](https://dom.spec.whatwg.org/#concept-range). Then we can use it as the basis for `<a data-x-internal="selection" href="https://w3c.github.io/selection-api/#selection-interface">Selection</a>`'s stringifier and maybe expose it directly on [ranges](https://dom.spec.whatwg.org/#concept-range). See [Bugzilla bug 10583](https://www.w3.org/Bugs/Public/show_bug.cgi?id=10583).

---

The set the inner text steps, given an [HTMLElement](https://html.spec.whatwg.org/multipage/dom.html#htmlelement) element, and a string value are:

1. Let fragment be the [rendered text fragment](https://html.spec.whatwg.org/multipage/dom.html#rendered-text-fragment) for value given element's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. [Replace all](https://dom.spec.whatwg.org/#concept-node-replace-all) with fragment within element.

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-innertext">innerText</a>` setter steps are to run [set the inner text steps](https://html.spec.whatwg.org/multipage/dom.html#set-the-inner-text-steps).

The `<a href="https://html.spec.whatwg.org/multipage/dom.html#dom-outertext">outerText</a>` setter steps are:

1. If [this](https://webidl.spec.whatwg.org/#this)'s parent is null, then throw a [&#34;`NoModificationAllowedError`&#34;](https://webidl.spec.whatwg.org/#nomodificationallowederror) `<a data-x-internal="domexception" href="https://webidl.spec.whatwg.org/#dfn-DOMException">DOMException</a>`.
2. Let next be [this](https://webidl.spec.whatwg.org/#this)'s [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
3. Let previous be [this](https://webidl.spec.whatwg.org/#this)'s [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling).
4. Let fragment be the [rendered text fragment](https://html.spec.whatwg.org/multipage/dom.html#rendered-text-fragment) for the given value given [this](https://webidl.spec.whatwg.org/#this)'s [node document](https://dom.spec.whatwg.org/#concept-node-document).
5. If fragment has no [children](https://dom.spec.whatwg.org/#concept-tree-child), then [append](https://dom.spec.whatwg.org/#concept-node-append) a new `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is the empty string and [node document](https://dom.spec.whatwg.org/#concept-node-document) is [this](https://webidl.spec.whatwg.org/#this)'s [node document](https://dom.spec.whatwg.org/#concept-node-document) to fragment.
6. [Replace](https://dom.spec.whatwg.org/#concept-node-replace) [this](https://webidl.spec.whatwg.org/#this) with fragment within [this](https://webidl.spec.whatwg.org/#this)'s parent.
7. If next is non-null and next's [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling) is a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node, then [merge with the next text node](https://html.spec.whatwg.org/multipage/dom.html#merge-with-the-next-text-node) given next's [previous sibling](https://dom.spec.whatwg.org/#concept-tree-previous-sibling).
8. If previous is a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node, then [merge with the next text node](https://html.spec.whatwg.org/multipage/dom.html#merge-with-the-next-text-node) given previous.

The rendered text fragment for a string input given a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` document is the result of running the following steps:

1. Let fragment be a new `<a data-x-internal="documentfragment" href="https://dom.spec.whatwg.org/#interface-documentfragment">DocumentFragment</a>` whose [node document](https://dom.spec.whatwg.org/#concept-node-document) is document.
2. Let position be a [position variable](https://infra.spec.whatwg.org/#string-position-variable) for input, initially pointing at the start of input.
3. Let text be the empty string.
4. While position is not past the end of input:
   1. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are not U+000A LF or U+000D CR from input given position, and set text to the result.
   2. If text is not the empty string, then [append](https://dom.spec.whatwg.org/#concept-node-append) a new `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node whose [data](https://dom.spec.whatwg.org/#concept-cd-data) is text and [node document](https://dom.spec.whatwg.org/#concept-node-document) is document to fragment.
   3. While position is not past the end of input, and the code point at position is either U+000A LF or U+000D CR:
      1. If the code point at position is U+000D CR and the next code point is U+000A LF, then advance position to the next code point in input.
      2. Advance position to the next code point in input.
      3. [Append](https://dom.spec.whatwg.org/#concept-node-append) the result of [creating an element](https://dom.spec.whatwg.org/#concept-create-element) given document, `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element">br</a>`, and the [HTML namespace](https://infra.spec.whatwg.org/#html-namespace) to fragment.
5. Return fragment.

To merge with the next text node given a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node node:

1. Let next be node's [next sibling](https://dom.spec.whatwg.org/#concept-tree-next-sibling).
2. If next is not a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node, then return.
3. [Replace data](https://dom.spec.whatwg.org/#concept-cd-replace) with node, node's [data](https://dom.spec.whatwg.org/#concept-cd-data)'s [length](https://infra.spec.whatwg.org/#string-length), 0, and next's [data](https://dom.spec.whatwg.org/#concept-cd-data).
4. [Remove](https://dom.spec.whatwg.org/#concept-node-remove) next.

#### **3.2.8** Requirements relating to the bidirectional algorithm

##### **3.2.8.1** Authoring conformance criteria for bidirectional-algorithm formatting characters

[Text content](https://html.spec.whatwg.org/multipage/dom.html#text-content) in [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) with `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes in their [contents](https://html.spec.whatwg.org/multipage/dom.html#concept-html-contents), and text in attributes of [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) that allow free-form text, may contain characters in the ranges U+202A to U+202E and U+2066 to U+2069 (the bidirectional-algorithm formatting characters). [[BIDI]](https://html.spec.whatwg.org/multipage/references.html#refsBIDI)

Authors are encouraged to use the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute, the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element">bdo</a>` element, and the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element">bdi</a>` element, rather than maintaining the bidirectional-algorithm formatting characters manually. The bidirectional-algorithm formatting characters interact poorly with CSS.

##### **3.2.8.2** User agent conformance criteria

User agents must implement the Unicode bidirectional algorithm to determine the proper ordering of characters when rendering documents and parts of documents. [[BIDI]](https://html.spec.whatwg.org/multipage/references.html#refsBIDI)

The mapping of HTML to the Unicode bidirectional algorithm must be done in one of three ways. Either the user agent must implement CSS, including in particular the CSS [&#39;unicode-bidi&#39;](https://drafts.csswg.org/css-writing-modes/#unicode-bidi), [&#39;direction&#39;](https://drafts.csswg.org/css-writing-modes/#direction), and [&#39;content&#39;](https://drafts.csswg.org/css2/#content%E2%91%A0) properties, and must have, in its user agent style sheet, the rules using those properties given in this specification's [rendering](https://html.spec.whatwg.org/multipage/rendering.html#rendering) section, or, alternatively, the user agent must act as if it implemented just the aforementioned properties and had a user agent style sheet that included all the aforementioned rules, but without letting style sheets specified in documents override them, or, alternatively, the user agent must implement another styling language with equivalent semantics. [[CSSGC]](https://html.spec.whatwg.org/multipage/references.html#refsCSSGC)

The following elements and attributes have requirements defined by the [rendering](https://html.spec.whatwg.org/multipage/rendering.html#rendering) section that, due to the requirements in this section, are requirements on all user agents (not just those that [support the suggested default rendering](https://html.spec.whatwg.org/multipage/infrastructure.html#renderingUA)):

* `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-dir">dir</a>` attribute
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdi-element">bdi</a>` element
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-bdo-element">bdo</a>` element
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-br-element">br</a>` element
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element">pre</a>` element
* `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>` element
* `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-wbr-element">wbr</a>` element

#### **3.2.9** Requirements related to ARIA and to platform accessibility APIs

User agent requirements for implementing Accessibility API semantics on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) are defined in HTML Accessibility API Mappings. In addition to the rules there, for a [custom element](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element) element, the default ARIA role semantics are determined as follows: [[HTMLAAM]](https://html.spec.whatwg.org/multipage/references.html#refsHTMLAAM)

1. Let map be element's [internal content attribute map](https://html.spec.whatwg.org/multipage/custom-elements.html#internal-content-attribute-map).
2. If map["`role`"] [exists](https://infra.spec.whatwg.org/#map-exists), then return it.
3. Return no role.

Similarly, for a [custom element](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element) element, the default ARIA state and property semantics, for a state or property named stateOrProperty, are determined as follows:

1. If element's [attached internals](https://html.spec.whatwg.org/multipage/custom-elements.html#attached-internals) is non-null:
   1. If element's [attached internals](https://html.spec.whatwg.org/multipage/custom-elements.html#attached-internals)'s [get the stateOrProperty-associated element](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#attr-associated-element) exists, then return the result of running it.
   2. If element's [attached internals](https://html.spec.whatwg.org/multipage/custom-elements.html#attached-internals)'s [get the stateOrProperty-associated elements](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#attr-associated-elements) exists, then return the result of running it.
2. If element's [internal content attribute map](https://html.spec.whatwg.org/multipage/custom-elements.html#internal-content-attribute-map)[stateOrProperty] [exists](https://infra.spec.whatwg.org/#map-exists), then return it.
3. Return the default value for stateOrProperty.

The "default semantics" referred to here are sometimes also called "native", "implicit", or "host language" semantics in ARIA. [[ARIA]](https://html.spec.whatwg.org/multipage/references.html#refsARIA)

One implication of these definitions is that the default semantics can change over time. This allows custom elements the same expressivity as built-in elements; e.g., compare to how the default ARIA role semantics of an `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` element change as the `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>` attribute is added or removed.

For an example of this in action, see [the custom elements section](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-accessibility-example).

---

Conformance checker requirements for checking use of ARIA `<a href="https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-role">role</a>` and `<a href="https://html.spec.whatwg.org/multipage/infrastructure.html#attr-aria-*">aria-*</a>` attributes on [HTML elements](https://html.spec.whatwg.org/multipage/infrastructure.html#html-elements) are defined in ARIA in HTML. [[ARIAHTML]](https://html.spec.whatwg.org/multipage/references.html#refsARIAHTML)
