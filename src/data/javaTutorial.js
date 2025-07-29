
const javaTutorial = 
{
  title: "🖥️ Java Programming",
  description:
    "The Complete Beginner-Friendly Guide for Aspiring Developers and Tech Enthusiasts",
  topics: [
    {
      heading: "Computer Languages Overview",
      subheadings: [
        {
          title: "Introduction",
          content: `
            <div class="mb-6">
              <h2 class="text-xl font-bold mb-2">What is a Computer Language?</h2>
              <p>
                A computer language is not just code—it's a structured way of telling computers what to do. These languages act as a bridge between human logic and machine operations. Without them, computers would be nothing more than sophisticated hardware with no purpose.
              </p>
              <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
                <strong>Definition:</strong> A computer language is a formalized method of communication comprising symbols, keywords, rules (syntax), and semantics used to control the behavior of a computer.
              </div>
            </div>
            <div class="mb-6">
              <h2 class="text-xl font-bold mb-2">Classification of Computer Languages</h2>
              <ol class="list-decimal ml-6 space-y-2">
                <li>
                  <strong class="text-red-600">🔴 Low-Level Language (Machine Language)</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Definition:</b> The most fundamental form of programming language.</li>
                    <li><b>Readable by:</b> Only machines.</li>
                    <li><b>Form:</b> Binary code (composed of 0s and 1s).</li>
                    <li><b>Characteristics:</b>
                      <ul class="list-circle ml-6">
                        <li>Direct interaction with hardware.</li>
                        <li>Extremely fast and efficient.</li>
                        <li>Very difficult for humans to read, write, or debug.</li>
                      </ul>
                    </li>
                    <li><b>Use Case:</b> Embedded systems, firmware programming.</li>
                  </ul>
                </li>
                <li>
                  <strong class="text-yellow-600">🟠 Mid-Level Language (Assembly Language / Intermediate Code)</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Definition:</b> A symbolic representation of machine code, closer to hardware yet slightly more readable by humans.</li>
                    <li><b>Readable by:</b> Programmers with some technical expertise.</li>
                    <li><b>Form:</b> Mnemonics (e.g., MOV, ADD, SUB) and symbolic addresses.</li>
                    <li><b>Characteristics:</b>
                      <ul class="list-circle ml-6">
                        <li>Requires an assembler to convert into machine code.</li>
                        <li>Platform-dependent.</li>
                        <li>Often used for system-level programming.</li>
                      </ul>
                    </li>
                    <li><b>Examples:</b> Assembly Language, Java Bytecode (used in JVM)</li>
                  </ul>
                </li>
                <li>
                  <strong class="text-green-600">🟢 High-Level Language (HLL)</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Definition:</b> Programming languages designed to be user-friendly, using syntax similar to human language.</li>
                    <li><b>Readable by:</b> Humans (developers).</li>
                    <li><b>Form:</b> English-like keywords (if, for, while, etc.)</li>
                    <li><b>Characteristics:</b>
                      <ul class="list-circle ml-6">
                        <li>Requires a compiler or interpreter.</li>
                        <li>Platform-independent logic.</li>
                        <li>Easier to learn, maintain, and debug.</li>
                      </ul>
                    </li>
                    <li><b>Examples:</b> Python, Java, C++, JavaScript, Ruby</li>
                  </ul>
                </li>
              </ol>
            </div>
          `,
        },
        {
          title: "Software & Its Types",
          content: `
            <div class="mb-6">
              <h2 class="text-xl font-bold mb-2">What is Software?</h2>
              <p>
                While hardware is the body of a computer, software is its soul.
              </p>
              <div class="bg-purple-50 border-l-4 border-purple-400 p-3 my-4">
                <strong>Definition:</strong> Software is a collection of instructions, programs, and data that tell a computer how to perform specific operations or tasks. It's intangible, meaning it can't be physically touched but is essential for any digital system to function.
              </div>
            </div>
            <div class="mb-6">
              <h2 class="text-xl font-bold mb-2">Types of Software</h2>
              <ol class="list-decimal ml-6 space-y-2">
                <li>
                  <strong>🧠 System Software</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Purpose:</b> Manages hardware resources and serves as a foundation for application software.</li>
                    <li><b>Includes:</b> Operating systems, device drivers, system utilities.</li>
                    <li><b>Examples:</b> Windows, macOS, Linux (Operating Systems), BIOS, Printer Drivers</li>
                  </ul>
                </li>
                <li>
                  <strong>📦 Application Software</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Purpose:</b> Helps users perform specific tasks like writing documents, browsing the web, or editing images.</li>
                    <li><b>Examples:</b> Microsoft Word, Adobe Photoshop, Google Chrome</li>
                  </ul>
                </li>
                <li>
                  <strong>👨‍💻 Programming Software</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Purpose:</b> Provides tools for developers to write, test, and debug their applications.</li>
                    <li><b>Includes:</b> Editors, compilers, debuggers.</li>
                    <li><b>Examples:</b> Visual Studio Code, GCC Compiler, Python Interpreter</li>
                  </ul>
                </li>
                <li>
                  <strong>🔗 Middleware</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Purpose:</b> Acts as a connector or "glue" between different software components or systems.</li>
                    <li><b>Use Case:</b> API integration, communication between databases and servers.</li>
                    <li><b>Examples:</b> API Gateway, Message Brokers like RabbitMQ, Database Middleware</li>
                  </ul>
                </li>
              </ol>
            </div>
          `,
        },
        {
          title: "Applications & Their Types",
          content: `
            <div class="mb-6">
              <h2 class="text-xl font-bold mb-2">What is an Application?</h2>
              <p>
                We interact with applications every day—whether checking the weather, scrolling social media, or editing a photo.
              </p>
              <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
                <strong>Definition:</strong> An application (or app) is a software program designed to perform specific functions directly for the end-user. Applications simplify tasks, increase productivity, and enhance user experience.
              </div>
            </div>
            <div class="mb-6">
              <h2 class="text-xl font-bold mb-2">Types of Applications</h2>
              <ol class="list-decimal ml-6 space-y-2">
                <li>
                  <strong>🖥️ Desktop Applications</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Run on:</b> Personal computers or laptops.</li>
                    <li><b>Examples:</b> VLC Media Player, Microsoft Excel, Adobe Illustrator</li>
                  </ul>
                </li>
                <li>
                  <strong>📱 Mobile Applications</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Run on:</b> Smartphones and tablets (iOS & Android).</li>
                    <li><b>Examples:</b> WhatsApp, Instagram, Google Maps</li>
                  </ul>
                </li>
                <li>
                  <strong>🌐 Web Applications</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Run in:</b> Web browsers.</li>
                    <li><b>Do not require:</b> Installation.</li>
                    <li><b>Examples:</b> Gmail, Trello, Google Docs</li>
                  </ul>
                </li>
                <li>
                  <strong>🏢 Enterprise Applications</strong>
                  <ul class="list-disc ml-6">
                    <li><b>Used by:</b> Large organizations to manage core business processes.</li>
                    <li><b>Examples:</b> SAP (ERP), Salesforce (CRM), Oracle Financials</li>
                  </ul>
                </li>
              </ol>
            </div>
          `,
        },
        {
          title: "3-Tier Architecture",
          content: `
            <div class="mb-6">
              <h2 class="text-xl font-bold mb-2">What is 3-Tier Architecture?</h2>
              <p>
                When building scalable and maintainable applications, developers often follow the 3-Tier Architecture model.
              </p>
              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
                <strong>Definition:</strong> 3-Tier Architecture is a software design pattern that separates an application into three distinct layers: the presentation tier, the application (or business logic) tier, and the data tier. Each layer has a unique responsibility, promoting better code organization, easier debugging, and enhanced scalability.
              </div>
            </div>
            <div class="mb-6">
              <h2 class="text-lg font-semibold mb-2">Layers of 3-Tier Architecture</h2>
              <ol class="list-decimal ml-6 space-y-2">
                <li>
                  <strong>🎨 Presentation Tier (Client Layer)</strong>
                  <ul class="list-disc ml-6">
                    <li>Handles the user interface and interaction.</li>
                    <li>Technologies: HTML, CSS, JavaScript, React, Android/iOS UI</li>
                    <li>Example: A login page where the user enters credentials.</li>
                  </ul>
                </li>
                <li>
                  <strong>🧠 Application Tier (Business Logic Layer)</strong>
                  <ul class="list-disc ml-6">
                    <li>Processes user requests, applies business logic, and controls application functionality.</li>
                    <li>Technologies: Java, Node.js, Django, .NET, APIs</li>
                    <li>Example: Verifying credentials and determining access rights.</li>
                  </ul>
                </li>
                <li>
                  <strong>🗃️ Data Tier (Database Layer)</strong>
                  <ul class="list-disc ml-6">
                    <li>Manages data storage, retrieval, and manipulation.</li>
                    <li>Technologies: MySQL, PostgreSQL, MongoDB, Redis</li>
                    <li>Example: Storing and fetching user profiles.</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div class="mb-6">
              <h2 class="text-lg font-semibold mb-2">Benefits of 3-Tier Architecture</h2>
              <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="p-2 text-left">Feature</th>
                    <th class="p-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="p-2">🔄 Separation of Concerns</td>
                    <td class="p-2">Each layer handles a specific aspect of the application.</td>
                  </tr>
                  <tr>
                    <td class="p-2">📈 Scalability</td>
                    <td class="p-2">Easily scale layers independently based on system demand.</td>
                  </tr>
                  <tr>
                    <td class="p-2">🔧 Maintainability</td>
                    <td class="p-2">Easier to debug, upgrade, or replace parts of the system.</td>
                  </tr>
                  <tr>
                    <td class="p-2">🔁 Reusability</td>
                    <td class="p-2">Business logic and data services can be reused across multiple interfaces.</td>
                  </tr>
                  <tr>
                    <td class="p-2">🔐 Security</td>
                    <td class="p-2">Sensitive logic and data stay away from the front-end.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mb-6">
              <h2 class="text-lg font-semibold mb-2">Example Flow of a 3-Tier Application</h2>
              <ol class="list-decimal ml-6">
                <li>Presentation Tier: User enters the product name in the search box.</li>
                <li>Application Tier: The server validates and processes the query.</li>
                <li>Data Tier: The database retrieves product details and sends it back to the application.</li>
                <li>Presentation Tier: The results are displayed to the user.</li>
              </ol>
            </div>
          `,
        },
        {
          title: "Final Thoughts",
          content: `
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <strong>Whether you're diving into coding, software development, or system architecture, understanding computer languages, software types, applications, and 3-tier design is foundational. These concepts power everything from simple to enterprise-grade applications.</strong>
              <br/><br/>
              Stay curious, explore further, and start building smarter!
            </div>
          `,
        },
      ],
    },
    {
      heading: "Introduction to Java",
      subheadings: [
        {
          title: "What is Java?",
          content: `
            <div class="mb-6">
              <h2 class="text-2xl font-bold mb-2">☕ What is Java?</h2>
              <p>
                Java is a powerful, versatile, and widely adopted high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation) and officially released in 1995. It was designed with the goal of building secure, portable, and platform-independent applications.<br>
                Java programs are written once and can run on any device equipped with a Java Virtual Machine (JVM), making it one of the most reliable choices for cross-platform development.
              </p>
            </div>
            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">🔹 Why Learn Java?</h2>
              <p>
                Java is used in a wide range of domains—web applications, enterprise systems, mobile apps (Android), desktop software, embedded systems, big data processing, cloud computing, and more. Its syntax is similar to C++, but it eliminates many complexities like pointers and manual memory management, making it a developer-friendly language.
              </p>
            </div>
            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">🚀 Core Features of Java</h2>
              <ol class="list-decimal ml-6 space-y-2">
                <li>
                  <strong>🧩 Platform Independence</strong>
                  <ul class="list-disc ml-6">
                    <li>Write Once, Run Anywhere (WORA) is Java’s key philosophy.</li>
                    <li>Java code is compiled into bytecode, which can be executed on any device with a JVM, regardless of the underlying OS (Windows, Linux, macOS, etc.).</li>
                  </ul>
                </li>
                <li>
                  <strong>🧱 Object-Oriented Programming (OOP)</strong>
                  <ul class="list-disc ml-6">
                    <li>Java is purely object-oriented and supports OOP principles:</li>
                    <ul class="list-circle ml-6">
                      <li>Encapsulation</li>
                      <li>Inheritance</li>
                      <li>Polymorphism</li>
                      <li>Abstraction</li>
                    </ul>
                    <li>This makes the code more modular, reusable, maintainable, and scalable.</li>
                  </ul>
                </li>
                <li>
                  <strong>✅ Simplicity</strong>
                  <ul class="list-disc ml-6">
                    <li>Java simplifies complex programming concepts found in languages like C/C++.</li>
                    <li>It does not use pointers explicitly and doesn’t allow operator overloading, reducing confusion and improving readability.</li>
                  </ul>
                </li>
                <li>
                  <strong>🔐 Security</strong>
                  <ul class="list-disc ml-6">
                    <li>Java is designed with security in mind:</li>
                    <ul class="list-circle ml-6">
                      <li>Bytecode verification</li>
                      <li>Security manager</li>
                      <li>Java sandboxing</li>
                    </ul>
                    <li>These features prevent unauthorized access and allow safe execution of code from untrusted sources (e.g., applets).</li>
                  </ul>
                </li>
                <li>
                  <strong>🌐 Portability</strong>
                  <ul class="list-disc ml-6">
                    <li>Java bytecode is architecture-neutral.</li>
                    <li>Once compiled, it can be executed across various platforms without modification.</li>
                  </ul>
                </li>
                <li>
                  <strong>🔄 Multithreading</strong>
                  <ul class="list-disc ml-6">
                    <li>Java has built-in support for multithreaded programming.</li>
                    <li>This enables concurrent execution of two or more threads, improving the performance of apps that perform tasks like gaming, animations, and real-time data processing.</li>
                  </ul>
                </li>
                <li>
                  <strong>🗑️ Automatic Garbage Collection</strong>
                  <ul class="list-disc ml-6">
                    <li>Java automatically handles memory through its garbage collector, which deletes unused objects in the background.</li>
                    <li>This ensures better memory management and reduces memory leaks.</li>
                  </ul>
                </li>
                <li>
                  <strong>📚 Rich Standard Library (Java API)</strong>
                  <ul class="list-disc ml-6">
                    <li>Java comes with a vast, well-documented standard library (Java API).</li>
                    <li>It includes packages for:</li>
                    <ul class="list-circle ml-6">
                      <li>Data structures (<code>java.util</code>)</li>
                      <li>File I/O (<code>java.io</code>, <code>java.nio</code>)</li>
                      <li>Networking (<code>java.net</code>)</li>
                      <li>GUI development (<code>javax.swing</code>, <code>javafx</code>)</li>
                      <li>Database connectivity (<code>java.sql</code>)</li>
                    </ul>
                  </ul>
                </li>
                <li>
                  <strong>🌍 Distributed Computing Support</strong>
                  <ul class="list-disc ml-6">
                    <li>Java supports building distributed systems using technologies like:</li>
                    <ul class="list-circle ml-6">
                      <li>RMI (Remote Method Invocation)</li>
                      <li>CORBA</li>
                      <li>Web Services</li>
                    </ul>
                    <li>This allows Java programs to interact with other systems over a network seamlessly.</li>
                  </ul>
                </li>
                <li>
                  <strong>⚙️ Performance</strong>
                  <ul class="list-disc ml-6">
                    <li>Java uses Just-In-Time (JIT) compilers to convert bytecode to native machine code during runtime, improving execution speed.</li>
                    <li>Combined with efficient multithreading and optimized garbage collection, Java balances performance with portability.</li>
                  </ul>
                </li>
                <li>
                  <strong>🌐 Network-Centric Design</strong>
                  <ul class="list-disc ml-6">
                    <li>Java was built with networking in mind.</li>
                    <li>Provides libraries for handling sockets, URL communication, HTTP requests, and building client-server apps.</li>
                  </ul>
                </li>
                <li>
                  <strong>📦 Dynamic Class Loading</strong>
                  <ul class="list-disc ml-6">
                    <li>Java supports dynamic loading, which means classes are loaded into memory only when required.</li>
                    <li>This adds flexibility and reduces the initial loading time of applications.</li>
                  </ul>
                </li>
                <li>
                  <strong>⚠️ Robust Exception Handling</strong>
                  <ul class="list-disc ml-6">
                    <li>Java includes a structured approach to handle runtime errors using try, catch, throw, and finally blocks.</li>
                    <li>This ensures that the application doesn’t crash unexpectedly and can gracefully recover from errors.</li>
                  </ul>
                </li>
                <li>
                  <strong>⚡ High Performance (Compared to Other Interpreted Languages)</strong>
                  <ul class="list-disc ml-6">
                    <li>Although Java is not as fast as low-level languages like C, it offers competitive performance due to:</li>
                    <ul class="list-circle ml-6">
                      <li>JIT Compilation</li>
                      <li>Efficient memory management</li>
                      <li>Multithreading</li>
                      <li>Bytecode optimization</li>
                    </ul>
                  </ul>
                </li>
                <li>
                  <strong>🧱 Scalability</strong>
                  <ul class="list-disc ml-6">
                    <li>Java can be used for small scripts to massive enterprise-level systems.</li>
                    <li>Frameworks like Spring, Hibernate, and Java EE allow you to build scalable applications used by millions of users.</li>
                  </ul>
                </li>
                <li>
                  <strong>🖥️ Cross-Platform GUI Development</strong>
                  <ul class="list-disc ml-6">
                    <li>Java supports GUI creation using:</li>
                    <ul class="list-circle ml-6">
                      <li>Swing</li>
                      <li>JavaFX</li>
                    </ul>
                    <li>Enables development of desktop applications with rich interfaces across platforms.</li>
                  </ul>
                </li>
                <li>
                  <strong>🌐 Built-in Web Development Capabilities</strong>
                  <ul class="list-disc ml-6">
                    <li>Java offers server-side web technologies like:</li>
                    <ul class="list-circle ml-6">
                      <li>Servlets</li>
                      <li>JSP (JavaServer Pages)</li>
                    </ul>
                    <li>Combined with frameworks like Spring Boot, Struts, and JSF, Java is a go-to choice for building dynamic, full-stack web applications.</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">🔚 Conclusion</h2>
              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                Java isn’t just a programming language—it’s an entire ecosystem that powers millions of applications globally. Its platform independence, security, robust architecture, and developer-friendly features make it ideal for both beginners and professionals.<br>
                If you're stepping into the world of programming or aiming to build reliable, scalable software—Java is one of the best languages to start with.
              </div>
             
            </div>
          `,
        },
      ],
    },
    {
      heading: "Installing Java and Setting Up Your Development Environment",
      subheadings: [
        {
          title: "Getting Started: Install Java",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">Installing Java and Setting Up Your Development Environment</h2>
          <p>
            Setting up your Java environment is the first and most important step before writing your first line of code. In this post, we’ll walk you through installing the Java Development Kit (JDK), choosing the right IDE, and verifying your setup — tailored for both beginners and future pros.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🧩 What is the JDK?</h2>
          <ul class="list-disc ml-6">
            <li>The Java Development Kit (JDK) is a software package that includes everything you need to develop Java applications:</li>
            <ul class="list-circle ml-6">
              <li>Java Compiler (<code>javac</code>)</li>
              <li>Java Runtime Environment (JRE)</li>
              <li>Core Libraries</li>
              <li>Debugging Tools</li>
            </ul>
          </ul>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            ✅ <strong>Pro Tip:</strong> Always download the latest Long-Term Support (LTS) version. As of 2025, that’s JDK 21.
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🖥️ Step-by-Step Installation Guide</h2>
          <h3 class="font-semibold">🔹 Step 1: Download the JDK</h3>
          <ol class="list-decimal ml-6">
            <li>Go to the official Oracle JDK page: <a href="https://jdk.java.net" target="_blank" rel="noopener">https://jdk.java.net</a></li>
            <li>Choose your platform: Windows, macOS, or Linux.</li>
            <li>Download the installer and follow the on-screen instructions.</li>
          </ol>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            💡 Prefer open-source? You can also use OpenJDK or Adoptium Temurin distributions.
          </div>
          <h3 class="font-semibold mt-4">🔹 Step 2: Install the JDK</h3>
          <ul class="list-disc ml-6">
            <li><b>Windows:</b>
              <ul class="list-circle ml-6">
                <li>Run the .exe file.</li>
                <li>Accept the license agreement.</li>
                <li>Let it install to <code>C:\\Program Files\\Java\\jdk-21</code>.</li>
              </ul>
            </li>
            <li><b>macOS:</b>
              <ul class="list-circle ml-6">
                <li>Open the .dmg file and drag the JDK into your Applications folder.</li>
              </ul>
            </li>
            <li><b>Linux (Ubuntu/Debian):</b>
              <pre><code>sudo apt update
sudo apt install openjdk-21-jdk</code></pre>
            </li>
          </ul>
          <h3 class="font-semibold mt-4">🔹 Step 3: Set Environment Variables</h3>
          <ul class="list-disc ml-6">
            <li><b>Windows:</b>
              <ul class="list-circle ml-6">
                <li>Go to System Properties &gt; Environment Variables.</li>
                <li>Under System Variables, add:</li>
                <ul>
                  <li><code>JAVA_HOME</code> → <code>C:\\Program Files\\Java\\jdk-21</code></li>
                  <li>Add <code>%JAVA_HOME%\\bin</code> to the <code>Path</code> variable.</li>
                </ul>
              </ul>
            </li>
            <li><b>macOS/Linux:</b>
              <pre><code>export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-21.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
source ~/.bashrc</code></pre>
            </li>
          </ul>
          <h3 class="font-semibold mt-4">🔹 Step 4: Verify Installation</h3>
          <p>Open a terminal or command prompt and run:</p>
          <pre><code>java -version
javac -version</code></pre>
          <p>You should see output like:</p>
          <pre><code>java version "21.0.2" 2025-03-15 LTS
javac 21.0.2</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            If you see this, congrats — you’re ready to code in Java!
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🧰 Choosing Your IDE</h2>
          <p>
            You can write Java code in Notepad or Vim, but modern development is best with an IDE (Integrated Development Environment). Here are top choices:
          </p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">IDE</th>
                <th class="p-2 text-left">Best For</th>
                <th class="p-2 text-left">Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">IntelliJ IDEA</td>
                <td class="p-2">All levels, smart features</td>
                <td class="p-2"><a href="https://www.jetbrains.com/idea" target="_blank" rel="noopener">jetbrains.com/idea</a></td>
              </tr>
              <tr>
                <td class="p-2">Eclipse</td>
                <td class="p-2">Industry-standard, flexible</td>
                <td class="p-2"><a href="https://www.eclipse.org/" target="_blank" rel="noopener">eclipse.org</a></td>
              </tr>
              <tr>
                <td class="p-2">VS Code + Extensions</td>
                <td class="p-2">Lightweight, multi-language</td>
                <td class="p-2"><a href="https://code.visualstudio.com/" target="_blank" rel="noopener">code.visualstudio.com</a></td>
              </tr>
            </tbody>
          </table>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            🎯 <strong>Our recommendation:</strong> IntelliJ IDEA Community Edition — beginner-friendly, great auto-completion, easy UI.
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">⚙️ First-Time IDE Setup (IntelliJ Example)</h2>
          <ol class="list-decimal ml-6">
            <li>Install IntelliJ from the official site.</li>
            <li>Open the IDE and choose “New Project”.</li>
            <li>Select Java as the project type.</li>
            <li>Ensure it detects your installed JDK.</li>
            <li>Create a new <code>.java</code> file and start coding.</li>
          </ol>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <strong>Sample Hello World:</strong>
            <pre><code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}</code></pre>
            Click Run ▶️ — and see your first program in action!
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🧠 Pro Tips</h2>
          <ul class="list-disc ml-6">
            <li>Keep the JDK updated every 6–12 months.</li>
            <li>Bookmark JDK release notes for changes.</li>
            <li>Practice compiling from the terminal too — it deepens your understanding.</li>
          </ul>
        </div>
      `,
        },
      ],
    },
    {
      heading: "Your First Java Program: Hello World",
      subheadings: [
        {
          title: "Hello Java, Hello World!",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">👋 Hello Java, Hello World!</h2>
          <p>
            Every journey begins with a small step, and in programming, that step is often writing your first program. In Java, the tradition is to start with a simple <strong>"Hello, World!"</strong> message printed to the screen.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">✅ Writing Your First Java Program</h2>
          <p>Create a new file named <code>HelloWorld.java</code> and write the following:</p>
          <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🔍 What’s Happening Here?</h2>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Line</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2"><code>public class HelloWorld</code></td>
                <td class="p-2">Declares a public class named <code>HelloWorld</code>. In Java, the file name <strong>must</strong> match the class name.</td>
              </tr>
              <tr>
                <td class="p-2"><code>public static void main(String[] args)</code></td>
                <td class="p-2">This is the entry point of every Java program. The JVM starts execution from here.</td>
              </tr>
              <tr>
                <td class="p-2"><code>System.out.println("Hello, World!");</code></td>
                <td class="p-2">This line prints the text to the console.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">▶️ How to Compile and Run</h2>
          <p>Assuming you've installed Java and set up your environment:</p>
          <pre><code>javac HelloWorld.java   // Compiles the file, creates HelloWorld.class
java HelloWorld         // Executes the compiled bytecode
</code></pre>
          <p>You should see this output:</p>
          <pre><code>Hello, World!</code></pre>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🧠 Understanding the Java Execution Model</h2>
          <ol class="list-decimal ml-6">
            <li><strong>Compilation Phase</strong><br>
              The Java compiler (<code>javac</code>) converts your <code>.java</code> file into bytecode (<code>.class</code> file).
            </li>
            <li><strong>Execution Phase</strong><br>
              The Java Virtual Machine (<code>java</code>) loads and executes the bytecode.
            </li>
            <li><strong>Platform Independence</strong><br>
              This two-step process makes Java platform-independent — your code runs the same on Windows, Linux, and macOS.
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🧪 Experiment: Go Beyond “Hello, World!”</h2>
          <p>Let’s personalize your output and try a few variations:</p>
          <ul class="list-disc ml-6">
            <li>
              <strong>🔁 Example 1: Print Your Name</strong>
              <pre><code>System.out.println("My name is Java Learner!");</code></pre>
            </li>
            <li>
              <strong>📅 Example 2: Show Today’s Date (using basic logic)</strong>
              <pre><code>System.out.println("Today is a great day to code in Java!");</code></pre>
            </li>
            <li>
              <strong>🧩 Example 3: Add Simple Math</strong>
              <pre><code>System.out.println("2 + 3 = " + (2 + 3));</code></pre>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🚫 Common Mistakes to Avoid</h2>
          <ul class="list-disc ml-6">
            <li><strong>File name mismatch:</strong> <code>HelloWorld.java</code> must match the class name <code>HelloWorld</code>.</li>
            <li><strong>Missing semicolon <code>;</code>:</strong> Every statement must end with a semicolon in Java.</li>
            <li><strong>Case sensitivity:</strong> <code>System</code> is not the same as <code>system</code>.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">💡 What You’ve Learned</h2>
          <ul class="list-disc ml-6">
            <li>How to write, compile, and run your first Java program.</li>
            <li>The structure of a Java application.</li>
            <li>The power of <code>System.out.println()</code> and the Java entry point method.</li>
          </ul>
        </div>
        <div class="mb-6">
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            👉 <strong>Next Step:</strong><br>
            In the next lesson, we’ll explore <strong>Variables and Data Types in Java</strong> — how to store and use different kinds of information in your programs.
          </div>
        </div>
      `,
        },
      ],
    },
    {
      heading: "Comments in Java",
      subheadings: [
        {
          title: "How to Use Comments in Java",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">💬 Comments in Java</h2>
          <p>
            Comments are non-executable statements in Java that are used to make the code more readable, explain logic, or temporarily disable parts of the code. Java ignores comments during compilation—they do not affect how the program runs.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Why Use Comments?</h3>
          <ul class="list-disc ml-6">
            <li>To describe the purpose of the code</li>
            <li>To clarify complex logic</li>
            <li>To collaborate with other developers</li>
            <li>To temporarily disable code during debugging</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✍️ Types of Comments in Java</h3>
          <p>Java supports three types of comments:</p>
          <ol class="list-decimal ml-6">
            <li>Single-line Comments</li>
            <li>Multi-line Comments</li>
            <li>Documentation Comments</li>
          </ol>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">1️⃣ Single-line Comments</h4>
          <p>Used to comment one line of code or a short explanation.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>📌 Syntax:</b><br>
            <code>// This is a single-line comment</code>
            <br><br>
            <b>✅ Example:</b>
            <pre><code>int age = 25; // Store the user's age</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">2️⃣ Multi-line Comments</h4>
          <p>Used to comment multiple lines at once. Ideal for explaining blocks of logic or temporarily disabling sections of code.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>📌 Syntax:</b>
            <pre><code>/* 
   This is a multi-line comment.
   It spans multiple lines.
*/</code></pre>
            <b>✅ Example:</b>
            <pre><code>/* The following block checks
   if the user is an adult
*/
if (age >= 18) {
    System.out.println("Adult");
}</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">3️⃣ Documentation Comments (/** */)</h4>
          <p>Special comments used to generate Javadoc documentation. Placed before class, method, or field declarations.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>📌 Syntax:</b>
            <pre><code>/**
 * This method calculates the sum of two numbers.
 * @param a First number
 * @param b Second number
 * @return Sum of a and b
 */
public int sum(int a, int b) {
    return a + b;
}</code></pre>
            <b>💡 Tools like Javadoc can parse these comments to generate HTML documentation for APIs and libraries.</b>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚫 Avoid These Common Mistakes</h3>
          <ul class="list-disc ml-6">
            <li>❌ Using comments to explain obvious code:<br>
              <code>int count = 1; // Set count to 1</code> <span class="text-gray-500">← (Too obvious)</span>
            </li>
            <li>❌ Writing outdated or misleading comments</li>
            <li>✔ Always keep comments up-to-date with code changes</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Best Practices</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Tip</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Keep it clear</td>
                <td class="p-2">Comments should be short and precise</td>
              </tr>
              <tr>
                <td class="p-2">Stay relevant</td>
                <td class="p-2">Only comment complex or non-obvious logic</td>
              </tr>
              <tr>
                <td class="p-2">Don’t overuse</td>
                <td class="p-2">Avoid cluttering code with unnecessary comments</td>
              </tr>
              <tr>
                <td class="p-2">Use Javadoc</td>
                <td class="p-2">For reusable methods, classes, and APIs</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        },
      ],
    },

    {
      heading: "Display Statements in Java",
      subheadings: [
        {
          title: "Java Output Methods Explained",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">Display Statements in Java: <code>print()</code>, <code>println()</code>, and <code>printf()</code></h2>
          <p>
            In Java, display statements are used to show output to the console. These are often the first tools you'll use when writing a Java program, especially for debugging or user interaction.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🔹 Types of Display Statements</h2>
          <p>Java provides three main display methods:</p>
          <ol class="list-decimal ml-6">
            <li><code>System.out.println()</code></li>
            <li><code>System.out.print()</code></li>
            <li><code>System.out.printf()</code></li>
          </ol>
          <p>Let’s explore each one in detail.</p>
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-2">🖨️ <code>System.out.println()</code> — Line-by-Line Output</h2>
          <ul class="list-disc ml-6">
            <li>This method prints the provided message and then moves the cursor to the next line.</li>
            <li>It can also be used without any argument, which simply prints a new blank line.</li>
          </ul>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <strong>✅ Usage Example:</strong>
            <pre><code>System.out.println("Welcome to Java!");
System.out.println(); // prints a blank line
System.out.println("Let's begin.");</code></pre>
            <strong>📝 Output:</strong>
            <pre><code>Welcome to Java!

Let's begin.</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-2">🖨️ <code>System.out.print()</code> — Continuous Output</h2>
          <ul class="list-disc ml-6">
            <li>Similar to <code>println()</code>, but does <strong>not</strong> move to a new line after printing.</li>
            <li>Useful when you want to print multiple items on the same line.</li>
            <li>Requires an argument to print; cannot be used without parameters.</li>
          </ul>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <strong>✅ Usage Example:</strong>
            <pre><code>System.out.print("Processing");
System.out.print("...");
System.out.print("Done");</code></pre>
            <strong>📝 Output:</strong>
            <pre><code>Processing...Done</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-2">🧮 <code>System.out.printf()</code> — Formatted Output</h2>
          <ul class="list-disc ml-6">
            <li>Used for printing formatted text, similar to <code>printf</code> in C/C++.</li>
            <li>Supports format specifiers:</li>
            <ul class="list-circle ml-6">
              <li><code>%d</code> – integer</li>
              <li><code>%f</code> – floating point</li>
              <li><code>%s</code> – string</li>
              <li><code>%n</code> – new line (platform-independent)</li>
            </ul>
          </ul>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <strong>✅ Usage Example:</strong>
            <pre><code>int age = 30;
double marks = 89.55;
System.out.printf("Age: %d, Marks: %.1f%n", age, marks);</code></pre>
            <strong>📝 Output:</strong>
            <pre><code>Age: 30, Marks: 89.6</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-2">🔄 Key Differences Between <code>print()</code> and <code>println()</code></h2>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left"><code>println()</code></th>
                <th class="p-2 text-left"><code>print()</code></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Cursor Movement</td>
                <td class="p-2">Moves to the next line after output</td>
                <td class="p-2">Stays on the same line</td>
              </tr>
              <tr>
                <td class="p-2">Argument Requirement</td>
                <td class="p-2">Optional</td>
                <td class="p-2">Mandatory</td>
              </tr>
              <tr>
                <td class="p-2">Use Case</td>
                <td class="p-2">Line-by-line output</td>
                <td class="p-2">Concatenated output on same line</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-semibold mb-2">🧠 Quick Tip</h2>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            Use <code>println()</code> when you want your output clearly separated by lines. Use <code>print()</code> for inline results (e.g., progress dots). And use <code>printf()</code> when you need to format values cleanly (e.g., currency, decimals, tables).
          </div>
        </div>
      `,
        },
      ],
    },
    {
      heading: "Java Naming Conventions",
      subheadings: [
        {
          title: "What is Naming Conventions?",
          content: `
        <div class="mb-6">
          
          <p>
            Naming conventions in Java are a set of best practices that developers follow to make code more understandable, maintainable, and collaboration-friendly. While not strictly enforced by the compiler, following these conventions is a hallmark of professional coding.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">✅ Why Use Naming Conventions?</h2>
          <ul class="list-disc ml-6">
            <li>Improves readability and clarity.</li>
            <li>Ensures consistency across team projects.</li>
            <li>Helps others understand your code with minimal explanation.</li>
            <li>Aligns with industry standards and framework guidelines.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🧩 Common Naming Styles in Java</h2>
          <ol class="list-decimal ml-6">
            <li>
              <strong>PascalCase (UpperCamelCase)</strong>
              <ul class="list-disc ml-6">
                <li>Each word starts with a capital letter.</li>
                <li>No underscores or spaces.</li>
                <li>Used for: <b>Class names, Interface names, Enum types</b></li>
                <li><b>Example:</b> <code>StudentDetails</code>, <code>EmployeeInfo</code>, <code>UserProfile</code></li>
              </ul>
            </li>
            <li>
              <strong>camelCase (lowerCamelCase)</strong>
              <ul class="list-disc ml-6">
                <li>First word starts with a lowercase letter, subsequent words start with uppercase.</li>
                <li>No underscores or spaces.</li>
                <li>Used for: <b>Variable names, Method names</b></li>
                <li><b>Example:</b> <code>calculateSalary</code>, <code>totalMarks</code>, <code>getUserName</code></li>
              </ul>
            </li>
            <li>
              <strong>UPPER_CASE_WITH_UNDERSCORES</strong>
              <ul class="list-disc ml-6">
                <li>All letters are uppercase, words separated by underscores.</li>
                <li>Used for: <b>Constants, static final variables</b></li>
                <li><b>Example:</b> <code>MAX_USERS</code>, <code>PI_VALUE</code>, <code>DEFAULT_TIMEOUT</code></li>
              </ul>
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🔖 Naming Convention Table</h2>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Element</th>
                <th class="p-2 text-left">Convention</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Class / Interface</td>
                <td class="p-2">PascalCase</td>
                <td class="p-2"><code>StudentDetails</code></td>
              </tr>
              <tr>
                <td class="p-2">Method / Variable</td>
                <td class="p-2">camelCase</td>
                <td class="p-2"><code>calculateTotal()</code>, <code>priceAfterTax</code></td>
              </tr>
              <tr>
                <td class="p-2">Constant</td>
                <td class="p-2">UPPER_CASE_WITH_UNDERSCORES</td>
                <td class="p-2"><code>MAX_SPEED</code>, <code>API_KEY</code></td>
              </tr>
              <tr>
                <td class="p-2">Package Name</td>
                <td class="p-2">lowercase (dot-separated)</td>
                <td class="p-2"><code>com.company.projectname</code></td>
              </tr>
              <tr>
                <td class="p-2">Boolean Variable</td>
                <td class="p-2">Starts with is, has, can</td>
                <td class="p-2"><code>isAvailable</code>, <code>hasAccess</code>, <code>canLogin</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">📌 Best Practices Summary</h2>
          <ul class="list-disc ml-6">
            <li>✅ Use descriptive names that clearly indicate the purpose.</li>
            <li>✅ Avoid abbreviations unless they’re well-known (e.g., URL, API).</li>
            <li>❌ Don’t use spaces, hyphens, or special characters in names.</li>
            <li>✅ Stick to one naming convention per element — mixing styles can lead to confusion.</li>
            <li>✅ Make Boolean variable names self-explanatory by using verbs like <b>is</b>, <b>has</b>, <b>can</b>.</li>
          </ul>
        </div>
        <div class="mb-6">
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
            Following Java naming conventions is not just about style — it's about writing clean, readable, and maintainable code that others can understand at a glance. In large-scale projects or open-source contributions, these conventions become essential for seamless collaboration and code quality.
          </div>
        </div>
      `,
        },
      ],
    },
    {
      heading: "Variables in Java: Definition, Types, and Usage",
      subheadings: [
        {
          title: "",
          content: `
        <div class="mb-6">
          
          <p>
            In Java, a variable is a named memory location that stores data temporarily during program execution. It allows developers to manage, manipulate, and reuse values efficiently across different parts of a program.
          </p>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">📌 Key Characteristics of Variables</h2>
          <ul class="list-disc ml-6">
            <li>Every variable is associated with a name (identifier) that uniquely represents it in the program.</li>
            <li>To declare a variable, you must specify the data type of the value it will hold.</li>
            <li>Variables have:
              <ul class="list-circle ml-6">
                <li><b>Scope</b> – defines where the variable can be accessed.</li>
                <li><b>Lifetime</b> – determines how long the variable exists in memory.</li>
                <li><b>Mutability</b> – allows its value to be changed during execution.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🧱 Declaring and Initializing Variables</h2>
          <ol class="list-decimal ml-6">
            <li><b>Variable Declaration</b><br>
              <code>dataType variableName;</code>
            </li>
            <li><b>Variable Initialization</b><br>
              <code>variableName = value;</code>
            </li>
            <li><b>Declaration + Initialization</b><br>
              <code>dataType variableName = value;</code>
            </li>
          </ol>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <strong>✅ Example:</strong>
            <pre><code>int a;       // Declaration
a = 20;      // Initialization
int b = 30;  // Declaration and initialization
System.out.println(a + b); // Output: 50</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">🔄 Multiple Variable Declaration & Initialization</h2>
          <pre><code>int x, y, z;          // Declaration
x = y = z = 10;       // Same value for all
int a = 1, b = 2, c = 3; // Declaration with initialization</code></pre>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">✅ Benefits of Using Variables</h2>
          <ul class="list-disc ml-6">
            <li>Allows dynamic data storage and retrieval</li>
            <li>Simplifies computations and logic</li>
            <li>Makes code reusable and readable</li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">📚 Types of Variables in Java</h2>
          <p>Java variables can be classified in two ways:</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">A. Based on Data Type</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>Primitive Variables</b>
              <ul class="list-circle ml-6">
                <li>Store single, simple values.</li>
                <li>Data types include: <code>int</code>, <code>char</code>, <code>float</code>, <code>boolean</code>, etc.</li>
                <li>
                  <b>Example:</b>
                  <pre><code>int age = 25;
char grade = 'A';</code></pre>
                </li>
              </ul>
            </li>
            <li>
              <b>Non-Primitive Variables</b>
              <ul class="list-circle ml-6">
                <li>Store references to objects or complex structures.</li>
                <li>Includes: <code>String</code>, arrays, objects, etc.</li>
                <li>
                  <b>Example:</b>
                  <pre><code>String name = "Java";
int[] numbers = {1, 2, 3};</code></pre>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">B. Based on Scope (Visibility)</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>Local Variables</b>
              <ul class="list-circle ml-6">
                <li>Declared inside a method or block.</li>
                <li>Only accessible within that method/block.</li>
                <li>Not assigned default values.</li>
                <li>
                  <b>Example:</b>
                  <pre><code>void showMessage() {
    int count = 10; // local variable
    System.out.println(count);
}</code></pre>
                </li>
              </ul>
            </li>
            <li>
              <b>Instance Variables (Non-static)</b>
              <ul class="list-circle ml-6">
                <li>Declared outside any method but inside a class.</li>
                <li>Each object gets its own copy.</li>
                <li>Used when you want object-specific data.</li>
                <li>
                  <b>Example:</b>
                  <pre><code>class Employee {
    String name; // instance variable
}</code></pre>
                </li>
              </ul>
            </li>
            <li>
              <b>Static Variables</b>
              <ul class="list-circle ml-6">
                <li>Declared using the <code>static</code> keyword.</li>
                <li>Shared among all instances of a class.</li>
                <li>Memory allocated only once at class loading.</li>
                <li>
                  <b>Example:</b>
                  <pre><code>class Company {
    static String companyName = "TechCorp";
}</code></pre>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">📌 Summary Table</h2>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Scope</th>
                <th class="p-2 text-left">Stored In</th>
                <th class="p-2 text-left">Default Value</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Local</td>
                <td class="p-2">Inside methods/blocks</td>
                <td class="p-2">Stack memory</td>
                <td class="p-2">No</td>
                <td class="p-2"><code>int a = 5;</code> inside a method</td>
              </tr>
              <tr>
                <td class="p-2">Instance (Non-static)</td>
                <td class="p-2">Inside class</td>
                <td class="p-2">Heap memory</td>
                <td class="p-2">Yes</td>
                <td class="p-2"><code>String name;</code> in a class</td>
              </tr>
              <tr>
                <td class="p-2">Static</td>
                <td class="p-2">Inside class</td>
                <td class="p-2">Method area</td>
                <td class="p-2">Yes</td>
                <td class="p-2"><code>static int count;</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        },
      ],
    },
    {
      heading: "Data Types",
      subheadings: [
        {
          title: "",
          content: `
        <div class="mb-6">
         
          <p>
            In Java, data types define the kind of data a variable can hold. Choosing the right data type is essential for memory management, performance, and program logic.<br>
            Java supports two broad categories of data types:
          </p>
          <ul class="list-disc ml-6">
            <li><b>🔹 Primitive Data Types</b></li>
            <li><b>🔸 Non-Primitive (Reference) Data Types</b></li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 1. Primitive Data Types</h3>
          <p>
            Primitive types are predefined by the Java language. They represent simple, single-valued data and form the building blocks of data manipulation in Java. There are 8 primitive data types, grouped by the kind of values they store:
          </p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Category</th>
                <th class="p-2 text-left">Data Types</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Integer</td>
                <td class="p-2">byte, short, int, long</td>
              </tr>
              <tr>
                <td class="p-2">Floating-point</td>
                <td class="p-2">float, double</td>
              </tr>
              <tr>
                <td class="p-2">Character</td>
                <td class="p-2">char</td>
              </tr>
              <tr>
                <td class="p-2">Boolean</td>
                <td class="p-2">boolean</td>
              </tr>
            </tbody>
          </table>
          <h4 class="font-semibold mb-2">🧱 Key Characteristics:</h4>
          <ul class="list-disc ml-6">
            <li>Predefined by Java (not created by the user)</li>
            <li>Stored by value (not by reference)</li>
            <li>Efficient in memory and performance</li>
            <li>Cannot be null (they always have a default value)</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📏 Primitive Data Types: Size, Default Values & Literals</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">S.No</th>
                <th class="p-2 text-left">Literal Type</th>
                <th class="p-2 text-left">Data Type</th>
                <th class="p-2 text-left">Size</th>
                <th class="p-2 text-left">Default Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">1</td><td class="p-2">Integer</td><td class="p-2">byte</td><td class="p-2">1 byte (8 bits)</td><td class="p-2">0</td></tr>
              <tr><td class="p-2">2</td><td class="p-2">Integer</td><td class="p-2">short</td><td class="p-2">2 bytes (16 bits)</td><td class="p-2">0</td></tr>
              <tr><td class="p-2">3</td><td class="p-2">Integer</td><td class="p-2">int</td><td class="p-2">4 bytes (32 bits)</td><td class="p-2">0</td></tr>
              <tr><td class="p-2">4</td><td class="p-2">Integer</td><td class="p-2">long</td><td class="p-2">8 bytes (64 bits)</td><td class="p-2">0L</td></tr>
              <tr><td class="p-2">5</td><td class="p-2">Floating Point</td><td class="p-2">float</td><td class="p-2">4 bytes (32 bits)</td><td class="p-2">0.0f</td></tr>
              <tr><td class="p-2">6</td><td class="p-2">Floating Point</td><td class="p-2">double</td><td class="p-2">8 bytes (64 bits)</td><td class="p-2">0.0</td></tr>
              <tr><td class="p-2">7</td><td class="p-2">Character</td><td class="p-2">char</td><td class="p-2">2 bytes (16 bits)</td><td class="p-2">'\\u0000'</td></tr>
              <tr><td class="p-2">8</td><td class="p-2">Boolean</td><td class="p-2">boolean</td><td class="p-2">1 bit</td><td class="p-2">false</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📐 How to Calculate the Range of Integer Data Types?</h3>
          <p>
            Java uses 2's complement representation for signed numeric values. Here's the formula:
          </p>
          <ul class="list-disc ml-6">
            <li><b>Maximum Value:</b> 2<sup>n-1</sup> - 1</li>
            <li><b>Minimum Value:</b> -2<sup>n-1</sup></li>
            <li>(n = number of bits excluding the sign bit)</li>
          </ul>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🔍 Example: Byte Range</b><br>
            Total bits: 8 → 1 bit for sign, 7 for data<br>
            Max: 2<sup>7</sup> - 1 = 127<br>
            Min: -2<sup>7</sup> = -128<br>
            <b>✅ Range of byte:</b> -128 to 127
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📊 Other Ranges</h3>
          <ul class="list-disc ml-6">
            <li><b>Short (16 bits = 2 bytes):</b> Max: 32,767, Min: -32,768</li>
            <li><b>Int (32 bits = 4 bytes):</b> Max: 2,147,483,647, Min: -2,147,483,648</li>
            <li><b>Long (64 bits = 8 bytes):</b> Max: 9,223,372,036,854,775,807, Min: -9,223,372,036,854,775,808</li>
            <li><b>Char (Unsigned 16 bits):</b> Can store Unicode characters from 0 to 65,535<br>
              <b>✅ Range:</b> '\\u0000' to '\\uffff'
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔸 2. Non-Primitive (Reference) Data Types</h3>
          <p>
            Non-primitive data types refer to objects and arrays, and are used to store multiple values or complex data structures.
          </p>
          <h4 class="font-semibold mb-2">📌 Characteristics:</h4>
          <ul class="list-disc ml-6">
            <li>User-defined or built-in classes (like String, Array, Object)</li>
            <li>Stored by reference (memory address)</li>
            <li>Can be assigned a null value (unlike primitives)</li>
            <li>Typically more flexible but consume more memory</li>
          </ul>
          <h4 class="font-semibold mb-2">📚 Examples:</h4>
          <ul class="list-disc ml-6">
            <li>String</li>
            <li>Arrays</li>
            <li>Class & Objects</li>
            <li>Interfaces</li>
            <li>Collections (List, Set, Map...)</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Example</th>
                <th class="p-2 text-left">Can Be Null</th>
                <th class="p-2 text-left">Stored By</th>
                <th class="p-2 text-left">Default Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Primitive</td>
                <td class="p-2"><code>int, boolean</code></td>
                <td class="p-2">❌ No</td>
                <td class="p-2">Value</td>
                <td class="p-2">0, false</td>
              </tr>
              <tr>
                <td class="p-2">Non-Primitive</td>
                <td class="p-2"><code>String, Array</code></td>
                <td class="p-2">✅ Yes</td>
                <td class="p-2">Reference</td>
                <td class="p-2">null</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📘 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Use primitive types for performance-critical applications.</li>
            <li>Use non-primitive types when you need complex data manipulation, nullability, or object-oriented features.</li>
            <li>Choose the smallest possible data type suitable for your data to optimize memory.</li>
          </ul>
        </div>
      `,
        },
      ],
    },

    {
      heading: "Java Operators",
      subheadings: [
        {
          title: "Java Operators Explained",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">⚙️ Java Operators</h2>
          <p>
            Operators in Java are special symbols used to perform operations on variables and values. They are essential building blocks for forming logic, performing calculations, and making decisions in Java programs.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📚 What is an Operator?</h3>
          <p>
            An operator takes one or more operands (variables or values) and performs a specific operation on them. For example:
          </p>
          <pre><code>int sum = 10 + 5;  // '+' is the operator, 10 and 5 are operands</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧮 Types of Operators in Java</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Category</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Arithmetic Operators</td><td class="p-2">Performs basic mathematical operations</td></tr>
              <tr><td class="p-2">Relational Operators</td><td class="p-2">Compares two values</td></tr>
              <tr><td class="p-2">Logical Operators</td><td class="p-2">Combines multiple boolean expressions</td></tr>
              <tr><td class="p-2">Assignment Operators</td><td class="p-2">Assigns values to variables</td></tr>
              <tr><td class="p-2">Unary Operators</td><td class="p-2">Works with a single operand</td></tr>
              <tr><td class="p-2">Bitwise Operators</td><td class="p-2">Works on bits and performs bit-level ops</td></tr>
              <tr><td class="p-2">Ternary Operator</td><td class="p-2">Short-hand for if-else</td></tr>
              <tr><td class="p-2">Shift Operators</td><td class="p-2">Shifts bits left or right</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">➕ 1. Arithmetic Operators</h4>
          <p>Used for basic math operations.</p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Operator</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example (a=10, b=3)</th>
                <th class="p-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">+</td><td class="p-2">Addition</td><td class="p-2">a + b</td><td class="p-2">13</td></tr>
              <tr><td class="p-2">-</td><td class="p-2">Subtraction</td><td class="p-2">a - b</td><td class="p-2">7</td></tr>
              <tr><td class="p-2">*</td><td class="p-2">Multiplication</td><td class="p-2">a * b</td><td class="p-2">30</td></tr>
              <tr><td class="p-2">/</td><td class="p-2">Division</td><td class="p-2">a / b</td><td class="p-2">3</td></tr>
              <tr><td class="p-2">%</td><td class="p-2">Modulus (Remainder)</td><td class="p-2">a % b</td><td class="p-2">1</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">🔍 2. Relational (Comparison) Operators</h4>
          <p>Used to compare two values. Returns a boolean result (<code>true</code> or <code>false</code>).</p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Operator</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example (a=10, b=3)</th>
                <th class="p-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">==</td><td class="p-2">Equal to</td><td class="p-2">a == b</td><td class="p-2">false</td></tr>
              <tr><td class="p-2">!=</td><td class="p-2">Not equal to</td><td class="p-2">a != b</td><td class="p-2">true</td></tr>
              <tr><td class="p-2">&gt;</td><td class="p-2">Greater than</td><td class="p-2">a &gt; b</td><td class="p-2">true</td></tr>
              <tr><td class="p-2">&lt;</td><td class="p-2">Less than</td><td class="p-2">a &lt; b</td><td class="p-2">false</td></tr>
              <tr><td class="p-2">&gt;=</td><td class="p-2">Greater than or equal</td><td class="p-2">a &gt;= b</td><td class="p-2">true</td></tr>
              <tr><td class="p-2">&lt;=</td><td class="p-2">Less than or equal</td><td class="p-2">a &lt;= b</td><td class="p-2">false</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">🧠 3. Logical Operators</h4>
          <p>Used to combine multiple conditions (mostly in decision-making structures).</p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Operator</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
                <th class="p-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">&amp;&amp;</td><td class="p-2">Logical AND</td><td class="p-2">(a &gt; 5 &amp;&amp; b &lt; 5)</td><td class="p-2">true</td></tr>
              <tr><td class="p-2">||</td><td class="p-2">Logical OR</td><td class="p-2">(a &gt; 5 || b &gt; 5)</td><td class="p-2">true</td></tr>
              <tr><td class="p-2">!</td><td class="p-2">Logical NOT</td><td class="p-2">!(a &gt; b)</td><td class="p-2">false</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">🖋️ 4. Assignment Operators</h4>
          <p>Used to assign values to variables.</p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Operator</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
                <th class="p-2 text-left">Equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">=</td><td class="p-2">Assign value</td><td class="p-2">a = 10</td><td class="p-2">—</td></tr>
              <tr><td class="p-2">+=</td><td class="p-2">Add & assign</td><td class="p-2">a += 5</td><td class="p-2">a = a + 5</td></tr>
              <tr><td class="p-2">-=</td><td class="p-2">Subtract & assign</td><td class="p-2">a -= 3</td><td class="p-2">a = a - 3</td></tr>
              <tr><td class="p-2">*=</td><td class="p-2">Multiply & assign</td><td class="p-2">a *= 2</td><td class="p-2">a = a * 2</td></tr>
              <tr><td class="p-2">/=</td><td class="p-2">Divide & assign</td><td class="p-2">a /= 2</td><td class="p-2">a = a / 2</td></tr>
              <tr><td class="p-2">%=</td><td class="p-2">Modulus & assign</td><td class="p-2">a %= 3</td><td class="p-2">a = a % 3</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">🔁 5. Unary Operators</h4>
          <p>Works with a single operand.</p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Operator</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
                <th class="p-2 text-left">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">+</td><td class="p-2">Unary plus (positive)</td><td class="p-2">+a</td><td class="p-2">10</td></tr>
              <tr><td class="p-2">-</td><td class="p-2">Unary minus (negation)</td><td class="p-2">-a</td><td class="p-2">-10</td></tr>
              <tr><td class="p-2">++</td><td class="p-2">Increment (pre/post)</td><td class="p-2">++a / a++</td><td class="p-2">11</td></tr>
              <tr><td class="p-2">--</td><td class="p-2">Decrement (pre/post)</td><td class="p-2">--a / a--</td><td class="p-2">9</td></tr>
              <tr><td class="p-2">!</td><td class="p-2">Logical complement</td><td class="p-2">!true</td><td class="p-2">false</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">🧩 6. Ternary Operator (Conditional Operator)</h4>
          <p>The only operator that takes three operands. A compact version of if-else.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>📌 Syntax:</b>
            <pre><code>variable = (condition) ? value_if_true : value_if_false;</code></pre>
            <b>✅ Example:</b>
            <pre><code>int max = (a > b) ? a : b;</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">🧮 7. Bitwise Operators</h4>
          <p>Used to perform operations at the bit level.</p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Operator</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">&amp;</td><td class="p-2">Bitwise AND</td><td class="p-2">a &amp; b</td></tr>
              <tr><td class="p-2">|</td><td class="p-2">Bitwise OR</td><td class="p-2">a | b</td></tr>
              <tr><td class="p-2">^</td><td class="p-2">Bitwise XOR</td><td class="p-2">a ^ b</td></tr>
              <tr><td class="p-2">~</td><td class="p-2">Bitwise Complement</td><td class="p-2">~a</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">⏩ 8. Shift Operators</h4>
          <p>Used to shift bits left or right.</p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Operator</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">&lt;&lt;</td><td class="p-2">Left shift</td><td class="p-2">a &lt;&lt; 2</td></tr>
              <tr><td class="p-2">&gt;&gt;</td><td class="p-2">Right shift</td><td class="p-2">a &gt;&gt; 2</td></tr>
              <tr><td class="p-2">&gt;&gt;&gt;</td><td class="p-2">Unsigned right shift</td><td class="p-2">a &gt;&gt;&gt; 2</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Use operators carefully in conditional logic.</li>
            <li>Prefer ternary operators for short if-else conditions.</li>
            <li>Avoid complex chained expressions using multiple operators unless well documented.</li>
          </ul>
        </div>
      `,
        },
      ],
    },

    {
      heading: "Typecasting in Java",
      subheadings: [
        {
          title: "Understanding Typecasting",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">🌀 Typecasting in Java</h2>
          <p>
            Typecasting is the process of converting a value from one data type to another. It is used when we want to assign a value of one data type to another type. Java supports two types of typecasting:
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🟢 Types of Typecasting</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Widening (Implicit)</td>
                <td class="p-2">Automatic conversion of a smaller data type to a larger data type.</td>
              </tr>
              <tr>
                <td class="p-2">Narrowing (Explicit)</td>
                <td class="p-2">Manual conversion of a larger data type to a smaller data type. Requires typecast syntax.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ Widening Typecasting (Automatic)</h3>
          <ul class="list-disc ml-6">
            <li>Also known as upcasting.</li>
            <li>Handled internally by Java — no data loss.</li>
            <li>Converts smaller type → larger type.</li>
            <li>Example: <code>int → long → float → double</code></li>
          </ul>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>📘 Syntax:</b><br>
            <code>&lt;larger_data_type&gt; variable = &lt;smaller_data_type_value&gt;;</code>
            <br><br>
            <b>✅ Example:</b>
            <pre><code>int num = 100;
long bigNum = num;     // int to long
float decimal = bigNum; // long to float</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">⚠️ Narrowing Typecasting (Manual)</h3>
          <ul class="list-disc ml-6">
            <li>Also called downcasting.</li>
            <li>Must be done explicitly by the programmer.</li>
            <li>There is a possibility of data loss or precision loss.</li>
            <li>Converts larger type → smaller type.</li>
            <li>Example: <code>double → float → long → int → short → byte</code></li>
          </ul>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>📘 Syntax:</b><br>
            <code>&lt;smaller_data_type&gt; variable = (&lt;smaller_data_type&gt;) &lt;larger_data_type_value&gt;;</code>
            <br><br>
            <b>⚠️ Example:</b>
            <pre><code>double pi = 3.14159;
int approx = (int) pi; // double to int — decimal part is lost
System.out.println(approx); // Output: 3</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">🔄 Typecasting Between Primitive Data Types</h3>
          <div class="overflow-x-auto my-4">
            <table class="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead class="bg-gray-100">
                <tr>
                  <th class="p-2 text-left">From \\ To</th>
                  <th class="p-2 text-left">byte</th>
                  <th class="p-2 text-left">short</th>
                  <th class="p-2 text-left">int</th>
                  <th class="p-2 text-left">long</th>
                  <th class="p-2 text-left">float</th>
                  <th class="p-2 text-left">double</th>
                  <th class="p-2 text-left">char</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2">byte</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">❌</td>
                </tr>
                <tr>
                  <td class="p-2">short</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">❌</td>
                </tr>
                <tr>
                  <td class="p-2">int</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                </tr>
                <tr>
                  <td class="p-2">long</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">❌</td>
                </tr>
                <tr>
                  <td class="p-2">float</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">❌</td>
                </tr>
                <tr>
                  <td class="p-2">double</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">❌</td>
                </tr>
                <tr>
                  <td class="p-2">char</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">❌</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                  <td class="p-2">✔️</td>
                </tr>
              </tbody>
            </table>
            <div class="text-xs mt-2">
              ✔️ = Possible<br>
              ❌ = Not directly possible or unsafe
            </div>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">💡 Real-World Use Case of Typecasting</h3>
          <pre><code>double userInput = 56.98;
int bill = (int) userInput; // Narrowing: decimal truncated
System.out.println("Bill to be paid: " + bill); // Output: Bill to be paid: 56
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">🚨 Typecasting and Data Loss</h3>
          <ul class="list-disc ml-6">
            <li>Truncation (e.g., 3.99 becomes 3)</li>
            <li>Overflow or underflow (value wraps around if out of range)</li>
          </ul>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>Example:</b>
            <pre><code>int value = 130;
byte result = (byte) value; // value exceeds byte range (-128 to 127)
System.out.println(result); // Output: -126 (Overflow occurred)
</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔚 Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Typecasting Type</th>
                <th class="p-2 text-left">Performed By</th>
                <th class="p-2 text-left">Data Loss Possible</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Widening</td>
                <td class="p-2">Java (Implicit)</td>
                <td class="p-2">No</td>
                <td class="p-2"><code>int → long</code></td>
              </tr>
              <tr>
                <td class="p-2">Narrowing</td>
                <td class="p-2">Developer (Manual)</td>
                <td class="p-2">Yes</td>
                <td class="p-2"><code>double → int, int → byte</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        },
      ],
    },

    {
      heading: "Flow Control in Java",
      subheadings: [
        {
          title: "",
          content: `
        <div class="mb-6">
        
          <p>
            Flow control determines the order in which statements are executed in a program.<br>
            Java provides several control flow statements to make decisions, repeat tasks, and jump between code blocks. These allow developers to write dynamic, interactive, and logical programs.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧭 Types of Flow Control Statements</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Category</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Decision-making</td>
                <td class="p-2">Executes certain parts of code based on conditions</td>
                <td class="p-2"><code>if, if-else, switch</code></td>
              </tr>
              <tr>
                <td class="p-2">Looping</td>
                <td class="p-2">Repeats a block of code multiple times</td>
                <td class="p-2"><code>for, while, do-while</code></td>
              </tr>
              <tr>
                <td class="p-2">Branching</td>
                <td class="p-2">Alters the flow unconditionally or prematurely</td>
                <td class="p-2"><code>break, continue, return</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ 1. Decision-Making Statements</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>if Statement</b><br>
              Executes a block of code only if a specified condition is true.
              <pre><code>if (marks >= 40) {
    System.out.println("You passed!");
}</code></pre>
            </li>
            <li>
              <b>if-else Statement</b><br>
              Adds an alternative path if the condition is false.
              <pre><code>if (marks >= 40) {
    System.out.println("You passed!");
} else {
    System.out.println("You failed.");
}</code></pre>
            </li>
            <li>
              <b>if-else if Ladder</b><br>
              Checks multiple conditions in a sequence.
              <pre><code>if (marks >= 90) {
    System.out.println("Grade A");
} else if (marks >= 75) {
    System.out.println("Grade B");
} else {
    System.out.println("Needs Improvement");
}</code></pre>
            </li>
            <li>
              <b>switch Statement</b><br>
              Simplifies complex conditional checks based on a single variable.
              <pre><code>switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Invalid day");
}</code></pre>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 2. Looping Statements</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>for Loop</b><br>
              Best used when the number of iterations is known.
              <pre><code>for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}</code></pre>
            </li>
            <li>
              <b>while Loop</b><br>
              Used when the number of iterations is not known in advance.
              <pre><code>int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}</code></pre>
            </li>
            <li>
              <b>do-while Loop</b><br>
              Executes the code at least once, then checks the condition.
              <pre><code>int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);</code></pre>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔃 3. Branching Statements</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>break</b><br>
              Terminates a loop or switch statement prematurely.
              <pre><code>for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    System.out.println(i);
}</code></pre>
            </li>
            <li>
              <b>continue</b><br>
              Skips the current iteration and moves to the next one.
              <pre><code>for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    System.out.println(i);
}</code></pre>
            </li>
            <li>
              <b>return</b><br>
              Exits from the current method and optionally returns a value.
              <pre><code>public int square(int num) {
    return num * num;
}</code></pre>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Statement Type</th>
                <th class="p-2 text-left">Keyword(s)</th>
                <th class="p-2 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Decision</td>
                <td class="p-2"><code>if, if-else, switch</code></td>
                <td class="p-2">Execute code based on condition</td>
              </tr>
              <tr>
                <td class="p-2">Looping</td>
                <td class="p-2"><code>for, while, do-while</code></td>
                <td class="p-2">Repeat tasks based on a condition</td>
              </tr>
              <tr>
                <td class="p-2">Branching</td>
                <td class="p-2"><code>break, continue, return</code></td>
                <td class="p-2">Interrupt or exit flow as needed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Use <code>switch</code> when comparing a single variable to many values.</li>
            <li>Avoid infinite loops: always ensure a loop exit condition is present.</li>
            <li>Use <code>break</code> and <code>continue</code> sparingly — overuse can reduce readability.</li>
            <li>Prefer <code>for</code> loops for counting and <code>while</code> for condition-based loops.</li>
          </ul>
        </div>
      `,
        },
      ],
    },

    {
      heading: "Conditional Statements in Java",
      subheadings: [
        {
          title: "Java Conditional Statements Explained",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">🔀 Conditional Statements in Java</h2>
          <p>
            Conditional statements are the decision-making tools in Java. They allow the program to evaluate conditions and execute specific blocks of code based on whether the condition evaluates to <b>true</b> or <b>false</b>.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Key Points</h3>
          <ul class="list-disc ml-6">
            <li>Conditional statements enable the program to respond to different situations.</li>
            <li>Java supports: <b>if</b>, <b>if-else</b>, <b>if-else-if</b>, <b>switch-case</b>.</li>
            <li>These statements are critical for flow control and logic branching in applications.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Types of Conditional Statements</h3>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">1️⃣ if Statement</h4>
          <p>The <b>if</b> statement is the most basic decision-making statement.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🧠 Syntax:</b>
            <pre><code>if (condition) {
    // Code block to execute if condition is true
}</code></pre>
            <b>💡 Example:</b>
            <pre><code>int age = 20;
if (age >= 18) {
    System.out.println("You are eligible to vote.");
}</code></pre>
            <b>📌 Note:</b> If the condition is false, the code inside the block is skipped.
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">2️⃣ if-else Statement</h4>
          <p>Used when you want to execute one block if the condition is true, and another if it’s false.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🧠 Syntax:</b>
            <pre><code>if (condition) {
    // Code when condition is true
} else {
    // Code when condition is false
}</code></pre>
            <b>💡 Example:</b>
            <pre><code>int number = 5;
if (number % 2 == 0) {
    System.out.println("Even number");
} else {
    System.out.println("Odd number");
}</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">3️⃣ if-else-if Ladder</h4>
          <p>When you need to test multiple conditions sequentially, use the ladder format.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🧠 Syntax:</b>
            <pre><code>if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else if (condition3) {
    // Code if condition3 is true
} else {
    // Default code if none match
}</code></pre>
            <b>💡 Example:</b>
            <pre><code>int marks = 76;
if (marks >= 90) {
    System.out.println("Grade A");
} else if (marks >= 75) {
    System.out.println("Grade B");
} else if (marks >= 60) {
    System.out.println("Grade C");
} else {
    System.out.println("Grade D");
}</code></pre>
            <b>📌 Note:</b> Only the first matching condition's block is executed.
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">4️⃣ switch Statement</h4>
          <p>The <b>switch</b> statement is used for comparing a single value against multiple constants. It provides a cleaner alternative to long if-else-if ladders.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🧠 Syntax:</b>
            <pre><code>switch (expression) {
    case value1:
        // Code block for value1
        break;
    case value2:
        // Code block for value2
        break;
    ...
    default:
        // Default code block if no cases match
}</code></pre>
            <b>💡 Example:</b>
            <pre><code>int day = 3;
switch (day) {
    case 1: System.out.println("Sunday"); break;
    case 2: System.out.println("Monday"); break;
    case 3: System.out.println("Tuesday"); break;
    default: System.out.println("Invalid Day");
}</code></pre>
            <b>📌 Key Notes:</b>
            <ul class="list-disc ml-6">
              <li><b>break</b> stops further case evaluation.</li>
              <li><b>default</b> is optional but recommended.</li>
              <li>Valid data types in switch: <code>byte</code>, <code>short</code>, <code>int</code>, <code>char</code>, <code>String</code>, <code>enum</code> (not <code>boolean</code>, <code>long</code>, <code>float</code>, <code>double</code>).</li>
            </ul>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧾 Comparison Table: if-else vs switch</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">if-else</th>
                <th class="p-2 text-left">switch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Expression Type</td>
                <td class="p-2">Boolean expressions</td>
                <td class="p-2">Single variable with fixed values</td>
              </tr>
              <tr>
                <td class="p-2">Range Support</td>
                <td class="p-2">Can handle ranges and complex logic</td>
                <td class="p-2">Limited to exact matches</td>
              </tr>
              <tr>
                <td class="p-2">Use Case</td>
                <td class="p-2">Dynamic and complex comparisons</td>
                <td class="p-2">Simple equality checks</td>
              </tr>
              <tr>
                <td class="p-2">Data Types</td>
                <td class="p-2">Any type that results in true/false</td>
                <td class="p-2">int, char, String, enum</td>
              </tr>
              <tr>
                <td class="p-2">Performance</td>
                <td class="p-2">Slightly slower in large chains</td>
                <td class="p-2">Faster for large fixed sets</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li><b>Use if-else for:</b>
              <ul class="list-circle ml-6">
                <li>Ranges (e.g., <code>if (age > 18 && age < 60)</code>)</li>
                <li>Complex conditions (e.g., <code>if (isLoggedIn && isAdmin)</code>)</li>
              </ul>
            </li>
            <li><b>Use switch when:</b>
              <ul class="list-circle ml-6">
                <li>Checking equality of a single variable</li>
                <li>There are multiple distinct constant values</li>
              </ul>
            </li>
            <li><b>Always:</b>
              <ul class="list-circle ml-6">
                <li>Use <code>{}</code> braces to avoid bugs in single-line blocks</li>
                <li>Include <code>default</code> in switch to handle unexpected input</li>
                <li>Avoid deep nesting — use methods for clarity</li>
              </ul>
            </li>
          </ul>
        </div>
      `,
        },
      ],
    },

    {
      heading: "Looping Statements in Java",
      subheadings: [
        {
          title: "Java Loop Types and Usage",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">🔁 Looping Statements in Java</h2>
          <p>
            Loops allow you to repeat a block of code multiple times, making your programs efficient, concise, and dynamic. Instead of writing repetitive code, loops help automate repetitive tasks based on a condition.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Key Concepts</h3>
          <ul class="list-disc ml-6">
            <li>Loops continue execution as long as the specified condition remains true.</li>
            <li>Once the condition becomes false, the loop terminates.</li>
            <li>Java provides four primary types of loops:</li>
            <ol class="list-decimal ml-6">
              <li>for</li>
              <li>while</li>
              <li>do-while</li>
              <li>Enhanced for-each (used for arrays/collections)</li>
            </ol>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔂 Types of Loops</h3>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">1️⃣ for Loop</h4>
          <p>The most common loop when the number of iterations is known.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🧠 Syntax:</b>
            <pre><code>for (initialization; condition; update) {
    // Code block to be executed
}</code></pre>
            <b>💡 Example:</b>
            <pre><code>for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}</code></pre>
            <b>📌 Flow:</b>
            <ol class="list-decimal ml-6">
              <li>Initialize variable i = 1</li>
              <li>Check i <= 5</li>
              <li>Execute block</li>
              <li>Increment i++</li>
              <li>Repeat until condition fails</li>
            </ol>
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">2️⃣ while Loop</h4>
          <p>Best used when the number of iterations is not known in advance.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🧠 Syntax:</b>
            <pre><code>while (condition) {
    // Code block to be executed
}</code></pre>
            <b>💡 Example:</b>
            <pre><code>int i = 1;
while (i <= 3) {
    System.out.println("Welcome!");
    i++;
}</code></pre>
            <b>📌 Note:</b> The condition is checked before each iteration.
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">3️⃣ do-while Loop</h4>
          <p>This loop ensures the block is executed at least once, even if the condition is false on the first check.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🧠 Syntax:</b>
            <pre><code>do {
    // Code block to be executed
} while (condition);</code></pre>
            <b>💡 Example:</b>
            <pre><code>int i = 10;
do {
    System.out.println("Number: " + i);
    i++;
} while (i < 10);</code></pre>
            <b>📌 Note:</b> This will print once even though i &lt; 10 is false.
          </div>
        </div>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">4️⃣ Enhanced for-each Loop</h4>
          <p>Used for iterating through arrays or collections without using an index.</p>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🧠 Syntax:</b>
            <pre><code>for (dataType item : collection) {
    // Access each item directly
}</code></pre>
            <b>💡 Example:</b>
            <pre><code>int[] numbers = {10, 20, 30};
for (int num : numbers) {
    System.out.println(num);
}</code></pre>
            <b>📌 Use Case:</b> Cleaner, simpler, and safer when you just need to access items.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Control Statements in Loops</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Statement</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">break</td>
                <td class="p-2">Exits the loop immediately</td>
              </tr>
              <tr>
                <td class="p-2">continue</td>
                <td class="p-2">Skips the current iteration and goes to the next</td>
              </tr>
              <tr>
                <td class="p-2">return</td>
                <td class="p-2">Exits from the current method</td>
              </tr>
            </tbody>
          </table>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>💡 Example with continue:</b>
            <pre><code>for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    System.out.println(i);
}
// Output: 1 2 4 5</code></pre>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧾 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Loop Type</th>
                <th class="p-2 text-left">Condition Check</th>
                <th class="p-2 text-left">Use Case</th>
                <th class="p-2 text-left">Executes At Least Once?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">for</td>
                <td class="p-2">Before</td>
                <td class="p-2">Known iteration count</td>
                <td class="p-2">❌</td>
              </tr>
              <tr>
                <td class="p-2">while</td>
                <td class="p-2">Before</td>
                <td class="p-2">Unknown iteration count</td>
                <td class="p-2">❌</td>
              </tr>
              <tr>
                <td class="p-2">do-while</td>
                <td class="p-2">After</td>
                <td class="p-2">Must run at least once</td>
                <td class="p-2">✅</td>
              </tr>
              <tr>
                <td class="p-2">for-each</td>
                <td class="p-2">Internal</td>
                <td class="p-2">Arrays/Collections</td>
                <td class="p-2">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Always initialize loop control variables properly</li>
            <li>Ensure the loop condition will eventually become false</li>
            <li>Avoid infinite loops unless required (<code>while(true)</code> with exit condition)</li>
            <li>Prefer for-each for collections to avoid index errors</li>
            <li>Keep loop logic simple and concise — extract into methods if complex</li>
          </ul>
        </div>
      `,
        },
      ],
    },

    /*...*/
    {
      heading: "Java Methods",
      subheadings: [
        {
          title: "🔹What is Methods in Java?",
          content: `
        <div class="mb-6">
                   <p>
            A <b>method</b> in Java is a block of code designed to perform a specific task. It improves readability, reusability, modularity, and testability of code.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Why Use Methods?</h3>
          <ul class="list-disc ml-6">
            <li>✅ Avoids code duplication</li>
            <li>✅ Improves modularity and structure</li>
            <li>✅ Makes code easier to read, debug, and test</li>
            <li>✅ Encourages reuse of common logic</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Syntax</h3>
          <pre><code>&lt;access_modifier&gt; &lt;return_type&gt; &lt;method_name&gt;(&lt;parameter_list&gt;) {
    // Method body
}</code></pre>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Part</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">access_modifier</td><td class="p-2">public, private, protected, or default (package-level)</td></tr>
              <tr><td class="p-2">return_type</td><td class="p-2">Type of value returned; void if nothing is returned</td></tr>
              <tr><td class="p-2">method_name</td><td class="p-2">Identifier for the method (follows camelCase naming)</td></tr>
              <tr><td class="p-2">parameter_list</td><td class="p-2">Comma-separated inputs with types</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔸 Types of Methods</h3>
          <h4 class="font-semibold mb-2">1. Predefined vs User-defined</h4>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Predefined</td><td class="p-2">Built-in methods in Java (e.g., <code>System.out.println()</code>)</td></tr>
              <tr><td class="p-2">User-defined</td><td class="p-2">Created by the developer for specific logic</td></tr>
            </tbody>
          </table>
          <pre><code>// Predefined
System.out.println("Built-in method");

// User-defined
void greetUser() {
    System.out.println("Welcome user!");
}
</code></pre>
          <h4 class="font-semibold mb-2 mt-4">2. Static vs Non-Static</h4>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Static</td><td class="p-2">Belongs to the class; called using <code>ClassName.methodName()</code></td></tr>
              <tr><td class="p-2">Non-static</td><td class="p-2">Belongs to object; requires object creation to invoke</td></tr>
            </tbody>
          </table>
          <pre><code>// Static Method
static void showStatic() {
    System.out.println("Static method");
}

// Non-Static Method
void showInstance() {
    System.out.println("Instance method");
}
</code></pre>
          <h4 class="font-semibold mb-2 mt-4">3. Parameterized vs Non-Parameterized</h4>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Non-Parameterized</td><td class="p-2">No inputs</td></tr>
              <tr><td class="p-2">Parameterized</td><td class="p-2">Accepts one or more arguments</td></tr>
            </tbody>
          </table>
          <pre><code>void display() {
    System.out.println("No parameters");
}

void displayMessage(String msg) {
    System.out.println(msg);
}
</code></pre>
          <h4 class="font-semibold mb-2 mt-4">4. Void vs Value-Returning</h4>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Void</td><td class="p-2">Does not return a value</td></tr>
              <tr><td class="p-2">Return-Type</td><td class="p-2">Returns a value using the return statement</td></tr>
            </tbody>
          </table>
          <pre><code>void sayHello() {
    System.out.println("Hello!");
}

int add(int a, int b) {
    return a + b;
}
</code></pre>
          <h4 class="font-semibold mb-2 mt-4">5. Recursive vs Non-Recursive</h4>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Recursive</td><td class="p-2">Method calls itself</td></tr>
              <tr><td class="p-2">Non-Recursive</td><td class="p-2">Executes once without self-invocation</td></tr>
            </tbody>
          </table>
          <pre><code>// Recursive Example
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
</code></pre>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>✅ Recursion (Notes):</b>
            <ul class="list-disc ml-6">
              <li>Used when a problem can be divided into smaller sub-problems.</li>
              <li>Requires a base case to prevent infinite recursion.</li>
              <li>Can be memory-intensive, so avoid unnecessary recursion.</li>
            </ul>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚙️ Method Execution Flow</h3>
          <pre><code>public class Test {
    public static void main(String[] args) {
        display(); // Method call
    }

    static void display() {
        System.out.println("Inside method");
    }
}</code></pre>
          <ul class="list-disc ml-6">
            <li><code>main()</code> method is the entry point.</li>
            <li>Control jumps to the called method.</li>
            <li>After execution, it returns back to the caller.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Control Transfer in Methods</h3>
          <ul class="list-disc ml-6">
            <li><b>Call:</b> Transfers control to the method.</li>
            <li><b>Return:</b> Brings control back to the caller.</li>
            <li><b>Method chaining:</b> Calling a method from the return of another.<br>
              <code>int result = compute().trim().length();</code>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Parameter Passing Mechanism (Call by Value)</h3>
          <ul class="list-disc ml-6">
            <li>Java uses Call by Value (i.e., copies of variables are passed).</li>
            <li>Original variables remain unaffected by method changes.</li>
          </ul>
          <pre><code>void change(int x) {
    x = 100; // Won’t affect original
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🆚 Static vs Non-Static (In Depth)</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Static Method</th>
                <th class="p-2 text-left">Non-Static Method</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Belongs to</td><td class="p-2">Class</td><td class="p-2">Object</td></tr>
              <tr><td class="p-2">Memory</td><td class="p-2">Allocated once at class load time</td><td class="p-2">Allocated when object is created</td></tr>
              <tr><td class="p-2">Access</td><td class="p-2">Can access only static members</td><td class="p-2">Can access both static and non-static</td></tr>
              <tr><td class="p-2">Invocation</td><td class="p-2">ClassName.methodName()</td><td class="p-2">object.methodName()</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧩 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Criteria</th>
                <th class="p-2 text-left">Types</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Definition-based</td><td class="p-2">Predefined, User-defined</td></tr>
              <tr><td class="p-2">Access-based</td><td class="p-2">Static, Non-Static</td></tr>
              <tr><td class="p-2">Argument-based</td><td class="p-2">Parameterized, Non-parameterized</td></tr>
              <tr><td class="p-2">Return-based</td><td class="p-2">Void, Value-returning</td></tr>
              <tr><td class="p-2">Execution-style</td><td class="p-2">Recursive, Non-Recursive</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },
    /*...*/

    {
      heading: "Recursion in Java",
      subheadings: [
        {
          title: "Understanding Recursion",
          content: `
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">🔹 What is Recursion?</h2>
          <p>
            Recursion is a programming technique where a method calls itself to solve smaller instances of a larger problem. It's especially useful for problems that can be broken down into similar subproblems, such as factorial, Fibonacci, tree traversal, and backtracking.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 How Does Recursion Work?</h3>
          <ul class="list-disc ml-6">
            <li><b>Base Case:</b> Stops the recursion. Without it, recursion would be infinite.</li>
            <li><b>Recursive Case:</b> The method calls itself with a modified input.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Recursive Method Example</h3>
          <pre><code>public class Factorial {
    public static int factorial(int n) {
        if (n == 0) return 1; // Base case
        return n * factorial(n - 1); // Recursive case
    }

    public static void main(String[] args) {
        System.out.println("Factorial of 5: " + factorial(5));
    }
}
// Output: Factorial of 5: 120
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Dry Run + Stack Trace</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Function Call</th>
                <th class="p-2 text-left">Return Value</th>
                <th class="p-2 text-left">Stack Level</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">factorial(5)</td><td class="p-2">5 * factorial(4)</td><td class="p-2">Called</td></tr>
              <tr><td class="p-2">factorial(4)</td><td class="p-2">4 * factorial(3)</td><td class="p-2">Called</td></tr>
              <tr><td class="p-2">factorial(3)</td><td class="p-2">3 * factorial(2)</td><td class="p-2">Called</td></tr>
              <tr><td class="p-2">factorial(2)</td><td class="p-2">2 * factorial(1)</td><td class="p-2">Called</td></tr>
              <tr><td class="p-2">factorial(1)</td><td class="p-2">1 * factorial(0)</td><td class="p-2">Called</td></tr>
              <tr><td class="p-2">factorial(0)</td><td class="p-2">1 (base case)</td><td class="p-2">Returns</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧱 Visualizing the Stack (Recursion Stack)</h3>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4 font-mono text-sm">
            factorial(5)<br>
            &nbsp;&nbsp;↳ factorial(4)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;↳ factorial(3)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ factorial(2)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ factorial(1)<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ factorial(0) → returns 1<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← returns 1<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← returns 2<br>
            &nbsp;&nbsp;&nbsp;&nbsp;← returns 6<br>
            &nbsp;&nbsp;← returns 24<br>
            ← returns 120
          </div>
          <p class="mt-2">
            Each call is placed on top of the stack. When the base case is reached, the stack unwinds and each call returns its value to the previous one.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Recursive vs Iterative Approach</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Recursive</th>
                <th class="p-2 text-left">Iterative</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Code Length</td><td class="p-2">Shorter, elegant</td><td class="p-2">Longer, uses loops</td></tr>
              <tr><td class="p-2">Readability</td><td class="p-2">Intuitive for recursive problems</td><td class="p-2">Better for simple logic</td></tr>
              <tr><td class="p-2">Performance</td><td class="p-2">Can cause stack overflow</td><td class="p-2">Efficient, no call stack buildup</td></tr>
              <tr><td class="p-2">Memory Usage</td><td class="p-2">Uses call stack</td><td class="p-2">Constant memory</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔣 Types of Recursion</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Direct</td><td class="p-2">Method calls itself directly</td><td class="p-2">factorial()</td></tr>
              <tr><td class="p-2">Indirect</td><td class="p-2">Method A calls B, B calls A</td><td class="p-2">A → B → A</td></tr>
              <tr><td class="p-2">Tail</td><td class="p-2">Recursive call is last action</td><td class="p-2">return helper(...);</td></tr>
              <tr><td class="p-2">Non-Tail</td><td class="p-2">Work after recursive call</td><td class="p-2">return n * func(n-1);</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 More Recursive Examples</h3>
          <pre><code>// Fibonacci Number
public static int fibonacci(int n) {
    if (n == 0 || n == 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Sum of Digits
public static int sumDigits(int n) {
    if (n == 0) return 0;
    return n % 10 + sumDigits(n / 10);
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Stack Overflow Error</h3>
          <pre><code>public static void infiniteRecursion() {
    infiniteRecursion(); // ❌ No base case
}
// This will cause java.lang.StackOverflowError
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Always define a base case.</li>
            <li>Ensure each recursive call moves toward the base case.</li>
            <li>Use recursion only for naturally recursive problems (tree, graph, backtracking).</li>
            <li>Prefer tail recursion when possible (Java does not optimize tail calls).</li>
            <li>Consider memoization or iteration for performance if needed.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Real-Life Applications</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Area</th>
                <th class="p-2 text-left">Problem Solved With Recursion</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Data Structures</td><td class="p-2">Tree/Graph Traversals (DFS, Pre/Post/InOrder)</td></tr>
              <tr><td class="p-2">Algorithms</td><td class="p-2">Tower of Hanoi, Permutations, Subsets</td></tr>
              <tr><td class="p-2">Math</td><td class="p-2">Factorial, GCD, Power, Fibonacci</td></tr>
              <tr><td class="p-2">Backtracking</td><td class="p-2">Sudoku Solver, N-Queens Problem</td></tr>
              <tr><td class="p-2">File Systems</td><td class="p-2">Traverse nested directories</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧾 Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Term</th>
                <th class="p-2 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Recursion</td><td class="p-2">Function calling itself</td></tr>
              <tr><td class="p-2">Base Case</td><td class="p-2">Stop condition for recursion</td></tr>
              <tr><td class="p-2">Stack</td><td class="p-2">Function calls stored in memory</td></tr>
              <tr><td class="p-2">Tail Recursion</td><td class="p-2">Last operation is the recursive call</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },



    {
      heading: "More on Methods in Java",
      subheadings: [
        {
          title: "🔹 Varargs Method in Java",
          content: `
        <div class="mb-6">
          <p>
            A <b>Varargs method</b> (variable-length arguments method) allows you to pass a variable number of arguments to a method. Introduced in JDK 5, it simplifies method calls when the number of arguments is uncertain.
          </p>
          <pre><code>public static void methodName(type... variableName) {
    // body
}</code></pre>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            ✅ The passed arguments are internally treated as an array of the specified type.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example</h3>
          <pre><code>public class VarargsExample {
    public static int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sum(10, 20));         // 30
        System.out.println(sum(5, 10, 15, 20));  // 50
        System.out.println(sum());               // 0 (no arguments)
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📜 Rules for Varargs Method</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>✅ Rule 1: Varargs Must Be the Last Argument</b>
              <br>
              If a method has multiple parameters, the varargs parameter must be the last in the parameter list.
              <pre><code>public void test(String name, int... scores) {
    // Valid
}</code></pre>
              <span class="text-red-600">❌ Invalid Example (Compile-time error):</span>
              <pre><code>// Error: varargs not at the end
public void test(int... scores, String name) { 
    // Compilation Error
}</code></pre>
            </li>
            <li>
              <b>✅ Rule 2: Only One Varargs Parameter Allowed</b>
              <br>
              A method can have only one varargs parameter. Declaring multiple varargs leads to a compile-time error.
              <pre><code>// ❌ Invalid
public void test(int... a, String... b) { } // Compilation Error
</code></pre>
            </li>
            <li>
              <b>✅ Rule 3: Method Overloading with Varargs</b>
              <br>
              If a class has overloaded methods, one with regular parameters and one with varargs, then the method call will prefer the exact match with regular parameters.
              <pre><code>public static int sum(int... n) {
    int sum = 0;
    for (int element : n) {
        sum += element;
    }
    return sum;
}

public static void sum(int n) {
    System.out.println("Regular method: " + n);
}

public static void main(String[] args) {
    sum(6); // Output: Regular method: 6
}
</code></pre>
              <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
                🔎 <b>Explanation:</b> Even though <code>sum(int... n)</code> can accept a single argument, the exact match with <code>sum(int n)</code> takes precedence.
              </div>
            </li>
            <li>
              <b>✅ Rule 4: Widening Will Be Tried Before Varargs</b>
              <br>
              If there's no matching method and the compiler can't find an exact match, it will try widening first before falling back to varargs.
              <pre><code>public static void test(long n) {
    System.out.println("Widened to long: " + n);
}

public static void test(int... n) {
    System.out.println("Varargs called");
}

public static void main(String[] args) {
    test(10); // Output: Widened to long: 10
}
</code></pre>
            </li>
            <li>
              <b>⚠️ Common Error Example</b>
              <br>
              If you pass characters and there's no method that matches or can be widened to, varargs may fail:
              <pre><code>public static void test(int[] x, int... y) {
    // Error: Only one varargs allowed and it must be last
}
</code></pre>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📋 Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Rule</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Varargs at last</td>
                <td class="p-2"><code>type... var</code> must be the final parameter</td>
              </tr>
              <tr>
                <td class="p-2">Only one varargs</td>
                <td class="p-2">You cannot define more than one varargs parameter</td>
              </tr>
              <tr>
                <td class="p-2">Prefer regular methods</td>
                <td class="p-2">Overloaded methods with fixed params get higher priority</td>
              </tr>
              <tr>
                <td class="p-2">Widening before varargs</td>
                <td class="p-2">Compiler tries method with widening before falling back to varargs</td>
              </tr>
              <tr>
                <td class="p-2">Internally treated as array</td>
                <td class="p-2">Passed arguments are bundled into an array</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },


    {
      heading: "Strings in Java",
      subheadings: [
        {
          title: "🔰 What is a String in Java?",
          content: `
        <div class="mb-6">
          <p>
            A <b>String</b> in Java is a sequence of characters used to represent text.<br>
            It is not a primitive data type but a class in the <code>java.lang</code> package.<br>
            <b>In simple words:</b> A string is just a group of characters like "Hello" or "Java123".
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            ✅ <b>String is a Class:</b> Even though you can use it like a data type, String is actually a class.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🛠️ How to Create a String</h3>
          <ol class="list-decimal ml-6">
            <li>
              <b>Using String Literals (Recommended Way)</b><br>
              <code>String name = "Java";</code><br>
              <span class="text-green-600">✅ Stored in String Pool (memory-efficient).</span>
            </li>
            <li>
              <b>Using new Keyword</b><br>
              <code>String name = new String("Java");</code><br>
              <span class="text-red-600">❗ Creates a new object in heap memory (not recommended unless needed).</span>
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✨ Common String Methods (with examples)</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">length()</td><td class="p-2">Returns number of characters</td><td class="p-2"><code>"Java".length() → 4</code></td></tr>
              <tr><td class="p-2">charAt(index)</td><td class="p-2">Returns character at given index</td><td class="p-2"><code>"Java".charAt(2) → 'v'</code></td></tr>
              <tr><td class="p-2">toUpperCase()</td><td class="p-2">Converts to uppercase</td><td class="p-2"><code>"java".toUpperCase() → "JAVA"</code></td></tr>
              <tr><td class="p-2">toLowerCase()</td><td class="p-2">Converts to lowercase</td><td class="p-2"><code>"JAVA".toLowerCase() → "java"</code></td></tr>
              <tr><td class="p-2">substring(start)</td><td class="p-2">Returns substring from index</td><td class="p-2"><code>"Java".substring(1) → "ava"</code></td></tr>
              <tr><td class="p-2">substring(start, end)</td><td class="p-2">Substring between two indices</td><td class="p-2"><code>"Java".substring(1,3) → "av"</code></td></tr>
              <tr><td class="p-2">contains("a")</td><td class="p-2">Checks if string contains "a"</td><td class="p-2"><code>"Java".contains("a") → true</code></td></tr>
              <tr><td class="p-2">equals()</td><td class="p-2">Compares strings (case-sensitive)</td><td class="p-2"><code>"Java".equals("java") → false</code></td></tr>
              <tr><td class="p-2">equalsIgnoreCase()</td><td class="p-2">Ignores case while comparing</td><td class="p-2"><code>"Java".equalsIgnoreCase("java") → true</code></td></tr>
              <tr><td class="p-2">indexOf("a")</td><td class="p-2">Returns first index of char</td><td class="p-2"><code>"Java".indexOf("a") → 1</code></td></tr>
              <tr><td class="p-2">isEmpty()</td><td class="p-2">Checks if string is empty</td><td class="p-2"><code>"".isEmpty() → true</code></td></tr>
              <tr><td class="p-2">trim()</td><td class="p-2">Removes leading/trailing spaces</td><td class="p-2"><code>" Java ".trim() → "Java"</code></td></tr>
              <tr><td class="p-2">replace("a", "e")</td><td class="p-2">Replaces characters</td><td class="p-2"><code>"Java".replace("a", "e") → "Jeve"</code></td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔐 String Immutability</h3>
          <p>
            <b>What does "immutable" mean?</b><br>
            Once a string object is created, it cannot be changed.<br>
            <code>String s = "Hello";<br>
            s.concat("World");<br>
            System.out.println(s);  // Output: Hello (not HelloWorld)</code>
          </p>
          <b>Why Immutable?</b>
          <ul class="list-disc ml-6">
            <li>Safe for use in multithreading.</li>
            <li>Caches are possible (like string pool).</li>
            <li>Secure & memory-efficient.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Comparing Strings</h3>
          <ol class="list-decimal ml-6">
            <li>
              <b>Using ==</b><br>
              Checks if both references point to the same object.<br>
              <code>String a = "Java";<br>
              String b = "Java";<br>
              System.out.println(a == b); // true (same object in pool)</code><br>
              <code>String x = new String("Java");<br>
              System.out.println(a == x); // false (different objects)</code>
            </li>
            <li>
              <b>Using .equals()</b><br>
              Checks the contents of the strings.<br>
              <code>System.out.println(a.equals(x)); // true</code><br>
              <span class="text-green-600">✅ Use .equals() for content comparison.</span>
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧵 String Concatenation</h3>
          <p>Joining two or more strings.</p>
          <pre><code>String first = "Hello";
String second = "World";
String result = first + " " + second; // "Hello World"
String result2 = first.concat(" ").concat(second);</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 String vs StringBuilder vs StringBuffer</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">String</th>
                <th class="p-2 text-left">StringBuilder</th>
                <th class="p-2 text-left">StringBuffer</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Mutability</td><td class="p-2">❌ Immutable</td><td class="p-2">✅ Mutable</td><td class="p-2">✅ Mutable</td></tr>
              <tr><td class="p-2">Thread-safe</td><td class="p-2">❌ No</td><td class="p-2">❌ No</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Performance</td><td class="p-2">Slow for concat</td><td class="p-2">Fast</td><td class="p-2">Slower than StringBuilder</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Use string literals over new String().</li>
            <li>Use .equals() for comparing values.</li>
            <li>Use StringBuilder for large or frequent modifications.</li>
            <li>Avoid unnecessary string concatenation in loops.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Sample Code: Working with Strings</h3>
          <pre><code>public class StringBasics {
    public static void main(String[] args) {
        String name = "Roushan";

        System.out.println("Length: " + name.length());
        System.out.println("First char: " + name.charAt(0));
        System.out.println("Upper: " + name.toUpperCase());
        System.out.println("Contains 'sh': " + name.contains("sh"));
        System.out.println("Substring: " + name.substring(1, 4));
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔚 Summary</h3>
          <ul class="list-disc ml-6">
            <li>Strings are sequences of characters, stored as objects.</li>
            <li>Strings are immutable.</li>
            <li>Use .equals() for value comparison, not ==.</li>
            <li>For repeated string changes, prefer StringBuilder.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "String Pool & Memory Structure in Java",
      subheadings: [
        {
          title: "🔰 What is the Java String Pool?",
          content: `
        
        <div class="mb-6">
          <p>
            The <b>String Pool</b> (or Intern Pool) is a special area in Java heap memory used to store unique string literals.<br>
            <b>In simple terms:</b> If two strings have the same value and are created as literals, Java stores only one copy in memory to save space.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🏗️ How It Works</h3>
          <pre><code>String a = "Java";
String b = "Java";
// Both a and b point to the same memory location in the String Pool

String c = new String("Java");
// This creates a new object in heap memory, not in the pool
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Visual Representation</h3>
          <pre class="font-mono text-sm bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
+-------------------+
|     String Pool   |
|-------------------|
|   "Java"   &lt;----+ | &larr; a, b
+-------------------+
      &uarr;
String c = new String("Java"); 
      &darr;
 Heap Memory (new object)
          </pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Examples</h3>
          <pre><code>String a = "Java";
String b = "Java";
System.out.println(a == b); // true — same reference in String Pool

String c = new String("Java");
System.out.println(a == c); // false — different object in heap

System.out.println(a.equals(c)); // true — same content
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔧 String Interning</h3>
          <p>To force a heap string into the String Pool, use <code>.intern()</code>:</p>
          <pre><code>String c = new String("Java");
String d = c.intern(); // Moves or references it to the pool

System.out.println(a == d); // true
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚀 Why String Pool Exists?</h3>
          <ul class="list-disc ml-6">
            <li>Memory Efficiency: Reuses string objects</li>
            <li>Performance Boost: Faster <code>==</code> comparison for literals</li>
            <li>Thread-Safe: Strings are immutable, so sharing is safe</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Important Notes</h3>
          <ul class="list-disc ml-6">
            <li>✅ Only string literals are stored in the pool automatically</li>
            <li>❌ Strings created with <code>new String()</code> are not automatically pooled</li>
            <li>✅ Use <code>.intern()</code> to add strings manually to the pool</li>
            <li>✅ Java String pool is maintained by the String class</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Concept</th>
                <th class="p-2 text-left">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">String Pool</td><td class="p-2">Memory area where Java stores string literals</td></tr>
              <tr><td class="p-2">Immutable</td><td class="p-2">String values cannot be changed after creation</td></tr>
              <tr><td class="p-2">Heap Memory</td><td class="p-2">Where objects created with <code>new</code> reside</td></tr>
              <tr><td class="p-2">==</td><td class="p-2">Compares references</td></tr>
              <tr><td class="p-2">.equals()</td><td class="p-2">Compares values</td></tr>
              <tr><td class="p-2">.intern()</td><td class="p-2">Moves/returns a reference to the string pool</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "StringBuilder in Java",
      subheadings: [
        {
          title: "🔰 What is StringBuilder?",
          content: `
        <div class="mb-6">
          <p>
            <b>StringBuilder</b> is a mutable sequence of characters in Java.<br>
            Unlike <code>String</code> (immutable), <code>StringBuilder</code> allows you to modify its value after creation (append, insert, delete, etc.) without creating new objects.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Why Use StringBuilder?</h3>
          <ul class="list-disc ml-6">
            <li>🚀 Faster performance for repeated string modifications (especially in loops)</li>
            <li>🧠 Memory efficient — avoids creating new objects for each change</li>
            <li>💡 Ideal for single-threaded applications</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📦 How to Create a StringBuilder</h3>
          <pre><code>StringBuilder sb = new StringBuilder();               // empty builder
StringBuilder sb2 = new StringBuilder("Hello World"); // initialized
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📚 Commonly Used StringBuilder Methods</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">append(String s)</td><td class="p-2">Adds text to the end</td><td class="p-2"><code>sb.append(" Java")</code></td></tr>
              <tr><td class="p-2">insert(int offset, String s)</td><td class="p-2">Inserts text at index</td><td class="p-2"><code>sb.insert(5, " Awesome")</code></td></tr>
              <tr><td class="p-2">replace(int start, int end, String s)</td><td class="p-2">Replaces characters</td><td class="p-2"><code>sb.replace(0, 5, "Hi")</code></td></tr>
              <tr><td class="p-2">delete(int start, int end)</td><td class="p-2">Deletes characters</td><td class="p-2"><code>sb.delete(0, 4)</code></td></tr>
              <tr><td class="p-2">reverse()</td><td class="p-2">Reverses the string</td><td class="p-2"><code>sb.reverse()</code></td></tr>
              <tr><td class="p-2">toString()</td><td class="p-2">Converts to String</td><td class="p-2"><code>String str = sb.toString()</code></td></tr>
              <tr><td class="p-2">capacity()</td><td class="p-2">Returns current capacity</td><td class="p-2"><code>sb.capacity()</code></td></tr>
              <tr><td class="p-2">ensureCapacity(int min)</td><td class="p-2">Ensures minimum capacity</td><td class="p-2"><code>sb.ensureCapacity(50)</code></td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Example Program</h3>
          <pre><code>public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");

        sb.append(" Java");              // Hello Java
        sb.insert(5, " Awesome");        // Hello Awesome Java
        sb.replace(6, 13, "Cool");       // Hello Cool Java
        sb.delete(5, 10);                // HelloJava
        sb.reverse();                    // avaJolleH

        System.out.println(sb.toString());
    }
}
// Output: avaJolleH
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Internal Working</h3>
          <ul class="list-disc ml-6">
            <li>Internally uses a <code>char[]</code> array</li>
            <li>Capacity increases automatically when exceeded (<code>oldCapacity * 2 + 2</code>)</li>
            <li>Efficient for string concatenation inside loops</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Performance Comparison</h3>
          <pre><code>// BAD: Creates many String objects
String s = "";
for (int i = 0; i < 1000; i++) {
    s += i;
}

// GOOD: Uses StringBuilder
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            ✅ <b>StringBuilder</b> avoids creating many intermediate objects, unlike <code>String</code>.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧵 Is StringBuilder Thread Safe?</h3>
          <p>
            <b>No</b>, <code>StringBuilder</code> is not synchronized and is not thread-safe.<br>
            For multi-threaded environments, use <code>StringBuffer</code> instead.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📊 Capacity and Memory Handling</h3>
          <pre><code>StringBuilder sb = new StringBuilder();
System.out.println(sb.capacity()); // Default: 16

sb.append("HelloJavaWorld!");
System.out.println(sb.capacity()); // 16 + length if exceeded

sb.ensureCapacity(50); // Expands to at least 50 if current < 50
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📝 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">String</th>
                <th class="p-2 text-left">StringBuilder</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Mutability</td><td class="p-2">❌ Immutable</td><td class="p-2">✅ Mutable</td></tr>
              <tr><td class="p-2">Thread Safety</td><td class="p-2">❌ No</td><td class="p-2">❌ No</td></tr>
              <tr><td class="p-2">Performance</td><td class="p-2">🐢 Slower</td><td class="p-2">🚀 Faster</td></tr>
              <tr><td class="p-2">Memory Efficient</td><td class="p-2">❌ No</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Use Case</td><td class="p-2">Static Strings</td><td class="p-2">Dynamic Strings</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ When to Use StringBuilder?</h3>
          <ul class="list-disc ml-6">
            <li>When you need to modify strings often</li>
            <li>When doing concatenation in loops</li>
            <li>When working in a single-threaded environment</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "StringBuffer in Java",
      subheadings: [
        {
          title: "🔒 What is StringBuffer?",
          content: `
        <div class="mb-6">
          <p>
            <b>StringBuffer</b> is a mutable sequence of characters, similar to <code>StringBuilder</code>.<br>
            <b>Key difference:</b> <code>StringBuffer</code> is <b>thread-safe</b> — all its methods are synchronized, making it safe for use in multi-threaded environments.<br>
            It was introduced before <code>StringBuilder</code> as a solution for mutable and synchronized string manipulation.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 Why Use StringBuffer?</h3>
          <ul class="list-disc ml-6">
            <li>✅ Mutable — content can be modified (append, insert, delete, etc.)</li>
            <li>✅ Thread-safe — all methods are synchronized</li>
            <li>🔄 Safe for multithreaded environments</li>
            <li>🚀 More efficient than <code>String</code> for frequent modifications</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🆚 String vs StringBuffer vs StringBuilder</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">String</th>
                <th class="p-2 text-left">StringBuffer</th>
                <th class="p-2 text-left">StringBuilder</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Mutability</td><td class="p-2">❌ Immutable</td><td class="p-2">✅ Mutable</td><td class="p-2">✅ Mutable</td></tr>
              <tr><td class="p-2">Thread Safety</td><td class="p-2">❌ Not Safe</td><td class="p-2">✅ Safe (Synchronized)</td><td class="p-2">❌ Not Safe</td></tr>
              <tr><td class="p-2">Performance (Single-threaded)</td><td class="p-2">🐢 Slow</td><td class="p-2">🚀 Moderate</td><td class="p-2">⚡ Fast</td></tr>
              <tr><td class="p-2">Use Case</td><td class="p-2">Constant data</td><td class="p-2">Multi-threaded edits</td><td class="p-2">Single-threaded edits</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🛠 Syntax to Create a StringBuffer</h3>
          <pre><code>StringBuffer sb = new StringBuffer();                // Empty buffer
StringBuffer sb2 = new StringBuffer("Hello World");  // Initialized buffer
StringBuffer sb3 = new StringBuffer(100);            // Capacity of 100 characters
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📚 Commonly Used Methods in StringBuffer</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">append(String s)</td><td class="p-2">Adds text at the end</td><td class="p-2"><code>sb.append(" Java")</code></td></tr>
              <tr><td class="p-2">insert(int offset, String s)</td><td class="p-2">Inserts text at a specific index</td><td class="p-2"><code>sb.insert(5, " Cool")</code></td></tr>
              <tr><td class="p-2">replace(int start, int end, String s)</td><td class="p-2">Replaces characters between start and end</td><td class="p-2"><code>sb.replace(0, 5, "Hi")</code></td></tr>
              <tr><td class="p-2">delete(int start, int end)</td><td class="p-2">Deletes characters from start index to end</td><td class="p-2"><code>sb.delete(0, 4)</code></td></tr>
              <tr><td class="p-2">reverse()</td><td class="p-2">Reverses the characters</td><td class="p-2"><code>sb.reverse()</code></td></tr>
              <tr><td class="p-2">capacity()</td><td class="p-2">Returns current capacity</td><td class="p-2"><code>sb.capacity()</code></td></tr>
              <tr><td class="p-2">length()</td><td class="p-2">Returns the number of characters in buffer</td><td class="p-2"><code>sb.length()</code></td></tr>
              <tr><td class="p-2">charAt(int index)</td><td class="p-2">Returns character at specified index</td><td class="p-2"><code>sb.charAt(0)</code></td></tr>
              <tr><td class="p-2">setCharAt(int index, char ch)</td><td class="p-2">Changes character at a specified index</td><td class="p-2"><code>sb.setCharAt(1, 'a')</code></td></tr>
              <tr><td class="p-2">toString()</td><td class="p-2">Converts buffer to String</td><td class="p-2"><code>String s = sb.toString()</code></td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Example Program</h3>
          <pre><code>public class StringBufferExample {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");

        sb.append(" Java");            // Hello Java
        sb.insert(5, " Cool");         // Hello Cool Java
        sb.replace(6, 10, "Smart");    // Hello Smart Java
        sb.delete(0, 6);               // Smart Java
        sb.reverse();                  // avaJ tramS

        System.out.println(sb.toString());
    }
}
// Output: avaJ tramS
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚙️ Internal Working of StringBuffer</h3>
          <ul class="list-disc ml-6">
            <li>Uses a <code>char[]</code> array internally</li>
            <li>Default capacity is 16 characters, expandable when exceeded</li>
            <li>All public methods are synchronized, making it safe but slightly slower than <code>StringBuilder</code></li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚨 Capacity vs Length</h3>
          <pre><code>StringBuffer sb = new StringBuffer();
System.out.println(sb.capacity()); // 16 (default)
sb.append("JavaProgramming");
System.out.println(sb.length());   // Number of characters
System.out.println(sb.capacity()); // May grow if length > 16
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">👥 Thread Safety Example</h3>
          <pre><code>public class ThreadSafeExample {
    static StringBuffer sb = new StringBuffer("Hello");

    public static void main(String[] args) {
        Runnable task = () -> {
            for (int i = 0; i < 100; i++) {
                sb.append("A");
            }
        };

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);
        t1.start();
        t2.start();
    }
}
// Output will not cause data corruption because StringBuffer is synchronized.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>✅ Use <code>StringBuffer</code> only when thread safety is required</li>
            <li>❌ Don't use it in performance-sensitive single-threaded tasks (use <code>StringBuilder</code> instead)</li>
            <li>Always convert <code>StringBuffer</code> to <code>String</code> using <code>.toString()</code> when you need a final immutable version</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Summary</h3>
          <ul class="list-disc ml-6">
            <li><code>StringBuffer</code> is mutable and synchronized</li>
            <li>All modification methods are thread-safe</li>
            <li>Slightly slower than <code>StringBuilder</code> due to synchronization</li>
            <li>Still faster than <code>String</code> for repeated changes</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Array in Java ",
      subheadings: [
        {
          title: "🧠 What is an Array?",
          content: `
        <div class="mb-6">

          <p>
            An <b>array</b> in Java is a container object that holds a fixed number of values of a single data type. Values are stored in contiguous memory locations and accessed using an index (starting from 0).
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Why Use Arrays?</h3>
          <ul class="list-disc ml-6">
            <li>Store multiple values in a single variable</li>
            <li>Efficiently manage large volumes of data</li>
            <li>Easy iteration and bulk operations</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧱 Types of Arrays in Java</h3>
          <ol class="list-decimal ml-6">
            <li>
              <b>Single-Dimensional Array</b>
              <ul class="list-disc ml-6">
                <li>Linear collection of elements</li>
                <li><code>int[] arr = new int[5];</code></li>
              </ul>
            </li>
            <li>
              <b>Multi-Dimensional Array</b>
              <ul class="list-disc ml-6">
                <li>Array of arrays (e.g., matrices)</li>
                <li><code>int[][] matrix = new int[3][3];</code></li>
              </ul>
            </li>
            <li>
              <b>Jagged Array</b>
              <ul class="list-disc ml-6">
                <li>Array of arrays with different lengths</li>
                <li>
                  <pre><code>int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[4];</code></pre>
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔧 Declaring, Instantiating, and Initializing an Array</h3>
          <pre><code>// Declaration
int[] numbers;

// Instantiation
numbers = new int[5];

// Initialization
numbers[0] = 10;
numbers[1] = 20;

// Declaration + Instantiation + Initialization
int[] marks = {90, 85, 70, 65, 100};
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Accessing Elements with Index</h3>
          <pre><code>System.out.println(marks[0]); // Output: 90
System.out.println(marks[3]); // Output: 65
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚙️ Iterating Over Arrays</h3>
          <pre><code>for (int i = 0; i < marks.length; i++) {
    System.out.println("Index " + i + ": " + marks[i]);
}

// Enhanced for loop (for-each)
for (int mark : marks) {
    System.out.println(mark);
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📏 Array Properties</h3>
          <ul class="list-disc ml-6">
            <li><code>length</code> → gives the size of the array</li>
            <li><code>index</code> → starts from 0 to length - 1</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Important Points</h3>
          <ul class="list-disc ml-6">
            <li>Arrays are fixed in size. Once defined, the size cannot be changed.</li>
            <li>Accessing an invalid index (e.g., <code>marks[10]</code>) throws <code>ArrayIndexOutOfBoundsException</code>.</li>
            <li>Arrays can store primitive (int, float, etc.) and non-primitive (String, Object) types.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 Default Values in Arrays</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Data Type</th>
                <th class="p-2 text-left">Default Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">int, byte</td><td class="p-2">0</td></tr>
              <tr><td class="p-2">float, double</td><td class="p-2">0.0</td></tr>
              <tr><td class="p-2">char</td><td class="p-2">\\u0000 (null character)</td></tr>
              <tr><td class="p-2">boolean</td><td class="p-2">false</td></tr>
              <tr><td class="p-2">Objects</td><td class="p-2">null</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 Real-World Example</h3>
          <pre><code>public class StudentScores {
    public static void main(String[] args) {
        String[] students = {"Alice", "Bob", "Charlie"};
        int[] scores = {85, 90, 78};

        for (int i = 0; i < students.length; i++) {
            System.out.println(students[i] + " scored: " + scores[i]);
        }
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Limitations of Arrays</h3>
          <ul class="list-disc ml-6">
            <li>Fixed size — no dynamic resizing</li>
            <li>Cannot directly add or remove elements like in a list</li>
            <li>No built-in methods for sorting or filtering</li>
          </ul>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            ➡️ For advanced array management, use <b>ArrayList</b>, <b>LinkedList</b>, etc., from the Collections Framework.
          </div>
        </div>
      `
        }
      ]
    },


    {
      heading: "Scanner Class in Java (Dynamic Read)",
      subheadings: [
        {
          title: "✅ Scanner Class in Java (With Dynamic Read Concept)",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 What is Dynamic Read?</h3>
          <ul class="list-disc ml-6">
            <li>Dynamic read means taking input from the user during program execution.</li>
            <li>Java provides the <b>Scanner</b> class for dynamic input from keyboard, files, or other streams.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📥 Steps to Read Data Using Scanner</h3>
          <ol class="list-decimal ml-6">
            <li>
              <b>Import Scanner:</b>
              <pre><code>import java.util.Scanner;</code></pre>
            </li>
            <li>
              <b>Create Scanner Object:</b>
              <pre><code>Scanner sc = new Scanner(System.in);</code></pre>
            </li>
            <li>
              <b>Use Non-static Methods:</b> Scanner provides methods to read various data types.
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Non-static Methods of Scanner Class</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">nextByte()</td><td class="p-2">Reads a byte value</td></tr>
              <tr><td class="p-2">nextShort()</td><td class="p-2">Reads a short value</td></tr>
              <tr><td class="p-2">nextInt()</td><td class="p-2">Reads an int value</td></tr>
              <tr><td class="p-2">nextLong()</td><td class="p-2">Reads a long value</td></tr>
              <tr><td class="p-2">nextFloat()</td><td class="p-2">Reads a float value</td></tr>
              <tr><td class="p-2">nextDouble()</td><td class="p-2">Reads a double value</td></tr>
              <tr><td class="p-2">next()</td><td class="p-2">Reads a word (String) until space</td></tr>
              <tr><td class="p-2">nextLine()</td><td class="p-2">Reads an entire line</td></tr>
              <tr><td class="p-2">next().charAt(0)</td><td class="p-2">Reads a char value</td></tr>
              <tr><td class="p-2">nextBoolean()</td><td class="p-2">Reads a boolean value</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Example Program Using All Scanner Methods</h3>
          <pre><code>import java.util.Scanner;

public class ScannerDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter byte: ");
        byte b = sc.nextByte();

        System.out.print("Enter short: ");
        short s = sc.nextShort();

        System.out.print("Enter int: ");
        int i = sc.nextInt();

        System.out.print("Enter long: ");
        long l = sc.nextLong();

        System.out.print("Enter float: ");
        float f = sc.nextFloat();

        System.out.print("Enter double: ");
        double d = sc.nextDouble();

        System.out.print("Enter a word (String): ");
        String word = sc.next();

        sc.nextLine(); // consume leftover newline

        System.out.print("Enter a sentence: ");
        String line = sc.nextLine();

        System.out.print("Enter a character: ");
        char c = sc.next().charAt(0);

        System.out.print("Enter boolean value (true/false): ");
        boolean flag = sc.nextBoolean();

        // Output
        System.out.println("\\n--- Output ---");
        System.out.println("Byte: " + b);
        System.out.println("Short: " + s);
        System.out.println("Int: " + i);
        System.out.println("Long: " + l);
        System.out.println("Float: " + f);
        System.out.println("Double: " + d);
        System.out.println("Word: " + word);
        System.out.println("Line: " + line);
        System.out.println("Character: " + c);
        System.out.println("Boolean: " + flag);

        sc.close();
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Common Mistakes</h3>
          <ul class="list-disc ml-6">
            <li>After using <code>nextInt()</code> or similar, use <code>sc.nextLine()</code> to consume leftover newline.</li>
            <li>Do not use multiple Scanner objects on <code>System.in</code>.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📘 Summary</h3>
          <ul class="list-disc ml-6">
            <li>Scanner enables dynamic input during runtime.</li>
            <li>Uses non-static methods for different data types.</li>
            <li>Always import, create, and close Scanner properly.</li>
          </ul>
        </div>
      `
        }
      ]
    },


    {
      heading: "Basics of Object-Oriented Programming (OOP) in Java",
      subheadings: [
        {
          title: "🧱 Object-Oriented Programming (OOP) in Java",
          content: `
        <div class="mb-6">
          <h2 class="text-xl font-bold mb-2">🔹 What is OOP?</h2>
          <p>
            Object-Oriented Programming (OOP) is a paradigm based on “objects” — real-world entities that contain data (properties) and operations (methods). OOP helps organize, reuse, and scale software by modeling entities and their interactions.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Why Use OOP?</h3>
          <ul class="list-disc ml-6">
            <li>Models real-world problems naturally</li>
            <li>Creates modular, maintainable, reusable code</li>
            <li>Supports data hiding and controlled access</li>
            <li>Simplifies complex systems</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Key Terminology</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>Object:</b> Real-world entity with properties (fields) and behaviors (methods). <br>
              <b>Example:</b>
              <ul class="list-circle ml-6">
                <li>Laptop: brand, price, ram, color; methods: start(), write(), play()</li>
                <li>Employee: name, id, age, salary; methods: login(), work(), logout()</li>
              </ul>
            </li>
            <li>
              <b>Class:</b> Blueprint/template for objects. Defines properties and methods but doesn't use memory until an object is created.
              <pre><code>class Laptop {
    String brand;
    int price;
    void start() {
        System.out.println("Laptop is starting...");
    }
}</code></pre>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔃 Object-Oriented Design Approach</h3>
          <ul class="list-disc ml-6">
            <li>OOP uses a Bottom-Up Approach: build small objects first, then combine</li>
            <li>Focuses on objects and their interactions, not just logic flow</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📜 Four Pillars of OOP</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Principle</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Encapsulation</td><td class="p-2">Bind data and methods in a class; restrict direct access</td></tr>
              <tr><td class="p-2">Abstraction</td><td class="p-2">Hide unnecessary details, show only essentials</td></tr>
              <tr><td class="p-2">Inheritance</td><td class="p-2">Reuse properties/methods from parent class</td></tr>
              <tr><td class="p-2">Polymorphism</td><td class="p-2">Perform one action in different ways (overloading/overriding)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📦 Real-World Use Case</h3>
          <ul class="list-disc ml-6">
            <li>Banking System: classes like Customer, Account, Transaction, Loan</li>
            <li>Inheritance for account types (SavingsAccount, CurrentAccount)</li>
            <li>Polymorphism for withdrawal methods based on account type</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Benefits of OOP</h3>
          <ul class="list-disc ml-6">
            <li>Enhances modularity and reusability</li>
            <li>Makes code easier to manage and maintain</li>
            <li>Promotes data hiding and security</li>
            <li>Supports dynamic behavior via polymorphism</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔚 Conclusion</h3>
          <p>
            OOP bridges real-world and software, modeling components as objects for scalable, maintainable development — especially in large, complex systems.
          </p>
        </div>
      `
        }
      ]
    },

    {
      heading: "Object Creation in Java",
      subheadings: [
        {
          title: "🔹 What is an Object?",
          content: `
        <div class="mb-6">
 
          <p>
            An object is a real-world entity that has state (properties) and behavior (methods). In Java, objects are instances of classes.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            <b>🧠 Real-World Example:</b>
            <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
              <thead class="bg-gray-100">
                <tr>
                  <th class="p-2 text-left">Entity</th>
                  <th class="p-2 text-left">Properties (State)</th>
                  <th class="p-2 text-left">Behavior (Methods)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2">Laptop</td>
                  <td class="p-2">brand, RAM, price, color</td>
                  <td class="p-2">start(), play(), write(), shutDown()</td>
                </tr>
                <tr>
                  <td class="p-2">Employee</td>
                  <td class="p-2">name, age, salary, id</td>
                  <td class="p-2">login(), work(), logout(), lunch()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔸 Object Creation Syntax</h3>
          <pre><code>ClassName referenceVariable = new ClassName();</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <b>✅ Example:</b><br>
            <code>Car myCar = new Car();</code><br>
            <ul class="list-disc ml-6">
              <li>Car is the class name.</li>
              <li>myCar is a reference variable (points to the object).</li>
              <li>new allocates memory.</li>
              <li>Car() triggers memory allocation for a Car object.</li>
            </ul>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 new Keyword in Detail</h3>
          <ul class="list-disc ml-6">
            <li>Unary operator (operates on one operand)</li>
            <li>Allocates memory during runtime</li>
            <li>Returns the reference (address) of the object</li>
            <li>Reference is stored in a reference variable</li>
          </ul>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>🔍 Output Format:</b><br>
            <code>fullyQualifiedClassName@HexadecimalMemoryAddress</code>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example of Object Creation</h3>
          <pre><code>package objectCreation;

public class Car {
    String brand;
    int speed;
    double price;

    public static void main(String[] args) {
        Car c = new Car(); // Object creation
        System.out.println(c); // Prints the object reference
    }
}
// Output: objectCreation.Car@4e25154f
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <b>✅ This output confirms:</b>
            <ul class="list-disc ml-6">
              <li>A new object of class Car is created.</li>
              <li>The object lives in the heap memory.</li>
              <li>c stores its reference address.</li>
            </ul>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Reference Variable</h3>
          <p>
            A reference variable stores the memory address of the object created using <code>new</code>.
          </p>
          <pre><code>Car c = new Car();
c.brand = "Toyota";
c.speed = 120;
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 How Memory Works</h3>
          <pre><code>Car c = new Car();
// 1. new Car() creates a new object in heap memory.
// 2. A memory block is reserved for that object.
// 3. c stores the address of that memory block.
</code></pre>
          <p>
            The object holds its fields (<code>brand</code>, <code>speed</code>, <code>price</code>), and <code>c</code> is just the pointer to it.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 You Can Create Multiple Objects</h3>
          <pre><code>Car car1 = new Car();
Car car2 = new Car();
Car car3 = new Car();
// Each new Car() creates a new memory block with a unique address.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔚 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Term</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Object</td><td class="p-2">A real-world instance of a class</td></tr>
              <tr><td class="p-2">new keyword</td><td class="p-2">Allocates memory for a new object in heap</td></tr>
              <tr><td class="p-2">Reference variable</td><td class="p-2">Stores the address of the object in memory</td></tr>
              <tr><td class="p-2">Object Output</td><td class="p-2">Looks like ClassName@HexCode, showing the memory address</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Quick Recap with Real Example</h3>
          <pre><code>public class Student {
    String name;
    int age;

    public static void main(String[] args) {
        Student s = new Student(); // Object creation
        s.name = "Ravi";
        s.age = 21;
        System.out.println("Name: " + s.name);
        System.out.println("Age: " + s.age);
    }
}
// Output:
// Name: Ravi
// Age: 21
</code></pre>
        </div>
      `
        }
      ]
    },

    {
      heading: "Packages in Java",
      subheadings: [
        {
          title: "📦 Package in Java – Complete Guide",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ What is a Package?</h3>
          <ul class="list-disc ml-6">
            <li>A <b>package</b> in Java is a namespace that organizes related classes and interfaces.</li>
            <li>Helps avoid naming conflicts, group classes logically, control access, and support modularity.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔸 Types of Packages</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Built-in</td><td class="p-2">Predefined in Java API</td><td class="p-2"><code>java.util</code>, <code>java.lang</code>, <code>java.io</code></td></tr>
              <tr><td class="p-2">User-defined</td><td class="p-2">Created by programmer</td><td class="p-2"><code>com.myapp.utils</code></td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Creating a Package</h3>
          <pre><code>package com.student;

public class Student {
    public void display() {
        System.out.println("Inside Student class.");
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Using a Package (Import)</h3>
          <pre><code>import com.student.Student;   // import specific class
import com.student.*;         // import all classes
</code></pre>
          <pre><code>import com.student.Student;

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.display();
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Directory Structure</h3>
          <pre class="font-mono text-sm bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
Project/
└── com/
    └── student/
        └── Student.java
</pre>
          <ul class="list-disc ml-6">
            <li>To compile: <code>javac -d . Student.java</code></li>
            <li>To run: <code>java com.student.Student</code></li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Sub-packages</h3>
          <pre><code>package com.myapp.services;</code></pre>
          <p>Sub-packages are independent: <code>com.myapp.services</code> ≠ <code>com.myapp.utils</code></p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Access Modifiers and Packages</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Modifier</th>
                <th class="p-2 text-left">Same Class</th>
                <th class="p-2 text-left">Same Package</th>
                <th class="p-2 text-left">Subclass</th>
                <th class="p-2 text-left">Other Packages</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">private</td><td class="p-2">✅</td><td class="p-2">❌</td><td class="p-2">❌</td><td class="p-2">❌</td></tr>
              <tr><td class="p-2">default</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">❌</td><td class="p-2">❌</td></tr>
              <tr><td class="p-2">protected</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">❌</td></tr>
              <tr><td class="p-2">public</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">✅</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Static Import (Since Java 5)</h3>
          <pre><code>import static java.lang.Math.*;

public class Demo {
    public static void main(String[] args) {
        System.out.println(sqrt(16));  // no need for Math.sqrt()
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Naming Conventions</h3>
          <ul class="list-disc ml-6">
            <li>Always use lowercase.</li>
            <li>Use domain-style naming for user-defined packages: <code>package com.company.project.module;</code></li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Real-World Example</h3>
          <pre><code>// File: com/bank/Account.java
package com.bank;

public class Account {
    public void details() {
        System.out.println("Account Details");
    }
}

// File: com/main/MainApp.java
package com.main;

import com.bank.Account;

public class MainApp {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.details();
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Package</td><td class="p-2">Logical group of related classes</td></tr>
              <tr><td class="p-2">package keyword</td><td class="p-2">Defines a package</td></tr>
              <tr><td class="p-2">import keyword</td><td class="p-2">Accesses packages</td></tr>
              <tr><td class="p-2">-d option</td><td class="p-2">Specifies destination folder for compiled classes</td></tr>
              <tr><td class="p-2">Sub-packages</td><td class="p-2">Independent packages</td></tr>
              <tr><td class="p-2">Static Import</td><td class="p-2">Imports static members directly</td></tr>
              <tr><td class="p-2">Access Control</td><td class="p-2">Encapsulates class visibility</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },



    {
      heading: "Static Members",
      subheadings: [
        {
          title: "🔹 What is static in Java?",
          content: `
        <div class="mb-6">
          <p>
            The <b>static</b> keyword in Java is used to define members (variables, methods, blocks, and nested classes) that belong to the class itself, not to any specific object. Static members are shared across all instances and are loaded once when the class is first loaded.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Why Use static?</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Shared across class</td><td class="p-2">Only one copy exists in memory, reducing redundancy</td></tr>
              <tr><td class="p-2">No need for objects</td><td class="p-2">Access directly using class name</td></tr>
              <tr><td class="p-2">Efficient</td><td class="p-2">Initialized once during class loading—saves memory and increases speed</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📘 Static Members Overview</h3>
          <ol class="list-decimal ml-6">
            <li>
              <b>Static Variable (Class Variable)</b>
              <pre><code>public class Employee {
    int id;
    String name;
    static String company = "Google";  // shared across all objects

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    void display() {
        System.out.println(id + " " + name + " " + company);
    }

    public static void main(String[] args) {
        Employee e1 = new Employee(101, "Ravi");
        Employee e2 = new Employee(102, "Anita");

        e1.display();
        e2.display();
    }
}
// Output:
// 101 Ravi Google
// 102 Anita Google
</code></pre>
            </li>
            <li>
              <b>Static Method</b>
              <pre><code>public class MathUtil {
    static int square(int x) {
        return x * x;
    }

    public static void main(String[] args) {
        System.out.println(MathUtil.square(5));
    }
}
// Output: 25
</code></pre>
              <ul class="list-disc ml-6">
                <li>Static methods cannot access non-static variables directly.</li>
                <li>Static methods cannot use <code>this</code> keyword.</li>
                <li>Often used for utility/helper methods.</li>
              </ul>
            </li>
            <li>
              <b>Static Block</b>
              <pre><code>public class Demo {
    static int x;

    static {
        System.out.println("Static block executed");
        x = 50;
    }

    public static void main(String[] args) {
        System.out.println("Main method");
        System.out.println("x = " + x);
    }
}
// Output:
// Static block executed
// Main method
// x = 50
</code></pre>
            </li>
            <li>
              <b>Static Nested Class</b>
              <pre><code>public class Outer {
    static class Inner {
        void show() {
            System.out.println("Static Nested Class");
        }
    }

    public static void main(String[] args) {
        Outer.Inner obj = new Outer.Inner();
        obj.show();
    }
}
// Output: Static Nested Class
</code></pre>
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📊 Static vs Non-Static (Comparison Table)</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Static</th>
                <th class="p-2 text-left">Non-Static</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Belongs to</td><td class="p-2">Class</td><td class="p-2">Object</td></tr>
              <tr><td class="p-2">Accessed by</td><td class="p-2">Class name or object</td><td class="p-2">Only by object</td></tr>
              <tr><td class="p-2">Requires object?</td><td class="p-2">❌ No</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Memory location</td><td class="p-2">Method area</td><td class="p-2">Heap</td></tr>
              <tr><td class="p-2">Access rules</td><td class="p-2">Only other static members</td><td class="p-2">Can access both static and non-static</td></tr>
              <tr><td class="p-2">Can use this?</td><td class="p-2">❌ No</td><td class="p-2">✅ Yes</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Example Combining All Static Concepts</h3>
          <pre><code>public class School {
    static String schoolName;

    static {
        System.out.println("Static block executed");
        schoolName = "Greenwood High";
    }

    int studentId;
    String studentName;

    School(int id, String name) {
        this.studentId = id;
        this.studentName = name;
    }

    void display() {
        System.out.println(studentId + " " + studentName + " " + schoolName);
    }

    static void showSchool() {
        System.out.println("School: " + schoolName);
    }

    public static void main(String[] args) {
        School.showSchool();
        School s1 = new School(1, "Alice");
        s1.display();
    }
}
// Output:
// Static block executed
// School: Greenwood High
// 1 Alice Greenwood High
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔚 Java Class Loading Process</h3>
          <p>
            When a Java program runs, the JVM performs a process called <b>Class Loading</b>, which includes loading and initializing static members.
          </p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Phase</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Loading</td><td class="p-2">Class bytecode (.class file) is loaded into JVM memory by the ClassLoader</td></tr>
              <tr><td class="p-2">Linking</td><td class="p-2">Static variables are prepared (memory allocated with default values)</td></tr>
              <tr><td class="p-2">Initialization</td><td class="p-2">Static blocks are executed and static variables are assigned actual values</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 When Are Static Members Initialized?</h3>
          <ul class="list-disc ml-6">
            <li>Static variables and blocks are initialized once per class</li>
            <li>Initialization happens before the <code>main()</code> method runs</li>
            <li>They're stored in the <b>Method Area</b> (also called Class Area)</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🗂️ JVM Memory Areas</h3>
          <pre class="font-mono text-sm bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
┌────────────────────────────┐
│       Method Area          │ ◄─ static variables/methods/blocks
├────────────────────────────┤
│         Heap               │ ◄─ objects & instance variables
├────────────────────────────┤
│         Stack              │ ◄─ method call frames, local variables
└────────────────────────────┘
</pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Example with Class Loading Order</h3>
          <pre><code>public class LoadingTest {
    static int x = 10;

    static {
        System.out.println("Class is being loaded...");
        x = 20;
    }

    public static void main(String[] args) {
        System.out.println("Main started. x = " + x);
    }
}
// Output:
// Class is being loaded...
// Main started. x = 20
</code></pre>
        </div>
      `
        }
      ]
    },

    {
      heading: "Static Initializer & Static Block in Java",
      subheadings: [
        {
          title: "🔹 What is a Static Initializer?",
          content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Special block used to initialize static variables.</li>
            <li>Executes automatically when the class is loaded into memory.</li>
            <li>Defined using <code>static { }</code> — called a static block.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔸 Static Block: Definition</h3>
          <ul class="list-disc ml-6">
            <li>Anonymous block (no name, no parameters) prefixed with <code>static</code>.</li>
            <li>Runs once when the class is loaded—before <code>main()</code> or any constructor.</li>
          </ul>
          <pre><code>static {
    // Java statements
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Characteristics of Static Block</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">No name</td><td class="p-2">Static blocks don’t have a name.</td></tr>
              <tr><td class="p-2">No return type</td><td class="p-2">No return type (not even void).</td></tr>
              <tr><td class="p-2">No parameters</td><td class="p-2">Does not accept any arguments.</td></tr>
              <tr><td class="p-2">Auto-executed</td><td class="p-2">JVM runs it automatically during class loading.</td></tr>
              <tr><td class="p-2">One-time execution</td><td class="p-2">Executed only once per class.</td></tr>
              <tr><td class="p-2">Multiple blocks allowed</td><td class="p-2">You can declare multiple static blocks — executed top to bottom order.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 When Static Block is Executed?</h3>
          <ul class="list-disc ml-6">
            <li>During class loading phase by the JVM.</li>
            <li>Before <code>main()</code>, any constructor, or any static method/variable access.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Multiple Static Blocks Example</h3>
          <pre><code>public class Demo {
    static {
        System.out.println("Static Block 1");
    }

    static int x = 10;

    static {
        System.out.println("Static Block 2");
        System.out.println("x = " + x);
    }

    public static void main(String[] args) {
        System.out.println("Main method executed");
    }
}
// Output:
// Static Block 1
// Static Block 2
// x = 10
// Main method executed
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Use Case of Static Block</h3>
          <ul class="list-disc ml-6">
            <li>One-time setup for static data (e.g., reading config, initializing a connection, setting a static counter).</li>
          </ul>
          <pre><code>public class Config {
    static String dbUrl;

    static {
        // simulate fetching from config
        dbUrl = "jdbc:mysql://localhost:3306/mydb";
        System.out.println("Configuration loaded: " + dbUrl);
    }

    public static void main(String[] args) {
        System.out.println("Main started");
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Where Is It Stored?</h3>
          <ul class="list-disc ml-6">
            <li>Static blocks and static variables are stored in the <b>Method Area</b> of JVM memory.</li>
            <li>This memory is loaded once when the class is first referenced.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📦 JVM Class Loading Flow</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Phase</th>
                <th class="p-2 text-left">What Happens</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Loading</td><td class="p-2">Class bytecode (.class file) is loaded by ClassLoader</td></tr>
              <tr><td class="p-2">Linking</td><td class="p-2">Static variables are assigned default values (0, null, false)</td></tr>
              <tr><td class="p-2">Initialization</td><td class="p-2">Static blocks run, and static variables are assigned actual values</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📝 Summary Points</h3>
          <ul class="list-disc ml-6">
            <li>✅ Static block = static initializer.</li>
            <li>✅ Used for one-time class-level setup.</li>
            <li>✅ Runs once during class loading before anything else.</li>
            <li>✅ Doesn't need a method call or object.</li>
            <li>✅ Useful for initializing static variables and resources.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Static Variables in Java",
      subheadings: [
        {
          title: "🔹 Static Variables in Java",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 What is a Static Variable?</h3>
          <ul class="list-disc ml-6">
            <li><b>Static variable</b> is a <b>class-level variable</b> — shared by all objects of the class.</li>
            <li>Declared using the <code>static</code> keyword <b>inside the class</b> but <b>outside any method or constructor</b>.</li>
            <li>Belongs to the <b>class itself</b>, not to any specific instance (object).</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Key Characteristics</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Declared using <code>static</code> keyword</td><td class="p-2">Belongs to the class, not objects</td></tr>
              <tr><td class="p-2">Memory in Class Area</td><td class="p-2">Allocated once in <b>method area</b> during class loading</td></tr>
              <tr><td class="p-2">Default Initialization</td><td class="p-2">Initialized with default values (0, null, false, etc.)</td></tr>
              <tr><td class="p-2">Single Copy</td><td class="p-2">Only one copy exists — shared among all instances</td></tr>
              <tr><td class="p-2">Cannot be local</td><td class="p-2">Cannot be declared inside methods, constructors, or blocks</td></tr>
              <tr><td class="p-2">Accessed via class name</td><td class="p-2">Can be accessed directly or using class name (recommended)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔧 Syntax</h3>
          <pre><code>class ClassName {
    static dataType variableName;
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Example: Local vs Static Variable</h3>
          <pre><code>public class A {
    static int a; // static/class variable

    public static void main(String[] args) {
        int a = 10; // local variable

        System.out.println(a);   // Output: 10 (local has higher priority)
        System.out.println(A.a); // Output: 0 (default value of static int)
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📚 How to Access Static Variables?</h3>
          <ul class="list-disc ml-6">
            <li><b>Inside the same class:</b> Directly by name or using class name.</li>
            <li><b>From a different class:</b> Use <code>ClassName.variable</code>.</li>
          </ul>
          <pre><code>public class Example {
    static int count = 5;

    public static void main(String[] args) {
        System.out.println(count);         // Direct access
        System.out.println(Example.count); // Using class name
    }
}

class A {
    static int value = 100;
}

public class B {
    public static void main(String[] args) {
        System.out.println(A.value); // Access static variable of class A
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Important Notes</h3>
          <ul class="list-disc ml-6">
            <li>❌ Cannot declare a local variable as <code>static</code> inside a method.</li>
            <li>✅ Cannot have two static variables with the same name in the same scope.</li>
            <li>⚠️ If a local and static variable share the same name, local variable has higher precedence.</li>
          </ul>
          <pre><code>void someMethod() {
    static int x = 5; // ❌ Compilation error
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Benefits of Static Variables</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Benefit</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Memory efficient</td><td class="p-2">Only one copy per class — reduces memory overhead</td></tr>
              <tr><td class="p-2">Shared across objects</td><td class="p-2">Common to all instances (e.g., counter)</td></tr>
              <tr><td class="p-2">Easy to access</td><td class="p-2">Accessible without object creation</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 Real-world Use Case: Object Counter</h3>
          <pre><code>public class Counter {
    static int count = 0;

    Counter() {
        count++;
        System.out.println("Total Objects: " + count);
    }

    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();
    }
}
// Output:
// Total Objects: 1
// Total Objects: 2
// Total Objects: 3
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📝 Summary</h3>
          <ul class="list-disc ml-6">
            <li>Static variables are <b>class-level</b>, not tied to any specific object.</li>
            <li>Useful for <b>common/shared data</b> (e.g., counters, configuration, constants).</li>
            <li>Always initialized during <b>class loading</b>.</li>
            <li>Accessible via class name even without object creation.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Non-Static Members in Java",
      subheadings: [
        {
          title: "🔹 What Are Non-Static Members?",
          content: `
        <div class="mb-6">
         
          <ul class="list-disc ml-6">
            <li>Any member <b>not declared using the <code>static</code> keyword</b> is called a non-static member.</li>
            <li>These members are tied to individual objects (instances) of a class.</li>
            <li>Every time an object is created, a separate copy of all non-static members is created inside the heap memory.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧩 Types of Non-Static Members</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Member Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Non-static Variables</td><td class="p-2">Variables declared without <code>static</code>; each object has its own copy.</td></tr>
              <tr><td class="p-2">Non-static Methods</td><td class="p-2">Methods that require object reference to be called.</td></tr>
              <tr><td class="p-2">Non-static Initializer Block</td><td class="p-2">Code blocks without <code>static</code>, run each time an object is created.</td></tr>
              <tr><td class="p-2">Constructors</td><td class="p-2">Special methods used to initialize new objects.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📦 Memory Allocation</h3>
          <ul class="list-disc ml-6">
            <li>Memory for non-static members is allocated inside the object in the <b>heap memory</b>.</li>
            <li>Every object will have its own copy of non-static variables and methods.</li>
            <li>This ensures object-specific data and behavior.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 What is an Object?</h3>
          <ul class="list-disc ml-6">
            <li>An object is a block of memory created at runtime in the heap area.</li>
            <li>It is also known as an instance of a class.</li>
            <li>The process of creating an object is called <b>instantiation</b>.</li>
            <li>It is done using the <code>new</code> keyword.</li>
          </ul>
          <pre><code>Car myCar = new Car();  // Object creation (instantiation)</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example of Non-Static Members</h3>
          <pre><code>public class Student {
    // Non-static members
    String name;
    int age;

    void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    public static void main(String[] args) {
        // Object creation
        Student s1 = new Student();
        s1.name = "Ravi";
        s1.age = 20;
        s1.displayInfo();  // Accessing non-static members through object

        Student s2 = new Student();
        s2.name = "Anjali";
        s2.age = 22;
        s2.displayInfo();
    }
}
// Output:
// Name: Ravi, Age: 20
// Name: Anjali, Age: 22
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📣 Important Notes</h3>
          <ul class="list-disc ml-6">
            <li>🔸 To access non-static members inside a static context (like <code>main()</code>), you must use an object reference.</li>
            <li>❌ <code>System.out.println(name);</code> // Error, cannot access non-static directly from static context</li>
            <li>✅ <code>Student s = new Student(); System.out.println(s.name);</code> // Accessed through object</li>
            <li>🔸 Each object will always have:
              <ul class="list-circle ml-6">
                <li>Its own memory block in heap</li>
                <li>Its own copies of non-static members</li>
                <li>A built-in reference (object reference variable)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Non-Static Member</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Memory Location</td><td class="p-2">Heap (Inside Object)</td></tr>
              <tr><td class="p-2">Associated With</td><td class="p-2">Instance/Object</td></tr>
              <tr><td class="p-2">Access Method</td><td class="p-2">Using object reference</td></tr>
              <tr><td class="p-2">Lifetime</td><td class="p-2">As long as object exists</td></tr>
              <tr><td class="p-2">Reusability</td><td class="p-2">Each object has its own copy</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "Non-Static Variables in Java",
      subheadings: [
        {
          title: "🔹 Non-Static Variables in Java",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 What is a Non-Static Variable?</h3>
          <ul class="list-disc ml-6">
            <li>A non-static variable is declared inside a class, but outside any method, block, or constructor, <b>without using the <code>static</code> keyword</b>.</li>
            <li>Also known as an <b>instance variable</b>—each object gets its own copy.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📦 Memory Allocation</h3>
          <ul class="list-disc ml-6">
            <li>Memory for non-static variables is allocated inside the object (heap memory).</li>
            <li>Initialized with default values if not explicitly set.</li>
          </ul>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Data Type</th>
                <th class="p-2 text-left">Default Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">int</td><td class="p-2">0</td></tr>
              <tr><td class="p-2">boolean</td><td class="p-2">false</td></tr>
              <tr><td class="p-2">char</td><td class="p-2">'\\u0000'</td></tr>
              <tr><td class="p-2">Object references</td><td class="p-2">null</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Characteristics of Non-Static Variables</h3>
          <ul class="list-disc ml-6">
            <li>Defined at the class level (not inside methods).</li>
            <li>Memory is allocated each time an object is created.</li>
            <li>Each object has a unique copy.</li>
            <li>Accessed using object reference in a static context.</li>
            <li>Can be accessed directly in a non-static context of the same class.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Local Variable vs. Non-Static Variable</h3>
          <ul class="list-disc ml-6">
            <li>If a local variable (inside a method) has the same name as a non-static variable, the local variable takes priority.</li>
            <li>To access the instance variable in such cases, use <code>this.variableName</code> or <code>obj.variableName</code>.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example: Non-Static Variable Access</h3>
          <pre><code>package objectCreation;

public class NonStaticVariables {
    boolean b; // non-static variable

    public void display() {
        System.out.println("Non-static value: " + b);
    }

    public static void main(String[] args) {
        NonStaticVariables obj = new NonStaticVariables();
        obj.display();  // Accessing through object

        // System.out.println(b); ❌ Not allowed in static context without object
    }
}
// Output:
// Non-static value: false
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Another Example: Same Name for Local and Instance Variable</h3>
          <pre><code>public class Sample {
    int value = 50;  // instance variable

    public void showValue() {
        int value = 100;  // local variable
        System.out.println("Local value: " + value);       // prints 100
        System.out.println("Instance value: " + this.value); // prints 50
    }

    public static void main(String[] args) {
        Sample obj = new Sample();
        obj.showValue();
    }
}
// Output:
// Local value: 100
// Instance value: 50
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Declaration Location</td><td class="p-2">Inside class, outside method/constructor/block</td></tr>
              <tr><td class="p-2">Keyword Used</td><td class="p-2">No static keyword</td></tr>
              <tr><td class="p-2">Memory Location</td><td class="p-2">Heap (inside object)</td></tr>
              <tr><td class="p-2">Default Values</td><td class="p-2">Yes</td></tr>
              <tr><td class="p-2">Access in Static Context</td><td class="p-2">Using object reference</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "Non-Static Methods in Java",
      subheadings: [
        {
          title: "🔹 What is a Non-Static Method?",
          content: `
        <div class="mb-6">

          <ul class="list-disc ml-6">
            <li>A non-static method is declared <b>without the <code>static</code> keyword</b> inside a class.</li>
            <li>It belongs to the <b>instance (object)</b> of the class, not the class itself.</li>
          </ul>
          <pre><code>public class MyClass {
    void sayHello() {  // non-static method
        System.out.println("Hello from non-static method");
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Key Characteristics</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Declaration</td><td class="p-2">Inside a class, without static keyword</td></tr>
              <tr><td class="p-2">Memory</td><td class="p-2">Allocated in object's memory (heap)</td></tr>
              <tr><td class="p-2">Belongs To</td><td class="p-2">Each instance (object) of the class</td></tr>
              <tr><td class="p-2">Access From Static Context</td><td class="p-2">Using object reference</td></tr>
              <tr><td class="p-2">Access From Non-Static Context</td><td class="p-2">Can be accessed directly</td></tr>
              <tr><td class="p-2">Can Access Static Members?</td><td class="p-2">✅ Yes, directly</td></tr>
              <tr><td class="p-2">Can Be Overridden?</td><td class="p-2">✅ Yes (if not final or private)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📦 Memory Allocation</h3>
          <ul class="list-disc ml-6">
            <li>Non-static methods are loaded into the heap memory along with the object.</li>
            <li>Each object can access non-static methods (they point to the same code but are tied to the object’s state).</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧾 Example 1: Accessing Non-Static Method via Object</h3>
          <pre><code>public class Example {
    void greet() {
        System.out.println("Hello, I am a non-static method.");
    }

    public static void main(String[] args) {
        Example obj = new Example();  // object creation
        obj.greet();  // accessing non-static method using object
    }
}
// Note: You cannot call greet() directly from main() without object because main() is a static context.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧾 Example 2: Calling Non-Static from Non-Static</h3>
          <pre><code>public class Demo {
    void show() {
        System.out.println("Inside show()");
        display(); // direct call – allowed inside non-static context
    }

    void display() {
        System.out.println("Inside display()");
    }

    public static void main(String[] args) {
        Demo d = new Demo();
        d.show(); // triggers both show() and display()
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚦 Important Notes</h3>
          <ul class="list-disc ml-6">
            <li>A non-static context refers to code inside non-static blocks, constructors, or methods.</li>
            <li>Inside a non-static context:
              <ul class="list-circle ml-6">
                <li>✅ You can access other non-static members directly</li>
                <li>✅ You can access static members directly</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Access Context</th>
                <th class="p-2 text-left">Access Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Static Method</td><td class="p-2">Cannot access non-static method directly. Requires object.</td></tr>
              <tr><td class="p-2">Non-Static Method</td><td class="p-2">Can access both static and non-static methods directly.</td></tr>
              <tr><td class="p-2">Belongs To</td><td class="p-2">Instance of the class (object)</td></tr>
              <tr><td class="p-2">Memory Location</td><td class="p-2">Heap (inside object memory)</td></tr>
              <tr><td class="p-2">Example Access</td><td class="p-2"><code>obj.methodName()</code></td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },


    {
      heading: "Non-Static Initializer in Java",
      subheadings: [
        {
          title: "🔹  What is a Non-Static Initializer?",
          content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>A Non-Static Initializer Block is a block of code inside a class, declared without a method name or <code>static</code> keyword.</li>
            <li>It runs every time an object is created, just before the constructor.</li>
          </ul>
          <pre><code>class MyClass {
    {
        // Non-static initializer block
        System.out.println("This is a non-static block");
    }

    MyClass() {
        System.out.println("Constructor is called");
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Key Characteristics</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Location</td><td class="p-2">Inside a class, outside all methods</td></tr>
              <tr><td class="p-2">Keyword</td><td class="p-2">No static keyword</td></tr>
              <tr><td class="p-2">Execution Time</td><td class="p-2">Runs each time an object is created</td></tr>
              <tr><td class="p-2">Memory Allocation</td><td class="p-2">Runs as part of the object (non-static context)</td></tr>
              <tr><td class="p-2">Execution Order</td><td class="p-2">Executes before constructor, after instance variables</td></tr>
              <tr><td class="p-2">Multiple Initializer Blocks</td><td class="p-2">✅ Allowed; executed top to bottom</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 Execution Flow Example</h3>
          <pre><code>public class Demo {
    int x = 10;

    {
        System.out.println("Inside Non-Static Initializer Block");
        x = 20;
    }

    Demo() {
        System.out.println("Inside Constructor");
        System.out.println("x = " + x);
    }

    public static void main(String[] args) {
        Demo d1 = new Demo();
        Demo d2 = new Demo();
    }
}
// Output:
// Inside Non-Static Initializer Block
// Inside Constructor
// x = 20
// Inside Non-Static Initializer Block
// Inside Constructor
// x = 20
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <b>💡 Explanation:</b>
            <ul class="list-disc ml-6">
              <li>The non-static block runs before the constructor for each object creation.</li>
              <li>Variable <code>x</code> is changed in the initializer block before being used in the constructor.</li>
            </ul>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Use Cases</h3>
          <ul class="list-disc ml-6">
            <li>To initialize common logic before every constructor.</li>
            <li>Useful when multiple constructors share the same initialization code.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚫 Avoid Misuse</h3>
          <ul class="list-disc ml-6">
            <li>Avoid putting complex logic in initializer blocks.</li>
            <li>Prefer constructor or <code>init()</code> methods for maintainability.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📝 Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Property</th>
                <th class="p-2 text-left">Non-Static Initializer</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Keyword</td><td class="p-2">No keyword</td></tr>
              <tr><td class="p-2">Memory</td><td class="p-2">Heap (inside object)</td></tr>
              <tr><td class="p-2">Executes</td><td class="p-2">Every time an object is created</td></tr>
              <tr><td class="p-2">Position</td><td class="p-2">Inside class, outside method</td></tr>
              <tr><td class="p-2">Purpose</td><td class="p-2">Run common code before constructor</td></tr>
              <tr><td class="p-2">Access</td><td class="p-2">Can access instance variables & methods</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },


    {
      heading: "Non-Static Block in Java",
      subheadings: [
        {
          title: "🔹 Non-Static Block in Java",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📘 Definition</h3>
          <ul class="list-disc ml-6">
            <li>A Non-Static Block (non-static initializer block) is an anonymous block inside a class, declared without the <code>static</code> keyword.</li>
            <li>It executes automatically during object creation, just before the constructor.</li>
          </ul>
          <pre><code>class Example {
    {
        // Non-static initializer block
        System.out.println("Non-static block executed");
    }

    Example() {
        System.out.println("Constructor executed");
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 Execution Flow</h3>
          <pre><code>public class Demo {
    {
        System.out.println("Non-static block");
    }

    Demo() {
        System.out.println("Constructor");
    }

    public static void main(String[] args) {
        new Demo();
        new Demo();
    }
}
// Output:
// Non-static block
// Constructor
// Non-static block
// Constructor
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <b>Explanation:</b> The non-static block runs every time an object is created, before the constructor.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Characteristics of Non-Static Block</h3>
          <ul class="list-disc ml-6">
            <li>Anonymous block (no name, no parameters)</li>
            <li>No return type</li>
            <li>Not explicitly called by the programmer</li>
            <li>Executed automatically during object creation</li>
            <li>Memory allocated in heap (part of the object)</li>
            <li>Executed before the constructor</li>
            <li>Multiple blocks execute in top-to-bottom order</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Why Use Non-Static Blocks?</h3>
          <ul class="list-disc ml-6">
            <li>Reuse common code across all constructors</li>
            <li>Run initialization logic before any constructor executes</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Things to Remember</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Rule</th>
                <th class="p-2 text-left">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">No static keyword</td><td class="p-2">It’s not shared across objects</td></tr>
              <tr><td class="p-2">No return type</td><td class="p-2">Just like constructors</td></tr>
              <tr><td class="p-2">No method name</td><td class="p-2">It’s an anonymous block</td></tr>
              <tr><td class="p-2">Executes every time</td><td class="p-2">Once per object creation</td></tr>
              <tr><td class="p-2">Avoid complex logic</td><td class="p-2">Better to use constructors for maintainability</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Non-Static Block</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Declared with static</td><td class="p-2">❌ No</td></tr>
              <tr><td class="p-2">Executes when</td><td class="p-2">Every time an object is created</td></tr>
              <tr><td class="p-2">Calls required?</td><td class="p-2">❌ No — automatically executed</td></tr>
              <tr><td class="p-2">Position</td><td class="p-2">Inside class, outside methods</td></tr>
              <tr><td class="p-2">Can use instance members</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Execution order (multiple)</td><td class="p-2">Top to bottom</td></tr>
              <tr><td class="p-2">Use case</td><td class="p-2">Shared logic for all constructors</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },
    {
      heading: "Constructors in Java",
      subheadings: [
        {
          title: "🔷 What is a Constructor?",
          content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>A constructor is a special non-static member of a class used to load and initialize all non-static members (variables, blocks, etc.) when an object is created.</li>
            <li>It has the same name as the class and no return type (not even void).</li>
            <li>Automatically invoked during object creation; cannot be explicitly called like methods.</li>
          </ul>
          <pre><code>[access_modifier] ClassName([parameters]) {
    // statements to initialize non-static members
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Key Features</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Name</td><td class="p-2">Must be the same as the class name</td></tr>
              <tr><td class="p-2">Return type</td><td class="p-2">No return type, not even void</td></tr>
              <tr><td class="p-2">Call</td><td class="p-2">Called automatically at the time of object creation</td></tr>
              <tr><td class="p-2">Purpose</td><td class="p-2">Used to initialize object state</td></tr>
              <tr><td class="p-2">Execution order</td><td class="p-2">After non-static blocks, before other logic</td></tr>
              <tr><td class="p-2">Default constructor</td><td class="p-2">If no constructor is defined, Java adds a default no-arg constructor</td></tr>
              <tr><td class="p-2">Overloading</td><td class="p-2">Multiple constructors with different parameter lists allowed</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧭 Default Constructor (Compiler Provided)</h3>
          <pre><code>class A {
    // No constructor defined
}

// Internally compiler adds:
class A {
    A() {
        super(); // Calls Object class constructor
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Types of Constructors</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Constructor Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Default Constructor</td><td class="p-2">Added by compiler when no constructor is defined</td></tr>
              <tr><td class="p-2">User-Defined Constructor</td><td class="p-2">Written by the programmer</td></tr>
              <tr><td class="p-2">No-Args Constructor</td><td class="p-2">No parameters, used for basic state initialization</td></tr>
              <tr><td class="p-2">Parameterized Constructor</td><td class="p-2">Has parameters to initialize object with custom values</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🟢 No-Args Constructor</h3>
          <pre><code>class Student {
    String name;
    int age;

    // No-args constructor
    Student() {
        name = "Unknown";
        age = 0;
    }
}</code></pre>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            <b>Drawback:</b> Manual initialization is required every time (repetitive statements).
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🟡 Parameterized Constructor</h3>
          <pre><code>class Student {
    String name;
    int age;

    // Parameterized constructor
    Student(String n, int a) {
        name = n;
        age = a;
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔧 Practical Example: Mobile Class</h3>
          <pre><code>package constructorExample;

public class Mobile {
    String brand;
    int price;
    boolean is5G;

    // Parameterized constructor
    public Mobile(String brand, int price, boolean is5G) {
        this.brand = brand;
        this.price = price;
        this.is5G = is5G;
    }

    public void displaySpecs() {
        System.out.println("Brand: " + brand);
        System.out.println("Price: ₹" + price);
        System.out.println("5G Support: " + (is5G ? "Yes" : "No"));
    }

    public static void main(String[] args) {
        Mobile m1 = new Mobile("Samsung", 25000, true);
        m1.displaySpecs();

        System.out.println("-----");

        Mobile m2 = new Mobile("Nokia", 12000, false);
        m2.displaySpecs();
    }
}
 Output:
    Brand: Samsung
    Price: ₹25000
    5G Support: Yes
    -----
    Brand: Nokia
    Price: ₹12000
    5G Support: No
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Concept</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Constructor</td><td class="p-2">Special method to initialize objects</td></tr>
              <tr><td class="p-2">No-Args Constructor</td><td class="p-2">No parameters, used for default initialization</td></tr>
              <tr><td class="p-2">Parameterized Constructor</td><td class="p-2">Accepts values to initialize object during creation</td></tr>
              <tr><td class="p-2">Object Creation</td><td class="p-2">Automatically calls the constructor</td></tr>
              <tr><td class="p-2">Multiple Constructors</td><td class="p-2">Java allows constructor overloading</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "Access Modifiers in Java",
      subheadings: [
        {
          title: "🔐 What Are Access Modifiers?",
          content: `
        <div class="mb-6">
          <p>
            Access Modifiers control the visibility and accessibility of classes, methods, variables, and constructors across different classes and packages in Java.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧩 Java Provides 4 Access Modifiers</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Modifier</th>
                <th class="p-2 text-left">Keyword</th>
                <th class="p-2 text-left">Scope / Visibility</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">private</td><td class="p-2">private</td><td class="p-2">Same class only</td></tr>
              <tr><td class="p-2">default</td><td class="p-2">(none)</td><td class="p-2">Same package</td></tr>
              <tr><td class="p-2">protected</td><td class="p-2">protected</td><td class="p-2">Same package + Subclasses (even outside package)</td></tr>
              <tr><td class="p-2">public</td><td class="p-2">public</td><td class="p-2">Everywhere</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">1️⃣ private Modifier</h3>
          <ul class="list-disc ml-6">
            <li>Accessible only inside the same class.</li>
            <li>Not accessible from outside class, not even in a subclass.</li>
          </ul>
          <pre><code>class Example {
    private int a = 10;

    private void show() {
        System.out.println("Private method");
    }
}</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            ✅ Use Case: Encapsulation — hiding internal details of a class.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">2️⃣ Default Modifier (Package-Private)</h3>
          <ul class="list-disc ml-6">
            <li>Accessible only within the same package.</li>
            <li>No keyword is used — just omit any access modifier.</li>
          </ul>
          <pre><code>class Demo { // default class
    void show() {
        System.out.println("Default method");
    }
}</code></pre>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            ⛔ Not accessible outside the package.<br>
            ✅ Use Case: Helper classes or utility methods shared within a package.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">3️⃣ protected Modifier</h3>
          <ul class="list-disc ml-6">
            <li>Accessible in same package and subclasses (even outside package).</li>
            <li>Not accessible in non-subclass classes in other packages.</li>
          </ul>
          <pre><code>class Parent {
    protected void show() {
        System.out.println("Protected method");
    }
}

class Child extends Parent {
    void display() {
        show(); // ✅ Accessible via inheritance
    }
}</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            ✅ Use Case: Inheritance and framework development where extension is expected.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">4️⃣ public Modifier</h3>
          <ul class="list-disc ml-6">
            <li>Accessible from anywhere — same class, package, subclass, or other packages.</li>
          </ul>
          <pre><code>public class MyClass {
    public void display() {
        System.out.println("Public method");
    }
}</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            ✅ Use Case: Public APIs, libraries, or classes designed for wide use.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🏛 Access Modifiers and Classes</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Modifier</th>
                <th class="p-2 text-left">Can be Applied to Classes?</th>
                <th class="p-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">public</td><td class="p-2">✅ Yes</td><td class="p-2">Accessible everywhere</td></tr>
              <tr><td class="p-2">default</td><td class="p-2">✅ Yes</td><td class="p-2">Only within same package</td></tr>
              <tr><td class="p-2">private</td><td class="p-2">❌ No</td><td class="p-2">Cannot be applied to top-level classes</td></tr>
              <tr><td class="p-2">protected</td><td class="p-2">❌ No</td><td class="p-2">Not applicable to top-level classes</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📊 Visibility Comparison Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Modifier</th>
                <th class="p-2 text-left">Inside Class</th>
                <th class="p-2 text-left">Same Package</th>
                <th class="p-2 text-left">Subclass (Other Pkg)</th>
                <th class="p-2 text-left">Other Pkg (Non-subclass)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">private</td><td class="p-2">✅</td><td class="p-2">❌</td><td class="p-2">❌</td><td class="p-2">❌</td></tr>
              <tr><td class="p-2">default</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">❌</td><td class="p-2">❌</td></tr>
              <tr><td class="p-2">protected</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">❌</td></tr>
              <tr><td class="p-2">public</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">✅</td><td class="p-2">✅</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔔 Summary</h3>
          <ul class="list-disc ml-6">
            <li>✅ Use <b>private</b> for strict encapsulation.</li>
            <li>✅ Use <b>default</b> for package-level sharing.</li>
            <li>✅ Use <b>protected</b> when designing for inheritance across packages.</li>
            <li>✅ Use <b>public</b> when a class or member should be globally accessible.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "this Keyword in Java",
      subheadings: [
        {
          title: "🔁 What is this Keyword?",
          content: `
        <div class="mb-6">
       
          <ul class="list-disc ml-6">
            <li><b>this</b> is a reference variable that always refers to the current object of a class.</li>
            <li>Used to resolve ambiguity when local and instance variables have the same name.</li>
            <li>Can only be used in non-static context (methods, constructors, blocks).</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Key Points</h3>
          <ul class="list-disc ml-6">
            <li>Represents the current object (the one on which a non-static method or constructor is invoked).</li>
            <li>Cannot be used in static methods (static context is not tied to any object).</li>
            <li>Helps access instance variables, methods, and constructors from within the current object.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Example: Demonstrating <code>this</code></h3>
          <pre><code>package objectCreation;

public class ThisKeyword {
    int j; // instance variable

    public void d1() {
        double j = 10.5; // local variable
        System.out.println(j);       // prints local variable -> 10.5
        System.out.println(this.j);  // prints instance variable -> 0 (default value)
        System.out.println(this);    // prints current object reference
    }

    public static void main(String[] args) {
        ThisKeyword obj = new ThisKeyword();
        System.out.println(obj); // same as this inside method
        obj.d1(); // invoke method
    }
}
// Output:
// objectCreation.ThisKeyword@372f7a8d
// 10.5
// 0
// objectCreation.ThisKeyword@372f7a8d
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <ul class="list-disc ml-6">
              <li><code>j</code> accesses the local variable.</li>
              <li><code>this.j</code> accesses the instance variable.</li>
              <li><code>this</code> refers to the current object address.</li>
            </ul>
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Using <code>this</code> to Resolve Naming Conflict</h3>
          <pre><code>class Student {
    String name;

    Student(String name) {
        this.name = name; // this.name refers to instance variable
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚙️ Accessing Static Members in Non-Static Context</h3>
          <ul class="list-disc ml-6">
            <li>Inside a non-static context, static variables or methods can be accessed in 3 ways:</li>
            <li>✅ Directly: <code>System.out.println(staticVariable);</code></li>
            <li>✅ Using Class Name: <code>System.out.println(MyClass.staticVariable);</code></li>
            <li>✅ Using Object Reference (not preferred): <code>MyClass obj = new MyClass(); System.out.println(obj.staticVariable);</code></li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">this Keyword</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Refers to</td><td class="p-2">Current object</td></tr>
              <tr><td class="p-2">Usable in</td><td class="p-2">Non-static context only</td></tr>
              <tr><td class="p-2">Useful for</td><td class="p-2">Accessing instance members, resolving conflicts</td></tr>
              <tr><td class="p-2">Common use</td><td class="p-2">Inside constructors and non-static methods</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "super() Keyword in Java",
      subheadings: [
        {
          title: "🔁 What is super() Keyword?",
          content: `
        <div class="mb-6">
          
          <ul class="list-disc ml-6">
            <li><b>super()</b> is a reference variable used in a subclass to call the constructor or members (methods/variables) of its immediate superclass.</li>
            <li>It must be the first statement in a constructor (if used).</li>
            <li>Used to access superclass members when hidden or overridden by subclass members.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧱 Syntax</h3>
          <pre><code>super();        // Calls superclass's no-arg constructor
super(args);    // Calls superclass's parameterized constructor
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🎯 Use Cases of <code>super()</code></h3>
          <ol class="list-decimal ml-6">
            <li>
              <b>Calling Parent Class Constructor</b>
              <pre><code>class Parent {
    Parent() {
        System.out.println("Parent constructor called");
    }
}

class Child extends Parent {
    Child() {
        super(); // optional if Parent has no-arg constructor
        System.out.println("Child constructor called");
    }
}

public class Main {
    public static void main(String[] args) {
        Child c = new Child();
    }
}
// Output:
// Parent constructor called
// Child constructor called
</code></pre>
            </li>
            <li>
              <b>Calling Parameterized Parent Constructor</b>
              <pre><code>class Parent {
    Parent(String msg) {
        System.out.println("Parent: " + msg);
    }
}

class Child extends Parent {
    Child() {
        super("Hello from Child"); // explicitly calling parent's constructor
        System.out.println("Child constructor called");
    }
}
</code></pre>
            </li>
            <li>
              <b>Accessing Superclass Variables</b>
              <pre><code>class Parent {
    int x = 50;
}

class Child extends Parent {
    int x = 100;

    void show() {
        System.out.println("Child x = " + x);        // 100
        System.out.println("Parent x = " + super.x); // 50
    }
}
</code></pre>
            </li>
            <li>
              <b>Calling Overridden Method of Parent</b>
              <pre><code>class Parent {
    void display() {
        System.out.println("Parent display()");
    }
}

class Child extends Parent {
    void display() {
        System.out.println("Child display()");
    }

    void callParentDisplay() {
        super.display(); // calls parent class method
    }
}
</code></pre>
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Rules of <code>super()</code></h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Rule</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Position</td><td class="p-2">Must be the first statement in a constructor</td></tr>
              <tr><td class="p-2">Chaining</td><td class="p-2">If not written, Java inserts super() by default only when superclass has a no-arg constructor</td></tr>
              <tr><td class="p-2">Access</td><td class="p-2">Used only inside a constructor or non-static context</td></tr>
              <tr><td class="p-2">Purpose</td><td class="p-2">Primarily for constructor chaining and member access from parent class</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Constructor Chaining Flow with <code>super()</code></h3>
          <pre><code>class A {
    A() {
        System.out.println("A Constructor");
    }
}

class B extends A {
    B() {
        super(); // calls A()
        System.out.println("B Constructor");
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Keyword</th>
                <th class="p-2 text-left">Purpose</th>
                <th class="p-2 text-left">Used in</th>
                <th class="p-2 text-left">Accesses</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">this</td><td class="p-2">Refers to current class</td><td class="p-2">Constructor/method</td><td class="p-2">Current object</td></tr>
              <tr><td class="p-2">super</td><td class="p-2">Refers to parent class</td><td class="p-2">Constructor/method</td><td class="p-2">Parent constructor/members</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },
    {
      heading: "Encapsulation in Java",
      subheadings: [
        {
          title: "🔐 What is Encapsulation?",
          content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Encapsulation is the first principle of Object-Oriented Programming (OOP).</li>
            <li>It means binding (wrapping) data (fields/variables) and methods (behaviors) into a single unit — usually a class.</li>
            <li>Encapsulation ensures internal details are hidden from outside — known as <b>data hiding</b>.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Key Concepts</h3>
          <ul class="list-disc ml-6">
            <li><b>States</b> = Fields/Variables (e.g., id, name, balance)</li>
            <li><b>Behaviors</b> = Methods/Functions (e.g., study(), withdraw(), play())</li>
            <li>Access to data is only through methods, not direct field access.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🎓 Real-Life Example: Student</h3>
          <pre><code>public class Student {
    // Properties (states) - made private
    private int id;
    private String name;
    private int age;

    // Behavior (methods)
    public void study() {
        System.out.println(name + " is studying.");
    }

    public void writeExam() {
        System.out.println(name + " is writing the exam.");
    }

    public void play() {
        System.out.println(name + " is playing.");
    }

    // Getters and Setters (controlled access)
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔒 Data Hiding</h3>
          <ul class="list-disc ml-6">
            <li>Direct access to fields is restricted (private).</li>
            <li>Access is only via public methods (getters/setters).</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🏧 Real-Life Analogy: ATM Machine</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Component</th>
                <th class="p-2 text-left">What It Represents</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">balance</td><td class="p-2">Private Data</td></tr>
              <tr><td class="p-2">checkBalance()</td><td class="p-2">Behavior to show balance</td></tr>
              <tr><td class="p-2">withdraw()</td><td class="p-2">Behavior to reduce balance</td></tr>
              <tr><td class="p-2">changePin()</td><td class="p-2">Behavior with controlled logic</td></tr>
            </tbody>
          </table>
          <pre><code>public class ATM {
    private double balance = 10000.00;  // Encapsulated data

    public double checkBalance() { return balance; }
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawal successful!");
        } else {
            System.out.println("Insufficient balance.");
        }
    }
    public void deposit(double amount) { balance += amount; }
    public void changePin() { System.out.println("PIN changed successfully."); }
}
// Usage:
ATM atm = new ATM();
// System.out.println(atm.balance); // ❌ Invalid: balance is private
atm.withdraw(500); // ✅ valid access through method
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🍽️ Real-Life Analogy: Hotel Ordering System</h3>
          <pre><code>public class Hotel {
    private void food() { System.out.println("Food is being prepared."); }
    private void payBill() { System.out.println("Bill paid successfully."); }

    public void orderFood() {
        food();
        payBill();
        System.out.println("Enjoy your meal!");
    }
    public void callWaiter() { System.out.println("Waiter is coming."); }
    public void giveTips() { System.out.println("Thanks for the tip!"); }
}
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            You can't access food directly; you must order via public methods.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🛠️ Steps to Achieve Encapsulation</h3>
          <ol class="list-decimal ml-6">
            <li>Declare properties as <b>private</b></li>
            <li>Provide public getter and setter methods</li>
            <li>Only allow access to data through methods</li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧾 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Encapsulation</td><td class="p-2">Wrapping data + methods in one class</td></tr>
              <tr><td class="p-2">Data Hiding</td><td class="p-2">Restricting access to internal data</td></tr>
              <tr><td class="p-2">Access Modifier Used</td><td class="p-2">private for data fields</td></tr>
              <tr><td class="p-2">Access Methods</td><td class="p-2">public getters/setters for controlled access</td></tr>
              <tr><td class="p-2">Benefit</td><td class="p-2">Security, maintainability, reusability, easy debugging</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Benefits of Encapsulation</h3>
          <ul class="list-disc ml-6">
            <li>🔐 Achieves data hiding</li>
            <li>🧩 Improves modularity</li>
            <li>🔁 Allows code reusability</li>
            <li>🛡️ Provides security and control</li>
            <li>🔍 Simplifies debugging and testing</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Object Relationship in Java",
      subheadings: [
        {
          title: "🔗 Has-A Relationship",
          content: `
        <div class="mb-6">
 
          <p>
            In Java, an object relationship defines how two objects are connected and interact with each other. It helps organize classes so they can communicate and share responsibilities efficiently.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧩 Types of Object Relationships</h3>
          <ul class="list-disc ml-6">
            <li><b>Has-A Relationship (Association):</b> One class contains a reference to another class.</li>
            <li><b>Is-A Relationship (Inheritance):</b> One class inherits from another.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Has-A Relationship (Association)</h3>
          <p>
            A “Has-A” relationship means one class contains a reference to another class. It’s also known as association — one object uses another.
          </p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Example</th>
                <th class="p-2 text-left">Depending Object</th>
                <th class="p-2 text-left">Dependent Object</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Mobile has-a SIM</td><td class="p-2">Mobile</td><td class="p-2">SIM</td></tr>
              <tr><td class="p-2">School has-a Playground</td><td class="p-2">School</td><td class="p-2">Playground</td></tr>
              <tr><td class="p-2">Car has-a Engine</td><td class="p-2">Car</td><td class="p-2">Engine</td></tr>
              <tr><td class="p-2">Human has-a Brain</td><td class="p-2">Human</td><td class="p-2">Brain</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 How to Achieve Has-A Relationship?</h3>
          <pre><code>class Engine {
    public void start() {
        System.out.println("Engine started.");
    }
}

class Car {
    Engine engine = new Engine(); // Has-A Relationship

    public void drive() {
        engine.start();
        System.out.println("Driving the car...");
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 Types of Has-A Relationship</h3>
          <ul class="list-disc ml-6">
            <li><b>Composition (Strong Association)</b></li>
            <li><b>Aggregation (Weak Association)</b></li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔵 Composition</h3>
          <p>
            Composition is a strong has-a relationship where the lifetime of the dependent object is strictly bound to the lifecycle of the depending object.
          </p>
          <ul class="list-disc ml-6">
            <li>If the main object is destroyed, so is the dependent one.</li>
            <li><b>Examples:</b> Book has-a Page, House has-a Room, Human has-a Heart.</li>
          </ul>
          <pre><code>// Remote.java
public class Remote {
    String brand = "Sony";
    int price = 999;

    public void volumeUp() {
        System.out.println("Volume Increased");
    }

    public void volumeDown() {
        System.out.println("Volume Decreased");
    }
}

// TV.java
public class TV {
    String brand = "Samsung";
    Remote remote = new Remote(); // Composition

    public void turnOn() {
        System.out.println("TV is ON");
        remote.volumeUp();
    }

    public void turnOff() {
        System.out.println("TV is OFF");
    }
}

// Usage:
TV tv = new TV();
tv.turnOn();
// If the TV object is deleted, the Remote object also gets deleted.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🟠 Aggregation</h3>
          <p>
            Aggregation is a weak has-a relationship where the dependent object can exist independently of the depending object.
          </p>
          <ul class="list-disc ml-6">
            <li><b>Examples:</b> Student has-a Laptop, Mobile has-a SIM card, Company has-a Worker.</li>
          </ul>
          <pre><code>// SimCard.java
public class SimCard {
    String network = "Jio";

    public void activate() {
        System.out.println("SIM activated on " + network);
    }
}

// Mobile.java
public class Mobile {
    String model = "iPhone 14";
    SimCard sim; // Aggregation: SIM is passed from outside

    public Mobile(SimCard sim) {
        this.sim = sim;
    }

    public void makeCall() {
        sim.activate();
        System.out.println("Calling from " + model);
    }
}

// Usage:
SimCard sim = new SimCard();
Mobile mobile = new Mobile(sim);
mobile.makeCall();
// Even if the Mobile object is deleted, the SimCard still exists independently.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Composition vs Aggregation</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Composition</th>
                <th class="p-2 text-left">Aggregation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Type</td><td class="p-2">Strong Association</td><td class="p-2">Weak Association</td></tr>
              <tr><td class="p-2">Object Dependency</td><td class="p-2">Dependent object cannot exist alone</td><td class="p-2">Dependent object can exist alone</td></tr>
              <tr><td class="p-2">Lifetime</td><td class="p-2">Bound to the container object</td><td class="p-2">Independent of the container</td></tr>
              <tr><td class="p-2">Creation</td><td class="p-2">Created inside the class</td><td class="p-2">Passed from outside</td></tr>
              <tr><td class="p-2">Example</td><td class="p-2">Heart in Human</td><td class="p-2">SIM card in Mobile</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Summary</h3>
          <ul class="list-disc ml-6">
            <li>Has-A describes ownership or usage of one object by another.</li>
            <li>Two flavors: Composition (strong dependency), Aggregation (loose dependency).</li>
            <li>Helps in achieving modular, testable, and maintainable object-oriented designs.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Inheritance in Java",
      subheadings: [
        {
          title: "✅ What is Inheritance in Java?",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Definition</h3>
          <p>
            Inheritance is one of the four pillars of Object-Oriented Programming (OOP): Encapsulation, Abstraction, Inheritance, and Polymorphism.<br>
            <b>Inheritance</b> allows a child class (subclass) to acquire properties (fields) and behaviors (methods) from a parent class (superclass), promoting code reusability, logical hierarchy, and runtime polymorphism.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔗 Is-A Relationship: The Core Principle</h3>
          <p>
            The <b>Is-A</b> relationship determines if inheritance is appropriate. If <code>class B extends class A</code>, then B is a type of A.
          </p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Example</th>
                <th class="p-2 text-left">Valid Is-A?</th>
                <th class="p-2 text-left">Inheritance Used</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Dog is an Animal</td><td class="p-2">✅</td><td class="p-2"><code>class Dog extends Animal</code></td></tr>
              <tr><td class="p-2">Car is a Vehicle</td><td class="p-2">✅</td><td class="p-2"><code>class Car extends Vehicle</code></td></tr>
              <tr><td class="p-2">Rectangle is a Shape</td><td class="p-2">✅</td><td class="p-2"><code>class Rectangle extends Shape</code></td></tr>
              <tr><td class="p-2">Mobile is a Remote</td><td class="p-2">❌</td><td class="p-2">❌ Use composition (Has-A)</td></tr>
              <tr><td class="p-2">Car is an Engine</td><td class="p-2">❌</td><td class="p-2">❌ Use composition (Has-A)</td></tr>
            </tbody>
          </table>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            If the Is-A test fails, use Has-A (composition) instead of inheritance.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📦 Syntax of Inheritance</h3>
          <pre><code>class Parent {
    // fields and methods
}

class Child extends Parent {
    // additional fields and methods
}
</code></pre>
          <ul class="list-disc ml-6">
            <li><code>extends</code> keyword is used to inherit from a class.</li>
            <li>Java supports only single inheritance through classes.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example with Explanation</h3>
          <pre><code>// Parent class
class Animal {
    String name = "Generic Animal";
    public void eat() {
        System.out.println(name + " eats food");
    }
}

// Child class
class Dog extends Animal {
    public void bark() {
        System.out.println(name + " barks");
    }
}

// Driver class
public class TestInheritance {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // Inherited from Animal
        d.bark();  // Dog's own method
    }
}
// Output:
// Generic Animal eats food
// Generic Animal barks
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Types of Inheritance in Java</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Supported?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Single</td><td class="p-2">One subclass inherits one superclass</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Multilevel</td><td class="p-2">A class inherits from another child class</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Hierarchical</td><td class="p-2">Multiple subclasses inherit the same parent</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Multiple</td><td class="p-2">A class inherits from multiple classes</td><td class="p-2">❌ No (use interfaces)</td></tr>
            </tbody>
          </table>
          <h4 class="font-semibold mb-2">🔹 Single Inheritance</h4>
          <pre><code>class A { void show() { System.out.println("Class A"); } }
class B extends A { void display() { System.out.println("Class B"); } }
</code></pre>
          <h4 class="font-semibold mb-2">🔹 Multilevel Inheritance</h4>
          <pre><code>class A { void show() { System.out.println("Class A"); } }
class B extends A { void display() { System.out.println("Class B"); } }
class C extends B { void print() { System.out.println("Class C"); } }
</code></pre>
          <h4 class="font-semibold mb-2">🔹 Hierarchical Inheritance</h4>
          <pre><code>class A { void show() { System.out.println("Class A"); } }
class B extends A { void display() { System.out.println("Class B"); } }
class C extends A { void print() { System.out.println("Class C"); } }
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔐 Accessing Inherited Members</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Modifier</th>
                <th class="p-2 text-left">Accessible in Subclass?</th>
                <th class="p-2 text-left">Package Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">public</td><td class="p-2">✅ Yes</td><td class="p-2">❌ No package restriction</td></tr>
              <tr><td class="p-2">protected</td><td class="p-2">✅ Yes</td><td class="p-2">✅ Same or different package</td></tr>
              <tr><td class="p-2">(default)</td><td class="p-2">✅ Yes</td><td class="p-2">✅ Only in same package</td></tr>
              <tr><td class="p-2">private</td><td class="p-2">❌ No</td><td class="p-2">❌ Not accessible</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧩 Why Use Inheritance?</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Benefit</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Code Reusability</td><td class="p-2">Child classes reuse logic from parent class</td></tr>
              <tr><td class="p-2">Logical Hierarchy</td><td class="p-2">Real-world modeling (Is-A relationship)</td></tr>
              <tr><td class="p-2">Runtime Polymorphism</td><td class="p-2">Achieved through method overriding</td></tr>
              <tr><td class="p-2">Maintenance</td><td class="p-2">Update parent class → changes propagate to children</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚫 When Not to Use Inheritance</h3>
          <ul class="list-disc ml-6">
            <li>Use composition (Has-A) when classes do not share an Is-A relationship.</li>
            <li>Prefer composition for flexibility and loose coupling.</li>
            <li>Avoid inheritance just for code reuse.</li>
          </ul>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">❌ Wrong Inheritance</th>
                <th class="p-2 text-left">✅ Correct Composition</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2"><code>class Mobile extends SIM</code></td><td class="p-2"><code>class Mobile { SIM sim; }</code></td></tr>
              <tr><td class="p-2"><code>class Car extends Engine</code></td><td class="p-2"><code>class Car { Engine engine; }</code></td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🎯 Is-A vs Has-A: Key Differences</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Is-A (Inheritance)</th>
                <th class="p-2 text-left">Has-A (Composition)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Relationship</td><td class="p-2">A class is a type of another</td><td class="p-2">A class has another class</td></tr>
              <tr><td class="p-2">Keyword Used</td><td class="p-2">extends</td><td class="p-2">Object reference</td></tr>
              <tr><td class="p-2">Coupling</td><td class="p-2">Tightly Coupled</td><td class="p-2">Loosely Coupled</td></tr>
              <tr><td class="p-2">Reusability</td><td class="p-2">High</td><td class="p-2">Medium</td></tr>
              <tr><td class="p-2">Flexibility</td><td class="p-2">Low</td><td class="p-2">High</td></tr>
              <tr><td class="p-2">Example</td><td class="p-2">Dog extends Animal</td><td class="p-2">Car has an Engine</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📚 Best Practices for Using Inheritance</h3>
          <ul class="list-disc ml-6">
            <li>✅ Use inheritance when classes are logically related (Is-A).</li>
            <li>✅ Design your parent class to be generic and reusable.</li>
            <li>❌ Avoid inheritance for code reuse alone — prefer composition if flexibility is needed.</li>
            <li>✅ Use interfaces for multiple inheritance-like behavior.</li>
            <li>❌ Don’t inherit just to access methods — violates encapsulation.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Type Casting in Non-Primitive Types (Reference Types)",
      subheadings: [
        {
          title: "🔁 Type Casting in Reference Types (Non-Primitive)",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 What is Type Casting in Reference Types?</h3>
          <p>
            Reference type casting in Java means converting one non-primitive (reference) type into another, allowed only between related types (classes in the same inheritance hierarchy).
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧬 Types of Reference Type Casting</h3>
          <ul class="list-disc ml-6">
            <li>Upcasting (Child → Parent)</li>
            <li>Downcasting (Parent → Child)</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔼 Upcasting</h3>
          <ul class="list-disc ml-6">
            <li>Converts a child class reference to a parent class reference.</li>
            <li>Implicit (automatic by compiler).</li>
            <li>Based on Is-A relationship.</li>
            <li>After upcasting, only parent class members are accessible.</li>
          </ul>
          <pre><code>Parent ref = new Child(); // Implicit upcasting

class Fruit {}
class Apple extends Fruit {}

Apple a = new Apple();
Fruit f = a; // Upcasting: Apple is-a Fruit
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <b>Advantages:</b> Generalization, polymorphism, loose coupling.<br>
            <b>Drawback:</b> Can't access child-specific members via parent reference.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔽 Downcasting</h3>
          <ul class="list-disc ml-6">
            <li>Converts a parent class reference to a child class reference.</li>
            <li>Explicit (must use type cast).</li>
            <li>Allows access to child-specific members.</li>
            <li>Only safe if the parent reference actually points to a child object.</li>
          </ul>
          <pre><code>Child ref = (Child) parentRef; // Explicit downcasting

class Fruit {
    public void printF() { System.out.println("Fruit method"); }
}
class Apple extends Fruit {
    public void printA() { System.out.println("Apple method"); }
}

Fruit f = new Apple();  // Upcasting
Apple a = (Apple) f;    // Downcasting
a.printF();             // Parent method
a.printA();             // Child method
</code></pre>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            <b>ClassCastException:</b> Downcasting an object not actually of the child type throws <code>java.lang.ClassCastException</code>.
          </div>
          <pre><code>Fruit f = new Fruit();   // Not an Apple
Apple a = (Apple) f;     // ❌ Runtime error
a.printA();              // ❌ Throws ClassCastException
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Preventing ClassCastException: instanceof Operator</h3>
          <ul class="list-disc ml-6">
            <li>Use <code>instanceof</code> to check type before downcasting.</li>
          </ul>
          <pre><code>if (f instanceof Apple) {
    Apple a = (Apple) f;  // Safe Downcasting
    a.printA();
} else {
    System.out.println("Invalid cast, object is not an Apple");
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 instanceof Operator – Practical Example</h3>
          <pre><code>class A {}
class B extends A {}

B b = new B();
System.out.println(b instanceof A); // true
System.out.println(b instanceof B); // true
</code></pre>
          <pre><code>class Vegetable {}
class Potato extends Vegetable {}
class Tomato extends Vegetable {}
class Spinach extends Vegetable {}

Potato p = new Potato();
Vegetable v = p;  // Upcasting

System.out.println(v instanceof Vegetable); // true
System.out.println(v instanceof Potato);    // true
System.out.println(v instanceof Tomato);    // false
System.out.println(v instanceof Spinach);   // false
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📘 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Upcasting</th>
                <th class="p-2 text-left">Downcasting</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Direction</td><td class="p-2">Child → Parent</td><td class="p-2">Parent → Child</td></tr>
              <tr><td class="p-2">Syntax</td><td class="p-2">Implicit</td><td class="p-2">Explicit ((Child) ref)</td></tr>
              <tr><td class="p-2">Performed By</td><td class="p-2">Compiler</td><td class="p-2">Programmer</td></tr>
              <tr><td class="p-2">Use Case</td><td class="p-2">Generalization, Polymorphism</td><td class="p-2">Access child-specific behavior</td></tr>
              <tr><td class="p-2">Risk</td><td class="p-2">None</td><td class="p-2">Can cause ClassCastException</td></tr>
              <tr><td class="p-2">Safety with instanceof</td><td class="p-2">Not needed</td><td class="p-2">Recommended before casting</td></tr>
              <tr><td class="p-2">Based on</td><td class="p-2">Is-A Relationship</td><td class="p-2">Is-A Relationship</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Always check using <code>instanceof</code> before downcasting.</li>
            <li>Use upcasting for abstraction and polymorphism.</li>
            <li>Avoid downcasting unless absolutely necessary.</li>
            <li>Never cast between unrelated types (no Is-A relationship).</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Polymorphism in Java",
      subheadings: [
        {
          title: "✅ What is Polymorphism?",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📘 Definition</h3>
          <p>
            Polymorphism is one of the core principles of Object-Oriented Programming (OOP).<br>
            <b>Poly</b> = Many, <b>Morph</b> = Forms.<br>
            Polymorphism refers to the ability of a single function, method, or operator to behave differently based on context — the same entity exhibits different behaviors.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔀 Types of Polymorphism in Java</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Decision Made At</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Compile-Time</td><td class="p-2">During compilation</td></tr>
              <tr><td class="p-2">Runtime</td><td class="p-2">During execution</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧮 1. Compile-Time Polymorphism (Static Binding)</h3>
          <ul class="list-disc ml-6">
            <li>Method to execute is determined at compile time.</li>
            <li>Achieved using:
              <ul class="list-circle ml-6">
                <li>Method Overloading</li>
                <li>Constructor Overloading</li>
                <li>Variable/Method Shadowing</li>
              </ul>
            </li>
          </ul>
          <h4 class="font-semibold mb-2">🔹 a. Method Overloading</h4>
          <pre><code>class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
// Both add(int, int) and add(double, double) resolved at compile time.
</code></pre>
          <h4 class="font-semibold mb-2">🔹 b. Constructor Overloading</h4>
          <pre><code>class Person {
    String name; int age;
    Person(String n) { name = n; }
    Person(String n, int a) { name = n; age = a; }
}
</code></pre>
          <h4 class="font-semibold mb-2">🔹 c. Variable Shadowing</h4>
          <pre><code>class Parent { static String name = "Parent"; }
class Child extends Parent {
    static String name = "Child";
    void print() {
        System.out.println(name);       // Child
        System.out.println(super.name); // Parent
    }
}
// Note: Shadowing applies only to static members.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 2. Runtime Polymorphism (Dynamic Binding)</h3>
          <ul class="list-disc ml-6">
            <li>Method executed is determined at runtime based on the object's actual class.</li>
            <li>Achieved through Method Overriding.</li>
          </ul>
          <pre><code>class Animal {
    public void sound() { System.out.println("Animal makes a sound"); }
}
class Dog extends Animal {
    public void sound() { System.out.println("Dog barks"); }
}
class Cat extends Animal {
    public void sound() { System.out.println("Cat meows"); }
}
public class TestPolymorphism {
    public static void main(String[] args) {
        Animal a;
        a = new Dog(); a.sound(); // Output: Dog barks
        a = new Cat(); a.sound(); // Output: Cat meows
    }
}
// JVM calls the actual object's method at runtime.
</code></pre>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            <b>How?</b> Java uses dynamic method dispatch to resolve overridden methods at runtime. Upcasting allows a parent reference to refer to a child object.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📚 Summary: Compile-Time vs Runtime Polymorphism</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Compile-Time (Overloading)</th>
                <th class="p-2 text-left">Runtime (Overriding)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Resolution Time</td><td class="p-2">At compile time</td><td class="p-2">At runtime</td></tr>
              <tr><td class="p-2">Achieved By</td><td class="p-2">Overloading & Shadowing</td><td class="p-2">Overriding</td></tr>
              <tr><td class="p-2">Flexibility</td><td class="p-2">Less flexible</td><td class="p-2">More flexible</td></tr>
              <tr><td class="p-2">Based On</td><td class="p-2">Reference type</td><td class="p-2">Object type</td></tr>
              <tr><td class="p-2">Example</td><td class="p-2">add(int, int) / add(double, double)</td><td class="p-2">Dog overriding sound()</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📝 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>✅ Use overloading for similar behavior with different parameters.</li>
            <li>✅ Use overriding for specific implementations in subclasses.</li>
            <li>✅ Avoid method shadowing as it can cause confusion.</li>
            <li>✅ Favor interfaces and dynamic polymorphism for flexible, extensible design.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Method Overloading in Java",
      subheadings: [
        {
          title: "",
          content: `
        <div class="mb-6">
          <p>
            Method Overloading is a feature in Java that allows a class to have more than one method with the same name but different parameter lists (i.e., different type, number, or order of parameters).
            <br>
            <b>It enhances code readability and reusability by logically grouping methods that perform similar tasks with different input types or parameters.</b>
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔸 Why Use Method Overloading?</h3>
          <ul class="list-disc ml-6">
            <li>Improves code readability by avoiding unnecessary method names.</li>
            <li>Makes API design clean and intuitive.</li>
            <li>Supports polymorphism at compile time (known as compile-time polymorphism or static polymorphism).</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Rules for Method Overloading</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Overloading Rule</th>
                <th class="p-2 text-left">Allowed?</th>
                <th class="p-2 text-left">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Different number of parameters</td><td class="p-2">✅</td><td class="p-2"><code>add(int, int)</code> vs <code>add(int, int, int)</code></td></tr>
              <tr><td class="p-2">Different types of parameters</td><td class="p-2">✅</td><td class="p-2"><code>add(int, double)</code> vs <code>add(double, int)</code></td></tr>
              <tr><td class="p-2">Different sequence/order of parameters</td><td class="p-2">✅</td><td class="p-2"><code>print(String, int)</code> vs <code>print(int, String)</code></td></tr>
              <tr><td class="p-2">Different return type only</td><td class="p-2">❌</td><td class="p-2">Return type alone cannot distinguish overloaded methods</td></tr>
              <tr><td class="p-2">Different access modifiers</td><td class="p-2">❌</td><td class="p-2">Not sufficient for overloading alone</td></tr>
              <tr><td class="p-2">Different exceptions thrown</td><td class="p-2">❌</td><td class="p-2">Also not sufficient alone</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Valid Method Overloading Examples</h3>
          <pre><code>public class Calculator {
    // Method 1: Two int parameters
    public int add(int a, int b) {
        return a + b;
    }

    // Method 2: Three int parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method 3: Two double parameters
    public double add(double a, double b) {
        return a + b;
    }

    // Method 4: int and double (different order)
    public double add(int a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(5, 10));         // Calls method 1
        System.out.println(c.add(1, 2, 3));       // Calls method 2
        System.out.println(c.add(5.5, 2.5));      // Calls method 3
        System.out.println(c.add(10, 20.5));      // Calls method 4
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Overloading vs Overriding</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Overloading</th>
                <th class="p-2 text-left">Overriding</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Definition</td><td class="p-2">Same method name, different signature</td><td class="p-2">Same method name and signature</td></tr>
              <tr><td class="p-2">Polymorphism Type</td><td class="p-2">Compile-time (static)</td><td class="p-2">Runtime (dynamic)</td></tr>
              <tr><td class="p-2">Class Relation</td><td class="p-2">Within the same class</td><td class="p-2">In subclass (inheritance required)</td></tr>
              <tr><td class="p-2">Return Type</td><td class="p-2">Can be same or different</td><td class="p-2">Must be same or subtype</td></tr>
              <tr><td class="p-2">Access Modifier</td><td class="p-2">Can vary</td><td class="p-2">Cannot reduce visibility</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Type Promotion in Method Overloading</h3>
          <pre><code>public class PromotionExample {
    void test(int a) {
        System.out.println("int method");
    }

    void test(double d) {
        System.out.println("double method");
    }

    public static void main(String[] args) {
        PromotionExample obj = new PromotionExample();
        obj.test('A');  // char gets promoted to int → calls test(int a)
    }
}
</code></pre>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            <b>Note:</b> If Java finds an exact match, it uses it. If not, it uses type promotion or widening. It never performs narrowing automatically.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚠️ Common Mistakes and Gotchas</h3>
          <ul class="list-disc ml-6">
            <li>❌ Changing only return type does NOT overload a method.</li>
            <li>❌ Overloading based on access modifiers or exceptions is invalid.</li>
            <li>❌ Ambiguous calls can happen if overloads are too similar (e.g., <code>add(int, long)</code> vs <code>add(long, int)</code>).</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔬 Behind the Scenes: How the Compiler Handles Overloading</h3>
          <ul class="list-disc ml-6">
            <li>The Java compiler creates unique method signatures (method name + parameter types).</li>
            <li>It uses the signature to bind the correct method call.</li>
            <li>
              <b>For example:</b><br>
              <code>add(int, int)</code> → <code>add__II</code><br>
              <code>add(double, int)</code> → <code>add__DI</code>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Use overloading only when methods perform similar logic.</li>
            <li>Avoid too many overloads with subtle differences; it can confuse maintainers.</li>
            <li>Consider using Varargs (<code>int...</code>) if parameters are of the same type and quantity varies.</li>
            <li>Document behavior clearly, especially when overloads behave differently.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Summary</h3>
          <ul class="list-disc ml-6">
            <li>Method overloading lets you define multiple methods with the same name but different parameters.</li>
            <li>It supports compile-time polymorphism and is handled by the compiler.</li>
            <li>Overloading increases code clarity, maintainability, and flexibility.</li>
            <li>Avoid overloading methods that do completely unrelated tasks.</li>
          </ul>
        </div>
      `
        }
      ]
    },
    {
      heading: "Constructor Overloading in Java",
      subheadings: [
        {
          title: "🔄 What is Constructor Overloading?",
          content: `
        <div class="mb-6">
          <p>
            Constructor Overloading in Java means defining multiple constructors in the same class with different parameter lists (number, type, or order).<br>
            This allows creating objects in multiple ways, initializing them differently based on the constructor used.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Why Constructor Overloading?</h3>
          <ul class="list-disc ml-6">
            <li>Provides multiple ways to initialize an object</li>
            <li>Allows flexibility when passing data during object creation</li>
            <li>Centralizes different initialization logic for code reuse and readability</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Syntax & Rules</h3>
          <ul class="list-disc ml-6">
            <li>Constructor name must match the class name</li>
            <li>Overloaded constructors must have different parameter lists (number, type, or order)</li>
            <li>Java resolves which constructor to use based on arguments passed (Compile-time Polymorphism)</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example 1: Constructor Overloading</h3>
          <pre><code>class Student {
    String name;
    int age;
    String branch;

    // Default constructor
    Student() {
        name = "Unknown";
        age = 0;
        branch = "Not Assigned";
    }

    // Parameterized constructor with 1 argument
    Student(String n) {
        name = n;
        age = 18;
        branch = "CSE";
    }

    // Parameterized constructor with 2 arguments
    Student(String n, int a) {
        name = n;
        age = a;
        branch = "ECE";
    }

    // Parameterized constructor with 3 arguments
    Student(String n, int a, String b) {
        name = n;
        age = a;
        branch = b;
    }

    void display() {
        System.out.println("Name: " + name + ", Age: " + age + ", Branch: " + branch);
    }
}

// Test Class
public class TestConstructorOverload {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student("Ravi");
        Student s3 = new Student("Sneha", 20);
        Student s4 = new Student("Arjun", 22, "Mechanical");

        s1.display();
        s2.display();
        s3.display();
        s4.display();
    }
}
</code></pre>
          <div class="bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
            <b>📊 Output:</b><br>
            Name: Unknown, Age: 0, Branch: Not Assigned<br>
            Name: Ravi, Age: 18, Branch: CSE<br>
            Name: Sneha, Age: 20, Branch: ECE<br>
            Name: Arjun, Age: 22, Branch: Mechanical
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📝 Notes</h3>
          <ul class="list-disc ml-6">
            <li>Constructor overloading is a form of compile-time polymorphism</li>
            <li>Return type does not matter; only parameter list must differ</li>
            <li>If no constructor is defined, Java provides a default constructor</li>
            <li>You can use <code>this()</code> to call another constructor (constructor chaining)</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 Example 2: Constructor Chaining Using this()</h3>
          <pre><code>class Box {
    int length, width, height;

    Box() {
        this(1, 1, 1);  // Calls 3-argument constructor
    }

    Box(int l, int w, int h) {
        length = l;
        width = w;
        height = h;
    }

    int volume() {
        return length * width * height;
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Benefits of Constructor Overloading</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Benefit</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">🔄 Flexibility</td><td class="p-2">Initialize objects in multiple ways</td></tr>
              <tr><td class="p-2">📚 Code Reuse</td><td class="p-2">Share common logic using constructor chaining</td></tr>
              <tr><td class="p-2">🛠 Cleaner Design</td><td class="p-2">Avoid unnecessary setter calls after object creation</td></tr>
              <tr><td class="p-2">🧪 Compile-Time Safety</td><td class="p-2">Overloaded constructors are resolved during compilation</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "Method Overriding in Java",
      subheadings: [
        {
          title: "✅ What is Method Overriding?",
          content: `
        <div class="mb-6">
         
          <ul class="list-disc ml-6">
            <li>Occurs when a subclass provides a specific implementation of a method already defined in its superclass.</li>
            <li>Used to change or customize inherited behavior.</li>
            <li>Supports runtime polymorphism (dynamic method dispatch).</li>
            <li>Helps achieve abstraction, code reuse, and behavioral specialization.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Key Conditions for Overriding</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Rule</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Must Be Non-static and Non-final</td><td class="p-2">Static/final methods cannot be overridden.</td></tr>
              <tr><td class="p-2">Must Be Inherited</td><td class="p-2">Superclass method must be accessible and not private.</td></tr>
              <tr><td class="p-2">Same Method Signature</td><td class="p-2">Same method name, parameter list, and same/covariant return type.</td></tr>
              <tr><td class="p-2">Access Modifier Rule</td><td class="p-2">Subclass method must be equal or more accessible.</td></tr>
              <tr><td class="p-2">Exceptions</td><td class="p-2">Cannot throw broader checked exceptions than the overridden method.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📦 IS-A Relationship Requirement</h3>
          <ul class="list-disc ml-6">
            <li>Works only in inheritance (IS-A relationship).</li>
            <li>Subclass IS-A type of its superclass, so it can override its methods.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example: Simple Overriding</h3>
          <pre><code>class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

public class Test {
    public static void main(String[] args) {
        Animal a = new Dog(); // Upcasting
        a.sound();            // Output: Bark
    }
}
</code></pre>
          <ul class="list-disc ml-6">
            <li><code>sound()</code> in Dog overrides Animal's method.</li>
            <li>Demonstrates runtime polymorphism.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧾 Access Modifiers in Overriding</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Superclass Modifier</th>
                <th class="p-2 text-left">Allowed in Subclass</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">private</td><td class="p-2">❌ Cannot be overridden</td></tr>
              <tr><td class="p-2">default</td><td class="p-2">✅ default, protected, public (same package)</td></tr>
              <tr><td class="p-2">protected</td><td class="p-2">✅ protected, public</td></tr>
              <tr><td class="p-2">public</td><td class="p-2">✅ public only</td></tr>
            </tbody>
          </table>
          <span class="text-red-600">❗ Reducing visibility leads to compile-time error.</span>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Return Type in Overriding</h3>
          <ul class="list-disc ml-6">
            <li>Must be the same as the parent class method, or covariant (subtype).</li>
          </ul>
          <pre><code>class Animal {
    Animal get() { return this; }
}

class Dog extends Animal {
    @Override
    Dog get() { return this; } // Valid: Dog is a subtype of Animal
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📊 Static vs Overriding (Shadowing)</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Static Method</th>
                <th class="p-2 text-left">Overridden Method</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Binding Time</td><td class="p-2">Compile-time</td><td class="p-2">Runtime</td></tr>
              <tr><td class="p-2">Overridable</td><td class="p-2">❌ No (Hidden)</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Polymorphism</td><td class="p-2">❌ No</td><td class="p-2">✅ Yes</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔑 Use of super in Overriding</h3>
          <pre><code>class Parent {
    void show() {
        System.out.println("Parent show");
    }
}

class Child extends Parent {
    void show() {
        super.show(); // Call parent method
        System.out.println("Child show");
    }
}
</code></pre>
          <span class="text-green-600">✅ Useful to extend parent behavior instead of replacing it completely.</span>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚗 Real-World Example</h3>
          <pre><code>class Vehicle {
    void move() {
        System.out.println("Vehicle moves");
    }
}

class Car extends Vehicle {
    @Override
    void move() {
        System.out.println("Car drives");
    }
}
</code></pre>
          <ul class="list-disc ml-6">
            <li>Car overrides the move() method of Vehicle.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⭐ Benefits of Method Overriding</h3>
          <ul class="list-disc ml-6">
            <li>✅ Implements runtime polymorphism</li>
            <li>✅ Enables behavior customization</li>
            <li>✅ Encourages code reuse and inheritance</li>
            <li>✅ Improves code readability & maintainability</li>
            <li>✅ Promotes interface-driven programming</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚫 When Not to Use Overriding</h3>
          <ul class="list-disc ml-6">
            <li>❌ If child class does not require custom behavior</li>
            <li>❌ If method is final, static, or private</li>
            <li>❌ If parent method contains sensitive logic that must not be altered</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🏷️ @Override Annotation</h3>
          <ul class="list-disc ml-6">
            <li>Used to inform the compiler that a method is being overridden.</li>
            <li>Improves code clarity and compile-time checking.</li>
          </ul>
          <pre><code>class Parent {
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child display");
    }
}
</code></pre>
          <span class="text-green-600">✅ If the method signature is wrong, the compiler will throw an error.</span>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Aspect</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Purpose</td><td class="p-2">Redefine inherited method behavior</td></tr>
              <tr><td class="p-2">Supports</td><td class="p-2">Runtime Polymorphism</td></tr>
              <tr><td class="p-2">Key Requirement</td><td class="p-2">IS-A Relationship (Inheritance)</td></tr>
              <tr><td class="p-2">Signature</td><td class="p-2">Must match exactly (name, parameters, return type)</td></tr>
              <tr><td class="p-2">Access Modifier</td><td class="p-2">Cannot reduce visibility</td></tr>
              <tr><td class="p-2">@Override Annotation</td><td class="p-2">Optional but recommended</td></tr>
              <tr><td class="p-2">Can Override</td><td class="p-2">Non-static, non-final, non-private methods</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "Abstraction in Java",
      subheadings: [
        {
          title: "✅ What is Abstraction?",
          content: `
        <div class="mb-6">
       
          <ul class="list-disc ml-6">
            <li>Abstraction is one of the four pillars of Object-Oriented Programming (OOP).</li>
            <li>It means hiding internal implementation details and showing only the essential features to the user.</li>
            <li>Abstraction hides complexity and exposes only what is necessary.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 Real-life Example</h3>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            When you drive a car, you use the steering, accelerator, and brake without knowing how the engine works. This is abstraction.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🛠 How to Achieve Abstraction in Java?</h3>
          <ul class="list-disc ml-6">
            <li>Abstract Class</li>
            <li>Interface</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">1️⃣ Using Abstract Class</h3>
          <ul class="list-disc ml-6">
            <li>Allows 0% to 100% abstraction.</li>
            <li>Can have abstract methods (no implementation) and concrete methods (with implementation).</li>
          </ul>
          <pre><code>abstract class Shape {
    abstract void draw(); // abstract method
}
class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}
</code></pre>
          <ul class="list-disc ml-6">
            <li><b>Abstract Method:</b> Declared with <code>abstract</code>, no body.</li>
            <li><b>Concrete Method:</b> Has a complete implementation.</li>
          </ul>
          <pre><code>public abstract void start(); // abstract
public void stop() {
    System.out.println("Stopped");
} // concrete
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">❓ Can We Create Static Methods as Abstract?</h3>
          <ul class="list-disc ml-6">
            <li>❌ No, static methods cannot be abstract.</li>
            <li>Abstract methods are meant to be overridden, but static methods belong to the class, not objects.</li>
            <li>Declaring <code>static abstract</code> causes a compilation error.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">2️⃣ Concrete and Abstract Classes</h3>
          <ul class="list-disc ml-6">
            <li><b>Concrete Class:</b> No <code>abstract</code> keyword, only concrete methods.</li>
            <li><b>Abstract Class:</b> Declared with <code>abstract</code>, can have abstract and concrete methods, constructors, static blocks, and variables.</li>
            <li>Cannot be instantiated directly.</li>
          </ul>
          <pre><code>class Car {
    int speed = 60;
    void drive() {
        System.out.println("Driving at " + speed + " km/h");
    }
}
abstract class Animal {
    Animal() {
        System.out.println("Animal constructor");
    }
    abstract void makeSound();
    void eat() {
        System.out.println("Eating");
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">🔍 Characteristics of Abstract Class</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Can have abstract & concrete methods</td><td class="p-2">✅</td></tr>
              <tr><td class="p-2">Can have constructors</td><td class="p-2">✅</td></tr>
              <tr><td class="p-2">Can have static/non-static blocks</td><td class="p-2">✅</td></tr>
              <tr><td class="p-2">Can have variables</td><td class="p-2">✅</td></tr>
              <tr><td class="p-2">Cannot instantiate directly</td><td class="p-2">❌</td></tr>
              <tr><td class="p-2">Cannot declare static/abstract/private/final methods as abstract</td><td class="p-2">❌</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">📌 Example: Abstract Class with Rules</h3>
          <pre><code>abstract class Vehicle {
    int speed = 80;
    abstract void start();
    void stop() {
        System.out.println("Vehicle stopped.");
    }
    Vehicle() {
        System.out.println("Vehicle constructor called.");
    }
    static {
        System.out.println("Static block in abstract class.");
    }
}
class Bike extends Vehicle {
    void start() {
        System.out.println("Bike started.");
    }
}
public class Test {
    public static void main(String[] args) {
        Vehicle v = new Bike();
        v.start(); // Bike started.
        v.stop();  // Vehicle stopped.
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ Summary</h3>
          <ul class="list-disc ml-6">
            <li>Abstraction hides internal logic and shows only functionality.</li>
            <li>Achieved using abstract class (0–100%) or interface (100% abstraction in older Java).</li>
            <li>Abstract classes can have both implemented and unimplemented methods.</li>
            <li>Static methods cannot be abstract.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "abstract Keyword in Java",
      subheadings: [
        {
          title: "🧩 abstract Can Be Used With:",
          content: `
      
        <div class="mb-6">
           
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Element</th>
                <th class="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">class</td><td class="p-2">Declares an abstract class (cannot be instantiated directly)</td></tr>
              <tr><td class="p-2">method</td><td class="p-2">Declares an abstract method (must be implemented by child classes)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📘 Abstract Class</h3>
          <pre><code>abstract class Animal {
    abstract void sound(); // abstract method
    void eat() {
        System.out.println("This animal eats food.");
    }
}
</code></pre>
          <ul class="list-disc ml-6">
            <li>Can contain both abstract and concrete methods</li>
            <li>Cannot be instantiated directly (<code>new Animal()</code> is not allowed)</li>
            <li>Can have constructors, static blocks, and instance variables</li>
            <li>Can be inherited using <code>extends</code></li>
          </ul>
          <pre><code>abstract class A {
    abstract int x; // ❌ Error: Cannot make a variable abstract
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Concrete Class Extending Abstract Class</h3>
          <pre><code>class Dog extends Animal {
    void sound() {
        System.out.println("Barks");
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📘 Abstract Method</h3>
          <pre><code>abstract void sound();
</code></pre>
          <ul class="list-disc ml-6">
            <li>Can exist only inside an abstract class</li>
            <li>Must be overridden in the first concrete subclass</li>
            <li>Cannot be private, static, or final</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚫 Restrictions of abstract</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Element</th>
                <th class="p-2 text-left">Allowed?</th>
                <th class="p-2 text-left">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">abstract with private</td><td class="p-2">❌</td><td class="p-2">Private methods can't be inherited or overridden</td></tr>
              <tr><td class="p-2">abstract with static</td><td class="p-2">❌</td><td class="p-2">Static methods belong to class, not instance</td></tr>
              <tr><td class="p-2">abstract with final</td><td class="p-2">❌</td><td class="p-2">Final methods can't be overridden</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Example Program</h3>
          <pre><code>abstract class Vehicle {
    abstract void start(); // abstract method

    void fuel() {
        System.out.println("Fueling the vehicle...");
    }
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car is starting with key...");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.start();
        myCar.fuel();
    }
}
// Output:
// Car is starting with key...
// Fueling the vehicle...
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📚 Summary</h3>
          <ul class="list-disc ml-6">
            <li><code>abstract</code> is used for incomplete classes and methods</li>
            <li>Abstract methods don't have a body and must be overridden</li>
            <li>Abstract classes cannot be instantiated</li>
            <li>You can achieve 0% to 100% abstraction using abstract classes</li>
            <li>Helps implement polymorphism and abstraction in OOP</li>
          </ul>
        </div>
      `
        }
      ]
    },


    {
      heading: "Interface in Java ",
      subheadings: [
        {
          title: "🔷 What is an Interface?",
          content: `
        <div class="mb-6">
    
          <ul class="list-disc ml-6">
            <li>An interface is a reference type in Java.</li>
            <li>Acts as a contract or blueprint for classes to implement.</li>
            <li>Defines <b>what</b> to do, not <b>how</b> to do — all methods are abstract by default (until Java 7).</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Syntax</h3>
          <pre><code>interface InterfaceName {
    // abstract methods
    // constants
    // default methods (Java 8)
    // static methods (Java 8)
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Why Interface?</h3>
          <ul class="list-disc ml-6">
            <li>Achieve 100% abstraction (before Java 8).</li>
            <li>Implement multiple inheritance (Java doesn't support multiple inheritance through classes).</li>
            <li>Define a common protocol for unrelated classes.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Characteristics of Interface</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">By default abstract</td><td class="p-2">All methods (without body) are public and abstract unless marked otherwise.</td></tr>
              <tr><td class="p-2">No object creation</td><td class="p-2">You can't instantiate an interface using <code>new</code>. Only references are allowed.</td></tr>
              <tr><td class="p-2">Public or default only</td><td class="p-2">Interfaces can be public or package-private (default), not private/protected.</td></tr>
              <tr><td class="p-2">All variables are constants</td><td class="p-2">Variables are public static final by default and must be initialized at declaration.</td></tr>
              <tr><td class="p-2">Can be compiled</td><td class="p-2">Interface can be compiled into a .class file, just like classes.</td></tr>
              <tr><td class="p-2">Can contain main()</td><td class="p-2">Interfaces can have a main() method since Java 7+.</td></tr>
              <tr><td class="p-2">No constructor</td><td class="p-2">Constructor is not allowed because you cannot create objects of interfaces.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Members Allowed Inside Interface</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Member Type</th>
                <th class="p-2 text-left">Allowed?</th>
                <th class="p-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Abstract Method</td><td class="p-2">✅ Yes</td><td class="p-2">public abstract by default</td></tr>
              <tr><td class="p-2">Static Method</td><td class="p-2">✅ Yes (Java 8)</td><td class="p-2">Must have a body; not inherited</td></tr>
              <tr><td class="p-2">Default Method</td><td class="p-2">✅ Yes (Java 8)</td><td class="p-2">Has a body and can be overridden</td></tr>
              <tr><td class="p-2">Concrete Method</td><td class="p-2">✅ Only for default and static</td><td class="p-2"></td></tr>
              <tr><td class="p-2">Instance Variable</td><td class="p-2">❌ No</td><td class="p-2">Only public static final variables allowed</td></tr>
              <tr><td class="p-2">Constructor</td><td class="p-2">❌ No</td><td class="p-2">Not allowed</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Java 8 Features in Interface</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>default Methods</b><br>
              Allows method implementation inside interface.<br>
              <pre><code>interface Vehicle {
    default void start() {
        System.out.println("Vehicle is starting");
    }
}</code></pre>
            </li>
            <li>
              <b>static Methods</b><br>
              Static utility methods can be defined inside an interface.<br>
              <pre><code>interface Engine {
    static void checkEngine() {
        System.out.println("Engine checked");
    }
}</code></pre>
            </li>
            <li>
              <b>Functional Interfaces (Java 8)</b><br>
              An interface with exactly one abstract method.<br>
              <pre><code>@FunctionalInterface
interface Calculator {
    int operate(int a, int b);
}</code></pre>
            </li>
            <li>
              <b>@Default and @FunctionalInterface Annotations</b><br>
              <ul class="list-disc ml-6">
                <li>@FunctionalInterface ensures the interface has only one abstract method.</li>
                <li>Compilation error occurs if more than one abstract method is defined in such interfaces.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Example</h3>
          <pre><code>interface Animal {
    int AGE = 5; // public static final

    void sound(); // public abstract

    default void eat() {
        System.out.println("Animal eats");
    }

    static void breathe() {
        System.out.println("Animal breathes");
    }
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();       // Dog barks
        d.eat();         // Animal eats

        Animal.breathe(); // Animal breathes (static method call)

        System.out.println(Animal.AGE); // 5
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Key Differences: Abstract Class vs Interface</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Abstract Class</th>
                <th class="p-2 text-left">Interface</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Inheritance</td><td class="p-2">Single</td><td class="p-2">Multiple</td></tr>
              <tr><td class="p-2">Method Types</td><td class="p-2">Concrete + Abstract</td><td class="p-2">Abstract, default, static</td></tr>
              <tr><td class="p-2">Access Modifiers</td><td class="p-2">Any (public, protected, private)</td><td class="p-2">Only public (or default at top-level)</td></tr>
              <tr><td class="p-2">Constructors</td><td class="p-2">Yes</td><td class="p-2">No</td></tr>
              <tr><td class="p-2">Fields</td><td class="p-2">Can be any type</td><td class="p-2">public static final only</td></tr>
              <tr><td class="p-2">Purpose</td><td class="p-2">Partial abstraction</td><td class="p-2">Full abstraction</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "Object Class in Java ",
      subheadings: [
        {
          title: "🔷 Overview",
          content: `
        <div class="mb-6">
      
          <ul class="list-disc ml-6">
            <li>The <b>Object</b> class is the supermost class in Java.</li>
            <li>Located in <code>java.lang</code> package.</li>
            <li>Every class in Java inherits from Object (directly or indirectly).</li>
            <li>If a class does not extend another, it automatically extends Object.</li>
          </ul>
          <pre><code>class A { }
class B extends A { }
// Object ← A ← B
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Key Properties</h3>
          <ul class="list-disc ml-6">
            <li>Object class provides default implementations of several common methods.</li>
            <li>All 11 non-static methods are inherited by all classes.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔸 List of Non-Static Methods in Object Class</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">No.</th>
                <th class="p-2 text-left">Method Signature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">1</td><td class="p-2">public String toString()</td><td class="p-2">Returns string representation of object</td></tr>
              <tr><td class="p-2">2</td><td class="p-2">public boolean equals(Object obj)</td><td class="p-2">Compares object references</td></tr>
              <tr><td class="p-2">3</td><td class="p-2">public int hashCode()</td><td class="p-2">Returns integer hash code of object</td></tr>
              <tr><td class="p-2">4</td><td class="p-2">public final native Class<?> getClass()</td><td class="p-2">Returns runtime class info</td></tr>
              <tr><td class="p-2">5</td><td class="p-2">protected Object clone()</td><td class="p-2">Creates a copy of the object</td></tr>
              <tr><td class="p-2">6</td><td class="p-2">public final void wait()</td><td class="p-2">Causes thread to wait</td></tr>
              <tr><td class="p-2">7</td><td class="p-2">public final void wait(long timeout)</td><td class="p-2">Waits for given milliseconds</td></tr>
              <tr><td class="p-2">8</td><td class="p-2">public final void wait(long timeout, int nanos)</td><td class="p-2">Waits with nanosecond precision</td></tr>
              <tr><td class="p-2">9</td><td class="p-2">public final native void notify()</td><td class="p-2">Wakes up one waiting thread</td></tr>
              <tr><td class="p-2">10</td><td class="p-2">public final native void notifyAll()</td><td class="p-2">Wakes all waiting threads</td></tr>
              <tr><td class="p-2">11</td><td class="p-2">protected void finalize()</td><td class="p-2">Cleanup before garbage collection (Deprecated)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Detailed Explanation</h3>
          <ul class="list-disc ml-6">
            <li>
              <b>toString()</b><br>
              Default: <code>getClass().getName() + "@" + Integer.toHexString(hashCode())</code><br>
              Called when you print object references.<br>
              <pre><code>public class Student {
    int id = 1;
    String name = "Ravi";
    @Override
    public String toString() {
        return "Student{id=" + id + ", name='" + name + "'}";
    }
}</code></pre>
            </li>
            <li>
              <b>equals(Object obj)</b><br>
              Compares object references by default.<br>
              Override to compare object states.<br>
              <pre><code>@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Student s = (Student) obj;
    return id == s.id && name.equals(s.name);
}</code></pre>
            </li>
            <li>
              <b>hashCode()</b><br>
              Generates unique integer for object identity.<br>
              Must override when equals() is overridden.<br>
              <pre><code>@Override
public int hashCode() {
    return Objects.hash(id, name);
}</code></pre>
              <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
                <b>Contract:</b> If equals() returns true, hashCode() must be same.
              </div>
            </li>
            <li>
              <b>getClass()</b><br>
              Returns runtime class info.<br>
              <pre><code>Student s = new Student();
System.out.println(s.getClass().getName()); // Output: Student
</code></pre>
            </li>
            <li>
              <b>clone()</b><br>
              Used for object duplication (shallow copy).<br>
              The class must implement <code>Cloneable</code>.<br>
              <pre><code>class A implements Cloneable {
    int x = 10;
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}</code></pre>
            </li>
            <li>
              <b>wait(), wait(long), wait(long, int)</b><br>
              Used in thread synchronization.<br>
              Must be called inside synchronized context.<br>
              <pre><code>synchronized (obj) {
    obj.wait();
}</code></pre>
            </li>
            <li>
              <b>notify(), notifyAll()</b><br>
              Wakes up waiting threads.<br>
              Must be called inside synchronized block.<br>
              <pre><code>synchronized (obj) {
    obj.notify();
    obj.notifyAll();
}</code></pre>
            </li>
            <li>
              <b>finalize()</b> <span class="text-red-600">(Deprecated)</span><br>
              Called by GC before destroying the object.<br>
              <pre><code>@Override
protected void finalize() throws Throwable {
    System.out.println("Object is being garbage collected");
}</code></pre>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Special Notes</h3>
          <ul class="list-disc ml-6">
            <li>✅ <b>IS-A Relationship:</b> Every class inherits Object.</li>
            <li>✅ <b>No need to import java.lang:</b> Automatically imported by compiler.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Summary Table of Important Overridden Methods</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Used For</th>
                <th class="p-2 text-left">Must Override When</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">toString()</td><td class="p-2">Display object state</td><td class="p-2">Custom output</td></tr>
              <tr><td class="p-2">equals()</td><td class="p-2">Compare objects</td><td class="p-2">Compare states</td></tr>
              <tr><td class="p-2">hashCode()</td><td class="p-2">Used in collections</td><td class="p-2">equals() is overridden</td></tr>
              <tr><td class="p-2">clone()</td><td class="p-2">Duplicate object</td><td class="p-2">Implement Cloneable</td></tr>
              <tr><td class="p-2">finalize()</td><td class="p-2">Cleanup before GC</td><td class="p-2">(Deprecated) Avoid use</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "Exception Handling in Java",
      subheadings: [
        {
          title: "⚠️  What is an Exception?",
          content: `
        <div class="mb-6">
          <p>
            An <b>Exception</b> in Java is an <b>unexpected runtime error</b> that interrupts the normal flow of a program.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔍 Key Points</h3>
          <ul class="list-disc ml-6">
            <li>It is a <b>runtime problem</b>.</li>
            <li>JVM stops the program <b>abruptly</b> when an exception is thrown.</li>
            <li>An <b>abnormal statement</b> (e.g., dividing by 0, accessing a null object) causes an exception.</li>
            <li>When an exception occurs:
              <ol class="list-decimal ml-6">
                <li><b>Name</b> of the exception is printed.</li>
                <li><b>Cause</b> of the exception is shown.</li>
                <li><b>Location</b> (line number and method) where the exception occurred is displayed.</li>
              </ol>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Execution Flows</h3>
          <ul class="list-disc ml-6">
            <li><b>Normal Execution Flow:</b> Every statement is executed sequentially. No abnormal conditions occur. Program completes successfully.</li>
            <li><b>Abnormal Execution Flow:</b> One or more abnormal statements are encountered. JVM creates a Throwable object, checks if it is handled, and if not, stops the program immediately. Partial output may be printed (before the error).</li>
          </ul>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            🔸 <b>Note:</b> The statement responsible for the exception is called an <b>abnormal statement</b>.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧬 Exception Hierarchy</h3>
          <pre class="font-mono text-sm bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
java.lang.Object  
   └── Throwable  
        ├── Error (Serious problems, not handled by the programmer)  
        └── Exception  
              ├── RuntimeException (Unchecked)  
              └── Other Exceptions (Checked)
          </pre>
        
          <ul class="list-disc ml-6">
            <li><b>Throwable:</b> Root class for all errors and exceptions.</li>
            <li><b>Error:</b> Serious issues like <code>OutOfMemoryError</code>, <code>StackOverflowError</code>. Not intended to be caught or handled.</li>
            <li><b>Exception:</b> Things that can be caught and handled in the program. Further divided into:
              <ul class="list-circle ml-6">
                <li>Checked Exceptions</li>
                <li>Unchecked Exceptions (Runtime)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Types of Exceptions</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Checked</td><td class="p-2">Checked by compiler; must be handled</td><td class="p-2">IOException, SQLException</td></tr>
              <tr><td class="p-2">Unchecked</td><td class="p-2">Occur at runtime; optional to handle</td><td class="p-2">NullPointerException, ArithmeticException</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚙️ Example of Exception (Abnormal Flow)</h3>
          <pre><code>public class Demo {
    public static void main(String[] args) {
        System.out.println("Start");
        int a = 10;
        int b = 0;
        int c = a / b;  // Abnormal statement
        System.out.println("End"); // This line won’t be executed
    }
}
// Output:
Start
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Demo.main(Demo.java:6)
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🎯 Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Concept</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Exception</td><td class="p-2">Unexpected runtime error</td></tr>
              <tr><td class="p-2">JVM's role</td><td class="p-2">Creates and throws Throwable object</td></tr>
              <tr><td class="p-2">Abnormal statement</td><td class="p-2">The cause of the exception</td></tr>
              <tr><td class="p-2">Exception output includes</td><td class="p-2">Exception name, cause, and line number</td></tr>
              <tr><td class="p-2">Normal Flow</td><td class="p-2">Program executes all lines</td></tr>
              <tr><td class="p-2">Abnormal Flow</td><td class="p-2">Program stops abruptly after exception</td></tr>
              <tr><td class="p-2">Throwable hierarchy</td><td class="p-2">Throwable → Error and Exception</td></tr>
              <tr><td class="p-2">RuntimeException</td><td class="p-2">Part of unchecked exceptions</td></tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "try-catch in Java",
      subheadings: [

        {
          title: "🔶 Why use try-catch? (Syntax, Examples & Best Practices)",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔶 Why use try-catch?</h3>
          <ul class="list-disc ml-6">
            <li>Exceptions occur when the program encounters abnormal conditions (e.g., division by zero, null pointer access, array index issues).</li>
            <li>If not handled, the JVM abruptly terminates the program and only partial output is shown.</li>
            <li><b>Goal:</b> Prevent abrupt termination and let the program fail gracefully or continue execution.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧱 Basic Syntax</h3>
          <pre><code>try {
    // Code that might throw an exception
} catch (ExceptionType ref) {
    // Code to handle exception
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Key Rules of try-catch</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Rule</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">try block</td><td class="p-2">Contains risky code that might throw exceptions</td></tr>
              <tr><td class="p-2">catch block</td><td class="p-2">Catches and handles exceptions thrown from try block</td></tr>
              <tr><td class="p-2">No code between try-catch</td><td class="p-2">Cannot write statements between try and catch</td></tr>
              <tr><td class="p-2">Multiple catch allowed</td><td class="p-2">Can use multiple catch blocks to handle different exception types</td></tr>
              <tr><td class="p-2">Catch must use compatible reference</td><td class="p-2">Can catch using the specific exception or parent class (Exception, Throwable)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example 1: Basic Try-Catch (No Exception)</h3>
          <pre><code>public class Example1 {
    public static void main(String[] args) {
        try {
            int result = 10 / 2;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught exception: " + e);
        }
        System.out.println("End of program");
    }
}
// Output:
// Result: 5
// End of program
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example 2: Multiple Catch Blocks</h3>
          <pre><code>public class Example2 {
    public static void main(String[] args) {
        try {
            String s = null;
            System.out.println(s.length());  // NullPointerException
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception: " + e);
        } catch (NullPointerException e) {
            System.out.println("Null Pointer Exception: " + e);
        } catch (Exception e) {
            System.out.println("General Exception: " + e);
        }
        System.out.println("Program continues...");
    }
}
// Output:
// Null Pointer Exception: java.lang.NullPointerException
// Program continues...
</code></pre>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            <b>Note:</b> Catch more specific exceptions first, then broader ones like Exception.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example 3: finally Block</h3>
          <p>The finally block always executes, regardless of whether an exception is thrown or not.</p>
          <pre><code>public class Example3 {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e);
        } finally {
            System.out.println("Inside finally block (cleanup)");
        }
        System.out.println("Program continues...");
    }
}
// Output:
// Caught: java.lang.ArithmeticException: / by zero
// Inside finally block (cleanup)
// Program continues...
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            ✅ Use finally to close DB connections, files, network sockets, etc.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example 4: Try-Catch-Finally (No Exception Thrown)</h3>
          <pre><code>public class Example4 {
    public static void main(String[] args) {
        try {
            System.out.println("Everything is fine.");
        } catch (Exception e) {
            System.out.println("This won't execute");
        } finally {
            System.out.println("Finally always executes");
        }
    }
}
// Output:
// Everything is fine.
// Finally always executes
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Try-with-Resources (Java 7+)</h3>
          <p>Used to automatically close resources like files, DB connections, input streams.<br>
          Resource must implement AutoCloseable interface.</p>
          <pre><code>import java.io.*;

public class TryWithResourcesDemo {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
            String line = br.readLine();
            System.out.println("First line: " + line);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e);
        }
    }
}
// Output (if test.txt exists):
// First line: Hello, world!
// The BufferedReader is closed automatically, even if an exception occurs.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📚 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">try</td><td class="p-2">Defines risky code</td></tr>
              <tr><td class="p-2">catch</td><td class="p-2">Handles thrown exception</td></tr>
              <tr><td class="p-2">multiple catch</td><td class="p-2">Provides specific exception handling</td></tr>
              <tr><td class="p-2">finally</td><td class="p-2">Executes always — used for resource cleanup</td></tr>
              <tr><td class="p-2">try-with-resources</td><td class="p-2">Automatically closes resources (Java 7+)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>✅ Always close resources — use try-with-resources when possible.</li>
            <li>✅ Use specific exceptions before general ones.</li>
            <li>❌ Avoid empty catch blocks.</li>
            <li>✅ Use logging inside catch and finally for debugging/monitoring.</li>
            <li>✅ Keep exception messages meaningful and user-friendly.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "finally in Java",
      subheadings: [

        {
          title: "🔐 What is the finally block?",
          content: `
        <div class="mb-6">

          <ul class="list-disc ml-6">
            <li>The <b>finally</b> block in Java is used to execute important cleanup code regardless of whether an exception occurs or not.</li>
            <li>It always executes after the try-catch blocks—even if an exception is not thrown or even if a return statement is encountered in the try or catch.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔎 Why use finally?</h3>
          <ul class="list-disc ml-6">
            <li>To ensure resources are released, such as:</li>
            <li>• Closing file streams</li>
            <li>• Closing database connections</li>
            <li>• Releasing memory locks</li>
            <li>• Logging exit status</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧱 Syntax</h3>
          <pre><code>try {
    // risky code that may throw exception
} catch (ExceptionType e) {
    // handle exception
} finally {
    // cleanup code - always runs
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Key Characteristics of finally Block</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">🔁 Always executes</td><td class="p-2">Executes whether or not an exception occurs</td></tr>
              <tr><td class="p-2">🧹 Used for cleanup</td><td class="p-2">Ideal for closing connections, releasing memory, cleaning files, etc.</td></tr>
              <tr><td class="p-2">🚫 Cannot prevent termination</td><td class="p-2">May be skipped if System.exit(0) is called or JVM crashes</td></tr>
              <tr><td class="p-2">✅ Optional but recommended</td><td class="p-2">Not mandatory, but highly recommended for resource management</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Examples</h3>
          <h4 class="font-semibold mb-2">🔸 Example 1: No Exception Occurs</h4>
          <pre><code>public class FinallyExample1 {
    public static void main(String[] args) {
        try {
            System.out.println("Inside try block");
            int a = 10 / 2;
        } catch (ArithmeticException e) {
            System.out.println("Catch block");
        } finally {
            System.out.println("Finally block executed");
        }
    }
}
// Output:
// Inside try block
// Finally block executed
</code></pre>
          <h4 class="font-semibold mb-2">🔸 Example 2: Exception Occurs and Is Handled</h4>
          <pre><code>public class FinallyExample2 {
    public static void main(String[] args) {
        try {
            int a = 10 / 0; // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: " + e);
        } finally {
            System.out.println("Finally block executed");
        }
    }
}
// Output:
// Exception caught: java.lang.ArithmeticException: / by zero
// Finally block executed
</code></pre>
          <h4 class="font-semibold mb-2">🔸 Example 3: Exception Not Handled</h4>
          <pre><code>public class FinallyExample3 {
    public static void main(String[] args) {
        try {
            String str = null;
            System.out.println(str.length()); // NullPointerException
        } finally {
            System.out.println("Finally block executed");
        }
    }
}
// Output:
// Finally block executed
// Exception in thread "main" java.lang.NullPointerException
</code></pre>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            ⚠️ Even though the exception is not caught, the finally block still executes before termination.
          </div>
          <h4 class="font-semibold mb-2">🔸 Example 4: Return in Try and Catch</h4>
          <pre><code>public class FinallyExample4 {
    public static void main(String[] args) {
        System.out.println(method());
    }

    static int method() {
        try {
            return 10;
        } catch (Exception e) {
            return 20;
        } finally {
            System.out.println("Finally block executed");
        }
    }
}
// Output:
// Finally block executed
// 10
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            ✅ Even though a return statement is present, the finally block runs before returning.
          </div>
          <h4 class="font-semibold mb-2">⚠️ When finally Does NOT Execute</h4>
          <pre><code>public class FinallyExample5 {
    public static void main(String[] args) {
        try {
            System.out.println("Inside try");
            System.exit(0); // JVM exits immediately
        } finally {
            System.out.println("This will NOT be printed");
        }
    }
}
// Output:
// Inside try
// (finally block does NOT execute)
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Best Practices</h3>
          <ul class="list-disc ml-6">
            <li>Always use finally when working with external resources like files, sockets, DB connections.</li>
            <li>Use it even if you're using try-with-resources, in case additional cleanup is needed.</li>
            <li>Keep finally block clean and simple – avoid logic that may throw new exceptions.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Related Java 8 Feature: Try-With-Resources</h3>
          <pre><code>try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    System.out.println(br.readLine());
} catch (IOException e) {
    e.printStackTrace();
}
// Resource (br) is closed automatically after use.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">📌 Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Keyword</th>
                <th class="p-2 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">try</td><td class="p-2">Holds code that might throw error</td></tr>
              <tr><td class="p-2">catch</td><td class="p-2">Handles exceptions thrown in try</td></tr>
              <tr><td class="p-2">finally</td><td class="p-2">Executes no matter what</td></tr>
            </tbody>
          </table>
        </div>
      `
        },

      ]
    },

    {
      heading: "Multithreading in Java",
      subheadings: [
        {
          title: "🧵 What is Multithreading?",
          content: `
        <div class="mb-6">

          <ul class="list-disc ml-6">
            <li>Multithreading is a programming concept in Java where multiple threads run concurrently to perform different tasks at the same time, within a single program.</li>
            <li>A thread is the smallest unit of execution within a process.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Key Terms</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Term</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Thread</td><td class="p-2">A lightweight sub-process responsible for executing a specific task independently.</td></tr>
              <tr><td class="p-2">Multithreading</td><td class="p-2">The ability to run multiple threads simultaneously to achieve multitasking.</td></tr>
              <tr><td class="p-2">Concurrency</td><td class="p-2">When multiple threads execute in overlapping time periods, sharing CPU. (Single-core CPU)</td></tr>
              <tr><td class="p-2">Parallelism</td><td class="p-2">When multiple threads run at the same time, literally in parallel. (Multi-core CPU)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Why Multithreading?</h3>
          <ul class="list-disc ml-6">
            <li>✅ Improves CPU utilization.</li>
            <li>✅ Enables faster execution by parallel task processing.</li>
            <li>✅ Makes programs more responsive, especially in UI apps or servers.</li>
            <li>✅ Ideal for asynchronous programming like real-time chat, file downloading, etc.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Multitasking vs Multithreading</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Multitasking</th>
                <th class="p-2 text-left">Multithreading</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Definition</td><td class="p-2">Multiple processes run concurrently</td><td class="p-2">Multiple threads run concurrently</td></tr>
              <tr><td class="p-2">Memory</td><td class="p-2">High (each process has its own memory)</td><td class="p-2">Low (threads share process memory)</td></tr>
              <tr><td class="p-2">Communication</td><td class="p-2">Complex (via Inter-Process Communication)</td><td class="p-2">Easy (shared memory within process)</td></tr>
              <tr><td class="p-2">Cost</td><td class="p-2">More resource-intensive</td><td class="p-2">Lightweight and faster</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Thread vs Process</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Process</th>
                <th class="p-2 text-left">Thread</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Memory</td><td class="p-2">Each has its own memory space</td><td class="p-2">Shares memory with other threads</td></tr>
              <tr><td class="p-2">Context Switching</td><td class="p-2">Slower</td><td class="p-2">Faster</td></tr>
              <tr><td class="p-2">Isolation</td><td class="p-2">Strong</td><td class="p-2">Weak (more prone to bugs if not synchronized)</td></tr>
              <tr><td class="p-2">Overhead</td><td class="p-2">High</td><td class="p-2">Low</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Use Cases of Multithreading</h3>
          <ul class="list-disc ml-6">
            <li>GUI applications (UI thread + background tasks)</li>
            <li>Real-time games and simulations</li>
            <li>Web servers and network communication</li>
            <li>Parallel file download/upload</li>
            <li>Video/audio streaming</li>
            <li>Processing large datasets in parallel</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Advantages</h3>
          <ul class="list-disc ml-6">
            <li>✅ Efficient CPU utilization</li>
            <li>✅ Non-blocking behavior</li>
            <li>✅ Better performance and throughput</li>
            <li>✅ Easier real-time simulation and responsiveness</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔹 Disadvantages</h3>
          <ul class="list-disc ml-6">
            <li>❌ More complex to design and debug</li>
            <li>❌ Risk of race conditions, deadlocks, or data inconsistency without proper synchronization</li>
            <li>❌ Difficult to test and maintain</li>
            <li>❌ Can lead to unpredictable behavior if not handled carefully</li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Thread Creation in Java",
      subheadings: [
        {
          title: "🧵 How to Create a Thread in Java",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Java supports three standard ways to create and execute a thread:</h3>
          <ol class="list-decimal ml-6">
            <li>By extending the <b>Thread</b> class</li>
            <li>By implementing the <b>Runnable</b> interface</li>
            <li>By implementing the <b>Callable</b> interface (with Future)</li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ 1. By Extending Thread Class</h3>
          <ul class="list-disc ml-6">
            <li>Create a custom class extending Thread.</li>
            <li>Override the <code>run()</code> method with thread logic.</li>
            <li>Create an object and call <code>.start()</code> to begin execution.</li>
          </ul>
          <pre><code>class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Hello from MyThread");
    }
}

public class Test {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start(); // starts the thread and calls run()
    }
}
// Output:
// Hello from MyThread
</code></pre>
          <ul class="list-disc ml-6">
            <li><code>start()</code> registers the thread with JVM and internally calls <code>run()</code>.</li>
            <li>Do not call <code>run()</code> directly — it will act as a normal method.</li>
            <li>Calling <code>start()</code> multiple times on the same thread causes <code>IllegalThreadStateException</code>.</li>
          </ul>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <b>Advantages:</b> Easy for simple thread logic.<br>
            <b>Disadvantages:</b> No multiple inheritance (can't extend another class).
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ 2. By Implementing Runnable Interface</h3>
          <ul class="list-disc ml-6">
            <li>Create a class that implements <code>Runnable</code>.</li>
            <li>Override <code>run()</code> method.</li>
            <li>Create an object and pass it to a <code>Thread</code> constructor.</li>
            <li>Call <code>start()</code> on the Thread object.</li>
          </ul>
          <pre><code>class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Hello from Runnable thread");
    }
}

public class Test {
    public static void main(String[] args) {
        MyRunnable myTask = new MyRunnable();
        Thread t1 = new Thread(myTask);
        t1.start(); // executes run() in a separate thread
    }
}
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <b>Advantages:</b> More flexible, allows extending other classes.<br>
            <b>Disadvantages:</b> Slightly more boilerplate.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ 3. By Implementing Callable Interface</h3>
          <ul class="list-disc ml-6">
            <li>Implements <code>Callable&lt;V&gt;</code> instead of Runnable.</li>
            <li>Override <code>call()</code> method (can return a result and throw exceptions).</li>
            <li>Use <code>ExecutorService</code> and <code>Future</code> to manage and retrieve results.</li>
          </ul>
          <pre><code>import java.util.concurrent.*;

class MyCallable implements Callable<String> {
    public String call() throws Exception {
        return "Callable thread result";
    }
}

public class Test {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<String> result = executor.submit(new MyCallable());
        
        System.out.println(result.get()); // Blocks until result is available
        
        executor.shutdown();
    }
}
// Output:
// Callable thread result
</code></pre>
          <div class="bg-green-50 border-l-4 border-green-400 p-3 my-4">
            <b>Advantages:</b> Can return a value and throw exceptions.<br>
            <b>Disadvantages:</b> Needs ExecutorService and Future.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">🧪 Multiple Threads Example</h3>
          <pre><code>class A extends Thread {
    public void run() {
        System.out.println("Thread A is running");
    }
}

class B extends Thread {
    public void run() {
        System.out.println("Thread B is running");
    }
}

public class Test {
    public static void main(String[] args) {
        A t1 = new A();
        B t2 = new B();
        t1.start();
        t2.start();
    }
}
// Output:
// Thread A is running
// Thread B is running
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ Comparison Summary</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Return Value</th>
                <th class="p-2 text-left">Exception Handling</th>
                <th class="p-2 text-left">Supports Multiple Inheritance</th>
                <th class="p-2 text-left">Suitable For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2">Thread Class</td>
                <td class="p-2">No</td>
                <td class="p-2">No</td>
                <td class="p-2">❌</td>
                <td class="p-2">Simple standalone threads</td>
              </tr>
              <tr>
                <td class="p-2">Runnable Interface</td>
                <td class="p-2">No</td>
                <td class="p-2">No</td>
                <td class="p-2">✅</td>
                <td class="p-2">Shared task logic</td>
              </tr>
              <tr>
                <td class="p-2">Callable Interface</td>
                <td class="p-2">✅ (via Future)</td>
                <td class="p-2">✅ (throws checked)</td>
                <td class="p-2">✅</td>
                <td class="p-2">Tasks needing results</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
        }
      ]
    },

    {
      heading: "Thread Lifecycle in Java",
      subheadings: [
        {
          title: "🧵 Thread Lifecycle in Java",
          content: `
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧭 Thread Lifecycle Diagram</h3>
          <pre class="font-mono text-sm bg-gray-50 border-l-4 border-gray-400 p-3 my-4">
+---------------+
|   NEW         |
+---------------+
        |
    start()
        ↓
+---------------+
|  RUNNABLE     |<-----------------------------+
+---------------+                              |
    |        ↑                                 |
Running     yield(),                           |
    ↓         wait(), join(), etc.             |
+---------------+                              |
|  BLOCKED      |-----> monitor lock acquired--+
+---------------+
    |
    ↓
+---------------+
|  WAITING      |
+---------------+
    |
    ↓
+---------------+
| TIMED_WAITING |
+---------------+
    |
    ↓
+---------------+
| TERMINATED    |
+---------------+
          </pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 States in Detail</h3>
          <ol class="list-decimal ml-6">
            <li><b>NEW</b><br>
              Thread is created but not started.<br>
              <code>Thread t = new Thread(); // NEW</code>
            </li>
            <li><b>RUNNABLE</b><br>
              After <code>start()</code>, thread is ready to run.<br>
              <code>t.start(); // NEW → RUNNABLE</code>
            </li>
            <li><b>RUNNING</b><br>
              JVM picks thread from RUNNABLE pool.<br>
              Only one thread per core runs at a time.
            </li>
            <li><b>BLOCKED</b><br>
              Waiting to acquire a monitor lock (e.g., <code>synchronized</code> block).
              <pre><code>synchronized(obj) {
   // Thread enters BLOCKED if obj is locked
}</code></pre>
            </li>
            <li><b>WAITING</b><br>
              Waiting indefinitely for another thread.<br>
              <code>thread.join();</code> <code>obj.wait();</code>
            </li>
            <li><b>TIMED_WAITING</b><br>
              Waiting for a specified time.<br>
              <code>Thread.sleep(1000);</code> <code>obj.wait(5000);</code>
            </li>
            <li><b>TERMINATED</b><br>
              Thread has finished or thrown an uncaught exception.
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Real-life Example with All Lifecycle Transitions</h3>
          <pre><code>class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
        try {
            Thread.sleep(1000); // TIMED_WAITING
        } catch (InterruptedException e) {
            System.out.println("Interrupted!");
        }
        System.out.println("Thread exiting...");
    }
}

public class ThreadLifecycleDemo {
    public static void main(String[] args) throws InterruptedException {
        MyThread t = new MyThread();  // NEW
        System.out.println("State: " + t.getState());

        t.start();                    // RUNNABLE
        System.out.println("State after start: " + t.getState());

        Thread.sleep(200);           // Give it time to run
        System.out.println("State while running: " + t.getState());

        t.join();                    // WAITING (main waits for t)
        System.out.println("State after thread finishes: " + t.getState()); // TERMINATED
    }
}
// Output (timing may vary):
// State: NEW
// State after start: RUNNABLE
// Thread is running...
// State while running: TIMED_WAITING
// Thread exiting...
// State after thread finishes: TERMINATED
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">💡 JVM Behavior & Key Notes</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">State</th>
                <th class="p-2 text-left">Triggered by</th>
                <th class="p-2 text-left">Return to RUNNABLE when?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">NEW</td><td class="p-2">Object creation</td><td class="p-2">start() is called</td></tr>
              <tr><td class="p-2">RUNNABLE</td><td class="p-2">After start()</td><td class="p-2">OS thread scheduler picks it</td></tr>
              <tr><td class="p-2">BLOCKED</td><td class="p-2">Waiting for monitor lock</td><td class="p-2">Lock is released</td></tr>
              <tr><td class="p-2">WAITING</td><td class="p-2">wait(), join(), park()</td><td class="p-2">notify(), join() completes</td></tr>
              <tr><td class="p-2">TIMED_WAITING</td><td class="p-2">sleep(ms), wait(ms), join(ms)</td><td class="p-2">Time expires</td></tr>
              <tr><td class="p-2">TERMINATED</td><td class="p-2">run() completes or exception</td><td class="p-2">Never returns</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🛠 Java 8 Thread Enhancements</h3>
          <ul class="list-disc ml-6">
            <li><code>Executors.newWorkStealingPool()</code>: uses multiple worker threads based on available cores.</li>
            <li><code>CompletableFuture</code>: better async programming model.</li>
            <li>Lambda with Runnable:
              <pre><code>Thread t = new Thread(() -> System.out.println("Lambda thread"));
t.start();
</code></pre>
            </li>
          </ul>
        </div>
      `
        }
      ]
    },

    {
      heading: "Threads in Java",
      subheadings: [
        {
          title: "🧵 Types of Threads in Java",
          content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li><b>User Thread:</b> Custom threads created by the programmer. The JVM keeps running until all user threads finish.</li>
            <li><b>Daemon Thread:</b> Background threads for low-priority tasks (e.g., garbage collection). JVM exits when all user threads are done, even if daemon threads are running.</li>
          </ul>
          <pre><code>// User Thread Example
Thread t = new Thread(() -> {
    System.out.println("User Thread");
});
t.start();

// Daemon Thread Example
Thread t = new Thread(() -> {
    while (true) {
        System.out.println("Daemon Thread running...");
    }
});
t.setDaemon(true); // Must be set before start()
t.start();
</code></pre>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            ⚠️ JVM will terminate daemon threads once all user threads finish.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Java Thread Classification by Purpose</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Main Thread</td><td class="p-2">Default thread created by JVM</td><td class="p-2">Executes main() method</td></tr>
              <tr><td class="p-2">Child Thread</td><td class="p-2">User-defined thread from main</td><td class="p-2">new Thread(...).start()</td></tr>
              <tr><td class="p-2">Daemon Thread</td><td class="p-2">Background thread</td><td class="p-2">GC, watchdog, etc.</td></tr>
              <tr><td class="p-2">Worker Thread</td><td class="p-2">Used in thread pools</td><td class="p-2">ExecutorService</td></tr>
              <tr><td class="p-2">System Thread</td><td class="p-2">Managed by JVM</td><td class="p-2">Signal Dispatcher, GC</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🌟 Key Features of Java Threads</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Lightweight</td><td class="p-2">Threads share memory/resources</td></tr>
              <tr><td class="p-2">Concurrency</td><td class="p-2">Multiple threads run independently</td></tr>
              <tr><td class="p-2">Multitasking</td><td class="p-2">Simultaneous execution of tasks</td></tr>
              <tr><td class="p-2">Shared Memory</td><td class="p-2">Threads share process data</td></tr>
              <tr><td class="p-2">Independent Execution</td><td class="p-2">Each thread runs separately</td></tr>
              <tr><td class="p-2">Priority-Based Scheduling</td><td class="p-2">Priority from 1 (MIN) to 10 (MAX)</td></tr>
              <tr><td class="p-2">Thread Lifecycle Management</td><td class="p-2">States: NEW → RUNNABLE → TERMINATED</td></tr>
              <tr><td class="p-2">Daemon Support</td><td class="p-2">Background services</td></tr>
              <tr><td class="p-2">Synchronization Support</td><td class="p-2">Synchronized blocks/methods</td></tr>
              <tr><td class="p-2">Exception Handling</td><td class="p-2">Each thread handles its own exceptions</td></tr>
              <tr><td class="p-2">Thread Grouping</td><td class="p-2">Group threads for control (deprecated)</td></tr>
              <tr><td class="p-2">Java 8 Enhancements</td><td class="p-2">Lambda Runnable, CompletableFuture, work-stealing pools</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example: Main vs Child Thread</h3>
          <pre><code>public class ThreadExample {
    public static void main(String[] args) {
        System.out.println("Main Thread: " + Thread.currentThread().getName());

        Thread child = new Thread(() -> {
            System.out.println("Child Thread: " + Thread.currentThread().getName());
        });

        child.start();
    }
}
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 Daemon Thread Use Case</h3>
          <pre><code>public class DaemonDemo {
    public static void main(String[] args) {
        Thread daemon = new Thread(() -> {
            while (true) {
                System.out.println("Background cleanup...");
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {}
            }
        });
        daemon.setDaemon(true);
        daemon.start();

        System.out.println("Main thread done.");
    }
}
// Daemon stops as soon as the main thread finishes.
</code></pre>
        </div>
      `
        }
      ]
    },

    {
      heading: "Common Thread Methods in Java",
      subheadings: [
        {
          title: "These are some commonly used method in java.lang.Thread class",
          content: `
        <div class="mb-6">
          <ol class="list-decimal ml-6">
            <li>
              <b>start()</b><br>
              Starts a new thread and calls the <code>run()</code> method internally.<br>
              <pre><code>MyThread t = new MyThread();
t.start();  // Creates a new thread and calls run()</code></pre>
              <span class="text-yellow-600">📌 If you call start() more than once on the same thread object, it will throw IllegalThreadStateException.</span>
            </li>
            <li>
              <b>run()</b><br>
              Contains the code that defines the thread's task.<br>
              <pre><code>public void run() {
    System.out.println("Thread is running");
}</code></pre>
              <span class="text-yellow-600">📌 Calling run() directly will not start a new thread; it executes in the current thread.</span>
            </li>
            <li>
              <b>sleep(long millis)</b><br>
              Causes the current thread to pause execution for the specified milliseconds.<br>
              <pre><code>Thread.sleep(1000);  // Pauses for 1 second</code></pre>
              <span class="text-yellow-600">📌 Use this to simulate delay or pause thread without busy waiting. Throws InterruptedException.</span>
            </li>
            <li>
              <b>join()</b><br>
              Waits for a thread to complete before continuing.<br>
              <pre><code>Thread t = new Thread(new MyTask());
t.start();
t.join();  // Main thread will wait until t finishes</code></pre>
            </li>
            <li>
              <b>isAlive()</b><br>
              Checks if the thread is still running.<br>
              <pre><code>if (t.isAlive()) {
    System.out.println("Thread is still running");
}</code></pre>
            </li>
            <li>
              <b>yield()</b><br>
              Causes the currently executing thread to pause temporarily and give other threads a chance.<br>
              <pre><code>Thread.yield();  // Suggests the scheduler to give chance to others</code></pre>
              <span class="text-yellow-600">📌 It's just a suggestion to the JVM, not a guarantee.</span>
            </li>
            <li>
              <b>setName(String name) and getName()</b><br>
              Assign or retrieve the thread’s name.<br>
              <pre><code>t.setName("Worker-1");
System.out.println(t.getName());</code></pre>
            </li>
            <li>
              <b>setPriority(int priority) and getPriority()</b><br>
              Set or get thread priority between 1 (MIN_PRIORITY) and 10 (MAX_PRIORITY). Default is 5.<br>
              <pre><code>t.setPriority(Thread.MAX_PRIORITY);
System.out.println(t.getPriority());</code></pre>
              <span class="text-yellow-600">⚠️ Thread scheduling based on priority is platform-dependent.</span>
            </li>
            <li>
              <b>interrupt() and isInterrupted()</b><br>
              Interrupts a sleeping or waiting thread.<br>
              <pre><code>t.interrupt(); // Will interrupt t if it's sleeping or waiting
if (t.isInterrupted()) {
    System.out.println("Thread was interrupted");
}</code></pre>
            </li>
            <li>
              <b>currentThread()</b><br>
              Returns a reference to the currently executing thread.<br>
              <pre><code>Thread t = Thread.currentThread();
System.out.println(t.getName());</code></pre>
            </li>
            <li>
              <b>setDaemon(true) and isDaemon()</b><br>
              Mark a thread as a daemon thread, which dies when all user threads finish.<br>
              <pre><code>t.setDaemon(true); // Marks t as daemon
System.out.println(t.isDaemon()); // true</code></pre>
              <span class="text-yellow-600">📌 Daemon threads are typically used for background tasks like garbage collection.</span>
            </li>
            <li>
              <b>stop() (Deprecated ❌)</b><br>
              Forcefully stops the thread (unsafe).<br>
              <span class="text-red-600">❌ Deprecated since it can leave shared resources in inconsistent state.</span>
            </li>
          </ol>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 Summary Table</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Purpose</th>
                <th class="p-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">start()</td><td class="p-2">Starts the thread</td><td class="p-2">Internally calls run()</td></tr>
              <tr><td class="p-2">run()</td><td class="p-2">Task to perform</td><td class="p-2">Override it in your custom thread</td></tr>
              <tr><td class="p-2">sleep()</td><td class="p-2">Pause the thread</td><td class="p-2">Static method, throws exception</td></tr>
              <tr><td class="p-2">join()</td><td class="p-2">Wait for another thread</td><td class="p-2">Main thread waits</td></tr>
              <tr><td class="p-2">yield()</td><td class="p-2">Give chance to other threads</td><td class="p-2">Static; not guaranteed</td></tr>
              <tr><td class="p-2">isAlive()</td><td class="p-2">Check if thread is running</td><td class="p-2">Returns boolean</td></tr>
              <tr><td class="p-2">interrupt()</td><td class="p-2">Interrupt sleeping/waiting thread</td><td class="p-2">Sets interrupted flag</td></tr>
              <tr><td class="p-2">isInterrupted()</td><td class="p-2">Check interrupted flag</td><td class="p-2">Returns boolean</td></tr>
              <tr><td class="p-2">currentThread()</td><td class="p-2">Returns current thread</td><td class="p-2">Useful in static context</td></tr>
              <tr><td class="p-2">setName()/getName()</td><td class="p-2">Set/get thread name</td><td class="p-2">Useful for identification</td></tr>
              <tr><td class="p-2">setPriority()/getPriority()</td><td class="p-2">Set/get thread priority</td><td class="p-2">Platform-dependent</td></tr>
              <tr><td class="p-2">setDaemon()</td><td class="p-2">Marks thread as daemon</td><td class="p-2">Must be called before start()</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧪 Example Usage</h3>
          <pre><code>// Start and name a thread
Thread t = new Thread(() -> {
    System.out.println("Running: " + Thread.currentThread().getName());
});
t.setName("Worker-1");
t.setPriority(Thread.MAX_PRIORITY);
t.start();

if (t.isAlive()) {
    System.out.println("Thread is still running");
}
</code></pre>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            ⚠️ Always use <code>start()</code> to begin a thread; calling <code>run()</code> directly does not start a new thread.
          </div>
        </div>
      `
        }
      ]
    },

    {
      heading: "Synchronization vs Asynchronization in Java",
      subheadings: [
        {
          title: "🔒 What is Synchronization?",
          content: `
        <div class="mb-6">
 
       
          <p>
            Synchronization in Java refers to the controlled access of shared resources by multiple threads. It ensures that only one thread can access a critical section of code at any given time, avoiding conflicting operations on shared data.
          </p>
          <ul class="list-disc ml-6">
            <li>Establishes a mutual exclusion system via monitors (intrinsic locks).</li>
            <li>Ensures serialized access to blocks or methods by using the <code>synchronized</code> keyword.</li>
            <li>Prevents race conditions by placing execution in a controlled queue.</li>
            <li>Applies to both instance and static context methods/blocks.</li>
            <li>Also used in inter-thread communication using wait/notify patterns.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Pros of Synchronization</h3>
          <ul class="list-disc ml-6">
            <li>🛡️ Data Reliability: Synchronization enforces atomicity and visibility, ensuring reliable data processing.</li>
            <li>🧩 Predictable Execution: Reduces bugs that arise from unpredictable thread scheduling.</li>
            <li>🧵 Thread Cooperation: Enables controlled thread interaction for critical business logic.</li>
            <li>🧠 Encapsulates Complexity: Abstracts thread coordination logic, making inter-thread data integrity simpler.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Cons of Synchronization</h3>
          <ul class="list-disc ml-6">
            <li>🕒 Performance Bottlenecks: Only one thread executes at a time in a critical section, underutilizing CPUs.</li>
            <li>⚠️ Deadlock Hazards: Improper nested locking can freeze program execution.</li>
            <li>🧶 Thread Starvation: Some threads may never acquire the lock if others dominate.</li>
            <li>🔄 Reduced Parallelism: Limits the true potential of concurrent processing.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">Asynchronization in Java</h2>
          <h3 class="text-xl font-semibold mb-2">🧠 What is Asynchronization?</h3>
          <p>
            Asynchronization is a non-blocking execution model where threads operate independently and do not wait for others to finish before proceeding. It's the engine behind high-throughput and reactive systems.
          </p>
          <ul class="list-disc ml-6">
            <li>Threads execute tasks concurrently with minimal dependency.</li>
            <li>Emphasizes task separation, not execution order.</li>
            <li>Avoids locks, making use of callback functions, Futures, CompletableFuture, and ExecutorService.</li>
            <li>Ideal for event-driven, I/O-intensive, and real-time applications.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Pros of Asynchronization</h3>
          <ul class="list-disc ml-6">
            <li>⚡ Speed & Efficiency: Unlocks full CPU usage by maximizing thread parallelism.</li>
            <li>🧱 Scalability: Best suited for large-scale systems like microservices and distributed computing.</li>
            <li>🖥️ Responsive UI: Improves user experience in GUI apps by keeping the interface active.</li>
            <li>🔌 Better I/O Handling: Optimized for networking, file handling, and API calls without blocking the thread.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Cons of Asynchronization</h3>
          <ul class="list-disc ml-6">
            <li>🧠 Complex Logic Flow: Difficult to trace logic due to callbacks and chained executions.</li>
            <li>🧪 Race Conditions Risk: Shared resource conflicts can emerge without proper control mechanisms.</li>
            <li>🧵 Thread Safety Must Be Manual: Requires explicit use of thread-safe collections or atomic classes.</li>
            <li>🧩 Debugging Nightmare: Stack traces become harder to follow due to disjointed flow.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">Synchronization vs Asynchronization</h2>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Aspect</th>
                <th class="p-2 text-left">Synchronization</th>
                <th class="p-2 text-left">Asynchronization</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Control Flow</td><td class="p-2">Thread waits for its turn (blocking)</td><td class="p-2">Thread proceeds independently (non-blocking)</td></tr>
              <tr><td class="p-2">CPU Utilization</td><td class="p-2">Under-utilized in thread contention</td><td class="p-2">Optimized for maximum usage</td></tr>
              <tr><td class="p-2">Shared Data Handling</td><td class="p-2">Safer with intrinsic locks</td><td class="p-2">Riskier, requires custom thread-safety logic</td></tr>
              <tr><td class="p-2">Programming Style</td><td class="p-2">Straightforward, imperative</td><td class="p-2">Callback-based, reactive</td></tr>
              <tr><td class="p-2">Error Risk</td><td class="p-2">Prone to deadlocks and livelocks</td><td class="p-2">Prone to race conditions</td></tr>
              <tr><td class="p-2">Best Use Case</td><td class="p-2">Banking systems, transaction processing</td><td class="p-2">File downloads, UI updates, REST API calls</td></tr>
              <tr><td class="p-2">Complexity Level</td><td class="p-2">Moderate — lock management required</td><td class="p-2">High — requires experience in reactive and async paradigms</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-2">Real-world Analogy</h2>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            <b>🔐 Synchronization:</b> Imagine a bathroom with a lock—only one person can enter at a time to avoid chaos. Others must wait outside. It's safe but slow.<br>
            <b>⚡ Asynchronization:</b> Now imagine multiple vending machines. People walk up, press buttons, and move on without waiting for others. It’s fast, but two people pressing the same button might get in each other's way if not handled smartly.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">When to Use What?</h3>
          <ul class="list-disc ml-6">
            <li><b>Use Synchronization when:</b>
              <ul class="list-circle ml-6">
                <li>Shared data consistency is critical.</li>
                <li>You have limited resources.</li>
                <li>Tasks depend on a sequence or order.</li>
              </ul>
            </li>
            <li><b>Use Asynchronization when:</b>
              <ul class="list-circle ml-6">
                <li>Tasks are independent.</li>
                <li>You’re handling many I/O operations.</li>
                <li>You want responsive or real-time systems.</li>
              </ul>
            </li>
          </ul>
        </div>
      `
        }
      ]
    },
    {
      heading: "Thread Scheduler in Java",
      subheadings: [
        {
          title: "",
          content: `
        <div class="mb-6">
 
          <p>
            The <b>Thread Scheduler</b> in Java is a part of the Java Virtual Machine (JVM) responsible for deciding which thread to run next when multiple threads are ready to execute. It manages thread execution order and CPU time allocation in a multi-threaded environment.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚙️ What is Thread Scheduling?</h3>
          <ul class="list-disc ml-6">
            <li>Thread scheduling is the process of determining which thread runs at any given point in time.</li>
            <li>When multiple threads are in the <b>Runnable</b> state, the thread scheduler decides which one should execute based on priority and scheduling policy.</li>
            <li><b>Note:</b> The exact behavior of the thread scheduler is <b>platform-dependent</b> and not guaranteed by Java.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 States Controlled by the Thread Scheduler</h3>
          <ul class="list-disc ml-6">
            <li>Only threads in the <b>Runnable</b> state (ready to run) are considered by the scheduler.</li>
            <li>The scheduler does <b>not</b> control threads in:</li>
            <ul class="list-circle ml-6">
              <li>Blocked</li>
              <li>Waiting</li>
              <li>Sleeping</li>
            </ul>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔄 Scheduling Strategies (Platform-dependent)</h3>
          <ol class="list-decimal ml-6">
            <li>
              <b>Time-Slicing (Round-Robin)</b>
              <ul class="list-disc ml-6">
                <li>Each thread gets a fixed time slice (quantum).</li>
                <li>After the time is up, the thread goes back to the Runnable queue.</li>
                <li>Common in time-sharing systems.</li>
              </ul>
            </li>
            <li>
              <b>Preemptive Scheduling</b>
              <ul class="list-disc ml-6">
                <li>The thread with higher priority gets the CPU first.</li>
                <li>If a new thread with a higher priority comes, it preempts the current thread.</li>
                <li>Used in priority-based systems.</li>
              </ul>
            </li>
          </ol>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 my-4">
            ☑ Java supports both, but which one is used depends on the underlying OS (like Windows, Linux, etc.).
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔢 Thread Priority</h3>
          <ul class="list-disc ml-6">
            <li>Java allows you to set thread priority using:</li>
            <ul class="list-circle ml-6">
              <li><code>Thread.MIN_PRIORITY = 1</code></li>
              <li><code>Thread.NORM_PRIORITY = 5</code> (default)</li>
              <li><code>Thread.MAX_PRIORITY = 10</code></li>
            </ul>
            <li>You can set priority with: <code>thread.setPriority(8);</code></li>
            <li><b>Caution:</b> Thread priority is a hint, not a guarantee. The JVM may ignore it.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Example: Demonstrating Scheduler Behavior</h3>
          <pre><code>public class SchedulerDemo extends Thread {
    public void run() {
        System.out.println(Thread.currentThread().getName() + " is running");
    }

    public static void main(String[] args) {
        SchedulerDemo t1 = new SchedulerDemo();
        SchedulerDemo t2 = new SchedulerDemo();

        t1.setPriority(Thread.MIN_PRIORITY); // 1
        t2.setPriority(Thread.MAX_PRIORITY); // 10

        t1.setName("Low Priority Thread");
        t2.setName("High Priority Thread");

        t1.start();
        t2.start();
    }
}
// 🧪 Output:
// Output order may vary each time you run the code — because thread scheduling is non-deterministic.
</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🟢 Key Features</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Non-deterministic</td><td class="p-2">The order of execution is not guaranteed</td></tr>
              <tr><td class="p-2">Platform-dependent</td><td class="p-2">Relies on the OS and JVM for scheduling logic</td></tr>
              <tr><td class="p-2">Priority-based</td><td class="p-2">JVM tries to run higher-priority threads first</td></tr>
              <tr><td class="p-2">Does not control sleep/wait</td><td class="p-2">Only affects threads in Runnable state</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ When Scheduler Chooses a Thread</h3>
          <ul class="list-disc ml-6">
            <li>Thread Scheduler selects a thread for execution when:</li>
            <ul class="list-circle ml-6">
              <li>A thread calls <code>start()</code></li>
              <li>A sleeping/waiting thread becomes runnable again</li>
              <li>A thread completes its time slice (in time-slicing model)</li>
              <li>A lower-priority thread is preempted by a higher-priority one</li>
            </ul>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">❗ Limitations</h3>
          <ul class="list-disc ml-6">
            <li>You cannot control or force the scheduler to pick a specific thread.</li>
            <li>Thread scheduling behavior may vary across platforms.</li>
            <li>Using priorities for logic flow is unreliable.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧩 Conclusion</h3>
          <ul class="list-disc ml-6">
            <li>The Thread Scheduler is an internal JVM component that decides which thread runs next.</li>
            <li>You can suggest scheduling using priorities, but you can’t enforce it.</li>
            <li>Understanding its non-determinism is essential for writing robust multi-threaded programs.</li>
          </ul>
        </div>
      `
        }
      ]
    },

    

{
  heading: "Deadlock in Java",
  subheadings: [
    {
      title: "💥 Real-World Analogy",
      content: `
        <div class="mb-6">
        <p>A deadlock is a situation in multithreaded programming where two or more threads are blocked forever, waiting for each other to release resources (usually locks). This results in a standstill—none of the involved threads can proceed.</p>
       
          <p>Imagine two people trying to pass each other in a narrow hallway:</p>
          <ul class="list-disc ml-6">
            <li>Person A waits for Person B to move</li>
            <li>Person B waits for Person A to move</li>
            <li>Both keep waiting — deadlock!</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔁 When Does Deadlock Occur?",
      content: `
        <div class="mb-6">
          <p>Deadlock happens when all the following four conditions are met:</p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr><th class="p-2 text-left">Condition</th><th class="p-2 text-left">Description</th></tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Mutual Exclusion</td><td class="p-2">At least one resource (lock) is held in a non-shareable mode</td></tr>
              <tr><td class="p-2">Hold and Wait</td><td class="p-2">A thread is holding at least one lock and waiting for additional locks</td></tr>
              <tr><td class="p-2">No Preemption</td><td class="p-2">Locks can't be forcibly taken away from threads</td></tr>
              <tr><td class="p-2">Circular Wait</td><td class="p-2">A circular chain of threads exists, each waiting for a resource held by the next</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧪 Example of Deadlock in Java",
      content: `
        <div class="mb-6">
          <pre><code>public class DeadlockExample {
    static final Object lock1 = new Object();
    static final Object lock2 = new Object();

    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            synchronized (lock1) {
                System.out.println("Thread 1: Holding lock1...");
                try { Thread.sleep(100); } catch (Exception e) {}
                synchronized (lock2) {
                    System.out.println("Thread 1: Holding lock1 & lock2...");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lock2) {
                System.out.println("Thread 2: Holding lock2...");
                try { Thread.sleep(100); } catch (Exception e) {}
                synchronized (lock1) {
                    System.out.println("Thread 2: Holding lock2 & lock1...");
                }
            }
        });

        t1.start();
        t2.start();
    }
}</code></pre>
          <p class="text-red-600 font-semibold mt-2">❌ Output: Both threads may hang indefinitely — waiting for each other’s lock.</p>
        </div>
      `
    },
    {
      title: "🛠️ How to Prevent or Handle Deadlock",
      content: `
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ 1. Avoid Nested Locks (Lock Ordering)</h3>
          <p>Always acquire multiple locks in a consistent order:</p>
          <pre><code>synchronized(lock1) {
    synchronized(lock2) {
        // Do something
    }
}</code></pre>
          <p class="italic mt-2">🔑 Tip: Define and follow a global lock acquisition hierarchy.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ 2. Use tryLock() (ReentrantLock)</h3>
          <pre><code>import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

Lock lock1 = new ReentrantLock();
Lock lock2 = new ReentrantLock();

if (lock1.tryLock()) {
    try {
        if (lock2.tryLock()) {
            try {
                // Critical section
            } finally {
                lock2.unlock();
            }
        }
    } finally {
        lock1.unlock();
    }
}</code></pre>
          <p class="mt-2">✔️ Helps avoid deadlock by backing off instead of waiting indefinitely.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ 3. Avoid Unnecessary Locks</h3>
          <p>Minimize locking, and avoid holding locks for extended periods. Split logic so locks are acquired only when needed.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ 4. Use Timeout While Waiting</h3>
          <p>Use <code>tryLock(long timeout, TimeUnit unit)</code> to specify a timeout. If the lock isn’t acquired within time, thread moves on.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">✅ 5. Deadlock Detection Tools</h3>
          <p>Use <b>Thread Dump Analysis</b>, <b>JConsole</b>, <b>VisualVM</b>, or <b>jstack</b> to detect deadlocks at runtime.</p>
        </div>
      `
    },
    {
      title: "🟨 Handling Detected Deadlocks (Runtime Level)",
      content: `
        <div class="mb-6">
          <p>Once a deadlock is detected, you can:</p>
          <ul class="list-disc ml-6">
            <li>Log the issue and restart the affected thread(s)</li>
            <li>Gracefully shut down the affected modules</li>
            <li>Interrupt threads if the code is interruption-aware</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔍 Summary Table: Deadlock Handling",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Approach</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Lock ordering</td><td class="p-2">Acquire locks in a predefined order</td></tr>
              <tr><td class="p-2">Try-lock (ReentrantLock)</td><td class="p-2">Avoids waiting indefinitely</td></tr>
              <tr><td class="p-2">Timeout-based locking</td><td class="p-2">Breaks potential deadlocks with timeouts</td></tr>
              <tr><td class="p-2">Minimize lock scope</td><td class="p-2">Reduce time locks are held</td></tr>
              <tr><td class="p-2">Deadlock detection tools</td><td class="p-2">Analyze thread dumps to detect issues</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "✅ Conclusion",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Deadlock is a serious issue in multithreaded programming that can bring your application to a halt.</li>
            <li>It is easier to prevent deadlocks than to recover from them.</li>
            <li>Use consistent lock ordering, try-lock patterns, timeout-based strategies, and runtime tools to build more robust applications.</li>
          </ul>
        </div>
      `
    }
  ]
},

{
  heading: "Synchronization in Multithreading ",
  subheadings: [
    {
      title: "🔹 1. synchronized Methods",
      content: `
        <div class="mb-6">
          <p>
            In multithreaded Java programs, when multiple threads access shared resources (like objects, variables, or files), they can lead to race conditions or inconsistent states. <b>Synchronization</b> ensures that only one thread can access a critical section at a time, protecting shared resources.
          </p>
          <h3 class="text-xl font-semibold mb-2">➤ Instance Method</h3>
          <p>Locks on the current object (<code>this</code>). Only one thread can access the method on the same object at a time.</p>
          <pre><code>public synchronized void writeFile() {
    // Critical section
}</code></pre>
          <h3 class="text-xl font-semibold mb-2">➤ Static Method</h3>
          <p>Locks on the class object. It’s shared across all instances.</p>
          <pre><code>public static synchronized void logEvent() {
    // Static synchronized block
}</code></pre>
          <h3 class="text-xl font-semibold mb-2">✅ Pros</h3>
          <ul class="list-disc ml-6">
            <li>Simple to use</li>
            <li>Sufficient for most shared resource access</li>
          </ul>
          <h3 class="text-xl font-semibold mb-2">❌ Cons</h3>
          <ul class="list-disc ml-6">
            <li>Locks the entire method, even if only part needs protection</li>
            <li>Can cause bottlenecks and thread starvation</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔹 2. synchronized Blocks",
      content: `
        <div class="mb-6">
          <p>If you want finer control over what code is synchronized, use synchronized blocks.</p>
          <h3 class="text-xl font-semibold mb-2">➤ Syntax</h3>
          <pre><code>public void printData() {
    // Some non-critical code

    synchronized (this) {
        // Only this part is locked
    }

    // Some more non-critical code
}</code></pre>
          <h3 class="text-xl font-semibold mb-2">➤ Locking on Custom Object</h3>
          <pre><code>private final Object lock = new Object();

public void updateValue() {
    synchronized (lock) {
        // Critical section guarded by custom lock object
    }
}</code></pre>
          <h3 class="text-xl font-semibold mb-2">✅ Pros</h3>
          <ul class="list-disc ml-6">
            <li>More granular</li>
            <li>Improves performance by limiting locked scope</li>
          </ul>
          <h3 class="text-xl font-semibold mb-2">❌ Cons</h3>
          <ul class="list-disc ml-6">
            <li>Slightly more complex</li>
            <li>Still lacks flexibility of advanced locks (e.g., timeout, tryLock)</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔹 3. ReentrantLock (from java.util.concurrent.locks)",
      content: `
        <div class="mb-6">
          <p>Java 5 introduced a more flexible locking mechanism via the <b>ReentrantLock</b> class.</p>
          <h3 class="text-xl font-semibold mb-2">➤ Features:</h3>
          <ul class="list-disc ml-6">
            <li>Explicit lock and unlock</li>
            <li>Try acquiring lock with timeout</li>
            <li>Can be fair (FIFO)</li>
            <li>Supports interruptible locking</li>
          </ul>
          <h3 class="text-xl font-semibold mb-2">➤ Syntax</h3>
          <pre><code>import java.util.concurrent.locks.ReentrantLock;

class Counter {
    private final ReentrantLock lock = new ReentrantLock();
    private int count = 0;

    public void increment() {
        lock.lock();  // acquire the lock
        try {
            count++;
        } finally {
            lock.unlock();  // always release the lock
        }
    }
}</code></pre>
          <h3 class="text-xl font-semibold mb-2">➤ Using tryLock() with timeout</h3>
          <pre><code>if (lock.tryLock(1, TimeUnit.SECONDS)) {
    try {
        // critical section
    } finally {
        lock.unlock();
    }
} else {
    // couldn't acquire lock
}</code></pre>
          <h3 class="text-xl font-semibold mb-2">✅ Pros</h3>
          <ul class="list-disc ml-6">
            <li>More control than synchronized</li>
            <li>Timeout support</li>
            <li>Fairness option (<code>new ReentrantLock(true)</code>)</li>
          </ul>
          <h3 class="text-xl font-semibold mb-2">❌ Cons</h3>
          <ul class="list-disc ml-6">
            <li>Must explicitly call <code>unlock()</code> (risk of forgetting)</li>
            <li>Slightly more complex than synchronized</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔄 Comparison Table",
      content: `
        <div class="mb-6">
          <table class="table-auto border border-collapse w-full text-sm">
            <thead>
              <tr>
                <th class="border px-2 py-1">Feature</th>
                <th class="border px-2 py-1">synchronized</th>
                <th class="border px-2 py-1">synchronized block</th>
                <th class="border px-2 py-1">ReentrantLock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-2 py-1">Scope</td>
                <td class="border px-2 py-1">Whole method</td>
                <td class="border px-2 py-1">Specific code block</td>
                <td class="border px-2 py-1">Fully customizable</td>
              </tr>
              <tr>
                <td class="border px-2 py-1">Fairness policy</td>
                <td class="border px-2 py-1">❌ No</td>
                <td class="border px-2 py-1">❌ No</td>
                <td class="border px-2 py-1">✅ Yes (optional)</td>
              </tr>
              <tr>
                <td class="border px-2 py-1">Interruptible locking</td>
                <td class="border px-2 py-1">❌ No</td>
                <td class="border px-2 py-1">❌ No</td>
                <td class="border px-2 py-1">✅ Yes</td>
              </tr>
              <tr>
                <td class="border px-2 py-1">Try acquiring lock</td>
                <td class="border px-2 py-1">❌ No</td>
                <td class="border px-2 py-1">❌ No</td>
                <td class="border px-2 py-1">✅ Yes (tryLock)</td>
              </tr>
              <tr>
                <td class="border px-2 py-1">Unlocking</td>
                <td class="border px-2 py-1">Automatic</td>
                <td class="border px-2 py-1">Automatic</td>
                <td class="border px-2 py-1">Manual (must call unlock())</td>
              </tr>
              <tr>
                <td class="border px-2 py-1">Performance</td>
                <td class="border px-2 py-1">Medium</td>
                <td class="border px-2 py-1">Better than method</td>
                <td class="border px-2 py-1">High (with fine control)</td>
              </tr>
              <tr>
                <td class="border px-2 py-1">Complexity</td>
                <td class="border px-2 py-1">Low</td>
                <td class="border px-2 py-1">Low to Medium</td>
                <td class="border px-2 py-1">Medium to High</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔑 Summary",
      content: `
        <div class="mb-6">
          <table class="table-auto border border-collapse w-full text-sm">
            <thead>
              <tr>
                <th class="border px-2 py-1">Technique</th>
                <th class="border px-2 py-1">Use When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-2 py-1">synchronized method</td>
                <td class="border px-2 py-1">You want a quick and simple thread-safe solution for whole method</td>
              </tr>
              <tr>
                <td class="border px-2 py-1">synchronized block</td>
                <td class="border px-2 py-1">You need to lock only a portion of your method</td>
              </tr>
              <tr>
                <td class="border px-2 py-1">ReentrantLock</td>
                <td class="border px-2 py-1">You need flexible, interruptible, or fair locking</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
},

{
      heading: "volatile Keyword in Java",
      subheadings: [
        {
          title: "🔄 What is volatile in Java?",
          content: `
        <div class="mb-6">
          <p>
            The <b>volatile</b> keyword in Java is used to declare a variable as being stored in main memory. Every read of a volatile variable is read directly from the main memory, and every write to it is immediately written to the main memory.<br>
            This ensures visibility of changes across threads.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">⚙️ How volatile Works Internally</h3>
          <ul class="list-disc ml-6">
            <li>In a multi-threaded environment, threads may keep a local copy (cache) of variables for performance reasons. Without volatile, one thread may not immediately see updates made by another thread.</li>
            <li>When a variable is declared volatile:
              <ul class="list-circle ml-6">
                <li>The JVM prevents caching of that variable in thread-local memory.</li>
                <li>It forces all threads to read the latest value from main memory.</li>
                <li>It acts like a lightweight synchronization mechanism, without the locking overhead.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧠 Real-world Analogy</h3>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 my-4">
            Imagine a whiteboard in an office (main memory). Every employee (thread) writes updates directly on the board instead of writing notes in their own notebook (thread-local cache). This way, everyone sees the latest update immediately.
          </div>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🪛 Syntax</h3>
          <pre><code>volatile data_type variable_name;</code></pre>
          <b>Example:</b>
          <pre><code>public class SharedData {
    volatile boolean flag = false;

    public void updateFlag() {
        flag = true;  // Write immediately visible to all threads
    }

    public void checkFlag() {
        if (flag) {
            System.out.println("Flag is true!");
        }
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Key Features of volatile</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Visibility</td><td class="p-2">Changes made by one thread are instantly visible to all other threads.</td></tr>
              <tr><td class="p-2">No Locking</td><td class="p-2">Unlike synchronized, volatile does not lock the variable, making it faster.</td></tr>
              <tr><td class="p-2">Atomic for reads/writes</td><td class="p-2">Read and write operations are atomic, but compound operations (like i++) are not.</td></tr>
              <tr><td class="p-2">No Thread Blocking</td><td class="p-2">Threads are not blocked, making it non-blocking and lightweight.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🛠️ When to Use volatile</h3>
          <ul class="list-disc ml-6">
            <li>A variable is shared among threads, and only one thread updates it.</li>
            <li>You need to communicate a signal or status flag between threads.</li>
            <li>For simple synchronization, like a stop flag or interruption indicator.</li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🚫 Limitations of volatile</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Limitation</th>
                <th class="p-2 text-left">Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">❌ Not suitable for compound actions</td><td class="p-2">Operations like count++ are not atomic, even with volatile.</td></tr>
              <tr><td class="p-2">❌ No mutual exclusion</td><td class="p-2">It does not lock, so use synchronized for critical sections.</td></tr>
              <tr><td class="p-2">❌ Not for every shared variable</td><td class="p-2">Use it only when thread-safe visibility is the concern, not atomicity.</td></tr>
              <tr><td class="p-2">❌ Doesn’t guarantee ordering beyond visibility</td><td class="p-2">Use synchronized if ordering of operations is needed.</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🔁 volatile vs synchronized</h3>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">volatile</th>
                <th class="p-2 text-left">synchronized</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Visibility</td><td class="p-2">Yes</td><td class="p-2">Yes</td></tr>
              <tr><td class="p-2">Atomicity</td><td class="p-2">No</td><td class="p-2">Yes</td></tr>
              <tr><td class="p-2">Locking</td><td class="p-2">No</td><td class="p-2">Yes (intrinsic lock)</td></tr>
              <tr><td class="p-2">Performance</td><td class="p-2">Faster</td><td class="p-2">Slower due to blocking</td></tr>
              <tr><td class="p-2">Use Case</td><td class="p-2">Flags, status updates</td><td class="p-2">Critical sections, complex shared logic</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">✅ Practical Use Case</h3>
          <b>Example: Stop a Thread Gracefully</b>
          <pre><code>public class VolatileDemo {
    volatile boolean running = true;

    public void run() {
        while (running) {
            // do work
        }
        System.out.println("Thread stopped.");
    }

    public void stop() {
        running = false;
    }

    public static void main(String[] args) throws InterruptedException {
        VolatileDemo demo = new VolatileDemo();
        Thread t = new Thread(demo::run);
        t.start();

        Thread.sleep(1000);
        demo.stop(); // stops the thread safely
    }
}</code></pre>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">🧩 Conclusion</h3>
          <ul class="list-disc ml-6">
            <li><b>volatile</b> is best for simple flags or read/write variables where atomicity is not needed, but visibility is critical.</li>
            <li>For more complex logic involving multiple variables or compound operations, use <b>synchronized</b> or higher-level concurrency tools like <code>AtomicInteger</code>, <code>Locks</code>, or <code>ConcurrentHashMap</code>.</li>
          </ul>
        </div>
      `
        }
      ]
    },

{
  heading: "Wrapper Classes in Java",
  subheadings: [
    {
      title: "✅ What Are Wrapper Classes?",
      content: `
        <div class="mb-6">
          <p>
            A <b>Wrapper class</b> in Java wraps a primitive data type into an object. These classes are part of the <code>java.lang</code> package and provide utility methods for data manipulation, parsing, comparisons, and conversions.<br>
            <b>Note:</b> Primitive types are not objects, so when an object is required (e.g., in Collections), wrapper classes are used to convert them.
          </p>
        </div>
      `
    },
    {
      title: "📋 List of Primitive Types and Their Wrapper Classes",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">S.No</th>
                <th class="p-2 text-left">Primitive Type</th>
                <th class="p-2 text-left">Wrapper Class</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">1</td><td class="p-2">byte</td><td class="p-2">Byte</td></tr>
              <tr><td class="p-2">2</td><td class="p-2">short</td><td class="p-2">Short</td></tr>
              <tr><td class="p-2">3</td><td class="p-2">int</td><td class="p-2">Integer</td></tr>
              <tr><td class="p-2">4</td><td class="p-2">long</td><td class="p-2">Long</td></tr>
              <tr><td class="p-2">5</td><td class="p-2">float</td><td class="p-2">Float</td></tr>
              <tr><td class="p-2">6</td><td class="p-2">double</td><td class="p-2">Double</td></tr>
              <tr><td class="p-2">7</td><td class="p-2">char</td><td class="p-2">Character</td></tr>
              <tr><td class="p-2">8</td><td class="p-2">boolean</td><td class="p-2">Boolean</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧱 Why Use Wrapper Classes?",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Required in collections (e.g., <code>ArrayList&lt;Integer&gt;</code>) that only accept objects.</li>
            <li>Useful for serialization.</li>
            <li>They provide utility methods like <code>parseInt()</code>, <code>compareTo()</code>, <code>valueOf()</code>.</li>
            <li>Enable <b>null</b> values, which primitive types do not support.</li>
            <li>Help in multi-threading, generics, and Java Beans.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔁 Boxing (Manual Conversion)",
      content: `
        <div class="mb-6">
          <p>Boxing is the manual conversion of a primitive data type into its wrapper object.</p>
          <b>Example 1: Boxing</b>
          <pre><code>public class BoxingExample {
    public static void main(String[] args) {
        int a = 50;
        Integer i = Integer.valueOf(a); // Manual boxing
        System.out.println("Boxed Integer: " + i);

        double d = 3.14;
        Double dObj = Double.valueOf(d);
        System.out.println("Boxed Double: " + dObj);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🤖 Autoboxing (Automatic Boxing from JDK 5)",
      content: `
        <div class="mb-6">
          <p>Autoboxing is the automatic conversion of a primitive into a wrapper class object by the Java compiler.</p>
          <b>Example 2: Autoboxing</b>
          <pre><code>public class AutoboxingExample {
    public static void main(String[] args) {
        char c = 'A';
        Character ch = c; // Autoboxing
        System.out.println("Autoboxed Character: " + ch);

        boolean b = true;
        Boolean bool = b; // Autoboxing
        System.out.println("Autoboxed Boolean: " + bool);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "📤 Unboxing (Manual Conversion from Object to Primitive)",
      content: `
        <div class="mb-6">
          <p>Unboxing is the manual extraction of the primitive value from a wrapper class.</p>
          <b>Example 3: Unboxing</b>
          <pre><code>public class UnboxingExample {
    public static void main(String[] args) {
        Integer i = Integer.valueOf(100);
        int a = i.intValue(); // Manual unboxing
        System.out.println("Unboxed int: " + a);

        Float f = Float.valueOf(5.6f);
        float fVal = f.floatValue(); // Manual unboxing
        System.out.println("Unboxed float: " + fVal);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "⚙️ Auto-Unboxing (Automatic from JDK 5)",
      content: `
        <div class="mb-6">
          <p>Auto-unboxing is the automatic conversion of a wrapper class object to its primitive value.</p>
          <b>Example 4: Auto-Unboxing</b>
          <pre><code>public class AutoUnboxingExample {
    public static void main(String[] args) {
        Double dObj = 9.81; // Autoboxing
        double d = dObj;    // Auto-unboxing
        System.out.println("Auto-unboxed double: " + d);

        Boolean bObj = Boolean.TRUE;
        boolean b = bObj;   // Auto-unboxing
        System.out.println("Auto-unboxed boolean: " + b);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔍 Real-World Usage Example with Collections",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.ArrayList;

public class WrapperWithCollection {
    public static void main(String[] args) {
        ArrayList&lt;Integer&gt; marks = new ArrayList&lt;&gt;();
        int score = 90;

        // Autoboxing happens here
        marks.add(score);

        // Auto-unboxing when retrieving
        int retrievedScore = marks.get(0);

        System.out.println("Stored score: " + retrievedScore);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🧠 Summary Table",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Concept</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Java Version</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Boxing</td><td class="p-2">Manual conversion of primitive to object</td><td class="p-2">Java 1.0</td></tr>
              <tr><td class="p-2">Autoboxing</td><td class="p-2">Automatic boxing by compiler</td><td class="p-2">Java 5+</td></tr>
              <tr><td class="p-2">Unboxing</td><td class="p-2">Manual extraction of primitive from wrapper</td><td class="p-2">Java 1.0</td></tr>
              <tr><td class="p-2">Auto-Unboxing</td><td class="p-2">Automatic unboxing by compiler</td><td class="p-2">Java 5+</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "📌 Key Notes",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Wrapper classes are immutable.</li>
            <li>Use <code>valueOf()</code> over constructors (e.g., <code>new Integer()</code>) for better memory efficiency.</li>
            <li>Autoboxing may lead to performance issues in large-scale looping (object creation overhead).</li>
            <li>In Java 8, wrappers are commonly used in Streams, Optionals, and Collectors.</li>
          </ul>
        </div>
      `
    }
  ]
},



{
  heading: "Collections in Java ",
  subheadings: [
    {
      title: "✅ What is a Collection?",
      content: `
        <div class="mb-6">
          <p>
            A <b>Collection</b> in Java is a container used to store multiple objects as a single unit. It is part of the <b>Java Collection Framework (JCF)</b>, which provides data structures and algorithms to efficiently manage and manipulate object groups.
          </p>
        </div>
      `
    },
    {
      title: "🧱 Java Collection Framework (JCF)",
      content: `
        <div class="mb-6">
          <p>The Java Collection Framework is a standardized architecture of:</p>
          <ul class="list-disc ml-6">
            <li>Interfaces (e.g., <code>List</code>, <code>Set</code>, <code>Map</code>)</li>
            <li>Concrete classes (e.g., <code>ArrayList</code>, <code>HashSet</code>, <code>HashMap</code>)</li>
            <li>Utility classes (e.g., <code>Collections</code>, <code>Arrays</code>)</li>
          </ul>
        </div>
      `
    },
    {
      title: "🧩 Key Characteristics",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Stores non-primitive types only (object data)</li>
            <li>Auto-boxing allows primitive storage via wrapper conversion</li>
            <li>Provides methods: <code>add()</code>, <code>remove()</code>, <code>contains()</code>, <code>size()</code>, etc.</li>
            <li>Offers iterator support for traversing collections</li>
            <li>Resides in the <code>java.util</code> package</li>
          </ul>
        </div>
      `
    },
    {
      title: "🧬 Collection Hierarchy in Java",
      content: `
        <div class="mb-6">
          <pre>
java.util.Collection (interface)
          /   |   \\
        /     |    \\
       /      |     \\
 List      Set     Queue     (Interfaces)
  |         |        |
------------------   -----------    --------------
|        |        |  |         |    |            |
ArrayList LinkedList Vector HashSet TreeSet PriorityQueue Deque
                                  |
                            LinkedHashSet

🔸 Map&lt;K, V&gt; is not a subtype of Collection, but part of the Collection Framework.
      java.util.Map (interface)
        /       |        \\
      /         |         \\
  HashMap   LinkedHashMap   TreeMap
          </pre>
        </div>
      `
    },
    {
      title: "📦 Core Interfaces & Classes",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Interface</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Implementations</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">List</td><td class="p-2">Ordered collection, allows duplicates</td><td class="p-2">ArrayList, LinkedList, Vector</td></tr>
              <tr><td class="p-2">Set</td><td class="p-2">Unordered, no duplicates</td><td class="p-2">HashSet, LinkedHashSet, TreeSet</td></tr>
              <tr><td class="p-2">Queue</td><td class="p-2">Follows FIFO order</td><td class="p-2">PriorityQueue, ArrayDeque</td></tr>
              <tr><td class="p-2">Map</td><td class="p-2">Key-value pair collection</td><td class="p-2">HashMap, TreeMap, LinkedHashMap</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "💡 Example: List Collection (ArrayList)",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class CollectionExample {
    public static void main(String[] args) {
        List&lt;String&gt; languages = new ArrayList&lt;&gt;();
        
        languages.add("Java");
        languages.add("Python");
        languages.add("JavaScript");

        // Iterating using for-each
        for (String lang : languages) {
            System.out.println(lang);
        }
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🚀 Features of Collections",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Resizable: No fixed size like arrays</li>
            <li>Type-safe using generics</li>
            <li>Rich APIs: Sorting, searching, filtering</li>
            <li>Multiple traversal options: Iterator, for-each, Stream API</li>
            <li>Thread-safe options: <code>Collections.synchronizedList()</code>, <code>ConcurrentHashMap</code></li>
            <li>Efficient memory management</li>
          </ul>
        </div>
      `
    },
    {
      title: "✅ Advantages of Java Collections",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Advantage</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Code Reusability</td><td class="p-2">Use prebuilt data structures</td></tr>
              <tr><td class="p-2">Less Development Time</td><td class="p-2">No need to write from scratch</td></tr>
              <tr><td class="p-2">Standard APIs</td><td class="p-2">Easy integration with libraries</td></tr>
              <tr><td class="p-2">Algorithm Support</td><td class="p-2">Built-in sorting, searching</td></tr>
              <tr><td class="p-2">Flexible and Scalable</td><td class="p-2">Dynamically resizable collections</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "❌ Disadvantages",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Disadvantage</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Only Object Storage</td><td class="p-2">Primitives require auto-boxing</td></tr>
              <tr><td class="p-2">Not Thread-safe by Default</td><td class="p-2">Need synchronization manually</td></tr>
              <tr><td class="p-2">Slightly Slower than Arrays</td><td class="p-2">Due to dynamic nature and features</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔄 Auto-Boxing and Unboxing in Collections",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class AutoBoxingExample {
    public static void main(String[] args) {
        List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();
        int a = 10; // primitive
        numbers.add(a); // auto-boxed to Integer

        int b = numbers.get(0); // auto-unboxed to int
        System.out.println(b);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "📘 Summary Table",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Concept</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Collection</td><td class="p-2">Container of objects</td></tr>
              <tr><td class="p-2">Interfaces</td><td class="p-2">List, Set, Queue, Map</td></tr>
              <tr><td class="p-2">Implements</td><td class="p-2">ArrayList, HashSet, LinkedList, TreeMap, etc.</td></tr>
              <tr><td class="p-2">Only Objects</td><td class="p-2">Primitives converted via auto-boxing</td></tr>
              <tr><td class="p-2">Package</td><td class="p-2">java.util</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
},

{
  heading: "List Interface in Java",
  subheadings: [
    {
      title: "Overview",
      content: `
        <div class="mb-6">
          <p>
            The <b>List</b> interface is a child of the <code>Collection</code> interface that represents an ordered collection (also known as a sequence).<br>
            It allows:
          </p>
          <ul class="list-disc ml-6">
            <li>Duplicates</li>
            <li>Null elements</li>
            <li>Index-based access</li>
            <li>Insertion order is maintained</li>
          </ul>
          <b>Package:</b> <code>java.util</code>
        </div>
      `
    },
    {
      title: "📚 Common Classes Implementing List Interface",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>ArrayList</li>
            <li>LinkedList</li>
            <li>Vector</li>
            <li>Stack</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔧 Methods of List Interface",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method Signature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">add(E e)</td><td class="p-2">Appends the specified element to the end of the list.</td></tr>
              <tr><td class="p-2">add(int index, E element)</td><td class="p-2">Inserts the element at the specified index.</td></tr>
              <tr><td class="p-2">addAll(Collection&lt;? extends E&gt; c)</td><td class="p-2">Appends all elements of the specified collection.</td></tr>
              <tr><td class="p-2">addAll(int index, Collection&lt;? extends E&gt; c)</td><td class="p-2">Inserts all elements starting at the given index.</td></tr>
              <tr><td class="p-2">get(int index)</td><td class="p-2">Returns the element at the specified position.</td></tr>
              <tr><td class="p-2">set(int index, E element)</td><td class="p-2">Replaces the element at the specified index with the given one.</td></tr>
              <tr><td class="p-2">remove(int index)</td><td class="p-2">Removes the element at the specified position.</td></tr>
              <tr><td class="p-2">remove(Object o)</td><td class="p-2">Removes the first occurrence of the specified element.</td></tr>
              <tr><td class="p-2">clear()</td><td class="p-2">Removes all elements from the list.</td></tr>
              <tr><td class="p-2">contains(Object o)</td><td class="p-2">Checks if the list contains the specified element.</td></tr>
              <tr><td class="p-2">isEmpty()</td><td class="p-2">Returns true if the list is empty.</td></tr>
              <tr><td class="p-2">size()</td><td class="p-2">Returns the number of elements in the list.</td></tr>
              <tr><td class="p-2">indexOf(Object o)</td><td class="p-2">Returns the first index of the specified element.</td></tr>
              <tr><td class="p-2">lastIndexOf(Object o)</td><td class="p-2">Returns the last index of the specified element.</td></tr>
              <tr><td class="p-2">listIterator()</td><td class="p-2">Returns a ListIterator over the list.</td></tr>
              <tr><td class="p-2">listIterator(int index)</td><td class="p-2">Returns a ListIterator starting from the given index.</td></tr>
              <tr><td class="p-2">subList(int fromIndex, int toIndex)</td><td class="p-2">Returns a view of the portion between the specified indexes.</td></tr>
              <tr><td class="p-2">equals(Object o)</td><td class="p-2">Compares the list to the specified object for equality.</td></tr>
              <tr><td class="p-2">hashCode()</td><td class="p-2">Returns the hash code of the list.</td></tr>
              <tr><td class="p-2">toArray()</td><td class="p-2">Converts the list to an array.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧪 Example with ArrayList",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class ListExample {
    public static void main(String[] args) {
        List&lt;String&gt; fruits = new ArrayList&lt;&gt;();

        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");
        fruits.add(1, "Mango");  // Insert at index 1

        System.out.println("Fruits List: " + fruits);

        // Access elements
        System.out.println("Element at index 2: " + fruits.get(2));

        // Replace element
        fruits.set(2, "Grapes");
        System.out.println("Updated List: " + fruits);

        // Remove element
        fruits.remove("Mango");
        System.out.println("After Removal: " + fruits);

        // Sublist
        List&lt;String&gt; sub = fruits.subList(0, 2);
        System.out.println("Sublist: " + sub);

        // Contains check
        System.out.println("Contains Banana? " + fruits.contains("Banana"));

        // Size
        System.out.println("List Size: " + fruits.size());

        // Clear
        fruits.clear();
        System.out.println("Is list empty? " + fruits.isEmpty());
    }
}</code></pre>
          <b>Output:</b>
          <pre>
Fruits List: [Apple, Mango, Banana, Cherry]
Element at index 2: Banana
Updated List: [Apple, Mango, Grapes, Cherry]
After Removal: [Apple, Grapes, Cherry]
Sublist: [Apple, Grapes]
Contains Banana? false
List Size: 3
Is list empty? true
          </pre>
        </div>
      `
    },
    {
      title: "📌 Summary",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>The List interface is used for ordered, index-based collections.</li>
            <li>Allows nulls and duplicates.</li>
            <li>Provides index-based insertion, update, delete, and read operations.</li>
            <li>Preferred when order matters and fast access by index is needed.</li>
          </ul>
        </div>
      `
    }
  ]
},
{
  heading: "ArrayList in Java ",
  subheadings: [
    {
      title: "🔹 What is ArrayList?",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>ArrayList is a concrete class that implements the List interface.</li>
            <li>It is part of the <code>java.util</code> package.</li>
            <li>It uses a dynamic growable array as its internal data structure.</li>
            <li>Unlike arrays, its size is not fixed — it grows automatically as elements are added.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 Key Characteristics of ArrayList",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Implements</td><td class="p-2">List, RandomAccess, Cloneable, Serializable</td></tr>
              <tr><td class="p-2">Thread Safety</td><td class="p-2">❌ Not synchronized (not thread-safe by default)</td></tr>
              <tr><td class="p-2">Duplicates</td><td class="p-2">✅ Allows duplicate elements</td></tr>
              <tr><td class="p-2">Insertion Order</td><td class="p-2">✅ Maintains insertion order</td></tr>
              <tr><td class="p-2">Null Values</td><td class="p-2">✅ Allows null values</td></tr>
              <tr><td class="p-2">Element Type</td><td class="p-2">Supports homogeneous and heterogeneous objects (if using raw type)</td></tr>
              <tr><td class="p-2">Initial Capacity</td><td class="p-2">Default: 10</td></tr>
              <tr><td class="p-2">Dynamic Resizing</td><td class="p-2">Uses the formula: <br>New Capacity = (Current Capacity * 3 / 2) + 1</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔸 Internal Working of ArrayList",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Internally uses a resizable array (<code>Object[]</code>).</li>
            <li>When adding elements and the array gets full:
              <ol class="list-decimal ml-6">
                <li>A new array of larger size is created.</li>
                <li>Old elements are copied to the new array.</li>
                <li>The reference is updated to point to the new array.</li>
              </ol>
            </li>
          </ul>
          <b>Resizing Formula:</b>
          <pre>New Capacity = (Current Capacity * 3 / 2) + 1</pre>
          <p>This helps in amortized O(1) time complexity for add() operations in the average case.</p>
        </div>
      `
    },
    {
      title: "🔸 Drawbacks of ArrayList",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>❌ Performance degradation for:
              <ul class="list-disc ml-6">
                <li>Insertions/deletions in the middle (due to shifting).</li>
                <li>Frequent resizing/copying when large datasets are used.</li>
              </ul>
            </li>
            <li>❌ Thread-unsafety in multithreaded environments.</li>
          </ul>
          <b>Not Recommended When:</b>
          <ul class="list-disc ml-6">
            <li>Your application frequently inserts/deletes elements from the middle or start.</li>
            <li>You're working in a multithreaded environment without external synchronization.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔹 Example: Basic ArrayList Usage",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList&lt;Object&gt; list = new ArrayList&lt;&gt;();

        list.add("Java");
        list.add(101);
        list.add(null);
        list.add("Java");  // duplicate allowed

        System.out.println("Initial List: " + list);

        list.remove(1);  // removes element at index 1
        list.set(1, "Updated");

        System.out.println("After Modifications: " + list);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔹 Performance Summary",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Operation</th>
                <th class="p-2 text-left">Time Complexity</th>
                <th class="p-2 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">add(E e)</td><td class="p-2">O(1)*</td><td class="p-2">Amortized, due to resizing</td></tr>
              <tr><td class="p-2">add(index, e)</td><td class="p-2">O(n)</td><td class="p-2">Due to shifting</td></tr>
              <tr><td class="p-2">remove(index)</td><td class="p-2">O(n)</td><td class="p-2">Shifting required</td></tr>
              <tr><td class="p-2">get(index)</td><td class="p-2">O(1)</td><td class="p-2">Direct access</td></tr>
              <tr><td class="p-2">contains()</td><td class="p-2">O(n)</td><td class="p-2">Linear search</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔸 Best Use Cases",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>You want fast random access to elements.</li>
            <li>Insertions/removals are mostly at the end.</li>
            <li>You don’t need thread safety by default.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 Summary",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">ArrayList</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Package</td><td class="p-2">java.util</td></tr>
              <tr><td class="p-2">Implements</td><td class="p-2">List, RandomAccess, Cloneable</td></tr>
              <tr><td class="p-2">Thread-safe</td><td class="p-2">❌ No</td></tr>
              <tr><td class="p-2">Underlying Data Structure</td><td class="p-2">Dynamic growable array</td></tr>
              <tr><td class="p-2">Duplicates Allowed</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Null Elements</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Insertion/Deletion Speed</td><td class="p-2">❌ Slow (due to shifting)</td></tr>
              <tr><td class="p-2">Access Speed</td><td class="p-2">✅ Fast (O(1))</td></tr>
              <tr><td class="p-2">Memory Overhead</td><td class="p-2">✅ Low (no links)</td></tr>
              <tr><td class="p-2">Supports Heterogeneous Elements</td><td class="p-2">✅ (using raw types)</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
},

{
  heading: "LinkedList in Java",
  subheadings: [
    {
      title: "✅ What is LinkedList?",
      content: `
        <div class="mb-6">
          <p>
            The <b>LinkedList</b> class is a concrete implementation of the <code>List</code> and <code>Deque</code> interfaces in the <code>java.util</code> package. It is a linear data structure where elements are stored in nodes, and each node is linked to its neighboring nodes.
          </p>
        </div>
      `
    },
    {
      title: "📁 Package & Class Signature",
      content: `
        <div class="mb-6">
          <code>java.util.LinkedList&lt;E&gt;</code>
        </div>
      `
    },
    {
      title: "🧱 Internal Working",
      content: `
        <div class="mb-6">
          <p>Java’s LinkedList uses a <b>Doubly Linked List</b> structure under the hood.</p>
          <ul class="list-disc ml-6">
            <li>Data part → stores the actual value.</li>
            <li>Next pointer → reference to the next node.</li>
            <li>Previous pointer → reference to the previous node.</li>
          </ul>
          <pre>[ prev | data | next ]  &lt;--&gt;  [ prev | data | next ]  &lt;--&gt; ...</pre>
        </div>
      `
    },
    {
      title: "🔍 Characteristics of LinkedList",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Property</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Implements</td><td class="p-2">List, Deque, Queue</td></tr>
              <tr><td class="p-2">Ordering</td><td class="p-2">Maintains insertion order</td></tr>
              <tr><td class="p-2">Allows duplicates</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Allows null elements</td><td class="p-2">✅ Yes</td></tr>
              <tr><td class="p-2">Indexing</td><td class="p-2">❌ No internal index structure</td></tr>
              <tr><td class="p-2">Storage type</td><td class="p-2">Uses Node-based storage (not arrays)</td></tr>
              <tr><td class="p-2">Performance</td><td class="p-2">Good for insert/delete, slower for access by index</td></tr>
              <tr><td class="p-2">Memory usage</td><td class="p-2">More memory due to node references</td></tr>
              <tr><td class="p-2">Type support</td><td class="p-2">✅ Homogeneous and Heterogeneous (via Object)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🛠️ Constructors in LinkedList",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li><code>LinkedList()</code> <br>Creates an empty LinkedList.</li>
            <li><code>LinkedList(Collection&lt;? extends E&gt; c)</code> <br>Creates a LinkedList containing elements of the given collection.</li>
          </ul>
        </div>
      `
    },
    {
      title: "✨ Features Recap",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Efficient at inserting or deleting elements from any position.</li>
            <li>Elements are not stored contiguously in memory.</li>
            <li>Ideal when frequent modifications are required in the middle of the list.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🧪 Practical Example: Employee LinkedList",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.LinkedList;

public class EmployeeList {
    public static void main(String[] args) {
        LinkedList&lt;String&gt; employees = new LinkedList&lt;&gt;();

        // Add employees
        employees.add("Rahul");
        employees.add("Neha");
        employees.addFirst("Amit");       // Add at beginning
        employees.addLast("Sneha");       // Add at end

        System.out.println("Employee List: " + employees);

        // Remove and access
        employees.remove("Neha");
        System.out.println("After Removal: " + employees);

        System.out.println("First Employee: " + employees.getFirst());
        System.out.println("Last Employee: " + employees.getLast());

        // Search using index
        System.out.println("Employee at index 1: " + employees.get(1));
    }
}</code></pre>
          <b>Output:</b>
          <pre>
Employee List: [Amit, Rahul, Neha, Sneha]
After Removal: [Amit, Rahul, Sneha]
First Employee: Amit
Last Employee: Sneha
Employee at index 1: Rahul
          </pre>
        </div>
      `
    },
    {
      title: "⚖️ LinkedList vs ArrayList Comparison",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">LinkedList</th>
                <th class="p-2 text-left">ArrayList</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Structure</td><td class="p-2">Doubly Linked List</td><td class="p-2">Dynamic Array</td></tr>
              <tr><td class="p-2">Access Time</td><td class="p-2">Slow (O(n))</td><td class="p-2">Fast (O(1))</td></tr>
              <tr><td class="p-2">Insert/Delete Middle</td><td class="p-2">Fast (O(1))</td><td class="p-2">Slow (O(n)) due to shifting</td></tr>
              <tr><td class="p-2">Memory Usage</td><td class="p-2">More (node references)</td><td class="p-2">Less</td></tr>
              <tr><td class="p-2">Use Case</td><td class="p-2">Frequent modifications</td><td class="p-2">Frequent read/access</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧠 When to Use LinkedList?",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>When you expect frequent insertion or deletion.</li>
            <li>When implementing queues, stacks, or deques.</li>
            <li>When index-based access is not the priority.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Summary Points",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>LinkedList is good for dynamic data manipulation.</li>
            <li>It uses nodes, not arrays.</li>
            <li>It supports null, duplicates, and maintains insertion order.</li>
            <li>Random access (get(index)) is slower than in ArrayList.</li>
            <li>Great for queue-like structures or undo/redo stacks.</li>
          </ul>
        </div>
      `
    }
  ]
},

{
  heading: "Stack in Java",
  subheadings: [
    {
      title: "📘 What is Stack?",
      content: `
        <div class="mb-6">
          <p>
            A <b>Stack</b> is a linear data structure that follows the <b>LIFO (Last In, First Out)</b> principle.<br>
            This means the last element added to the stack is the first one removed.
          </p>
        </div>
      `
    },
    {
      title: "📦 Stack in Java",
      content: `
        <div class="mb-6">
          <p>
            In Java, <b>Stack</b> is a class provided in the <code>java.util</code> package, and it extends the <code>Vector</code> class and implements the <code>List</code> interface.<br>
            <b>Stack&lt;E&gt;</b> is a generic class introduced in Java 1.5.<br>
            <b>Package:</b> <code>java.util.Stack</code>
          </p>
        </div>
      `
    },
    {
      title: "⚙️ Internal Structure",
      content: `
        <div class="mb-6">
          <p>
            Internally, Stack uses an array-like structure inherited from Vector.<br>
            This makes all operations like <code>push()</code>, <code>pop()</code>, <code>peek()</code>, and <code>search()</code> available.
          </p>
        </div>
      `
    },
    {
      title: "🧪 Constructors",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Constructor</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Stack()</td><td class="p-2">Creates an empty stack.</td></tr>
              <tr><td class="p-2">Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();</td><td class="p-2">Generic stack declaration.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔧 Common Stack Methods",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">push(E item)</td><td class="p-2">Pushes an element onto the top of the stack.</td></tr>
              <tr><td class="p-2">pop()</td><td class="p-2">Removes and returns the top element of the stack.</td></tr>
              <tr><td class="p-2">peek()</td><td class="p-2">Returns the top element without removing it.</td></tr>
              <tr><td class="p-2">empty()</td><td class="p-2">Checks if the stack is empty.</td></tr>
              <tr><td class="p-2">search(Object o)</td><td class="p-2">Returns 1-based position from top of the stack. Returns -1 if not found.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧑‍💻 Practical Example",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.Stack;

public class StackDemo {
    public static void main(String[] args) {
        Stack&lt;String&gt; books = new Stack&lt;&gt;();

        // Push elements
        books.push("Java");
        books.push("Python");
        books.push("C++");
        books.push("JavaScript");

        System.out.println("Stack: " + books);

        // Peek the top
        System.out.println("Top element: " + books.peek());

        // Pop the top
        books.pop();
        System.out.println("After pop: " + books);

        // Search for element
        System.out.println("Position of Python: " + books.search("Python")); // 2

        // Check empty
        System.out.println("Is stack empty? " + books.empty());
    }
}</code></pre>
          <b>Output:</b>
          <pre>
Stack: [Java, Python, C++, JavaScript]
Top element: JavaScript
After pop: [Java, Python, C++]
Position of Python: 2
Is stack empty? false
          </pre>
        </div>
      `
    },
    {
      title: "📝 Key Characteristics",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Maintains LIFO order</li>
            <li>Allows null values</li>
            <li>Allows duplicate elements</li>
            <li>Uses Vector’s growable array internally</li>
            <li>Is synchronized (Thread-safe)</li>
          </ul>
        </div>
      `
    },
    {
      title: "✅ When to Use Stack?",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Undo functionality</li>
            <li>Backtracking algorithms (e.g., maze solving)</li>
            <li>Call stack simulation</li>
            <li>Browser back/forward navigation</li>
          </ul>
        </div>
      `
    },
    {
      title: "🧠 Bonus Tip: Custom Stack Using Array or LinkedList",
      content: `
        <div class="mb-6">
          <p>
            Want full control or performance tuning? You can implement your own stack using:
          </p>
          <ul class="list-disc ml-6">
            <li>Array (fixed size, faster)</li>
            <li>LinkedList (dynamic size)</li>
          </ul>
        </div>
      `
    }
  ]
},

{
  heading: "Queue Interface in Java",
  subheadings: [
    {
      title: "🔷 What is a Queue?",
      content: `
        <div class="mb-6">
          <p>
            A <b>Queue</b> is a linear data structure that follows the <b>FIFO (First In, First Out)</b> principle.<br>
            That means the element inserted first will be the first one to be removed.
          </p>
        </div>
      `
    },
    {
      title: "🔗 Queue Interface: Hierarchy",
      content: `
        <div class="mb-6">
          <pre>
java.lang.Object
   ↳ java.util.Collection&lt;E&gt;
       ↳ java.util.Queue&lt;E&gt;
          </pre>
          <p>
            The <b>Queue</b> interface is part of the <code>java.util</code> package and extends the <code>Collection</code> interface.
          </p>
        </div>
      `
    },
    {
      title: "⚙️ Characteristics of Queue Interface",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Preserves insertion order.</li>
            <li>Mainly used in scheduling or buffering scenarios.</li>
            <li>Null insertion is not allowed in some implementations (e.g., PriorityQueue).</li>
            <li>Queue can be bounded or unbounded based on implementation.</li>
            <li>Common classes that implement Queue:
              <ul class="list-disc ml-6">
                <li>LinkedList</li>
                <li>PriorityQueue</li>
                <li>ArrayDeque</li>
                <li>ConcurrentLinkedQueue</li>
                <li>BlockingQueue (like ArrayBlockingQueue, LinkedBlockingQueue)</li>
              </ul>
            </li>
          </ul>
        </div>
      `
    },
    {
      title: "🚀 Common Methods of Queue Interface",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">add(E e)</td><td class="p-2">Inserts element. Throws exception if capacity is full.</td></tr>
              <tr><td class="p-2">offer(E e)</td><td class="p-2">Inserts element. Returns false if it fails.</td></tr>
              <tr><td class="p-2">remove()</td><td class="p-2">Removes and returns the head. Throws exception if empty.</td></tr>
              <tr><td class="p-2">poll()</td><td class="p-2">Removes and returns the head. Returns null if empty.</td></tr>
              <tr><td class="p-2">element()</td><td class="p-2">Retrieves head without removing. Throws exception if empty.</td></tr>
              <tr><td class="p-2">peek()</td><td class="p-2">Retrieves head without removing. Returns null if empty.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔄 Comparison Table of Queue Methods",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Action</th>
                <th class="p-2 text-left">Throws Exception</th>
                <th class="p-2 text-left">Returns Special Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Insert</td><td class="p-2">add()</td><td class="p-2">offer()</td></tr>
              <tr><td class="p-2">Remove</td><td class="p-2">remove()</td><td class="p-2">poll()</td></tr>
              <tr><td class="p-2">Peek</td><td class="p-2">element()</td><td class="p-2">peek()</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "✅ Practical Example using LinkedList",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue&lt;String&gt; tasks = new LinkedList&lt;&gt;();

        // Add tasks
        tasks.offer("Email client");
        tasks.offer("Write report");
        tasks.offer("Schedule meeting");

        System.out.println("All Tasks: " + tasks);

        // Peek the next task
        System.out.println("Next task: " + tasks.peek());

        // Remove the task
        tasks.poll();  // removes "Email client"
        System.out.println("Remaining Tasks: " + tasks);
    }
}</code></pre>
          <b>Output:</b>
          <pre>
All Tasks: [Email client, Write report, Schedule meeting]
Next task: Email client
Remaining Tasks: [Write report, Schedule meeting]
          </pre>
        </div>
      `
    },
    {
      title: "🧠 Real-life Use Cases",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Print queue in printers</li>
            <li>Task scheduling in operating systems</li>
            <li>Message queue in messaging systems</li>
            <li>Call center waiting system</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔢 Types of Queues in Java",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Type</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Queue</td><td class="p-2">Basic FIFO queue</td></tr>
              <tr><td class="p-2">Deque</td><td class="p-2">Double-ended queue (add/remove from both ends)</td></tr>
              <tr><td class="p-2">PriorityQueue</td><td class="p-2">Elements are ordered by priority</td></tr>
              <tr><td class="p-2">BlockingQueue</td><td class="p-2">Thread-safe queue used in concurrent environments</td></tr>
              <tr><td class="p-2">ArrayDeque</td><td class="p-2">Resizable array that implements both stack and queue</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
},

{
  heading: "PriorityQueue in Java",
  subheadings: [
    {
      title: "✅ Definition",
      content: `
        <div class="mb-6">
          <p>
            A <b>PriorityQueue</b> is a queue data structure where elements are ordered based on priority rather than insertion order.<br>
            By default, elements are sorted in natural order (for numbers: ascending, for strings: alphabetical), but we can also define custom order using a <code>Comparator</code>.
          </p>
        </div>
      `
    },
    {
      title: "🧩 Hierarchy",
      content: `
        <div class="mb-6">
          <pre>
java.lang.Object
   ↳ java.util.AbstractCollection
       ↳ java.util.AbstractQueue
           ↳ java.util.PriorityQueue
Also implements:
Queue&lt;E&gt; → Collection&lt;E&gt; → Iterable&lt;E&gt;
Serializable, Cloneable
          </pre>
        </div>
      `
    },
    {
      title: "⚙️ Key Features",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Not thread-safe (use <code>PriorityBlockingQueue</code> in multi-threading).</li>
            <li>Doesn’t allow null values.</li>
            <li>Allows duplicates.</li>
            <li>Elements are automatically sorted based on natural/comparator order.</li>
            <li>Internally implemented using Heap (min-heap by default).</li>
          </ul>
        </div>
      `
    },
    {
      title: "📚 Constructors",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li><code>PriorityQueue()</code></li>
            <li><code>PriorityQueue(int initialCapacity)</code></li>
            <li><code>PriorityQueue(Comparator&lt;? super E&gt; comparator)</code></li>
            <li><code>PriorityQueue(Collection&lt;? extends E&gt; c)</code></li>
          </ul>
        </div>
      `
    },
    {
      title: "🔧 Common Methods",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">add(E e)</td><td class="p-2">Inserts the element.</td></tr>
              <tr><td class="p-2">offer(E e)</td><td class="p-2">Same as add.</td></tr>
              <tr><td class="p-2">peek()</td><td class="p-2">Returns the head without removing.</td></tr>
              <tr><td class="p-2">poll()</td><td class="p-2">Removes and returns the head element.</td></tr>
              <tr><td class="p-2">remove()</td><td class="p-2">Removes and returns the head (throws if empty).</td></tr>
              <tr><td class="p-2">clear()</td><td class="p-2">Empties the queue.</td></tr>
              <tr><td class="p-2">size()</td><td class="p-2">Returns current number of elements.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧪 Example",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.PriorityQueue;

public class PriorityQueueExample {
    public static void main(String[] args) {
        PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;();

        pq.add(30);
        pq.add(10);
        pq.add(20);

        System.out.println("PriorityQueue: " + pq);  // Output is not sorted visually

        System.out.println("Top priority: " + pq.peek());  // 10

        pq.poll(); // removes 10
        System.out.println("After polling: " + pq); // [20, 30]
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔁 With Custom Comparator",
      content: `
        <div class="mb-6">
          <pre><code>PriorityQueue&lt;String&gt; pq = new PriorityQueue&lt;&gt;((a, b) -&gt; b.compareTo(a)); // Descending order
pq.add("Banana");
pq.add("Apple");
pq.add("Cherry");

System.out.println(pq); // Top priority is "Cherry"
</code></pre>
        </div>
      `
    }
  ]
},

{
  heading: "Deque in Java",
  subheadings: [
    {
      title: "✅ Definition",
      content: `
        <div class="mb-6">
          <p>
            A <b>Deque</b> (Double-Ended Queue) is a linear data structure where insertion and deletion can happen at both ends — front and rear.<br>
            Deque stands for Double Ended Queue.
          </p>
        </div>
      `
    },
    {
      title: "🧩 Hierarchy",
      content: `
        <div class="mb-6">
          <pre>
java.util.Collection
   ↳ java.util.Queue
       ↳ java.util.Deque
           ↳ java.util.ArrayDeque / LinkedList
          </pre>
          <p>
            Classes that implement Deque:
            <ul class="list-disc ml-6">
              <li>ArrayDeque</li>
              <li>LinkedList</li>
              <li>ConcurrentLinkedDeque (thread-safe)</li>
            </ul>
          </p>
        </div>
      `
    },
    {
      title: "🔧 Common Methods",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">addFirst(E e)</td><td class="p-2">Insert at front</td></tr>
              <tr><td class="p-2">addLast(E e)</td><td class="p-2">Insert at rear</td></tr>
              <tr><td class="p-2">offerFirst(E e)</td><td class="p-2">Insert at front (no exception)</td></tr>
              <tr><td class="p-2">offerLast(E e)</td><td class="p-2">Insert at rear (no exception)</td></tr>
              <tr><td class="p-2">removeFirst()</td><td class="p-2">Remove from front</td></tr>
              <tr><td class="p-2">removeLast()</td><td class="p-2">Remove from rear</td></tr>
              <tr><td class="p-2">peekFirst()</td><td class="p-2">View front element</td></tr>
              <tr><td class="p-2">peekLast()</td><td class="p-2">View rear element</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧪 Example using ArrayDeque",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {
    public static void main(String[] args) {
        Deque&lt;String&gt; deque = new ArrayDeque&lt;&gt;();

        deque.addFirst("Morning");
        deque.addLast("Evening");
        deque.add("Noon");  // By default adds to rear

        System.out.println(deque); // [Morning, Evening, Noon]

        System.out.println("First Element: " + deque.peekFirst()); // Morning
        System.out.println("Last Element: " + deque.peekLast());   // Noon

        deque.removeFirst(); // Remove Morning
        System.out.println("After removing first: " + deque); // [Evening, Noon]
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "⚖️ Comparison Table",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">PriorityQueue</th>
                <th class="p-2 text-left">Deque</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Access Order</td><td class="p-2">Based on priority</td><td class="p-2">Insertion order</td></tr>
              <tr><td class="p-2">Head Access</td><td class="p-2">Highest/Lowest priority</td><td class="p-2">Front element</td></tr>
              <tr><td class="p-2">Thread-safe</td><td class="p-2">❌ (use PriorityBlockingQueue)</td><td class="p-2">❌ (ConcurrentLinkedDeque for threads)</td></tr>
              <tr><td class="p-2">Null Allowed</td><td class="p-2">❌</td><td class="p-2">❌</td></tr>
              <tr><td class="p-2">Allows Duplicates</td><td class="p-2">✅</td><td class="p-2">✅</td></tr>
              <tr><td class="p-2">Insertion Ends</td><td class="p-2">Rear only</td><td class="p-2">Both Front and Rear</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔚 Summary",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Use Case</th>
                <th class="p-2 text-left">Recommended Class</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Task scheduling (priority-based)</td><td class="p-2">PriorityQueue</td></tr>
              <tr><td class="p-2">Undo/Redo or Browser history</td><td class="p-2">Deque</td></tr>
              <tr><td class="p-2">Efficient insert/delete at both ends</td><td class="p-2">ArrayDeque</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
},


{
  heading: "Set Interface in Java",
  subheadings: [
    {
      title: "✅ Definition",
      content: `
        <div class="mb-6">
          <p>
            The <b>Set</b> interface is a subinterface of <code>Collection</code> in the <code>java.util</code> package that represents a group of unique elements — no duplicates allowed.
          </p>
        </div>
      `
    },
    {
      title: "🧩 Hierarchy",
      content: `
        <div class="mb-6">
          <pre>
java.lang.Iterable
   ↳ java.util.Collection
       ↳ java.util.Set
           ↳ java.util.HashSet / LinkedHashSet / TreeSet
          </pre>
        </div>
      `
    },
    {
      title: "⚙️ Key Characteristics",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Unique Elements Only</td><td class="p-2">Set doesn't allow duplicate elements.</td></tr>
              <tr><td class="p-2">No Insertion Order</td><td class="p-2">HashSet doesn't maintain insertion order; LinkedHashSet does.</td></tr>
              <tr><td class="p-2">Null Allowed</td><td class="p-2">Only one null element is allowed.</td></tr>
              <tr><td class="p-2">Homogeneous & Heterogeneous</td><td class="p-2">If not using Generics, you can store different data types.</td></tr>
              <tr><td class="p-2">Implements Iterable</td><td class="p-2">Can use enhanced for-loop and Iterator.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧪 Basic Example",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class SetDemo {
    public static void main(String[] args) {
        Set&lt;Object&gt; s = new HashSet&lt;&gt;();
        s.add(20);
        s.add(30);
        s.add(null);
        s.add("adb");
        s.add(55);
        s.add(30);  // Duplicate, will be ignored

        System.out.println(s);  // Output might be unordered
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔍 Behavior with Custom Objects",
      content: `
        <div class="mb-6">
          <b>Scenario 1: Without Overriding equals() and hashCode()</b>
          <pre><code>class Student {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

public class CustomSet1 {
    public static void main(String[] args) {
        Set&lt;Student&gt; set = new HashSet&lt;&gt;();
        set.add(new Student(1, "Ravi"));
        set.add(new Student(1, "Ravi"));  // Treated as a different object

        System.out.println("Set size: " + set.size());  // Output: 2
    }
}</code></pre>
          <b>Scenario 2: With Overridden equals() and hashCode()</b>
          <pre><code>class Student {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Student)) return false;
        Student s = (Student) obj;
        return this.id == s.id && this.name.equals(s.name);
    }

    @Override
    public int hashCode() {
        return id * 31 + name.hashCode();
    }
}

public class CustomSet2 {
    public static void main(String[] args) {
        Set&lt;Student&gt; set = new HashSet&lt;&gt;();
        set.add(new Student(1, "Ravi"));
        set.add(new Student(1, "Ravi"));  // Now this will be ignored

        System.out.println("Set size: " + set.size());  // Output: 1
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🧠 Why Override equals() and hashCode()?",
      content: `
        <div class="mb-6">
          <p>
            Because HashSet uses a Hash Table, and each object is stored using its hash code.<br>
            To prevent duplicates properly, Java needs a way to compare object content, not just references.
          </p>
        </div>
      `
    },
    {
      title: "🛠 Set Implementations",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Implementation</th>
                <th class="p-2 text-left">Description</th>
                <th class="p-2 text-left">Maintains Order?</th>
                <th class="p-2 text-left">Allows Null?</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">HashSet</td><td class="p-2">Uses hashing; best for general-purpose use</td><td class="p-2">❌ No</td><td class="p-2">✅ One null</td></tr>
              <tr><td class="p-2">LinkedHashSet</td><td class="p-2">Maintains insertion order</td><td class="p-2">✅ Yes</td><td class="p-2">✅ One null</td></tr>
              <tr><td class="p-2">TreeSet</td><td class="p-2">Sorted set based on natural or custom ordering</td><td class="p-2">✅ Sorted</td><td class="p-2">❌ No</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔚 Summary",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Use Set when uniqueness of elements is important.</li>
            <li>Use HashSet for performance, LinkedHashSet for order, TreeSet for sorting.</li>
            <li>When storing custom objects, always override <code>equals()</code> and <code>hashCode()</code> to avoid duplicates based on logical equality.</li>
          </ul>
        </div>
      `
    }
  ]
},


{
  heading: "SortedSet in Java",
  subheadings: [
    {
      title: "✅ What is SortedSet?",
      content: `
        <div class="mb-6">
          <p>
            <b>SortedSet</b> is a subinterface of <code>Set</code> in the <code>java.util</code> package that automatically stores elements in ascending order (according to natural ordering or a custom comparator).<br>
            It is implemented by <code>TreeSet</code>.
          </p>
        </div>
      `
    },
    {
      title: "📚 Key Features",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Sorted Order</td><td class="p-2">Maintains elements in ascending (natural/custom) order</td></tr>
              <tr><td class="p-2">No Duplicates</td><td class="p-2">Inherits from Set, so duplicates are not allowed</td></tr>
              <tr><td class="p-2">Allows One Null</td><td class="p-2">Does not allow null if natural ordering is used</td></tr>
              <tr><td class="p-2">NavigableSet Inherited</td><td class="p-2">Supports methods like first(), last(), headSet(), etc.</td></tr>
              <tr><td class="p-2">Implements Iterable</td><td class="p-2">Can use enhanced for-each loop</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧪 Example",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class SortedSetDemo {
    public static void main(String[] args) {
        SortedSet&lt;Integer&gt; set = new TreeSet&lt;&gt;();
        set.add(40);
        set.add(10);
        set.add(30);
        set.add(20);
        // set.add(null); // ❌ Throws NullPointerException

        System.out.println("SortedSet: " + set); // Output: [10, 20, 30, 40]

        System.out.println("First Element: " + set.first());  // 10
        System.out.println("Last Element: " + set.last());    // 40
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "📌 Common Methods of SortedSet",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">first()</td><td class="p-2">Returns the first (lowest) element</td></tr>
              <tr><td class="p-2">last()</td><td class="p-2">Returns the last (highest) element</td></tr>
              <tr><td class="p-2">headSet(toElement)</td><td class="p-2">Returns elements less than toElement</td></tr>
              <tr><td class="p-2">tailSet(fromElem)</td><td class="p-2">Returns elements greater than or equal to</td></tr>
              <tr><td class="p-2">subSet(from, to)</td><td class="p-2">Returns a range between from (inclusive) and to (exclusive)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "📎 Summary",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>SortedSet is sorted automatically.</li>
            <li>Implemented using TreeSet.</li>
            <li>Great for when order matters and duplicates are not allowed.</li>
          </ul>
        </div>
      `
    }
  ]
},

{
  heading: "HashSet and LinkedHashSet in Java",
  subheadings: [
    {
      title: "What is HashSet?",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>HashSet is a class in <code>java.util</code> package that implements the Set interface using a HashTable.</li>
            <li>It does not maintain insertion order.</li>
            <li>It does not allow duplicate elements.</li>
            <li>It allows one null value.</li>
            <li>It uses <code>hashCode()</code> and <code>equals()</code> methods to check for duplicates.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔹 Key Characteristics of HashSet",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Storage Mechanism</td><td class="p-2">Hash Table</td></tr>
              <tr><td class="p-2">Duplicate Elements</td><td class="p-2">❌ Not allowed</td></tr>
              <tr><td class="p-2">Insertion Order</td><td class="p-2">❌ Not preserved</td></tr>
              <tr><td class="p-2">Null Values</td><td class="p-2">✅ Only one null allowed</td></tr>
              <tr><td class="p-2">Thread Safety</td><td class="p-2">❌ Not synchronized (use <code>Collections.synchronizedSet()</code> if needed)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔸 Example of HashSet",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class HashSetExample {
    public static void main(String[] args) {
        Set&lt;Object&gt; set = new HashSet&lt;&gt;();
        set.add("Apple");
        set.add(10);
        set.add(null);
        set.add("Banana");
        set.add(10); // Duplicate, will be ignored

        System.out.println("HashSet: " + set);
    }
}</code></pre>
          <b>Output (order may vary):</b>
          <pre>
HashSet: [null, Banana, Apple, 10]
          </pre>
        </div>
      `
    },
    {
      title: "✅ What is LinkedHashSet?",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>LinkedHashSet is a subclass of HashSet that maintains insertion order.</li>
            <li>Internally, it uses a hash table + doubly linked list to store elements.</li>
            <li>It also does not allow duplicate elements, but preserves insertion order.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔹 Key Characteristics of LinkedHashSet",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Storage Mechanism</td><td class="p-2">Hash Table + Doubly Linked List</td></tr>
              <tr><td class="p-2">Duplicate Elements</td><td class="p-2">❌ Not allowed</td></tr>
              <tr><td class="p-2">Insertion Order</td><td class="p-2">✅ Preserved</td></tr>
              <tr><td class="p-2">Null Values</td><td class="p-2">✅ Only one null allowed</td></tr>
              <tr><td class="p-2">Performance</td><td class="p-2">Slightly slower than HashSet due to linked list</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔸 Example of LinkedHashSet",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class LinkedHashSetExample {
    public static void main(String[] args) {
        Set&lt;Object&gt; set = new LinkedHashSet&lt;&gt;();
        set.add("Apple");
        set.add(10);
        set.add(null);
        set.add("Banana");
        set.add(10); // Duplicate, will be ignored

        System.out.println("LinkedHashSet: " + set);
    }
}</code></pre>
          <b>Output (preserves insertion order):</b>
          <pre>
LinkedHashSet: [Apple, 10, null, Banana]
          </pre>
        </div>
      `
    },
    {
      title: "🔁 HashSet vs LinkedHashSet — Comparison Table",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">HashSet</th>
                <th class="p-2 text-left">LinkedHashSet</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Maintains Order</td><td class="p-2">❌ No</td><td class="p-2">✅ Yes (insertion order)</td></tr>
              <tr><td class="p-2">Performance</td><td class="p-2">✅ Faster</td><td class="p-2">❌ Slightly slower</td></tr>
              <tr><td class="p-2">Underlying DS</td><td class="p-2">Hash Table</td><td class="p-2">Hash Table + Doubly Linked List</td></tr>
              <tr><td class="p-2">Duplicate Handling</td><td class="p-2">✅ No duplicates</td><td class="p-2">✅ No duplicates</td></tr>
              <tr><td class="p-2">Null Handling</td><td class="p-2">✅ One null allowed</td><td class="p-2">✅ One null allowed</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
},

{
  heading: "Iterator and ListIterator in Java",
  subheadings: [
    {
      title: "1. Iterator Interface",
      content: `
        <div class="mb-6">
          <p>
            The <b>Iterator</b> interface is used to iterate over elements of collections like ArrayList, HashSet, etc. It provides forward-only access to the collection.<br>
            <b>Package:</b> <code>java.util.Iterator</code>
          </p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">hasNext()</td><td class="p-2">Returns true if there are more elements to iterate</td></tr>
              <tr><td class="p-2">next()</td><td class="p-2">Returns the next element in the iteration</td></tr>
              <tr><td class="p-2">remove()</td><td class="p-2">Removes the last element returned by the iterator</td></tr>
            </tbody>
          </table>
          <b>Example of Iterator:</b>
          <pre><code>import java.util.*;

public class IteratorDemo {
    public static void main(String[] args) {
        List&lt;String&gt; names = new ArrayList&lt;&gt;();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        Iterator&lt;String&gt; iterator = names.iterator();

        while (iterator.hasNext()) {
            String name = iterator.next();
            System.out.println(name);
            if (name.equals("Bob")) {
                iterator.remove(); // Safely removes "Bob"
            }
        }

        System.out.println("After removal: " + names);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "2. ListIterator Interface",
      content: `
        <div class="mb-6">
          <p>
            <b>ListIterator</b> extends Iterator and is only available for List implementations like ArrayList, LinkedList, etc. It supports bi-directional traversal (forward and backward).<br>
            <b>Package:</b> <code>java.util.ListIterator</code>
          </p>
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">hasNext()</td><td class="p-2">Returns true if next element exists</td></tr>
              <tr><td class="p-2">next()</td><td class="p-2">Returns next element</td></tr>
              <tr><td class="p-2">hasPrevious()</td><td class="p-2">Returns true if previous element exists</td></tr>
              <tr><td class="p-2">previous()</td><td class="p-2">Returns previous element</td></tr>
              <tr><td class="p-2">nextIndex()</td><td class="p-2">Returns index of the element that would be returned by next()</td></tr>
              <tr><td class="p-2">previousIndex()</td><td class="p-2">Returns index of the element that would be returned by previous()</td></tr>
              <tr><td class="p-2">remove()</td><td class="p-2">Removes last element returned by next() or previous()</td></tr>
              <tr><td class="p-2">set(E e)</td><td class="p-2">Replaces the last element returned with the given element</td></tr>
              <tr><td class="p-2">add(E e)</td><td class="p-2">Adds element just before the next element</td></tr>
            </tbody>
          </table>
          <b>Example of ListIterator:</b>
          <pre><code>import java.util.*;

public class ListIteratorDemo {
    public static void main(String[] args) {
        List&lt;String&gt; cities = new ArrayList&lt;&gt;();
        cities.add("Delhi");
        cities.add("Mumbai");
        cities.add("Kolkata");

        ListIterator&lt;String&gt; listIterator = cities.listIterator();

        // Forward traversal
        System.out.println("Forward Traversal:");
        while (listIterator.hasNext()) {
            String city = listIterator.next();
            System.out.println(city);
            if (city.equals("Mumbai")) {
                listIterator.set("Pune");  // Replace Mumbai with Pune
                listIterator.add("Chennai"); // Add Chennai after Pune
            }
        }

        // Backward traversal
        System.out.println("\\nBackward Traversal:");
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }

        System.out.println("\\nFinal List: " + cities);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔍 Comparison Table: Iterator vs ListIterator",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">Iterator</th>
                <th class="p-2 text-left">ListIterator</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Traversal</td><td class="p-2">Forward only</td><td class="p-2">Forward and backward</td></tr>
              <tr><td class="p-2">Removal</td><td class="p-2">Yes</td><td class="p-2">Yes</td></tr>
              <tr><td class="p-2">Add</td><td class="p-2">No</td><td class="p-2">Yes</td></tr>
              <tr><td class="p-2">Replace (set)</td><td class="p-2">No</td><td class="p-2">Yes</td></tr>
              <tr><td class="p-2">Applicable</td><td class="p-2">Any Collection</td><td class="p-2">Only List types</td></tr>
              <tr><td class="p-2">Methods</td><td class="p-2">3 core methods</td><td class="p-2">9+ core methods</td></tr>
            </tbody>
          </table>
        </div>
      `
    }
  ]
},

{
  heading: "Map Interface in Java",
  subheadings: [
    {
      title: "🔹 Overview",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Map is a part of the Java Collections Framework.</li>
            <li>It is not a subtype of Collection. Instead, it is a separate interface defined in the <code>java.util</code> package.</li>
            <li>A Map stores key-value pairs, where:
              <ul class="list-disc ml-6">
                <li>Keys must be unique.</li>
                <li>Values can be duplicate.</li>
              </ul>
            </li>
            <li>Common real-world analogy: A dictionary — where each word (key) maps to a definition (value).</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔹 Key Characteristics",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Property</th>
                <th class="p-2 text-left">Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Key Uniqueness</td><td class="p-2">Only one occurrence of each key is allowed.</td></tr>
              <tr><td class="p-2">Value Duplication</td><td class="p-2">Values can be duplicated across different keys.</td></tr>
              <tr><td class="p-2">Null Handling</td><td class="p-2">Allows one null key and multiple null values (in most implementations like HashMap).</td></tr>
              <tr><td class="p-2">Ordering</td><td class="p-2">Varies based on implementation (e.g., HashMap is unordered, TreeMap is sorted by key).</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔹 Important Methods of Map Interface",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">put(K key, V value)</td><td class="p-2">Inserts or updates a key-value pair</td></tr>
              <tr><td class="p-2">get(Object key)</td><td class="p-2">Retrieves the value for the given key</td></tr>
              <tr><td class="p-2">remove(Object key)</td><td class="p-2">Deletes the mapping for the given key</td></tr>
              <tr><td class="p-2">containsKey(Object key)</td><td class="p-2">Checks if a key exists</td></tr>
              <tr><td class="p-2">containsValue(Object value)</td><td class="p-2">Checks if a value exists</td></tr>
              <tr><td class="p-2">isEmpty()</td><td class="p-2">Returns true if map has no mappings</td></tr>
              <tr><td class="p-2">size()</td><td class="p-2">Returns number of key-value pairs</td></tr>
              <tr><td class="p-2">keySet()</td><td class="p-2">Returns a set view of all keys</td></tr>
              <tr><td class="p-2">values()</td><td class="p-2">Returns a collection of values</td></tr>
              <tr><td class="p-2">entrySet()</td><td class="p-2">Returns a set of key-value pairs (Map.Entry&lt;K, V&gt;)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔹 Example: HashMap",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class MapExample {
    public static void main(String[] args) {
        Map&lt;Integer, String&gt; studentMap = new HashMap&lt;&gt;();

        studentMap.put(101, "Alice");
        studentMap.put(102, "Bob");
        studentMap.put(103, "Charlie");

        System.out.println("Student with ID 102: " + studentMap.get(102));

        for (Map.Entry&lt;Integer, String&gt; entry : studentMap.entrySet()) {
            System.out.println("ID: " + entry.getKey() + ", Name: " + entry.getValue());
        }

        System.out.println("Keys: " + studentMap.keySet());
        System.out.println("Values: " + studentMap.values());
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔹 Implementations of Map",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Implementation</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">HashMap</td><td class="p-2">Unordered, allows one null key and multiple null values.</td></tr>
              <tr><td class="p-2">LinkedHashMap</td><td class="p-2">Maintains insertion order.</td></tr>
              <tr><td class="p-2">TreeMap</td><td class="p-2">Maintains sorted order of keys (natural or via comparator).</td></tr>
              <tr><td class="p-2">Hashtable</td><td class="p-2">Synchronized, legacy class, doesn’t allow null keys or values.</td></tr>
              <tr><td class="p-2">EnumMap</td><td class="p-2">Special map for enums as keys.</td></tr>
              <tr><td class="p-2">IdentityHashMap</td><td class="p-2">Uses == instead of .equals() for comparing keys.</td></tr>
              <tr><td class="p-2">WeakHashMap</td><td class="p-2">Entries can be garbage collected if the key is no longer referenced.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔹 TreeMap Example (Sorted Map)",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class TreeMapDemo {
    public static void main(String[] args) {
        TreeMap&lt;String, Integer&gt; scores = new TreeMap&lt;&gt;();

        scores.put("Zoe", 90);
        scores.put("Alice", 95);
        scores.put("Bob", 85);

        System.out.println("Sorted Scores: " + scores);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔹 LinkedHashMap Example (Insertion Order)",
      content: `
        <div class="mb-6">
          <pre><code>import java.util.*;

public class LinkedHashMapDemo {
    public static void main(String[] args) {
        LinkedHashMap&lt;Integer, String&gt; map = new LinkedHashMap&lt;&gt;();

        map.put(10, "Java");
        map.put(20, "Python");
        map.put(30, "C++");

        System.out.println("Insertion Order Maintained: " + map);
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔹 HashMap with Custom Object Keys",
      content: `
        <div class="mb-6">
          <pre><code>class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // hashCode and equals must be overridden
    @Override
    public int hashCode() {
        return id * name.hashCode();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Employee)) return false;
        Employee e = (Employee) o;
        return id == e.id && name.equals(e.name);
    }

    public String toString() {
        return name + " (" + id + ")";
    }
}

public class CustomKeyMap {
    public static void main(String[] args) {
        Map&lt;Employee, String&gt; empMap = new HashMap&lt;&gt;();

        empMap.put(new Employee(1, "Ravi"), "Developer");
        empMap.put(new Employee(2, "Sneha"), "Tester");

        empMap.forEach((key, value) -> System.out.println(key + ": " + value));
    }
}</code></pre>
        </div>
      `
    },
    {
      title: "🔹 Differences Between Map Implementations",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Feature</th>
                <th class="p-2 text-left">HashMap</th>
                <th class="p-2 text-left">LinkedHashMap</th>
                <th class="p-2 text-left">TreeMap</th>
                <th class="p-2 text-left">Hashtable</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">Ordering</td><td class="p-2">No order</td><td class="p-2">Insertion order</td><td class="p-2">Sorted order</td><td class="p-2">No order</td></tr>
              <tr><td class="p-2">Null Keys</td><td class="p-2">1 allowed</td><td class="p-2">1 allowed</td><td class="p-2">Not allowed</td><td class="p-2">Not allowed</td></tr>
              <tr><td class="p-2">Thread Safe</td><td class="p-2">No</td><td class="p-2">No</td><td class="p-2">No</td><td class="p-2">Yes</td></tr>
              <tr><td class="p-2">Performance</td><td class="p-2">Fast</td><td class="p-2">Slightly slower</td><td class="p-2">Slower</td><td class="p-2">Slow</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "✅ Summary",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Map is best used when you need to associate keys with values.</li>
            <li>Choose implementation based on ordering, performance, and thread safety requirements.</li>
            <li>Always override <code>equals()</code> and <code>hashCode()</code> in custom objects used as keys.</li>
          </ul>
        </div>
      `
    }
  ]
},

{
  heading: "Java File Handling",
  subheadings: [
    {
      title: "🔸 Introduction to File Handling",
      content: `
        <div class="mb-6">
          <p>
            File handling in Java allows programs to create, read, write, and modify files stored in the file system. Java provides a set of classes in the <code>java.io</code> and <code>java.nio.file</code> packages to handle file operations.
          </p>
        </div>
      `
    },
    {
      title: "🔹 Why File Handling?",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>To store data permanently (beyond program execution).</li>
            <li>For data processing from files.</li>
            <li>To manipulate configuration or log files.</li>
            <li>To interact with external systems like CSV, XML, or JSON files.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔹 Common File Handling Classes",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Class</th>
                <th class="p-2 text-left">Package</th>
                <th class="p-2 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">File</td><td class="p-2">java.io</td><td class="p-2">Represents a file or directory path.</td></tr>
              <tr><td class="p-2">FileReader</td><td class="p-2">java.io</td><td class="p-2">For reading character files.</td></tr>
              <tr><td class="p-2">FileWriter</td><td class="p-2">java.io</td><td class="p-2">For writing character data to a file.</td></tr>
              <tr><td class="p-2">BufferedReader</td><td class="p-2">java.io</td><td class="p-2">Improves efficiency while reading text.</td></tr>
              <tr><td class="p-2">BufferedWriter</td><td class="p-2">java.io</td><td class="p-2">Efficiently writes text data to file.</td></tr>
              <tr><td class="p-2">Scanner</td><td class="p-2">java.util</td><td class="p-2">Reads input line-by-line (flexible use).</td></tr>
              <tr><td class="p-2">Files, Paths</td><td class="p-2">java.nio.file</td><td class="p-2">Modern NIO approach for advanced file ops.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🔸 1. File Creation using File Class",
      content: `
        <div class="mb-6">
          <pre><code>import java.io.File;
import java.io.IOException;

public class FileCreateDemo {
    public static void main(String[] args) {
        File file = new File("sample.txt");

        try {
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            System.out.println("Error occurred.");
            e.printStackTrace();
        }
    }
}</code></pre>
          <b>Explanation:</b>
          <ul class="list-disc ml-6">
            <li>File is used to define a file name/path.</li>
            <li>createNewFile() creates a new file if it does not exist.</li>
            <li>Handles IOException in case of issues like permission denied or invalid path.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 2. Writing to a File using FileWriter",
      content: `
        <div class="mb-6">
          <pre><code>import java.io.FileWriter;
import java.io.IOException;

public class FileWriteDemo {
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("sample.txt");
            writer.write("Welcome to Java File Handling!");
            writer.close();
            System.out.println("Successfully written to file.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}</code></pre>
          <b>Explanation:</b>
          <ul class="list-disc ml-6">
            <li>FileWriter writes characters to a file.</li>
            <li>write() method sends content to the file.</li>
            <li>Always close the writer to release resources.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 3. Reading from a File using FileReader",
      content: `
        <div class="mb-6">
          <pre><code>import java.io.FileReader;
import java.io.IOException;

public class FileReadDemo {
    public static void main(String[] args) {
        try {
            FileReader reader = new FileReader("sample.txt");
            int ch;
            while ((ch = reader.read()) != -1) {
                System.out.print((char) ch);
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}</code></pre>
          <b>Explanation:</b>
          <ul class="list-disc ml-6">
            <li>FileReader reads the file character by character.</li>
            <li>read() returns character value or -1 if end of file is reached.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 4. Reading with BufferedReader (Line-by-Line)",
      content: `
        <div class="mb-6">
          <pre><code>import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReadDemo {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("sample.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}</code></pre>
          <b>Explanation:</b>
          <ul class="list-disc ml-6">
            <li>BufferedReader reads text efficiently using internal buffer.</li>
            <li>readLine() reads one line at a time.</li>
            <li>Try-with-resources used to auto-close streams.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 5. Writing with BufferedWriter",
      content: `
        <div class="mb-6">
          <pre><code>import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedWriteDemo {
    public static void main(String[] args) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("sample.txt", true))) {
            bw.write("\\nAppending a new line!");
            bw.newLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}</code></pre>
          <b>Explanation:</b>
          <ul class="list-disc ml-6">
            <li>Adds content to file in buffered manner.</li>
            <li>true in FileWriter enables append mode.</li>
            <li>newLine() adds a line separator.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 6. File Handling using java.nio.file (Modern Approach)",
      content: `
        <div class="mb-6">
          <pre><code>import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

public class NIOExample {
    public static void main(String[] args) throws IOException {
        Path path = Path.of("sample.txt");

        // Read All Lines
        Files.readAllLines(path).forEach(System.out::println);

        // Write to File
        Files.write(path, "\\nWritten via NIO!".getBytes(), java.nio.file.StandardOpenOption.APPEND);
    }
}</code></pre>
          <b>Explanation:</b>
          <ul class="list-disc ml-6">
            <li>Path and Files provide concise and powerful file handling APIs.</li>
            <li>Can read and write whole file content at once.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 7. Using Scanner to Read File Input",
      content: `
        <div class="mb-6">
          <pre><code>import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ScannerReadDemo {
    public static void main(String[] args) {
        try {
            File file = new File("sample.txt");
            Scanner sc = new Scanner(file);
            while (sc.hasNextLine()) {
                System.out.println(sc.nextLine());
            }
            sc.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}</code></pre>
          <b>Explanation:</b>
          <ul class="list-disc ml-6">
            <li>Scanner makes it easy to parse lines, words, or tokens.</li>
            <li>Especially useful for reading formatted input from file.</li>
          </ul>
        </div>
      `
    },
    {
      title: "🔸 Common File Methods (File Class)",
      content: `
        <div class="mb-6">
          <table class="w-full text-sm border border-gray-200 rounded-lg overflow-hidden my-4">
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 text-left">Method</th>
                <th class="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="p-2">createNewFile()</td><td class="p-2">Creates new file.</td></tr>
              <tr><td class="p-2">exists()</td><td class="p-2">Checks if file exists.</td></tr>
              <tr><td class="p-2">getName()</td><td class="p-2">Returns file name.</td></tr>
              <tr><td class="p-2">getAbsolutePath()</td><td class="p-2">Returns complete path.</td></tr>
              <tr><td class="p-2">length()</td><td class="p-2">Returns size in bytes.</td></tr>
              <tr><td class="p-2">delete()</td><td class="p-2">Deletes the file.</td></tr>
              <tr><td class="p-2">canRead()/canWrite()</td><td class="p-2">Checks file permissions.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "🧠 Best Practices",
      content: `
        <div class="mb-6">
          <ul class="list-disc ml-6">
            <li>Always close file resources after use.</li>
            <li>Use try-with-resources to auto-close readers/writers.</li>
            <li>Handle exceptions properly to avoid data loss.</li>
            <li>Use Buffered classes for better performance.</li>
            <li>Prefer java.nio.file for modern, readable syntax.</li>
          </ul>
        </div>
      `
    }
  ]
},
{
  heading: "Core Java Interview Questions",
  subheadings: [
    {
      title: "General Java Basics",
      content: `
        <div class="mb-6">
          <ol class="list-decimal ml-6">
            <li><b>What is Java?</b><br>Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems (now owned by Oracle). It uses a “write once, run anywhere” approach using the Java Virtual Machine (JVM).</li>
            <li><b>Main features of Java:</b><br>Object-Oriented, Platform Independent, Secure, Robust, Multithreaded, Distributed</li>
            <li><b>Difference between JDK, JRE, and JVM:</b><br>JDK (Java Development Kit): Contains tools to compile, debug and run Java applications.<br>JRE (Java Runtime Environment): Provides runtime environment including JVM and libraries.<br>JVM (Java Virtual Machine): Executes Java bytecode and provides platform independence.</li>
            <li><b>Class and Object in Java:</b><br>A class is a blueprint for creating objects. An object is an instance of a class containing state (fields) and behavior (methods).</li>
            <li><b>Difference between == and equals():</b><br>== compares reference or memory address.<br>.equals() compares object content/data (if overridden).</li>
          </ol>
        </div>
      `
    },
    {
      title: "✅ OOPs Concepts",
      content: `
        <div class="mb-6">
          <ol class="list-decimal ml-6">
            <li><b>Inheritance:</b> Allows one class (child) to inherit the properties and methods of another class (parent), promoting code reusability.</li>
            <li><b>Polymorphism:</b> Ability of a single method or object to behave differently in different contexts.<br>Compile-time (method overloading), Runtime (method overriding)</li>
            <li><b>Encapsulation:</b> Binding data and code together into a single unit by using private variables and public getters/setters.</li>
            <li><b>Abstraction:</b> Hiding implementation details and showing only functionality using abstract classes or interfaces.</li>
            <li><b>Difference between interface and abstract class:</b><br>Interface has only abstract methods (Java 8+ supports default/static).<br>Abstract class can have both abstract and concrete methods.<br>A class can implement multiple interfaces but can extend only one abstract class.</li>
          </ol>
        </div>
      `
    },
    {
      title: "✅ String Handling",
      content: `
        <div class="mb-6">
          <ol class="list-decimal ml-6">
            <li><b>Why is String immutable in Java?</b><br>For security, caching, synchronization, and class loading. Once created, a string cannot be modified, reducing bugs and increasing efficiency.</li>
            <li><b>Difference between String, StringBuilder, and StringBuffer:</b><br>String: Immutable<br>StringBuilder: Mutable, not thread-safe<br>StringBuffer: Mutable, thread-safe</li>
            <li><b>What is string pool in Java?</b><br>A memory area inside heap where Java stores string literals to reduce memory usage.</li>
          </ol>
        </div>
      `
    },
    {
      title: "✅ Exception Handling",
      content: `
        <div class="mb-6">
          <ol class="list-decimal ml-6">
            <li><b>Difference between checked and unchecked exceptions:</b><br>Checked: Checked at compile time (e.g., IOException).<br>Unchecked: Occur at runtime (e.g., NullPointerException).</li>
            <li><b>Use of finally block:</b><br>It always executes after try or catch blocks, used for cleanup code.</li>
          </ol>
        </div>
      `
    },
    {
      title: "✅ Collections Framework",
      content: `
        <div class="mb-6">
          <ol class="list-decimal ml-6">
            <li><b>Difference between List, Set, and Map:</b><br>List: Ordered, allows duplicates.<br>Set: Unordered, no duplicates.<br>Map: Stores key-value pairs.</li>
            <li><b>Difference between ArrayList and LinkedList:</b><br>ArrayList: Better for retrieval, uses dynamic array.<br>LinkedList: Better for insertion/deletion, uses doubly-linked list.</li>
            <li><b>What is HashMap and how does it work?</b><br>It stores data in key-value pairs using hashing. Hashing involves computing a hash code and storing in buckets.</li>
            <li><b>Difference between HashMap and Hashtable:</b><br>HashMap: Not synchronized, allows one null key.<br>Hashtable: Thread-safe, doesn’t allow null key or value.</li>
            <li><b>Fail-fast vs Fail-safe:</b><br>Fail-fast: Throws ConcurrentModificationException (e.g., ArrayList, HashMap).<br>Fail-safe: Doesn’t throw exception (e.g., ConcurrentHashMap, CopyOnWriteArrayList).</li>
          </ol>
        </div>
      `
    },
    {
      title: "✅ Multithreading",
      content: `
        <div class="mb-6">
          <ol class="list-decimal ml-6">
            <li><b>What is a thread in Java?</b><br>A thread is a lightweight subprocess, the smallest unit of processing.</li>
            <li><b>How to create a thread in Java?</b><br>By extending Thread class or implementing Runnable interface.</li>
            <li><b>What is synchronization in Java?</b><br>Used to control access of multiple threads to shared resources using the synchronized keyword.</li>
            <li><b>What is deadlock?</b><br>When two or more threads wait indefinitely for each other to release resources.</li>
            <li><b>Difference between wait() and sleep():</b><br>wait(): Releases lock, used in synchronization.<br>sleep(): Pauses execution but doesn’t release lock.</li>
          </ol>
        </div>
      `
    },
    {
      title: "✅ Advanced Java",
      content: `
        <div class="mb-6">
          <ol class="list-decimal ml-6">
            <li><b>What is serialization in Java?</b><br>Converting object into byte stream using Serializable interface for persistence or transfer.</li>
            <li><b>What is transient keyword in Java?</b><br>Used to indicate that a variable should not be serialized.</li>
            <li><b>Use of static keyword:</b><br>Used for memory management. It can be applied to variables, methods, blocks, and nested classes.</li>
            <li><b>What are wrapper classes in Java?</b><br>Used to convert primitive data types into objects. (e.g., int → Integer)</li>
            <li><b>What is autoboxing and unboxing?</b><br>Autoboxing: Primitive → Wrapper<br>Unboxing: Wrapper → Primitive</li>
          </ol>
        </div>
      `
    }
  ]
},

  ],
};

export default javaTutorial;
