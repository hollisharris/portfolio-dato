import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Hero"

const Typography = ({data}) => {
  return (
    <Layout>
      <Hero headline="Typography" />
      <div className="typography">
      <div className="container">
					
            <div className="element_block">
                <h2 className="text-sm text-light">Headings</h2>
                <div>
                    <h1>Heading Level 1</h1>
                    <h2>Heading Level 2</h2>
                    <h3>Heading Level 3</h3>  
                    <h4>Heading Level 4</h4>
                    <h5>Heading Level 5</h5> 
                    <h6>Heading Level 6</h6>
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Large Paragraph</h2>
                <div>
                    <p className="large">A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Paragraph</h2>
                <div>
                    <p>A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Small Paragraph</h2>
                <div>
                    <p className="small">A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Blockquote</h2>
                <div>
                    <blockquote>
                        <p>The real deal breaker, however, is registrability. From a legal perspective, there are four types of company names.</p>
                    </blockquote>
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Blockquote With Citation</h2>
                <div>
                    <blockquote>
                        <p>The real deal breaker, however, is registrability. From a legal perspective, there are four types of company names.</p>
                        <cite>Quote Source</cite>
                    </blockquote>

                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Inline Elements</h2>
                <div>
                    <div>
                        <p><a href="https://google.com">This is a text link</a></p>

                        <p><strong>Strong is used to indicate strong importance</strong></p>

                        <p><em>This text has added emphasis</em></p>

                        <p>The <b>b element</b> is stylistically different text from normal text, without any special importance</p>

                        <p>The <i>i element</i> is text that is set off from the normal text</p>

                        <p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation</p>

                        <p><del>This text is deleted</del> and <ins>This text is inserted</ins></p>

                        <p><s>This text has a strikethrough</s></p>

                        <p>Superscript<sup>®</sup></p>

                        <p>Subscript for things like H<sub>2</sub>O</p>

                        <p><small>This small text is small for for fine print, etc.</small></p>

                        <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>

                        <p>Keybord input: <kbd>Cmd</kbd></p>

                        <p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation</q></p>

                        <p><cite>This is a citation</cite></p>
                        
                        <p>The <dfn>dfn element</dfn> indicates a definition.</p>

                        <p>The <mark>mark element</mark> indicates a highlight</p>

                        <p><code>This is what inline code looks like.</code></p>

                        <p><samp>This is sample output from a computer program</samp></p>

                        <p>The <var>variarble element</var>, such as <var>x</var> = <var>y</var></p>
                    </div>
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Time</h2>
                <div>
                    <time datetime="2013-04-06T12:32+00:00">2 weeks ago</time>
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Preformatted Text</h2>
                <div>
                    <pre>P R E F O R M A T T E D T E X T<br />! " # $ % &amp; ' ( ) * + , - . /<br/>0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?<br />@ A B C D E F G H I J K L M N O<br/>P Q R S T U V W X Y Z [ \ ] ^ _<br />` a b c d e f g h i j k l m n o<br/>p q r s t u v w x y z ~</pre>
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Hr</h2>
                <div>
                    <hr />
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Hr Big</h2>
                <div>
                    <hr className="big" />
                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Unordered</h2>
                <div>
                    <div>
                        <ul>
                            <li>This is a list item in an unordered list</li>
                            <li>An unordered list is a list in which the sequence of items is not important. Sometimes, an unordered list is a bulleted list. And this is a long list item in an unordered list that can wrap onto a new line. </li>
                            <li>
                                Lists can be nested inside of each other
                                <ul>
                                    <li>This is a nested list item</li>
                                    <li>This is another nested list item in an unordered list</li>
                                </ul>
                            </li>
                            <li>This is the last list item</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Ordered</h2>
                <div>
                    <div>
                        <ol>
                            <li>This is a list item in an ordered list</li>
                            <li>An ordered list is a list in which the sequence of items is important. An ordered list does not necessarily contain sequence characters.</li>
                            <li>
                                Lists can be nested inside of each other
                                <ol>
                                    <li>This is a nested list item</li>
                                    <li>This is another nested list item in an ordered list</li>
                                </ol>
                            </li>
                            <li>This is the last list item</li>
                        </ol>
                    </div>

                </div>
            </div>
            <div className="element_block">
                <h2 className="text-sm">Definition</h2>
                <div>
                    <dl>
                        <dt>Definition List</dt>
                        <dd>A number of connected items or names written or printed consecutively, typically one below the other.</dd>
                        <dt>This is a term.</dt>
                        <dd>This is the definition of that term, which both live in a <code>dl</code>.</dd>
                        <dt>Here is another term.</dt>
                        <dd>And it gets a definition too, which is this line.</dd>
                        <dt>Here is term that shares a definition with the term below.</dt>
                        <dd>And it gets a definition too, which is this line.</dd>
                    </dl>
                </div>
            </div>
        </div>
        </div>

    </Layout>
  )
}

export default Typography