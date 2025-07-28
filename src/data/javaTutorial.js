const javaTutorial = {
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
  heading: "Interface in Java – Complete In-Depth Guide",
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


  ],
};

export default javaTutorial;
