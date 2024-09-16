### URLs

#### **2.4.1** Terminology

A string is a valid non-empty URL if it is a [valid URL string](https://url.spec.whatwg.org/#valid-url-string) but it is not the empty string.

A string is a valid URL potentially surrounded by spaces if, after [stripping leading and trailing ASCII whitespace](https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace) from it, it is a [valid URL string](https://url.spec.whatwg.org/#valid-url-string).

A string is a valid non-empty URL potentially surrounded by spaces if, after [stripping leading and trailing ASCII whitespace](https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace) from it, it is a [valid non-empty URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url).

This specification defines the URL `about:legacy-compat` as a reserved, though unresolvable, `<a data-x-internal="about-protocol" href="https://www.rfc-editor.org/rfc/rfc6694#section-2">about:</a>` URL, for use in [DOCTYPE](https://html.spec.whatwg.org/multipage/syntax.html#syntax-doctype)s in [HTML documents](https://dom.spec.whatwg.org/#html-document) when needed for compatibility with XML tools. [[ABOUT]](https://html.spec.whatwg.org/multipage/references.html#refsABOUT)

This specification defines the URL `about:html-kind` as a reserved, though unresolvable, `<a data-x-internal="about-protocol" href="https://www.rfc-editor.org/rfc/rfc6694#section-2">about:</a>` URL, that is used as an identifier for kinds of media tracks. [[ABOUT]](https://html.spec.whatwg.org/multipage/references.html#refsABOUT)

This specification defines the URL `about:srcdoc` as a reserved, though unresolvable, `<a data-x-internal="about-protocol" href="https://www.rfc-editor.org/rfc/rfc6694#section-2">about:</a>` URL, that is used as the [URL](https://dom.spec.whatwg.org/#concept-document-url) of [`iframe` `srcdoc` documents](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#an-iframe-srcdoc-document). [[ABOUT]](https://html.spec.whatwg.org/multipage/references.html#refsABOUT)

The fallback base URL of a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object document is the [URL record](https://url.spec.whatwg.org/#concept-url) obtained by running these steps:

1. If document is [an `iframe` `srcdoc` document](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#an-iframe-srcdoc-document), then:
   1. [Assert](https://infra.spec.whatwg.org/#assert): document's [about base URL](https://html.spec.whatwg.org/multipage/dom.html#concept-document-about-base-url) is non-null.
   2. Return document's [about base URL](https://html.spec.whatwg.org/multipage/dom.html#concept-document-about-base-url).
2. If document's [URL](https://dom.spec.whatwg.org/#concept-document-url) [matches `about:blank`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#matches-about:blank) and document's [about base URL](https://html.spec.whatwg.org/multipage/dom.html#concept-document-about-base-url) is non-null, then return document's [about base URL](https://html.spec.whatwg.org/multipage/dom.html#concept-document-about-base-url).
3. Return document's [URL](https://dom.spec.whatwg.org/#concept-document-url).

The document base URL of a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object is the [URL record](https://url.spec.whatwg.org/#concept-url) obtained by running these steps:

1. If there is no `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element that has an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` attribute in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`, then return the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s [fallback base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fallback-base-url).
2. Otherwise, return the [frozen base URL](https://html.spec.whatwg.org/multipage/semantics.html#frozen-base-url) of the first `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` that has an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` attribute, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

---

A [URL](https://url.spec.whatwg.org/#concept-url) matches `about:blank` if its [scheme](https://url.spec.whatwg.org/#concept-url-scheme) is "`about`", its [path](https://url.spec.whatwg.org/#concept-url-path) contains a single string "`blank`", its [username](https://url.spec.whatwg.org/#concept-url-username) and [password](https://url.spec.whatwg.org/#concept-url-password) are the empty string, and its [host](https://url.spec.whatwg.org/#concept-url-host) is null.

Such a URL's [query](https://url.spec.whatwg.org/#concept-url-query) and [fragment](https://url.spec.whatwg.org/#concept-url-fragment) can be non-null. For example, the [URL record](https://url.spec.whatwg.org/#concept-url) created by [parsing](https://url.spec.whatwg.org/#concept-url-parser) "`about:blank?foo#bar`" [matches `about:blank`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#matches-about:blank).

A [URL](https://url.spec.whatwg.org/#concept-url) matches `about:srcdoc` if its [scheme](https://url.spec.whatwg.org/#concept-url-scheme) is "`about`", its [path](https://url.spec.whatwg.org/#concept-url-path) contains a single string "`srcdoc`", its [query](https://url.spec.whatwg.org/#concept-url-query) is null, its [username](https://url.spec.whatwg.org/#concept-url-username) and [password](https://url.spec.whatwg.org/#concept-url-password) are the empty string, and its [host](https://url.spec.whatwg.org/#concept-url-host) is null.

The reason that [matches `about:srcdoc`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#matches-about:srcdoc) ensures that the [URL](https://url.spec.whatwg.org/#concept-url)'s [query](https://url.spec.whatwg.org/#concept-url-query) is null is because it is not possible to create [an `iframe` `srcdoc` document](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#an-iframe-srcdoc-document) whose [URL](https://dom.spec.whatwg.org/#concept-document-url) has a non-null [query](https://url.spec.whatwg.org/#concept-url-query), unlike `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`s whose [URL](https://dom.spec.whatwg.org/#concept-document-url) [matches `about:blank`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#matches-about:blank). In other words, the set of all [URL](https://url.spec.whatwg.org/#concept-url)s that [match `about:srcdoc`](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#matches-about:srcdoc) only vary in their [fragment](https://url.spec.whatwg.org/#concept-url-fragment).

#### **2.4.2** Parsing URLs

Parsing a URL is the process of taking a string and obtaining the [URL record](https://url.spec.whatwg.org/#concept-url) that it represents. While this process is defined in URL, the HTML standard defines several wrappers to abstract base URLs and encodings. [[URL]](https://html.spec.whatwg.org/multipage/references.html#refsURL)

Most new APIs are to use [parse a URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#parse-a-url). Older APIs and HTML elements might have reason to use [encoding-parse a URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url). When a custom base URL is needed or no base URL is desired, the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) can of course be used directly as well.

To parse a URL, given a string url, relative to a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object or [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) environment, run these steps. They return failure or a [URL](https://url.spec.whatwg.org/#concept-url).

1. Let baseURL be environment's [base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url), if environment is a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object; otherwise environment's [API base URL](https://html.spec.whatwg.org/multipage/webappapis.html#api-base-url).
2. Return the result of applying the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) to url, with baseURL.

To encoding-parse a URL, given a string url, relative to a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object or [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) environment, run these steps. They return failure or a [URL](https://url.spec.whatwg.org/#concept-url).

1. Let encoding be [UTF-8](https://encoding.spec.whatwg.org/#utf-8).
2. If environment is a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object, then set encoding to environment's [character encoding](https://dom.spec.whatwg.org/#concept-document-encoding).
3. Otherwise, if environment's [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global) is a `<a href="https://html.spec.whatwg.org/multipage/nav-history-apis.html#window">Window</a>` object, set encoding to environment's [relevant global object](https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global)'s [associated `Document`](https://html.spec.whatwg.org/multipage/nav-history-apis.html#concept-document-window)'s [character encoding](https://dom.spec.whatwg.org/#concept-document-encoding).
4. Let baseURL be environment's [base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url), if environment is a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object; otherwise environment's [API base URL](https://html.spec.whatwg.org/multipage/webappapis.html#api-base-url).
5. Return the result of applying the [URL parser](https://url.spec.whatwg.org/#concept-url-parser) to url, with baseURL and encoding.

To encoding-parse-and-serialize a URL, given a string url, relative to a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object or [environment settings object](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) environment, run these steps. They return failure or a string.

1. Let url be the result of [encoding-parsing a URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url) given url, relative to environment.
2. If url is failure, then return failure.
3. Return the result of applying the [URL serializer](https://url.spec.whatwg.org/#concept-url-serializer) to url.

#### **2.4.3** Dynamic changes to base URLs

When a document's [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url) changes, all elements in that document are [affected by a base URL change](https://html.spec.whatwg.org/multipage/infrastructure.html#affected-by-a-base-url-change).

The following are [base URL change steps](https://html.spec.whatwg.org/multipage/infrastructure.html#base-url-change-steps), which run when an element is [affected by a base URL change](https://html.spec.whatwg.org/multipage/infrastructure.html#affected-by-a-base-url-change) (as defined by DOM):

If the element creates a [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink)If the [URL](https://url.spec.whatwg.org/#concept-url) identified by the hyperlink is being shown to the user, or if any data derived from that [URL](https://url.spec.whatwg.org/#concept-url) is affecting the display, then the `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>` attribute's value should be [reparsed](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url), relative to the element's [node document](https://dom.spec.whatwg.org/#concept-node-document) and the UI updated appropriately.

For example, the CSS `<a href="https://html.spec.whatwg.org/multipage/semantics-other.html#selector-link">:link</a>`/`<a href="https://html.spec.whatwg.org/multipage/semantics-other.html#selector-visited">:visited</a>` [pseudo-classes](https://drafts.csswg.org/selectors/#pseudo-class) might have been affected.

If the hyperlink has a `<a href="https://html.spec.whatwg.org/multipage/links.html#ping">ping</a>` attribute and its [URL(s)](https://url.spec.whatwg.org/#concept-url) are being shown to the user, then the `<a href="https://html.spec.whatwg.org/multipage/links.html#ping">ping</a>` attribute's tokens should be [reparsed](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url), relative to the element's [node document](https://dom.spec.whatwg.org/#concept-node-document) and the UI updated appropriately.

If the element is a `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-q-element">q</a>`, `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element">blockquote</a>`, `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-ins-element">ins</a>`, or `<a href="https://html.spec.whatwg.org/multipage/edits.html#the-del-element">del</a>` element with a `cite` attributeIf the [URL](https://url.spec.whatwg.org/#concept-url) identified by the `cite` attribute is being shown to the user, or if any data derived from that [URL](https://url.spec.whatwg.org/#concept-url) is affecting the display, then the `cite` attribute's value should be [reparsed](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url), relative to the element's [node document](https://dom.spec.whatwg.org/#concept-node-document) and the UI updated appropriately.

OtherwiseThe element is not directly affected.

For instance, changing the base URL doesn't affect the image displayed by `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` elements, although subsequent accesses of the `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-src">src</a>` IDL attribute from script will return a new [absolute URL](https://url.spec.whatwg.org/#syntax-url-absolute) that might no longer correspond to the image being shown.

### **2.5** Fetching resources

#### **2.5.1** Terminology

A [response](https://fetch.spec.whatwg.org/#concept-response) whose [type](https://fetch.spec.whatwg.org/#concept-response-type) is "`basic`", "`cors`", or "`default`" is CORS-same-origin. [[FETCH]](https://html.spec.whatwg.org/multipage/references.html#refsFETCH)

A [response](https://fetch.spec.whatwg.org/#concept-response) whose [type](https://fetch.spec.whatwg.org/#concept-response-type) is "`opaque`" or "`opaqueredirect`" is CORS-cross-origin.

A [response](https://fetch.spec.whatwg.org/#concept-response)'s unsafe response is its [internal response](https://fetch.spec.whatwg.org/#concept-internal-response) if it has one, and the [response](https://fetch.spec.whatwg.org/#concept-response) itself otherwise.

To create a potential-CORS request, given a url, destination, corsAttributeState, and an optional *same-origin fallback flag* , run these steps:

1. Let mode be "`no-cors`" if corsAttributeState is [No CORS](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-none), and "`cors`" otherwise.
2. If *same-origin fallback flag* is set and mode is "`no-cors`", set mode to "`same-origin`".
3. Let credentialsMode be "`include`".
4. If corsAttributeState is [Anonymous](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous), set credentialsMode to "`same-origin`".
5. Let request be a new [request](https://fetch.spec.whatwg.org/#concept-request) whose [URL](https://fetch.spec.whatwg.org/#concept-request-url) is url, [destination](https://fetch.spec.whatwg.org/#concept-request-destination) is destination, [mode](https://fetch.spec.whatwg.org/#concept-request-mode) is mode, [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) is credentialsMode, and whose [use-URL-credentials flag](https://fetch.spec.whatwg.org/#concept-request-use-url-credentials-flag) is set.

#### **2.5.2** Determining the type of a resource

The Content-Type metadata of a resource must be obtained and interpreted in a manner consistent with the requirements of MIME Sniffing. [[MIMESNIFF]](https://html.spec.whatwg.org/multipage/references.html#refsMIMESNIFF)

The [computed MIME type](https://mimesniff.spec.whatwg.org/#computed-mime-type) of a resource must be found in a manner consistent with the requirements given in MIME Sniffing. [[MIMESNIFF]](https://html.spec.whatwg.org/multipage/references.html#refsMIMESNIFF)

The [rules for sniffing images specifically](https://mimesniff.spec.whatwg.org/#rules-for-sniffing-images-specifically), the [rules for distinguishing if a resource is text or binary](https://mimesniff.spec.whatwg.org/#rules-for-text-or-binary), and the [rules for sniffing audio and video specifically](https://mimesniff.spec.whatwg.org/#rules-for-sniffing-audio-and-video-specifically) are also defined in MIME Sniffing. These rules return a [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) as their result. [[MIMESNIFF]](https://html.spec.whatwg.org/multipage/references.html#refsMIMESNIFF)

It is imperative that the rules in MIME Sniffing be followed exactly. When a user agent uses different heuristics for content type detection than the server expects, security problems can occur. For more details, see MIME Sniffing. [[MIMESNIFF]](https://html.spec.whatwg.org/multipage/references.html#refsMIMESNIFF)

#### **2.5.3** Extracting character encodings from `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements

The algorithm for extracting a character encoding from a `meta` element, given a string s, is as follows. It either returns a character encoding or nothing.

1. Let position be a pointer into s, initially pointing at the start of the string.
2. *Loop* : Find the first seven characters in s after position that are an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for the word "`charset`". If no such match is found, return nothing.
3. Skip any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) that immediately follow the word "`charset`" (there might not be any).
4. If the next character is not a U+003D EQUALS SIGN (=), then move position to point just before that next character, and jump back to the step labeled *loop* .
5. Skip any [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) that immediately follow the equals sign (there might not be any).
6. Process the next character as follows:
   If it is a U+0022 QUOTATION MARK character (") and there is a later U+0022 QUOTATION MARK character (") in sIf it is a U+0027 APOSTROPHE character (') and there is a later U+0027 APOSTROPHE character (') in sReturn the result of [getting an encoding](https://encoding.spec.whatwg.org/#concept-encoding-get) from the substring that is between this character and the next earliest occurrence of this character.If it is an unmatched U+0022 QUOTATION MARK character (")If it is an unmatched U+0027 APOSTROPHE character (')If there is no next characterReturn nothing.OtherwiseReturn the result of [getting an encoding](https://encoding.spec.whatwg.org/#concept-encoding-get) from the substring that consists of this character up to but not including the first [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) or U+003B SEMICOLON character (;), or the end of s, whichever comes first.

This algorithm is distinct from those in the HTTP specifications (for example, HTTP doesn't allow the use of single quotes and requires supporting a backslash-escape mechanism that is not supported by this algorithm). While the algorithm is used in contexts that, historically, were related to HTTP, the syntax as supported by implementations diverged some time ago. [[HTTP]](https://html.spec.whatwg.org/multipage/references.html#refsHTTP)

#### **2.5.4** CORS settings attributes

**✔** MDN

A CORS settings attribute is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) with the following keywords and states:


| Keyword            | State           | Brief description                                                                                                                                                                                                                                                                            |
| -------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `anonymous`        | Anonymous       | [Requests](https://fetch.spec.whatwg.org/#concept-request) for the element will have their [mode](https://fetch.spec.whatwg.org/#concept-request-mode) set to "`cors`" and their [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) set to "`same-origin`". |
| (the empty string) |                 |                                                                                                                                                                                                                                                                                              |
| `use-credentials`  | Use Credentials | [Requests](https://fetch.spec.whatwg.org/#concept-request) for the element will have their [mode](https://fetch.spec.whatwg.org/#concept-request-mode) set to "`cors`" and their [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) set to "`include`".     |

The attribute's *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* is the No CORS state, and its *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* is the [Anonymous](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous) state. For the purposes of [reflection](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect), the [canonical keyword](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#canonical-keyword) for the [Anonymous](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous) state is the `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous-keyword">anonymous</a>` keyword.

The majority of fetches governed by [CORS settings attributes](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute) will be done via the [create a potential-CORS request](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#create-a-potential-cors-request) algorithm.

For more modern features, where the request's [mode](https://fetch.spec.whatwg.org/#concept-request-mode) is always "`cors`", certain [CORS settings attributes](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute) have been repurposed to have a slightly different meaning, wherein they only impact the [request](https://fetch.spec.whatwg.org/#concept-request)'s [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode). To perform this translation, we define the CORS settings attribute credentials mode for a given [CORS settings attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute) to be determined by switching on the attribute's state:

[No CORS](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-none)[Anonymous](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-anonymous)"`same-origin`"[Use Credentials](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-none)"`include`"#### **2.5.5** Referrer policy attributes

A referrer policy attribute is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute). Each [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy), including the empty string, is a keyword for this attribute, mapping to a state of the same name.

The attribute's *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* and *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* are both the empty string state.

The impact of these states on the processing model of various [fetches](https://fetch.spec.whatwg.org/#concept-fetch) is defined in more detail throughout this specification, in Fetch, and in Referrer Policy. [[FETCH]](https://html.spec.whatwg.org/multipage/references.html#refsFETCH) [[REFERRERPOLICY]](https://html.spec.whatwg.org/multipage/references.html#refsREFERRERPOLICY)

Several signals can contribute to which processing model is used for a given [fetch](https://fetch.spec.whatwg.org/#concept-fetch); a [referrer policy attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#referrer-policy-attribute) is only one of them. In general, the order in which these signals are processed are:

1. First, the presence of a `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-noreferrer">noreferrer</a>` link type;
2. Then, the value of a [referrer policy attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#referrer-policy-attribute);
3. Then, the presence of any `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute set to `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-referrer">referrer</a>`.
4. Finally, the ``<a data-x-internal="http-referrer-policy" href="https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-header-dfn">Referrer-Policy</a>`` HTTP header.

#### **2.5.6** Nonce attributes

**✔** MDN

A `nonce` content attribute represents a cryptographic nonce ("number used once") which can be used by Content Security Policy to determine whether or not a given fetch will be allowed to proceed. The value is text. [[CSP]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)

Elements that have a `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>` content attribute ensure that the cryptographic nonce is only exposed to script (and not to side-channels like CSS attribute selectors) by taking the value from the content attribute, moving it into an internal slot named [[CryptographicNonce]], exposing it to script via the `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement">HTMLOrSVGElement</a>` interface mixin, and setting the content attribute to the empty string. Unless otherwise specified, the slot's value is the empty string.

`<var>element</var>.<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#dom-noncedelement-nonce" id="dom-htmlorsvgelement-nonce-dev">nonce</a>`Returns the value set for element's cryptographic nonce. If the setter was not used, this will be the value originally found in the `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>` content attribute.

`<var>element</var>.<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#dom-noncedelement-nonce" id="nonce-attributes:dom-noncedelement-nonce">nonce</a><span> </span>=<span> </span><var>value</var>`Updates element's cryptographic nonce value.

MDN

The `nonce` IDL attribute must, on getting, return the value of this element's [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce); and on setting, set this element's [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce) to the given value.

Note how the setter for the `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#dom-noncedelement-nonce">nonce</a>` IDL attribute does not update the corresponding content attribute. This, as well as the below setting of the `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>` content attribute to the empty string when an element [becomes browsing-context connected](https://html.spec.whatwg.org/multipage/infrastructure.html#becomes-browsing-context-connected), is meant to prevent exfiltration of the nonce value through mechanisms that can easily read content attributes, such as selectors. Learn more in [issue #2369](https://github.com/whatwg/html/issues/2369), where this behavior was introduced.

The following [attribute change steps](https://dom.spec.whatwg.org/#concept-element-attributes-change-ext) are used for the `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>` content attribute:

1. If element does not [include](https://webidl.spec.whatwg.org/#include) `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement">HTMLOrSVGElement</a>`, then return.
2. If localName is not `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>` or namespace is not null, then return.
3. If value is null, then set element's [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce) to the empty string.
4. Otherwise, set element's [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce) to value.

Whenever an element [including](https://webidl.spec.whatwg.org/#include) `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement">HTMLOrSVGElement</a>` [becomes browsing-context connected](https://html.spec.whatwg.org/multipage/infrastructure.html#becomes-browsing-context-connected), the user agent must execute the following steps on the element:

1. Let CSP list be element's [shadow-including root](https://dom.spec.whatwg.org/#concept-shadow-including-root)'s [policy container](https://html.spec.whatwg.org/multipage/dom.html#concept-document-policy-container)'s [CSP list](https://html.spec.whatwg.org/multipage/browsers.html#policy-container-csp-list).
2. If CSP list [contains a header-delivered Content Security Policy](https://w3c.github.io/webappsec-csp/#contains-a-header-delivered-content-security-policy), and element has a `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>` content attribute attr whose value is not the empty string, then:

   1. Let nonce be element's [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce).
   2. [Set an attribute value](https://dom.spec.whatwg.org/#concept-element-attributes-set-value) for element using "`<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>`" and the empty string.
   3. Set element's [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce) to nonce.

   If element's [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce) were not restored it would be the empty string at this point.

The [cloning steps](https://dom.spec.whatwg.org/#concept-node-clone-ext) for elements that [include](https://webidl.spec.whatwg.org/#include) `<a href="https://html.spec.whatwg.org/multipage/dom.html#htmlorsvgelement">HTMLOrSVGElement</a>` must set the [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce) slot on the copy to the value of the slot on the element being cloned.

#### **2.5.7** Lazy loading attributes

**✔** MDN

A lazy loading attribute is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) with the following keywords and states:


| Keyword | State | Brief description                                                |
| --------- | ------- | ------------------------------------------------------------------ |
| `lazy`  | Lazy  | Used to defer fetching a resource until some conditions are met. |
| `eager` | Eager | Used to fetch a resource immediately; the default state.         |

The attribute directs the user agent to fetch a resource immediately or to defer fetching until some conditions associated with the element are met, according to the attribute's current state.

The attribute's *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* and *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* are both the [Eager](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-loading-eager-state) state.

---

The will lazy load element steps, given an element element, are as follows:

1. If [scripting is disabled](https://html.spec.whatwg.org/multipage/webappapis.html#concept-n-noscript) for element, then return false.
   This is an anti-tracking measure, because if a user agent supported lazy loading when scripting is disabled, it would still be possible for a site to track a user's approximate scroll position throughout a session, by strategically placing images in a page's markup such that a server can track how many images are requested and when.
2. If element's [lazy loading attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attribute) is in the [Lazy](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-loading-lazy-state) state, then return true.
3. Return false.

Each `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` and `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>` element has associated lazy load resumption steps, initially null.

For `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` and `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>` elements that [will lazy load](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#will-lazy-load-element-steps), these steps are run from the [lazy load intersection observer](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-intersection-observer)'s callback or when their [lazy loading attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attribute) is set to the [Eager](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-loading-eager-state) state. This causes the element to continue loading.

Each `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a lazy load intersection observer, initially set to null but can be set to an `<a data-x-internal="intersectionobserver" href="https://w3c.github.io/IntersectionObserver/#intersectionobserver">IntersectionObserver</a>` instance.

To start intersection-observing a lazy loading element element, run these steps:

1. Let doc be element's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. If doc's [lazy load intersection observer](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-intersection-observer) is null, set it to a new `<a data-x-internal="intersectionobserver" href="https://w3c.github.io/IntersectionObserver/#intersectionobserver">IntersectionObserver</a>` instance, initialized as follows:
   The intention is to use the original value of the `<a data-x-internal="intersectionobserver" href="https://w3c.github.io/IntersectionObserver/#intersectionobserver">IntersectionObserver</a>` constructor. However, we're forced to use the JavaScript-exposed constructor in this specification, until Intersection Observer exposes low-level hooks for use in specifications. See bug [w3c/IntersectionObserver#464](https://github.com/w3c/IntersectionObserver/issues/464) which tracks this. [[INTERSECTIONOBSERVER]](https://html.spec.whatwg.org/multipage/references.html#refsINTERSECTIONOBSERVER)
   * The callback is these steps, with arguments entries and observer:
     1. For each entry in entries **using a method of iteration which does not trigger developer-modifiable array accessors or iteration hooks**:

        1. Let resumptionSteps be null.
        2. If entry.`<a data-x-internal="dom-intersectionobserverentry-isintersecting" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-isintersecting">isIntersecting</a>` is true, then set resumptionSteps to entry.`<a data-x-internal="dom-intersectionobserverentry-target" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-target">target</a>`'s [lazy load resumption steps](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-resumption-steps).
        3. If resumptionSteps is null, then return.
        4. [Stop intersection-observing a lazy loading element](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#stop-intersection-observing-a-lazy-loading-element) for entry.`<a data-x-internal="dom-intersectionobserverentry-target" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-target">target</a>`.
        5. Set entry.`<a data-x-internal="dom-intersectionobserverentry-target" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-target">target</a>`'s [lazy load resumption steps](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-resumption-steps) to null.
        6. Invoke resumptionSteps.

        The intention is to use the original value of the `<a data-x-internal="dom-intersectionobserverentry-isintersecting" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-isintersecting">isIntersecting</a>` and `<a data-x-internal="dom-intersectionobserverentry-target" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-target">target</a>` getters. See [w3c/IntersectionObserver#464](https://github.com/w3c/IntersectionObserver/issues/464). [[INTERSECTIONOBSERVER]](https://html.spec.whatwg.org/multipage/references.html#refsINTERSECTIONOBSERVER)
   * The options is an `<a data-x-internal="intersectionobserverinit" href="https://w3c.github.io/IntersectionObserver/#dictdef-intersectionobserverinit">IntersectionObserverInit</a>` dictionary with the following dictionary members: «[ "`scrollMargin`" → [lazy load scroll margin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-root-margin) ]»
     This allows for fetching the image during scrolling, when it does not yet — but is about to — intersect the viewport.
     The [lazy load scroll margin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-root-margin) suggestions imply dynamic changes to the value, but the `<a data-x-internal="intersectionobserver" href="https://w3c.github.io/IntersectionObserver/#intersectionobserver">IntersectionObserver</a>` API does not support changing the scroll margin. See issue [w3c/IntersectionObserver#428](https://github.com/w3c/IntersectionObserver/issues/428).
3. Call doc's [lazy load intersection observer](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-intersection-observer)'s `<a data-x-internal="dom-intersectionobserver-observe" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-observe">observe</a>` method with element as the argument.
   The intention is to use the original value of the `<a data-x-internal="dom-intersectionobserver-observe" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-observe">observe</a>` method. See [w3c/IntersectionObserver#464](https://github.com/w3c/IntersectionObserver/issues/464). [[INTERSECTIONOBSERVER]](https://html.spec.whatwg.org/multipage/references.html#refsINTERSECTIONOBSERVER)

To stop intersection-observing a lazy loading element element, run these steps:

1. Let doc be element's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. [Assert](https://infra.spec.whatwg.org/#assert): doc's [lazy load intersection observer](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-intersection-observer) is not null.
3. Call doc's [lazy load intersection observer](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-intersection-observer)'s `<a data-x-internal="dom-intersectionobserver-unobserve" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-unobserve">unobserve</a>` method with element as the argument.
   The intention is to use the original value of the `<a data-x-internal="dom-intersectionobserver-unobserve" href="https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-unobserve">unobserve</a>` method. See [w3c/IntersectionObserver#464](https://github.com/w3c/IntersectionObserver/issues/464). [[INTERSECTIONOBSERVER]](https://html.spec.whatwg.org/multipage/references.html#refsINTERSECTIONOBSERVER)

[![(This is a tracking vector.)](https://resources.whatwg.org/tracking-vector.svg)](https://infra.spec.whatwg.org/#tracking-vector "There is a tracking vector here.")The lazy load scroll margin is an [implementation-defined](https://infra.spec.whatwg.org/#implementation-defined) value, but with the following suggestions to consider:

* Set a minimum value that most often results in the resources being loaded before they intersect the viewport under normal usage patterns for the given device.
* The typical scrolling speed: increase the value for devices with faster typical scrolling speeds.
* The current scrolling speed or momentum: the UA can attempt to predict where the scrolling will likely stop, and adjust the value accordingly.
* The network quality: increase the value for slow or high-latency connections.
* User preferences can influence the value.

It is important [for privacy](https://infra.spec.whatwg.org/#tracking-vector) that the [lazy load scroll margin](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-load-root-margin) not leak additional information. For example, the typical scrolling speed on the current device could be imprecise so as to not introduce a new fingerprinting vector.

#### **2.5.8** Blocking attributes

A blocking attribute explicitly indicates that certain operations should be blocked on the fetching of an external resource. The operations that can be blocked are represented by possible blocking tokens, which are strings listed by the following table:


| Possible blocking token | Description                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| "`render`"              | The element is[potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking). |

In the future, there might be more [possible blocking tokens](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#possible-blocking-token).

A [blocking attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute) must have a value that is an [unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens), each of which are [possible blocking tokens](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#possible-blocking-token). The [supported tokens](https://dom.spec.whatwg.org/#concept-supported-tokens) of a [blocking attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute) are the [possible blocking tokens](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#possible-blocking-token). Any element can have at most one [blocking attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute).

The blocking tokens set for an element el are the result of the following steps:

1. Let value be the value of el's [blocking attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute), or the empty string if no such attribute exists.
2. Set value to value, [converted to ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
3. Let rawTokens be the result of [splitting value on ASCII whitespace](https://infra.spec.whatwg.org/#split-on-ascii-whitespace).
4. Return a set containing the elements of rawTokens that are [possible blocking tokens](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#possible-blocking-token).

An element is potentially render-blocking if its [blocking tokens set](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-tokens-set) contains "`<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-token-render">render</a>`", or if it is implicitly potentially render-blocking, which will be defined at the individual elements. By default, an element is not [implicitly potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#implicitly-potentially-render-blocking).

#### **2.5.9** Fetch priority attributes

A fetch priority attribute is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) with the following keywords and states:


| Keyword | State | Brief description                                                                                                                                                                                                     |
| --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `high`  | high  | Signals a high-priority[fetch](https://fetch.spec.whatwg.org/#concept-fetch) relative to other resources with the same [destination](https://fetch.spec.whatwg.org/#concept-request-destination).                     |
| `low`   | low   | Signals a low-priority[fetch](https://fetch.spec.whatwg.org/#concept-fetch) relative to other resources with the same [destination](https://fetch.spec.whatwg.org/#concept-request-destination).                      |
| `auto`  | auto  | Signals automatic determination of[fetch](https://fetch.spec.whatwg.org/#concept-fetch) priority relative to other resources with the same [destination](https://fetch.spec.whatwg.org/#concept-request-destination). |

The attribute's *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* and *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* are both the [auto](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-auto-state) state.
