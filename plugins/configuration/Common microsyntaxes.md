### Common microsyntaxes

There are various places in HTML that accept particular data types, such as dates or numbers. This section describes what the conformance criteria for content in those formats is, and how to parse them.

Implementers are strongly urged to carefully examine any third-party libraries they might consider using to implement the parsing of syntaxes described below. For example, date libraries are likely to implement error handling behavior that differs from what is required in this specification, since error-handling behavior is often not defined in specifications that describe date syntaxes similar to those used in this specification, and thus implementations tend to vary greatly in how they handle errors.

#### **2.3.1** Common parser idioms

Some of the micro-parsers described below follow the pattern of having an input variable that holds the string being parsed, and having a position variable pointing at the next character to parse in input.

#### **2.3.2** Boolean attributes

A number of attributes are boolean attributes. The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

If the attribute is present, its value must either be the empty string or a value that is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for the attribute's canonical name, with no leading or trailing whitespace.

The values "true" and "false" are not allowed on boolean attributes. To represent a false value, the attribute has to be omitted altogether.

Here is an example of a checkbox that is checked and disabled. The `<a href="https://html.spec.whatwg.org/multipage/input.html#attr-input-checked">checked</a>` and `<a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-disabled">disabled</a>` attributes are the boolean attributes.

```
     Cheese
```

This could be equivalently written as this:

```
     Cheese
```

You can also mix styles; the following is still equivalent:

```
     Cheese
```

#### **2.3.3** Keywords and enumerated attributes

Some attributes, called enumerated attributes, take on a finite set of states. The state for such an attribute is derived by combining the attribute's value, a set of keyword/state mappings given in the specification of each attribute, and two possible special states that can also be given in the specification of the attribute. These special states are the *invalid value default* and the *missing value default*.

Multiple keywords can map to the same state.

The empty string can be a valid keyword. Note that the *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* applies only when the attribute is *missing* , not when it is present with an empty string value.

To determine the state of an attribute, use the following steps:

1. If the attribute is not specified:
   1. If the attribute has a *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* state defined, then return that *[missing value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#missing-value-default)* state.
   2. Otherwise, return no state.
2. If the attribute's value is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for one of the keywords defined for the attribute, then return the state represented by that keyword.
3. If the attribute has an *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* state defined, then return that *[invalid value default](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#invalid-value-default)* state.
4. Return no state.

For authoring conformance purposes, if an enumerated attribute is specified, the attribute's value must be an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for one of the conforming keywords for that attribute, with no leading or trailing whitespace.

For [reflection](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflect) purposes, states which have any keywords mapping to them are said to have a canonical keyword. This is determined as follows:

* If there is only one keyword mapping to the given state, then it is that keyword.
* If there is only one *conforming* keyword mapping to the given state, then it is that conforming keyword.
* Otherwise, the canonical keyword for the state will be explicitly given in the specification for the attribute.

#### **2.3.4** Numbers

##### **2.3.4.1** Signed integers

A string is a valid integer if it consists of one or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), optionally prefixed with a U+002D HYPHEN-MINUS character (-).

A [valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer) without a U+002D HYPHEN-MINUS (-) prefix represents the number that is represented in base ten by that string of digits. A [valid integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-integer) *with* a U+002D HYPHEN-MINUS (-) prefix represents the number represented in base ten by the string of digits that follows the U+002D HYPHEN-MINUS, subtracted from zero.

The rules for parsing integers are as given in the following algorithm. When invoked, the steps must be followed in the order given, aborting at the first step that returns a value. This algorithm will return either an integer or an error.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. Let sign have the value "positive".
4. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
5. If position is past the end of input, return an error.
6. If the character indicated by position (the first character) is a U+002D HYPHEN-MINUS character (-):

   1. Let sign be "negative".
   2. Advance position to the next character.
   3. If position is past the end of input, return an error.

   Otherwise, if the character indicated by position (the first character) is a U+002B PLUS SIGN character (+):

   1. Advance position to the next character. (The "`+`" is ignored, but it is not conforming.)
   2. If position is past the end of input, return an error.
7. If the character indicated by position is not an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), then return an error.
8. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position, and interpret the resulting sequence as a base-ten integer. Let value be that integer.
9. If sign is "positive", return value, otherwise return the result of subtracting value from zero.

##### **2.3.4.2** Non-negative integers

A string is a valid non-negative integer if it consists of one or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit).

A [valid non-negative integer](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-non-negative-integer) represents the number that is represented in base ten by that string of digits.

The rules for parsing non-negative integers are as given in the following algorithm. When invoked, the steps must be followed in the order given, aborting at the first step that returns a value. This algorithm will return either zero, a positive integer, or an error.

1. Let input be the string being parsed.
2. Let value be the result of parsing input using the [rules for parsing integers](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-integers).
3. If value is an error, return an error.
4. If value is less than zero, return an error.
5. Return value.

##### **2.3.4.3** Floating-point numbers

A string is a valid floating-point number if it consists of:

1. Optionally, a U+002D HYPHEN-MINUS character (-).
2. One or both of the following, in the given order:
   1. A series of one or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit).
   2. Both of the following, in the given order:
      1. A single U+002E FULL STOP character (.).
      2. A series of one or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit).
3. Optionally:
   1. Either a U+0065 LATIN SMALL LETTER E character (e) or a U+0045 LATIN CAPITAL LETTER E character (E).
   2. Optionally, a U+002D HYPHEN-MINUS character (-) or U+002B PLUS SIGN character (+).
   3. A series of one or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit).

A [valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number) represents the number obtained by multiplying the significand by ten raised to the power of the exponent, where the significand is the first number, interpreted as base ten (including the decimal point and the number after the decimal point, if any, and interpreting the significand as a negative number if the whole string starts with a U+002D HYPHEN-MINUS character (-) and the number is not zero), and where the exponent is the number after the E, if any (interpreted as a negative number if there is a U+002D HYPHEN-MINUS character (-) between the E and the number and the number is not zero, or else ignoring a U+002B PLUS SIGN character (+) between the E and the number if there is one). If there is no E, then the exponent is treated as zero.

The Infinity and Not-a-Number (NaN) values are not [valid floating-point numbers](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number).

