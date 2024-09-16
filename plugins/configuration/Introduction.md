## **1** Introduction

### **1.1** Where does this specification fit?

This specification defines a big part of the web platform, in lots of detail. Its place in the web platform specification stack relative to other specifications can be best summed up as follows:

### **1.2** Is this HTML5?

*This section is non-normative.*

In short: Yes.

In more length: the term "HTML5" is widely used as a buzzword to refer to modern web technologies, many of which (though by no means all) are developed at the WHATWG. This document is one such; others are available from [the WHATWG Standards overview](https://spec.whatwg.org/).

### **1.3** Background

*This section is non-normative.*

HTML is the World Wide Web's core markup language. Originally, HTML was primarily designed as a language for semantically describing scientific documents. Its general design, however, has enabled it to be adapted, over the subsequent years, to describe a number of other types of documents and even applications.

### **1.4** Audience

*This section is non-normative.*

This specification is intended for authors of documents and scripts that use the features defined in this specification, implementers of tools that operate on pages that use the features defined in this specification, and individuals wishing to establish the correctness of documents or implementations with respect to the requirements of this specification.

This document is probably not suited to readers who do not already have at least a passing familiarity with web technologies, as in places it sacrifices clarity for precision, and brevity for completeness. More approachable tutorials and authoring guides can provide a gentler introduction to the topic.

In particular, familiarity with the basics of DOM is necessary for a complete understanding of some of the more technical parts of this specification. An understanding of Web IDL, HTTP, XML, Unicode, character encodings, JavaScript, and CSS will also be helpful in places but is not essential.

### **1.5** Scope

*This section is non-normative.*

This specification is limited to providing a semantic-level markup language and associated semantic-level scripting APIs for authoring accessible pages on the web ranging from static documents to dynamic applications.

The scope of this specification does not include providing mechanisms for media-specific customization of presentation (although default rendering rules for web browsers are included at the end of this specification, and several mechanisms for hooking into CSS are provided as part of the language).

The scope of this specification is not to describe an entire operating system. In particular, hardware configuration software, image manipulation tools, and applications that users would be expected to use with high-end workstations on a daily basis are out of scope. In terms of applications, this specification is targeted specifically at applications that would be expected to be used by users on an occasional basis, or regularly but from disparate locations, with low CPU requirements. Examples of such applications include online purchasing systems, searching systems, games (especially multiplayer online games), public telephone books or address books, communications software (email clients, instant messaging clients, discussion software), document editing software, etc.

### **1.6** History

*This section is non-normative.*

For its first five years (1990-1995), HTML went through a number of revisions and experienced a number of extensions, primarily hosted first at CERN, and then at the IETF.

With the creation of the W3C, HTML's development changed venue again. A first abortive attempt at extending HTML in 1995 known as HTML 3.0 then made way to a more pragmatic approach known as HTML 3.2, which was completed in 1997. HTML4 quickly followed later that same year.

The following year, the W3C membership decided to stop evolving HTML and instead begin work on an XML-based equivalent, called XHTML. This effort started with a reformulation of HTML4 in XML, known as XHTML 1.0, which added no new features except the new serialization, and which was completed in 2000. After XHTML 1.0, the W3C's focus turned to making it easier for other working groups to extend XHTML, under the banner of XHTML Modularization. In parallel with this, the W3C also worked on a new language that was not compatible with the earlier HTML and XHTML languages, calling it XHTML2.

Around the time that HTML's evolution was stopped in 1998, parts of the API for HTML developed by browser vendors were specified and published under the name DOM Level 1 (in 1998) and DOM Level 2 Core and DOM Level 2 HTML (starting in 2000 and culminating in 2003). These efforts then petered out, with some DOM Level 3 specifications published in 2004 but the working group being closed before all the Level 3 drafts were completed.

In 2003, the publication of XForms, a technology which was positioned as the next generation of web forms, sparked a renewed interest in evolving HTML itself, rather than finding replacements for it. This interest was borne from the realization that XML's deployment as a web technology was limited to entirely new technologies (like RSS and later Atom), rather than as a replacement for existing deployed technologies (like HTML).

A proof of concept to show that it was possible to extend HTML4's forms to provide many of the features that XForms 1.0 introduced, without requiring browsers to implement rendering engines that were incompatible with existing HTML web pages, was the first result of this renewed interest. At this early stage, while the draft was already publicly available, and input was already being solicited from all sources, the specification was only under Opera Software's copyright.

The idea that HTML's evolution should be reopened was tested at a W3C workshop in 2004, where some of the principles that underlie the HTML5 work (described below), as well as the aforementioned early draft proposal covering just forms-related features, were presented to the W3C jointly by Mozilla and Opera. The proposal was rejected on the grounds that the proposal conflicted with the previously chosen direction for the web's evolution; the W3C staff and membership voted to continue developing XML-based replacements instead.

Shortly thereafter, Apple, Mozilla, and Opera jointly announced their intent to continue working on the effort under the umbrella of a new venue called the WHATWG. A public mailing list was created, and the draft was moved to the WHATWG site. The copyright was subsequently amended to be jointly owned by all three vendors, and to allow reuse of the specification.

The WHATWG was based on several core principles, in particular that technologies need to be backwards compatible, that specifications and implementations need to match even if this means changing the specification rather than the implementations, and that specifications need to be detailed enough that implementations can achieve complete interoperability without reverse-engineering each other.

The latter requirement in particular required that the scope of the HTML5 specification include what had previously been specified in three separate documents: HTML4, XHTML1, and DOM2 HTML. It also meant including significantly more detail than had previously been considered the norm.

In 2006, the W3C indicated an interest to participate in the development of HTML5 after all, and in 2007 formed a working group chartered to work with the WHATWG on the development of the HTML5 specification. Apple, Mozilla, and Opera allowed the W3C to publish the specification under the W3C copyright, while keeping a version with the less restrictive license on the WHATWG site.

For a number of years, both groups then worked together. In 2011, however, the groups came to the conclusion that they had different goals: the W3C wanted to publish a "finished" version of "HTML5", while the WHATWG wanted to continue working on a Living Standard for HTML, continuously maintaining the specification rather than freezing it in a state with known problems, and adding new features as needed to evolve the platform.

In 2019, the WHATWG and W3C [signed an agreement](https://www.w3.org/blog/news/archives/7753) to collaborate on a single version of HTML going forward: this document.

### **1.7** Design notes

*This section is non-normative.*

It must be admitted that many aspects of HTML appear at first glance to be nonsensical and inconsistent.

HTML, its supporting DOM APIs, as well as many of its supporting technologies, have been developed over a period of several decades by a wide array of people with different priorities who, in many cases, did not know of each other's existence.

Features have thus arisen from many sources, and have not always been designed in especially consistent ways. Furthermore, because of the unique characteristics of the web, implementation bugs have often become de-facto, and now de-jure, standards, as content is often unintentionally written in ways that rely on them before they can be fixed.

Despite all this, efforts have been made to adhere to certain design goals. These are described in the next few subsections.

#### **1.7.1** Serializability of script execution

*This section is non-normative.*

To avoid exposing web authors to the complexities of multithreading, the HTML and DOM APIs are designed such that no script can ever detect the simultaneous execution of other scripts. Even with [workers](https://html.spec.whatwg.org/multipage/workers.html#worker), the intent is that the behavior of implementations can be thought of as completely serializing the execution of all scripts in all globals.

The exception to this general design principle is the JavaScript `<a data-x-internal="sharedarraybuffer" href="https://tc39.es/ecma262/#sec-sharedarraybuffer-objects">SharedArrayBuffer</a>` class. Using `<a data-x-internal="sharedarraybuffer" href="https://tc39.es/ecma262/#sec-sharedarraybuffer-objects">SharedArrayBuffer</a>` objects, it can in fact be observed that scripts in other [agents](https://tc39.es/ecma262/#sec-agents) are executing simultaneously. Furthermore, due to the JavaScript memory model, there are situations which not only are un-representable via serialized *script* execution, but also un-representable via serialized *statement* execution among those scripts.

#### **1.7.2** Compliance with other specifications

*This section is non-normative.*

This specification interacts with and relies on a wide variety of other specifications. In certain circumstances, unfortunately, conflicting needs have led to this specification violating the requirements of these other specifications. Whenever this has occurred, the transgressions have each been noted as a "willful violation", and the reason for the violation has been noted.

#### **1.7.3** Extensibility

*This section is non-normative.*

HTML has a wide array of extensibility mechanisms that can be used for adding semantics in a safe manner:

* Authors can use the `<a href="https://html.spec.whatwg.org/multipage/dom.html#classes">class</a>` attribute to extend elements, effectively creating their own elements, while using the most applicable existing "real" HTML element, so that browsers and other tools that don't know of the extension can still support it somewhat well. This is the tack used by microformats, for example.
* Authors can include data for inline client-side scripts or server-side site-wide scripts to process using the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-data-*">data-*=&#34;&#34;</a>` attributes. These are guaranteed to never be touched by browsers, and allow scripts to include data on HTML elements that scripts can then look for and process.
* Authors can use the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-meta-element">&lt;meta name=&#34;&#34; content=&#34;&#34;&gt;</a>` mechanism to include page-wide metadata.
* Authors can use the `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-rel">rel=&#34;&#34;</a>` mechanism to annotate links with specific meanings by registering [extensions to the predefined set of link types](https://html.spec.whatwg.org/multipage/links.html#concept-rel-extensions). This is also used by microformats.
* Authors can embed raw data using the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">&lt;script type=&#34;&#34;&gt;</a>` mechanism with a custom type, for further handling by inline or server-side scripts.
* Authors can extend APIs using the JavaScript prototyping mechanism. This is widely used by script libraries, for instance.
* Authors can use the microdata feature (the `<a href="https://html.spec.whatwg.org/multipage/microdata.html#attr-itemscope">itemscope=&#34;&#34;</a>` and `<a href="https://html.spec.whatwg.org/multipage/microdata.html#names:-the-itemprop-attribute">itemprop=&#34;&#34;</a>` attributes) to embed nested name-value pairs of data to be shared with other applications and sites.
* Authors can define, share, and use [custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element) to extend the vocabulary of HTML. The requirements of [valid custom element names](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) ensure forward compatibility (since no elements will be added to HTML, SVG, or MathML with hyphen-containing local names in the future).

### **1.8** HTML vs XML syntax

*This section is non-normative.*

This specification defines an abstract language for describing documents and applications, and some APIs for interacting with in-memory representations of resources that use this language.

The in-memory representation is known as "DOM HTML", or "the DOM" for short.

There are various concrete syntaxes that can be used to transmit resources that use this abstract language, two of which are defined in this specification.

The first such concrete syntax is the HTML syntax. This is the format suggested for most authors. It is compatible with most legacy web browsers. If a document is transmitted with the `<a href="https://html.spec.whatwg.org/multipage/iana.html#text/html">text/html</a>` [MIME type](https://mimesniff.spec.whatwg.org/#mime-type), then it will be processed as an HTML document by web browsers. This specification defines the latest HTML syntax, known simply as "HTML".

The second concrete syntax is XML. When a document is transmitted with an [XML MIME type](https://mimesniff.spec.whatwg.org/#xml-mime-type), such as `<a href="https://html.spec.whatwg.org/multipage/iana.html#application/xhtml+xml">application/xhtml+xml</a>`, then it is treated as an XML document by web browsers, to be parsed by an XML processor. Authors are reminded that the processing for XML and HTML differs; in particular, even minor syntax errors will prevent a document labeled as XML from being rendered fully, whereas they would be ignored in the HTML syntax.

The XML syntax for HTML was formerly referred to as "XHTML", but this specification does not use that term (among other reasons, because no such term is used for the HTML syntaxes of MathML and SVG).

The DOM, the HTML syntax, and the XML syntax cannot all represent the same content. For example, namespaces cannot be represented using the HTML syntax, but they are supported in the DOM and in the XML syntax. Similarly, documents that use the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-noscript-element">noscript</a>` feature can be represented using the HTML syntax, but cannot be represented with the DOM or in the XML syntax. Comments that contain the string "`-->`" can only be represented in the DOM, not in the HTML and XML syntaxes.

### **1.9** Structure of this specification

*This section is non-normative.*

This specification is divided into the following major sections:

[Introduction](https://html.spec.whatwg.org/multipage/introduction.html#introduction)Non-normative materials providing a context for the HTML standard.[Common infrastructure](https://html.spec.whatwg.org/multipage/infrastructure.html#infrastructure)The conformance classes, algorithms, definitions, and the common underpinnings of the rest of the specification.[Semantics, structure, and APIs of HTML documents](https://html.spec.whatwg.org/multipage/dom.html#dom)Documents are built from elements. These elements form a tree using the DOM. This section defines the features of this DOM, as well as introducing the features common to all elements, and the concepts used in defining elements.[The elements of HTML](https://html.spec.whatwg.org/multipage/semantics.html#semantics)Each element has a predefined meaning, which is explained in this section. Rules for authors on how to use the element, along with user agent requirements for how to handle each element, are also given. This includes large signature features of HTML such as video playback and subtitles, form controls and form submission, and a 2D graphics API known as the HTML canvas.[Microdata](https://html.spec.whatwg.org/multipage/microdata.html#microdata)This specification introduces a mechanism for adding machine-readable annotations to documents, so that tools can extract trees of name-value pairs from the document. This section describes this mechanism and some algorithms that can be used to convert HTML documents into other formats. This section also defines some sample Microdata vocabularies for contact information, calendar events, and licensing works.[User interaction](https://html.spec.whatwg.org/multipage/interaction.html#editing)HTML documents can provide a number of mechanisms for users to interact with and modify content, which are described in this section, such as how focus works, and drag-and-drop.[Loading web pages](https://html.spec.whatwg.org/multipage/browsers.html#browsers)HTML documents do not exist in a vacuum — this section defines many of the features that affect environments that deal with multiple pages, such as web browsers.[Web application APIs](https://html.spec.whatwg.org/multipage/webappapis.html#webappapis)This section introduces basic features for scripting of applications in HTML.[Web workers](https://html.spec.whatwg.org/multipage/workers.html#workers)This section defines an API for background threads in JavaScript.[Worklets](https://html.spec.whatwg.org/multipage/worklets.html#worklets)This section defines infrastructure for APIs that need to run JavaScript separately from the main JavaScript execution environment.[The communication APIs](https://html.spec.whatwg.org/multipage/comms.html#comms)This section describes some mechanisms that applications written in HTML can use to communicate with other applications from different domains running on the same client. It also introduces a server-push event stream mechanism known as Server Sent Events or `<a href="https://html.spec.whatwg.org/multipage/server-sent-events.html#eventsource">EventSource</a>`, and a two-way full-duplex socket protocol for scripts known as Web Sockets.[Web storage](https://html.spec.whatwg.org/multipage/webstorage.html#webstorage)This section defines a client-side storage mechanism based on name-value pairs.[The HTML syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax)[The XML syntax](https://html.spec.whatwg.org/multipage/xhtml.html#xhtml)All of these features would be for naught if they couldn't be represented in a serialized form and sent to other people, and so these sections define the syntaxes of HTML and XML, along with rules for how to parse content using those syntaxes.[Rendering](https://html.spec.whatwg.org/multipage/rendering.html#rendering)This section defines the default rendering rules for web browsers.There are also some appendices, listing [obsolete features](https://html.spec.whatwg.org/multipage/obsolete.html#obsolete) and [IANA considerations](https://html.spec.whatwg.org/multipage/iana.html#iana), and several indices.

#### **1.9.1** How to read this specification

This specification should be read like all other specifications. First, it should be read cover-to-cover, multiple times. Then, it should be read backwards at least once. Then it should be read by picking random sections from the contents list and following all the cross-references.

As described in the conformance requirements section below, this specification describes conformance criteria for a variety of conformance classes. In particular, there are conformance requirements that apply to *producers* , for example authors and the documents they create, and there are conformance requirements that apply to *consumers* , for example web browsers. They can be distinguished by what they are requiring: a requirement on a producer states what is allowed, while a requirement on a consumer states how software is to act.

For example, "the `foo` attribute's value must be a [valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer)" is a requirement on producers, as it lays out the allowed values; in contrast, the requirement "the `foo` attribute's value must be parsed using the [rules for parsing integers](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-integers)" is a requirement on consumers, as it describes how to process the content.

**Requirements on producers have no bearing whatsoever on consumers.**

Continuing the above example, a requirement stating that a particular attribute's value is constrained to being a [valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer) emphatically does *not* imply anything about the requirements on consumers. It might be that the consumers are in fact required to treat the attribute as an opaque string, completely unaffected by whether the value conforms to the requirements or not. It might be (as in the previous example) that the consumers are required to parse the value using specific rules that define how invalid (non-numeric in this case) values are to be processed.

#### **1.9.2** Typographic conventions

This is a definition, requirement, or explanation.

This is a note.

This is an example.

This is an open issue.

This is a warning.

```
[=]
  {
  // this is an IDL definition
};
```

`<var>variable</var><span> </span>=<span> </span><var>object</var>.<a href="https://html.spec.whatwg.org/multipage/introduction.html#x-that" id="typographic-conventions:x-that">method</a>([<var>optionalArgument</var>])`This is a note to authors describing the usage of an interface.

```

```

The defining instance of a term is marked up like this. Uses of that term are marked up like [this](https://html.spec.whatwg.org/multipage/introduction.html#x-this) or like *[this](https://html.spec.whatwg.org/multipage/introduction.html#x-this)* .

The defining instance of an element, attribute, or API is marked up like `this`. References to that element, attribute, or API are marked up like `<a href="https://html.spec.whatwg.org/multipage/introduction.html#x-that">this</a>`.

Other code fragments are marked up `like this`.

Variables are marked up like this.

In an algorithm, steps in [synchronous sections](https://html.spec.whatwg.org/multipage/webappapis.html#synchronous-section) are marked with ⌛.

In some cases, requirements are given in the form of lists with conditions and corresponding requirements. In such cases, the requirements that apply to a condition are always the first set of requirements that follow the condition, even in the case of there being multiple sets of conditions for those requirements. Such cases are presented as follows:

This is a conditionThis is another conditionThis is the requirement that applies to the conditions above.This is a third conditionThis is the requirement that applies to the third condition.### **1.10** A quick introduction to HTML

*This section is non-normative.*

A basic HTML document looks like this:

```

 
 
  Sample page
 
 
  Sample page
  This is a  simple sample.
  
 
```

HTML documents consist of a tree of elements and text. Each element is denoted in the source by a [start tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-start-tag), such as "`<body>`", and an [end tag](https://html.spec.whatwg.org/multipage/syntax.html#syntax-end-tag), such as "`</body>`". (Certain start tags and end tags can in certain cases be [omitted](https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission) and are implied by other tags.)

Tags have to be nested such that elements are all completely within each other, without overlapping:

```
This is very wrong!
```

```
This is correct.
```

This specification defines a set of elements that can be used in HTML, along with rules about the ways in which the elements can be nested.

Elements can have attributes, which control how the elements work. In the example below, there is a [hyperlink](https://html.spec.whatwg.org/multipage/links.html#hyperlink), formed using the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` element and its `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>` attribute:

```
 simple
```

[Attributes](https://html.spec.whatwg.org/multipage/syntax.html#syntax-attributes) are placed inside the start tag, and consist of a [name](https://html.spec.whatwg.org/multipage/syntax.html#syntax-attribute-name) and a [value](https://html.spec.whatwg.org/multipage/syntax.html#syntax-attribute-value), separated by an "`=`" character. The attribute value can remain [unquoted](https://html.spec.whatwg.org/multipage/syntax.html#unquoted) if it doesn't contain [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) or any of `"` `'` ``` `=` `<` or `>`. Otherwise, it has to be quoted using either single or double quotes. The value, along with the "`=`" character, can be omitted altogether if the value is the empty string.

```

  
  


  
  
  
```

HTML user agents (e.g., web browsers) then *parse* this markup, turning it into a DOM (Document Object Model) tree. A DOM tree is an in-memory representation of a document.

DOM trees contain several kinds of nodes, in particular a `<a data-x-internal="documenttype" href="https://dom.spec.whatwg.org/#interface-documenttype">DocumentType</a>` node, `<a data-x-internal="element" href="https://dom.spec.whatwg.org/#interface-element">Element</a>` nodes, `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes, `<a data-x-internal="comment-2" href="https://dom.spec.whatwg.org/#interface-comment">Comment</a>` nodes, and in some cases `<a data-x-internal="processinginstruction" href="https://dom.spec.whatwg.org/#interface-processinginstruction">ProcessingInstruction</a>` nodes.

The [markup snippet at the top of this section](https://html.spec.whatwg.org/multipage/introduction.html#intro-early-example) would be turned into the following DOM tree:

* DOCTYPE: `html`
* `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>`**="**`en`**"**
  * `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>`
    * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: ⏎␣␣
    * `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>`
      * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: Sample page
    * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: ⏎␣
  * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: ⏎␣
  * `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>`
    * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: ⏎␣␣
    * `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h1</a>`
      * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: Sample page
    * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: ⏎␣␣
    * `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>`
      * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: This is a
      * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>`**="**`demo.html`**"**
        * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: simple
      * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: sample.
    * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: ⏎␣␣
    * `<a data-x-internal="comment-2" href="https://dom.spec.whatwg.org/#interface-comment">#comment</a>`: this is a comment
    * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: ⏎␣⏎

The [document element](https://dom.spec.whatwg.org/#document-element) of this tree is the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-html-element">html</a>` element, which is the element always found in that position in HTML documents. It contains two elements, `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` and `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>`, as well as a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node between them.

There are many more `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes in the DOM tree than one would initially expect, because the source contains a number of spaces (represented here by "␣") and line breaks ("⏎") that all end up as `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` nodes in the DOM. However, for historical reasons not all of the spaces and line breaks in the original markup appear in the DOM. In particular, all the whitespace before `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` start tag ends up being dropped silently, and all the whitespace after the `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` end tag ends up placed at the end of the `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>`.

The `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-head-element">head</a>` element contains a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-title-element">title</a>` element, which itself contains a `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">Text</a>` node with the text "Sample page". Similarly, the `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-body-element">body</a>` element contains an `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h1</a>` element, a `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` element, and a comment.

---

This DOM tree can be manipulated from scripts in the page. Scripts (typically in JavaScript) are small programs that can be embedded using the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` element or using [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes). For example, here is a form with a script that sets the value of the form's `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element">output</a>` element to say "Hello World":

```
 
 Result:  
 
  documentformsmainelementsresultvalue  
 
```

Each element in the DOM tree is represented by an object, and these objects have APIs so that they can be manipulated. For instance, a link (e.g. the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element">a</a>` element in the tree above) can have its "`<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-href">href</a>`" attribute changed in several ways:

```
 a  documentlinks 
ahref   
aprotocol   
asetAttribute  
```

Since DOM trees are used as the way to represent HTML documents when they are processed and presented by implementations (especially interactive implementations like web browsers), this specification is mostly phrased in terms of DOM trees, instead of the markup described above.

---

HTML documents represent a media-independent description of interactive content. HTML documents might be rendered to a screen, or through a speech synthesizer, or on a braille display. To influence exactly how such rendering takes place, authors can use a styling language such as CSS.

In the following example, the page has been made yellow-on-blue using CSS.

```

 
 
  Sample styled page
  
       
  
 
 
  Sample styled page
  This page is just a demo.
 
```

For more details on how to use HTML, authors are encouraged to consult tutorials and guides. Some of the examples included in this specification might also be of use, but the novice author is cautioned that this specification, by necessity, defines the language with a level of detail that might be difficult to understand at first.

#### **1.10.1** Writing secure applications with HTML

*This section is non-normative.*

When HTML is used to create interactive sites, care needs to be taken to avoid introducing vulnerabilities through which attackers can compromise the integrity of the site itself or of the site's users.

A comprehensive study of this matter is beyond the scope of this document, and authors are strongly encouraged to study the matter in more detail. However, this section attempts to provide a quick introduction to some common pitfalls in HTML application development.

The security model of the web is based on the concept of "origins", and correspondingly many of the potential attacks on the web involve cross-origin actions. [[ORIGIN]](https://html.spec.whatwg.org/multipage/references.html#refsORIGIN)

Not validating user inputCross-site scripting (XSS)SQL injectionWhen accepting untrusted input, e.g. user-generated content such as text comments, values in URL parameters, messages from third-party sites, etc, it is imperative that the data be validated before use, and properly escaped when displayed. Failing to do this can allow a hostile user to perform a variety of attacks, ranging from the potentially benign, such as providing bogus user information like a negative age, to the serious, such as running scripts every time a user looks at a page that includes the information, potentially propagating the attack in the process, to the catastrophic, such as deleting all data in the server.

When writing filters to validate user input, it is imperative that filters always be safelist-based, allowing known-safe constructs and disallowing all other input. Blocklist-based filters that disallow known-bad inputs and allow everything else are not secure, as not everything that is bad is yet known (for example, because it might be invented in the future).

For example, suppose a page looked at its URL's query string to determine what to display, and the site then redirected the user to that page to display a message, as in:

```

  Say Hello
  Say Welcome
  Say Kittens
```

If the message was just displayed to the user without escaping, a hostile attacker could then craft a URL that contained a script element:

```
https://example.com/message.cgi?say=%3Cscript%3Ealert%28%27Oh%20no%21%27%29%3C/script%3E
```

If the attacker then convinced a victim user to visit this page, a script of the attacker's choosing would run on the page. Such a script could do any number of hostile actions, limited only by what the site offers: if the site is an e-commerce shop, for instance, such a script could cause the user to unknowingly make arbitrarily many unwanted purchases.

This is called a cross-site scripting attack.

There are many constructs that can be used to try to trick a site into executing code. Here are some that authors are encouraged to consider when writing safelist filters:

* When allowing harmless-seeming elements like `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>`, it is important to safelist any provided attributes as well. If one allowed all attributes then an attacker could, for instance, use the `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onload">onload</a>` attribute to run arbitrary script.
* When allowing URLs to be provided (e.g. for links), the scheme of each URL also needs to be explicitly safelisted, as there are many schemes that can be abused. The most prominent example is "`<a href="https://html.spec.whatwg.org/multipage/browsing-the-web.html#the-javascript:-url-special-case">javascript:</a>`", but user agents can implement (and indeed, have historically implemented) others.
* Allowing a `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-base-element">base</a>` element to be inserted means any `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` elements in the page with relative links can be hijacked, and similarly that any form submissions can get redirected to a hostile site.

Cross-site request forgery (CSRF)If a site allows a user to make form submissions with user-specific side-effects, for example posting messages on a forum under the user's name, making purchases, or applying for a passport, it is important to verify that the request was made by the user intentionally, rather than by another site tricking the user into making the request unknowingly.

This problem exists because HTML forms can be submitted to other origins.

Sites can prevent such attacks by populating forms with user-specific hidden tokens, or by checking ``<a data-x-internal="http-origin" href="https://fetch.spec.whatwg.org/#http-origin">Origin</a>`` headers on all requests.

ClickjackingA page that provides users with an interface to perform actions that the user might not wish to perform needs to be designed so as to avoid the possibility that users can be tricked into activating the interface.

One way that a user could be so tricked is if a hostile site places the victim site in a small `<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element">iframe</a>` and then convinces the user to click, for instance by having the user play a reaction game. Once the user is playing the game, the hostile site can quickly position the iframe under the mouse cursor just as the user is about to click, thus tricking the user into clicking the victim site's interface.

To avoid this, sites that do not expect to be used in frames are encouraged to only enable their interface if they detect that they are not in a frame (e.g. by comparing the `<a href="https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-window">window</a>` object to the value of the `<a href="https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-top">top</a>` attribute).

#### **1.10.2** Common pitfalls to avoid when using the scripting APIs

*This section is non-normative.*

Scripts in HTML have "run-to-completion" semantics, meaning that the browser will generally run the script uninterrupted before doing anything else, such as firing further events or continuing to parse the document.

On the other hand, parsing of HTML files happens incrementally, meaning that the parser can pause at any point to let scripts run. This is generally a good thing, but it does mean that authors need to be careful to avoid hooking event handlers after the events could have possibly fired.

There are two techniques for doing this reliably: use [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes), or create the element and add the event handlers in the same script. The latter is safe because, as mentioned earlier, scripts are run to completion before further events can fire.

One way this could manifest itself is with `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` elements and the `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-load">load</a>` event. The event could fire as soon as the element has been parsed, especially if the image has already been cached (which is common).

Here, the author uses the `<a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-onload">onload</a>` handler on an `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` element to catch the `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-load">load</a>` event:

```
   
```

If the element is being added by script, then so long as the event handlers are added in the same script, the event will still not be missed:

```

  img   Image
 imgsrc  
 imgalt  
 imgonload  gamesLogoHasLoaded
 
```

However, if the author first created the `<a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element">img</a>` element and then in a separate script added the event listeners, there's a chance that the `<a href="https://html.spec.whatwg.org/multipage/indices.html#event-load">load</a>` event would be fired in between, leading it to be missed:

```

  
 

 
   img  documentgetElementById
  imgonload  gamesLogoHasLoaded 
 
```

#### **1.10.3** How to catch mistakes when writing HTML: validators and conformance checkers

*This section is non-normative.*

Authors are encouraged to make use of conformance checkers (also known as *validators* ) to catch common mistakes. The WHATWG maintains a list of such tools at: [https://whatwg.org/validator/](https://whatwg.org/validator/)

### **1.11** Conformance requirements for authors

*This section is non-normative.*

Unlike previous versions of the HTML specification, this specification defines in some detail the required processing for invalid documents as well as valid documents.

However, even though the processing of invalid content is in most cases well-defined, conformance requirements for documents are still important: in practice, interoperability (the situation in which all implementations process particular content in a reliable and identical or equivalent way) is not the only goal of document conformance requirements. This section details some of the more common reasons for still distinguishing between a conforming document and one with errors.

#### **1.11.1** Presentational markup

*This section is non-normative.*

The majority of presentational features from previous versions of HTML are no longer allowed. Presentational markup in general has been found to have a number of problems:

The use of presentational elements leads to poorer accessibilityWhile it is possible to use presentational markup in a way that provides users of assistive technologies (ATs) with an acceptable experience (e.g. using ARIA), doing so is significantly more difficult than doing so when using semantically-appropriate markup. Furthermore, even using such techniques doesn't help make pages accessible for non-AT non-graphical users, such as users of text-mode browsers.

Using media-independent markup, on the other hand, provides an easy way for documents to be authored in such a way that they work for more users (e.g. users of text browsers).

Higher cost of maintenanceIt is significantly easier to maintain a site written in such a way that the markup is style-independent. For example, changing the color of a site that uses `<font color="">` throughout requires changes across the entire site, whereas a similar change to a site based on CSS can be done by changing a single file.

Larger document sizesPresentational markup tends to be much more redundant, and thus results in larger document sizes.

For those reasons, presentational markup has been removed from HTML in this version. This change should not come as a surprise; HTML4 deprecated presentational markup many years ago and provided a mode (HTML4 Transitional) to help authors move away from presentational markup; later, XHTML 1.1 went further and obsoleted those features altogether.

The only remaining presentational markup features in HTML are the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` attribute and the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element. Use of the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-style">style</a>` attribute is somewhat discouraged in production environments, but it can be useful for rapid prototyping (where its rules can be directly moved into a separate style sheet later) and for providing specific styles in unusual cases where a separate style sheet would be inconvenient. Similarly, the `<a href="https://html.spec.whatwg.org/multipage/semantics.html#the-style-element">style</a>` element can be useful in syndication or for page-specific styles, but in general an external style sheet is likely to be more convenient when the styles apply to multiple pages.

It is also worth noting that some elements that were previously presentational have been redefined in this specification to be media-independent: `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element">b</a>`, `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`, `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element">hr</a>`, `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element">s</a>`, `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element">small</a>`, and `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-u-element">u</a>`.

#### **1.11.2** Syntax errors

*This section is non-normative.*

The syntax of HTML is constrained to avoid a wide variety of problems.

Unintuitive error-handling behaviorCertain invalid syntax constructs, when parsed, result in DOM trees that are highly unintuitive.

For example, the following markup fragment results in a DOM with an `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element">hr</a>` element that is an *earlier* sibling of the corresponding `<a href="https://html.spec.whatwg.org/multipage/tables.html#the-table-element">table</a>` element:

```
...
```

Errors with optional error recoveryTo allow user agents to be used in controlled environments without having to implement the more bizarre and convoluted error handling rules, user agents are permitted to fail whenever encountering a [parse error](https://html.spec.whatwg.org/multipage/parsing.html#parse-errors).

Errors where the error-handling behavior is not compatible with streaming user agentsSome error-handling behavior, such as the behavior for the `<table><hr>...` example mentioned above, are incompatible with streaming user agents (user agents that process HTML files in one pass, without storing state). To avoid interoperability problems with such user agents, any syntax resulting in such behavior is considered invalid.

Errors that can result in infoset coercionWhen a user agent based on XML is connected to an HTML parser, it is possible that certain invariants that XML enforces, such as element or attribute names never contain multiple colons, will be violated by an HTML file. Handling this can require that the parser coerce the HTML DOM into an XML-compatible infoset. Most syntax constructs that require such handling are considered invalid. (Comments containing two consecutive hyphens, or ending with a hyphen, are exceptions that are allowed in the HTML syntax.)

Errors that result in disproportionately poor performanceCertain syntax constructs can result in disproportionately poor performance. To discourage the use of such constructs, they are typically made non-conforming.

For example, the following markup results in poor performance, since all the unclosed `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>` elements have to be reconstructed in each paragraph, resulting in progressively more elements in each paragraph:

```
She dreamt.
She dreamt that she ate breakfast.
Then lunch.
And finally dinner.
```

The resulting DOM for this fragment would be:

* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>`
  * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
    * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: She dreamt.
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>`
  * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
    * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
      * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: She dreamt that she ate breakfast.
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>`
  * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
    * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
      * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
        * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: Then lunch.
* `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>`
  * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
    * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
      * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
        * `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">i</a>`
          * `<a data-x-internal="text" href="https://dom.spec.whatwg.org/#interface-text">#text</a>`: And finally dinner.

Errors involving fragile syntax constructsThere are syntax constructs that, for historical reasons, are relatively fragile. To help reduce the number of users who accidentally run into such problems, they are made non-conforming.

For example, the parsing of certain named character references in attributes happens even with the closing semicolon being omitted. It is safe to include an ampersand followed by letters that do not form a named character reference, but if the letters are changed to a string that *does* form a named character reference, they will be interpreted as that character instead.

In this fragment, the attribute's value is "`?bill&ted`":

```
 Bill and Ted
```

In the following fragment, however, the attribute's value is actually "`?art©`", *not* the intended "`?art&copy`", because even without the final semicolon, "`&copy`" is handled the same as "`&copy;`" and thus gets interpreted as "`©`":

```
 Art and Copy
```

To avoid this problem, all named character references are required to end with a semicolon, and uses of named character references without a semicolon are flagged as errors.

Thus, the correct way to express the above cases is as follows:

```
 Bill and Ted 
```

```
 Art and Copy 
```

Errors involving known interoperability problems in legacy user agentsCertain syntax constructs are known to cause especially subtle or serious problems in legacy user agents, and are therefore marked as non-conforming to help authors avoid them.

For example, this is why the U+0060 GRAVE ACCENT character (`) is not allowed in unquoted attributes. In certain legacy user agents, it is sometimes treated as a quote character.

Another example of this is the DOCTYPE, which is required to trigger [no-quirks mode](https://dom.spec.whatwg.org/#concept-document-no-quirks), because the behavior of legacy user agents in [quirks mode](https://dom.spec.whatwg.org/#concept-document-quirks) is often largely undocumented.

Errors that risk exposing authors to security attacksCertain restrictions exist purely to avoid known security problems.

For example, the restriction on using UTF-7 exists purely to avoid authors falling prey to a known cross-site-scripting attack using UTF-7. [[UTF7]](https://html.spec.whatwg.org/multipage/references.html#refsUTF7)

Cases where the author's intent is unclearMarkup where the author's intent is very unclear is often made non-conforming. Correcting these errors early makes later maintenance easier.

For example, it is unclear whether the author intended the following to be an `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h1</a>` heading or an `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements">h2</a>` heading:

```
Contact details
```

Cases that are likely to be typosWhen a user makes a simple typo, it is helpful if the error can be caught early, as this can save the author a lot of debugging time. This specification therefore usually considers it an error to use element names, attribute names, and so forth, that do not match the names defined in this specification.

For example, if the author typed `<capton>` instead of `<caption>`, this would be flagged as an error and the author could correct the typo immediately.

Errors that could interfere with new syntax in the futureIn order to allow the language syntax to be extended in the future, certain otherwise harmless features are disallowed.

For example, "attributes" in end tags are ignored currently, but they are invalid, in case a future change to the language makes use of that syntax feature without conflicting with already-deployed (and valid!) content.

Some authors find it helpful to be in the practice of always quoting all attributes and always including all optional tags, preferring the consistency derived from such custom over the minor benefits of terseness afforded by making use of the flexibility of the HTML syntax. To aid such authors, conformance checkers can provide modes of operation wherein such conventions are enforced.

#### **1.11.3** Restrictions on content models and on attribute values

*This section is non-normative.*

Beyond the syntax of the language, this specification also places restrictions on how elements and attributes can be specified. These restrictions are present for similar reasons:

Errors involving content with dubious semanticsTo avoid misuse of elements with defined meanings, content models are defined that restrict how elements can be nested when such nestings would be of dubious value.

For example, this specification disallows nesting a `<a href="https://html.spec.whatwg.org/multipage/sections.html#the-section-element">section</a>` element inside a `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-kbd-element">kbd</a>` element, since it is highly unlikely for an author to indicate that an entire section should be keyed in.

Errors that involve a conflict in expressed semanticsSimilarly, to draw the author's attention to mistakes in the use of elements, clear contradictions in the semantics expressed are also considered conformance errors.

In the fragments below, for example, the semantics are nonsensical: a separator cannot simultaneously be a cell, nor can a radio button be a progress bar.

```
 
```

```
  
```

Another example is the restrictions on the content models of the `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element">ul</a>` element, which only allows `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element">li</a>` element children. Lists by definition consist just of zero or more list items, so if a `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element">ul</a>` element contains something other than an `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element">li</a>` element, it's not clear what was meant.

Cases where the default styles are likely to lead to confusionCertain elements have default styles or behaviors that make certain combinations likely to lead to confusion. Where these have equivalent alternatives without this problem, the confusing combinations are disallowed.

For example, `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>` elements are rendered as [block boxes](https://drafts.csswg.org/css2/#block-boxes%E2%91%A0), and `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>` elements as [inline boxes](https://drafts.csswg.org/css2/#inline-box). Putting a [block box](https://drafts.csswg.org/css2/#block-boxes%E2%91%A0) in an [inline box](https://drafts.csswg.org/css2/#inline-box) is unnecessarily confusing; since either nesting just `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>` elements, or nesting just `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>` elements, or nesting `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>` elements inside `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>` elements all serve the same purpose as nesting a `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-div-element">div</a>` element in a `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-span-element">span</a>` element, but only the latter involves a [block box](https://drafts.csswg.org/css2/#block-boxes%E2%91%A0) in an [inline box](https://drafts.csswg.org/css2/#inline-box), the latter combination is disallowed.

Another example would be the way [interactive content](https://html.spec.whatwg.org/multipage/dom.html#interactive-content-2) cannot be nested. For example, a `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element">button</a>` element cannot contain a `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element">textarea</a>` element. This is because the default behavior of such nesting interactive elements would be highly confusing to users. Instead of nesting these elements, they can be placed side by side.

Errors that indicate a likely misunderstanding of the specificationSometimes, something is disallowed because allowing it would likely cause author confusion.

For example, setting the `<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled">disabled</a>` attribute to the value "`false`" is disallowed, because despite the appearance of meaning that the element is enabled, it in fact means that the element is *disabled* (what matters for implementations is the presence of the attribute, not its value).

Errors involving limits that have been imposed merely to simplify the languageSome conformance errors simplify the language that authors need to learn.

For example, the `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element">area</a>` element's `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape">shape</a>` attribute, despite accepting both `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape-keyword-circ">circ</a>` and `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape-keyword-circle">circle</a>` values in practice as synonyms, disallows the use of the `<a href="https://html.spec.whatwg.org/multipage/image-maps.html#attr-area-shape-keyword-circ">circ</a>` value, so as to simplify tutorials and other learning aids. There would be no benefit to allowing both, but it would cause extra confusion when teaching the language.

Errors that involve peculiarities of the parserCertain elements are parsed in somewhat eccentric ways (typically for historical reasons), and their content model restrictions are intended to avoid exposing the author to these issues.

For example, a `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>` element isn't allowed inside [phrasing content](https://html.spec.whatwg.org/multipage/dom.html#phrasing-content-2), because when parsed as HTML, a `<a href="https://html.spec.whatwg.org/multipage/forms.html#the-form-element">form</a>` element's start tag will imply a `<a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element">p</a>` element's end tag. Thus, the following markup results in two [paragraphs](https://html.spec.whatwg.org/multipage/dom.html#paragraph), not one:

```
Welcome. Name: 
```

It is parsed exactly like the following:

```
Welcome. Name: 
```

Errors that would likely result in scripts failing in hard-to-debug waysSome errors are intended to help prevent script problems that would be hard to debug.

This is why, for instance, it is non-conforming to have two `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attributes with the same value. Duplicate IDs lead to the wrong element being selected, with sometimes disastrous effects whose cause is hard to determine.

Errors that waste authoring timeSome constructs are disallowed because historically they have been the cause of a lot of wasted authoring time, and by encouraging authors to avoid making them, authors can save time in future efforts.

For example, a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` element's `<a href="https://html.spec.whatwg.org/multipage/scripting.html#attr-script-src">src</a>` attribute causes the element's contents to be ignored. However, this isn't obvious, especially if the element's contents appear to be executable script — which can lead to authors spending a lot of time trying to debug the inline script without realizing that it is not executing. To reduce this problem, this specification makes it non-conforming to have executable script in a `<a href="https://html.spec.whatwg.org/multipage/scripting.html#the-script-element">script</a>` element when the `<a href="https://html.spec.whatwg.org/multipage/scripting.html#attr-script-src">src</a>` attribute is present. This means that authors who are validating their documents are less likely to waste time with this kind of mistake.

Errors that involve areas that affect authors migrating between the HTML and XML syntaxesSome authors like to write files that can be interpreted as both XML and HTML with similar results. Though this practice is discouraged in general due to the myriad of subtle complications involved (especially when involving scripting, styling, or any kind of automated serialization), this specification has a few restrictions intended to at least somewhat mitigate the difficulties. This makes it easier for authors to use this as a transitionary step when migrating between the HTML and XML syntaxes.

For example, there are somewhat complicated rules surrounding the `<a href="https://html.spec.whatwg.org/multipage/dom.html#attr-lang">lang</a>` and `<a data-x-internal="attr-xml-lang" href="https://www.w3.org/TR/xml/#sec-lang-tag">xml:lang</a>` attributes intended to keep the two synchronized.

Another example would be the restrictions on the values of `xmlns` attributes in the HTML serialization, which are intended to ensure that elements in conforming documents end up in the same namespaces whether processed as HTML or XML.

Errors that involve areas reserved for future expansionAs with the restrictions on the syntax intended to allow for new syntax in future revisions of the language, some restrictions on the content models of elements and values of attributes are intended to allow for future expansion of the HTML vocabulary.

For example, limiting the values of the `<a href="https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-target">target</a>` attribute that start with an U+005F LOW LINE character (_) to only specific predefined values allows new predefined values to be introduced at a future time without conflicting with author-defined values.

Errors that indicate a mis-use of other specificationsCertain restrictions are intended to support the restrictions made by other specifications.

For example, requiring that attributes that take media query lists use only *valid* media query lists reinforces the importance of following the conformance rules of that specification.

### **1.12** Suggested reading

*This section is non-normative.*

The following documents might be of interest to readers of this specification.

Character Model for the World Wide Web 1.0: Fundamentals [[CHARMOD]](https://html.spec.whatwg.org/multipage/references.html#refsCHARMOD)> This Architectural Specification provides authors of specifications, software developers, and content developers with a common reference for interoperable text manipulation on the World Wide Web, building on the Universal Character Set, defined jointly by the Unicode Standard and ISO/IEC 10646. Topics addressed include use of the terms 'character', 'encoding' and 'string', a reference processing model, choice and identification of character encodings, character escaping, and string indexing.

Unicode Security Considerations [[UTR36]](https://html.spec.whatwg.org/multipage/references.html#refsUTR36)> Because Unicode contains such a large number of characters and incorporates the varied writing systems of the world, incorrect usage can expose programs or systems to possible security attacks. This is especially important as more and more products are internationalized. This document describes some of the security considerations that programmers, system analysts, standards developers, and users should take into account, and provides specific recommendations to reduce the risk of problems.

Web Content Accessibility Guidelines (WCAG) [[WCAG]](https://html.spec.whatwg.org/multipage/references.html#refsWCAG)> Web Content Accessibility Guidelines (WCAG) covers a wide range of recommendations for making web content more accessible. Following these guidelines will make content accessible to a wider range of people with disabilities, including blindness and low vision, deafness and hearing loss, learning disabilities, cognitive limitations, limited movement, speech disabilities, photosensitivity and combinations of these. Following these guidelines will also often make your web content more usable to users in general.

Authoring Tool Accessibility Guidelines (ATAG) 2.0 [[ATAG]](https://html.spec.whatwg.org/multipage/references.html#refsATAG)> This specification provides guidelines for designing web content authoring tools that are more accessible for people with disabilities. An authoring tool that conforms to these guidelines will promote accessibility by providing an accessible user interface to authors with disabilities as well as by enabling, supporting, and promoting the production of accessible web content by all authors.

User Agent Accessibility Guidelines (UAAG) 2.0 [[UAAG]](https://html.spec.whatwg.org/multipage/references.html#refsUAAG)> This document provides guidelines for designing user agents that lower barriers to web accessibility for people with disabilities. User agents include browsers and other types of software that retrieve and render web content. A user agent that conforms to these guidelines will promote accessibility through its own user interface and through other internal facilities, including its ability to communicate with other technologies (especially assistive technologies). Furthermore, all users, not just users with disabilities, should find conforming user agents to be more usable.
