## The elements of HTML

### **4.1** The document element

#### **4.1.1** The `html` element

**✔** MDN

**✔** MDN

[Categories](https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories):None.[Contexts in which this element can be used](https://html.spec.whatwg.org/multipage/dom.html#concept-element-contexts):As document's [document element](https://dom.spec.whatwg.org/#document-element).Wherever a subdocument fragment is allowed in a compound document.[Content model](https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model):A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element followed by a `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` element.[Tag omission in text/html](https://html.spec.whatwg.org/multipage/dom.html#concept-element-tag-omission):An `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element's [start tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-start-tag) can be omitted if the first thing inside the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element is not a [comment](https://html.spec.whatwg.org/multipage/syntax.html#syntax-comments).An `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element's [end tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-end-tag) can be omitted if the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element is not immediately followed by a [comment](https://html.spec.whatwg.org/multipage/syntax.html#syntax-comments).[Content attributes](https://html.spec.whatwg.org/multipage/dom.html#concept-element-attributes):[Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)[Accessibility considerations](https://html.spec.whatwg.org/multipage/dom.html#concept-element-accessibility-considerations):[For authors](https://w3c.github.io/html-aria/#el-html).[For implementers](https://w3c.github.io/html-aam/#el-html).[DOM interface](https://html.spec.whatwg.org/multipage/dom.html#concept-element-dom):

```
[=]
  :  {
  [] ();

  // also has obsolete members
};
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element [represents](https://html.spec.whatwg.org/multipage/dom.html#represents) the root of an HTML document.

Authors are encouraged to specify a `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` attribute on the root `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element, giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth.

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element in the following example declares that the document's language is English.

```

 

Swapping Songs


Swapping Songs
Tonight I swapped some of the songs I wrote with some friends, who
gave me some of the songs they wrote. I love sharing my music.

```

### **4.2** Document metadata

#### **4.2.1** The `head` element

**✔** MDN

**✔** MDN

[Categories](https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories):None.[Contexts in which this element can be used](https://html.spec.whatwg.org/multipage/dom.html#concept-element-contexts):As the first element in an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element.[Content model](https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model):If the document is [an `iframe` `srcdoc` document](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#an-iframe-srcdoc-document) or if title information is available from a higher-level protocol: Zero or more elements of [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2), of which no more than one is a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element and no more than one is a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element.Otherwise: One or more elements of [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2), of which exactly one is a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element and no more than one is a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element.[Tag omission in text/html](https://html.spec.whatwg.org/multipage/dom.html#concept-element-tag-omission):A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element's [start tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-start-tag) can be omitted if the element is empty, or if the first thing inside the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element is an element.A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element's [end tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-end-tag) can be omitted if the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element is not immediately followed by [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) or a [comment](https://html.spec.whatwg.org/multipage/syntax.html#syntax-comments).[Content attributes](https://html.spec.whatwg.org/multipage/dom.html#concept-element-attributes):[Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)[Accessibility considerations](https://html.spec.whatwg.org/multipage/dom.html#concept-element-accessibility-considerations):[For authors](https://w3c.github.io/html-aria/#el-head).[For implementers](https://w3c.github.io/html-aam/#el-head).[DOM interface](https://html.spec.whatwg.org/multipage/dom.html#concept-element-dom):

```
[=]
  :  {
  [] ();
};
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element [represents](https://html.spec.whatwg.org/multipage/dom.html#represents) a collection of metadata for the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.

The collection of metadata in a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element can be large or small. Here is an example of a very short one:

```

 
 
  A document with a short head
 
 
 ...
```

Here is an example of a longer one:

```

 
 
   
   
  An application with a long head
  
   
   
  
 
 
 ...
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element is a required child in most situations, but when a higher-level protocol provides title information, e.g., in the subject line of an email when HTML is used as an email authoring format, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element can be omitted.

#### **4.2.2** The `title` element

**✔** MDN

**✔** MDN

[Categories](https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories):[Metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2).[Contexts in which this element can be used](https://html.spec.whatwg.org/multipage/dom.html#concept-element-contexts):In a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element containing no other `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` elements.[Content model](https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model):[Text](https://html.spec.whatwg.org/multipage/dom.html#text-content) that is not [inter-element whitespace](https://html.spec.whatwg.org/multipage/dom.html#inter-element-whitespace).[Tag omission in text/html](https://html.spec.whatwg.org/multipage/dom.html#concept-element-tag-omission):Neither tag is omissible.[Content attributes](https://html.spec.whatwg.org/multipage/dom.html#concept-element-attributes):[Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)[Accessibility considerations](https://html.spec.whatwg.org/multipage/dom.html#concept-element-accessibility-considerations):[For authors](https://w3c.github.io/html-aria/#el-title).[For implementers](https://w3c.github.io/html-aam/#el-title).[DOM interface](https://html.spec.whatwg.org/multipage/dom.html#concept-element-dom):

```
[=]
  :  {
  [] ();

  []   ;
};
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element [represents](https://html.spec.whatwg.org/multipage/dom.html#represents) the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context.

There must be no more than one `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element per document.

If it's reasonable for the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` to have no title, then the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element is probably not required. See the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element's content model for a description of when the element is required.

`<var>title</var>.<a href="https://html.spec.whatwg.org/multipage/semantics.html#dom-title-text" id="dom-title-text-dev">text</a><span> </span>[ =<span> </span><var>value</var><span> </span>]`Returns the [child text content](https://dom.spec.whatwg.org/#concept-child-text-content) of the element.

Can be set, to replace the element's children with the given value.

The `text` attribute's getter must return this `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element's [child text content](https://dom.spec.whatwg.org/#concept-child-text-content).

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#dom-title-text">text</a>` attribute's setter must [string replace all](https://dom.spec.whatwg.org/#string-replace-all) with the given value within this `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element.

Here are some examples of appropriate titles, contrasted with the top-level headings that might be used on those same pages.

```
  Introduction to The Mating Rituals of Bees
    ...
  Introduction
  This companion guide to the highly successful
  Introduction to Medieval Bee-Keeping book is...
```

The next page might be a part of the same site. Note how the title describes the subject matter unambiguously, while the first heading assumes the reader knows what the context is and therefore won't wonder if the dances are Salsa or Waltz:

```
  Dances used during bee mating rituals
    ...
  The Dances
```

The string to use as the document's title is given by the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document.title">document.title</a>` IDL attribute.

User agents should use the document's title when referring to the document in their user interface. When the contents of a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element are used in this way, [the directionality](https://html.spec.whatwg.org/multipage/dom.html#the-directionality) of that `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element should be used to set the directionality of the document's title in the user interface.

#### **4.2.3** The `base` element

**✔** MDN

**✔** MDN

[Categories](https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories):[Metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2).[Contexts in which this element can be used](https://html.spec.whatwg.org/multipage/dom.html#concept-element-contexts):In a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element containing no other `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` elements.[Content model](https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model):[Nothing](https://html.spec.whatwg.org/multipage/dom.html#concept-content-nothing).[Tag omission in text/html](https://html.spec.whatwg.org/multipage/dom.html#concept-element-tag-omission):No [end tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-end-tag).[Content attributes](https://html.spec.whatwg.org/multipage/dom.html#concept-element-attributes):[Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` — [Document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-target">target</a>` — Default [navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate) and [form submission](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-submission-2)[Accessibility considerations](https://html.spec.whatwg.org/multipage/dom.html#concept-element-accessibility-considerations):[For authors](https://w3c.github.io/html-aria/#el-base).[For implementers](https://w3c.github.io/html-aam/#el-base).[DOM interface](https://html.spec.whatwg.org/multipage/dom.html#concept-element-dom):

```
[=]
  :  {
  [] ();

  []   ;
  []   ;
};
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element allows authors to specify the [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url) for the purposes of parsing [URLs](https://url.spec.whatwg.org/#concept-url), and the name of the default [navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) for the purposes of [following hyperlinks](https://html.spec.whatwg.org/multipage/links.html#following-hyperlinks-2). The element does not [represent](https://html.spec.whatwg.org/multipage/dom.html#represents) any content beyond this information.

There must be no more than one `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element per document.

A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element must have either an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` attribute, a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-target">target</a>` attribute, or both.

The `href` content attribute, if specified, must contain a [valid URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-url-potentially-surrounded-by-spaces).

A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element, if it has an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` attribute, must come before any other elements in the tree that have attributes defined as taking [URLs](https://url.spec.whatwg.org/#concept-url), except the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element (its `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#attr-html-manifest">manifest</a>` attribute isn't affected by `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` elements).

If there are multiple `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` elements with `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` attributes, all but the first are ignored.

The `target` attribute, if specified, must contain a [valid navigable target name or keyword](https://html.spec.whatwg.org/multipage/document-sequences.html#valid-navigable-target-name-or-keyword), which specifies which [navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#navigable) is to be used as the default when [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink) and [forms](https://html.spec.whatwg.org/multipage/forms.html#the-form-element) in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` cause [navigation](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate).

A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element, if it has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-target">target</a>` attribute, must come before any elements in the tree that represent [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink).

If there are multiple `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` elements with `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-target">target</a>` attributes, all but the first are ignored.

To get an element's target, given an `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>`, `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>`, or `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>` element element, and an optional string-or-null target (default null), run these steps:

1. If target is null, then:
   1. If element has a `target` attribute, then set target to that attribute's value.
   2. Otherwise, if element's [node document](https://dom.spec.whatwg.org/#concept-node-document) contains a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element with a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-target">target</a>` attribute, set target to the value of the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-target">target</a>` attribute of the first such `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element.
2. If target is not null, and contains an [ASCII tab or newline](https://infra.spec.whatwg.org/#ascii-tab-or-newline) and a U+003C (<), then set target to "`_blank`".
3. Return target.

---

A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element that is the first `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` content attribute [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree) has a frozen base URL. The [frozen base URL](https://html.spec.whatwg.org/multipage/semantics.html#frozen-base-url) must be [immediately](https://html.spec.whatwg.org/multipage/infrastructure.html#immediately) [set](https://html.spec.whatwg.org/multipage/semantics.html#set-the-frozen-base-url) for an element whenever any of the following situations occur:

* The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element becomes the first `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` content attribute in its `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.
* The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element is the first `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` content attribute in its `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`, and its `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` content attribute is changed.

To set the frozen base URL for an element element:

1. Let document be element's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. Let urlRecord be the result of [parsing](https://url.spec.whatwg.org/#concept-url-parser) the value of element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` content attribute with document's [fallback base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fallback-base-url), and document's [character encoding](https://dom.spec.whatwg.org/#concept-document-encoding). (Thus, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element isn't affected by itself.)
3. If any of the following are true:

   * urlRecord is failure;
   * urlRecord's [scheme](https://url.spec.whatwg.org/#concept-url-scheme) is "`data`" or "`javascript`"; or
   * running [Is base allowed for Document?](https://w3c.github.io/webappsec-csp/#allow-base-for-document) on urlRecord and document returns "`Blocked`",

   then set element's [frozen base URL](https://html.spec.whatwg.org/multipage/semantics.html#frozen-base-url) to document's [fallback base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fallback-base-url) and return.
4. Set element's [frozen base URL](https://html.spec.whatwg.org/multipage/semantics.html#frozen-base-url) to urlRecord.

The `href` IDL attribute, on getting, must return the result of running the following algorithm:

1. Let document be element's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. Let url be the value of the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` attribute of this element, if it has one, and the empty string otherwise.
3. Let urlRecord be the result of [parsing](https://url.spec.whatwg.org/#concept-url-parser) url with document's [fallback base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fallback-base-url), and document's [character encoding](https://dom.spec.whatwg.org/#concept-document-encoding). (Thus, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element isn't affected by other `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` elements or itself.)
4. If urlRecord is failure, return url.
5. Return the [serialization](https://url.spec.whatwg.org/#concept-url-serializer) of urlRecord.

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#dom-base-href">href</a>` IDL attribute, on setting, must set the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-base-href">href</a>` content attribute to the given new value.

The `target` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the content attribute of the same name.

In this example, a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element is used to set the [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url):

```

 
  
        This is an example for the base element
       
  
  
        Visit the  archives.
  
```

The link in the above example would be a link to "`https://www.example.com/news/archives.html`".

#### **4.2.4** The `link` element

**✔** MDN

**✔** MDN

[Categories](https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories):[Metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2).If the element is [allowed in the body](https://html.spec.whatwg.org/multipage/semantics.html#allowed-in-the-body): [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2).If the element is [allowed in the body](https://html.spec.whatwg.org/multipage/semantics.html#allowed-in-the-body): [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2).[Contexts in which this element can be used](https://html.spec.whatwg.org/multipage/dom.html#concept-element-contexts):Where [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2) is expected.In a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element">noscript</a>` element that is a child of a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element.If the element is [allowed in the body](https://html.spec.whatwg.org/multipage/semantics.html#allowed-in-the-body): where [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) is expected.[Content model](https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model):[Nothing](https://html.spec.whatwg.org/multipage/dom.html#concept-content-nothing).[Tag omission in text/html](https://html.spec.whatwg.org/multipage/dom.html#concept-element-tag-omission):No [end tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-end-tag).[Content attributes](https://html.spec.whatwg.org/multipage/dom.html#concept-element-attributes):[Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` — Address of the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-crossorigin">crossorigin</a>` — How the element handles crossorigin requests`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` — Relationship between the document containing the [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) and the destination resource`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` — Applicable media`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-integrity">integrity</a>` — Integrity metadata used in Subresource Integrity checks [[SRI]](https://html.spec.whatwg.org/multipage/references.html#refsSRI)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-hreflang">hreflang</a>` — Language of the linked resource`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` — Hint for the type of the referenced resource`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-referrerpolicy">referrerpolicy</a>` — [Referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the element`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-sizes">sizes</a>` — Sizes of the icons (for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`="`<a href="https://html.spec.whatwg.org/multipage/links.html#rel-icon">icon</a>`")`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` — Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`="`<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preload">preload</a>`")`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesizes">imagesizes</a>` — Image sizes for different page layouts (for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`="`<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preload">preload</a>`")`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as">as</a>` — [Potential destination](https://fetch.spec.whatwg.org/#concept-potential-destination) for a preload request (for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`="`<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preload">preload</a>`" and `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`="`<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload">modulepreload</a>`")`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-blocking">blocking</a>` — Whether the element is [potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-color">color</a>` — Color to use when customizing a site's icon (for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`="`mask-icon`")`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-disabled">disabled</a>` — Whether the link is disabled`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-fetchpriority">fetchpriority</a>` — Sets the [priority](https://fetch.spec.whatwg.org/#request-priority) for [fetches](https://fetch.spec.whatwg.org/#concept-fetch) initiated by the elementAlso, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-title">title</a>` attribute [has special semantics](https://html.spec.whatwg.org/multipage/semantics.html#attr-link-title) on this element: Title of the link; [CSS style sheet set name](https://drafts.csswg.org/cssom/#css-style-sheet-set-name)[Accessibility considerations](https://html.spec.whatwg.org/multipage/dom.html#concept-element-accessibility-considerations):[For authors](https://w3c.github.io/html-aria/#el-link).[For implementers](https://w3c.github.io/html-aam/#el-link).[DOM interface](https://html.spec.whatwg.org/multipage/dom.html#concept-element-dom):

```
[=]
  :  {
  [] ();

  []   ;
  []  ? ;
  []   ;
  []   ;
  [, =]    ;
  []   ;
  []   ;
  []   ;
  []   ;
  [, =]    ;
  []   ;
  []   ;
  []   ;
  [, =]    ;
  []   ;
  []   ;

  // also has obsolete members
};
  ;
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element allows authors to link their document to other resources.

The address of the link(s) is given by the `href` attribute. If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` attribute is present, then its value must be a [valid non-empty URL potentially surrounded by spaces](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#valid-non-empty-url-potentially-surrounded-by-spaces). One or both of the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` or `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` attributes must be present.

If both the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` and `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` attributes are absent, then the element does not define a link.

The types of link indicated (the relationships) are given by the value of the `rel` attribute, which, if present, must have a value that is a [unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens). The [allowed keywords and their meanings](https://html.spec.whatwg.org/multipage/links.html#linkTypes) are defined in a later section. If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute is absent, has no keywords, or if none of the keywords used are allowed according to the definitions in this specification, then the element does not create any links.

`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`'s [supported tokens](https://dom.spec.whatwg.org/#concept-supported-tokens) are the keywords defined in [HTML link types](https://html.spec.whatwg.org/multipage/links.html#linkTypes) which are allowed on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements, impact the processing model, and are supported by the user agent. The possible [supported tokens](https://dom.spec.whatwg.org/#concept-supported-tokens) are `<a href="https://html.spec.whatwg.org/multipage/links.html#rel-alternate">alternate</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-dns-prefetch">dns-prefetch</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-expect">expect</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#rel-icon">icon</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-manifest">manifest</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload">modulepreload</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-next">next</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-pingback">pingback</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preconnect">preconnect</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-prefetch">prefetch</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preload">preload</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-search">search</a>`, and `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>`. `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`'s [supported tokens](https://dom.spec.whatwg.org/#concept-supported-tokens) must only include the tokens from this list that the user agent implements the processing model for.

Theoretically a user agent could support the processing model for the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-canonical">canonical</a>` keyword — if it were a search engine that executed JavaScript. But in practice that's quite unlikely. So in most cases, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-canonical">canonical</a>` ought not be included in `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>`'s [supported tokens](https://dom.spec.whatwg.org/#concept-supported-tokens).

A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element must have either a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute or an `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute, but not both.

If a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element has an `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute, or has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute that contains only keywords that are [body-ok](https://html.spec.whatwg.org/multipage/links.html#body-ok), then the element is said to be allowed in the body. This means that the element can be used where [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) is expected.

If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute is used, the element can only sometimes be used in the `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` of the page. When used with the `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute, the element can be used both in the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element and in the `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` of the page, subject to the constraints of the microdata model.

---

Two categories of links can be created using the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element: [links to external resources](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) and [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink). The [link types section](https://html.spec.whatwg.org/multipage/links.html#linkTypes) defines whether a particular link type is an external resource or a hyperlink. One `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element can create multiple links (of which some might be [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) and some might be [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink)); exactly which and how many links are created depends on the keywords given in the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute. User agents must process the links on a per-link basis, not a per-element basis.

Each link created for a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element is handled separately. For instance, if there are two `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements with `rel="stylesheet"`, they each count as a separate external resource, and each is affected by its own attributes independently. Similarly, if a single `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute with the value `next stylesheet`, it creates both a [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) (for the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-next">next</a>` keyword) and an [external resource link](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) (for the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>` keyword), and they are affected by other attributes (such as `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` or `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-title">title</a>`) differently.

For example, the following `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element creates two [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink) (to the same page):

```
  
```

The two links created by this element are one whose semantic is that the target page has information about the current page's author, and one whose semantic is that the target page has information regarding the license under which the current page is provided.

[Hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink) created with the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element and its `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute apply to the whole document. This contrasts with the `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-rel">rel</a>` attribute of `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>` elements, which indicates the type of a link whose context is given by the link's location within the document.

Unlike those created by `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>` elements, [hyperlinks](https://html.spec.whatwg.org/multipage/links.html#hyperlink) created by `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements are not displayed as part of the document by default, in user agents that [support the suggested default rendering](https://html.spec.whatwg.org/multipage/infrastructure.html#renderingUA). And even if they are force-displayed using CSS, they have no [activation behavior](https://dom.spec.whatwg.org/#eventtarget-activation-behavior). Instead, they primarily provide semantic information which might be used by the page or by other software that consumes the page's contents. Additionally, the user agent can [provide its own UI for following such hyperlinks](https://html.spec.whatwg.org/multipage/semantics.html#providing-users-with-a-means-to-follow-hyperlinks-created-using-the-link-element).

The exact behavior for [links to external resources](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) depends on the exact relationship, as defined for the relevant [link type](https://html.spec.whatwg.org/multipage/links.html#linkTypes).

---

The `crossorigin` attribute is a [CORS settings attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute). It is intended for use with [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link).

The `media` attribute says which media the resource applies to. The value must be a [valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list).

**✔** MDN

The `integrity` attribute represents the [integrity metadata](https://fetch.spec.whatwg.org/#concept-request-integrity-metadata) for requests which this element is responsible for. The value is text. The attribute must only be specified on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements that have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute that contains the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>`, `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preload">preload</a>`, or `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload">modulepreload</a>` keyword. [[SRI]](https://html.spec.whatwg.org/multipage/references.html#refsSRI)

The `hreflang` attribute on the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element has the same semantics as the [`hreflang` attribute on the `a` element](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-hreflang).

The `type` attribute gives the [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) of the linked resource. It is purely advisory. The value must be a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type).

For [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link), the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attribute is used as a hint to user agents so that they can avoid fetching resources they do not support.

The `referrerpolicy` attribute is a [referrer policy attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#referrer-policy-attribute). It is intended for use with [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link), where it helps set the [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) used when [fetching and processing the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource). [[REFERRERPOLICY]](https://html.spec.whatwg.org/multipage/references.html#refsREFERRERPOLICY)

The `title` attribute gives the title of the link. With one exception, it is purely advisory. The value is text. The exception is for style sheet links that are [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree), for which the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-title">title</a>` attribute defines [CSS style sheet sets](https://drafts.csswg.org/cssom/#css-style-sheet-set).

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-title">title</a>` attribute on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements differs from the global `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute of most other elements in that a link without a title does not inherit the title of the parent element: it merely has no title.

---

The `imagesrcset` attribute may be present, and is a [srcset attribute](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute).

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` and `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` attributes (if [width descriptors](https://html.spec.whatwg.org/multipage/images.html#width-descriptor) are not used) together contribute the [image sources](https://html.spec.whatwg.org/multipage/images.html#image-source) to the [source set](https://html.spec.whatwg.org/multipage/images.html#source-set).

If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` attribute is present and has any [image candidate strings](https://html.spec.whatwg.org/multipage/images.html#image-candidate-string) using a [width descriptor](https://html.spec.whatwg.org/multipage/images.html#width-descriptor), the `imagesizes` attribute must also be present, and is a [sizes attribute](https://html.spec.whatwg.org/multipage/images.html#sizes-attribute). The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesizes">imagesizes</a>` attribute contributes the [source size](https://html.spec.whatwg.org/multipage/images.html#source-size-2) to the [source set](https://html.spec.whatwg.org/multipage/images.html#source-set).

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` and `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesizes">imagesizes</a>` attributes must only be specified on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements that have both a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute that specifies the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preload">preload</a>` keyword, as well as an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as">as</a>` attribute in the "`image`" state.

These attributes allow preloading the appropriate resource that is later used by an `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` element that has the corresponding values for its `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset">srcset</a>` and `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-sizes">sizes</a>` attributes:

```
  
    
    


  
   
   
```

Note how we omit the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` attribute, as it would only be relevant for browsers that do not support `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>`, and in those cases it would likely cause the incorrect image to be preloaded.

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` attribute can be combined with the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute to preload the appropriate resource selected from a `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element">picture</a>` element's sources, for [art direction](https://html.spec.whatwg.org/multipage/images.html#art-direction):

```
  
    
    
  
    
    



   
        
  
     
```

---

The `sizes` attribute gives the sizes of icons for visual media. Its value, if present, is merely advisory. User agents may use the value to decide which icon(s) to use if multiple icons are available. If specified, the attribute must have a value that is an [unordered set of unique space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unordered-set-of-unique-space-separated-tokens) which are [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive). Each value must be either an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for the string "`<a href="https://html.spec.whatwg.org/multipage/links.html#attr-link-sizes-any">any</a>`", or a value that consists of two [valid non-negative integers](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) that do not have a leading U+0030 DIGIT ZERO (0) character and that are separated by a single U+0078 LATIN SMALL LETTER X or U+0058 LATIN CAPITAL LETTER X character. The attribute must only be specified on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements that have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute that specifies the `<a href="https://html.spec.whatwg.org/multipage/links.html#rel-icon">icon</a>` keyword or the `apple-touch-icon` keyword.

The `apple-touch-icon` keyword is a registered [extension to the predefined set of link types](https://html.spec.whatwg.org/multipage/links.html#concept-rel-extensions), but user agents are not required to support it in any way.

---

The `as` attribute specifies the [potential destination](https://fetch.spec.whatwg.org/#concept-potential-destination) for a preload request for the resource given by the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` attribute. It is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute). Each [potential destination](https://fetch.spec.whatwg.org/#concept-potential-destination) is a keyword for this attribute, mapping to a state of the same name. The attribute must be specified on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements that have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute that contains the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preload">preload</a>` keyword. It may be specified on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements that have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute that contains the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload">modulepreload</a>` keyword; in such cases it must have a value which is a [script-like destination](https://fetch.spec.whatwg.org/#request-destination-script-like). For other `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements, it must not be specified.

The processing model for how the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as">as</a>` attribute is used is given in an individual link type's [fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource) algorithm.

The attribute does not have a *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* or *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* , meaning that invalid or missing values for the attribute map to no state. This is accounted for in the processing model. For `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-preload">preload</a>` links, both conditions are an error; for `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload">modulepreload</a>` links, a missing value will be treated as "`script`".

---

The `blocking` attribute is a [blocking attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute). It is used by link types `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>` and `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-expect">expect</a>`, and it must only be specified on link elements that have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute containing those keywords.

---

The `color` attribute is used with the `mask-icon` link type. The attribute must only be specified on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements that have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute that contains the `mask-icon` keyword. The value must be a string that matches the CSS [&lt;color&gt;](https://drafts.csswg.org/css-color/#typedef-color) production, defining a suggested color that user agents can use to customize the display of the icon that the user sees when they pin your site.

This specification does not have any user agent requirements for the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-color">color</a>` attribute.

The `mask-icon` keyword is a registered [extension to the predefined set of link types](https://html.spec.whatwg.org/multipage/links.html#concept-rel-extensions), but user agents are not required to support it in any way.

---

`<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements have an associated explicitly enabled boolean. It is initially false.

The `disabled` attribute is a [boolean attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attribute) that is used with the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>` link type. The attribute must only be specified on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements that have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute that contains the `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>` keyword.

Whenever the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-disabled">disabled</a>` attribute is removed, set the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element's [explicitly enabled](https://html.spec.whatwg.org/multipage/semantics.html#explicitly-enabled) attribute to true.

Removing the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-disabled">disabled</a>` attribute dynamically, e.g., using `document.querySelector("link").removeAttribute("disabled")`, will fetch and apply the style sheet:

```
   
```

MDN

The `fetchpriority` attribute is a [fetch priority attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attribute) that is intended for use with [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link), where it is used to set the [priority](https://fetch.spec.whatwg.org/#request-priority) used when [fetching and processing the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource).

---

**✔** MDN

The IDL attributes `href`, `hreflang`, `integrity`, `media`, `rel`, `sizes`, `type`, `blocking`, and `disabled` each must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the respective content attributes of the same name.

There is no reflecting IDL attribute for the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-color">color</a>` attribute, but this might be added later.

**✔** MDN

The `as` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as">as</a>` content attribute, [limited to only known values](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-known-values).

The `crossOrigin` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-crossorigin">crossorigin</a>` content attribute, [limited to only known values](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-known-values).

**✔** MDN

The `referrerPolicy` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-referrerpolicy">referrerpolicy</a>` content attribute, [limited to only known values](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-known-values).

The `fetchPriority` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-fetchpriority">fetchpriority</a>` content attribute, [limited to only known values](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#limited-to-only-known-values).

The `imageSrcset` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` content attribute.

The `imageSizes` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesizes">imagesizes</a>` content attribute.

**✔** MDN

The `relList` IDL attribute must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` content attribute.

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#dom-link-rellist">relList</a>` attribute can be used for feature detection, by calling its `<a data-x-internal="dom-domtokenlist-supports" href="https://dom.spec.whatwg.org/#dom-domtokenlist-supports">supports()</a>` method to check which [types of links](https://html.spec.whatwg.org/multipage/links.html#linkTypes) are supported.

##### **4.2.4.1** Processing the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute

If the link is a [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) then the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute is purely advisory, and describes for which media the document in question was designed.

However, if the link is an [external resource link](https://html.spec.whatwg.org/multipage/links.html#external-resource-link), then the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute is prescriptive. The user agent must apply the external resource when the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute's value [matches the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment) and the other relevant conditions apply, and must not apply it otherwise.

The default, if the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute is omitted, is "`all`", meaning that by default links apply to all media.

The external resource might have further restrictions defined within that limit its applicability. For example, a CSS style sheet might have some `@media` blocks. This specification does not override such further restrictions or requirements.

##### **4.2.4.2** Processing the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attribute

If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attribute is present, then the user agent must assume that the resource is of the given type (even if that is not a [valid MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type), e.g. the empty string). If the attribute is omitted, but the [external resource link](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) type has a default type defined, then the user agent must assume that the resource is of that type. If the UA does not support the given [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) for the given link relationship, then the UA should not [fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource); if the UA does support the given [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) for the given link relationship, then the UA should [fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource) at the appropriate time as specified for the [external resource link](https://html.spec.whatwg.org/multipage/links.html#external-resource-link)'s particular type. If the attribute is omitted, and the [external resource link](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) type does not have a default type defined, but the user agent would [fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource) if the type was known and supported, then the user agent should [fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource) under the assumption that it will be supported.

User agents must not consider the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attribute authoritative — upon fetching the resource, user agents must not use the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attribute to determine its actual type. Only the actual type (as defined in the next paragraph) is used to determine whether to *apply* the resource, not the aforementioned assumed type.

If the [external resource link](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) type defines rules for processing the resource's [Content-Type metadata](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#content-type), then those rules apply. Otherwise, if the resource is expected to be an image, user agents may apply the [image sniffing rules](https://mimesniff.spec.whatwg.org/#rules-for-sniffing-images-specifically), with the official type being the type determined from the resource's [Content-Type metadata](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#content-type), and use the resulting [computed type of the resource](https://mimesniff.spec.whatwg.org/#computed-mime-type) as if it was the actual type. Otherwise, if neither of these conditions apply or if the user agent opts not to apply the image sniffing rules, then the user agent must use the resource's [Content-Type metadata](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#content-type) to determine the type of the resource. If there is no type metadata, but the [external resource link](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) type has a default type defined, then the user agent must assume that the resource is of that type.

The `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>` link type defines rules for processing the resource's [Content-Type metadata](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#content-type).

Once the user agent has established the type of the resource, the user agent must apply the resource if it is of a supported type and the other relevant conditions apply, and must ignore the resource otherwise.

If a document contains style sheet links labeled as follows:

```
   
   
  
```

...then a compliant UA that supported only CSS style sheets would fetch the B and C files, and skip the A file (since `<a data-x-internal="text/plain" href="https://www.rfc-editor.org/rfc/rfc2046#section-4.1.3">text/plain</a>` is not the [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) for CSS style sheets).

For files B and C, it would then check the actual types returned by the server. For those that are sent as `<a href="https://html.spec.whatwg.org/multipage/indices.html#text/css">text/css</a>`, it would apply the styles, but for those labeled as `<a data-x-internal="text/plain" href="https://www.rfc-editor.org/rfc/rfc2046#section-4.1.3">text/plain</a>`, or any other type, it would not.

If one of the two files was returned without a [Content-Type](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#content-type) metadata, or with a syntactically incorrect type like `Content-Type: "null"`, then the default type for `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>` links would kick in. Since that default type is `<a href="https://html.spec.whatwg.org/multipage/indices.html#text/css">text/css</a>`, the style sheet *would* nonetheless be applied.

##### **4.2.4.3** Fetching and processing a resource from a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element

All [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) have a fetch and process the linked resource algorithm, which takes a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element el. They also have linked resource fetch setup steps which take a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element el and [request](https://fetch.spec.whatwg.org/#concept-request) request. Individual link types may provide their own [fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource) algorithm, but unless explicitly stated, they use the [default fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#default-fetch-and-process-the-linked-resource) algorithm. Similarly, individual link types may provide their own [linked resource fetch setup steps](https://html.spec.whatwg.org/multipage/semantics.html#linked-resource-fetch-setup-steps), but unless explicitly stated, these steps just return true.

The default fetch and process the linked resource, given a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element el, is as follows:

1. Let options be the result of [creating link options](https://html.spec.whatwg.org/multipage/semantics.html#create-link-options-from-element) from el.
2. Let request be the result of [creating a link request](https://html.spec.whatwg.org/multipage/semantics.html#create-a-link-request) given options.
3. If request is null, then return.
4. Set request's [synchronous flag](https://fetch.spec.whatwg.org/#synchronous-flag).
5. Run the [linked resource fetch setup steps](https://html.spec.whatwg.org/multipage/semantics.html#linked-resource-fetch-setup-steps), given el and request. If the result is false, then return.
6. Set request's [initiator type](https://fetch.spec.whatwg.org/#request-initiator-type) to "`css`" if el's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute contains the keyword `<a href="https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet">stylesheet</a>`; "`link`" otherwise.
7. [Fetch](https://fetch.spec.whatwg.org/#concept-fetch) request with *[processResponseConsumeBody](https://fetch.spec.whatwg.org/#process-response-end-of-body)* set to the following steps given [response](https://fetch.spec.whatwg.org/#concept-response) response and null, failure, or a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence) bodyBytes:
   1. Let success be true.
   2. If any of the following are true:

      * bodyBytes is null or failure; or
      * response's [status](https://fetch.spec.whatwg.org/#concept-response-status) is not an [ok status](https://fetch.spec.whatwg.org/#ok-status),

      then set success to false.
      Note that content-specific errors, e.g., CSS parse errors or PNG decoding errors, do not affect success.
   3. Otherwise, wait for the [link resource](https://html.spec.whatwg.org/multipage/links.html#external-resource-link)'s [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources) to finish loading.
      The specification that defines a link type's [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources) (e.g., CSS) is expected to describe how these subresources are fetched and processed. However, since this is not currently explicit, this specification describes waiting for a [link resource](https://html.spec.whatwg.org/multipage/links.html#external-resource-link)'s [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources) to be fetched and processed, with the expectation that this will be done correctly.
   4. [Process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#process-the-linked-resource) given el, success, response, and bodyBytes.

To create a link request given a [link processing options](https://html.spec.whatwg.org/multipage/semantics.html#link-processing-options) options:

1. [Assert](https://infra.spec.whatwg.org/#assert): options's [href](https://html.spec.whatwg.org/multipage/semantics.html#link-options-href) is not the empty string.
2. If options's [destination](https://html.spec.whatwg.org/multipage/semantics.html#link-options-destination) is null, then return null.
3. Let url be the result of [encoding-parsing a URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url) given options's [href](https://html.spec.whatwg.org/multipage/semantics.html#link-options-href), relative to options's [base URL](https://html.spec.whatwg.org/multipage/semantics.html#link-options-base-url).
   Passing the base URL instead of a document or environment is tracked by [issue #9715](https://github.com/whatwg/html/issues/9715).
4. If url is failure, then return null.
5. Let request be the result of [creating a potential-CORS request](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#create-a-potential-cors-request) given url, options's [destination](https://html.spec.whatwg.org/multipage/semantics.html#link-options-destination), and options's [crossorigin](https://html.spec.whatwg.org/multipage/semantics.html#link-options-crossorigin).
6. Set request's [policy container](https://fetch.spec.whatwg.org/#concept-request-policy-container) to options's [policy container](https://html.spec.whatwg.org/multipage/semantics.html#link-options-policy-container).
7. Set request's [integrity metadata](https://fetch.spec.whatwg.org/#concept-request-integrity-metadata) to options's [integrity](https://html.spec.whatwg.org/multipage/semantics.html#link-options-integrity).
8. Set request's [cryptographic nonce metadata](https://fetch.spec.whatwg.org/#concept-request-nonce-metadata) to options's [cryptographic nonce metadata](https://html.spec.whatwg.org/multipage/semantics.html#link-options-nonce).
9. Set request's [referrer policy](https://fetch.spec.whatwg.org/#concept-request-referrer-policy) to options's [referrer policy](https://html.spec.whatwg.org/multipage/semantics.html#link-options-referrer-policy).
10. Set request's [client](https://fetch.spec.whatwg.org/#concept-request-client) to options's [environment](https://html.spec.whatwg.org/multipage/semantics.html#link-options-environment).
11. Set request's [priority](https://fetch.spec.whatwg.org/#request-priority) to options's [fetch priority](https://html.spec.whatwg.org/multipage/semantics.html#link-options-fetch-priority).
12. Return request.

User agents may opt to only try to [fetch and process](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource) such resources when they are needed, instead of pro-actively fetching all the [external resources](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) that are not applied.

Similar to the [fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource) algorithm, all [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) have a process the linked resource algorithm which takes a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element el, boolean success, a [response](https://fetch.spec.whatwg.org/#concept-response) response, and a [byte sequence](https://infra.spec.whatwg.org/#byte-sequence) bodyBytes. Individual link types may provide their own [process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#process-the-linked-resource) algorithm, but unless explicitly stated, that algorithm does nothing.

Unless otherwise specified for a given `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` keyword, the element must [delay the load event](https://html.spec.whatwg.org/multipage/parsing.html#delay-the-load-event) of the element's [node document](https://dom.spec.whatwg.org/#concept-node-document) until all the attempts to [fetch and process the linked resource](https://html.spec.whatwg.org/multipage/semantics.html#fetch-and-process-the-linked-resource) and its [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources) are complete. (Resources that the user agent has not yet attempted to fetch and process, e.g., because it is waiting for the resource to be needed, do not [delay the load event](https://html.spec.whatwg.org/multipage/parsing.html#delay-the-load-event).)

##### **4.2.4.4** Processing ``<a data-x-internal="http-link" href="https://httpwg.org/specs/rfc8288.html#header">Link</a>`` headers

All link types that can be [external resource links](https://html.spec.whatwg.org/multipage/links.html#external-resource-link) define a process a link header algorithm, which takes a [link processing options](https://html.spec.whatwg.org/multipage/semantics.html#link-processing-options). This algorithm defines whether and how they react to appearing in an HTTP ``<a data-x-internal="http-link" href="https://httpwg.org/specs/rfc8288.html#header">Link</a>`` response header.

For most link types, this algorithm does nothing. The [summary table](https://html.spec.whatwg.org/multipage/links.html#table-link-relations) is a good reference to quickly know whether a link type has defined [process a link header](https://html.spec.whatwg.org/multipage/semantics.html#process-a-link-header) steps.

A link processing options is a [struct](https://infra.spec.whatwg.org/#struct). It has the following [items](https://infra.spec.whatwg.org/#struct-item):

href (default the empty string)destination (default the empty string)initiator (default "`link`")integrity (default the empty string)type (default the empty string)cryptographic nonce metadata (default the empty string)A stringcrossorigin (default [No CORS](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-crossorigin-none))A [CORS settings attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute) statereferrer policy (default the empty string)A [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy)source set (default null)Null or a [source set](https://html.spec.whatwg.org/multipage/images.html#source-set)base URLA [URL](https://url.spec.whatwg.org/#concept-url)originAn [origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin)environmentAn [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment)policy containerA [policy container](https://html.spec.whatwg.org/multipage/browsers.html#policy-container)document (default null)Null or a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`on document ready (default null)Null or an algorithm accepting a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`fetch priority (default `<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-fetchpriority-auto-state">auto</a>`)A [fetch priority attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attribute) stateA [link processing options](https://html.spec.whatwg.org/multipage/semantics.html#link-processing-options) has a [base URL](https://html.spec.whatwg.org/multipage/semantics.html#link-options-base-url) and an [href](https://html.spec.whatwg.org/multipage/semantics.html#link-options-href) rather than a parsed URL because the URL could be a result of the options's [source set](https://html.spec.whatwg.org/multipage/semantics.html#link-options-source-set).

To create link options from element given a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element el:

1. Let document be el's [node document](https://dom.spec.whatwg.org/#concept-node-document).
2. Let options be a new [link processing options](https://html.spec.whatwg.org/multipage/semantics.html#link-processing-options) with
   [destination](https://html.spec.whatwg.org/multipage/semantics.html#link-options-destination)the result of [translating](https://html.spec.whatwg.org/multipage/links.html#translate-a-preload-destination) the state of el's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as">as</a>` attribute.[crossorigin](https://html.spec.whatwg.org/multipage/semantics.html#link-options-crossorigin)the state of el's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-crossorigin">crossorigin</a>` content attribute[referrer policy](https://html.spec.whatwg.org/multipage/semantics.html#link-options-referrer-policy)the state of el's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-referrerpolicy">referrerpolicy</a>` content attribute[source set](https://html.spec.whatwg.org/multipage/semantics.html#link-options-source-set)el's [source set](https://html.spec.whatwg.org/multipage/images.html#source-set)[base URL](https://html.spec.whatwg.org/multipage/semantics.html#link-options-base-url)document's [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url)[origin](https://html.spec.whatwg.org/multipage/semantics.html#link-options-origin)document's [origin](https://dom.spec.whatwg.org/#concept-document-origin)[environment](https://html.spec.whatwg.org/multipage/semantics.html#link-options-environment)document's [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)[policy container](https://html.spec.whatwg.org/multipage/semantics.html#link-options-policy-container)document's [policy container](https://html.spec.whatwg.org/multipage/dom.html#concept-document-policy-container)[document](https://html.spec.whatwg.org/multipage/semantics.html#link-options-document)document[cryptographic nonce metadata](https://html.spec.whatwg.org/multipage/semantics.html#link-options-nonce)The current value of el's [[[CryptographicNonce]]](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cryptographicnonce) internal slot[fetch priority](https://html.spec.whatwg.org/multipage/semantics.html#link-options-fetch-priority)the state of el's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-fetchpriority">fetchpriority</a>` content attribute
3. If el has an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` attribute, then set options's [href](https://html.spec.whatwg.org/multipage/semantics.html#link-options-href) to the value of el's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` attribute.
4. If el has an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-integrity">integrity</a>` attribute, then set options's [integrity](https://html.spec.whatwg.org/multipage/semantics.html#link-options-integrity) to the value of el's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-integrity">integrity</a>` content attribute.
5. If el has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attribute, then set options's [type](https://html.spec.whatwg.org/multipage/semantics.html#link-options-type) to the value of el's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attribute.
6. [Assert](https://infra.spec.whatwg.org/#assert): options's [href](https://html.spec.whatwg.org/multipage/semantics.html#link-options-href) is not the empty string, or options's [source set](https://html.spec.whatwg.org/multipage/semantics.html#link-options-source-set) is not null.
   A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element with neither an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` or an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>` does not represent a link.
7. Return options.

To extract links from headers given a [header list](https://fetch.spec.whatwg.org/#concept-header-list) headers:

1. Let links be a new [list](https://infra.spec.whatwg.org/#list).
2. Let rawLinkHeaders be the result of [getting, decoding, and splitting](https://fetch.spec.whatwg.org/#concept-header-list-get-decode-split) ``<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">Link</a>`` from response's [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
3. [For each](https://infra.spec.whatwg.org/#list-iterate) linkHeader of rawLinkHeaders:
   1. Let linkObject be the result of [parsing](https://httpwg.org/specs/rfc8288.html#parse-fv) linkHeader. [[WEBLINK]](https://html.spec.whatwg.org/multipage/references.html#refsWEBLINK)
   2. If linkObject["`target_uri`"] does not [exist](https://infra.spec.whatwg.org/#map-exists), then [continue](https://infra.spec.whatwg.org/#iteration-continue).
   3. [Append](https://infra.spec.whatwg.org/#list-append) linkObject to links.
4. Return links.

To process link headers given a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` doc, a [response](https://fetch.spec.whatwg.org/#concept-response) response, and a "`pre-media`" or "`media`" phase:

1. Let links be the result of [extracting links](https://html.spec.whatwg.org/multipage/semantics.html#extract-links-from-headers) from response's [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
2. [For each](https://infra.spec.whatwg.org/#list-iterate) linkObject in links:
   1. Let rel be linkObject["`relation_type`"].
   2. Let attribs be linkObject["`target_attributes`"].
   3. Let expectedPhase be "`media`" if either "`<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset">srcset</a>`", "`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>`", or "`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>`" [exist](https://infra.spec.whatwg.org/#map-exists) in attribs; otherwise "`pre-media`".
   4. If expectedPhase is not phase, then [continue](https://infra.spec.whatwg.org/#iteration-continue).
   5. If attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists) and attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>`"] does not [match the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment), then [continue](https://infra.spec.whatwg.org/#iteration-continue).
   6. Let options be a new [link processing options](https://html.spec.whatwg.org/multipage/semantics.html#link-processing-options) with
      [href](https://html.spec.whatwg.org/multipage/semantics.html#link-options-href)linkObject["`target_uri`"][base URL](https://html.spec.whatwg.org/multipage/semantics.html#link-options-base-url)doc's [document base URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url)[origin](https://html.spec.whatwg.org/multipage/semantics.html#link-options-origin)doc's [origin](https://dom.spec.whatwg.org/#concept-document-origin)[environment](https://html.spec.whatwg.org/multipage/semantics.html#link-options-environment)doc's [relevant settings object](https://html.spec.whatwg.org/multipage/webappapis.html#relevant-settings-object)[policy container](https://html.spec.whatwg.org/multipage/semantics.html#link-options-policy-container)doc's [policy container](https://html.spec.whatwg.org/multipage/dom.html#concept-document-policy-container)[document](https://html.spec.whatwg.org/multipage/semantics.html#link-options-document)doc
   7. [Apply link options from parsed header attributes](https://html.spec.whatwg.org/multipage/semantics.html#apply-link-options-from-parsed-header-attributes) to options given attribs.
   8. If attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists) and attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesizes">imagesizes</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists), then set options's [source set](https://html.spec.whatwg.org/multipage/semantics.html#link-options-source-set) to the result of [creating a source set](https://html.spec.whatwg.org/multipage/images.html#create-a-source-set) given linkObject["`target_uri`"], attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>`"], attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesizes">imagesizes</a>`"], and null.
   9. Run the [process a link header](https://html.spec.whatwg.org/multipage/semantics.html#process-a-link-header) steps for rel given options.

To apply link options from parsed header attributes to a [link processing options](https://html.spec.whatwg.org/multipage/semantics.html#link-processing-options) options given attribs:

1. If attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as">as</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists), then set options's [destination](https://html.spec.whatwg.org/multipage/semantics.html#link-options-destination) to the result of [translating](https://html.spec.whatwg.org/multipage/links.html#translate-a-preload-destination) attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as">as</a>`"].
2. If attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-crossorigin">crossorigin</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists) and is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for one of the [CORS settings attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute) [keywords](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute), then set options's [crossorigin](https://html.spec.whatwg.org/multipage/semantics.html#link-options-crossorigin) to the [CORS settings attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute) state corresponding to that keyword.
3. If attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-integrity">integrity</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists), then set options's [integrity](https://html.spec.whatwg.org/multipage/semantics.html#link-options-integrity) to attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-integrity">integrity</a>`"].
4. If attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-referrerpolicy">referrerpolicy</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists) and is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for some [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy), then set options's [referrer policy](https://html.spec.whatwg.org/multipage/semantics.html#link-options-referrer-policy) to that [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy).
5. If attribs["`<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists), then set options's [nonce](https://html.spec.whatwg.org/multipage/semantics.html#link-options-nonce) to attribs["`<a href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#attr-nonce">nonce</a>`"].
6. If attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists), then set options's [type](https://html.spec.whatwg.org/multipage/semantics.html#link-options-type) to attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>`"].
7. If attribs["`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-fetchpriority">fetchpriority</a>`"] [exists](https://infra.spec.whatwg.org/#map-exists) and is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for a [fetch priority attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attribute) keyword, then set options's [fetch priority](https://html.spec.whatwg.org/multipage/semantics.html#link-options-fetch-priority) to that [fetch priority attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attribute) keyword.

##### **4.2.4.5** Early hints

MDN

Early hints allow user-agents to perform some operations, such as to speculatively load resources that are likely to be used by the document, before the navigation request is fully handled by the server and a response code is served. Servers can indicate early hints by serving a [response](https://fetch.spec.whatwg.org/#concept-response) with a 103 status code before serving the final [response](https://fetch.spec.whatwg.org/#concept-response).[[RFC8297]](https://html.spec.whatwg.org/multipage/references.html#refsRFC8297)

For compatibility reasons [early hints are typically delivered over HTTP/2 or above](https://httpwg.org/specs/rfc8297.html#security-considerations), but for readability we use HTTP/1.1-style notation below.

For example, given the following sequence of responses:

```
103 Early Hint
Link: </image.png>; rel=preload; as=image
```

```
200 OK
Content-Type: text/html

<!DOCTYPE html>
...
<img src="/image.png">
```

the image will start loading before the HTML content arrives.

Only the first early hint response served during the navigation is handled, and it is discarded if it is succeeded by a cross-origin redirect.

In addition to the ``<a data-x-internal="http-link" href="https://httpwg.org/specs/rfc8288.html#header">Link</a>`` headers, it is possible that the 103 response contains a [Content Security Policy](https://w3c.github.io/webappsec-csp/#content-security-policy-object) header, which is enforced when processing the early hint.

For example, given the following sequence of responses:

```
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

```
103 Early Hint
Link: </image.png>; rel=preload; as=image
```

```
302 Redirect
Location: /alternate.html
```

```
200 OK
Content-Security-Policy: style-src: none;
Link: </font.ttf>; rel=preload; as=font
```

The font and style would be loaded, and the image will be discarded, as only the first early hint response in the final redirect chain is respected. The late [Content Security Policy](https://w3c.github.io/webappsec-csp/#content-security-policy-object) header comes after the request to fetch the style has already been performed, but the style will not be accessible to the document.

To process early hint headers given a [response](https://fetch.spec.whatwg.org/#concept-response) response and an [environment](https://html.spec.whatwg.org/multipage/webappapis.html#environment) reservedEnvironment:

Early-hint ``<a data-x-internal="http-link" href="https://httpwg.org/specs/rfc8288.html#header">Link</a>`` headers are always processed before ``<a data-x-internal="http-link" href="https://httpwg.org/specs/rfc8288.html#header">Link</a>`` headers from the final [response](https://fetch.spec.whatwg.org/#concept-response), followed by `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements. This is equivalent to prepending the contents of the early and final ``<a data-x-internal="http-link" href="https://httpwg.org/specs/rfc8288.html#header">Link</a>`` headers to the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element, in respective order.

1. Let earlyPolicyContainer be the result of [creating a policy container from a fetch response](https://html.spec.whatwg.org/multipage/browsers.html#creating-a-policy-container-from-a-fetch-response) given response and reservedEnvironment.
   This allows the early hint [response](https://fetch.spec.whatwg.org/#concept-response) to include a [Content Security Policy](https://w3c.github.io/webappsec-csp/#content-security-policy-object) which would be [enforced](https://w3c.github.io/webappsec-csp/#enforced) when fetching the early hint [request](https://fetch.spec.whatwg.org/#concept-request).
2. Let links be the result of [extracting links](https://html.spec.whatwg.org/multipage/semantics.html#extract-links-from-headers) from response's [header list](https://fetch.spec.whatwg.org/#concept-response-header-list).
3. Let earlyHints be an empty [list](https://infra.spec.whatwg.org/#list).
4. [For each](https://infra.spec.whatwg.org/#list-iterate) linkObject in links:
   The moment we receive the early hint link header, we begin [fetching](https://fetch.spec.whatwg.org/#concept-fetch) earlyRequest. If it comes back before the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is created, we set earlyResponse to the [response](https://fetch.spec.whatwg.org/#concept-response) of that [fetch](https://fetch.spec.whatwg.org/#concept-fetch) and once the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is created we commit it (by making it available in the [map of preloaded resources](https://html.spec.whatwg.org/multipage/links.html#map-of-preloaded-resources) as if it was a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element). If the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is created first, the [response](https://fetch.spec.whatwg.org/#concept-response) is committed as soon as it becomes available.
   1. Let rel be linkObject["`relation_type`"].
   2. Let options be a new [link processing options](https://html.spec.whatwg.org/multipage/semantics.html#link-processing-options) with
      [href](https://html.spec.whatwg.org/multipage/semantics.html#link-options-href)linkObject["`target_uri`"][initiator](https://html.spec.whatwg.org/multipage/semantics.html#link-options-initiator)"`early-hint`"[base URL](https://html.spec.whatwg.org/multipage/semantics.html#link-options-base-url)response's [URL](https://fetch.spec.whatwg.org/#concept-response-url)[origin](https://html.spec.whatwg.org/multipage/semantics.html#link-options-origin)response's [URL](https://fetch.spec.whatwg.org/#concept-response-url)'s [origin](https://url.spec.whatwg.org/#concept-url-origin)[environment](https://html.spec.whatwg.org/multipage/semantics.html#link-options-environment)reservedEnvironment[policy container](https://html.spec.whatwg.org/multipage/semantics.html#link-options-policy-container)earlyPolicyContainer
   3. Let attribs be linkObject["`target_attributes`"].
      Only the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-as">as</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-crossorigin">crossorigin</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-integrity">integrity</a>`, and `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attributes are handled as part of early hint processing. The other ones, in particular `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-blocking">blocking</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset">imagesrcset</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesizes">imagesizes</a>`, and `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` are only applicable once a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` is created.
   4. [Apply link options from parsed header attributes](https://html.spec.whatwg.org/multipage/semantics.html#apply-link-options-from-parsed-header-attributes) to options given attribs.
   5. Run the [process a link header](https://html.spec.whatwg.org/multipage/semantics.html#process-a-link-header) steps for rel given options.
   6. [Append](https://infra.spec.whatwg.org/#list-append) options to earlyHints.
5. Return the following substeps given `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` doc: [for each](https://infra.spec.whatwg.org/#list-iterate) options in earlyHints:
   1. If options's [on document ready](https://html.spec.whatwg.org/multipage/semantics.html#link-options-on-document-ready) is null, then set options's [document](https://html.spec.whatwg.org/multipage/semantics.html#link-options-document) to doc.
   2. Otherwise, call options's [on document ready](https://html.spec.whatwg.org/multipage/semantics.html#link-options-on-document-ready) with doc.

##### **4.2.4.6** Providing users with a means to follow hyperlinks created using the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element

Interactive user agents may provide users with a means to [follow the hyperlinks](https://html.spec.whatwg.org/multipage/links.html#following-hyperlinks-2) created using the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element, somewhere within their user interface. Such invocations of the [follow the hyperlink](https://html.spec.whatwg.org/multipage/links.html#following-hyperlinks-2) algorithm must set the *[userInvolvement](https://html.spec.whatwg.org/multipage/links.html#following-userinvolvement)* argument to "`<a href="https://html.spec.whatwg.org/multipage/browsing-the-web.html#uni-browser-ui">browser UI</a>`". The exact interface is not defined by this specification, but it could include the following information (obtained from the element's attributes, again as defined below), in some form or another (possibly simplified), for each [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink) created with each `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element in the document:

* The relationship between this document and the resource (given by the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-rel">rel</a>` attribute)
* The title of the resource (given by the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-title">title</a>` attribute).
* The address of the resource (given by the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-href">href</a>` attribute).
* The language of the resource (given by the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-hreflang">hreflang</a>` attribute).
* The optimum media for the resource (given by the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute).

User agents could also include other information, such as the type of the resource (as given by the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-type">type</a>` attribute).

#### **4.2.5** The `meta` element

**✔** MDN

**✔** MDN

[Categories](https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories):[Metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2).If the `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute is present: [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2).If the `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute is present: [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2).[Contexts in which this element can be used](https://html.spec.whatwg.org/multipage/dom.html#concept-element-contexts):If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>` attribute is present, or if the element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute is in the [Encoding declaration state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type): in a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element.If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute is present but not in the [Encoding declaration state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type): in a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element.If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute is present but not in the [Encoding declaration state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type): in a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element">noscript</a>` element that is a child of a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element.If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute is present: where [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2) is expected.If the `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute is present: where [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2) is expected.If the `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attribute is present: where [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2) is expected.[Content model](https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model):[Nothing](https://html.spec.whatwg.org/multipage/dom.html#concept-content-nothing).[Tag omission in text/html](https://html.spec.whatwg.org/multipage/dom.html#concept-element-tag-omission):No [end tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-end-tag).[Content attributes](https://html.spec.whatwg.org/multipage/dom.html#concept-element-attributes):[Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` — Metadata name`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` — Pragma directive`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` — Value of the element`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>` — [Character encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#character-encoding-declaration)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-media">media</a>` — Applicable media[Accessibility considerations](https://html.spec.whatwg.org/multipage/dom.html#concept-element-accessibility-considerations):[For authors](https://w3c.github.io/html-aria/#el-meta).[For implementers](https://w3c.github.io/html-aam/#el-meta).[DOM interface](https://html.spec.whatwg.org/multipage/dom.html#concept-element-dom):

```
[=]
  :  {
  [] ();

  []   ;
  []   ;
  []   ;
  []   ;

  // also has obsolete members
};
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element [represents](https://html.spec.whatwg.org/multipage/dom.html#represents) various kinds of metadata that cannot be expressed using the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>`, and `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` elements.

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element can represent document-level metadata with the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute, pragma directives with the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute, and the file's [character encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#character-encoding-declaration) when an HTML document is serialized to string form (e.g. for transmission over the network or for disk storage) with the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>` attribute.

Exactly one of the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>`, and `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` attributes must be specified.

If either `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>`, or `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop</a>` is specified, then the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute must also be specified. Otherwise, it must be omitted.

The `charset` attribute specifies the [character encoding](https://encoding.spec.whatwg.org/#encoding) used by the document. This is a [character encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#character-encoding-declaration). If the attribute is present, its value must be an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for the string "`utf-8`".

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>` attribute on the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element has no effect in XML documents, but is allowed in XML documents in order to facilitate migration to and from XML.

There must not be more than one `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>` attribute per document.

The `content` attribute gives the value of the document metadata or pragma directive when the element is used for those purposes. The allowed values depend on the exact context, as described in subsequent sections of this specification.

If a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element has a `name` attribute, it sets document metadata. Document metadata is expressed in terms of name-value pairs, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute on the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element giving the name, and the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute on the same element giving the value. The name specifies what aspect of metadata is being set; valid names and the meaning of their values are described in the following sections. If a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element has no `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute, then the value part of the metadata name-value pair is the empty string.

The `media` attribute says which media the metadata applies to. The value must be a [valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list). Unless the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` is `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color">theme-color</a>`, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-media">media</a>` attribute has no effect on the processing model and must not be used by authors.

The `name`, `content`, and `media` IDL attributes must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the respective content attributes of the same name. The IDL attribute `httpEquiv` must [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the content attribute `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>`.

##### **4.2.5.1** Standard metadata names

**✔** MDN

This specification defines a few names for the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute of the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element.

Names are case-insensitive**, and must be compared in an** [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) **manner**.

`application-name`The value must be a short free-form string giving the name of the web application that the page represents. If the page is not a web application, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-application-name">application-name</a>` metadata name must not be used. Translations of the web application's name may be given, using the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` attribute to specify the language of each name.

There must not be more than one `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with a given [language](https://html.spec.whatwg.org/multipage/dom.html#language) and where the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-application-name">application-name</a>` per document.

User agents may use the application name in UI in preference to the page's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>`, since the title might include status messages and the like relevant to the status of the page at a particular moment in time instead of just being the name of the application.

To find the application name to use given an ordered list of languages (e.g. British English, American English, and English), user agents must run the following steps:

1. Let languages be the list of languages.
2. Let default language be the [language](https://html.spec.whatwg.org/multipage/dom.html#language) of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s [document element](https://dom.spec.whatwg.org/#document-element), if any, and if that language is not unknown.
3. If there is a default language, and if it is not the same language as any of the languages in languages, append it to languages.
4. Let winning language be the first language in languages for which there is a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` where the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-application-name">application-name</a>` and whose [language](https://html.spec.whatwg.org/multipage/dom.html#language) is the language in question.
   If none of the languages have such a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element, then return; there's no given application name.
5. Return the value of the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute of the first `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element in the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` in [tree order](https://dom.spec.whatwg.org/#concept-tree-order) where the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-application-name">application-name</a>` and whose [language](https://html.spec.whatwg.org/multipage/dom.html#language) is winning language.

This algorithm would be used by a browser when it needs a name for the page, for instance, to label a bookmark. The languages it would provide to the algorithm would be the user's preferred languages.

`author`The value must be a free-form string giving the name of one of the page's authors.

`description`The value must be a free-form string that describes the page. The value must be appropriate for use in a directory of pages, e.g. in a search engine. There must not be more than one `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element where the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-description">description</a>` per document.

`generator`The value must be a free-form string that identifies one of the software packages used to generate the document. This value must not be used on pages whose markup is not generated by software, e.g. pages whose markup was written by a user in a text editor.

Here is what a tool called "Frontweaver" could include in its output, in the page's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element, to identify itself as the tool used to generate the page:

```
  
```

`keywords`The value must be a [set of comma-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-comma-separated-tokens), each of which is a keyword relevant to the page.

This page about typefaces on British motorways uses a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element to specify some keywords that users might use to look for the page:

```

 
 
  Typefaces on UK motorways
  
 
 
  ...
```

Many search engines do not consider such keywords, because this feature has historically been used unreliably and even misleadingly as a way to spam search engine results in a way that is not helpful for users.

To obtain the list of keywords that the author has specified as applicable to the page, the user agent must run the following steps:

1. Let keywords be an empty list.
2. For each `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute and a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute and where the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-keywords">keywords</a>`:
   1. [Split the value of the element&#39;s `content` attribute on commas](https://infra.spec.whatwg.org/#split-on-commas).
   2. Add the resulting tokens, if any, to keywords.
3. Remove any duplicates from keywords.
4. Return keywords. This is the list of keywords that the author has specified as applicable to the page.

User agents should not use this information when there is insufficient confidence in the reliability of the value.

For instance, it would be reasonable for a content management system to use the keyword information of pages within the system to populate the index of a site-specific search engine, but a large-scale content aggregator that used this information would likely find that certain users would try to game its ranking mechanism through the use of inappropriate keywords.

`referrer`The value must be a [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy), which defines the default [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy) for the `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`. [[REFERRERPOLICY]](https://html.spec.whatwg.org/multipage/references.html#refsREFERRERPOLICY)

If any `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element element is [inserted into the document](https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document), or has its `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` or `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attributes changed, user agents must run the following algorithm:

1. If element is not [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree), then return.
2. If element does not have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute whose value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for "`<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-referrer">referrer</a>`", then return.
3. If element does not have a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute, or that attribute's value is the empty string, then return.
4. Let value be the value of element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute, [converted to ASCII lowercase](https://infra.spec.whatwg.org/#ascii-lowercase).
5. If value is one of the values given in the first column of the following table, then set value to the value given in the second column:

   | Legacy value              | Referrer policy                                                                                                                                                                               |
   | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | `never`                   | `<a data-x-internal="referrer-policy-no-referrer" href="https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-no-referrer">no-referrer</a>`                                        |
   | `default`                 | the[default referrer policy](https://w3c.github.io/webappsec-referrer-policy/#default-referrer-policy)                                                                                        |
   | `always`                  | `<a data-x-internal="referrer-policy-unsafe-url" href="https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-unsafe-url">unsafe-url</a>`                                           |
   | `origin-when-crossorigin` | `<a data-x-internal="referrer-policy-origin-when-cross-origin" href="https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-origin-when-cross-origin">origin-when-cross-origin</a>` |
6. If value is a [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policy), then set element's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [policy container](https://html.spec.whatwg.org/multipage/dom.html#concept-document-policy-container)'s [referrer policy](https://html.spec.whatwg.org/multipage/browsers.html#policy-container-referrer-policy) to policy.

For historical reasons, unlike other standard metadata names, the processing model for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-referrer">referrer</a>` is not responsive to element removals, and does not use [tree order](https://dom.spec.whatwg.org/#concept-tree-order). Only the most-recently-inserted or most-recently-modified `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element in this state has an effect.

`theme-color`MDN

The value must be a string that matches the CSS [&lt;color&gt;](https://drafts.csswg.org/css-color/#typedef-color) production, defining a suggested color that user agents should use to customize the display of the page or of the surrounding user interface. For example, a browser might color the page's title bar with the specified value, or use it as a color highlight in a tab bar or task switcher.

Within an HTML document, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-media">media</a>` attribute value must be unique amongst all the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements with their `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute value set to an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color">theme-color</a>`.

This standard itself uses "WHATWG green" as its theme color:

```

HTML Standard
  
...
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-media">media</a>` attribute may be used to describe the context in which the provided color should be used.

If we only wanted to use "WHATWG green" as this standard's theme color in dark mode, we could use the `prefers-color-scheme` media feature:

```

HTML Standard
   
...
```

To obtain a page's theme color, user agents must run the following steps:

1. Let candidate elements be the list of all `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements that meet the following criteria, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order):
   * the element is [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree);
   * the element has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute, whose value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color">theme-color</a>`; and
   * the element has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute.
2. For each element in candidate elements:
   1. If element has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute and the value of element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-media">media</a>` attribute does not [match the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment), then [continue](https://infra.spec.whatwg.org/#iteration-continue).
   2. Let value be the result of [stripping leading and trailing ASCII whitespace](https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace) from the value of element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute.
   3. Let color be the result of [parsing](https://drafts.csswg.org/css-color/#parse-a-css-color-value) value.
   4. If color is not failure, then return color.
3. Return nothing (the page has no theme color).

If any `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements are [inserted into the document](https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document) or [removed from the document](https://html.spec.whatwg.org/multipage/infrastructure.html#remove-an-element-from-a-document), or existing `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements have their `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>`, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>`, or `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attributes changed, or if the environment changes such that any `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-media">media</a>` attribute's value may now or may no longer [match the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment), user agents must re-run the above algorithm and apply the result to any affected UI.

When using the theme color in UI, user agents may adjust it in implementation-specific ways to make it more suitable for the UI in question. For example, if a user agent intends to use the theme color as a background and display white text over it, it might use a darker variant of the theme color in that part of the UI, to ensure adequate contrast.

`color-scheme`To aid user agents in rendering the page background with the desired color scheme immediately (rather than waiting for all CSS in the page to load), a [&#39;color-scheme&#39;](https://drafts.csswg.org/css-color-adjust/#color-scheme-prop) value can be provided in a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element.

The value must be a string that matches the syntax for the CSS [&#39;color-scheme&#39;](https://drafts.csswg.org/css-color-adjust/#color-scheme-prop) property value. It determines the [page&#39;s supported color-schemes](https://drafts.csswg.org/css-color-adjust/#pages-supported-color-schemes).

There must not be more than one `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with its `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute value set to an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme">color-scheme</a>` per document.

The following declaration indicates that the page is aware of and can handle a color scheme with dark background colors and light foreground colors:

```
  
```

To obtain a [page&#39;s supported color-schemes](https://drafts.csswg.org/css-color-adjust/#pages-supported-color-schemes), user agents must run the following steps:

1. Let candidate elements be the list of all `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements that meet the following criteria, in [tree order](https://dom.spec.whatwg.org/#concept-tree-order):
   * the element is [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree);
   * the element has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` attribute, whose value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for `<a href="https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme">color-scheme</a>`; and
   * the element has a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute.
2. For each element in candidate elements:
   1. Let parsed be the result of [parsing a list of component values](https://drafts.csswg.org/css-syntax/#parse-a-list-of-component-values) given the value of element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute.
   2. If parsed is a valid CSS [&#39;color-scheme&#39;](https://drafts.csswg.org/css-color-adjust/#color-scheme-prop) property value, then return parsed.
3. Return null.

If any `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements are [inserted into the document](https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document) or [removed from the document](https://html.spec.whatwg.org/multipage/infrastructure.html#remove-an-element-from-a-document), or existing `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements have their `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-name">name</a>` or `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attributes changed, user agents must re-run the above algorithm.

Because these rules check successive elements until they find a match, an author can provide multiple such values to handle fallback for legacy user agents. Opposite to how CSS fallback works for properties, the multiple meta elements needs to be arranged with the legacy values after the newer values.

##### **4.2.5.2** Other metadata names

Anyone can create and use their own extensions to the predefined set of metadata names. There is no requirement to register such extensions.

However, a new metadata name should not be created in any of the following cases:

* If either the name is a [URL](https://url.spec.whatwg.org/#concept-url), or the value of its accompanying `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute is a [URL](https://url.spec.whatwg.org/#concept-url); in those cases, registering it as an [extension to the predefined set of link types](https://html.spec.whatwg.org/multipage/links.html#concept-rel-extensions) is encouraged (rather than creating a new metadata name).
* If the name is for something expected to have processing requirements in user agents; in that case it ought to be standardized.

Also, before creating and using a new metadata name, consulting the [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions) is encouraged — to avoid choosing a metadata name that's already in use, and to avoid duplicating the purpose of any metadata names that are already in use, and to avoid new standardized names clashing with your chosen name. [[WHATWGWIKI]](https://html.spec.whatwg.org/multipage/references.html#refsWHATWGWIKI)

Anyone is free to edit the WHATWG Wiki MetaExtensions page at any time to add a metadata name. New metadata names can be specified with the following information:

KeywordThe actual name being defined. The name should not be confusingly similar to any other defined name (e.g. differing only in case).

Brief descriptionA short non-normative description of what the metadata name's meaning is, including the format the value is required to be in.

SpecificationA link to a more detailed description of the metadata name's semantics and requirements. It could be another page on the wiki, or a link to an external page.SynonymsA list of other names that have exactly the same processing requirements. Authors should not use the names defined to be synonyms (they are only intended to allow user agents to support legacy content). Anyone may remove synonyms that are not used in practice; only names that need to be processed as synonyms for compatibility with legacy content are to be registered in this way.

StatusOne of the following:

ProposedThe name has not received wide peer review and approval. Someone has proposed it and is, or soon will be, using it.RatifiedThe name has received wide peer review and approval. It has a specification that unambiguously defines how to handle pages that use the name, including when they use it in incorrect ways.DiscontinuedThe metadata name has received wide peer review and it has been found wanting. Existing pages are using this metadata name, but new pages should avoid it. The "brief description" and "specification" entries will give details of what authors should use instead, if anything.If a metadata name is found to be redundant with existing values, it should be removed and listed as a synonym for the existing value.

If a metadata name is added in the "proposed" state for a period of a month or more without being used or specified, then it may be removed from the WHATWG Wiki MetaExtensions page.

If a metadata name is added with the "proposed" status and found to be redundant with existing values, it should be removed and listed as a synonym for the existing value. If a metadata name is added with the "proposed" status and found to be harmful, then it should be changed to "discontinued" status.

Anyone can change the status at any time, but should only do so in accordance with the definitions above.

##### **4.2.5.3** Pragma directives

When the `http-equiv` attribute is specified on a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element, the element is a pragma directive.

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute is an [enumerated attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) with the following keywords and states:


| Keyword                   | Conforming | State                                                                                                                         | Brief description                                                                                                                                                                                                                                  |
| --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content-language`        | No         | [Content language](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-language)               | Sets the[pragma-set default language](https://html.spec.whatwg.org/multipage/semantics.html#pragma-set-default-language).                                                                                                                          |
| `content-type`            |            | [Encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type)               | An alternative form of setting the`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>`.                                                                                                                 |
| `default-style`           |            | [Default style](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-default-style)                     | Sets the[name](https://drafts.csswg.org/cssom/#css-style-sheet-set-name) of the default [CSS style sheet set](https://drafts.csswg.org/cssom/#css-style-sheet-set).                                                                                |
| `refresh`                 |            | [Refresh](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-refresh)                                 | Acts as a timed redirect.                                                                                                                                                                                                                          |
| `set-cookie`              | No         | [Set-Cookie](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-set-cookie)                           | Has no effect.                                                                                                                                                                                                                                     |
| `x-ua-compatible`         |            | [X-UA-Compatible](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-x-ua-compatible)                 | In practice, encourages Internet Explorer to more closely follow the specifications.                                                                                                                                                               |
| `content-security-policy` |            | [Content security policy](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-security-policy) | [Enforces](https://w3c.github.io/webappsec-csp/#enforced) a [Content Security Policy](https://w3c.github.io/webappsec-csp/#content-security-policy-object) on a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`. |

When a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element is [inserted into the document](https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document), if its `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute is present and represents one of the above states, then the user agent must run the algorithm appropriate for that state, as described in the following list:

Content language state (`http-equiv="<code id="pragma-directives:attr-meta-http-equiv-keyword-content-language"><a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-content-language">content-language</a></code>"`)This feature is non-conforming. Authors are encouraged to use the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` attribute instead.

This pragma sets the pragma-set default language. Until such a pragma is successfully processed, there is no [pragma-set default language](https://html.spec.whatwg.org/multipage/semantics.html#pragma-set-default-language).

1. If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element has no `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute, then return.
2. If the element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute contains a U+002C COMMA character (,) then return.
3. Let input be the value of the element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute.
4. Let position point at the first character of input.
5. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
6. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are not [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) from input given position.
7. Let candidate be the string that resulted from the previous step.
8. If candidate is the empty string, return.
9. Set the [pragma-set default language](https://html.spec.whatwg.org/multipage/semantics.html#pragma-set-default-language) to candidate.
   If the value consists of multiple space-separated tokens, tokens after the first are ignored.

This pragma is almost, but not quite, entirely unlike the HTTP ``<a data-x-internal="http-content-language" href="https://httpwg.org/specs/rfc7231.html#header.content-language">Content-Language</a>`` header of the same name. [[HTTP]](https://html.spec.whatwg.org/multipage/references.html#refsHTTP)

Encoding declaration state (`http-equiv="<code id="pragma-directives:attr-meta-http-equiv-keyword-content-type"><a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-content-type">content-type</a></code>"`)The [Encoding declaration state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type) is just an alternative form of setting the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>` attribute: it is a [character encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#character-encoding-declaration). This state's user agent requirements are all handled by the parsing section of the specification.

For `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute in the [Encoding declaration state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type), the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute must have a value that is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for a string that consists of: "`text/html;`", optionally followed by any number of [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), followed by "`charset=utf-8`".

A document must not contain both a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute in the [Encoding declaration state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type) and a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>` attribute present.

The [Encoding declaration state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type) may be used in [HTML documents](https://dom.spec.whatwg.org/#html-document), but elements with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute in that state must not be used in [XML documents](https://dom.spec.whatwg.org/#xml-document).

Default style state (`http-equiv="<code id="pragma-directives:attr-meta-http-equiv-keyword-default-style"><a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-default-style">default-style</a></code>"`)**⚠** MDN

This pragma sets the [name](https://drafts.csswg.org/cssom/#css-style-sheet-set-name) of the default [CSS style sheet set](https://drafts.csswg.org/cssom/#css-style-sheet-set).

1. If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element has no `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute, or if that attribute's value is the empty string, then return.
2. [Change the preferred CSS style sheet set name](https://drafts.csswg.org/cssom/#change-the-preferred-css-style-sheet-set-name) with the name being the value of the element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute. [[CSSOM]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOM)

Refresh state (`http-equiv="<code id="pragma-directives:attr-meta-http-equiv-keyword-refresh"><a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-refresh">refresh</a></code>"`)This pragma acts as a timed redirect.

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object has an associated will declaratively refresh (a boolean). It is initially false.

1. If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element has no `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute, or if that attribute's value is the empty string, then return.
2. Let input be the value of the element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute.
3. Run the [shared declarative refresh steps](https://html.spec.whatwg.org/multipage/semantics.html#shared-declarative-refresh-steps) with the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element's [node document](https://dom.spec.whatwg.org/#concept-node-document), input, and the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element.

The shared declarative refresh steps, given a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` object document, string input, and optionally a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element meta, are as follows:

1. If document's [will declaratively refresh](https://html.spec.whatwg.org/multipage/semantics.html#will-declaratively-refresh) is true, then return.
2. Let position point at the first [code point](https://infra.spec.whatwg.org/#code-point) of input.
3. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
4. Let time be 0.
5. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position, and let the result be timeString.
6. If timeString is the empty string, then:

   1. If the [code point](https://infra.spec.whatwg.org/#code-point) in input pointed to by position is not U+002E (.), then return.
7. Otherwise, set time to the result of parsing timeString using the [rules for parsing non-negative integers](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-non-negative-integers).
8. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) and U+002E FULL STOP characters (.) from input given position. Ignore any collected characters.
9. Let urlRecord be document's [URL](https://dom.spec.whatwg.org/#concept-document-url).
10. If position is not past the end of input, then:

    1. If the [code point](https://infra.spec.whatwg.org/#code-point) in input pointed to by position is not U+003B (;), U+002C (,), or [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), then return.
    2. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
    3. If the [code point](https://infra.spec.whatwg.org/#code-point) in input pointed to by position is U+003B (;) or U+002C (,), then advance position to the next [code point](https://infra.spec.whatwg.org/#code-point).
    4. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
11. If position is not past the end of input, then:

    1. Let urlString be the substring of input from the [code point](https://infra.spec.whatwg.org/#code-point) at position to the end of the string.
    2. If the [code point](https://infra.spec.whatwg.org/#code-point) in input pointed to by position is U+0055 (U) or U+0075 (u), then advance position to the next [code point](https://infra.spec.whatwg.org/#code-point). Otherwise, jump to the step labeled *skip quotes* .
    3. If the [code point](https://infra.spec.whatwg.org/#code-point) in input pointed to by position is U+0052 (R) or U+0072 (r), then advance position to the next [code point](https://infra.spec.whatwg.org/#code-point). Otherwise, jump to the step labeled *parse* .
    4. If the [code point](https://infra.spec.whatwg.org/#code-point) in input pointed to by position is U+004C (L) or U+006C (l), then advance position to the next [code point](https://infra.spec.whatwg.org/#code-point). Otherwise, jump to the step labeled *parse* .
    5. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
    6. If the [code point](https://infra.spec.whatwg.org/#code-point) in input pointed to by position is U+003D (=), then advance position to the next [code point](https://infra.spec.whatwg.org/#code-point). Otherwise, jump to the step labeled *parse* .
    7. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
    8. *Skip quotes* : If the [code point](https://infra.spec.whatwg.org/#code-point) in input pointed to by position is U+0027 (') or U+0022 ("), then let quote be that [code point](https://infra.spec.whatwg.org/#code-point), and advance position to the next [code point](https://infra.spec.whatwg.org/#code-point). Otherwise, let quote be the empty string.
    9. Set urlString to the substring of input from the [code point](https://infra.spec.whatwg.org/#code-point) at position to the end of the string.
    10. If quote is not the empty string, and there is a [code point](https://infra.spec.whatwg.org/#code-point) in urlString equal to quote, then truncate urlString at that [code point](https://infra.spec.whatwg.org/#code-point), so that it and all subsequent [code points](https://infra.spec.whatwg.org/#code-point) are removed.
    11. *Parse* : Set urlRecord to the result of [encoding-parsing a URL](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#encoding-parsing-a-url) given urlString, relative to document.
    12. If urlRecord is failure, then return.
12. Set document's [will declaratively refresh](https://html.spec.whatwg.org/multipage/semantics.html#will-declaratively-refresh) to true.
13. Perform one or more of the following steps:

    * After the refresh has come due (as defined below), if the user has not canceled the redirect and, if meta is given, document's [active sandboxing flag set](https://html.spec.whatwg.org/multipage/browsers.html#active-sandboxing-flag-set) does not have the [sandboxed automatic features browsing context flag](https://html.spec.whatwg.org/multipage/browsers.html#sandboxed-automatic-features-browsing-context-flag) set, then [navigate](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate) document's [node navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#node-navigable) to urlRecord using document, with *[historyHandling](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigation-hh)* set to "`<a href="https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigationhistorybehavior-replace">replace</a>`".
      For the purposes of the previous paragraph, a refresh is said to have come due as soon as the *later* of the following two conditions occurs:

      * At least time seconds have elapsed since document's [completely loaded time](https://html.spec.whatwg.org/multipage/document-lifecycle.html#completely-loaded-time), adjusted to take into account user or user agent preferences.
      * If meta is given, at least time seconds have elapsed since meta was [inserted into the document](https://html.spec.whatwg.org/multipage/infrastructure.html#insert-an-element-into-a-document) document, adjusted to take into account user or user agent preferences.

      It is important to use document here, and not meta's [node document](https://dom.spec.whatwg.org/#concept-node-document), as that might have changed between the initial set of steps and the refresh coming due and meta is not always given (in case of the HTTP ``<a href="https://html.spec.whatwg.org/multipage/document-lifecycle.html#refresh">Refresh</a>`` header).
    * Provide the user with an interface that, when selected, [navigates](https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate) document's [node navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#node-navigable) to urlRecord using document.
    * Do nothing.

    In addition, the user agent may, as with anything, inform the user of any and all aspects of its operation, including the state of any timers, the destinations of any timed redirects, and so forth.

For `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute in the [Refresh state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-refresh), the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute must have a value consisting either of:

* just a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer), or
* a [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer), followed by a U+003B SEMICOLON character (;), followed by one or more [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), followed by a substring that is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for the string "`URL`", followed by a U+003D EQUALS SIGN character (=), followed by a [valid URL string](https://url.spec.whatwg.org/#valid-url-string) that does not start with a literal U+0027 APOSTROPHE (') or U+0022 QUOTATION MARK (") character.

In the former case, the integer represents a number of seconds before the page is to be reloaded; in the latter case the integer represents a number of seconds before the page is to be replaced by the page at the given [URL](https://url.spec.whatwg.org/#concept-url).

A news organization's front page could include the following markup in the page's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element, to ensure that the page automatically reloads from the server every five minutes:

```
  
```

A sequence of pages could be used as an automated slide show by making each page refresh to the next page in the sequence, using markup such as the following:

```
  
```

Set-Cookie state (`http-equiv="<code id="pragma-directives:attr-meta-http-equiv-keyword-set-cookie"><a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-set-cookie">set-cookie</a></code>"`)This pragma is non-conforming and has no effect.

User agents are required to ignore this pragma.

X-UA-Compatible state (`http-equiv="<code id="pragma-directives:attr-meta-http-equiv-keyword-x-ua-compatible"><a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-x-ua-compatible">x-ua-compatible</a></code>"`)In practice, this pragma encourages Internet Explorer to more closely follow the specifications.

For `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute in the [X-UA-Compatible state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-x-ua-compatible), the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute must have a value that is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for the string "`IE=edge`".

User agents are required to ignore this pragma.

Content security policy state (`http-equiv="<code id="pragma-directives:attr-meta-http-equiv-keyword-content-security-policy"><a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-keyword-content-security-policy">content-security-policy</a></code>"`)This pragma [enforces](https://w3c.github.io/webappsec-csp/#enforced) a [Content Security Policy](https://w3c.github.io/webappsec-csp/#content-security-policy-object) on a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`. [[CSP]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)

1. If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element is not a child of a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element, return.
2. If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element has no `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute, or if that attribute's value is the empty string, then return.
3. Let policy be the result of executing Content Security Policy's [parse a serialized Content Security Policy](https://w3c.github.io/webappsec-csp/#parse-serialized-policy) algorithm on the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute's value, with a source of "meta", and a disposition of "enforce".
4. Remove all occurrences of the `<a data-x-internal="report-uri-directive" href="https://w3c.github.io/webappsec-csp/#report-uri">report-uri</a>`, `<a data-x-internal="frame-ancestors-directive" href="https://w3c.github.io/webappsec-csp/#frame-ancestors">frame-ancestors</a>`, and `<a data-x-internal="sandbox-directive" href="https://w3c.github.io/webappsec-csp/#sandbox">sandbox</a>` [directives](https://w3c.github.io/webappsec-csp/#directives) from policy.
5. [Enforce the policy](https://w3c.github.io/webappsec-csp/#enforced) policy.

For `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute in the [Content security policy state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-security-policy), the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute must have a value consisting of a [valid Content Security Policy](https://w3c.github.io/webappsec-csp/#grammardef-serialized-policy), but must not contain any `<a data-x-internal="report-uri-directive" href="https://w3c.github.io/webappsec-csp/#report-uri">report-uri</a>`, `<a data-x-internal="frame-ancestors-directive" href="https://w3c.github.io/webappsec-csp/#frame-ancestors">frame-ancestors</a>`, or `<a data-x-internal="sandbox-directive" href="https://w3c.github.io/webappsec-csp/#sandbox">sandbox</a>` [directives](https://w3c.github.io/webappsec-csp/#directives). The [Content Security Policy](https://w3c.github.io/webappsec-csp/#content-security-policy-object) given in the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-content">content</a>` attribute will be [enforced](https://w3c.github.io/webappsec-csp/#enforced) upon the current document. [[CSP]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)

At the time of inserting the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element to the document, it is possible that some resources have already been fetched. For example, images might be stored in the [list of available images](https://html.spec.whatwg.org/multipage/images.html#list-of-available-images) prior to dynamically inserting a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute in the [Content security policy state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-security-policy). Resources that have already been fetched are not guaranteed to be blocked by a [Content Security Policy](https://w3c.github.io/webappsec-csp/#content-security-policy-object) that's [enforced](https://w3c.github.io/webappsec-csp/#enforced) late.

A page might choose to mitigate the risk of cross-site scripting attacks by preventing the execution of inline JavaScript, as well as blocking all plugin content, using a policy such as the following:

```
  
```

There must not be more than one `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with any particular state in the document at a time.

##### **4.2.5.4** Specifying the document's character encoding

A character encoding declaration is a mechanism by which the [character encoding](https://encoding.spec.whatwg.org/#encoding) used to store or transmit a document is specified.

The Encoding standard requires use of the [UTF-8](https://encoding.spec.whatwg.org/#utf-8) [character encoding](https://encoding.spec.whatwg.org/#encoding) and requires use of the "`utf-8`" [encoding label](https://encoding.spec.whatwg.org/#label) to identify it. Those requirements necessitate that the document's [character encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#character-encoding-declaration), if it exists, specifies an [encoding label](https://encoding.spec.whatwg.org/#label) using an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for "`utf-8`". Regardless of whether a [character encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#character-encoding-declaration) is present or not, the actual [character encoding](https://dom.spec.whatwg.org/#concept-document-encoding) used to encode the document must be [UTF-8](https://encoding.spec.whatwg.org/#utf-8). [[ENCODING]](https://html.spec.whatwg.org/multipage/references.html#refsENCODING)

To enforce the above rules, authoring tools must default to using [UTF-8](https://encoding.spec.whatwg.org/#utf-8) for newly-created documents.

The following restrictions also apply:

* The character encoding declaration must be serialized without the use of [character references](https://html.spec.whatwg.org/multipage/syntax.html#syntax-charref) or character escapes of any kind.
* The element containing the character encoding declaration must be serialized completely within the first 1024 bytes of the document.

In addition, due to a number of restrictions on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` elements, there can only be one `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>`-based character encoding declaration per document.

If an [HTML document](https://dom.spec.whatwg.org/#html-document) does not start with a BOM, and its [encoding](https://encoding.spec.whatwg.org/#encoding) is not explicitly given by [Content-Type metadata](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#content-type), and the document is not [an `iframe` `srcdoc` document](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#an-iframe-srcdoc-document), then the encoding must be specified using a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-charset">charset</a>` attribute or a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">meta</a>` element with an `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv">http-equiv</a>` attribute in the [Encoding declaration state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-content-type).

A character encoding declaration is required (either in the [Content-Type metadata](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#content-type) or explicitly in the file) even when all characters are in the ASCII range, because a character encoding is needed to process non-ASCII characters entered by the user in forms, in URLs generated by scripts, and so forth.

Using non-UTF-8 encodings can have unexpected results on form submission and URL encodings, which use the [document&#39;s character encoding](https://dom.spec.whatwg.org/#concept-document-encoding) by default.

If the document is [an `iframe` `srcdoc` document](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#an-iframe-srcdoc-document), the document must not have a [character encoding declaration](https://html.spec.whatwg.org/multipage/semantics.html#character-encoding-declaration). (In this case, the source is already decoded, since it is part of the document that contained the `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>`.)

In XML, the XML declaration should be used for inline character encoding information, if necessary.

In HTML, to declare that the character encoding is [UTF-8](https://encoding.spec.whatwg.org/#utf-8), the author could include the following markup near the top of the document (in the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element):

```
 
```

In XML, the XML declaration would be used instead, at the very top of the markup:

```

```

#### **4.2.6** The `style` element

**✔** MDN

**✔** MDN

[Categories](https://html.spec.whatwg.org/multipage/dom.html#concept-element-categories):[Metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2).[Contexts in which this element can be used](https://html.spec.whatwg.org/multipage/dom.html#concept-element-contexts):Where [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content-2) is expected.In a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element">noscript</a>` element that is a child of a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element.[Content model](https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model):[Text](https://html.spec.whatwg.org/multipage/dom.html#text-content) that gives a [conformant style sheet](https://drafts.csswg.org/css-syntax/#conform-classes).[Tag omission in text/html](https://html.spec.whatwg.org/multipage/dom.html#concept-element-tag-omission):Neither tag is omissible.[Content attributes](https://html.spec.whatwg.org/multipage/dom.html#concept-element-attributes):[Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media">media</a>` — Applicable media`<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-blocking">blocking</a>` — Whether the element is [potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking)Also, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-title">title</a>` attribute [has special semantics](https://html.spec.whatwg.org/multipage/semantics.html#attr-style-title) on this element: [CSS style sheet set name](https://drafts.csswg.org/cssom/#css-style-sheet-set-name)[Accessibility considerations](https://html.spec.whatwg.org/multipage/dom.html#concept-element-accessibility-considerations):[For authors](https://w3c.github.io/html-aria/#el-style).[For implementers](https://w3c.github.io/html-aam/#el-style).[DOM interface](https://html.spec.whatwg.org/multipage/dom.html#concept-element-dom):

```
[=]
  :  {
  [] ();

    ;
  []   ;
  [, =]    ;

  // also has obsolete members
};
  ;
```

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element allows authors to embed CSS style sheets in their documents. The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element is one of several inputs to the styling processing model. The element does not [represent](https://html.spec.whatwg.org/multipage/dom.html#represents) content for the user.

**✔** MDN

The `disabled` getter steps are:

1. If [this](https://webidl.spec.whatwg.org/#this) does not have an [associated CSS style sheet](https://drafts.csswg.org/cssom/#associated-css-style-sheet), return false.
2. If [this](https://webidl.spec.whatwg.org/#this)'s [associated CSS style sheet](https://drafts.csswg.org/cssom/#associated-css-style-sheet)'s [disabled flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-disabled-flag) is set, return true.
3. Return false.

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#dom-style-disabled">disabled</a>` setter steps are:

1. If [this](https://webidl.spec.whatwg.org/#this) does not have an [associated CSS style sheet](https://drafts.csswg.org/cssom/#associated-css-style-sheet), return.
2. If the given value is true, set [this](https://webidl.spec.whatwg.org/#this)'s [associated CSS style sheet](https://drafts.csswg.org/cssom/#associated-css-style-sheet)'s [disabled flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-disabled-flag). Otherwise, unset [this](https://webidl.spec.whatwg.org/#this)'s [associated CSS style sheet](https://drafts.csswg.org/cssom/#associated-css-style-sheet)'s [disabled flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-disabled-flag).

Importantly, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#dom-style-disabled">disabled</a>` attribute assignments only take effect when the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element has an [associated CSS style sheet](https://drafts.csswg.org/cssom/#associated-css-style-sheet):

```
 style  documentcreateElement
styledisabled  
styletextContent  
documentbodyappendstyle
consolelogstyledisabled 
```

The `media` attribute says which media the styles apply to. The value must be a [valid media query list](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-media-query-list). The user agent must apply the styles when the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media">media</a>` attribute's value [matches the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment) and the other relevant conditions apply, and must not apply them otherwise.

The styles might be further limited in scope, e.g. in CSS with the use of `@media` blocks. This specification does not override such further restrictions or requirements.

The default, if the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media">media</a>` attribute is omitted, is "`all`", meaning that by default styles apply to all media.

The `blocking` attribute is a [blocking attribute](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attribute).

**⚠** MDN

The `title` attribute on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` elements defines [CSS style sheet sets](https://drafts.csswg.org/cssom/#css-style-sheet-set). If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element has no `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-title">title</a>` attribute, then it has no title; the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute of ancestors does not apply to the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element. If the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element is not [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree), then the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-title">title</a>` attribute is ignored. [[CSSOM]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOM)

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-title">title</a>` attribute on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` elements, like the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-link-title">title</a>` attribute on `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` elements, differs from the global `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-title">title</a>` attribute in that a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` block without a title does not inherit the title of the parent element: it merely has no title.

The [child text content](https://dom.spec.whatwg.org/#concept-child-text-content) of a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element must be that of a [conformant style sheet](https://drafts.csswg.org/css-syntax/#conform-classes).

A `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element is [implicitly potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#implicitly-potentially-render-blocking) if the element was created by its [node document](https://dom.spec.whatwg.org/#concept-node-document)'s parser.

---

The user agent must run the [update a `style` block](https://html.spec.whatwg.org/multipage/semantics.html#update-a-style-block) algorithm whenever any of the following conditions occur:

* The element is popped off the [stack of open elements](https://html.spec.whatwg.org/multipage/parsing.html#stack-of-open-elements) of an [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) or [XML parser](https://html.spec.whatwg.org/multipage/xhtml.html#xml-parser).
* The element is not on the [stack of open elements](https://html.spec.whatwg.org/multipage/parsing.html#stack-of-open-elements) of an [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) or [XML parser](https://html.spec.whatwg.org/multipage/xhtml.html#xml-parser), and it [becomes connected](https://html.spec.whatwg.org/multipage/infrastructure.html#becomes-connected) or [disconnected](https://html.spec.whatwg.org/multipage/infrastructure.html#becomes-disconnected).
* The element's [children changed steps](https://dom.spec.whatwg.org/#concept-node-children-changed-ext) run.

The update a `style` block algorithm is as follows:

1. Let element be the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element.
2. If element has an [associated CSS style sheet](https://drafts.csswg.org/cssom/#associated-css-style-sheet), [remove the CSS style sheet](https://drafts.csswg.org/cssom/#remove-a-css-style-sheet) in question.
3. If element is not [connected](https://dom.spec.whatwg.org/#connected), then return.
4. If element's `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#attr-style-type">type</a>` attribute is present and its value is neither the empty string nor an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for "`<a href="https://html.spec.whatwg.org/multipage/indices.html#text/css">text/css</a>`", then return.
   In particular, a `<a href="https://html.spec.whatwg.org/multipage/obsolete.html#attr-style-type">type</a>` value with parameters, such as "`text/css; charset=utf-8`", will cause this algorithm to return early.
5. If the [Should element&#39;s inline behavior be blocked by Content Security Policy?](https://w3c.github.io/webappsec-csp/#should-block-inline) algorithm returns "`Blocked`" when executed upon the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element, "`style`", and the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element's [child text content](https://dom.spec.whatwg.org/#concept-child-text-content), then return. [[CSP]](https://html.spec.whatwg.org/multipage/references.html#refsCSP)
6. [Create a CSS style sheet](https://drafts.csswg.org/cssom/#create-a-css-style-sheet) with the following properties:
   [type](https://drafts.csswg.org/cssom/#concept-css-style-sheet-type)`<a href="https://html.spec.whatwg.org/multipage/indices.html#text/css">text/css</a>`

   [owner node](https://drafts.csswg.org/cssom/#concept-css-style-sheet-owner-node)element

   [media](https://drafts.csswg.org/cssom/#concept-css-style-sheet-media)The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media">media</a>` attribute of element.

   This is a reference to the (possibly absent at this time) attribute, rather than a copy of the attribute's current value. CSSOM defines what happens when the attribute is dynamically set, changed, or removed.

   [title](https://drafts.csswg.org/cssom/#concept-css-style-sheet-title)The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-title">title</a>` attribute of element, if element is [in a document tree](https://dom.spec.whatwg.org/#in-a-document-tree), or the empty string otherwise.

   Again, this is a *reference* to the attribute.

   [alternate flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-alternate-flag)Unset.

   [origin-clean flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-origin-clean-flag)Set.

   [location](https://drafts.csswg.org/cssom/#concept-css-style-sheet-location)[parent CSS style sheet](https://drafts.csswg.org/cssom/#concept-css-style-sheet-parent-css-style-sheet)[owner CSS rule](https://drafts.csswg.org/cssom/#concept-css-style-sheet-owner-css-rule)null

   [disabled flag](https://drafts.csswg.org/cssom/#concept-css-style-sheet-disabled-flag)Left at its default value.

   [CSS rules](https://drafts.csswg.org/cssom/#concept-css-style-sheet-css-rules)Left uninitialized.

   This doesn't seem right. Presumably we should be using the element's [child text content](https://dom.spec.whatwg.org/#concept-child-text-content)? Tracked as [issue #2997](https://github.com/whatwg/html/issues/2997).
7. If element [contributes a script-blocking style sheet](https://html.spec.whatwg.org/multipage/semantics.html#contributes-a-script-blocking-style-sheet), [append](https://infra.spec.whatwg.org/#set-append) element to its [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [script-blocking style sheet set](https://html.spec.whatwg.org/multipage/semantics.html#script-blocking-style-sheet-set).
8. If element's `<a href="https://html.spec.whatwg.org/multipage/semantics.html#attr-style-media">media</a>` attribute's value [matches the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment) and element is [potentially render-blocking](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#potentially-render-blocking), then [block rendering](https://html.spec.whatwg.org/multipage/dom.html#block-rendering) on element.

Once the attempts to obtain the style sheet's [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources), if any, are complete, or, if the style sheet has no [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources), once the style sheet has been parsed and processed, the user agent must run these steps:

Fetching the [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources) is not well-defined; probably [issue #968](https://github.com/whatwg/html/issues/968) is the best resolution for that. In the meantime, any [critical subresource](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources) [request](https://fetch.spec.whatwg.org/#concept-request) should have its [render-blocking](https://fetch.spec.whatwg.org/#request-render-blocking) set to whether or not the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element is currently [render-blocking](https://html.spec.whatwg.org/multipage/dom.html#render-blocking).

1. Let element be the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element associated with the style sheet in question.
2. Let success be true.
3. If the attempts to obtain any of the style sheet's [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources) failed for any reason (e.g., DNS error, HTTP 404 response, a connection being prematurely closed, unsupported Content-Type), set success to false.
   Note that content-specific errors, e.g., CSS parse errors or PNG decoding errors, do not affect success.
4. [Queue an element task](https://html.spec.whatwg.org/multipage/webappapis.html#queue-an-element-task) on the [networking task source](https://html.spec.whatwg.org/multipage/webappapis.html#networking-task-source) given element and the following steps:
   1. If success is true, [fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-load">load</a>` at element.
   2. Otherwise, [fire an event](https://dom.spec.whatwg.org/#concept-event-fire) named `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-error">error</a>` at element.
   3. If element [contributes a script-blocking style sheet](https://html.spec.whatwg.org/multipage/semantics.html#contributes-a-script-blocking-style-sheet):
      1. [Assert](https://infra.spec.whatwg.org/#assert): element's [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [script-blocking style sheet set](https://html.spec.whatwg.org/multipage/semantics.html#script-blocking-style-sheet-set) [contains](https://infra.spec.whatwg.org/#list-contain) element.
      2. [Remove](https://infra.spec.whatwg.org/#list-remove) element from its [node document](https://dom.spec.whatwg.org/#concept-node-document)'s [script-blocking style sheet set](https://html.spec.whatwg.org/multipage/semantics.html#script-blocking-style-sheet-set).
   4. [Unblock rendering](https://html.spec.whatwg.org/multipage/dom.html#unblock-rendering) on element.

The element must [delay the load event](https://html.spec.whatwg.org/multipage/parsing.html#delay-the-load-event) of the element's [node document](https://dom.spec.whatwg.org/#concept-node-document) until all the attempts to obtain the style sheet's [critical subresources](https://html.spec.whatwg.org/multipage/infrastructure.html#critical-subresources), if any, are complete.

This specification does not specify a style system, but CSS is expected to be supported by most web browsers. [[CSS]](https://html.spec.whatwg.org/multipage/references.html#refsCSS)

**✔** MDN

The `media` and `blocking` IDL attributes must each [reflect](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) the respective content attributes of the same name.

The `<a data-x-internal="linkstyle" href="https://drafts.csswg.org/cssom/#the-linkstyle-interface">LinkStyle</a>` interface is also implemented by this element. [[CSSOM]](https://html.spec.whatwg.org/multipage/references.html#refsCSSOM)

The following document has its stress emphasis styled as bright red text rather than italics text, while leaving titles of works and Latin words in their default italics. It shows how using appropriate elements enables easier restyling of documents.

```

 
 
  My favorite book
  
       
       
  
 
 
  My favorite book of all time has got to be
  A Cat's Life. It is a book by P. Rahmel that talks
  about the  Felis catus in modern human society.
 
```

#### **4.2.7** Interactions of styling and scripting

If the style sheet referenced no other resources (e.g., it was an internal style sheet given by a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element with no `@import` rules), then the style rules must be [immediately](https://html.spec.whatwg.org/multipage/infrastructure.html#immediately) made available to script; otherwise, the style rules must only be made available to script once the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) reaches its [update the rendering](https://html.spec.whatwg.org/multipage/webappapis.html#update-the-rendering) step.

An element el in the context of a `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` of an [HTML parser](https://html.spec.whatwg.org/multipage/parsing.html#html-parser) or [XML parser](https://html.spec.whatwg.org/multipage/xhtml.html#xml-parser) contributes a script-blocking style sheet if all of the following are true:

* el was created by that `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`'s parser.
* el is either a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element or a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-link-element">link</a>` element that was an [external resource link that contributes to the styling processing model](https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet) when the el was created by the parser.
* el's `media` attribute's value [matches the environment](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#matches-the-environment).
* el's style sheet was enabled when the element was created by the parser.
* The last time the [event loop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop) reached [step 1](https://html.spec.whatwg.org/multipage/webappapis.html#step1), el's [root](https://dom.spec.whatwg.org/#concept-tree-root) was that `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>`.
* The user agent hasn't given up on loading that particular style sheet yet. A user agent may give up on loading a style sheet at any time.
  Giving up on a style sheet before the style sheet loads, if the style sheet eventually does still load, means that the script might end up operating with incorrect information. For example, if a style sheet sets the color of an element to green, but a script that inspects the resulting style is executed before the sheet is loaded, the script will find that the element is black (or whatever the default color is), and might thus make poor choices (e.g., deciding to use black as the color elsewhere on the page, instead of green). Implementers have to balance the likelihood of a script using incorrect information with the performance impact of doing nothing while waiting for a slow network request to finish.

It is expected that counterparts to the above rules also apply to `<a data-x-internal="xml-stylesheet" href="https://www.w3.org/TR/xml-stylesheet/#the-xml-stylesheet-processing-instruction">&lt;?xml-stylesheet?&gt;</a>` PIs. However, this has not yet been thoroughly investigated.

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has a script-blocking style sheet set, which is an [ordered set](https://infra.spec.whatwg.org/#ordered-set), initially empty.

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` document has a style sheet that is blocking scripts if the following steps return true:

1. If document's [script-blocking style sheet set](https://html.spec.whatwg.org/multipage/semantics.html#script-blocking-style-sheet-set) is not [empty](https://infra.spec.whatwg.org/#list-is-empty), then return true.
2. If document's [node navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#node-navigable) is null, then return false.
3. Let containerDocument be document's [node navigable](https://html.spec.whatwg.org/multipage/document-sequences.html#node-navigable)'s [container document](https://html.spec.whatwg.org/multipage/document-sequences.html#nav-container).
4. If containerDocument is non-null and containerDocument's [script-blocking style sheet set](https://html.spec.whatwg.org/multipage/semantics.html#script-blocking-style-sheet-set) is not [empty](https://infra.spec.whatwg.org/#list-is-empty), then return true.
5. Return false.

A `<a href="https://html.spec.whatwg.org/multipage/dom.html#document">Document</a>` has no style sheet that is blocking scripts if it does not [have a style sheet that is blocking scripts](https://html.spec.whatwg.org/multipage/semantics.html#has-a-style-sheet-that-is-blocking-scripts).