The [valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number) concept is typically only used to restrict what is allowed for authors, while the user agent requirements use the [rules for parsing floating-point number values](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-floating-point-number-values) below (e.g., the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#attr-progress-max">max</a>` attribute of the `<a href="https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element">progress</a>` element). However, in some cases the user agent requirements include checking if a string is a [valid floating-point number](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number) (e.g., the [value sanitization algorithm](https://html.spec.whatwg.org/multipage/input.html#value-sanitization-algorithm) for the [Number](https://html.spec.whatwg.org/multipage/input.html#number-state-(type=number)) state of the `<a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element">input</a>` element, or the [parse a srcset attribute](https://html.spec.whatwg.org/multipage/images.html#parse-a-srcset-attribute) algorithm).

The best representation of the number n as a floating-point number is the string obtained from running [ToString](https://tc39.es/ecma262/#sec-tostring)(n). The abstract operation [ToString](https://tc39.es/ecma262/#sec-tostring) is not uniquely determined. When there are multiple possible strings that could be obtained from [ToString](https://tc39.es/ecma262/#sec-tostring) for a particular value, the user agent must always return the same string for that value (though it may differ from the value used by other user agents).

The rules for parsing floating-point number values are as given in the following algorithm. This algorithm must be aborted at the first step that returns something. This algorithm will return either a number or an error.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. Let value have the value 1.
4. Let divisor have the value 1.
5. Let exponent have the value 1.
6. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
7. If position is past the end of input, return an error.
8. If the character indicated by position is a U+002D HYPHEN-MINUS character (-):

   1. Change value and divisor to −1.
   2. Advance position to the next character.
   3. If position is past the end of input, return an error.

   Otherwise, if the character indicated by position (the first character) is a U+002B PLUS SIGN character (+):

   1. Advance position to the next character. (The "`+`" is ignored, but it is not conforming.)
   2. If position is past the end of input, return an error.
9. If the character indicated by position is a U+002E FULL STOP (.), and that is not the last character in input, and the character after the character indicated by position is an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), then set value to zero and jump to the step labeled *fraction* .
10. If the character indicated by position is not an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), then return an error.
11. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position, and interpret the resulting sequence as a base-ten integer. Multiply value by that integer.
12. If position is past the end of input, jump to the step labeled *conversion* .
13. *Fraction* : If the character indicated by position is a U+002E FULL STOP (.), run these substeps:

    1. Advance position to the next character.
    2. If position is past the end of input, or if the character indicated by position is not an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), U+0065 LATIN SMALL LETTER E (e), or U+0045 LATIN CAPITAL LETTER E (E), then jump to the step labeled *conversion* .
    3. If the character indicated by position is a U+0065 LATIN SMALL LETTER E character (e) or a U+0045 LATIN CAPITAL LETTER E character (E), skip the remainder of these substeps.
    4. *Fraction loop* : Multiply divisor by ten.
    5. Add the value of the character indicated by position, interpreted as a base-ten digit (0..9) and divided by divisor, to value.
    6. Advance position to the next character.
    7. If position is past the end of input, then jump to the step labeled *conversion* .
    8. If the character indicated by position is an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), jump back to the step labeled *fraction loop* in these substeps.
14. If the character indicated by position is U+0065 (e) or a U+0045 (E), then:

    1. Advance position to the next character.
    2. If position is past the end of input, then jump to the step labeled *conversion* .
    3. If the character indicated by position is a U+002D HYPHEN-MINUS character (-):

       1. Change exponent to −1.
       2. Advance position to the next character.
       3. If position is past the end of input, then jump to the step labeled *conversion* .

       Otherwise, if the character indicated by position is a U+002B PLUS SIGN character (+):

       1. Advance position to the next character.
       2. If position is past the end of input, then jump to the step labeled *conversion* .
    4. If the character indicated by position is not an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), then jump to the step labeled *conversion* .
    5. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position, and interpret the resulting sequence as a base-ten integer. Multiply exponent by that integer.
    6. Multiply value by ten raised to the exponentth power.
15. *Conversion* : Let S be the set of finite IEEE 754 double-precision floating-point values except −0, but with two special values added: 2^1024^ and −2^1024^ .
16. Let rounded-value be the number in S that is closest to value, selecting the number with an even significand if there are two equally close values. (The two special values 2^1024^ and −2^1024^ are considered to have even significands for this purpose.)
17. If rounded-value is 2^1024^ or −2^1024^ , return an error.
18. Return rounded-value.

##### **2.3.4.4** Percentages and lengths

The rules for parsing dimension values are as given in the following algorithm. When invoked, the steps must be followed in the order given, aborting at the first step that returns a value. This algorithm will return either a number greater than or equal to 0.0, or failure; if a number is returned, then it is further categorized as either a percentage or a length.

