// src/data/cssTutorial.js
const cssTutorial = {
  title: "CSS Tutorial",
  description: "Learn CSS (Cascading Style Sheets) to style and layout your web pages with beautiful designs.",
  topics: [
    {
      heading: "What is CSS?",
      subheadings: [
        {
          title: "Definition",
          content: "CSS stands for Cascading Style Sheets. It describes how HTML elements should be displayed on screen, in print, or in other media."
        },
        {
          title: "Purpose of CSS",
          content: "CSS is used to control the layout, colors, fonts, and overall appearance of web pages. It separates content from presentation."
        }
      ]
    },
    {
      heading: "CSS Syntax",
      subheadings: [
        {
          title: "Basic CSS Rule",
          content: `<pre><code>
selector {
    property: value;
    property: value;
}
</code></pre>`
        },
        {
          title: "Example CSS Rule",
          content: `<pre><code>
h1 {
    color: blue;
    font-size: 24px;
    margin-bottom: 10px;
}
</code></pre>`
        }
      ]
    },
    {
      heading: "Selectors",
      subheadings: [
        {
          title: "Basic Selectors",
          content: `<pre><code>
/* Element selector */
p { color: red; }

/* Class selector */
.highlight { background-color: yellow; }

/* ID selector */
#header { font-size: 32px; }

/* Descendant selector */
div p { margin: 10px; }
</code></pre>`
        },
        {
          title: "Advanced Selectors",
          content: `<pre><code>
/* Pseudo-classes */
a:hover { color: orange; }
input:focus { border: 2px solid blue; }

/* Attribute selectors */
input[type="text"] { padding: 5px; }

/* Child selector */
ul > li { list-style: none; }
</code></pre>`
        }
      ]
    },
    {
      heading: "Box Model",
      subheadings: [
        {
          title: "Understanding the Box Model",
          content: "Every HTML element is essentially a box. The CSS box model consists of: content, padding, border, and margin."
        },
        {
          title: "Box Model Example",
          content: `<pre><code>
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
</code></pre>`
        }
      ]
    },
    {
      heading: "Layout with Flexbox",
      subheadings: [
        {
          title: "Flexbox Container",
          content: `<pre><code>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
</code></pre>`
        },
        {
          title: "Flex Items",
          content: `<pre><code>
.item {
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}
</code></pre>`
        }
      ]
    }
  ]
};

export default cssTutorial;
