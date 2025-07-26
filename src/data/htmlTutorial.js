// src/data/htmlTutorial.js
const htmlTutorial = {
  title: "HTML Tutorial",
  description: "Learn the basics of HTML - the standard markup language for creating web pages.",
  topics: [
    {
      heading: "What is HTML?",
      subheadings: [
        {
          title: "Definition",
          content: "HTML stands for HyperText Markup Language. It is used to design web pages using markup."
        },
        {
          title: "Purpose of HTML",
          content: "HTML is the backbone of all websites. It defines the structure of web content."
        }
      ]
    },
    {
      heading: "HTML Basics",
      subheadings: [
        {
          title: "HTML Document Structure",
          content: `<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, world!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>`
        },
        {
          title: "Common Tags",
          content: "Some of the most common HTML tags are: `&lt;h1&gt;`, `&lt;p&gt;`, `&lt;a&gt;`, `&lt;img&gt;`, `&lt;div&gt;`, and `&lt;span&gt;`."
        }
      ]
    },
    {
      heading: "HTML Forms",
      subheadings: [
        {
          title: "Form Elements",
          content: "Forms use tags like `&lt;form&gt;`, `&lt;input&gt;`, `&lt;textarea&gt;`, `&lt;button&gt;`, `&lt;select&gt;`, and `&lt;option&gt;` to collect user input."
        },
        {
          title: "Basic Form Structure",
          content: `<pre><code>&lt;form action="/submit" method="post"&gt;
  &lt;label for="name"&gt;Name:&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;
  
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  
  &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</code></pre>`
        },
        {
          title: "Input Types",
          content: `<p>HTML provides various input types:</p>
<pre><code>&lt;!-- Text input --&gt;
&lt;input type="text" name="username"&gt;

&lt;!-- Password input --&gt;
&lt;input type="password" name="password"&gt;

&lt;!-- Email input --&gt;
&lt;input type="email" name="email"&gt;

&lt;!-- Number input --&gt;
&lt;input type="number" name="age" min="1" max="100"&gt;

&lt;!-- Checkbox --&gt;
&lt;input type="checkbox" name="subscribe" value="yes"&gt;
&lt;label&gt;Subscribe to newsletter&lt;/label&gt;

&lt;!-- Radio buttons --&gt;
&lt;input type="radio" name="gender" value="male" id="male"&gt;
&lt;label for="male"&gt;Male&lt;/label&gt;
&lt;input type="radio" name="gender" value="female" id="female"&gt;
&lt;label for="female"&gt;Female&lt;/label&gt;</code></pre>`
        },
        {
          title: "Form Validation",
          content: `<p>HTML5 provides built-in form validation attributes:</p>
<pre><code>&lt;form&gt;
  &lt;label for="name"&gt;Name (required):&lt;/label&gt;
  &lt;input type="text" id="name" name="name" required&gt;
  
  &lt;label for="email"&gt;Email (required):&lt;/label&gt;
  &lt;input type="email" id="email" name="email" required&gt;
  
  &lt;label for="website"&gt;Website:&lt;/label&gt;
  &lt;input type="url" id="website" name="website"&gt;
  
  &lt;label for="phone"&gt;Phone:&lt;/label&gt;
  &lt;input type="tel" id="phone" name="phone" 
         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
         placeholder="123-456-7890"&gt;
  
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>`
        },
        {
          title: "Textarea and Select",
          content: `<p>For longer text input and dropdown selections:</p>
<pre><code>&lt;!-- Textarea for multi-line text --&gt;
&lt;label for="message"&gt;Message:&lt;/label&gt;
&lt;textarea id="message" name="message" 
          rows="4" cols="50" 
          placeholder="Enter your message here"&gt;&lt;/textarea&gt;

&lt;!-- Select dropdown --&gt;
&lt;label for="country"&gt;Country:&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value=""&gt;Select a country&lt;/option&gt;
  &lt;option value="us"&gt;United States&lt;/option&gt;
  &lt;option value="ca"&gt;Canada&lt;/option&gt;
  &lt;option value="uk"&gt;United Kingdom&lt;/option&gt;
&lt;/select&gt;</code></pre>`
        }
      ]
    },
    {
      heading: "HTML Attributes",
      subheadings: [
        {
          title: "Common Attributes",
          content: `<p>HTML elements can have attributes that provide additional information:</p>
<pre><code>&lt;!-- id attribute - unique identifier --&gt;
&lt;div id="header"&gt;Header content&lt;/div&gt;

&lt;!-- class attribute - for CSS styling --&gt;
&lt;p class="highlight important"&gt;Important text&lt;/p&gt;

&lt;!-- src attribute - for images --&gt;
&lt;img src="image.jpg" alt="Description of image"&gt;

&lt;!-- href attribute - for links --&gt;
&lt;a href="https://example.com" target="_blank"&gt;Visit Example&lt;/a&gt;

&lt;!-- title attribute - tooltip text --&gt;
&lt;span title="This is a tooltip"&gt;Hover over me&lt;/span&gt;</code></pre>`
        },
        {
          title: "Data Attributes",
          content: `<p>Custom data attributes allow you to store extra information:</p>
<pre><code>&lt;div data-user-id="123" data-role="admin"&gt;
  User information
&lt;/div&gt;

&lt;button data-action="delete" data-confirm="true"&gt;
  Delete Item
&lt;/button&gt;</code></pre>`
        }
      ]
    }
  ]
};

export default htmlTutorial;