1. Let input be the string being parsed.
2. Let position be a [position variable](https://infra.spec.whatwg.org/#string-position-variable) for input, initially pointing at the start of input.
3. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
4. If position is past the end of input or the code point at position within input is not an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), then return failure.
5. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position, and interpret the resulting sequence as a base-ten integer. Let value be that number.
6. If position is past the end of input, then return value as a length.
7. If the code point at position within input is U+002E (.), then:
   1. Advance position by 1.
   2. If position is past the end of input or the code point at position within input is not an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), then return the [current dimension value](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#current-dimension-value) with value, input, and position.
   3. Let divisor have the value 1.
   4. While true:
      1. Multiply divisor by ten.
      2. Add the value of the code point at position within input, interpreted as a base-ten digit (0..9) and divided by divisor, to value.
      3. Advance position by 1.
      4. If position is past the end of input, then return value as a length.
      5. If the code point at position within input is not an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), then [break](https://infra.spec.whatwg.org/#iteration-break).
8. Return the [current dimension value](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#current-dimension-value) with value, input, and position.

The current dimension value, given value, input, and position, is determined as follows:

1. If position is past the end of input, then return value as a length.
2. If the code point at position within input is U+0025 (%), then return value as a percentage.
3. Return value as a length.

##### **2.3.4.5** Nonzero percentages and lengths

The rules for parsing nonzero dimension values are as given in the following algorithm. When invoked, the steps must be followed in the order given, aborting at the first step that returns a value. This algorithm will return either a number greater than 0.0, or an error; if a number is returned, then it is further categorized as either a percentage or a length.

1. Let input be the string being parsed.
2. Let value be the result of parsing input using the [rules for parsing dimension values](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-dimension-values).
3. If value is an error, return an error.
4. If value is zero, return an error.
5. If value is a percentage, return value as a percentage.
6. Return value as a length.

##### **2.3.4.6** Lists of floating-point numbers

A valid list of floating-point numbers is a number of [valid floating-point numbers](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-floating-point-number) separated by U+002C COMMA characters, with no other characters (e.g. no [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace)). In addition, there might be restrictions on the number of floating-point numbers that can be given, or on the range of values allowed.

The rules for parsing a list of floating-point numbers are as follows:

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. Let numbers be an initially empty list of floating-point numbers. This list will be the result of this algorithm.
4. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), U+002C COMMA, or U+003B SEMICOLON characters from input given position. This skips past any leading delimiters.
5. While position is not past the end of input:
   1. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are not [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), U+002C COMMA, U+003B SEMICOLON, [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), U+002E FULL STOP, or U+002D HYPHEN-MINUS characters from input given position. This skips past leading garbage.
   2. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are not [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), U+002C COMMA, or U+003B SEMICOLON characters from input given position, and let unparsed number be the result.
   3. Let number be the result of parsing unparsed number using the [rules for parsing floating-point number values](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#rules-for-parsing-floating-point-number-values).
   4. If number is an error, set number to zero.
   5. Append number to numbers.
   6. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), U+002C COMMA, or U+003B SEMICOLON characters from input given position. This skips past the delimiter.
6. Return numbers.

##### **2.3.4.7** Lists of dimensions

The rules for parsing a list of dimensions are as follows. These rules return a list of zero or more pairs consisting of a number and a unit, the unit being one of *percentage* , *relative* , and *absolute* .

1. Let raw input be the string being parsed.
2. If the last character in raw input is a U+002C COMMA character (,), then remove that character from raw input.
3. [Split the string raw input on commas](https://infra.spec.whatwg.org/#split-on-commas). Let raw tokens be the resulting list of tokens.
4. Let result be an empty list of number/unit pairs.
5. For each token in raw tokens, run the following substeps:
   1. Let input be the token.
   2. Let position be a pointer into input, initially pointing at the start of the string.
   3. Let value be the number 0.
   4. Let unit be *absolute* .
   5. If position is past the end of input, set unit to *relative* and jump to the last substep.
   6. If the character at position is an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), [collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position, interpret the resulting sequence as an integer in base ten, and increment value by that integer.
   7. If the character at position is U+002E (.), then:
      1. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) consisting of [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) and [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. Let s be the resulting sequence.
      2. Remove all [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace) in s.
      3. If s is not the empty string, then:
         1. Let length be the number of characters in s (after the spaces were removed).
         2. Let fraction be the result of interpreting s as a base-ten integer, and then dividing that number by 10^length^.
         3. Increment value by fraction.
   8. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
   9. If the character at position is a U+0025 PERCENT SIGN character (%), then set unit to *percentage* .
      Otherwise, if the character at position is a U+002A ASTERISK character (*), then set unit to *relative* .
   10. Add an entry to result consisting of the number given by value and the unit given by unit.
6. Return the list result.

#### **2.3.5** Dates and times

In the algorithms below, the number of days in month month of year year is: *31* if month is 1, 3, 5, 7, 8, 10, or 12; *30* if month is 4, 6, 9, or 11; *29* if month is 2 and year is a number divisible by 400, or if year is a number divisible by 4 but not by 100; and *28* otherwise. This takes into account leap years in the Gregorian calendar. [[GREGORIAN]](https://html.spec.whatwg.org/multipage/references.html#refsGREGORIAN)

When [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) are used in the date and time syntaxes defined in this section, they express numbers in base ten.

While the formats described here are intended to be subsets of the corresponding ISO8601 formats, this specification defines parsing rules in much more detail than ISO8601. Implementers are therefore encouraged to carefully examine any date parsing libraries before using them to implement the parsing rules described below; ISO8601 libraries might not parse dates and times in exactly the same manner. [[ISO8601]](https://html.spec.whatwg.org/multipage/references.html#refsISO8601)

Where this specification refers to the proleptic Gregorian calendar, it means the modern Gregorian calendar, extrapolated backwards to year 1. A date in the [proleptic Gregorian calendar](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-calendar), sometimes explicitly referred to as a proleptic-Gregorian date, is one that is described using that calendar even if that calendar was not in use at the time (or place) in question. [[GREGORIAN]](https://html.spec.whatwg.org/multipage/references.html#refsGREGORIAN)

The use of the Gregorian calendar as the wire format in this specification is an arbitrary choice resulting from the cultural biases of those involved in the decision. See also the section discussing [date, time, and number formats](https://html.spec.whatwg.org/multipage/forms.html#input-author-notes) in forms (for authors), [implementation notes regarding localization of form controls](https://html.spec.whatwg.org/multipage/input.html#input-impl-notes), and the `<a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element">time</a>` element.

##### **2.3.5.1** Months

A month consists of a specific [proleptic-Gregorian date](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-date) with no time-zone information and no date information beyond a year and a month. [[GREGORIAN]](https://html.spec.whatwg.org/multipage/references.html#refsGREGORIAN)

A string is a valid month string representing a year year and month month if it consists of the following components in the given order:

1. Four or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing year, where year > 0
2. A U+002D HYPHEN-MINUS character (-)
3. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing the month month, in the range 1 ≤ month ≤ 12

The rules to parse a month string are as follows. This will return either a year and month, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. [Parse a month component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-month-component) to obtain year and month. If this returns nothing, then fail.
4. If position is *not* beyond the end of input, then fail.
5. Return year and month.

The rules to parse a month component, given an input string and a position, are as follows. This will return either a year and a month, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not at least four characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the year.
2. If year is not a number greater than zero, then fail.
3. If position is beyond the end of input or if the character at position is not a U+002D HYPHEN-MINUS character, then fail. Otherwise, move position forwards one character.
4. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not exactly two characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the month.
5. If month is not a number in the range 1 ≤ month ≤ 12, then fail.
6. Return year and month.

##### **2.3.5.2** Dates

A date consists of a specific [proleptic-Gregorian date](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-date) with no time-zone information, consisting of a year, a month, and a day. [[GREGORIAN]](https://html.spec.whatwg.org/multipage/references.html#refsGREGORIAN)

A string is a valid date string representing a year year, month month, and day day if it consists of the following components in the given order:

1. A [valid month string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-month-string), representing year and month
2. A U+002D HYPHEN-MINUS character (-)
3. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing day, in the range 1 ≤ day ≤ maxday where maxday is the [number of days in the month month and year year](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#number-of-days-in-month-month-of-year-year)

The rules to parse a date string are as follows. This will return either a date, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. [Parse a date component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-date-component) to obtain year, month, and day. If this returns nothing, then fail.
4. If position is *not* beyond the end of input, then fail.
5. Let date be the date with year year, month month, and day day.
6. Return date.

The rules to parse a date component, given an input string and a position, are as follows. This will return either a year, a month, and a day, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. [Parse a month component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-month-component) to obtain year and month. If this returns nothing, then fail.
2. Let maxday be the [number of days in month month of year year](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#number-of-days-in-month-month-of-year-year).
3. If position is beyond the end of input or if the character at position is not a U+002D HYPHEN-MINUS character, then fail. Otherwise, move position forwards one character.
4. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not exactly two characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the day.
5. If day is not a number in the range 1 ≤ day ≤ maxday, then fail.
6. Return year, month, and day.

##### **2.3.5.3** Yearless dates

A yearless date consists of a Gregorian month and a day within that month, but with no associated year. [[GREGORIAN]](https://html.spec.whatwg.org/multipage/references.html#refsGREGORIAN)

A string is a valid yearless date string representing a month month and a day day if it consists of the following components in the given order:

1. Optionally, two U+002D HYPHEN-MINUS characters (-)
2. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing the month month, in the range 1 ≤ month ≤ 12
3. A U+002D HYPHEN-MINUS character (-)
4. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing day, in the range 1 ≤ day ≤ maxday where maxday is the [number of days](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#number-of-days-in-month-month-of-year-year) in the month month and any arbitrary leap year (e.g. 4 or 2000)

In other words, if the month is "`02`", meaning February, then the day can be 29, as if the year was a leap year.

The rules to parse a yearless date string are as follows. This will return either a month and a day, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. [Parse a yearless date component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-yearless-date-component) to obtain month and day. If this returns nothing, then fail.
4. If position is *not* beyond the end of input, then fail.
5. Return month and day.

The rules to parse a yearless date component, given an input string and a position, are as follows. This will return either a month and a day, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are U+002D HYPHEN-MINUS characters (-) from input given position. If the collected sequence is not exactly zero or two characters long, then fail.
2. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not exactly two characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the month.
3. If month is not a number in the range 1 ≤ month ≤ 12, then fail.
4. Let maxday be the [number of days](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#number-of-days-in-month-month-of-year-year) in month month of any arbitrary leap year (e.g. 4 or 2000).
5. If position is beyond the end of input or if the character at position is not a U+002D HYPHEN-MINUS character, then fail. Otherwise, move position forwards one character.
6. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not exactly two characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the day.
7. If day is not a number in the range 1 ≤ day ≤ maxday, then fail.
8. Return month and day.

##### **2.3.5.4** Times

A time consists of a specific time with no time-zone information, consisting of an hour, a minute, a second, and a fraction of a second.

A string is a valid time string representing an hour hour, a minute minute, and a second second if it consists of the following components in the given order:

1. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing hour, in the range 0 ≤ hour ≤ 23
2. A U+003A COLON character (:)
3. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing minute, in the range 0 ≤ minute ≤ 59
4. If second is nonzero, or optionally if second is zero:
   1. A U+003A COLON character (:)
   2. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing the integer part of second, in the range 0 ≤ s ≤ 59
   3. If second is not an integer, or optionally if second is an integer:
      1. A U+002E FULL STOP character (.)
      2. One, two, or three [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing the fractional part of second

The second component cannot be 60 or 61; leap seconds cannot be represented.

The rules to parse a time string are as follows. This will return either a time, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. [Parse a time component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-time-component) to obtain hour, minute, and second. If this returns nothing, then fail.
4. If position is *not* beyond the end of input, then fail.
5. Let time be the time with hour hour, minute minute, and second second.
6. Return time.

The rules to parse a time component, given an input string and a position, are as follows. This will return either an hour, a minute, and a second, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not exactly two characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the hour.
2. If hour is not a number in the range 0 ≤ hour ≤ 23, then fail.
3. If position is beyond the end of input or if the character at position is not a U+003A COLON character, then fail. Otherwise, move position forwards one character.
4. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not exactly two characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the minute.
5. If minute is not a number in the range 0 ≤ minute ≤ 59, then fail.
6. Let second be 0.
7. If position is not beyond the end of input and the character at position is U+003A (:), then:
   1. Advance position to the next character in input.
   2. If position is beyond the end of input, or at the last character in input, or if the next *two* characters in input starting at position are not both [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), then fail.
   3. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are either [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) or U+002E FULL STOP characters from input given position. If the collected sequence is three characters long, or if it is longer than three characters long and the third character is not a U+002E FULL STOP character, or if it has more than one U+002E FULL STOP character, then fail. Otherwise, interpret the resulting sequence as a base-ten number (possibly with a fractional part). Set second to that number.
   4. If second is not a number in the range 0 ≤ second < 60, then fail.
8. Return hour, minute, and second.

##### **2.3.5.5** Local dates and times

A local date and time consists of a specific [proleptic-Gregorian date](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-date), consisting of a year, a month, and a day, and a time, consisting of an hour, a minute, a second, and a fraction of a second, but expressed without a time zone. [[GREGORIAN]](https://html.spec.whatwg.org/multipage/references.html#refsGREGORIAN)

A string is a valid local date and time string representing a date and time if it consists of the following components in the given order:

1. A [valid date string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string) representing the date
2. A U+0054 LATIN CAPITAL LETTER T character (T) or a U+0020 SPACE character
3. A [valid time string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-time-string) representing the time

A string is a valid normalized local date and time string representing a date and time if it consists of the following components in the given order:

1. A [valid date string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string) representing the date
2. A U+0054 LATIN CAPITAL LETTER T character (T)
3. A [valid time string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-time-string) representing the time, expressed as the shortest possible string for the given time (e.g. omitting the seconds component entirely if the given time is zero seconds past the minute)

The rules to parse a local date and time string are as follows. This will return either a date and time, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. [Parse a date component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-date-component) to obtain year, month, and day. If this returns nothing, then fail.
4. If position is beyond the end of input or if the character at position is neither a U+0054 LATIN CAPITAL LETTER T character (T) nor a U+0020 SPACE character, then fail. Otherwise, move position forwards one character.
5. [Parse a time component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-time-component) to obtain hour, minute, and second. If this returns nothing, then fail.
6. If position is *not* beyond the end of input, then fail.
7. Let date be the date with year year, month month, and day day.
8. Let time be the time with hour hour, minute minute, and second second.
9. Return date and time.

##### **2.3.5.6** Time zones

A time-zone offset consists of a signed number of hours and minutes.

A string is a valid time-zone offset string representing a time-zone offset if it consists of either:

* A U+005A LATIN CAPITAL LETTER Z character (Z), allowed only if the time zone is UTC
* Or, the following components, in the given order:
  1. Either a U+002B PLUS SIGN character (+) or, if the time-zone offset is not zero, a U+002D HYPHEN-MINUS character (-), representing the sign of the time-zone offset
  2. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing the hours component hour of the time-zone offset, in the range 0 ≤ hour ≤ 23
  3. Optionally, a U+003A COLON character (:)
  4. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing the minutes component minute of the time-zone offset, in the range 0 ≤ minute ≤ 59

This format allows for time-zone offsets from -23:59 to +23:59. Right now, in practice, the range of offsets of actual time zones is -12:00 to +14:00, and the minutes component of offsets of actual time zones is always either 00, 30, or 45. There is no guarantee that this will remain so forever, however, since time zones are used as political footballs and are thus subject to very whimsical policy decisions.

See also the usage notes and examples in the [global date and time](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-datetime) section below for details on using time-zone offsets with historical times that predate the formation of formal time zones.

The rules to parse a time-zone offset string are as follows. This will return either a time-zone offset, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. [Parse a time-zone offset component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-time-zone-offset-component) to obtain timezone~hours~ and timezone~minutes~. If this returns nothing, then fail.
4. If position is *not* beyond the end of input, then fail.
5. Return the time-zone offset that is timezone~hours~ hours and timezone~minutes~ minutes from UTC.

The rules to parse a time-zone offset component, given an input string and a position, are as follows. This will return either time-zone hours and time-zone minutes, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. If the character at position is a U+005A LATIN CAPITAL LETTER Z character (Z), then:

   1. Let timezone~hours~ be 0.
   2. Let timezone~minutes~ be 0.
   3. Advance position to the next character in input.

   Otherwise, if the character at position is either a U+002B PLUS SIGN (+) or a U+002D HYPHEN-MINUS (-), then:

   1. If the character at position is a U+002B PLUS SIGN (+), let sign be "positive". Otherwise, it's a U+002D HYPHEN-MINUS (-); let sign be "negative".
   2. Advance position to the next character in input.
   3. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. Let s be the collected sequence.
   4. If s is exactly two characters long, then:

      1. Interpret s as a base-ten integer. Let that number be the timezone~hours~.
      2. If position is beyond the end of input or if the character at position is not a U+003A COLON character, then fail. Otherwise, move position forwards one character.
      3. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not exactly two characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the timezone~minutes~.

      If s is exactly four characters long, then:

      1. Interpret the first two characters of s as a base-ten integer. Let that number be the timezone~hours~.
      2. Interpret the last two characters of s as a base-ten integer. Let that number be the timezone~minutes~.

      Otherwise, fail.
   5. If timezone~hours~ is not a number in the range 0 ≤ timezone~hours~ ≤ 23, then fail.
   6. If sign is "negative", then negate timezone~hours~.
   7. If timezone~minutes~ is not a number in the range 0 ≤ timezone~minutes~ ≤ 59, then fail.
   8. If sign is "negative", then negate timezone~minutes~.

   Otherwise, fail.
2. Return timezone~hours~ and timezone~minutes~.

##### **2.3.5.7** Global dates and times

A global date and time consists of a specific [proleptic-Gregorian date](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-date), consisting of a year, a month, and a day, and a time, consisting of an hour, a minute, a second, and a fraction of a second, expressed with a time-zone offset, consisting of a signed number of hours and minutes. [[GREGORIAN]](https://html.spec.whatwg.org/multipage/references.html#refsGREGORIAN)

A string is a valid global date and time string representing a date, time, and a time-zone offset if it consists of the following components in the given order:

1. A [valid date string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string) representing the date
2. A U+0054 LATIN CAPITAL LETTER T character (T) or a U+0020 SPACE character
3. A [valid time string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-time-string) representing the time
4. A [valid time-zone offset string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-time-zone-offset-string) representing the time-zone offset

Times in dates before the formation of UTC in the mid-twentieth century must be expressed and interpreted in terms of UT1 (contemporary Earth solar time at the 0° longitude), not UTC (the approximation of UT1 that ticks in SI seconds). Time before the formation of time zones must be expressed and interpreted as UT1 times with explicit time zones that approximate the contemporary difference between the appropriate local time and the time observed at the location of Greenwich, London.

The following are some examples of dates written as [valid global date and time strings](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-global-date-and-time-string).

"`0037-12-13 00:00Z`"Midnight in areas using London time on the birthday of Nero (the Roman Emperor). See below for further discussion on which date this actually corresponds to."`1979-10-14T12:00:00.001-04:00`"One millisecond after noon on October 14th 1979, in the time zone in use on the east coast of the USA during daylight saving time."`8592-01-01T02:09+02:09`"Midnight UTC on the 1st of January, 8592. The time zone associated with that time is two hours and nine minutes ahead of UTC, which is not currently a real time zone, but is nonetheless allowed.Several things are notable about these dates:

* Years with fewer than four digits have to be zero-padded. The date "37-12-13" would not be a valid date.
* If the "`T`" is replaced by a space, it must be a single space character. The string "`2001-12-21  12:00Z`" (with two spaces between the components) would not be parsed successfully.
* To unambiguously identify a moment in time prior to the introduction of the Gregorian calendar (insofar as moments in time before the formation of UTC can be unambiguously identified), the date has to be first converted to the Gregorian calendar from the calendar in use at the time (e.g. from the Julian calendar). The date of Nero's birth is the 15th of December 37, in the Julian Calendar, which is the 13th of December 37 in the [proleptic Gregorian calendar](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-calendar).
* The time and time-zone offset components are not optional.
* Dates before the year one can't be represented as a datetime in this version of HTML.
* Times of specific events in ancient times are, at best, approximations, since time was not well coordinated or measured until relatively recent decades.
* Time-zone offsets differ based on daylight saving time.

The rules to parse a global date and time string are as follows. This will return either a time in UTC, with associated time-zone offset information for round-tripping or display purposes, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. [Parse a date component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-date-component) to obtain year, month, and day. If this returns nothing, then fail.
4. If position is beyond the end of input or if the character at position is neither a U+0054 LATIN CAPITAL LETTER T character (T) nor a U+0020 SPACE character, then fail. Otherwise, move position forwards one character.
5. [Parse a time component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-time-component) to obtain hour, minute, and second. If this returns nothing, then fail.
6. If position is beyond the end of input, then fail.
7. [Parse a time-zone offset component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-time-zone-offset-component) to obtain timezone~hours~ and timezone~minutes~. If this returns nothing, then fail.
8. If position is *not* beyond the end of input, then fail.
9. Let time be the moment in time at year year, month month, day day, hours hour, minute minute, second second, subtracting timezone~hours~ hours and timezone~minutes~ minutes. That moment in time is a moment in the UTC time zone.
10. Let timezone be timezone~hours~ hours and timezone~minutes~ minutes from UTC.
11. Return time and timezone.

##### **2.3.5.8** Weeks

A week consists of a week-year number and a week number representing a seven-day period starting on a Monday. Each week-year in this calendaring system has either 52 or 53 such seven-day periods, as defined below. The seven-day period starting on the Gregorian date Monday December 29th 1969 (1969-12-29) is defined as week number 1 in week-year 1970. Consecutive weeks are numbered sequentially. The week before the number 1 week in a week-year is the last week in the previous week-year, and vice versa. [[GREGORIAN]](https://html.spec.whatwg.org/multipage/references.html#refsGREGORIAN)

A week-year with a number year has 53 weeks if it corresponds to either a year year in the [proleptic Gregorian calendar](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-calendar) that has a Thursday as its first day (January 1st), or a year year in the [proleptic Gregorian calendar](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-calendar) that has a Wednesday as its first day (January 1st) and where year is a number divisible by 400, or a number divisible by 4 but not by 100. All other week-years have 52 weeks.

The week number of the last day of a week-year with 53 weeks is 53; the week number of the last day of a week-year with 52 weeks is 52.

The week-year number of a particular day can be different than the number of the year that contains that day in the [proleptic Gregorian calendar](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#proleptic-gregorian-calendar). The first week in a week-year y is the week that contains the first Thursday of the Gregorian year y.

For modern purposes, a [week](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-week) as defined here is equivalent to ISO weeks as defined in ISO 8601. [[ISO8601]](https://html.spec.whatwg.org/multipage/references.html#refsISO8601)

A string is a valid week string representing a week-year year and week week if it consists of the following components in the given order:

1. Four or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing year, where year > 0
2. A U+002D HYPHEN-MINUS character (-)
3. A U+0057 LATIN CAPITAL LETTER W character (W)
4. Two [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing the week week, in the range 1 ≤ week ≤ maxweek, where maxweek is the [week number of the last day](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#week-number-of-the-last-day) of week-year year

The rules to parse a week string are as follows. This will return either a week-year number and week number, or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not at least four characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the year.
4. If year is not a number greater than zero, then fail.
5. If position is beyond the end of input or if the character at position is not a U+002D HYPHEN-MINUS character, then fail. Otherwise, move position forwards one character.
6. If position is beyond the end of input or if the character at position is not a U+0057 LATIN CAPITAL LETTER W character (W), then fail. Otherwise, move position forwards one character.
7. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. If the collected sequence is not exactly two characters long, then fail. Otherwise, interpret the resulting sequence as a base-ten integer. Let that number be the week.
8. Let maxweek be the [week number of the last day](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#week-number-of-the-last-day) of year year.
9. If week is not a number in the range 1 ≤ week ≤ maxweek, then fail.
10. If position is *not* beyond the end of input, then fail.
11. Return the week-year number year and the week number week.

##### **2.3.5.9** Durations

A duration consists of a number of seconds.

Since months and seconds are not comparable (a month is not a precise number of seconds, but is instead a period whose exact length depends on the precise day from which it is measured) a [duration](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-duration) as defined in this specification cannot include months (or years, which are equivalent to twelve months). Only durations that describe a specific number of seconds can be described.

A string is a valid duration string representing a [duration](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-duration) t if it consists of either of the following:

* A literal U+0050 LATIN CAPITAL LETTER P character followed by one or more of the following subcomponents, in the order given, where the number of days, hours, minutes, and seconds corresponds to the same number of seconds as in t:

  1. One or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) followed by a U+0044 LATIN CAPITAL LETTER D character, representing a number of days.
  2. A U+0054 LATIN CAPITAL LETTER T character followed by one or more of the following subcomponents, in the order given:
     1. One or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) followed by a U+0048 LATIN CAPITAL LETTER H character, representing a number of hours.
     2. One or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) followed by a U+004D LATIN CAPITAL LETTER M character, representing a number of minutes.
     3. The following components:
        1. One or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing a number of seconds.
        2. Optionally, a U+002E FULL STOP character (.) followed by one, two, or three [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing a fraction of a second.
        3. A U+0053 LATIN CAPITAL LETTER S character.

  This, as with a number of other date- and time-related microsyntaxes defined in this specification, is based on one of the formats defined in ISO 8601. [[ISO8601]](https://html.spec.whatwg.org/multipage/references.html#refsISO8601)
* One or more [duration time components](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#duration-time-component), each with a different [duration time component scale](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#duration-time-component-scale), in any order; the sum of the represented seconds being equal to the number of seconds in t.
  A duration time component is a string consisting of the following components:

  1. Zero or more [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).
  2. One or more [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing a number of time units, scaled by the [duration time component scale](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#duration-time-component-scale) specified (see below) to represent a number of seconds.
  3. If the [duration time component scale](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#duration-time-component-scale) specified is 1 (i.e. the units are seconds), then, optionally, a U+002E FULL STOP character (.) followed by one, two, or three [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit), representing a fraction of a second.
  4. Zero or more [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).
  5. One of the following characters, representing the duration time component scale of the time unit used in the numeric part of the [duration time component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#duration-time-component):
     U+0057 LATIN CAPITAL LETTER W characterU+0077 LATIN SMALL LETTER W characterWeeks. The scale is 604800.U+0044 LATIN CAPITAL LETTER D characterU+0064 LATIN SMALL LETTER D characterDays. The scale is 86400.U+0048 LATIN CAPITAL LETTER H characterU+0068 LATIN SMALL LETTER H characterHours. The scale is 3600.U+004D LATIN CAPITAL LETTER M characterU+006D LATIN SMALL LETTER M characterMinutes. The scale is 60.U+0053 LATIN CAPITAL LETTER S characterU+0073 LATIN SMALL LETTER S characterSeconds. The scale is 1.
  6. Zero or more [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

  This is not based on any of the formats in ISO 8601. It is intended to be a more human-readable alternative to the ISO 8601 duration format.

The rules to parse a duration string are as follows. This will return either a [duration](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-duration) or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. Let months, seconds, and component count all be zero.
4. Let M-disambiguator be *minutes* .
   This flag's other value is *months* . It is used to disambiguate the "M" unit in ISO8601 durations, which use the same unit for months and minutes. Months are not allowed, but are parsed for future compatibility and to avoid misinterpreting ISO8601 durations that would be valid in other contexts.
5. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
6. If position is past the end of input, then fail.
7. If the character in input pointed to by position is a U+0050 LATIN CAPITAL LETTER P character, then advance position to the next character, set M-disambiguator to *months* , and [skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
8. While true:
   1. Let units be undefined. It will be assigned one of the following values: *years* , *months* , *weeks* , *days* , *hours* , *minutes* , and *seconds* .
   2. Let next character be undefined. It is used to process characters from the input.
   3. If position is past the end of input, then break.
   4. If the character in input pointed to by position is a U+0054 LATIN CAPITAL LETTER T character, then advance position to the next character, set M-disambiguator to *minutes* , [skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position, and [continue](https://infra.spec.whatwg.org/#iteration-continue).
   5. Set next character to the character in input pointed to by position.
   6. If next character is a U+002E FULL STOP character (.), then let N equal zero. (Do not advance position. That is taken care of below.)
      Otherwise, if next character is an [ASCII digit](https://infra.spec.whatwg.org/#ascii-digit), then [collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position, interpret the resulting sequence as a base-ten integer, and let N be that number.
      Otherwise, next character is not part of a number; fail.
   7. If position is past the end of input, then fail.
   8. Set next character to the character in input pointed to by position, and this time advance position to the next character. (If next character was a U+002E FULL STOP character (.) before, it will still be that character this time.)
   9. If next character is U+002E (.), then:

      1. [Collect a sequence of code points](https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points) that are [ASCII digits](https://infra.spec.whatwg.org/#ascii-digit) from input given position. Let s be the resulting sequence.
      2. If s is the empty string, then fail.
      3. Let length be the number of characters in s.
      4. Let fraction be the result of interpreting s as a base-ten integer, and then dividing that number by 10^length^.
      5. Increment N by fraction.
      6. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
      7. If position is past the end of input, then fail.
      8. Set next character to the character in input pointed to by position, and advance position to the next character.
      9. If next character is neither a U+0053 LATIN CAPITAL LETTER S character nor a U+0073 LATIN SMALL LETTER S character, then fail.
      10. Set units to *seconds* .

      Otherwise:

      1. If next character is [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), then [skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position, set next character to the character in input pointed to by position, and advance position to the next character.
      2. If next character is a U+0059 LATIN CAPITAL LETTER Y character, or a U+0079 LATIN SMALL LETTER Y character, set units to *years* and set M-disambiguator to *months* .
         If next character is a U+004D LATIN CAPITAL LETTER M character or a U+006D LATIN SMALL LETTER M character, and M-disambiguator is *months* , then set units to *months* .
         If next character is a U+0057 LATIN CAPITAL LETTER W character or a U+0077 LATIN SMALL LETTER W character, set units to *weeks* and set M-disambiguator to *minutes* .
         If next character is a U+0044 LATIN CAPITAL LETTER D character or a U+0064 LATIN SMALL LETTER D character, set units to *days* and set M-disambiguator to *minutes* .
         If next character is a U+0048 LATIN CAPITAL LETTER H character or a U+0068 LATIN SMALL LETTER H character, set units to *hours* and set M-disambiguator to *minutes* .
         If next character is a U+004D LATIN CAPITAL LETTER M character or a U+006D LATIN SMALL LETTER M character, and M-disambiguator is *minutes* , then set units to *minutes* .
         If next character is a U+0053 LATIN CAPITAL LETTER S character or a U+0073 LATIN SMALL LETTER S character, set units to *seconds* and set M-disambiguator to *minutes* .
         Otherwise, if next character is none of the above characters, then fail.
   10. Increment component count.
   11. Let multiplier be 1.
   12. If units is *years* , multiply multiplier by 12 and set units to *months* .
   13. If units is *months* , add the product of N and multiplier to months.
       Otherwise:

       1. If units is *weeks* , multiply multiplier by 7 and set units to *days* .
       2. If units is *days* , multiply multiplier by 24 and set units to *hours* .
       3. If units is *hours* , multiply multiplier by 60 and set units to *minutes* .
       4. If units is *minutes* , multiply multiplier by 60 and set units to *seconds* .
       5. Forcibly, units is now *seconds* . Add the product of N and multiplier to seconds.
   14. [Skip ASCII whitespace](https://infra.spec.whatwg.org/#skip-ascii-whitespace) within input given position.
9. If component count is zero, fail.
10. If months is not zero, fail.
11. Return the [duration](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-duration) consisting of seconds seconds.

##### **2.3.5.10** Vaguer moments in time

A string is a valid date string with optional time if it is also one of the following:

* A [valid date string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string)
* A [valid global date and time string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-global-date-and-time-string)

---

The rules to parse a date or time string are as follows. The algorithm will return either a [date](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-date), a [time](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-time), a [global date and time](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#concept-datetime), or nothing. If at any point the algorithm says that it "fails", this means that it is aborted at that point and returns nothing.

1. Let input be the string being parsed.
2. Let position be a pointer into input, initially pointing at the start of the string.
3. Set start position to the same position as position.
4. Set the date present and time present flags to true.
5. [Parse a date component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-date-component) to obtain year, month, and day. If this fails, then set the date present flag to false.
6. If date present is true, and position is not beyond the end of input, and the character at position is either a U+0054 LATIN CAPITAL LETTER T character (T) or a U+0020 SPACE character, then advance position to the next character in input.
   Otherwise, if date present is true, and either position is beyond the end of input or the character at position is neither a U+0054 LATIN CAPITAL LETTER T character (T) nor a U+0020 SPACE character, then set time present to false.
   Otherwise, if date present is false, set position back to the same position as start position.
7. If the time present flag is true, then [parse a time component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-time-component) to obtain hour, minute, and second. If this returns nothing, then fail.
8. If the date present and time present flags are both true, but position is beyond the end of input, then fail.
9. If the date present and time present flags are both true, [parse a time-zone offset component](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-time-zone-offset-component) to obtain timezone~hours~ and timezone~minutes~. If this returns nothing, then fail.
10. If position is *not* beyond the end of input, then fail.
11. If the date present flag is true and the time present flag is false, then let date be the date with year year, month month, and day day, and return date.
    Otherwise, if the time present flag is true and the date present flag is false, then let time be the time with hour hour, minute minute, and second second, and return time.
    Otherwise, let time be the moment in time at year year, month month, day day, hours hour, minute minute, second second, subtracting timezone~hours~ hours and timezone~minutes~ minutes, that moment in time being a moment in the UTC time zone; let timezone be timezone~hours~ hours and timezone~minutes~ minutes from UTC; and return time and timezone.

#### **2.3.6** Colors

A simple color consists of three 8-bit numbers in the range 0 to 255, inclusive, representing the red, green, and blue components of the color respectively, in the [&#39;srgb&#39;](https://drafts.csswg.org/css-color/#valdef-color-srgb) color space.

A string is a valid simple color if it is exactly seven characters long, and the first character is a U+0023 NUMBER SIGN character (#), and the remaining six characters are all [ASCII hex digits](https://infra.spec.whatwg.org/#ascii-hex-digit), with the first two digits representing the red component, the middle two digits representing the green component, and the last two digits representing the blue component, in hexadecimal.

A string is a valid lowercase simple color if it is a [valid simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-simple-colour) and doesn't use any characters in the range U+0041 LATIN CAPITAL LETTER A to U+0046 LATIN CAPITAL LETTER F.

The rules for parsing simple color values are as given in the following algorithm. When invoked, the steps must be followed in the order given, aborting at the first step that returns a value. This algorithm will return either a [simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#simple-colour) or an error.

1. Let input be the string being parsed.
2. If input is not exactly seven characters long, then return an error.
3. If the first character in input is not a U+0023 NUMBER SIGN character (#), then return an error.
4. If the last six characters of input are not all [ASCII hex digits](https://infra.spec.whatwg.org/#ascii-hex-digit), then return an error.
5. Let result be a [simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#simple-colour).
6. Interpret the second and third characters as a hexadecimal number and let the result be the red component of result.
7. Interpret the fourth and fifth characters as a hexadecimal number and let the result be the green component of result.
8. Interpret the sixth and seventh characters as a hexadecimal number and let the result be the blue component of result.
9. Return result.

The rules for serializing simple color values given a [simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#simple-colour) are as given in the following algorithm:

1. Let result be a string consisting of a single U+0023 NUMBER SIGN character (#).
2. Convert the red, green, and blue components in turn to two-digit hexadecimal numbers using [ASCII lower hex digits](https://infra.spec.whatwg.org/#ascii-lower-hex-digit), zero-padding if necessary, and append these numbers to result, in the order red, green, blue.
3. Return result, which will be a [valid lowercase simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-lowercase-simple-colour).

---

Some obsolete legacy attributes parse colors in a more complicated manner, using the rules for parsing a legacy color value, which are given in the following algorithm. When invoked, the steps must be followed in the order given, aborting at the first step that returns a value. This algorithm will return either a [simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#simple-colour) or an error.

1. Let input be the string being parsed.
2. If input is the empty string, then return an error.
3. [Strip leading and trailing ASCII whitespace](https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace) from input.
4. If input is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for the string "`transparent`", then return an error.
5. If input is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for one of the [named colors](https://drafts.csswg.org/css-color/#named-color), then return the [simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#simple-colour) corresponding to that keyword. [[CSSCOLOR]](https://html.spec.whatwg.org/multipage/references.html#refsCSSCOLOR)
   [CSS2 System Colors](https://www.w3.org/TR/css3-color/#css2-system) are not recognized.
6. If input's [code point length](https://infra.spec.whatwg.org/#string-code-point-length) is four, and the first character in input is U+0023 (#), and the last three characters of input are all [ASCII hex digits](https://infra.spec.whatwg.org/#ascii-hex-digit), then:
   1. Let result be a [simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#simple-colour).
   2. Interpret the second character of input as a hexadecimal digit; let the red component of result be the resulting number multiplied by 17.
   3. Interpret the third character of input as a hexadecimal digit; let the green component of result be the resulting number multiplied by 17.
   4. Interpret the fourth character of input as a hexadecimal digit; let the blue component of result be the resulting number multiplied by 17.
   5. Return result.
7. Replace any [code points](https://infra.spec.whatwg.org/#code-point) greater than U+FFFF in input (i.e., any characters that are not in the basic multilingual plane) with the two-character string "`00`".
8. If input's [code point length](https://infra.spec.whatwg.org/#string-code-point-length) is greater than 128, truncate input, leaving only the first 128 characters.
9. If the first character in input is a U+0023 NUMBER SIGN character (#), remove it.
10. Replace any character in input that is not an [ASCII hex digit](https://infra.spec.whatwg.org/#ascii-hex-digit) with the character U+0030 DIGIT ZERO (0).
11. While input's [code point length](https://infra.spec.whatwg.org/#string-code-point-length) is zero or not a multiple of three, append a U+0030 DIGIT ZERO (0) character to input.
12. Split input into three strings of equal [code point length](https://infra.spec.whatwg.org/#string-code-point-length), to obtain three components. Let length be the [code point length](https://infra.spec.whatwg.org/#string-code-point-length) that all of those components have (one third the [code point length](https://infra.spec.whatwg.org/#string-code-point-length) of input).
13. If length is greater than 8, then remove the leading length-8 characters in each component, and let length be 8.
14. While length is greater than two and the first character in each component is a U+0030 DIGIT ZERO (0) character, remove that character and reduce length by one.
15. If length is *still* greater than two, truncate each component, leaving only the first two characters in each.
16. Let result be a [simple color](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#simple-colour).
17. Interpret the first component as a hexadecimal number; let the red component of result be the resulting number.
18. Interpret the second component as a hexadecimal number; let the green component of result be the resulting number.
19. Interpret the third component as a hexadecimal number; let the blue component of result be the resulting number.
20. Return result.

---

The [2D graphics context](https://html.spec.whatwg.org/multipage/canvas.html#canvas-context-2d) has a separate color syntax that also handles opacity.

#### **2.3.7** Space-separated tokens

A set of space-separated tokens is a string containing zero or more words (known as tokens) separated by one or more [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), where words consist of any string of one or more characters, none of which are [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

A string containing a [set of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens) may have leading or trailing [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

An unordered set of unique space-separated tokens is a [set of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens) where none of the tokens are duplicated.

An ordered set of unique space-separated tokens is a [set of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens) where none of the tokens are duplicated but where the order of the tokens is meaningful.

[Sets of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens) sometimes have a defined set of allowed values. When a set of allowed values is defined, the tokens must all be from that list of allowed values; other values are non-conforming. If no such set of allowed values is provided, then all values are conforming.

How tokens in a [set of space-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-space-separated-tokens) are to be compared (e.g. case-sensitively or not) is defined on a per-set basis.

#### **2.3.8** Comma-separated tokens

A set of comma-separated tokens is a string containing zero or more tokens each separated from the next by a single U+002C COMMA character (,), where tokens consist of any string of zero or more characters, neither beginning nor ending with [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), nor containing any U+002C COMMA characters (,), and optionally surrounded by [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

For instance, the string "` a ,b,,d d `" consists of four tokens: "a", "b", the empty string, and "d d". Leading and trailing whitespace around each token doesn't count as part of the token, and the empty string can be a token.

[Sets of comma-separated tokens](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#set-of-comma-separated-tokens) sometimes have further restrictions on what consists a valid token. When such restrictions are defined, the tokens must all fit within those restrictions; other values are non-conforming. If no such restrictions are specified, then all values are conforming.

#### **2.3.9** References

A valid hash-name reference to an element of type type is a string consisting of a U+0023 NUMBER SIGN character (#) followed by a string which exactly matches the value of the `name` attribute of an element with type type in the same [tree](https://dom.spec.whatwg.org/#concept-tree).

The rules for parsing a hash-name reference to an element of type type, given a context node scope, are as follows:

1. If the string being parsed does not contain a U+0023 NUMBER SIGN character, or if the first such character in the string is the last character in the string, then return null.
2. Let s be the string from the character immediately after the first U+0023 NUMBER SIGN character in the string being parsed up to the end of that string.
3. Return the first element of type type in scope's [tree](https://dom.spec.whatwg.org/#concept-tree), in [tree order](https://dom.spec.whatwg.org/#concept-tree-order), that has an `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` or `name` attribute whose value is s, or null if there is no such element.
   Although `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` attributes are accounted for when parsing, they are not used in determining whether a value is a [*valid* hash-name reference](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-hash-name-reference). That is, a hash-name reference that refers to an element based on `<a href="https://html.spec.whatwg.org/multipage/dom.html#the-id-attribute">id</a>` is a conformance error (unless that element also has a `name` attribute with the same value).

#### **2.3.10** Media queries

A string is a valid media query list if it matches the `<media-query-list>` production of Media Queries. [[MQ]](https://html.spec.whatwg.org/multipage/references.html#refsMQ)

A string matches the environment of the user if it is the empty string, a string consisting of only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace), or is a media query list that matches the user's environment according to the definitions given in Media Queries. [[MQ]](https://html.spec.whatwg.org/multipage/references.html#refsMQ)

#### **2.3.11** Unique internal values

A unique internal value is a value that is serializable, comparable by value, and never exposed to script.

To create a new unique internal value, return a [unique internal value](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#unique-internal-value) that has never previously been returned by this algorithm.
