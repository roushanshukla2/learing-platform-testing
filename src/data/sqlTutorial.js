// src/data/sqlTutorial.js
const sqlTutorial = {
  title: "SQL Tutorial",
  description:
    "Learn the basics of SQL - Structured Query Language for managing and querying databases.",
  topics: [
    {
      heading: "Introduction to Databases and the Evolution of the Relational Model",
      subheadings: [
        {
          title: "Understanding Databases: The Foundation of Modern Applications",
          content: `<p>A database is a structured and systematic collection of data designed for efficient storage, management, and retrieval. It acts as the backbone of all modern software applications — from banking and healthcare to social media and e-commerce. Over the decades, databases have evolved from rigid and complex systems to the flexible and powerful relational models we use today.</p>`
        },
        {
          title: "📂 What is a Database?",
          content: `<p>A database is an electronic repository that stores information in an organized way, making it easy to access, manage, and update. It allows large volumes of data to be processed and shared among multiple users and applications.</p>
<p><strong>For example:</strong> A student management system uses a database to store student records, exam scores, and attendance.</p>`
        },
        {
          title: "⚙️ What is a Database Management System (DBMS)?",
          content: `<p>A Database Management System (DBMS) is software that provides tools to interact with a database. It allows users to perform operations like:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Creating and modifying</strong> database structures</li>
<li><strong>Inserting, updating, or deleting</strong> records</li>
<li><strong>Running queries</strong> to retrieve data</li>
<li><strong>Managing user access</strong> and permissions</li>
<li><strong>Ensuring data consistency</strong> and integrity</li>
</ul>
<p><strong>Popular DBMS examples include:</strong> MySQL, Oracle, PostgreSQL, and SQL Server.</p>`
        },
        {
          title: "🏛️ Traditional Databases (Pre-Relational Era)",
          content: `<p>Before relational databases were introduced, data was managed using hierarchical or network structures.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📁 1. Hierarchical Databases</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Represented data in a tree-like format</strong> with parent-child relationships.</li>
<li><strong>Fast for specific types of queries</strong> but rigid and difficult to scale.</li>
<li><strong>Example:</strong> IBM's IMS (Information Management System).</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🔗 2. Network Databases</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>A more flexible model</strong> where records could have multiple parent and child nodes.</li>
<li><strong>Based on graph-like relationships,</strong> allowing many-to-many connections.</li>
<li><strong>While powerful,</strong> it was extremely complex to design and query.</li>
</ul>
<p class="mt-4"><strong>Both hierarchical and network databases required procedural access</strong> — developers had to manually define the exact data path to retrieve or manipulate records.</p>`
        },
        {
          title: "🧱 Relational Databases (RDBMS)",
          content: `<p>Introduced by Dr. E.F. Codd in 1970, the relational model revolutionized data management.</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Data is stored in tables (relations)</strong> with rows (records) and columns (fields).</li>
<li><strong>Each table represents a single entity</strong> (e.g., Students, Orders, Products).</li>
<li><strong>Relationships between data are established</strong> using keys (Primary Key, Foreign Key).</li>
<li><strong>Queries are written in a declarative language</strong> — Structured Query Language (SQL).</li>
</ul>
<p><strong>Examples of RDBMS:</strong> MySQL, PostgreSQL, SQLite, Oracle, Microsoft SQL Server.</p>`
        },
        {
          title: "🎯 Why Was the Relational Model Introduced?",
          content: `<p>The relational model solved several critical problems found in older systems:</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ 1. Elimination of Complexity</h4>
<p>Traditional models were navigational — programmers had to specify how to get the data. Relational databases let users focus on what data they want, making development simpler and more intuitive.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ 2. Reduced Data Redundancy</h4>
<p>Data stored in separate tables can be linked using relationships, minimizing repetition. For example, instead of storing the same customer address in every order, it's stored once in a Customers table.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ 3. Improved Data Integrity</h4>
<p>Through constraints like primary keys, foreign keys, unique constraints, and checks, relational databases maintain accurate and consistent data.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ 4. Enhanced Data Independence</h4>
<p>Changes in physical storage (e.g., how files are saved) don't affect the logical structure (tables and columns). This decouples application logic from storage logic.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ 5. Multi-user and Transaction Support</h4>
<p>RDBMS supports ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure safe and concurrent access by multiple users.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ 6. Scalability and Maintenance</h4>
<p>The modular structure of tables allows relational databases to scale easily, integrate with modern software stacks, and support ongoing maintenance with minimal risk.</p>`
        },
        {
          title: "🧠 Summary Table",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Concept</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Database</td>
<td class="border border-gray-300 px-4 py-2">Organized collection of data</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">DBMS</td>
<td class="border border-gray-300 px-4 py-2">Software to manage and interact with databases</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Hierarchical DB</td>
<td class="border border-gray-300 px-4 py-2">Tree-structured, parent-child data relationships</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Network DB</td>
<td class="border border-gray-300 px-4 py-2">Graph-structured, complex relationships</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Relational DB (RDBMS)</td>
<td class="border border-gray-300 px-4 py-2">Table-based model using SQL for easy querying</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Why RDBMS Introduced</td>
<td class="border border-gray-300 px-4 py-2">To reduce complexity, redundancy, and improve querying & scalability</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📌 Additional Key Points",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Relational databases are foundation technologies</strong> for almost all modern apps.</li>
<li><strong>SQL became a universal standard</strong> for data access and manipulation.</li>
<li><strong>RDBMS models ensure data security</strong> through user roles, permissions, and encryption.</li>
<li><strong>Modern RDBMS support cloud-based storage,</strong> replication, backup & recovery, and analytics integration.</li>
</ul>`
        }
      ]
    },
    {
      heading: "What is SQL?",
      subheadings: [
        {
          title: "SQL: The Foundation of Relational Database Interaction",
          content: `<p>Structured Query Language (SQL) is a specialized programming language designed for working with data stored in relational databases. Acting as a universal interface, SQL empowers users to conduct everything from basic data lookups to advanced data manipulation and administrative operations within databases.</p>
<p>SQL plays a critical role in working with Relational Database Management Systems (RDBMS) such as MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server. These systems manage data using a tabular format—rows and columns—and SQL provides a structured approach to define, query, and modify that data effectively.</p>`,
        },
        {
          title: "Notable Capabilities of SQL",
          content: `<p>• <strong>Goal-Oriented Commands:</strong> SQL follows a declarative paradigm, meaning users specify what they want, not how to do it. The underlying engine optimizes and determines the execution path.</p>
<p>• <strong>Cross-Platform Consistency:</strong> As a language regulated by ANSI and ISO standards, SQL maintains a consistent core syntax across various platforms, despite having vendor-specific extensions.</p>
<p>• <strong>Straightforward and Intuitive:</strong> With syntax resembling natural English, SQL is accessible to developers, analysts, and even non-technical users who work with data.</p>
<p>• <strong>Versatile Data Handling:</strong> SQL offers extensive capabilities for manipulating data—such as filtering, joining, grouping, sorting, and aggregating—making complex analysis possible through concise queries.</p>
<p>• <strong>Adaptable to Scale:</strong> Whether you're building a small prototype or managing enterprise-scale databases, SQL is robust enough to manage both low and high data volumes efficiently.</p>
<p>• <strong>Fine-Grained Access Control:</strong> SQL provides mechanisms for managing user permissions, allowing for secure access and control over specific database objects and actions.</p>
<p>• <strong>Reliable Transaction Management:</strong> With features like BEGIN, COMMIT, and ROLLBACK, SQL ensures that multi-step operations either complete fully or not at all, preserving data integrity.</p>
<p>• <strong>Data Accuracy through Constraints:</strong> SQL allows the use of constraints—such as PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and NOT NULL—to enforce validation rules and maintain data reliability.</p>
<p>• <strong>Seamless Ecosystem Integration:</strong> SQL works well alongside a wide array of technologies and programming languages like Python, Java, and PHP, making it a highly adaptable part of any tech stack.</p>`,
        },
      ],
    },
    
    {
      heading: "History of SQL",
      subheadings: [
        {
          title: "The Birth of a Data-Driven Era: The History of SQL",
          content: `<p>The evolution of Structured Query Language (SQL) represents one of the most pivotal moments in the history of computing. What began as an academic experiment in the 1970s has grown into the universal language for relational databases, forming the foundation of modern data systems across industries.</p>`,
        },
        {
          title: "From Theory to Innovation: The Emergence of a Query Language",
          content: `<p>The journey of SQL began with a landmark paper published in 1970 by Dr. Edgar F. Codd, a British computer scientist at IBM. In his paper titled "A Relational Model of Data for Large Shared Data Banks," Codd introduced a revolutionary approach to storing and organizing data using tables — now known as the relational model. This model offered a simpler and more logical alternative to the complicated hierarchical and network databases that dominated the era.</p>
<p>Building on this theoretical groundwork, IBM researchers Donald D. Chamberlin and Raymond F. Boyce developed a query language that allowed users to retrieve and manipulate data without needing to understand the underlying storage mechanisms. Their language, first introduced in 1974, was called SEQUEL (Structured English Query Language), emphasizing a declarative, English-like syntax.</p>`,
        },
        {
          title: "System R: The Experimental Ground for SQL",
          content: `<p>To validate both the relational model and SEQUEL in practice, IBM initiated an ambitious project called System R in the mid-1970s. This research initiative aimed to build a functioning relational database management system (RDBMS) that could support practical workloads.</p>
<p><strong>System R made several groundbreaking contributions:</strong></p>
<p>• It was the first working implementation of SQL.</p>
<p>• It proved that relational databases could handle real-world transaction processing.</p>
<p>• It introduced core concepts in query optimization and database design still used today.</p>
<p>Due to trademark limitations, the name SEQUEL was later shortened to SQL, which eventually became the official term for the language.</p>`,
        },
        {
          title: "SQL Goes Commercial: The Rise of Oracle",
          content: `<p>While IBM continued refining System R, another group of innovators saw commercial potential in the relational approach. In 1977, Larry Ellison, Bob Miner, and Ed Oates founded Relational Software Inc., which would later become Oracle Corporation. They embraced SQL as their query language and, in 1979, launched the first commercially available SQL-based RDBMS, Oracle V2—beating IBM to market.</p>`,
        },
        {
          title: "From Vendor Adoption to Industry Standards",
          content: `<p>With more companies adopting SQL in their products, the demand for a standardized version of the language grew. The American National Standards Institute (ANSI) released the first official SQL standard in 1986 (SQL-86), followed by the International Organization for Standardization (ISO) in 1987. This standardization ensured consistent behavior across different SQL-based systems.</p>`,
        },
        {
          title: "Milestones in SQL Standard Development",
          content: `<p>SQL has continuously evolved to meet the needs of developers and businesses alike. Key updates to the standard include:</p>
<p>• <strong>SQL-89:</strong> Introduced basic integrity constraints like PRIMARY KEY and FOREIGN KEY.</p>
<p>• <strong>SQL-92:</strong> A major overhaul that added features like outer joins, set operations (UNION, INTERSECT, EXCEPT), and the versatile CASE expression.</p>
<p>• <strong>SQL:1999 (SQL3):</strong> Brought in support for triggers, recursive queries, and object-relational extensions.</p>
<p>• <strong>SQL:2003:</strong> Introduced XML capabilities and standardized window functions.</p>
<p>• <strong>SQL:2008:</strong> Enhanced trigger definitions and added the TRUNCATE TABLE statement.</p>
<p>• <strong>SQL:2011:</strong> Expanded support for temporal (time-based) data and analytical functions.</p>
<p>• <strong>SQL:2016:</strong> Integrated native support for JSON (JavaScript Object Notation).</p>
<p>• <strong>SQL:2023:</strong> The latest standard includes advanced JSON operations and introduces property graph querying (SQL/PGQ), further modernizing SQL for contemporary data models.</p>`,
        },
        {
          title: "Legacy and Impact",
          content: `<p>From its academic inception at IBM to its widespread use in enterprise environments and cloud platforms, SQL has become an enduring cornerstone of data management. Its blend of simplicity, flexibility, and power continues to drive innovation in how we store, access, and analyze information.</p>`,
        },
      ],
    },
    {
      heading: "Important Keywords",
      subheadings: [
        {
          title: "🔹Understanding the ER Model: Foundation of Database Design",
          content: `<p>The ER Model plays a foundational role in designing a well-structured database. It visually describes how data is connected and how entities interact in a system. Below are the key terms, explained with enhanced detail and examples.</p>`
        },
        {
          title: "🔹 ER Model (Entity-Relationship Model)",
          content: `<p>The ER Model is a graphical and theoretical approach to database design. It allows database designers to map out data structures with entities, attributes, and relationships before converting them into a relational model (like SQL tables).</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Key Points:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Developed by Peter Chen in 1976.</strong></li>
<li><strong>Simplifies communication</strong> between technical and non-technical stakeholders.</li>
<li><strong>Acts as a blueprint</strong> for the physical database design.</li>
<li><strong>Can be transformed into relational schema</strong> through mapping rules.</li>
</ul>`
        },
        {
          title: "🔹 Entity",
          content: `<p>An entity represents a distinguishable object or concept in the real world that you want to store data about. Entities can be physical objects (like Student, Product) or abstract concepts (like Course, Transaction).</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Types of Entities:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Strong Entity:</strong> Exists independently (e.g., Customer)</li>
<li><strong>Weak Entity:</strong> Depends on another entity for its existence (e.g., Order Item related to Order)</li>
<li><strong>Represented as rectangles</strong> in ER diagrams.</li>
</ul>`
        },
        {
          title: "🔹 Attribute",
          content: `<p>Attributes define the characteristics or properties of an entity. Each attribute holds a value for an entity instance.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Types of Attributes:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Simple/Atomic Attribute:</strong> Cannot be divided further (Age, ID)</li>
<li><strong>Composite Attribute:</strong> Can be broken into sub-parts (Full Name → First Name + Last Name)</li>
<li><strong>Single-valued Attribute:</strong> Holds one value (Email)</li>
<li><strong>Multivalued Attribute:</strong> Can have multiple values (Phone Numbers)</li>
<li><strong>Represented as ellipses</strong> in ER diagrams.</li>
</ul>`
        },
        {
          title: "🔹 Key Attribute",
          content: `<p>A key attribute is an attribute that uniquely identifies an entity among entity sets. It prevents duplicate entries and ensures data integrity.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Key Points:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Every entity must have at least one key attribute.</strong></li>
<li><strong>Used to define primary keys</strong> in relational databases.</li>
<li><strong>Often underlined in ER diagrams</strong> to indicate uniqueness.</li>
</ul>`
        },
        {
          title: "🔹 Composite Attribute",
          content: `<p>A composite attribute is an attribute that can be split into multiple sub-attributes, each holding a meaningful value on its own.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Address</strong> can be split into Street, City, State, and Zip Code.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Key Points:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Useful for data normalization.</strong></li>
<li><strong>Allows better data querying</strong> and storage optimization.</li>
</ul>`
        },
        {
          title: "🔹 Multivalued Attribute",
          content: `<p>A multivalued attribute can store multiple values for a single entity instance.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>A <strong>Teacher</strong> might have several Degrees or Subjects.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Key Points:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Typically stored in a separate table</strong> when converted to relational schema.</li>
<li><strong>Represented using double ellipses.</strong></li>
</ul>`
        },
        {
          title: "🔹 Derived Attribute",
          content: `<p>Derived attributes are calculated based on other attribute values.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Examples:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Age</strong> derived from Date of Birth.</li>
<li><strong>Total Price</strong> derived from Unit Price × Quantity.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Key Points:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Not physically stored</strong> in the database.</li>
<li><strong>Improves storage efficiency.</strong></li>
<li><strong>Indicated using dashed ellipses</strong> in ER diagrams.</li>
</ul>`
        },
        {
          title: "🔹 Key (in Relational Model)",
          content: `<p>A key is a constraint that helps enforce entity integrity and defines how data is uniquely identified and related.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Types of Keys:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Key Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Definition</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🔸 Primary Key</td>
<td class="border border-gray-300 px-4 py-2">Main unique identifier</td>
<td class="border border-gray-300 px-4 py-2 font-mono">Employee_ID</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">🔸 Foreign Key</td>
<td class="border border-gray-300 px-4 py-2">Links to the primary key in another table</td>
<td class="border border-gray-300 px-4 py-2 font-mono">Department_ID in Employee</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🔸 Candidate Key</td>
<td class="border border-gray-300 px-4 py-2">A field (or combo) that qualifies as a unique identifier</td>
<td class="border border-gray-300 px-4 py-2 font-mono">Email, SSN</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">🔸 Composite Key</td>
<td class="border border-gray-300 px-4 py-2">A key formed from two or more columns</td>
<td class="border border-gray-300 px-4 py-2 font-mono">Order_ID + Product_ID</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🔸 Alternate Key</td>
<td class="border border-gray-300 px-4 py-2">Candidate keys that are not chosen as primary</td>
<td class="border border-gray-300 px-4 py-2 font-mono">SSN (if Employee_ID is primary)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">🔸 Super Key</td>
<td class="border border-gray-300 px-4 py-2">Any set of attributes that uniquely identify a row</td>
<td class="border border-gray-300 px-4 py-2 font-mono">{Employee_ID, Name, Email}</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">Key Points:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Keys enforce referential integrity.</strong></li>
<li><strong>Avoids duplicate or orphaned records.</strong></li>
</ul>`
        }
      ]
    },
    {
      heading: "SQL in Action: Why It Matters and Where It's Used",
      subheadings: [
        {
          title:
            "Structured Query Language (SQL): Powering the Data-Driven World",
          content: `<p>SQL (Structured Query Language) is the foundational language used to interact with and manage data stored in relational databases. Its widespread adoption is due to its ability to handle large volumes of structured data with speed, precision, and reliability. SQL allows users to perform a wide range of operations—from retrieving records to inserting, updating, and deleting data—making it a central tool in virtually every data-driven application.</p>`,
        },
        {
          title: "Why SQL Remains Indispensable",
          content: `<p>SQL continues to dominate the world of data for several compelling reasons:</p>
<p>• <strong>Efficient Handling of Large Datasets:</strong> SQL is optimized for querying structured data efficiently, even when dealing with millions of records.</p>
<p>• <strong>Advanced Data Operations:</strong> Beyond simple retrieval, SQL enables aggregation, filtering, joining tables, grouping, and performing calculations to derive valuable insights from raw data.</p>
<p>• <strong>Built-In Data Integrity:</strong> Through constraints like PRIMARY KEY, FOREIGN KEY, and NOT NULL, SQL ensures that the data stored remains consistent and valid.</p>
<p>• <strong>Cross-Platform Compatibility:</strong> As a standardized language (ANSI/ISO), SQL works across multiple RDBMS platforms like MySQL, PostgreSQL, SQL Server, and Oracle with minimal syntax changes.</p>
<p>• <strong>Robust Security Mechanisms:</strong> SQL supports access control, user roles, and authentication features to protect data from unauthorized access.</p>
<p>• <strong>Highly Scalable:</strong> SQL databases can grow with your application—from small systems to enterprise-level datasets—without compromising performance.</p>
<p>• <strong>Foundation for Data Workflows:</strong> Whether it's data analysis, reporting, or feeding BI dashboards, SQL plays a crucial role in transforming and preparing data.</p>`,
        },
        {
          title: "Where SQL Makes an Impact",
          content: `<p>SQL's use spans nearly all industries and sectors. It's embedded in the background of many systems we use every day.</p>
<p><strong>Examples of Real-World Use Cases:</strong></p>
<p>• <strong>Banking & Finance:</strong> Manages transactions, customer data, and financial reports. Every transfer, withdrawal, or audit trail uses SQL operations.</p>
<p>• <strong>E-commerce & Retail:</strong> Tracks orders, inventories, customer records, and sales analytics. Backend systems of platforms like Amazon run millions of SQL queries daily.</p>
<p>• <strong>Social Media:</strong> Powers user profiles, feeds, connections, and real-time engagement tracking on platforms like Facebook and LinkedIn.</p>
<p>• <strong>Healthcare Systems:</strong> Stores patient data, appointment logs, medical history, and billing in secure and structured formats.</p>
<p>• <strong>Telecommunications:</strong> Monitors network usage, subscriber data, plan activations, and billing information.</p>
<p>• <strong>Supply Chain & Logistics:</strong> Tracks shipments, manages stock across locations, and streamlines procurement processes.</p>
<p>• <strong>Streaming & Subscription Platforms:</strong> Services like Netflix and Spotify rely on SQL for managing subscriptions, user preferences, and payment processing.</p>
<p>• <strong>Human Resources & Payroll:</strong> Organizes employee information, payrolls, attendance logs, and performance records.</p>`,
        },
        {
          title: "Careers Where SQL is Essential",
          content: `<p>Mastering SQL opens doors to many data-centric careers. It's a must-have skill for professionals who work with data in any capacity:</p>
<p>• <strong>Data Analysts:</strong> Extract, interpret, and report on data using SQL queries.</p>
<p>• <strong>Data Scientists:</strong> Use SQL to gather and clean data before applying statistical models and machine learning algorithms.</p>
<p>• <strong>BI Developers:</strong> Transform data into insights by writing SQL scripts for dashboards and analytics tools.</p>
<p>• <strong>Database Administrators (DBAs):</strong> Maintain, tune, and secure databases using SQL for system queries and maintenance.</p>
<p>• <strong>Backend Developers:</strong> Implement SQL within applications to enable real-time data operations.</p>
<p>• <strong>QA Engineers:</strong> Validate data storage and retrieval with SQL during software testing.</p>
<p>• <strong>Data Engineers:</strong> Design and maintain data pipelines and warehouses, leveraging SQL in ETL (Extract, Transform, Load) processes.</p>`,
        },
        {
          title: "Conclusion",
          content: `<p>Wherever structured data exists, SQL is the language used to unlock its value. Its combination of power, flexibility, and industry-wide support makes it an essential tool for anyone working in technology, analytics, or software development.</p>`,
        },
      ],
    },
    {
      heading: "Behind the Scenes: How SQL Works",
      subheadings: [
        {
          title: "How SQL Works Behind the Scenes: From Query to Result",
          content: `<p>Structured Query Language (SQL) serves as the bridge between you and a relational database. But what really happens when you hit "run" on a SQL query? Under the hood, your command goes through several stages—from validation to optimization—before delivering the final result. Here's a step-by-step breakdown of that journey:</p>`,
        },
        {
          title: "1. 🚀 Submitting the Query",
          content: `<p>It all starts when you send a SQL command to a Relational Database Management System (RDBMS) like MySQL, PostgreSQL, or SQL Server. You might do this via a command-line tool or a graphical interface like MySQL Workbench or DBeaver.</p>
<p><strong>Example query:</strong></p>
<pre><code>SELECT name, email
FROM users
WHERE country = 'India';</code></pre>
<p>At this point, the database hasn't done any work yet—it's just received your request.</p>`,
        },
        {
          title: "2. ✅ Parsing the Query",
          content: `<p>The first component to process your query is the parser, which ensures that your SQL command is valid and makes sense.</p>
<p>• <strong>Syntax Check:</strong> It verifies your query's structure—making sure the command follows the SQL grammar rules (e.g., no missing commas, reserved words are spelled correctly).</p>
<p>• <strong>Semantic Check:</strong> It confirms that referenced tables and columns exist. Does the users table exist? Are name and email valid columns?</p>
<p>If there's any issue, the parser immediately throws an error and stops execution.</p>`,
        },
        {
          title: "3. 🧠 Optimizing the Plan",
          content: `<p>Once validated, the query enters the query optimizer—the brain of the database engine. It doesn't just execute your command blindly; it determines the most efficient way to retrieve the data.</p>
<p>For example, it might consider:</p>
<p>• <strong>Full Table Scan:</strong> Check every row in the users table to find matches (simple but slow for large datasets).</p>
<p>• <strong>Index Lookup:</strong> Use an index on the country column (if available) to jump directly to rows where country = 'India' (much faster).</p>
<p>The optimizer chooses the most cost-effective strategy based on available indexes, table statistics, and query complexity.</p>`,
        },
        {
          title: "4. ⚙️ Executing the Query",
          content: `<p>Next, the selected execution plan is handed off to the execution engine, which carries out the actual data retrieval.</p>
<p>This engine interacts with the storage engine, reading the physical data blocks and performing operations such as:</p>
<p>• Table scans</p>
<p>• Index lookups</p>
<p>• Filtering based on WHERE clauses</p>
<p>• Sorting or grouping if needed</p>`,
        },
        {
          title: "5. 📤 Delivering the Results",
          content: `<p>Once the execution engine gathers all relevant rows, the data is packaged into a result set and returned to your client application or interface. You'll see a clean table showing the names and emails of users from India—just like you asked.</p>`,
        },
        {
          title: "🔄 Summary: The SQL Query Lifecycle",
          content: `<p>Every SQL query follows a logical pipeline:</p>
<p><strong>Submit ➝ Parse ➝ Optimize ➝ Execute ➝ Return</strong></p>
<p>This layered architecture helps databases deliver accurate results efficiently—often in just milliseconds.</p>`,
        },
      ],
    },
    {
      heading: "Types of SQL Commands: Organizing How We Interact with Data",
      subheadings: [
        {
          title: "Types of SQL Commands: Organizing How We Interact with Data",
          content: `<p>SQL commands are grouped into five primary categories, each serving a distinct purpose. These categories define the ways users can interact with relational databases—from creating tables to controlling access and managing data transactions.</p>`,
        },
        {
          title: "🧱 1. Data Definition Language (DDL)",
          content: `<p>DDL commands are used to define or alter the structure of database objects such as tables, schemas, and views. Think of it as laying the foundation and framework of your database.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">CREATE</td>
<td class="border border-gray-300 px-4 py-2">Creates a new database or object (e.g., table)</td>
<td class="border border-gray-300 px-4 py-2 font-mono">CREATE TABLE users (id INT, name VARCHAR(50));</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER</td>
<td class="border border-gray-300 px-4 py-2">Modifies existing database objects</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE users ADD email VARCHAR(100);</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">DROP</td>
<td class="border border-gray-300 px-4 py-2">Deletes database objects entirely</td>
<td class="border border-gray-300 px-4 py-2 font-mono">DROP TABLE users;</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">TRUNCATE</td>
<td class="border border-gray-300 px-4 py-2">Removes all data from a table but retains its structure</td>
<td class="border border-gray-300 px-4 py-2 font-mono">TRUNCATE TABLE users;</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">RENAME</td>
<td class="border border-gray-300 px-4 py-2">Renames an existing object</td>
<td class="border border-gray-300 px-4 py-2 font-mono">RENAME TABLE users TO customers;</td>
</tr>
</tbody>
</table>
<p><strong>⚠️ Note:</strong> Commands like DROP and TRUNCATE are irreversible.</p>`,
        },
        {
          title: "🔍 2. Data Query Language (DQL)",
          content: `<p>DQL is primarily focused on retrieving data from the database. Though it contains just one main command, it's used extensively in analytics and reporting.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">SELECT</td>
<td class="border border-gray-300 px-4 py-2">Fetches data from one or more tables</td>
<td class="border border-gray-300 px-4 py-2 font-mono">SELECT name, email FROM users WHERE id = 1;</td>
</tr>
</tbody>
</table>
<p>Used in nearly every SQL session, SELECT is the backbone of data querying.</p>`,
        },
        {
          title: "✏️ 3. Data Manipulation Language (DML)",
          content: `<p>DML commands allow users to insert, modify, or delete data from existing tables. These commands work on the actual content of the database.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">INSERT</td>
<td class="border border-gray-300 px-4 py-2">Adds new rows to a table</td>
<td class="border border-gray-300 px-4 py-2 font-mono">INSERT INTO users (id, name) VALUES (1, 'John');</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">UPDATE</td>
<td class="border border-gray-300 px-4 py-2">Edits existing records</td>
<td class="border border-gray-300 px-4 py-2 font-mono">UPDATE users SET name = 'Jane' WHERE id = 1;</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">DELETE</td>
<td class="border border-gray-300 px-4 py-2">Removes selected records</td>
<td class="border border-gray-300 px-4 py-2 font-mono">DELETE FROM users WHERE id = 1;</td>
</tr>
</tbody>
</table>
<p><strong>⚠️ Be careful with DELETE</strong>—ensure you include WHERE clauses to avoid removing all data.</p>`,
        },
        {
          title: "🔐 4. Data Control Language (DCL)",
          content: `<p>DCL commands are used to control access rights and permissions for users in a database environment. These are typically managed by administrators.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">GRANT</td>
<td class="border border-gray-300 px-4 py-2">Assigns privileges to users or roles</td>
<td class="border border-gray-300 px-4 py-2 font-mono">GRANT SELECT ON users TO 'admin';</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">REVOKE</td>
<td class="border border-gray-300 px-4 py-2">Removes granted permissions</td>
<td class="border border-gray-300 px-4 py-2 font-mono">REVOKE SELECT ON users FROM 'admin';</td>
</tr>
</tbody>
</table>
<p>These commands are essential for maintaining security and access control.</p>`,
        },
        {
          title: "🔄 5. Transaction Control Language (TCL)",
          content: `<p>TCL commands manage the state of transactions, ensuring that changes to the database are consistent, reliable, and can be reversed if needed.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">COMMIT</td>
<td class="border border-gray-300 px-4 py-2">Finalizes all operations in the current transaction</td>
<td class="border border-gray-300 px-4 py-2">Makes changes permanent</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">ROLLBACK</td>
<td class="border border-gray-300 px-4 py-2">Reverts operations in the current transaction</td>
<td class="border border-gray-300 px-4 py-2">Restores data to its prior state</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">SAVEPOINT</td>
<td class="border border-gray-300 px-4 py-2">Sets a checkpoint within a transaction</td>
<td class="border border-gray-300 px-4 py-2">Allows partial rollbacks to a specific point</td>
</tr>
</tbody>
</table>
<p>Transactions are crucial when multiple changes need to be treated as a single unit—especially in systems handling financial or sensitive data.</p>`,
        },
        {
          title: "✅ Conclusion",
          content: `<p>Understanding these five categories—DDL, DQL, DML, DCL, and TCL—gives you a solid foundation for mastering SQL. Each set of commands plays a vital role in building, managing, and securing databases, ensuring both structure and control over your data systems.</p>`,
        },
      ],
    },
    {
      heading: "MySQL Installation & Service Guide: Windows, Linux, and macOS",
      subheadings: [
        {
          title:
            "💻 MySQL Installation & Service Guide: Windows, Linux, and macOS",
          content: `<p>Getting MySQL up and running on your system is the first step to working with databases. This comprehensive guide covers installation and service management across all major operating systems.</p>`,
        },
        {
          title: "🪟 Windows Users",
          content: `<p>The simplest way to install MySQL on Windows is via the official MySQL Installer, which includes the server, Workbench (GUI), and essential tools.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Installation Steps</h4>
<ol class="list-decimal list-inside space-y-2 ml-4">
<li><strong>Official Download:</strong> <a href="https://dev.mysql.com/downloads/installer/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">MySQL Windows Installer</a></li>
<li>Run the <code>.msi</code> file you downloaded.</li>
<li>On the Setup Type screen, choose <strong>Developer Default</strong> to install all necessary components.</li>
<li>During setup, create a password for the root user. Keep this password secure.</li>
</ol>
<h4 class="text-lg font-semibold mt-4 mb-2">⚙️ Starting & Stopping MySQL</h4>
<p><strong>Option 1: Using Windows Services</strong></p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Press <code>Win + R</code>, type <code>services.msc</code>, and press Enter.</li>
<li>Locate the service (typically named <code>MySQL80</code>).</li>
<li>Right-click it to Start, Stop, or Restart the MySQL server.</li>
</ul>
<p><strong>Option 2: Using Command Prompt (Admin)</strong></p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Launch Command Prompt with admin rights.</li>
<li>To start MySQL: <code>net start MySQL80</code></li>
<li>To stop MySQL: <code>net stop MySQL80</code></li>
</ul>
<p><em>Note: Replace MySQL80 with your service name if different.</em></p>`,
        },
        {
          title: "🐧 Linux (Ubuntu/Debian)",
          content: `<p>MySQL can be installed on Linux using APT or via the official MySQL APT repo for newer versions.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Installation Steps</h4>
<ol class="list-decimal list-inside space-y-2 ml-4">
<li><strong>Official APT Guide:</strong> <a href="https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">MySQL APT Repo Guide</a></li>
<li>Download the configuration package and install it using:<br>
<code>sudo dpkg -i mysql-apt-config_*.deb</code></li>
<li>Update packages:<br>
<code>sudo apt update</code></li>
<li>Install MySQL server:<br>
<code>sudo apt install mysql-server</code></li>
<li>Secure your installation and set root password:<br>
<code>sudo mysql_secure_installation</code></li>
</ol>
<h4 class="text-lg font-semibold mt-4 mb-2">⚙️ Managing MySQL Service</h4>
<p>Use <code>systemctl</code> to control MySQL:</p>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>sudo systemctl start mysql     # Start
sudo systemctl stop mysql      # Stop
sudo systemctl restart mysql   # Restart
sudo systemctl status mysql    # Check Status
sudo systemctl enable mysql    # Enable at boot
sudo systemctl disable mysql   # Disable at boot</code></pre>`,
        },
        {
          title: "🍎 macOS (via Homebrew)",
          content: `<p>The easiest and cleanest way to install MySQL on macOS is with Homebrew.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Installation Steps</h4>
<ol class="list-decimal list-inside space-y-2 ml-4">
<li>First, install Homebrew if you don't already have it: <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">https://brew.sh/</a></li>
<li>Open Terminal and run:<br>
<code>brew install mysql</code></li>
<li>After installation, initialize the server:<br>
<code>brew services start mysql</code></li>
</ol>
<h4 class="text-lg font-semibold mt-4 mb-2">⚙️ Starting & Stopping MySQL</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>brew services start mysql      # Start and auto-start at login
brew services stop mysql       # Stop and disable auto-start
brew services restart mysql    # Restart service</code></pre>`,
        },
        {
          title: "📎 Summary Table",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">OS</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Install Command / Tool</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Start Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Stop Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Windows</td>
<td class="border border-gray-300 px-4 py-2">MySQL Installer (.msi)</td>
<td class="border border-gray-300 px-4 py-2 font-mono">net start MySQL80</td>
<td class="border border-gray-300 px-4 py-2 font-mono">net stop MySQL80</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Linux</td>
<td class="border border-gray-300 px-4 py-2 font-mono">apt install mysql-server</td>
<td class="border border-gray-300 px-4 py-2 font-mono">sudo systemctl start mysql</td>
<td class="border border-gray-300 px-4 py-2 font-mono">sudo systemctl stop mysql</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">macOS</td>
<td class="border border-gray-300 px-4 py-2 font-mono">brew install mysql</td>
<td class="border border-gray-300 px-4 py-2 font-mono">brew services start mysql</td>
<td class="border border-gray-300 px-4 py-2 font-mono">brew services stop mysql</td>
</tr>
</tbody>
</table>
<p><strong>🎉 Congratulations!</strong> You now have MySQL installed and ready to use on your system. You can connect to your MySQL server using command-line tools, MySQL Workbench, or any database management application of your choice.</p>`,
        },
      ],
    },
    {
      heading: "SQL Data Types — A Detailed Guide",
      subheadings: [
        {
          title: "🧾 SQL Data Types — A Detailed Guide",
          content: `<p>SQL (Structured Query Language) supports a wide range of data types to define the kind of data a column can hold. These data types vary slightly across different database systems (like MySQL, PostgreSQL, SQL Server, and Oracle), but the core concepts are mostly universal.</p>
<p>Understanding data types is crucial for database design, as they affect storage efficiency, performance, and data integrity. This guide covers the most commonly used SQL data types across different database systems.</p>`,
        },
        {
          title: "📊 1. Numeric Data Types",
          content: `<p>Used for storing numbers, whether whole (integers) or decimal (floating-point).</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Integer Types</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example Values</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">INT</td>
<td class="border border-gray-300 px-4 py-2">Standard integer</td>
<td class="border border-gray-300 px-4 py-2 font-mono">0, 100, -45</td>
<td class="border border-gray-300 px-4 py-2">Alias: INTEGER</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">SMALLINT</td>
<td class="border border-gray-300 px-4 py-2">Smaller-range integer</td>
<td class="border border-gray-300 px-4 py-2">-32,768 to 32,767</td>
<td class="border border-gray-300 px-4 py-2">Uses less storage</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">BIGINT</td>
<td class="border border-gray-300 px-4 py-2">Large-range integer</td>
<td class="border border-gray-300 px-4 py-2">9,223,372,036,854...</td>
<td class="border border-gray-300 px-4 py-2">Ideal for large data sets</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">TINYINT</td>
<td class="border border-gray-300 px-4 py-2">Very small integer (MySQL)</td>
<td class="border border-gray-300 px-4 py-2">0 to 255</td>
<td class="border border-gray-300 px-4 py-2">Unsigned: 0 to 255</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">MEDIUMINT</td>
<td class="border border-gray-300 px-4 py-2">Mid-size integer (MySQL only)</td>
<td class="border border-gray-300 px-4 py-2">-8M to 8M approx.</td>
<td class="border border-gray-300 px-4 py-2">Specific to MySQL</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Decimal & Floating Types</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example Values</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">DECIMAL(p,s)</td>
<td class="border border-gray-300 px-4 py-2">Fixed-point number</td>
<td class="border border-gray-300 px-4 py-2 font-mono">12.34</td>
<td class="border border-gray-300 px-4 py-2">Exact, avoids rounding issues</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">NUMERIC(p,s)</td>
<td class="border border-gray-300 px-4 py-2">Same as DECIMAL</td>
<td class="border border-gray-300 px-4 py-2 font-mono">99.99</td>
<td class="border border-gray-300 px-4 py-2">Precision-focused</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">FLOAT</td>
<td class="border border-gray-300 px-4 py-2">Approximate floating-point</td>
<td class="border border-gray-300 px-4 py-2 font-mono">1.23, -4.56e+02</td>
<td class="border border-gray-300 px-4 py-2">May cause rounding errors</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">DOUBLE</td>
<td class="border border-gray-300 px-4 py-2">Double-precision float</td>
<td class="border border-gray-300 px-4 py-2 font-mono">3.14159265359</td>
<td class="border border-gray-300 px-4 py-2">More accurate than FLOAT</td>
</tr>
</tbody>
</table>`,
        },
        {
          title: "📅 2. Date & Time Data Types",
          content: `<p>Used for handling temporal data like dates, timestamps, and durations.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">DATE</td>
<td class="border border-gray-300 px-4 py-2">Calendar date</td>
<td class="border border-gray-300 px-4 py-2 font-mono">'2025-07-24'</td>
<td class="border border-gray-300 px-4 py-2">Format: YYYY-MM-DD</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">TIME</td>
<td class="border border-gray-300 px-4 py-2">Time of day</td>
<td class="border border-gray-300 px-4 py-2 font-mono">'13:45:30'</td>
<td class="border border-gray-300 px-4 py-2">Format: HH:MM:SS</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">DATETIME</td>
<td class="border border-gray-300 px-4 py-2">Combined date and time</td>
<td class="border border-gray-300 px-4 py-2 font-mono">'2025-07-24 13:45:30'</td>
<td class="border border-gray-300 px-4 py-2">No timezone support</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">TIMESTAMP</td>
<td class="border border-gray-300 px-4 py-2">DateTime with automatic timezone logic</td>
<td class="border border-gray-300 px-4 py-2 font-mono">'2025-07-24 13:45:30'</td>
<td class="border border-gray-300 px-4 py-2">Often auto-updated on changes</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">YEAR</td>
<td class="border border-gray-300 px-4 py-2">Year value</td>
<td class="border border-gray-300 px-4 py-2 font-mono">'2025'</td>
<td class="border border-gray-300 px-4 py-2">MySQL only, 2 or 4 digit</td>
</tr>
</tbody>
</table>`,
        },
        {
          title: "📝 3. String (Character/Text) Data Types",
          content: `<p>Used to store text, characters, and alphanumeric content.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">CHAR(n)</td>
<td class="border border-gray-300 px-4 py-2">Fixed-length character string</td>
<td class="border border-gray-300 px-4 py-2 font-mono">'ABC '</td>
<td class="border border-gray-300 px-4 py-2">Pads with spaces to match length</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">VARCHAR(n)</td>
<td class="border border-gray-300 px-4 py-2">Variable-length string</td>
<td class="border border-gray-300 px-4 py-2 font-mono">'Hello World'</td>
<td class="border border-gray-300 px-4 py-2">More flexible than CHAR</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">TEXT</td>
<td class="border border-gray-300 px-4 py-2">Large text data</td>
<td class="border border-gray-300 px-4 py-2">Long paragraphs</td>
<td class="border border-gray-300 px-4 py-2">Ideal for blog posts, descriptions</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">TINYTEXT</td>
<td class="border border-gray-300 px-4 py-2">Small string</td>
<td class="border border-gray-300 px-4 py-2">Up to 255 chars</td>
<td class="border border-gray-300 px-4 py-2">MySQL only</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">MEDIUMTEXT</td>
<td class="border border-gray-300 px-4 py-2">Medium-length string</td>
<td class="border border-gray-300 px-4 py-2">Up to 16MB</td>
<td class="border border-gray-300 px-4 py-2">MySQL only</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">LONGTEXT</td>
<td class="border border-gray-300 px-4 py-2">Extremely large string</td>
<td class="border border-gray-300 px-4 py-2">Up to 4GB</td>
<td class="border border-gray-300 px-4 py-2">MySQL only</td>
</tr>
</tbody>
</table>`,
        },
        {
          title: "🎯 4. Boolean Type",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">BOOLEAN</td>
<td class="border border-gray-300 px-4 py-2">True or false value</td>
<td class="border border-gray-300 px-4 py-2 font-mono">TRUE / FALSE or 1 / 0</td>
<td class="border border-gray-300 px-4 py-2">Often stored as TINYINT(1) in MySQL</td>
</tr>
</tbody>
</table>`,
        },
        {
          title: "🆔 5. Binary & Miscellaneous Types",
          content: `<p>Used for storing binary data like images, files, etc.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">BINARY(n)</td>
<td class="border border-gray-300 px-4 py-2">Fixed-length binary</td>
<td class="border border-gray-300 px-4 py-2">Stores raw bytes</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">VARBINARY(n)</td>
<td class="border border-gray-300 px-4 py-2">Variable-length binary</td>
<td class="border border-gray-300 px-4 py-2">Like VARCHAR, but binary</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">BLOB</td>
<td class="border border-gray-300 px-4 py-2">Binary Large Object</td>
<td class="border border-gray-300 px-4 py-2">Used for files, images, media</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">ENUM</td>
<td class="border border-gray-300 px-4 py-2">Predefined list of values</td>
<td class="border border-gray-300 px-4 py-2">E.g., ENUM('small','medium','large')</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">SET</td>
<td class="border border-gray-300 px-4 py-2">Multiple predefined values</td>
<td class="border border-gray-300 px-4 py-2">E.g., SET('a','b','c') in MySQL</td>
</tr>
</tbody>
</table>`,
        },
        {
          title: "🔁 Differences Between RDBMS Vendors",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">MySQL</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">PostgreSQL</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">SQL Server</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">ENUM, SET</td>
<td class="border border-gray-300 px-4 py-2 text-green-600">Supported</td>
<td class="border border-gray-300 px-4 py-2 text-red-600">Not Supported</td>
<td class="border border-gray-300 px-4 py-2 text-red-600">Not Supported</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">TEXT Types</td>
<td class="border border-gray-300 px-4 py-2">Various (TINYTEXT, etc.)</td>
<td class="border border-gray-300 px-4 py-2">Single TEXT type</td>
<td class="border border-gray-300 px-4 py-2">VARCHAR(MAX), TEXT</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Boolean</td>
<td class="border border-gray-300 px-4 py-2">Stored as TINYINT(1)</td>
<td class="border border-gray-300 px-4 py-2">Native BOOLEAN type</td>
<td class="border border-gray-300 px-4 py-2">BIT</td>
</tr>
</tbody>
</table>`,
        },
        {
          title: "🧠 Tips for Choosing Data Types",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Use the smallest sufficient data type</strong> to save space and improve performance.</li>
<li><strong>For money/financial data</strong>, prefer <code>DECIMAL(p,s)</code> over <code>FLOAT</code>.</li>
<li><strong>Use TEXT or VARCHAR</strong> for dynamic text lengths.</li>
<li><strong>For flags and switches</strong>, use <code>BOOLEAN</code> or <code>TINYINT(1)</code>.</li>
<li><strong>Consider storage requirements</strong> when choosing between <code>INT</code>, <code>SMALLINT</code>, and <code>BIGINT</code>.</li>
<li><strong>Use appropriate date/time types</strong> based on your timezone requirements.</li>
<li><strong>Avoid FLOAT for exact calculations</strong> due to potential rounding errors.</li>
<li><strong>Consider indexing performance</strong> when choosing string lengths.</li>
</ul>
<p class="mt-4"><strong>💡 Pro Tip:</strong> Always validate your data type choices against your specific use case and expected data volume. What works for a small application might not scale well for enterprise-level systems.</p>`,
        },
      ],
    },
    {
      heading:
        "Understanding SQL Syntax: The Grammar of Database Communication",
      subheadings: [
        {
          title:
            "📚 Understanding SQL Syntax: The Grammar of Database Communication",
          content: `<p>SQL (Structured Query Language) uses a specific set of rules known as syntax to interact with databases. Whether you're retrieving, adding, modifying, or deleting data, the syntax ensures the database can understand and execute your requests accurately.</p>
<p>Understanding SQL syntax is essential for writing effective and error-free database queries. This guide covers the fundamental rules and command structures you'll use in every SQL interaction.</p>`,
        },
        {
          title: "✍️ Core SQL Syntax Rules",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">• Semicolon (;) Usage</h4>
<p>Each SQL command typically ends with a semicolon. This marks the end of one statement and helps distinguish multiple statements in scripts.</p>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>SELECT * FROM users;
INSERT INTO products (name, price) VALUES ('Laptop', 999.99);</code></pre>

<h4 class="text-lg font-semibold mt-4 mb-2">• Case Insensitivity for Keywords</h4>
<p>SQL commands such as <code>SELECT</code>, <code>INSERT</code>, <code>UPDATE</code>, and <code>DELETE</code> are not case-sensitive. For example, <code>SELECT</code> and <code>select</code> are treated the same. However, table and column names may be case-sensitive, depending on the database system (e.g., PostgreSQL is case-sensitive, MySQL is not by default).</p>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>-- All of these are equivalent
SELECT name FROM users;
select name from users;
Select Name From Users;</code></pre>

<h4 class="text-lg font-semibold mt-4 mb-2">• Whitespace and Formatting</h4>
<p>SQL ignores extra spaces, tabs, and line breaks. This means you can format your queries neatly across multiple lines for better readability.</p>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>-- Single line
SELECT name, email FROM users WHERE age > 25;

-- Multi-line for readability
SELECT name, email 
FROM users 
WHERE age > 25;</code></pre>

<h4 class="text-lg font-semibold mt-4 mb-2">• Comments in SQL</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><code>--</code> starts a single-line comment.</li>
<li><code>/* comment block */</code> allows multi-line or inline comments.</li>
</ul>
<p>Use comments to clarify code purpose or temporarily disable parts of your SQL script.</p>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>-- This is a single-line comment
SELECT name FROM users; -- Inline comment

/*
This is a multi-line comment
Used for longer explanations
*/
SELECT * FROM products;</code></pre>`,
        },
        {
          title: "⚙️ Basic SQL Command Structure",
          content: `<p>Let's explore the most commonly used commands in SQL, how they're structured, and what they do. Understanding these fundamental patterns will help you construct more complex queries as you advance in your SQL journey.</p>`,
        },
        {
          title: "🔍 SELECT – Retrieving Data from a Table",
          content: `<p>The <code>SELECT</code> statement is used to read data from one or more tables.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Basic Syntax:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>SELECT column1, column2
FROM table_name
WHERE condition;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Components Explained:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>SELECT:</strong> Indicates the columns to retrieve.</li>
<li><strong>FROM:</strong> Specifies the source table.</li>
<li><strong>WHERE (optional):</strong> Filters results based on given conditions.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Examples:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>-- Select specific columns
SELECT name, email FROM users;

-- Select all columns
SELECT * FROM products;

-- Select with condition
SELECT name, price FROM products WHERE price > 100;</code></pre>`,
        },
        {
          title: "✨ INSERT INTO – Adding New Records",
          content: `<p>This command inserts new data into a table.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Basic Syntax:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>INSERT INTO table_name (column1, column2)
VALUES (value1, value2);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Components Explained:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>INSERT INTO:</strong> Target table for the new data.</li>
<li><strong>VALUES:</strong> Specifies values to be added to respective columns.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Examples:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>-- Insert single record
INSERT INTO users (name, email, age)
VALUES ('John Doe', 'john@email.com', 25);

-- Insert multiple records
INSERT INTO products (name, price, category)
VALUES 
    ('Laptop', 999.99, 'Electronics'),
    ('Book', 29.99, 'Education'),
    ('Chair', 199.50, 'Furniture');</code></pre>`,
        },
        {
          title: "🔧 UPDATE – Modifying Existing Data",
          content: `<p>The <code>UPDATE</code> statement modifies data already stored in a table.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Basic Syntax:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Components Explained:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>UPDATE:</strong> Indicates the table to change.</li>
<li><strong>SET:</strong> Assigns new values to specified columns.</li>
<li><strong>WHERE:</strong> Targets the specific row(s). Omitting this will update all rows—use with caution.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Examples:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>-- Update single column
UPDATE users 
SET email = 'newemail@example.com' 
WHERE id = 1;

-- Update multiple columns
UPDATE products 
SET price = 899.99, category = 'Technology' 
WHERE name = 'Laptop';

-- Update with calculation
UPDATE employees 
SET salary = salary * 1.1 
WHERE department = 'Sales';</code></pre>
<p><strong>⚠️ Warning:</strong> Always include a <code>WHERE</code> clause unless you intentionally want to update all rows in the table.</p>`,
        },
        {
          title: "🗑️ DELETE – Removing Records",
          content: `<p>Used to delete one or more records from a table.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Basic Syntax:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>DELETE FROM table_name
WHERE condition;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Components Explained:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>DELETE FROM:</strong> Identifies the table for deletion.</li>
<li><strong>WHERE:</strong> Specifies which rows to delete. If this clause is missing, all data in the table will be erased.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Examples:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>-- Delete specific record
DELETE FROM users 
WHERE id = 5;

-- Delete multiple records
DELETE FROM products 
WHERE price < 10;

-- Delete with multiple conditions
DELETE FROM orders 
WHERE status = 'cancelled' AND order_date < '2024-01-01';</code></pre>
<p><strong>⚠️ Critical Warning:</strong> Never run <code>DELETE FROM table_name</code> without a <code>WHERE</code> clause unless you want to delete all data in the table. This operation cannot be undone.</p>`,
        },
        {
          title: "💡 SQL Syntax Best Practices",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Use uppercase for SQL keywords</strong> (SELECT, FROM, WHERE) for better readability, though it's not required.</li>
<li><strong>Format queries across multiple lines</strong> for complex statements to improve readability.</li>
<li><strong>Always use WHERE clauses</strong> with UPDATE and DELETE statements to avoid unintended changes.</li>
<li><strong>Use meaningful table and column names</strong> that clearly describe the data they contain.</li>
<li><strong>Add comments</strong> to explain complex logic or business rules in your queries.</li>
<li><strong>Use consistent indentation</strong> to make nested queries and joins easier to read.</li>
<li><strong>Test queries on small datasets</strong> before running them on production data.</li>
<li><strong>Use semicolons consistently</strong> to terminate statements, especially in scripts with multiple commands.</li>
</ul>
<p class="mt-4"><strong>🎯 Remember:</strong> Good SQL syntax isn't just about making queries work—it's about making them readable, maintainable, and safe for both you and your team.</p>`,
        },
      ],
    },
    {
      heading: "Column Validation in SQL: Enforcing Data Integrity with Constraints",
      subheadings: [
        {
          title: "Understanding SQL Constraints: The Guardians of Data Quality",
          content: `<p>In SQL, ensuring that your database stores valid and consistent data is essential. This is achieved using constraints, which define rules that columns must follow. Below are the core types of constraints used in SQL for column-level validation:</p>`
        },
        {
          title: "🔒 NOT NULL — No Empty Values Allowed",
          content: `<p>This constraint makes sure that a column cannot contain NULL values — it must always have meaningful data.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Why Use It?</h4>
<p>To enforce that specific columns are always filled in (e.g., usernames, prices).</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>CREATE TABLE Products (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL
);</code></pre>`
        },
        {
          title: "🧩 UNIQUE — Enforcing Distinct Values",
          content: `<p>The UNIQUE constraint guarantees that all values in a column are different from each other.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Why Use It?</h4>
<p>Ideal for email addresses, usernames, or any field that should never duplicate.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>CREATE TABLE Users (
    id INT,
    email VARCHAR(100) UNIQUE
);</code></pre>`
        },
        {
          title: "🆔 PRIMARY KEY — Unique Row Identification",
          content: `<p>A PRIMARY KEY ensures that each row is uniquely identified. It combines NOT NULL and UNIQUE.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Why Use It?</h4>
<p>Critical for identifying records like Order IDs, User IDs, etc.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    order_date DATE
);</code></pre>`
        },
        {
          title: "🔗 FOREIGN KEY — Creating Table Relationships",
          content: `<p>This constraint links a column in one table to a PRIMARY KEY in another, forming relationships between data sets.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Why Use It?</h4>
<p>To maintain referential integrity, ensuring data across tables stays consistent.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>CREATE TABLE OrderDetails (
    detail_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);</code></pre>`
        },
        {
          title: "🧪 CHECK — Validating Input Conditions",
          content: `<p>The CHECK constraint enforces rules on the value allowed in a column.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Why Use It?</h4>
<p>To restrict data based on logical conditions like age limits or ranges.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>CREATE TABLE Employees (
    id INT,
    age INT CHECK (age >= 18)
);</code></pre>`
        },
        {
          title: "⚙️ DEFAULT — Auto-Filling Missing Values",
          content: `<p>When no value is provided for a column, DEFAULT assigns a predefined fallback value.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Why Use It?</h4>
<p>Useful for status flags, timestamps, or any field needing a standard initial value.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-3 rounded mt-2"><code>CREATE TABLE Customers (
    id INT,
    status VARCHAR(20) DEFAULT 'active'
);</code></pre>`
        },
        {
          title: "✅ Summary",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Constraint</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Ensures</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Common Use Cases</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">NOT NULL</td>
<td class="border border-gray-300 px-4 py-2">Column must not be empty</td>
<td class="border border-gray-300 px-4 py-2">Essential fields like names, prices</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">UNIQUE</td>
<td class="border border-gray-300 px-4 py-2">All values must be different</td>
<td class="border border-gray-300 px-4 py-2">Emails, usernames</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">PRIMARY KEY</td>
<td class="border border-gray-300 px-4 py-2">Unique and non-null identifier</td>
<td class="border border-gray-300 px-4 py-2">Record ID fields</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">FOREIGN KEY</td>
<td class="border border-gray-300 px-4 py-2">Enforces relationship with other table</td>
<td class="border border-gray-300 px-4 py-2">Linking related data</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">CHECK</td>
<td class="border border-gray-300 px-4 py-2">Values meet a defined condition</td>
<td class="border border-gray-300 px-4 py-2">Age restrictions, range checks</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">DEFAULT</td>
<td class="border border-gray-300 px-4 py-2">Assigns a fallback value</td>
<td class="border border-gray-300 px-4 py-2">Status flags, default settings</td>
</tr>
</tbody>
</table>`
        }
      ]
    },
    {
      heading: "Data Definition Language (DDL) — Laying the Foundation of a Database",
      subheadings: [
        {
          title: "Understanding DDL: The Blueprint Commands",
          content: `<p>Data Definition Language (DDL) commands are the blueprints for your database. They are responsible for defining, altering, and removing the structural elements of your database system, such as tables, views, indexes, and more.</p>
<p class="mt-4">These operations are typically auto-committed, meaning once executed, the changes are saved permanently and cannot be rolled back through standard transaction control.</p>`
        },
        {
          title: "📋 Core DDL Commands Explained",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">🔤 Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">📘 Functionality Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">💡 Example Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">CREATE</td>
<td class="border border-gray-300 px-4 py-2">Creates a new database object like a table, view, or index.</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">CREATE TABLE Users (id INT, name VARCHAR(50));</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">ALTER</td>
<td class="border border-gray-300 px-4 py-2">Updates the structure of an existing object — such as adding/removing columns or constraints.</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">ALTER TABLE Users ADD email VARCHAR(100);</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">DROP</td>
<td class="border border-gray-300 px-4 py-2">Removes a database object entirely, along with all associated data.</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">DROP TABLE Users;</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">TRUNCATE</td>
<td class="border border-gray-300 px-4 py-2">Deletes all records from a table instantly, while keeping its structure intact.</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">TRUNCATE TABLE Users;</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">RENAME</td>
<td class="border border-gray-300 px-4 py-2">Renames a database object for clarity or restructuring.</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">RENAME TABLE Users TO Customers;</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🧠 Why DDL Commands Matter",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>🏛 Foundation of Schema Design:</strong> DDL commands define the architecture on which your database operates.</li>
<li><strong>💾 Permanent Impact:</strong> These operations are automatically committed — there's no "undo" unless backed up beforehand.</li>
<li><strong>🔄 Schema Evolution:</strong> Altering structures over time is inevitable, and DDL gives you the power to evolve gracefully.</li>
</ul>`
        },
        {
          title: "🚀 Let's Dive into DDL",
          content: `<p>Now that you understand the importance of DDL, it's time to explore each command in detail — how they work, when to use them, and what best practices to follow. From building tables to altering schemas and removing outdated structures, you're about to gain full control over your database design.</p>`
        }
      ]
    },
    {
      heading: "DDL: Creating Tables in SQL",
      subheadings: [
        {
          title: "Understanding CREATE TABLE: Building Your Database Structure",
          content: `<p>The CREATE TABLE statement is one of the most fundamental commands in SQL. It allows you to define the structure of a table — including its columns, data types, and rules (constraints) — before inserting any data.</p>`
        },
        {
          title: "✅ Basic Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>CREATE TABLE table_name (
    column1 data_type [constraint],
    column2 data_type [constraint],
    ...
    [table-level constraints]
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Key Elements:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>table_name:</strong> Name of the table (must be unique within a schema).</li>
<li><strong>column:</strong> A field in the table, each with its own name, data type, and optional constraint.</li>
<li><strong>constraints:</strong> Rules like NOT NULL, PRIMARY KEY, or CHECK that enforce data integrity.</li>
</ul>`
        },
        {
          title: "🔍 Example: Creating an Employees Table",
          content: `<p>Let's define a table that tracks employee information with a variety of constraints and column types:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,                        -- Unique employee ID
    first_name VARCHAR(50) NOT NULL,                   -- Required first name
    last_name VARCHAR(50) NOT NULL,                    -- Required last name
    email VARCHAR(100) UNIQUE,                         -- Must be unique
    hire_date DATE,                                    -- Date of joining
    salary DECIMAL(10, 2) CHECK (salary > 0),          -- Must be a positive salary
    department_id INT,                                 -- Foreign key candidate
    is_active BOOLEAN DEFAULT TRUE,                    -- Active status by default
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP     -- Auto timestamp on row creation
);</code></pre>`
        },
        {
          title: "📘 Column Breakdown",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Column Name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Data Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">employee_id</td>
<td class="border border-gray-300 px-4 py-2 font-mono">INT</td>
<td class="border border-gray-300 px-4 py-2">Unique identifier for each employee</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">first_name</td>
<td class="border border-gray-300 px-4 py-2 font-mono">VARCHAR(50)</td>
<td class="border border-gray-300 px-4 py-2">Employee's first name (max 50 characters)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">email</td>
<td class="border border-gray-300 px-4 py-2 font-mono">VARCHAR(100)</td>
<td class="border border-gray-300 px-4 py-2">Must be unique — enforced by UNIQUE constraint</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">salary</td>
<td class="border border-gray-300 px-4 py-2 font-mono">DECIMAL</td>
<td class="border border-gray-300 px-4 py-2">Two decimal salary value, must be > 0</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono">is_active</td>
<td class="border border-gray-300 px-4 py-2 font-mono">BOOLEAN</td>
<td class="border border-gray-300 px-4 py-2">Defaults to TRUE unless specified</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono">created_at</td>
<td class="border border-gray-300 px-4 py-2 font-mono">TIMESTAMP</td>
<td class="border border-gray-300 px-4 py-2">Captures creation date and time automatically</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🧠 Best Practices While Creating Tables",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Tip</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">✅ Use Meaningful Names</td>
<td class="border border-gray-300 px-4 py-2">Use plural nouns for table names (Employees, Orders) and meaningful column names (hire_date, created_at)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">✅ Avoid Redundancy</td>
<td class="border border-gray-300 px-4 py-2">Don't store the same data in multiple places; use foreign keys for related entities</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">✅ Define Primary Keys</td>
<td class="border border-gray-300 px-4 py-2">Always specify a PRIMARY KEY to uniquely identify records</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">✅ Add Constraints Early</td>
<td class="border border-gray-300 px-4 py-2">Apply NOT NULL, UNIQUE, CHECK, etc., at creation time to prevent bad data from entering the system</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">✅ Plan for Indexes</td>
<td class="border border-gray-300 px-4 py-2">Columns used in joins or searches (email, department_id) may need indexing later for performance</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🧩 Advanced: Table-Level Constraints",
          content: `<p>You can also define multi-column (composite) keys or constraints at the table level:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>CREATE TABLE ProjectAssignments (
    employee_id INT,
    project_id INT,
    role VARCHAR(50),
    PRIMARY KEY (employee_id, project_id)  -- Composite key
);</code></pre>`
        },
        {
          title: "🧪 Testing Your Table",
          content: `<p>Once your table is created, you can verify its structure:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DESCRIBE Employees;</code></pre>
<p>Or check constraints using:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SHOW CREATE TABLE Employees;</code></pre>`
        },
        {
          title: "🔚 Summary",
          content: `<p>The CREATE TABLE statement lays the foundation of your database design. A carefully constructed table ensures data integrity, reduces redundancy, and improves performance. With appropriate column definitions, data types, and constraints, your application's backend becomes robust and future-proof.</p>`
        }
      ]
    },
    {
      heading: "DDL: ALTER TABLE",
      subheadings: [
        {
          title: "Understanding ALTER TABLE: Evolving Your Database Schema",
          content: `<p>The ALTER TABLE statement belongs to the Data Definition Language (DDL) category in SQL. It is used to change the structure of an already existing table without dropping or recreating it. This flexibility is crucial as database schemas evolve over time.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Typical use cases include:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Adding, removing, or renaming columns</strong></li>
<li><strong>Modifying column data types or constraints</strong></li>
<li><strong>Renaming the table</strong></li>
<li><strong>Adding or dropping constraints</strong> like PRIMARY KEY, FOREIGN KEY, NOT NULL</li>
</ul>`
        },
        {
          title: "1️⃣ Adding a Column (ADD)",
          content: `<p>You can add new columns to a table using ALTER TABLE. This can be done whether or not the table already contains data.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE table_name
ADD column_name data_type [constraint];</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">• Nullable Columns:</h4>
<p>Adding a column that allows NULL is safe for tables with existing data.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE Employees
ADD status VARCHAR(20);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">• NOT NULL Columns:</h4>
<p>These require a DEFAULT value to avoid breaking constraints on existing rows.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>-- Fails if the table has data
ALTER TABLE Employees
ADD country VARCHAR(50) NOT NULL;  -- ❌

-- Succeeds with DEFAULT value
ALTER TABLE Employees
ADD country VARCHAR(50) NOT NULL DEFAULT 'Unknown';  -- ✅</code></pre>`
        },
        {
          title: "2️⃣ Dropping a Column (DROP COLUMN)",
          content: `<p>This removes a column and all of its data permanently.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE table_name
DROP COLUMN column_name;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE Employees
DROP COLUMN status;</code></pre>
<p class="mt-4"><strong>⚠️ Note:</strong> This action is irreversible and leads to data loss. Use it cautiously.</p>`
        },
        {
          title: "3️⃣ Modifying Column Definition (MODIFY or ALTER COLUMN)",
          content: `<p>Used to change a column's data type or its nullability. Syntax varies slightly across databases:</p>
<h4 class="text-lg font-semibold mt-4 mb-2">• MySQL/Oracle:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE table_name
MODIFY column_name new_data_type;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">• PostgreSQL/SQL Server:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE table_name
ALTER COLUMN column_name TYPE new_data_type;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Changing Data Types:</h4>
<p><strong>• Safe Changes (Widening):</strong></p>
<ul class="list-disc list-inside space-y-1 ml-8">
<li>INT to BIGINT</li>
<li>VARCHAR(50) to VARCHAR(100)</li>
<li>DATE to DATETIME</li>
</ul>
<p><strong>• Risky Changes (Narrowing/Incompatible):</strong></p>
<ul class="list-disc list-inside space-y-1 ml-8">
<li>VARCHAR(100) to VARCHAR(20) (possible truncation)</li>
<li>FLOAT to INT (precision loss)</li>
<li>VARCHAR to INT (may fail if data is not numeric)</li>
</ul>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE Employees
MODIFY first_name VARCHAR(75);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Changing Nullability:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>-- Must ensure no NULL values exist before enforcing NOT NULL
ALTER TABLE Employees
MODIFY hire_date DATE NOT NULL;</code></pre>`
        },
        {
          title: "4️⃣ Renaming Columns or Tables",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">Rename Column (Standard SQL):</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE table_name
RENAME COLUMN old_name TO new_name;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Rename Table:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE old_table_name
RENAME TO new_table_name;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE Employees
RENAME COLUMN salary TO annual_salary;</code></pre>`
        },
        {
          title: "5️⃣ Adding or Dropping Constraints",
          content: `<p>You can attach or remove constraints using ALTER TABLE.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>-- Add
ALTER TABLE table_name
ADD CONSTRAINT constraint_name constraint_definition;

-- Drop
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>-- Add foreign key
ALTER TABLE Employees
ADD CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES Departments(id);

-- Drop constraint
ALTER TABLE Employees
DROP CONSTRAINT fk_dept;</code></pre>`
        },
        {
          title: "📋 Command Reference Summary",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Action</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Add column</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE tbl ADD col datatype;</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Drop column</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE tbl DROP COLUMN col;</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Modify column type</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE tbl MODIFY col datatype;</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Set NOT NULL</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE tbl MODIFY col datatype NOT NULL;</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Rename column</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE tbl RENAME COLUMN old TO new;</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Rename table</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE tbl RENAME TO new_tbl;</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Add constraint</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE tbl ADD CONSTRAINT name ...;</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Drop constraint</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALTER TABLE tbl DROP CONSTRAINT name;</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "⚖️ Special Considerations: Empty vs Non-empty Tables",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">✅ On empty tables, ALTER operations are generally safe:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>No data validation needed</li>
<li>No data transformation</li>
<li>No performance impact</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">⚠️ On non-empty tables, take caution:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Adding NOT NULL fails if existing rows contain NULL</li>
<li>Changing data types might truncate or fail</li>
<li>Constraint additions can fail if existing data violates rules</li>
</ul>`
        },
        {
          title: "🛡️ Best Practices Before ALTERING",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Backup your table</strong></li>
<li><strong>Check for existing NULLs</strong> or incompatible data types</li>
<li><strong>Validate with queries like:</strong></li>
</ul>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Employees WHERE column IS NULL;
SELECT * FROM Employees WHERE column NOT REGEXP '^[0-9]+$';</code></pre>`
        },
        {
          title: "📝 Final Notes",
          content: `<p>ALTER TABLE is one of the most powerful SQL commands for schema evolution. While very useful, it must be used cautiously, especially on large or populated tables.</p>
<p class="mt-4"><strong>Remember:</strong> Always test your ALTER statements on a copy of your data first, and ensure you have proper backups before making structural changes to production databases.</p>`
        }
      ]
    },
    {
      heading: "DDL: DROP TABLE",
      subheadings: [
        {
          title: "Understanding DROP TABLE: Critical Database Command",
          content: `<p>The DROP TABLE command is a critical Data Definition Language (DDL) statement used when you want to remove an entire table from your database, including its structure, records, constraints, indexes, and any linked triggers.</p>
<p class="mt-4"><strong>Once executed, this operation cannot be reversed in most database systems</strong> — making it one of the most powerful and destructive SQL commands.</p>`
        },
        {
          title: "� Basic Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DROP TABLE table_name;</code></pre>
<p class="mt-4">You can also drop multiple tables in one go:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DROP TABLE table1, table2, table3;</code></pre>`
        },
        {
          title: "⚙️ Key Characteristics & Behavior",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Property</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">❌ Irreversible</td>
<td class="border border-gray-300 px-4 py-2">Deletes both structure and data. Can't be rolled back without a backup.</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">� Integrity-Sensitive</td>
<td class="border border-gray-300 px-4 py-2">Won't allow deletion if it breaks foreign key constraints.</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🔗 No Auto-Cascade</td>
<td class="border border-gray-300 px-4 py-2">Dependent constraints are not auto-removed unless explicitly handled.</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">❗ Error-Prone</td>
<td class="border border-gray-300 px-4 py-2">Fails if the table doesn't exist — unless IF EXISTS is used.</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Safe Usage Tips Before Dropping a Table",
          content: `<ol class="list-decimal list-inside space-y-2 ml-4">
<li><strong>🔐 Check for dependencies</strong> like foreign keys in other tables.</li>
<li><strong>💾 Backup any important data</strong> beforehand.</li>
<li><strong>🧪 Consider alternatives</strong> like DELETE or TRUNCATE if you only need to clear data.</li>
<li><strong>🛡️ Use IF EXISTS</strong> to suppress errors when dropping optional or temporary tables.</li>
</ol>
<pre class="bg-gray-100 p-4 rounded-lg mt-4 overflow-x-auto"><code>DROP TABLE IF EXISTS employees;</code></pre>`
        },
        {
          title: "🔗 Dealing with Foreign Keys",
          content: `<p>Trying to drop a parent table that is referenced by a foreign key in another table will result in failure.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>-- Fails if 'departments' is referenced by another table
DROP TABLE departments;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🛠 Solution:</h4>
<p>You must first remove the foreign key constraint in the dependent (child) table:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ALTER TABLE employees DROP CONSTRAINT fk_dept_id;
DROP TABLE departments;</code></pre>`
        },
        {
          title: "🛠 Special Behaviors in Different SQL Engines",
          content: `<p>Different database systems handle DROP TABLE operations with varying levels of safety and recovery options.</p>`
        },
        {
          title: "� Oracle – Recycle Bin Support",
          content: `<p>Oracle offers a safety net via the Recycle Bin, where dropped tables are held temporarily before permanent deletion.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">� Restore Dropped Table</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>FLASHBACK TABLE employees TO BEFORE DROP;</code></pre>
<p>This brings the table back exactly as it was.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🗑 Force Delete (Bypass Recycle Bin)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>-- Deletes from Recycle Bin
PURGE TABLE employees;

-- Skip Recycle Bin entirely
DROP TABLE employees PURGE;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">� View Deleted Tables in Recycle Bin</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM RECYCLEBIN;</code></pre>`
        },
        {
          title: "🔵 MySQL & PostgreSQL – Permanent Deletion",
          content: `<p>These databases do not offer a recycle bin or recovery mechanism. Once a table is dropped, it is completely and permanently removed.</p>
<ul class="list-disc list-inside space-y-1 ml-4 mt-4">
<li><strong>❌ No undo</strong></li>
<li><strong>✅ DROP TABLE IF EXISTS</strong> prevents errors</li>
<li><strong>✅ Transactions don't protect DROP</strong> — it's committed instantly</li>
</ul>`
        },
        {
          title: "🧩 DROP vs DELETE vs TRUNCATE",
          content: `<p>Here's a quick side-by-side comparison of how these commands behave:</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DELETE</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">TRUNCATE</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DROP TABLE</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Deletes data only</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Deletes table structure</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Supports rollback</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes (TXN safe)</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No (auto commit)</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Affects constraints</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">✅ Partially</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Fully removed</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Use case</td>
<td class="border border-gray-300 px-4 py-2">Remove some rows</td>
<td class="border border-gray-300 px-4 py-2">Wipe all rows fast</td>
<td class="border border-gray-300 px-4 py-2">Full table removal</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🔐 Required Permissions",
          content: `<p>To execute a DROP TABLE command, the user typically needs one of the following:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>DROP privilege</strong> on the table</li>
<li><strong>ALTER or DELETE permissions</strong> (in some systems)</li>
</ul>
<p class="mt-4">If the user doesn't have these privileges, the command will be blocked with a permissions error.</p>`
        },
        {
          title: "✅ Summary",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>DROP TABLE is used to permanently remove</strong> a table and all associated data and schema elements.</li>
<li><strong>It is non-recoverable</strong> in MySQL/PostgreSQL unless you've made a manual backup.</li>
<li><strong>Use IF EXISTS</strong> for safer, cleaner code.</li>
<li><strong>Be cautious of foreign key constraints</strong> and dependent objects.</li>
<li><strong>Oracle offers advanced recovery options</strong> like FLASHBACK.</li>
<li><strong>Always double-check before using DROP</strong> in production environments.</li>
</ul>
<p class="mt-4"><strong>⚠️ Critical Warning:</strong> DROP TABLE is one of the most destructive SQL commands. In production environments, always ensure you have verified backups and absolute certainty before execution.</p>`
        }
      ]
    },
    {
      heading: "DDL: TRUNCATE TABLE",
      subheadings: [
        {
          title: "Understanding TRUNCATE TABLE: The Lightning-Fast Data Wiper",
          content: `<p>The TRUNCATE TABLE command is a lightweight DDL operation designed to quickly remove all rows from a table without affecting its structure. Think of it as hitting the reset button: your table remains — schema intact — but the data vanishes instantly.</p>
<p class="mt-4">Unlike DELETE, which logs each row removal individually, TRUNCATE skips granular logging, making it blazingly fast for bulk deletions.</p>`
        },
        {
          title: "🧠 When Should You Use TRUNCATE?",
          content: `<p>Use TRUNCATE when:</p>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>You need to wipe a table completely, not selectively.</li>
<li>Speed is important (e.g., during staging data refresh).</li>
<li>You don't need to track deleted rows or trigger any row-level logic.</li>
<li>You're okay with resetting things like auto-increment counters.</li>
</ul>`
        },
        {
          title: "⚙️ What TRUNCATE Actually Does (Internally)",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Action</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Removes all rows</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes — instantly</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Resets auto-increment counters</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes — in most databases</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Triggers ON DELETE fired</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No — most engines bypass them</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Bypasses row-by-row deletion logs</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes — bulk deallocation instead</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Skips WHERE clause</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes — applies to all records</td>
</tr>
</tbody>
</table>
<p class="mt-4">Unlike DELETE, which writes an entry to the transaction log for every row, TRUNCATE typically deallocates data pages directly, drastically improving performance for large datasets.</p>`
        },
        {
          title: "🧩 TRUNCATE vs DELETE (Functional Differences)",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DELETE</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">TRUNCATE</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Granular row deletion</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes (WHERE allowed)</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No — wipes all rows</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Speed on large datasets</td>
<td class="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">🐢 Slower</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">🚀 Much faster</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Triggers invoked</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Resets identity columns</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Transaction-safe rollback</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-orange-600 font-semibold">⚠️ Depends on DBMS</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Foreign key enforcement</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Checked</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ Often blocked if dependent</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📘 Behavior in Different Databases",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Database</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Supports Rollback</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Resets Auto-Increment</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Allows TRUNCATE with FK?</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">MySQL</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No (requires disabling FK)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">PostgreSQL</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No (FK blocks truncate)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Oracle</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes (on self-contained tables)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">SQL Server</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No (disallowed if referenced)</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "⚠️ Things You Cannot Do with TRUNCATE",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>No Filtering</strong><br>
You cannot use WHERE clauses — it's an all-or-nothing operation.</li>
<li><strong>No Selective Cleanup</strong><br>
You can't truncate just a few rows — use DELETE for that.</li>
<li><strong>No Trigger Execution</strong><br>
Row-level BEFORE or AFTER DELETE triggers will not fire.</li>
<li><strong>Limited with Constraints</strong><br>
In many systems, tables with foreign key references can't be truncated unless you drop constraints first.</li>
</ul>`
        },
        {
          title: "🧪 Example Usage",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>-- Wipe all rows from the Sales table and reset any auto-incrementing ID
TRUNCATE TABLE Sales;</code></pre>
<p class="mt-4">In MySQL, this is as fast as dropping the table and re-creating it, but without the need to redefine columns or constraints.</p>`
        },
        {
          title: "🛠 Pro Tips",
          content: `<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>✅ Use TRUNCATE</strong> on staging or logging tables where no child relationships exist.</li>
<li><strong>❌ Avoid truncating tables</strong> that are part of transactional workflows or audit trails.</li>
<li><strong>🧹 Perfect for ETL pipelines,</strong> data refreshes, and temporary snapshots.</li>
</ul>`
        },
        {
          title: "✅ Summary",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>TRUNCATE TABLE instantly deletes all rows</strong> while preserving the table structure.</li>
<li><strong>It is a non-logged (or minimally logged), non-transactional operation</strong> in most systems.</li>
<li><strong>Offers blazing-fast performance</strong> for large tables.</li>
<li><strong>Not suitable for fine-grained control,</strong> filtering, or row-level audits.</li>
<li><strong>Use with caution</strong> if your table is linked by foreign keys or relies on triggers.</li>
</ul>`
        }
      ]
    },
    {
      heading: "Data Manipulation Language (DML)",
      subheadings: [
        {
          title: "Understanding DML: Managing Your Data",
          content: `<p>DML commands are responsible for managing the data inside tables — allowing you to insert, update, delete, and retrieve data. They do not affect the table structure, only the rows of data stored within.</p>
<p class="mt-4">Unlike DDL commands, DML operations are transactional and can be rolled back or committed.</p>`
        },
        {
          title: "✅ 1. INSERT — Add New Data to a Table",
          content: `<p>The INSERT command is used to add new rows to a table. This is how you populate a table with records.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax 1: Inserting with Column Names (Recommended)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>INSERT INTO Students (id, name, age)
VALUES (101, 'Aditi', 20);</code></pre>
<p class="mt-4"><strong>✅ Best Practice:</strong> Always specify column names for clarity and safety.</p>`
        },
        {
          title: "🔹 Alternative INSERT Syntaxes",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">Syntax 2: Insert Without Column Names (Risky)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>INSERT INTO table_name
VALUES (value1, value2, value3);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>INSERT INTO Students
VALUES (102, 'Rohan', 21);</code></pre>
<p class="mt-4"><strong>⚠️ Warning:</strong> Risky if table structure changes — not recommended.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Syntax 3: Insert Multiple Rows</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>INSERT INTO Students (id, name, age)
VALUES (103, 'Ishita', 22),
       (104, 'Kabir', 23);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Insert Using SELECT</h4>
<p>Copy data from one table to another:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>INSERT INTO GraduateStudents (id, name)
SELECT id, name FROM Students WHERE age > 21;</code></pre>`
        },
        {
          title: "🛠️ 2. UPDATE — Modify Existing Data",
          content: `<p>The UPDATE command is used to change values in one or more existing rows.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Basic Syntax</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>UPDATE Students
SET age = 21
WHERE id = 101;</code></pre>
<p class="mt-4"><strong>⚠️ Important:</strong> Always use the WHERE clause, or all rows will be updated!</p>`
        },
        {
          title: "🔹 Advanced UPDATE Operations",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">Update All Rows (Use Caution!)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>UPDATE Students
SET status = 'Active';</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Conditional Update with CASE</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>UPDATE Employees
SET bonus = 
    CASE
        WHEN performance = 'Excellent' THEN 10000
        WHEN performance = 'Good' THEN 5000
        ELSE 2000
    END;</code></pre>`
        },
        {
          title: "🧨 3. DELETE — Remove Specific Rows",
          content: `<p>The DELETE command removes data from one or more rows in a table, based on a condition.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Basic Syntax</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DELETE FROM table_name
WHERE condition;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DELETE FROM Students
WHERE id = 104;</code></pre>`
        },
        {
          title: "🔹 Advanced DELETE Operations",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">Delete All Rows (Dangerous Without WHERE)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DELETE FROM Students;</code></pre>
<p class="mt-4"><strong>⚠️ Warning:</strong> Deletes all data, but retains the table structure.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Use LIMIT with DELETE (MySQL)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DELETE FROM Logs
ORDER BY timestamp ASC
LIMIT 100;</code></pre>
<p class="mt-4"><strong>✅ Benefit:</strong> Helps to delete old records in chunks.</p>`
        },
        {
          title: "🔁 4. MERGE — Insert or Update Conditionally (UPSERT)",
          content: `<p>Supported in Oracle, SQL Server, and partially in PostgreSQL/MySQL via alternate syntax.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax (Oracle/SQL Server)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>MERGE INTO target_table AS target
USING source_table AS source
ON target.id = source.id
WHEN MATCHED THEN
    UPDATE SET target.name = source.name
WHEN NOT MATCHED THEN
    INSERT (id, name)
    VALUES (source.id, source.name);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Purpose:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>If the record exists → Update it</li>
<li>If not → Insert it</li>
</ul>
<p class="mt-4"><strong>✅ Benefit:</strong> Solves duplicate key problems.</p>`
        },
        {
          title: "🔹 PostgreSQL Alternative (Upsert)",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>INSERT INTO Students (id, name)
VALUES (105, 'Raj')
ON CONFLICT (id) 
DO UPDATE SET name = EXCLUDED.name;</code></pre>`
        },
        {
          title: "🧾 Transaction Support in DML",
          content: `<p>Every DML command is part of a transaction unless autocommit is ON.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">COMMIT</td>
<td class="border border-gray-300 px-4 py-2">Saves the transaction permanently</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">ROLLBACK</td>
<td class="border border-gray-300 px-4 py-2">Reverts changes in the current TXN</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">SAVEPOINT</td>
<td class="border border-gray-300 px-4 py-2">Sets a restore point inside a TXN</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">BEGIN</td>
<td class="border border-gray-300 px-4 py-2">Explicitly starts a transaction</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>BEGIN;

UPDATE Bank SET balance = balance - 500 WHERE account_id = 101;
UPDATE Bank SET balance = balance + 500 WHERE account_id = 202;

COMMIT;</code></pre>`
        },
        {
          title: "📊 DML Commands at a Glance",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Table Structure Affected?</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Auto-Commit?</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">WHERE Clause Needed?</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">INSERT</td>
<td class="border border-gray-300 px-4 py-2">Adds new row(s)</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">UPDATE</td>
<td class="border border-gray-300 px-4 py-2">Edits existing row(s)</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes (usually)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">DELETE</td>
<td class="border border-gray-300 px-4 py-2">Removes existing row(s)</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes (usually)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">MERGE</td>
<td class="border border-gray-300 px-4 py-2">Upsert: insert/update based on condition</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Best Practices for DML",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Always specify columns in INSERT</strong> for clarity and maintainability.</li>
<li><strong>Use WHERE in UPDATE/DELETE</strong> to avoid affecting all rows unintentionally.</li>
<li><strong>Wrap critical operations in a transaction block</strong> for data consistency.</li>
<li><strong>Use MERGE or UPSERT</strong> where supported for duplicate-safe inserts.</li>
<li><strong>Monitor row count</strong> with ROW_COUNT() or output messages.</li>
<li><strong>Test with dummy data</strong> before running on production systems.</li>
</ul>`
        }
      ]
    },
    {
      heading: "📖 Data Query Language (DQL)",
      subheadings: [
        {
          title: "Understanding DQL: The Art of Data Retrieval",
          content: `<p>Data Query Language (DQL) is the part of SQL used to retrieve data from databases. It allows users to query tables, apply conditions, combine tables, and project only the relevant information.</p>
<p class="mt-4">While DDL and DML modify the database structure or its data, DQL is purely about fetching data for use, display, or analysis.</p>
<p class="mt-4">The primary command in DQL is SELECT, and everything else — Projection, Selection, and Joins — is achieved through the various clauses and expressions within the SELECT query.</p>`
        },
        {
          title: "✅ 1. SELECT — The Core of DQL",
          content: `<p>The SELECT statement is the foundational command used to retrieve records from one or more tables.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Basic Syntax</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column1, column2
FROM table_name;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name, age
FROM Students;</code></pre>
<p class="mt-4">This retrieves the name and age columns from all rows in the Students table.</p>`
        },
        {
          title: "🔍 2. Projection — Selecting Specific Columns",
          content: `<p>Projection refers to selecting specific columns from a table instead of retrieving all data.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📌 Explanation:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>Focuses on columns only.</li>
<li>Helps reduce data volume and improve query performance.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column1, column2
FROM table_name;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT employee_id, first_name
FROM Employees;</code></pre>
<p class="mt-4">This query projects only the employee_id and first_name columns, ignoring the rest.</p>
<p class="mt-4"><strong>✅ Tip:</strong> You can also project all columns using SELECT *, but it's better to list only needed columns in production environments.</p>`
        },
        {
          title: "🔎 3. Selection — Filtering Specific Rows",
          content: `<p>Selection focuses on retrieving specific rows that meet a given condition, using the WHERE clause.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📌 Explanation:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>Focuses on rows using conditional logic.</li>
<li>Applied after projection to filter results further.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column1, column2
FROM table_name
WHERE condition;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name, department
FROM Employees
WHERE department = 'IT';</code></pre>
<p class="mt-4">This retrieves only those employees who belong to the 'IT' department.</p>
<p class="mt-4"><strong>✅ Tip:</strong> Combine conditions using logical operators like AND, OR, NOT.</p>`
        },
        {
          title: "🔗 4. Joins — Combining Data from Multiple Tables",
          content: `<p>Joins are used to fetch data from two or more tables that share a logical relationship.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📌 Explanation:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>Helps build rich, meaningful data by combining multiple datasets.</li>
<li>Requires a common column (foreign key or shared field).</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Common Join Types</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Join Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">INNER JOIN</td>
<td class="border border-gray-300 px-4 py-2">Returns only matching records from both tables.</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">LEFT JOIN</td>
<td class="border border-gray-300 px-4 py-2">Returns all records from the left table, and matching ones from right.</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">RIGHT JOIN</td>
<td class="border border-gray-300 px-4 py-2">Returns all records from the right table, and matching ones from left.</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">FULL JOIN</td>
<td class="border border-gray-300 px-4 py-2">Returns all records when there's a match in either table.</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">CROSS JOIN</td>
<td class="border border-gray-300 px-4 py-2">Returns Cartesian product (all combinations).</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🔹 JOIN Syntax Example",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">Syntax (Inner Join Example)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT e.name, d.department_name
FROM Employees AS e
JOIN Departments AS d
ON e.department_id = d.id;</code></pre>
<p class="mt-4">This joins the Employees and Departments tables using the common department_id field.</p>`
        },
        {
          title: "🔄 Combining All — SELECT + Projection + Selection + Join",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT e.employee_id, e.first_name, d.department_name
FROM Employees e
JOIN Departments d ON e.department_id = d.id
WHERE d.location = 'Delhi';</code></pre>
<p class="mt-4">This query:</p>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Projects specific columns</strong> (employee_id, first_name, department_name)</li>
<li><strong>Joins data from two tables</strong></li>
<li><strong>Selects only those departments</strong> located in Delhi</li>
</ul>`
        },
        {
          title: "📝 Summary of DQL Concepts",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Clause Used</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">SELECT</td>
<td class="border border-gray-300 px-4 py-2">Retrieve records from one or more tables</td>
<td class="border border-gray-300 px-4 py-2 font-mono">SELECT</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Projection</td>
<td class="border border-gray-300 px-4 py-2">Choose specific columns to retrieve</td>
<td class="border border-gray-300 px-4 py-2 font-mono">SELECT column1</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Selection</td>
<td class="border border-gray-300 px-4 py-2">Filter rows based on conditions</td>
<td class="border border-gray-300 px-4 py-2 font-mono">WHERE</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Joins</td>
<td class="border border-gray-300 px-4 py-2">Combine data from multiple tables</td>
<td class="border border-gray-300 px-4 py-2 font-mono">JOIN</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Best Practices for Using DQL",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Use aliases (AS)</strong> for readability.</li>
<li><strong>Always filter rows with WHERE</strong> to avoid unnecessary data.</li>
<li><strong>Choose only necessary columns</strong> instead of SELECT *.</li>
<li><strong>Use INNER JOIN</strong> when you need only matching data from related tables.</li>
<li><strong>Test join conditions carefully</strong> to avoid incorrect or duplicate results.</li>
</ul>`
        }
      ]
    },
    {
      heading: "DQL: Projection in SQL",
      subheadings: [
        {
          title: "Understanding Projection: Selecting Only What You Need",
          content: `<p>Projection in SQL refers to the act of selecting specific columns (attributes) from a table to display in your query result. Instead of retrieving every piece of data, projection allows you to filter by columns, shaping the output to include only the relevant fields.</p>`
        },
        {
          title: "🔍 How Projection Works Internally",
          content: `<p>When a SQL query is executed, the database performs the following steps:</p>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>FROM clause</strong> determines the source table(s).</li>
<li><strong>WHERE clause</strong> (if present) filters the rows.</li>
<li><strong>Projection (SELECT clause)</strong> extracts only the specified columns from each selected row.</li>
<li><strong>The result</strong> is assembled as a new virtual table and returned to the user.</li>
</ol>
<p class="mt-4">So projection acts on rows already selected, ensuring only the specified columns are part of the output.</p>`
        },
        {
          title: "🧩 Syntax of Projection",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT [DISTINCT] column1, column2, ...
FROM table_name;</code></pre>
<ul class="list-disc list-inside space-y-1 ml-4 mt-4">
<li><strong>DISTINCT</strong> → Optional. Filters out duplicate rows.</li>
<li><strong>column1, column2</strong> → Specify the columns to project.</li>
<li><strong>table_name</strong> → The table from which data is retrieved.</li>
</ul>`
        },
        {
          title: "📌 Types of Projection",
          content: `<p>There are several ways to use projection in SQL, each serving different purposes and use cases.</p>`
        },
        {
          title: "1️⃣ Projecting All Columns Using *",
          content: `<p>You can use an asterisk (*) to project all columns in a table.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Employees;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ When to use:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>During data exploration or debugging</li>
<li>When you truly need all columns</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">⚠️ Avoid in production:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>Pulls more data than necessary</li>
<li>Increases network and memory usage</li>
<li>Breaks application logic if schema changes (e.g., added columns)</li>
</ul>`
        },
        {
          title: "2️⃣ Projecting Specific Columns",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name, last_name
FROM Employees;</code></pre>
<p class="mt-4"><strong>🎯 Benefit:</strong> More efficient and readable. You only receive what you request.</p>`
        },
        {
          title: "3️⃣ Using DISTINCT for Unique Values",
          content: `<p>DISTINCT filters duplicate rows, ensuring only unique combinations of selected columns are returned.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT DISTINCT department_id FROM Employees;</code></pre>
<p class="mt-4"><strong>🔍 Explanation:</strong> If multiple employees are in the same department, this ensures that department ID is returned only once.</p>
<p class="mt-4"><strong>⚠️ Note:</strong> DISTINCT applies to the entire row, not individual columns.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT DISTINCT first_name, last_name
FROM Employees;</code></pre>`
        },
        {
          title: "4️⃣ Projection with Expressions and Aliases",
          content: `<p>SQL allows you to project computed values, not just raw columns. You can also rename the output using aliases (AS).</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT
    first_name || ' ' || last_name AS full_name,
    salary * 0.10 AS tax
FROM Employees;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🧠 Tips:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>Use || for string concatenation in PostgreSQL / Oracle (CONCAT() in MySQL)</li>
<li>Aliases make results more user-friendly</li>
<li>You can apply functions like UPPER(), ROUND(), etc.</li>
</ul>`
        },
        {
          title: "5️⃣ Using Functions in Projection",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT UPPER(first_name) AS name_in_caps
FROM Employees;</code></pre>
<p class="mt-4">Or calculate date-based info:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT
    birth_date,
    CURRENT_DATE - birth_date AS age_in_days
FROM Employees;</code></pre>`
        },
        {
          title: "🧠 Summary: What You Should Know",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Aspect</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🎯 Purpose</td>
<td class="border border-gray-300 px-4 py-2">Select specific columns from the table</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">✨ Keyword</td>
<td class="border border-gray-300 px-4 py-2 font-mono">SELECT</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🌟 All columns</td>
<td class="border border-gray-300 px-4 py-2">Use * to project every column (use with caution)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">🧹 Remove Duplicates</td>
<td class="border border-gray-300 px-4 py-2">Use DISTINCT to show unique records only</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🧮 Calculations</td>
<td class="border border-gray-300 px-4 py-2">Expressions and functions can be projected using aliases</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">⚠️ Caution</td>
<td class="border border-gray-300 px-4 py-2">Avoid SELECT * in performance-critical or production-level queries</td>
</tr>
</tbody>
</table>`
        }
      ]
    },
    {
      heading: "SQL Expressions",
      subheadings: [
        {
          title: "Understanding SQL Expressions: The Building Blocks of Dynamic Queries",
          content: `<p>In SQL, an expression is a formula composed of constants, column values, operators, functions, or subqueries that produces a single value when evaluated. These expressions make SQL flexible and powerful for performing calculations, filtering data, modifying outputs, and even controlling logic flow.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Expressions are widely used in:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>SELECT statements</strong> for computed columns.</li>
<li><strong>WHERE clauses</strong> for filtering.</li>
<li><strong>ORDER BY</strong> for custom sorting.</li>
<li><strong>HAVING</strong> for grouped filters.</li>
<li><strong>JOIN conditions</strong> for matching records.</li>
</ul>`
        },
        {
          title: "🔢 1. Mathematical (Arithmetic) Expressions",
          content: `<p>These expressions perform numeric calculations using arithmetic operators.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Operators:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">+</td>
<td class="border border-gray-300 px-4 py-2">Addition</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">-</td>
<td class="border border-gray-300 px-4 py-2">Subtraction</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">*</td>
<td class="border border-gray-300 px-4 py-2">Multiplication</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">/</td>
<td class="border border-gray-300 px-4 py-2">Division</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">%</td>
<td class="border border-gray-300 px-4 py-2">Modulus (remainder)</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<p>Calculate yearly salary from monthly salary:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    employee_id, 
    salary, 
    salary * 12 AS annual_salary
FROM Employees;</code></pre>
<p class="mt-4"><strong>✅ Best Practice:</strong> Use aliases (AS) for calculated columns for clarity.</p>`
        },
        {
          title: "🔤 2. String Expressions",
          content: `<p>Used for manipulating text — joining, extracting, replacing, or formatting strings.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Common String Operators:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Supported In</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">||</td>
<td class="border border-gray-300 px-4 py-2">Concatenation (PostgreSQL, Oracle)</td>
<td class="border border-gray-300 px-4 py-2">PostgreSQL, Oracle</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">+</td>
<td class="border border-gray-300 px-4 py-2">Concatenation (MS SQL Server)</td>
<td class="border border-gray-300 px-4 py-2">SQL Server</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">CONCAT()</td>
<td class="border border-gray-300 px-4 py-2">Function-based concatenation</td>
<td class="border border-gray-300 px-4 py-2">MySQL, PostgreSQL, SQL Server</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example (PostgreSQL/Oracle):</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    first_name || ' ' || last_name AS full_name
FROM Employees;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example (MySQL):</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name
FROM Employees;</code></pre>
<p class="mt-4"><strong>💡 Insight:</strong> String expressions are essential in reporting and data formatting.</p>`
        },
        {
          title: "🔄 3. Logical / Boolean Expressions",
          content: `<p>Used to make decisions in queries — returning rows only if a condition evaluates to TRUE.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Common Logical Operators:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">=</td>
<td class="border border-gray-300 px-4 py-2">Equal to</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">&lt;&gt; or !=</td>
<td class="border border-gray-300 px-4 py-2">Not equal to</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">&lt;, &gt;, &lt;=, &gt;=</td>
<td class="border border-gray-300 px-4 py-2">Comparisons</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">AND, OR, NOT</td>
<td class="border border-gray-300 px-4 py-2">Logical connectives</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">BETWEEN, IN, LIKE, IS NULL</td>
<td class="border border-gray-300 px-4 py-2">Special conditions</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * 
FROM Employees
WHERE department_id = 20 AND salary BETWEEN 50000 AND 100000;</code></pre>
<p class="mt-4"><strong>⚠️ Important:</strong> Logical expressions are critical in WHERE, JOIN, CASE, and HAVING clauses.</p>`
        },
        {
          title: "📅 4. Date/Time Expressions",
          content: `<p>SQL provides powerful ways to work with dates and times — calculating durations, extracting parts of a date, or formatting them.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Example 1: Add 7 days to a hire date</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    employee_id, 
    hire_date, 
    hire_date + INTERVAL '7 day' AS probation_review
FROM Employees;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Example 2: Extract year</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    EXTRACT(YEAR FROM hire_date) AS hire_year
FROM Employees;</code></pre>
<p class="mt-4"><strong>📌 Use Case:</strong> Works well with reporting and temporal filters.</p>`
        },
        {
          title: "🧮 5. Comparison Expressions",
          content: `<p>These are used to compare values and return TRUE or FALSE. Often used in filtering (WHERE), branching (CASE), or sorting.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    name, 
    salary, 
    CASE 
        WHEN salary > 100000 THEN 'High'
        WHEN salary BETWEEN 50000 AND 100000 THEN 'Medium'
        ELSE 'Low'
    END AS salary_band
FROM Employees;</code></pre>
<p class="mt-4"><strong>🧠 Advanced Tip:</strong> Expressions can be nested and combined to build powerful logic.</p>`
        },
        {
          title: "🧩 6. NULL-Handling Expressions",
          content: `<p>NULL represents missing or unknown data. Expressions must be written carefully to account for NULLs.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    employee_id, 
    COALESCE(bonus, 0) AS safe_bonus
FROM Employees;</code></pre>
<p class="mt-4"><strong>✅ Benefit:</strong> COALESCE() replaces NULL with a default value.</p>`
        },
        {
          title: "🔗 7. Subquery Expressions",
          content: `<p>A subquery that returns a single value can be part of an expression.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    name, 
    salary,
    salary - (SELECT AVG(salary) FROM Employees) AS salary_difference
FROM Employees;</code></pre>`
        },
        {
          title: "🔍 Summary Table: SQL Expression Types",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Common Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Arithmetic</td>
<td class="border border-gray-300 px-4 py-2">Perform numeric calculations</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">salary * 12</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">String</td>
<td class="border border-gray-300 px-4 py-2">Manipulate text</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">first_name || ' ' || last_name</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Logical/Boolean</td>
<td class="border border-gray-300 px-4 py-2">Filter rows or apply conditions</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">salary > 50000 AND dept_id = 10</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Date/Time</td>
<td class="border border-gray-300 px-4 py-2">Operate on temporal data</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">hire_date + INTERVAL '30 day'</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Comparison</td>
<td class="border border-gray-300 px-4 py-2">Value evaluation for decisions</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">CASE WHEN ... THEN ...</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">NULL Handling</td>
<td class="border border-gray-300 px-4 py-2">Replace/Manage missing data</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">COALESCE(col, 'default')</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Subquery</td>
<td class="border border-gray-300 px-4 py-2">Use query output as a value</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">SELECT MAX(salary) ...</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Best Practices",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Use aliases (AS)</strong> for clarity.</li>
<li><strong>Handle NULLs carefully</strong> using IS NULL or COALESCE.</li>
<li><strong>Avoid expression repetition</strong> — assign computed values in subqueries or WITH clauses.</li>
<li><strong>Combine multiple expressions</strong> for advanced filtering or display logic.</li>
<li><strong>Be mindful of data type compatibility</strong> (e.g., adding strings to integers).</li>
</ul>`
        }
      ]
    },
    {
      heading: "DQL: Selection in SQL",
      subheadings: [
        {
          title: "Understanding Selection: The Art of Row Filtering",
          content: `<p>Selection in SQL refers to the act of choosing specific rows from a table that satisfy certain conditions. This is a fundamental operation in relational algebra and is implemented in SQL using the WHERE clause.</p>
<p class="mt-4">It allows you to focus your query results, fetching only the data that meets specific logical criteria — making your queries faster and results more relevant.</p>`
        },
        {
          title: "📌 What Happens During Selection?",
          content: `<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>SQL first looks at the FROM clause</strong> to determine which table(s) to query.</li>
<li><strong>It scans each row in the table.</strong></li>
<li><strong>For every row,</strong> it evaluates the condition(s) specified in the WHERE clause.</li>
<li><strong>Only those rows</strong> for which the condition returns TRUE are included in the final output.</li>
</ol>
<p class="mt-4"><strong>✅ Important:</strong> Rows that don't satisfy the condition are ignored, not deleted or changed.</p>`
        },
        {
          title: "🔧 Syntax of Selection",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column1, column2, ...
FROM table_name
WHERE condition;</code></pre>
<ul class="list-disc list-inside space-y-1 ml-4 mt-4">
<li><strong>SELECT:</strong> Specifies the columns you want to retrieve.</li>
<li><strong>FROM:</strong> Specifies the source table.</li>
<li><strong>WHERE:</strong> Filters rows using logical expressions or comparison conditions.</li>
</ul>`
        },
        {
          title: "🧪 Real-World Example",
          content: `<p>Get the first name, last name, and hire date of employees who:</p>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>Work in department 5</li>
<li><strong>AND</strong> were hired after January 1, 2024</li>
</ul>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name, last_name, hire_date
FROM Employees
WHERE department_id = 5 AND hire_date > '2024-01-01';</code></pre>`
        },
        {
          title: "🧠 Why the WHERE Clause Is Important",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">Without the WHERE clause:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Employees;</code></pre>
<p class="mt-4">You get every row from the table — useful for debugging, but inefficient and overwhelming in production environments.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Using a well-constructed WHERE clause:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>Improves performance</li>
<li>Returns only meaningful data</li>
<li>Helps with analytics, reporting, and business logic enforcement</li>
</ul>`
        },
        {
          title: "🔗 Combine Multiple Conditions",
          content: `<p>Use logical operators (AND, OR, NOT) to build complex conditions.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Employees
WHERE department_id = 5 AND salary > 60000 AND status = 'active';</code></pre>`
        },
        {
          title: "🛠 Common Filter Conditions Used in Selection",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Condition Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Equality</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">salary = 50000</td>
<td class="border border-gray-300 px-4 py-2">Matches a specific value</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Range</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">age BETWEEN 25 AND 40</td>
<td class="border border-gray-300 px-4 py-2">Filters between two values</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">List Match</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">dept_id IN (5, 10, 15)</td>
<td class="border border-gray-300 px-4 py-2">Matches multiple values</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Pattern Match</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">name LIKE 'S%'</td>
<td class="border border-gray-300 px-4 py-2">Matches values starting with 'S'</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Null Check</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">email IS NOT NULL</td>
<td class="border border-gray-300 px-4 py-2">Includes only filled data</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Date Filter</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">hire_date < '2024-01-01'</td>
<td class="border border-gray-300 px-4 py-2">Based on temporal data</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🚫 What Not to Do",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>❌ Don't use = to check for NULL values.</strong> Use IS NULL or IS NOT NULL.</li>
<li><strong>❌ Avoid omitting WHERE in UPDATE or DELETE</strong> unless intentional.</li>
<li><strong>❌ Don't forget parentheses</strong> when combining AND and OR — SQL respects operator precedence.</li>
</ul>`
        },
        {
          title: "✅ Summary",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Selection is about retrieving only those rows</strong> that satisfy one or more conditions.</li>
<li><strong>Done using the WHERE clause,</strong> it's crucial for efficient data analysis and manipulation.</li>
<li><strong>You can combine multiple conditions</strong> using logical operators for fine-tuned filtering.</li>
<li><strong>Selection works hand-in-hand</strong> with other clauses like GROUP BY, HAVING, ORDER BY, and joins to produce insightful results.</li>
</ul>`
        }
      ]
    },
    {
      heading: "SQL HAVING Clause",
      subheadings: [
        {
          title: "Understanding the HAVING Clause: Filtering Grouped Results",
          content: `<p>The HAVING clause is used to filter aggregated results after grouping data. While the WHERE clause filters individual rows before grouping, HAVING filters groups after the GROUP BY operation has been applied.</p>
<p class="mt-4"><strong>Think of it this way:</strong> WHERE filters rows, HAVING filters groups.</p>`
        },
        {
          title: "🔧 Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column1, aggregate_function(column2)
FROM table_name
WHERE condition
GROUP BY column1
HAVING aggregate_condition
ORDER BY column1;</code></pre>`
        },
        {
          title: "🔍 Key Differences: WHERE vs HAVING",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">WHERE</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">HAVING</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Purpose</td>
<td class="border border-gray-300 px-4 py-2">Filters individual rows</td>
<td class="border border-gray-300 px-4 py-2">Filters grouped results</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Position</td>
<td class="border border-gray-300 px-4 py-2">Before GROUP BY</td>
<td class="border border-gray-300 px-4 py-2">After GROUP BY</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Can use aggregate functions</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Required with GROUP BY</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No (but often used)</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📊 Execution Order",
          content: `<p>Understanding the execution order helps you know when each clause is applied:</p>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>FROM</strong> - Identifies the source table(s)</li>
<li><strong>WHERE</strong> - Filters individual rows</li>
<li><strong>GROUP BY</strong> - Groups the filtered rows</li>
<li><strong>HAVING</strong> - Filters the grouped results</li>
<li><strong>SELECT</strong> - Projects the final columns</li>
<li><strong>ORDER BY</strong> - Sorts the final result set</li>
</ol>`
        },
        {
          title: "📝 When to Use HAVING Clause",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>When you need to filter groups</strong> based on aggregate values (COUNT, SUM, AVG, etc.)</li>
<li><strong>When WHERE cannot be used</strong> because you need aggregate functions in the condition</li>
<li><strong>To find groups that meet specific criteria</strong> after grouping</li>
<li><strong>In reporting scenarios</strong> where you need to show only significant groups</li>
</ul>`
        },
        {
          title: "💡 Example 1: Basic HAVING Usage",
          content: `<p><strong>Find departments with more than 5 employees:</strong></p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Result:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">department_id</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">employee_count</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">10</td>
<td class="border border-gray-300 px-4 py-2">8</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">20</td>
<td class="border border-gray-300 px-4 py-2">6</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Example 2: HAVING with WHERE",
          content: `<p><strong>Find departments (excluding department 50) that have average salary greater than 60000:</strong></p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, AVG(salary) AS avg_salary, COUNT(*) AS emp_count
FROM employees
WHERE department_id != 50
GROUP BY department_id
HAVING AVG(salary) > 60000;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Execution Flow:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li>Filter out department 50 (WHERE)</li>
<li>Group remaining employees by department (GROUP BY)</li>
<li>Calculate average salary for each group</li>
<li>Keep only groups with average salary > 60000 (HAVING)</li>
</ol>`
        },
        {
          title: "💡 Example 3: Multiple Conditions in HAVING",
          content: `<p><strong>Find departments with more than 3 employees AND average salary between 50000 and 80000:</strong></p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, 
       COUNT(*) AS employee_count,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 3 
   AND AVG(salary) BETWEEN 50000 AND 80000;</code></pre>`
        },
        {
          title: "💡 Example 4: HAVING with Complex Aggregates",
          content: `<p><strong>Find products with total sales greater than 100000 and sold in more than 10 orders:</strong></p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT product_id,
       SUM(quantity * price) AS total_sales,
       COUNT(DISTINCT order_id) AS order_count
FROM order_items
GROUP BY product_id
HAVING SUM(quantity * price) > 100000
   AND COUNT(DISTINCT order_id) > 10;</code></pre>`
        },
        {
          title: "💡 Example 5: HAVING vs WHERE - Common Mistake",
          content: `<p><strong>❌ WRONG - This will cause an error:</strong></p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, COUNT(*) AS emp_count
FROM employees
WHERE COUNT(*) > 5  -- ❌ ERROR: Can't use aggregate in WHERE
GROUP BY department_id;</code></pre>
<p class="mt-4"><strong>✅ CORRECT - Use HAVING for aggregate conditions:</strong></p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, COUNT(*) AS emp_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;  -- ✅ CORRECT</code></pre>
<p class="mt-4"><strong>🔍 Why the first query fails:</strong> WHERE is processed before grouping, so aggregate functions like COUNT(*) are not yet available.</p>`
        },
        {
          title: "📋 Common HAVING Use Cases",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Use Case</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Find high-volume groups</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">HAVING COUNT(*) > 100</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Filter by totals</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">HAVING SUM(amount) > 10000</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Find above-average groups</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">HAVING AVG(score) > 85</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Identify outliers</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">HAVING MAX(value) - MIN(value) > 1000</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Quality control</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">HAVING COUNT(DISTINCT status) = 1</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "⚠️ Important Notes",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>HAVING can only be used with GROUP BY</strong> - it doesn't make sense without grouping</li>
<li><strong>Column aliases defined in SELECT cannot be used in HAVING</strong> in some databases (use the full expression instead)</li>
<li><strong>HAVING is processed after GROUP BY</strong> - so it operates on grouped data</li>
<li><strong>You can use both WHERE and HAVING</strong> in the same query for different filtering purposes</li>
<li><strong>HAVING conditions should involve aggregate functions</strong> - use WHERE for non-aggregate conditions</li>
</ul>`
        },
        {
          title: "✅ Best Practices",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Use WHERE to filter rows before grouping</strong> - it's more efficient</li>
<li><strong>Use HAVING to filter the grouped results</strong> - only when you need aggregate conditions</li>
<li><strong>Combine WHERE and HAVING</strong> when you need both row-level and group-level filtering</li>
<li><strong>Be specific with your aggregate functions</strong> - don't use COUNT(*) when COUNT(column) is more appropriate</li>
<li><strong>Consider performance</strong> - filtering with WHERE before grouping is typically faster than filtering with HAVING after grouping</li>
</ul>`
        },
        {
          title: "🧠 Summary",
          content: `<p>The HAVING clause is essential for filtering grouped data based on aggregate conditions. It works hand-in-hand with GROUP BY to provide powerful analytical capabilities, allowing you to find meaningful patterns and insights in your data by focusing on groups that meet specific aggregate criteria.</p>
<p class="mt-4"><strong>Remember:</strong> WHERE filters rows, HAVING filters groups!</p>`
        }
      ]
    },
    {
      heading: "SQL Functions",
      subheadings: [
        {
          title: "Understanding SQL Functions: Powerful Data Processing Tools",
          content: `<p>In SQL, a function is a predefined operation that takes input(s), processes them, and returns an output. SQL functions are highly efficient tools to simplify complex calculations, manipulate text, and perform statistical summaries — all within your query.</p>
<p class="mt-4">Functions eliminate the need for complex procedural code and make your SQL queries more readable, maintainable, and efficient. They are essential for data transformation, analysis, and reporting.</p>`
        },
        {
          title: "🔀 Types of SQL Functions",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Also Called</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Output per Row</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Single-Row Function</td>
<td class="border border-gray-300 px-4 py-2">Scalar Function</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ One result per row</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Multi-Row Function</td>
<td class="border border-gray-300 px-4 py-2">Aggregate/Group Function</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ One result per group</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "1️⃣ Single-Row (Scalar) Functions",
          content: `<p>These functions operate on each row individually and return one result for each row. They process data on a row-by-row basis, making them perfect for data transformation and formatting tasks.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📦 Categories of Single-Row Functions</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example Functions</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">String</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">UPPER(), LOWER(), CONCAT(), SUBSTR()</td>
<td class="border border-gray-300 px-4 py-2">Manipulate text or character data</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Numeric</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">ROUND(), CEIL(), FLOOR(), MOD()</td>
<td class="border border-gray-300 px-4 py-2">Perform math operations</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Date/Time</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">SYSDATE, CURRENT_DATE, EXTRACT()</td>
<td class="border border-gray-300 px-4 py-2">Handle date values</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Conversion</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">TO_CHAR(), TO_DATE(), CAST()</td>
<td class="border border-gray-300 px-4 py-2">Convert one data type to another</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">General</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">NVL(), COALESCE(), NULLIF()</td>
<td class="border border-gray-300 px-4 py-2">Handle nulls or conditional logic</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Example</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name, UPPER(last_name) AS capitalized_last_name
FROM Employees;</code></pre>
<p class="mt-4">This query returns each employee's first name and their last name converted to uppercase. The UPPER() function processes each row individually.</p>`
        },
        {
          title: "2️⃣ Multi-Row (Aggregate) Functions",
          content: `<p>Aggregate functions operate on groups of rows (or the entire table) and return a single summary value. They are essential for statistical analysis, reporting, and data summarization.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Common Aggregate Functions</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Function</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Ignores NULL</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">MAX()</td>
<td class="border border-gray-300 px-4 py-2">Returns the maximum value</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">MIN()</td>
<td class="border border-gray-300 px-4 py-2">Returns the minimum value</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">SUM()</td>
<td class="border border-gray-300 px-4 py-2">Adds all numeric values</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">AVG()</td>
<td class="border border-gray-300 px-4 py-2">Calculates the average of numeric values</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">COUNT()</td>
<td class="border border-gray-300 px-4 py-2">Counts non-null values in a column</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">COUNT(*)</td>
<td class="border border-gray-300 px-4 py-2">Counts all rows (nulls included)</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Rules for Using Aggregate Functions",
          content: `<ol class="list-decimal list-inside space-y-2 ml-4">
<li><strong>📥 Only One Argument allowed</strong> (usually a column).</li>
<li><strong>❌ Can't use in WHERE</strong> — only in SELECT, HAVING, or ORDER BY.</li>
<li><strong>💡 Use HAVING to filter groups</strong> formed by GROUP BY.</li>
<li><strong>🧹 Ignores NULLs,</strong> except COUNT(*) which counts all rows.</li>
<li><strong>🛠️ Mix only with grouped columns</strong> or use GROUP BY.</li>
</ol>
<p class="mt-4"><strong>⚠️ Important:</strong> When using aggregate functions with non-aggregate columns, you must use GROUP BY to group the data properly.</p>`
        },
        {
          title: "⚙️ Example Queries",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">✅ Total Salary Paid to Employees</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT SUM(salary) AS total_salary_payout
FROM Employees;</code></pre>
<p class="mt-4">This returns a single value representing the sum of all employee salaries.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Count Employees in Each Department</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, COUNT(*) AS total_employees
FROM Employees
GROUP BY department_id;</code></pre>
<p class="mt-4">This groups employees by department and counts how many are in each department.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Average Salary (Excluding NULLs)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT AVG(salary) AS avg_salary
FROM Employees;</code></pre>
<p class="mt-4">Calculates the average salary, automatically ignoring any NULL salary values.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Highest Paid Employee's Salary</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT MAX(salary) AS highest_salary
FROM Employees;</code></pre>
<p class="mt-4">Returns the maximum salary value from all employees.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Count Only Employees With Non-Null Email</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT COUNT(email) AS with_email
FROM Employees;</code></pre>
<p class="mt-4">Counts only the rows where the email column is not NULL.</p>`
        },
        {
          title: "📝 Real-World Analogy",
          content: `<p>Imagine a spreadsheet:</p>
<ul class="list-disc list-inside space-y-2 ml-4 mt-2">
<li><strong>Single-row functions</strong> work like a formula applied to each row separately (like capitalizing names in column C using =UPPER(A1), =UPPER(A2), etc.).</li>
<li><strong>Aggregate functions</strong> work like a formula in the footer row that summarizes the entire column (like using =SUM(B:B) to sum up a salary column).</li>
</ul>
<p class="mt-4">Just as you wouldn't mix individual cell formulas with summary formulas without proper grouping in Excel, SQL requires careful consideration when mixing single-row and aggregate functions.</p>`
        },
        {
          title: "📌 Summary Table",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Function Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Input</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Output</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Use Case Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Single-Row</td>
<td class="border border-gray-300 px-4 py-2">One row</td>
<td class="border border-gray-300 px-4 py-2">One result</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">UPPER(name) converts to uppercase</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Multi-Row</td>
<td class="border border-gray-300 px-4 py-2">Many rows</td>
<td class="border border-gray-300 px-4 py-2">One result</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">SUM(salary) returns total salary</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Advanced Function Usage Tips",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Combine functions:</strong> You can nest functions like <code>ROUND(AVG(salary), 2)</code> to get a rounded average.</li>
<li><strong>Use DISTINCT with aggregates:</strong> <code>COUNT(DISTINCT department_id)</code> counts unique departments.</li>
<li><strong>Handle division by zero:</strong> Use <code>NULLIF()</code> in denominators to avoid errors.</li>
<li><strong>Conditional aggregation:</strong> Use <code>CASE</code> statements within aggregate functions for conditional logic.</li>
<li><strong>Performance consideration:</strong> Aggregate functions can be expensive on large datasets; consider indexing and query optimization.</li>
</ul>`
        },
        {
          title: "🎯 Next Steps",
          content: `<p>Now that you understand SQL functions, you can:</p>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>✅ Practice with exercises & assignments</strong></li>
<li><strong>📊 Create data visualization of grouped summaries</strong></li>
<li><strong>🧪 Take on challenge-based tasks using multiple functions</strong></li>
<li><strong>🔧 Explore advanced functions like window functions and analytical functions</strong></li>
<li><strong>💼 Apply functions to real-world reporting scenarios</strong></li>
</ul>
<p class="mt-4">Functions are the building blocks of powerful SQL queries. Master them, and you'll be able to transform raw data into meaningful insights efficiently!</p>`
        }
      ]
    },
    {
      heading: "SQL Subquery",
      subheadings: [
        {
          title: "📌 Definition",
          content: `<p>A Subquery (also known as a nested query or inner query) is a query written inside another query. It helps solve problems where a single SQL statement isn't sufficient to fetch the required results.</p>
<p class="mt-4">Subqueries provide a powerful way to create complex, multi-step queries that can handle sophisticated data retrieval scenarios. They enable you to break down complex problems into manageable pieces, making your SQL more readable and maintainable.</p>`
        },
        {
          title: "⚙️ Working Principle",
          content: `<p>Think of a subquery as a helper query that provides results to the main (outer) query.</p>
<p class="mt-4"><strong>Let's break it down:</strong></p>
<ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
<li><strong>Inner Query:</strong> Executes first and returns a result (value or set).</li>
<li><strong>Outer Query:</strong> Takes the result of the inner query and uses it as part of its condition or data set.</li>
<li><strong>The outer query is dependent</strong> on the inner query's output to generate the final result.</li>
</ol>
<p class="mt-4">This dependency relationship allows you to create dynamic queries where the filtering or selection criteria are determined by the data itself, rather than hard-coded values.</p>`
        },
        {
          title: "🎯 When & Why to Use Subqueries",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">✅ Case 1: To Handle Unknown Values</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>When the exact value is not known beforehand (e.g., highest salary, lowest marks).</li>
<li>Subquery helps dynamically fetch the required value.</li>
</ul>
<p class="mt-4"><strong>Example:</strong> Get employee(s) with the highest salary.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name, salary
FROM Employees
WHERE salary = (SELECT MAX(salary) FROM Employees);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Case 2: To Access Data from Different Tables</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>When you need to fetch data from one table but filter it using conditions from another.</li>
<li>Subqueries can bridge the gap between unrelated data sources without a JOIN.</li>
</ul>
<p class="mt-4"><strong>Example:</strong> Get names of employees who belong to a department named 'Marketing'.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name
FROM Employees
WHERE department_id = (
  SELECT department_id
  FROM Departments
  WHERE department_name = 'Marketing'
);</code></pre>`
        },
        {
          title: "🧱 Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column1, column2
FROM table1
WHERE columnX operator (
    SELECT columnA
    FROM table2
    WHERE condition
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Important Rules:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>A subquery must be enclosed in parentheses ()</strong></li>
<li><strong>It can return a single value, a list, or even a whole table</strong></li>
<li><strong>The subquery executes first, then the outer query</strong></li>
<li><strong>Subqueries can be nested multiple levels deep</strong></li>
</ul>`
        },
        {
          title: "🔀 Types of Subqueries",
          content: `<p>Understanding the different types of subqueries helps you choose the right approach for your specific data retrieval needs.</p>`
        },
        {
          title: "1️⃣ Single Row Subquery",
          content: `<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Returns a single value (scalar).</strong></li>
<li><strong>Used with operators like =, <, >, <=, >=, <></strong></li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Employees
WHERE salary > (
  SELECT AVG(salary) FROM Employees
);</code></pre>
<p class="mt-4">This query finds all employees who earn more than the average salary. The subquery returns a single value (the average), which is then used for comparison.</p>`
        },
        {
          title: "2️⃣ Multiple Row Subquery",
          content: `<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Returns more than one row.</strong></li>
<li><strong>Used with IN, ANY, ALL, etc.</strong></li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name, department_id
FROM Employees
WHERE department_id IN (
  SELECT department_id
  FROM Departments
  WHERE location = 'New York'
);</code></pre>
<p class="mt-4">This query finds employees who work in any department located in New York. The subquery returns multiple department IDs, and IN checks if the employee's department is among them.</p>`
        },
        {
          title: "3️⃣ Multiple Column Subquery",
          content: `<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Returns more than one column</strong></li>
<li><strong>Used with tuple comparison in the outer query</strong></li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name, last_name
FROM Employees
WHERE (department_id, job_id) IN (
  SELECT department_id, job_id
  FROM Job_Openings
);</code></pre>
<p class="mt-4">This query finds employees whose department and job combination matches any current job opening. The subquery returns pairs of values that are compared as tuples.</p>`
        },
        {
          title: "4️⃣ Correlated Subquery",
          content: `<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Inner query references a column from the outer query</strong></li>
<li><strong>The inner query runs once per outer row</strong></li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name
FROM Employees e
WHERE salary > (
  SELECT AVG(salary)
  FROM Employees
  WHERE department_id = e.department_id
);</code></pre>
<p class="mt-4"><strong>🔁 This subquery is executed repeatedly</strong> — once for each row of the outer query.</p>
<p class="mt-4">This finds employees who earn more than the average salary in their specific department. For each employee, the subquery calculates the average salary for that employee's department.</p>`
        },
        {
          title: "✅ Subquery vs JOIN",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Subquery</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">JOIN</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Readability</td>
<td class="border border-gray-300 px-4 py-2">Easier for nested conditions</td>
<td class="border border-gray-300 px-4 py-2">Easier for combining columns</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Performance</td>
<td class="border border-gray-300 px-4 py-2">May be slower in correlated cases</td>
<td class="border border-gray-300 px-4 py-2">Generally faster on indexed columns</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Use Case</td>
<td class="border border-gray-300 px-4 py-2">Filtering, comparisons</td>
<td class="border border-gray-300 px-4 py-2">Merging datasets side by side</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Data Return</td>
<td class="border border-gray-300 px-4 py-2">Returns rows from outer query only</td>
<td class="border border-gray-300 px-4 py-2">Can return columns from all joined tables</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Complexity</td>
<td class="border border-gray-300 px-4 py-2">Better for complex filtering logic</td>
<td class="border border-gray-300 px-4 py-2">Better for straightforward table relationships</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Practical Examples",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📊 Example 1: Find Departments with Above Average Employee Count</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_name
FROM Departments d
WHERE (
  SELECT COUNT(*)
  FROM Employees e
  WHERE e.department_id = d.department_id
) > (
  SELECT AVG(dept_count)
  FROM (
    SELECT COUNT(*) as dept_count
    FROM Employees
    GROUP BY department_id
  ) as dept_averages
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Example 2: Find Products Never Ordered</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT product_name
FROM Products
WHERE product_id NOT IN (
  SELECT DISTINCT product_id
  FROM Order_Items
  WHERE product_id IS NOT NULL
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Example 3: Find Top Performing Sales Representatives</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT employee_name
FROM Employees
WHERE employee_id IN (
  SELECT sales_rep_id
  FROM Orders
  GROUP BY sales_rep_id
  HAVING SUM(order_total) > (
    SELECT AVG(total_sales)
    FROM (
      SELECT SUM(order_total) as total_sales
      FROM Orders
      GROUP BY sales_rep_id
    ) as rep_totals
  )
);</code></pre>`
        },
        {
          title: "⚠️ Common Pitfalls and Best Practices",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">❌ Common Mistakes:</h4>
<ul class="list-disc list-inside space-y-2 ml-4 mt-2">
<li><strong>Forgetting parentheses</strong> around the subquery</li>
<li><strong>Using = with multiple row subqueries</strong> (use IN instead)</li>
<li><strong>Not handling NULLs</strong> in NOT IN subqueries</li>
<li><strong>Creating unnecessarily complex correlated subqueries</strong></li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Best Practices:</h4>
<ul class="list-disc list-inside space-y-2 ml-4 mt-2">
<li><strong>Use EXISTS instead of IN</strong> when checking for existence</li>
<li><strong>Consider JOINs for better performance</strong> in many cases</li>
<li><strong>Index columns used in subquery conditions</strong></li>
<li><strong>Test subqueries independently</strong> before embedding them</li>
<li><strong>Use meaningful aliases</strong> for clarity in correlated subqueries</li>
</ul>`
        },
        {
          title: "📝 Summary",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>A subquery is a query inside another query.</strong></li>
<li><strong>It runs first and passes data to the outer query.</strong></li>
<li><strong>Ideal when:</strong>
  <ul class="list-disc list-inside ml-8 mt-1">
    <li>The filter condition depends on unknown values.</li>
    <li>Filtering needs data from a different table.</li>
  </ul>
</li>
<li><strong>Can return:</strong>
  <ul class="list-disc list-inside ml-8 mt-1">
    <li>Single value (scalar),</li>
    <li>Multiple values (list),</li>
    <li>Multiple columns (tuples).</li>
  </ul>
</li>
<li><strong>Subqueries are powerful for complex filtering, comparisons, and row-level logic.</strong></li>
<li><strong>Choose between subqueries and JOINs</strong> based on your specific use case and performance requirements.</li>
</ul>`
        },
        {
          title: "🎯 Next Learning Opportunities",
          content: `<p>Now that you understand subqueries, you can explore:</p>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>📊 Subquery-based challenge questions</strong></li>
<li><strong>🧠 Real-world problems solved using subqueries</strong></li>
<li><strong>🆚 Correlated vs Non-correlated examples</strong></li>
<li><strong>🔧 Performance optimization techniques</strong></li>
<li><strong>💼 Advanced subquery patterns and use cases</strong></li>
</ul>
<p class="mt-4">Subqueries are essential for writing sophisticated SQL queries that can handle complex business logic and data relationships!</p>`
        }
      ]
    },
    {
      heading: "Types of Subqueries in SQL",
      subheadings: [
        {
          title: "Understanding Subquery Types: Choosing the Right Approach",
          content: `<p>A Subquery is a query written inside another query, typically used in the WHERE, HAVING, or FROM clause to solve complex problems in a modular way. Understanding the different types helps you choose the most appropriate approach for your specific data retrieval needs.</p>`
        },
        {
          title: "⚙️ Working Principle",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>The inner query executes first</strong> and produces a result.</li>
<li><strong>This result is then used</strong> by the outer query.</li>
<li><strong>Hence, the outer query is dependent</strong> on the inner query.</li>
</ul>
<p class="mt-4">This dependency relationship is what makes subqueries so powerful for creating dynamic, data-driven queries where the filtering criteria are determined by the data itself.</p>`
        },
        {
          title: "✅ 1. Single-Row Subquery",
          content: `<p>A Single-Row Subquery returns only one row as output. These are useful when you know the result of the inner query will be exactly one value.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔑 Key Points:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Returns exactly one value.</strong></li>
<li><strong>Can use standard operators:</strong> =, >, <, >=, <=, <></li>
<li><strong>If more than one row is returned,</strong> the query will throw an error.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">📌 Example 1:</h4>
<p><strong>Get the department name of employee 'ALLEN'.</strong></p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Tables Used:</h4>
<p><strong>EMP Table</strong></p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">EID</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ENAME</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">SAL</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DEPTNO</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">ALLEN</td>
<td class="border border-gray-300 px-4 py-2">1000</td>
<td class="border border-gray-300 px-4 py-2">20</td>
</tr>
</tbody>
</table>
<p><strong>DEPT Table</strong></p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DEPTNO</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DNAME</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">LOC</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">10</td>
<td class="border border-gray-300 px-4 py-2">D1</td>
<td class="border border-gray-300 px-4 py-2">L1</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">20</td>
<td class="border border-gray-300 px-4 py-2">D2</td>
<td class="border border-gray-300 px-4 py-2">L2</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">30</td>
<td class="border border-gray-300 px-4 py-2">D3</td>
<td class="border border-gray-300 px-4 py-2">L3</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Query:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT DNAME
FROM DEPT
WHERE DEPTNO = (
  SELECT DEPTNO
  FROM EMP
  WHERE ENAME = 'ALLEN'
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DNAME</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">D2</td>
</tr>
</tbody>
</table>
<p class="mt-4"><strong>Explanation:</strong> The inner query finds ALLEN's department number (20), then the outer query uses this single value to find the corresponding department name (D2).</p>`
        },
        {
          title: "✅ 2. Multi-Row Subquery",
          content: `<p>A Multi-Row Subquery returns more than one row. These require special operators to handle multiple values.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔑 Key Points:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Returns multiple rows.</strong></li>
<li><strong>Must use special operators:</strong> IN, ANY, ALL, EXISTS.</li>
<li><strong>Using standard operators</strong> (like =, <, etc.) will cause an error.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">📌 Example 2:</h4>
<p><strong>Get department names for employees 'ALLEN' and 'SMITH'.</strong></p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ EMP Table:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ENAME</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DEPTNO</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">ALLEN</td>
<td class="border border-gray-300 px-4 py-2">20</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">SMITH</td>
<td class="border border-gray-300 px-4 py-2">10</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Query:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT DNAME
FROM DEPT
WHERE DEPTNO IN (
  SELECT DEPTNO
  FROM EMP
  WHERE ENAME IN ('ALLEN', 'SMITH')
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DNAME</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">D1</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">D2</td>
</tr>
</tbody>
</table>
<p class="mt-4"><strong>Explanation:</strong> The inner query returns multiple department numbers (10, 20), so we must use IN to check if the department number is among these values.</p>`
        },
        {
          title: "🧠 Best Practices",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>If unsure whether the subquery returns 1 or many rows,</strong> always use special operators like IN, ANY, or EXISTS.</li>
<li><strong>Using = with multi-row subqueries</strong> leads to errors like: <code class="bg-red-100 px-2 py-1 rounded">"subquery returns more than one row"</code></li>
<li><strong>Test your subqueries independently</strong> first to understand their output before embedding them.</li>
<li><strong>Use EXISTS for better performance</strong> when you only need to check for the existence of matching rows.</li>
<li><strong>Consider using DISTINCT in subqueries</strong> to eliminate duplicates when appropriate.</li>
</ul>`
        },
        {
          title: "⚠️ Common Error Scenarios",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">❌ Wrong Approach (Will Cause Error):</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT DNAME
FROM DEPT
WHERE DEPTNO = (  -- ❌ ERROR: Using = with multi-row subquery
  SELECT DEPTNO
  FROM EMP
  WHERE ENAME IN ('ALLEN', 'SMITH')
);</code></pre>
<p class="mt-4"><strong>Error Message:</strong> <code class="bg-red-100 px-2 py-1 rounded text-red-800">"subquery returns more than one row"</code></p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Correct Approach:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT DNAME
FROM DEPT
WHERE DEPTNO IN (  -- ✅ CORRECT: Using IN with multi-row subquery
  SELECT DEPTNO
  FROM EMP
  WHERE ENAME IN ('ALLEN', 'SMITH')
);</code></pre>`
        },
        {
          title: "🧩 Quick Recap Table",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Returns</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operators Allowed</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Single-Row</td>
<td class="border border-gray-300 px-4 py-2">One value</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">=, <>, >, <, <=, >=</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">= (SELECT MAX(sal))</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Multi-Row</td>
<td class="border border-gray-300 px-4 py-2">Many values</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">IN, ANY, ALL, EXISTS</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">IN (SELECT deptno…)</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Advanced Usage Tips",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Use ANY/ALL for comparative operations</strong> with multi-row subqueries:
  <ul class="list-disc list-inside ml-8 mt-1">
    <li><code>salary > ANY (subquery)</code> - greater than at least one value</li>
    <li><code>salary > ALL (subquery)</code> - greater than all values</li>
  </ul>
</li>
<li><strong>EXISTS vs IN:</strong> Use EXISTS when you don't need the actual values, just verification of existence.</li>
<li><strong>Handle NULLs carefully:</strong> NOT IN with NULL values can produce unexpected results.</li>
<li><strong>Performance consideration:</strong> Single-row subqueries are generally faster than multi-row subqueries.</li>
</ul>`
        },
        {
          title: "🎯 Summary",
          content: `<p>Understanding subquery types is crucial for writing correct and efficient SQL queries:</p>
<ul class="list-disc list-inside space-y-2 ml-4 mt-2">
<li><strong>Single-row subqueries</strong> return one value and use standard comparison operators.</li>
<li><strong>Multi-row subqueries</strong> return multiple values and require special operators like IN, ANY, ALL, or EXISTS.</li>
<li><strong>Always consider the expected output</strong> of your subquery when choosing operators.</li>
<li><strong>Test subqueries independently</strong> to avoid runtime errors.</li>
<li><strong>Choose the right type based on your data</strong> and business requirements.</li>
</ul>
<p class="mt-4">Mastering these concepts will help you write more robust and error-free SQL queries!</p>`
        }
      ]
    },
    {
      heading: "Subquery in the FROM Clause",
      subheadings: [
        {
          title: "🔍 What is it?",
          content: `<p>A subquery inside the FROM clause is treated like a temporary table or virtual view. This allows you to first prepare a summarized or filtered version of data and then apply further logic using the outer query.</p>
<p class="mt-4">This powerful technique enables you to create complex, multi-layered queries that can handle sophisticated data processing scenarios. Think of it as creating a custom dataset on-the-fly that you can then query like any regular table.</p>`
        },
        {
          title: "✅ Use Cases",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>When you want to summarize, rank, or group data</strong> before applying additional filters.</li>
<li><strong>Useful for complex joins, aggregations,</strong> and row-level filtering on grouped data.</li>
<li><strong>Creating temporary result sets</strong> for complex calculations without creating actual views.</li>
<li><strong>Implementing business logic</strong> that requires multiple processing steps.</li>
<li><strong>Performance optimization</strong> by pre-filtering or pre-aggregating data.</li>
</ul>`
        },
        {
          title: "🛠 Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT outer_columns
FROM (
    SELECT inner_columns
    FROM table_name
    WHERE condition
) AS temp_alias;</code></pre>
<p class="mt-4"><strong>🧠 Important:</strong> The alias after the subquery is mandatory in most RDBMS like MySQL, PostgreSQL, SQL Server, etc.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Key Components:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Inner subquery:</strong> Prepares the data (filtering, grouping, calculating)</li>
<li><strong>Alias (temp_alias):</strong> Required name to reference the subquery result</li>
<li><strong>Outer query:</strong> Operates on the subquery result as if it were a table</li>
</ul>`
        },
        {
          title: "🔄 Example 1: Aggregate Salary by Department and Filter",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📄 Requirement:</h4>
<p>Display departments where the average salary is greater than 20,000.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">👇 Step-by-step:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>Step 1 (Inner Query):</strong> Group employees by department and calculate average salary.</li>
<li><strong>Step 2 (Outer Query):</strong> Filter those averages > 20000.</li>
</ol>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT dept_avg.deptno, dept_avg.avg_salary
FROM (
    SELECT deptno, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY deptno
) AS dept_avg
WHERE dept_avg.avg_salary > 20000;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Execution Flow:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li>Inner query groups employees by department and calculates average salaries</li>
<li>Result becomes a temporary table named 'dept_avg'</li>
<li>Outer query filters this temporary table to show only departments with avg salary > 20000</li>
</ol>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">deptno</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">avg_salary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">10</td>
<td class="border border-gray-300 px-4 py-2">25000.00</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">30</td>
<td class="border border-gray-300 px-4 py-2">22500.00</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🔄 Example 2: Top-N Query (Find Highest Paid Employee in Each Department)",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT *
FROM (
    SELECT *, 
           RANK() OVER (PARTITION BY deptno ORDER BY salary DESC) AS rnk
    FROM employees
) AS ranked_emps
WHERE rnk = 1;</code></pre>
<p class="mt-4">This finds the top-paid employee in each department using the RANK() window function inside a subquery.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 How it Works:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>Inner query:</strong> Assigns a rank to each employee within their department based on salary (highest first)</li>
<li><strong>Alias 'ranked_emps':</strong> Creates a temporary result set with the rank column</li>
<li><strong>Outer query:</strong> Filters to show only employees with rank = 1 (highest paid in each dept)</li>
</ol>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">emp_id</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">deptno</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">salary</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">rnk</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">101</td>
<td class="border border-gray-300 px-4 py-2">John Smith</td>
<td class="border border-gray-300 px-4 py-2">10</td>
<td class="border border-gray-300 px-4 py-2">50000</td>
<td class="border border-gray-300 px-4 py-2">1</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">205</td>
<td class="border border-gray-300 px-4 py-2">Jane Doe</td>
<td class="border border-gray-300 px-4 py-2">20</td>
<td class="border border-gray-300 px-4 py-2">48000</td>
<td class="border border-gray-300 px-4 py-2">1</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🧠 Benefits of FROM Clause Subqueries",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Benefit</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🧹 Code modularity</td>
<td class="border border-gray-300 px-4 py-2">Break down complex logic into manageable parts</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">🔍 Reusable logic</td>
<td class="border border-gray-300 px-4 py-2">You can reuse aggregates or filters without repeating them</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">🔄 Layered querying</td>
<td class="border border-gray-300 px-4 py-2">Helps when filtering aggregated data</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">🧪 Acts like temporary views</td>
<td class="border border-gray-300 px-4 py-2">The subquery behaves like a temporary table</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">⚡ Performance optimization</td>
<td class="border border-gray-300 px-4 py-2">Can improve performance by reducing data set size early</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">🔧 Complex calculations</td>
<td class="border border-gray-300 px-4 py-2">Enables multi-step calculations and transformations</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Advanced Examples",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">🔄 Example 3: Complex Business Logic - Monthly Sales Report</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    monthly_sales.month,
    monthly_sales.total_sales,
    monthly_sales.avg_order_value,
    CASE 
        WHEN monthly_sales.total_sales > 50000 THEN 'Excellent'
        WHEN monthly_sales.total_sales > 30000 THEN 'Good'
        ELSE 'Needs Improvement'
    END AS performance_rating
FROM (
    SELECT 
        DATE_FORMAT(order_date, '%Y-%m') AS month,
        SUM(order_total) AS total_sales,
        AVG(order_total) AS avg_order_value,
        COUNT(*) AS order_count
    FROM orders
    WHERE order_date >= '2024-01-01'
    GROUP BY DATE_FORMAT(order_date, '%Y-%m')
) AS monthly_sales
ORDER BY monthly_sales.month;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔄 Example 4: Combining Multiple Aggregations</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    dept_stats.deptno,
    dept_stats.emp_count,
    dept_stats.avg_salary,
    dept_stats.max_salary - dept_stats.min_salary AS salary_range
FROM (
    SELECT 
        deptno,
        COUNT(*) AS emp_count,
        AVG(salary) AS avg_salary,
        MAX(salary) AS max_salary,
        MIN(salary) AS min_salary
    FROM employees
    GROUP BY deptno
    HAVING COUNT(*) >= 3
) AS dept_stats
WHERE dept_stats.avg_salary > 25000;</code></pre>`
        },
        {
          title: "⚠️ Important Notes",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>You must use an alias</strong> for the subquery result.</li>
<li><strong>Cannot refer to inner alias columns directly outside</strong> unless properly selected.</li>
<li><strong>Supported in all major databases:</strong> MySQL, PostgreSQL, SQL Server, Oracle.</li>
<li><strong>Performance consideration:</strong> Complex subqueries in FROM can be expensive; consider indexing and optimization.</li>
<li><strong>Readability:</strong> While powerful, don't over-complicate; sometimes a view or CTE might be clearer.</li>
<li><strong>Column selection:</strong> Only columns selected in the subquery are available to the outer query.</li>
</ul>`
        },
        {
          title: "🆚 FROM Subquery vs Other Approaches",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Approach</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Pros</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Cons</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">FROM Subquery</td>
<td class="border border-gray-300 px-4 py-2">Self-contained, no permanent objects</td>
<td class="border border-gray-300 px-4 py-2">Can be complex, harder to reuse</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">VIEW</td>
<td class="border border-gray-300 px-4 py-2">Reusable, easier to maintain</td>
<td class="border border-gray-300 px-4 py-2">Creates permanent database object</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">CTE (WITH clause)</td>
<td class="border border-gray-300 px-4 py-2">More readable, can be recursive</td>
<td class="border border-gray-300 px-4 py-2">Not supported in all older databases</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Temporary Table</td>
<td class="border border-gray-300 px-4 py-2">Can be indexed, better for large datasets</td>
<td class="border border-gray-300 px-4 py-2">Requires cleanup, more overhead</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Summary",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Subqueries in FROM are known as inline views.</strong></li>
<li><strong>Used to process data in steps</strong> — prepare, then filter.</li>
<li><strong>Required alias makes them act like temporary tables.</strong></li>
<li><strong>Extremely powerful for complex reporting, ranking, and aggregation scenarios.</strong></li>
<li><strong>Essential for advanced SQL techniques</strong> like window functions, complex joins, and multi-level aggregations.</li>
<li><strong>Choose wisely</strong> between FROM subqueries, views, CTEs, and temporary tables based on your specific needs.</li>
</ul>
<p class="mt-4"><strong>🎯 Master this technique</strong> and you'll be able to handle even the most complex data analysis requirements with confidence!</p>`
        }
      ]
    },
    {
      heading: "Subquery Inside the HAVING Clause",
      subheadings: [
        {
          title: "🔍 What is it?",
          content: `<p>A subquery in the HAVING clause allows you to filter grouped data based on a comparison with another dataset. It is typically used after aggregating data using GROUP BY, when you need to compare aggregated values to those from another query.</p>
<p class="mt-4">This powerful technique enables you to create dynamic filtering conditions that change based on calculated values, making your queries more flexible and data-driven. Think of it as applying conditional logic to groups of data rather than individual rows.</p>`
        },
        {
          title: "🛠 Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column1, AGG_FUNC(column2)
FROM table_name
GROUP BY column1
HAVING AGG_FUNC(column2) > (
    SELECT AGG_FUNC(column3)
    FROM another_table
    WHERE condition
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">Key Components:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>GROUP BY:</strong> Groups the data first</li>
<li><strong>AGG_FUNC:</strong> Aggregate functions like AVG(), SUM(), COUNT(), etc.</li>
<li><strong>HAVING:</strong> Filters the grouped results</li>
<li><strong>Subquery:</strong> Provides the comparison value dynamically</li>
</ul>`
        },
        {
          title: "✅ Why Use It?",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>To compare group-level data with overall statistics.</strong></li>
<li><strong>Filter groups based on dynamic thresholds</strong> (calculated from subqueries).</li>
<li><strong>Helps write powerful, layered queries</strong> with logical group filtering.</li>
<li><strong>Enables business intelligence queries</strong> that compare departmental performance to company averages.</li>
<li><strong>Creates flexible reporting logic</strong> that adapts to changing data conditions.</li>
<li><strong>Eliminates the need for hardcoded values</strong> in filtering conditions.</li>
</ul>`
        },
        {
          title: "📘 Example 1: Departments With Above-Average Salary",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📄 Goal:</h4>
<p>Find departments where the average salary is greater than the overall average salary of all employees.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT deptno, AVG(salary) AS avg_sal
FROM employees
GROUP BY deptno
HAVING AVG(salary) > (
    SELECT AVG(salary)
    FROM employees
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Explanation:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Inner subquery:</strong> Gets average salary of the whole company</li>
<li><strong>Outer query:</strong> Gets average salary per department</li>
<li><strong>HAVING:</strong> Filters departments with above-average salary</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">deptno</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">avg_sal</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">10</td>
<td class="border border-gray-300 px-4 py-2">28500.00</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">30</td>
<td class="border border-gray-300 px-4 py-2">23200.00</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📘 Example 2: Products That Sell More Than Total Sales of Category 'Electronics'",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT category, SUM(sales) AS total_sales
FROM products
GROUP BY category
HAVING SUM(sales) > (
    SELECT SUM(sales)
    FROM products
    WHERE category = 'Electronics'
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Explanation:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Inner subquery:</strong> Gets total sales of Electronics category</li>
<li><strong>Outer query:</strong> Filters out other categories with higher sales than Electronics</li>
<li><strong>Business Logic:</strong> Shows which product categories are outperforming Electronics</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">category</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">total_sales</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Clothing</td>
<td class="border border-gray-300 px-4 py-2">185000.00</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Home & Garden</td>
<td class="border border-gray-300 px-4 py-2">142500.00</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📘 Example 3: Customers Who Spent More Than a Specific User",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📄 Goal:</h4>
<p>Find customers who have spent more than 'John Doe'.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT customer_id, SUM(order_total) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(order_total) > (
    SELECT SUM(order_total)
    FROM orders
    WHERE customer_id = (
        SELECT customer_id
        FROM customers
        WHERE customer_name = 'John Doe'
    )
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 This is a nested subquery inside a subquery inside HAVING, useful when you want to:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>First get 'John Doe's ID'</strong> from the customers table</li>
<li><strong>Then get his total spend</strong> from the orders table</li>
<li><strong>Finally, compare all other customers' spend</strong> with his</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">customer_id</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">total_spent</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">C001</td>
<td class="border border-gray-300 px-4 py-2">5200.00</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">C015</td>
<td class="border border-gray-300 px-4 py-2">4850.00</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🧠 Notes & Best Practices",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Rule / Tip</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">GROUP BY is mandatory</td>
<td class="border border-gray-300 px-4 py-2">You must group the data to use HAVING</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Use only aggregate functions in HAVING</td>
<td class="border border-gray-300 px-4 py-2">e.g., AVG(), SUM(), COUNT(), MAX(), MIN()</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Subquery must return a single value</td>
<td class="border border-gray-300 px-4 py-2">Use = or >, not IN, unless the logic expects multiple values</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Don't confuse WHERE and HAVING</td>
<td class="border border-gray-300 px-4 py-2">WHERE filters rows before grouping, HAVING filters after</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Performance consideration</td>
<td class="border border-gray-300 px-4 py-2">Subqueries in HAVING are executed for each group; optimize accordingly</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Test subqueries independently</td>
<td class="border border-gray-300 px-4 py-2">Always verify your subquery returns expected results</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Advanced Example: Multi-Level Business Intelligence",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📄 Scenario: Regional Performance Analysis</h4>
<p>Find regions where quarterly sales exceeded the average of the top 3 performing regions:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT 
    region,
    quarter,
    SUM(sales_amount) AS quarterly_sales
FROM sales
WHERE year = 2024
GROUP BY region, quarter
HAVING SUM(sales_amount) > (
    SELECT AVG(top_region_sales) 
    FROM (
        SELECT SUM(sales_amount) AS top_region_sales
        FROM sales
        WHERE year = 2024
        GROUP BY region
        ORDER BY SUM(sales_amount) DESC
        LIMIT 3
    ) AS top_performers
)
ORDER BY quarterly_sales DESC;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Complex Logic Breakdown:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>Innermost subquery:</strong> Gets total sales for each region, ordered by performance</li>
<li><strong>LIMIT 3:</strong> Takes only top 3 performing regions</li>
<li><strong>Middle subquery:</strong> Calculates average of these top 3 regions</li>
<li><strong>Outer query:</strong> Shows quarterly performance that beats this elite average</li>
</ol>`
        },
        {
          title: "✅ Summary",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">HAVING with Subquery</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">When Used</td>
<td class="border border-gray-300 px-4 py-2">After GROUP BY</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Purpose</td>
<td class="border border-gray-300 px-4 py-2">Filter groups based on dynamic aggregated data</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Allows Subqueries?</td>
<td class="border border-gray-300 px-4 py-2">Yes — subqueries must return scalar values</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Benefits</td>
<td class="border border-gray-300 px-4 py-2">Clean, powerful, and logical grouped filtering</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Use Cases</td>
<td class="border border-gray-300 px-4 py-2">Business intelligence, performance comparisons, dynamic thresholds</td>
</tr>
</tbody>
</table>
<p class="mt-4"><strong>🎯 Key Takeaway:</strong> HAVING with subqueries is essential for sophisticated data analysis where you need to compare group-level metrics against calculated benchmarks. Master this technique to create powerful business intelligence queries that adapt to your data!</p>`
        }
      ]
    },
    {
      heading: "🔗 What Are Nested Subqueries?",
      subheadings: [
        {
          title: "🔍 What Are Nested Subqueries?",
          content: `<p>A nested subquery is a subquery placed inside another subquery, which in turn may also be inside another SQL statement. It's like a query within a query within a query, where each inner query serves as input to its outer query.</p>
<p class="mt-4">Think of nested subqueries as Russian nesting dolls (Matryoshka) - each layer contains another layer, and you need to work from the innermost layer outward to get the complete result. This powerful technique allows you to solve complex multi-step problems that require sequential data filtering and processing.</p>`
        },
        {
          title: "📚 Why Use Nested Subqueries?",
          content: `<p>Nested subqueries help when:</p>
<ul class="list-disc list-inside space-y-2 ml-4 mt-2">
<li><strong>You need multiple levels of filtering or calculation</strong> that can't be achieved with simple WHERE conditions</li>
<li><strong>Data is spread across different tables,</strong> requiring multi-layer conditions to establish relationships</li>
<li><strong>You're trying to resolve multiple unknowns step by step</strong> - where each step depends on the previous one</li>
<li><strong>Complex business logic</strong> requires sequential data processing that builds upon previous results</li>
<li><strong>You need to drill down through hierarchical data</strong> or organizational structures</li>
<li><strong>Performance optimization</strong> by narrowing down datasets progressively</li>
</ul>`
        },
        {
          title: "🛠 General Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column
FROM table
WHERE some_column = (
    SELECT column
    FROM table
    WHERE other_column = (
        SELECT column
        FROM another_table
        WHERE condition
    )
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔄 Execution Flow:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>Innermost subquery</strong> executes first (deepest level)</li>
<li><strong>Result feeds into</strong> the next outer subquery</li>
<li><strong>Process continues outward</strong> until the main query executes</li>
<li><strong>Final result</strong> is returned to the user</li>
</ol>`
        },
        {
          title: "✅ Example 1: Get Employee Name from Highest Paid Department",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📊 Tables:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Employees:</strong> (emp_id, emp_name, salary, dept_id)</li>
<li><strong>Departments:</strong> (dept_id, dept_name)</li>
</ul>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT emp_name
FROM employees
WHERE dept_id = (
    SELECT dept_id
    FROM employees
    GROUP BY dept_id
    ORDER BY AVG(salary) DESC
    LIMIT 1
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Step-by-Step Execution:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>Inner subquery:</strong> Find the department with highest average salary</li>
<li><strong>Outer query:</strong> Get employee names from that specific department</li>
</ol>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">emp_name</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Alice Johnson</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Bob Smith</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Carol Davis</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Example 2: Get Customers with Orders Above Average of a Specific Category",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📊 Table:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>orders:</strong> (order_id, customer_id, total_amount, category)</li>
</ul>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT customer_id
FROM orders
GROUP BY customer_id
HAVING SUM(total_amount) > (
    SELECT AVG(total_amount)
    FROM orders
    WHERE category = 'Electronics'
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Business Logic:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>Subquery:</strong> Calculate average order amount for Electronics category</li>
<li><strong>Main query:</strong> Find customers whose total spending exceeds that Electronics average</li>
<li><strong>Use case:</strong> Identify high-value customers compared to Electronics category benchmark</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">customer_id</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">C001</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">C007</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">C012</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Example 3: Get Employees Working Under Manager Who Works in 'HR'",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📊 Tables:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>employees:</strong> (emp_id, emp_name, manager_id, dept_id)</li>
<li><strong>departments:</strong> (dept_id, dept_name)</li>
</ul>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT emp_name
FROM employees
WHERE manager_id = (
    SELECT emp_id
    FROM employees
    WHERE dept_id = (
        SELECT dept_id
        FROM departments
        WHERE dept_name = 'HR'
    )
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Here we go 3 levels deep:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>Level 3 (Innermost):</strong> Get dept_id of HR department</li>
<li><strong>Level 2:</strong> Get employee ID of manager working in HR</li>
<li><strong>Level 1 (Outer):</strong> Get all employees under that HR manager</li>
</ol>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">emp_name</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Jennifer Wilson</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Michael Brown</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Sarah Miller</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Key Notes",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Concept</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Execution Order</td>
<td class="border border-gray-300 px-4 py-2">Innermost subquery runs first, and result passes upward</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Return Types</td>
<td class="border border-gray-300 px-4 py-2">Usually must return single values or used with IN/ANY/ALL</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Nesting Limit</td>
<td class="border border-gray-300 px-4 py-2">Most databases allow nesting up to 32 levels</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Performance</td>
<td class="border border-gray-300 px-4 py-2">Too many nested levels can slow down queries. Use CTEs as an alternative if needed</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Debugging</td>
<td class="border border-gray-300 px-4 py-2">Test each subquery level independently for easier troubleshooting</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Readability</td>
<td class="border border-gray-300 px-4 py-2">Keep nesting to reasonable levels; consider CTEs for complex scenarios</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🧩 Comparison: Nested Subquery vs. Flat Subquery",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Flat Subquery</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Nested Subquery</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Depth</td>
<td class="border border-gray-300 px-4 py-2">1 level</td>
<td class="border border-gray-300 px-4 py-2">2 or more levels</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Readability</td>
<td class="border border-gray-300 px-4 py-2">Easier to understand</td>
<td class="border border-gray-300 px-4 py-2">Can be harder to debug</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Use Case</td>
<td class="border border-gray-300 px-4 py-2">Simple filters</td>
<td class="border border-gray-300 px-4 py-2">Complex filters/multi-table joins</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Alternatives</td>
<td class="border border-gray-300 px-4 py-2">JOIN, simple WHERE</td>
<td class="border border-gray-300 px-4 py-2">CTE, Common Table Expressions</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Performance</td>
<td class="border border-gray-300 px-4 py-2">Generally faster</td>
<td class="border border-gray-300 px-4 py-2">Can be slower with deep nesting</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Complexity</td>
<td class="border border-gray-300 px-4 py-2">Low to medium</td>
<td class="border border-gray-300 px-4 py-2">Medium to high</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🔁 Bonus: Nested Subqueries with IN",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">📄 Scenario: Find Employees in Indian Locations</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT emp_name
FROM employees
WHERE dept_id IN (
    SELECT dept_id
    FROM departments
    WHERE location_id IN (
        SELECT location_id
        FROM locations
        WHERE country = 'India'
    )
);</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Multi-Level IN Operation:</h4>
<ol class="list-decimal list-inside space-y-1 ml-4 mt-2">
<li><strong>Innermost:</strong> Get all location_ids in India (returns multiple values)</li>
<li><strong>Middle:</strong> Get all dept_ids in those Indian locations (returns multiple values)</li>
<li><strong>Outer:</strong> Get all employees in those departments</li>
</ol>
<h4 class="text-lg font-semibold mt-4 mb-2">🎯 Key Insight:</h4>
<p>When using <code>IN</code> with nested subqueries, each level can return multiple values, making this technique perfect for hierarchical filtering across related tables.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Sample Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">emp_name</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Rajesh Kumar</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Priya Sharma</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Amit Patel</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Sunita Singh</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "⚡ Performance Tips & Best Practices",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">🚀 Optimization Strategies:</h4>
<ul class="list-disc list-inside space-y-2 ml-4 mt-2">
<li><strong>Index optimization:</strong> Ensure columns used in subqueries are properly indexed</li>
<li><strong>Limit nesting depth:</strong> Keep to 3-4 levels maximum for maintainability</li>
<li><strong>Test incrementally:</strong> Verify each subquery level works correctly before nesting</li>
<li><strong>Consider alternatives:</strong> CTEs (WITH clauses) often provide better readability</li>
<li><strong>Use EXPLAIN:</strong> Analyze query execution plans to identify bottlenecks</li>
<li><strong>Filter early:</strong> Apply most selective conditions in innermost queries</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🔧 When to Use Alternatives:</h4>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li><strong>JOINs:</strong> When you need data from multiple tables in the result</li>
<li><strong>CTEs:</strong> When you need to reuse subquery results or improve readability</li>
<li><strong>Temporary tables:</strong> For very complex processing with large datasets</li>
<li><strong>Window functions:</strong> For ranking and analytical operations</li>
</ul>`
        },
        {
          title: "✅ Summary",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Nested subqueries allow multi-level querying</strong> for complex requirements that can't be solved with simple queries.</li>
<li><strong>They follow a bottom-up execution model</strong> — inner to outer, like peeling layers of an onion.</li>
<li><strong>Use them when direct joins or flat subqueries can't solve your logic</strong> — especially for hierarchical or sequential filtering.</li>
<li><strong>Keep an eye on performance</strong> — for complex use cases, consider using WITH clauses (CTEs) instead.</li>
<li><strong>Maximum benefit comes from</strong> understanding when to use them vs. alternatives like JOINs, CTEs, or window functions.</li>
<li><strong>Essential for complex business logic</strong> that requires step-by-step data resolution and multi-table relationships.</li>
</ul>
<p class="mt-4"><strong>🎯 Master nested subqueries</strong> and you'll be able to tackle even the most complex data retrieval challenges that require multi-step logical processing!</p>`
        }
      ]
    },
    {
      heading: "SQL Operators",
      subheadings: [
        {
          title: "Understanding SQL Operators: The Building Blocks of Data Manipulation",
          content: `<p>SQL operators are fundamental building blocks used to manipulate, compare, and filter data. They form the logic behind expressions and conditions used in queries.</p>
<p class="mt-4">These operators enable you to perform calculations, combine strings, compare values, and create complex logical conditions that power everything from simple filtering to advanced data analysis.</p>`
        },
        {
          title: "1️⃣ 🧮 Arithmetic Operators",
          content: `<p>Used to perform basic mathematical calculations on numeric columns or values.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example Expression</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">+</td>
<td class="border border-gray-300 px-4 py-2">Addition</td>
<td class="border border-gray-300 px-4 py-2 font-mono">salary + bonus</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">-</td>
<td class="border border-gray-300 px-4 py-2">Subtraction</td>
<td class="border border-gray-300 px-4 py-2 font-mono">price - discount</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">*</td>
<td class="border border-gray-300 px-4 py-2">Multiplication</td>
<td class="border border-gray-300 px-4 py-2 font-mono">quantity * rate</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">/</td>
<td class="border border-gray-300 px-4 py-2">Division</td>
<td class="border border-gray-300 px-4 py-2 font-mono">total / 2</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name, salary, bonus, salary + bonus AS total_income
FROM Employees;</code></pre>`
        },
        {
          title: "2️⃣ 🔗 Concatenation Operator",
          content: `<p>Used to combine two or more strings together.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">DBMS</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example Syntax</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Standard SQL / PostgreSQL / Oracle</td>
<td class="border border-gray-300 px-4 py-2 font-mono">||</td>
<td class="border border-gray-300 px-4 py-2 font-mono">first_name || ' ' || last_name AS full_name</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">SQL Server</td>
<td class="border border-gray-300 px-4 py-2 font-mono">+</td>
<td class="border border-gray-300 px-4 py-2 font-mono">first_name + ' ' + last_name AS full_name</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example (Standard SQL):</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name || ' ' || last_name AS full_name
FROM Employees;</code></pre>`
        },
        {
          title: "3️⃣ ⚖️ Comparison Operators",
          content: `<p>Used to compare values in conditional expressions, often in WHERE, CASE, and JOIN clauses.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">=</td>
<td class="border border-gray-300 px-4 py-2">Equal to</td>
<td class="border border-gray-300 px-4 py-2 font-mono">salary = 50000</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">!=</td>
<td class="border border-gray-300 px-4 py-2">Not equal to</td>
<td class="border border-gray-300 px-4 py-2 font-mono">department_id != 10</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold"><></td>
<td class="border border-gray-300 px-4 py-2">Also not equal to</td>
<td class="border border-gray-300 px-4 py-2 font-mono">grade <> 'A'</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Employees
WHERE department_id <> 10;</code></pre>`
        },
        {
          title: "4️⃣ 🔍 Relational Operators",
          content: `<p>Used to compare magnitude between values.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">></td>
<td class="border border-gray-300 px-4 py-2">Greater than</td>
<td class="border border-gray-300 px-4 py-2 font-mono">salary > 60000</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold"><</td>
<td class="border border-gray-300 px-4 py-2">Less than</td>
<td class="border border-gray-300 px-4 py-2 font-mono">age < 30</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">>=</td>
<td class="border border-gray-300 px-4 py-2">Greater than or equal</td>
<td class="border border-gray-300 px-4 py-2 font-mono">rating >= 4.5</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold"><=</td>
<td class="border border-gray-300 px-4 py-2">Less than or equal</td>
<td class="border border-gray-300 px-4 py-2 font-mono">price <= 1000</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Products
WHERE price >= 500 AND price <= 1000;</code></pre>`
        },
        {
          title: "5️⃣ 🧠 Logical Operators",
          content: `<p>Used to combine multiple conditions. Return a Boolean result: TRUE, FALSE, or UNKNOWN.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">AND</td>
<td class="border border-gray-300 px-4 py-2">TRUE if both conditions are true</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">OR</td>
<td class="border border-gray-300 px-4 py-2">TRUE if at least one condition is true</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">NOT</td>
<td class="border border-gray-300 px-4 py-2">Reverses the result of the condition</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Employees
WHERE department_id = 10 AND salary > 50000;</code></pre>`
        },
        {
          title: "6️⃣ 🔁 Subquery Operators",
          content: `<p>These are used to compare a value to the results of a subquery.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">ALL</td>
<td class="border border-gray-300 px-4 py-2">Compares value to all results of a subquery</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">ANY or SOME</td>
<td class="border border-gray-300 px-4 py-2">Compares value to any (at least one) result of a subquery</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">EXISTS</td>
<td class="border border-gray-300 px-4 py-2">Returns TRUE if the subquery returns at least one row</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">NOT EXISTS</td>
<td class="border border-gray-300 px-4 py-2">Returns TRUE if the subquery returns no rows</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Examples for Each:</h4>
<p><strong>• ALL:</strong> Return employees earning more than all interns.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name
FROM Employees
WHERE salary > ALL (
  SELECT salary FROM Interns
);</code></pre>
<p class="mt-4"><strong>• ANY:</strong> Return employees earning more than at least one intern.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name
FROM Employees
WHERE salary > ANY (
  SELECT salary FROM Interns
);</code></pre>
<p class="mt-4"><strong>• EXISTS:</strong> Return departments that have at least one employee.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name
FROM Departments d
WHERE EXISTS (
  SELECT 1 FROM Employees e WHERE e.department_id = d.id
);</code></pre>
<p class="mt-4"><strong>• NOT EXISTS:</strong> Return departments with no employees.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name
FROM Departments d
WHERE NOT EXISTS (
  SELECT 1 FROM Employees e WHERE e.department_id = d.id
);</code></pre>`
        },
        {
          title: "✅ Summary Table",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Category</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operators</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Arithmetic</td>
<td class="border border-gray-300 px-4 py-2 font-mono">+, -, *, /</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Concatenation</td>
<td class="border border-gray-300 px-4 py-2 font-mono">|| (Standard), + (SQL Server)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Comparison</td>
<td class="border border-gray-300 px-4 py-2 font-mono">=, !=, <></td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Relational</td>
<td class="border border-gray-300 px-4 py-2 font-mono">>, <, >=, <=</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Logical</td>
<td class="border border-gray-300 px-4 py-2 font-mono">AND, OR, NOT</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Subquery</td>
<td class="border border-gray-300 px-4 py-2 font-mono">ALL, ANY / SOME, EXISTS, NOT EXISTS</td>
</tr>
</tbody>
</table>`
        }
      ]
    },
    {
      heading: "Special Operators in SQL",
      subheadings: [
        {
          title: "Understanding Special Operators: Advanced Filtering and Pattern Matching",
          content: `<p>Special operators are used in SQL to handle advanced comparisons such as range checks, list matching, null evaluations, and pattern matching. These operators are commonly used in the WHERE, HAVING, and ON clauses to filter records with greater flexibility.</p>
<p class="mt-4">These operators provide powerful alternatives to basic comparison operators and enable more sophisticated data filtering scenarios that are common in real-world applications.</p>`
        },
        {
          title: "1️⃣ IN Operator",
          content: `<p><strong>Purpose:</strong> Checks if a value matches any value in a specified list.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>column_name IN (value1, value2, value3, ...)</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name, department_id
FROM Employees
WHERE department_id IN (10, 20, 30);</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> Employees who belong to department 10, 20, or 30.</p>`
        },
        {
          title: "2️⃣ NOT IN Operator",
          content: `<p><strong>Purpose:</strong> Filters out records that match any value in the given list.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>column_name NOT IN (value1, value2, ...)</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT employee_id, first_name
FROM Employees
WHERE employee_id NOT IN (101, 102, 103);</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> All employees except those with IDs 101, 102, and 103.</p>
<p class="mt-4"><strong>⚠️ Note:</strong> If the list contains a NULL, the query may return no results due to unknown logic. Always validate your data.</p>`
        },
        {
          title: "3️⃣ BETWEEN Operator",
          content: `<p><strong>Purpose:</strong> Checks if a value lies within a specified range (inclusive).</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>column_name BETWEEN value1 AND value2</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT first_name, salary
FROM Employees
WHERE salary BETWEEN 30000 AND 60000;</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> Employees with salaries ranging from ₹30,000 to ₹60,000 (both included).</p>`
        },
        {
          title: "4️⃣ NOT BETWEEN Operator",
          content: `<p><strong>Purpose:</strong> Selects values that do not fall within the given range.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>column_name NOT BETWEEN value1 AND value2</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name, age
FROM Customers
WHERE age NOT BETWEEN 25 AND 40;</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> Customers who are younger than 25 or older than 40.</p>`
        },
        {
          title: "5️⃣ IS NULL Operator",
          content: `<p><strong>Purpose:</strong> Finds records where a column has no value (i.e., NULL).</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>column_name IS NULL</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT employee_id, email
FROM Employees
WHERE email IS NULL;</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> Employees whose email addresses are missing.</p>`
        },
        {
          title: "6️⃣ IS NOT NULL Operator",
          content: `<p><strong>Purpose:</strong> Filters records that do contain values (i.e., not NULL).</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>column_name IS NOT NULL</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT employee_id, phone_number
FROM Employees
WHERE phone_number IS NOT NULL;</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> Employees with available phone numbers.</p>`
        },
        {
          title: "7️⃣ LIKE Operator",
          content: `<p><strong>Purpose:</strong> Performs pattern-based text searches using wildcards.</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Wildcard</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">%</td>
<td class="border border-gray-300 px-4 py-2">Any number of characters</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">_</td>
<td class="border border-gray-300 px-4 py-2">A single character</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>column_name LIKE 'pattern'</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name
FROM Students
WHERE name LIKE 'A%';</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> All student names starting with the letter "A".</p>`
        },
        {
          title: "8️⃣ NOT LIKE Operator",
          content: `<p><strong>Purpose:</strong> Retrieves records that do not match the specified pattern.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>column_name NOT LIKE 'pattern'</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔸 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name
FROM Students
WHERE name NOT LIKE '%son';</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> Excludes names that end with "son" (e.g., Johnson, Anderson).</p>`
        },
        {
          title: "🔍 Real-World Combined Example",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT student_id, name, marks, grade
FROM Students
WHERE 
    marks BETWEEN 60 AND 90
    AND grade IS NOT NULL
    AND name LIKE 'S%';</code></pre>
<p class="mt-4"><strong>✅ Returns:</strong> Students scoring between 60 and 90 (inclusive), whose grade is available, and whose name starts with "S".</p>`
        },
        {
          title: "✅ Summary Table",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Operator</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">IN</td>
<td class="border border-gray-300 px-4 py-2">Match value within a list</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">department_id IN (10, 20, 30)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">NOT IN</td>
<td class="border border-gray-300 px-4 py-2">Exclude values from a list</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">employee_id NOT IN (101, 102)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">BETWEEN</td>
<td class="border border-gray-300 px-4 py-2">Check value in a range (inclusive)</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">salary BETWEEN 30000 AND 60000</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">NOT BETWEEN</td>
<td class="border border-gray-300 px-4 py-2">Exclude range of values</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">age NOT BETWEEN 25 AND 40</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">IS NULL</td>
<td class="border border-gray-300 px-4 py-2">Check for missing (null) values</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">email IS NULL</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">IS NOT NULL</td>
<td class="border border-gray-300 px-4 py-2">Check for present (non-null) values</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">email IS NOT NULL</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">LIKE</td>
<td class="border border-gray-300 px-4 py-2">Pattern match using % and _</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">name LIKE 'A%'</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">NOT LIKE</td>
<td class="border border-gray-300 px-4 py-2">Pattern mismatch</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">name NOT LIKE '%son'</td>
</tr>
</tbody>
</table>`
        }
      ]
    },
    {
      heading: "WHERE Clause in SQL",
      subheadings: [
        {
          title: "Understanding the WHERE Clause: Your Data's Gatekeeper",
          content: `<p>The WHERE clause is one of the most essential components of any SQL query. It is used to filter records from a table based on specific conditions.</p>
<p class="mt-4">Without the WHERE clause, SQL operations like SELECT, UPDATE, or DELETE would affect all rows in the table — which is often not the desired outcome.</p>`
        },
        {
          title: "🧠 Why Use the WHERE Clause?",
          content: `<p>The WHERE clause lets you:</p>
<ul class="list-disc list-inside space-y-1 ml-4 mt-2">
<li>Retrieve only rows that match a condition</li>
<li>Prevent accidental updates/deletes of entire tables</li>
<li>Perform more focused data analysis</li>
<li>Apply logical filters like comparisons, ranges, patterns, and NULL checks</li>
</ul>`
        },
        {
          title: "🛠 Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column1, column2, ...
FROM table_name
WHERE condition;</code></pre>
<p class="mt-4">You can also use WHERE with UPDATE, DELETE, and even subqueries:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>UPDATE table_name
SET column = value
WHERE condition;

DELETE FROM table_name
WHERE condition;</code></pre>`
        },
        {
          title: "🎯 How to Use — Types of Conditions",
          content: `<p>You can apply various types of logical conditions:</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Condition Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Syntax Example</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Equality</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">salary = 50000</td>
<td class="border border-gray-300 px-4 py-2">Match exact value</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Inequality</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">salary &lt;&gt; 50000 or !=</td>
<td class="border border-gray-300 px-4 py-2">Not equal to</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Greater/Less Than</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">age &gt; 25, salary &lt;= 70000</td>
<td class="border border-gray-300 px-4 py-2">Compare numeric or date values</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Pattern Matching</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">name LIKE 'S%'</td>
<td class="border border-gray-300 px-4 py-2">Wildcard pattern (%, _)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Range Check</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">age BETWEEN 20 AND 30</td>
<td class="border border-gray-300 px-4 py-2">Match between two values</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Set Membership</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">dept_id IN (1, 2, 3)</td>
<td class="border border-gray-300 px-4 py-2">Match against multiple values</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">NULL Check</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">email IS NULL</td>
<td class="border border-gray-300 px-4 py-2">Identify missing (NULL) data</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Logical Combinations</td>
<td class="border border-gray-300 px-4 py-2 font-mono text-sm">condition1 AND condition2</td>
<td class="border border-gray-300 px-4 py-2">Combine multiple filters</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📌 Importance of the WHERE Clause",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Without WHERE</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">With WHERE</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Returns or modifies all rows</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">Filters to only relevant rows</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">Can cause data loss</td>
<td class="border border-gray-300 px-4 py-2">Prevents accidental updates/deletes</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">Slower performance</td>
<td class="border border-gray-300 px-4 py-2">More efficient queries</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Less useful for analytics</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">Enables targeted reporting</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Examples",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">1. Selecting Employees in Department 10</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Employees
WHERE department_id = 10;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">2. Find products with price greater than ₹5000</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT product_name, price
FROM Products
WHERE price > 5000;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">3. Update only one user's email</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>UPDATE Users
SET email = 'newmail@example.com'
WHERE user_id = 101;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">4. Delete records of employees hired before 2020</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DELETE FROM Employees
WHERE hire_date < '2020-01-01';</code></pre>`
        },
        {
          title: "🔍 Pro Tip: Combine Multiple Conditions",
          content: `<p>You can build complex filters using AND, OR, and parentheses:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT * FROM Orders
WHERE status = 'shipped' AND (order_date >= '2024-01-01' OR customer_id = 102);</code></pre>`
        },
        {
          title: "✅ Summary",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>The WHERE clause filters rows</strong> based on conditions.</li>
<li><strong>Used in SELECT, UPDATE, DELETE,</strong> etc.</li>
<li><strong>Critical for data safety,</strong> query performance, and precise control.</li>
<li><strong>Supports a variety of comparisons,</strong> pattern matches, and logical combinations.</li>
</ul>`
        }
      ]
    },
    {
      heading: "GROUP BY Clause in SQL",
      subheadings: [
        {
          title: "Understanding GROUP BY: Organizing Data into Meaningful Groups",
          content: `<p>The GROUP BY clause is used to group rows that have the same values in specified columns into summary rows, like "total salary per department" or "count of employees by job title".</p>
<p class="mt-4">It's typically used with aggregate functions like SUM(), AVG(), COUNT(), MAX(), MIN() to perform calculations on each group of data.</p>`
        },
        {
          title: "✅ Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT group_expression, aggregate_function
FROM table_name
[WHERE filter_condition]
GROUP BY group_expression;</code></pre>`
        },
        {
          title: "🔍 How It Works (Execution Flow)",
          content: `<ol class="list-decimal list-inside space-y-2 ml-4">
<li><strong>FROM clause:</strong> Loads the base data from the table.</li>
<li><strong>WHERE clause (optional):</strong> Filters the data before grouping.</li>
<li><strong>GROUP BY clause:</strong> Groups the remaining rows by the specified column(s).</li>
<li><strong>SELECT clause:</strong> Computes aggregate values for each group.</li>
<li><strong>HAVING clause (optional):</strong> Filters the grouped data after aggregation.</li>
</ol>`
        },
        {
          title: "📝 Important Notes",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>You must use only group expressions or aggregate functions</strong> in the SELECT clause when GROUP BY is used.</li>
<li><strong>If a column is included in the SELECT,</strong> it must also appear in the GROUP BY unless it's inside an aggregate function.</li>
<li><strong>GROUP BY works row-by-row</strong> and forms groups based on the specified column(s).</li>
<li><strong>NULLs are treated as one group</strong> when present in grouped columns.</li>
</ul>`
        },
        {
          title: "Examples:",
          content: `<p>Let's explore GROUP BY through practical examples that demonstrate its power in data analysis.</p>`
        },
        {
          title: "📌 Example 1: Basic Grouping",
          content: `<p><strong>Problem:</strong> Find the total salary paid in each department.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, SUM(salary) AS total_salary
FROM Employees
GROUP BY department_id;</code></pre>`
        },
        {
          title: "📌 Example 2: Count Employees by Job Role",
          content: `<p><strong>Problem:</strong> How many employees work in each job position?</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT job_title, COUNT(*) AS num_employees
FROM Employees
GROUP BY job_title;</code></pre>`
        },
        {
          title: "📌 Example 3: Multiple Columns in Group By",
          content: `<p><strong>Problem:</strong> Total salary by department and job title.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, job_title, SUM(salary) AS total
FROM Employees
GROUP BY department_id, job_title;</code></pre>`
        },
        {
          title: "📌 Example 4: Using WHERE with GROUP BY",
          content: `<p><strong>Problem:</strong> Count how many employees were hired after 2020, grouped by department.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, COUNT(*) AS hires_after_2020
FROM Employees
WHERE hire_date > '2020-01-01'
GROUP BY department_id;</code></pre>`
        },
        {
          title: "📌 Example 5: Using HAVING to Filter Groups",
          content: `<p><strong>Problem:</strong> Find departments that have more than 5 employees.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, COUNT(*) AS total_employees
FROM Employees
GROUP BY department_id
HAVING COUNT(*) > 5;</code></pre>`
        },
        {
          title: "📌 Example 6: Average Salary Greater than 60,000 by Department",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department_id, AVG(salary) AS avg_salary
FROM Employees
GROUP BY department_id
HAVING AVG(salary) > 60000;</code></pre>`
        },
        {
          title: "📌 Example 7: Grouping with NULL Values",
          content: `<p>If any column used in GROUP BY has NULL values, all those nulls are grouped together:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT manager_id, COUNT(*) AS team_size
FROM Employees
GROUP BY manager_id;</code></pre>
<p class="mt-4"><strong>➡ Result:</strong> manager_id = NULL will appear as one group.</p>`
        },
        {
          title: "✅ Summary Table",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Step</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">FROM</td>
<td class="border border-gray-300 px-4 py-2">Loads table</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">WHERE</td>
<td class="border border-gray-300 px-4 py-2">Filters row-wise (optional)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">GROUP BY</td>
<td class="border border-gray-300 px-4 py-2">Groups rows based on one or more columns</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">SELECT</td>
<td class="border border-gray-300 px-4 py-2">Applies aggregate functions per group</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">HAVING</td>
<td class="border border-gray-300 px-4 py-2">Filters grouped results after aggregation (optional)</td>
</tr>
</tbody>
</table>`
        }
      ]
    },
    {
      heading: "What Is a Join in SQL?",
      subheadings: [
        {
          title: "Understanding SQL Joins: Connecting Related Data",
          content: `<p>A JOIN in SQL is used to retrieve data by combining rows from two or more tables based on a related column (usually a primary key in one table and a foreign key in another).</p>
<p class="mt-4">It enables you to answer questions that no single table can answer on its own — such as "Which customers placed which orders?" or "Who are the employees and their reporting managers?"</p>`
        },
        {
          title: "🧰 Why Do We Need Joins?",
          content: `<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>Data is often normalized</strong> into smaller, efficient tables.</li>
<li><strong>Joins rebuild logical relationships</strong> from this normalized structure.</li>
<li><strong>They allow for comprehensive results</strong> across related datasets.</li>
</ul>`
        },
        {
          title: "🧩 Types of SQL Joins (Explained with Purpose)",
          content: `<p>Here are the main types of joins in SQL and what they do:</p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Join Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">INNER JOIN</td>
<td class="border border-gray-300 px-4 py-2">Retrieves only rows with matching values in both tables.</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">LEFT JOIN</td>
<td class="border border-gray-300 px-4 py-2">Fetches all rows from the left table, plus matches from the right.</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">RIGHT JOIN</td>
<td class="border border-gray-300 px-4 py-2">Fetches all rows from the right table, plus matches from the left.</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">FULL OUTER JOIN</td>
<td class="border border-gray-300 px-4 py-2">Retrieves all rows from both tables, with NULLs for non-matches.</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">SELF JOIN</td>
<td class="border border-gray-300 px-4 py-2">Allows a table to be joined to itself — ideal for hierarchies.</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">CROSS JOIN</td>
<td class="border border-gray-300 px-4 py-2">Returns the Cartesian product of two tables — every combination.</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">NATURAL JOIN</td>
<td class="border border-gray-300 px-4 py-2">Automatically joins on all common column names — caution recommended.</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📐 Join Syntax Overview",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT columns
FROM table1
[INNER | LEFT | RIGHT | FULL OUTER] JOIN table2
ON table1.column_name = table2.column_name;</code></pre>
<p class="mt-4">Use aliases (e.g., e, d) for better readability in complex queries.</p>`
        },
        {
          title: "🧪 Types of Joins – Short Summary",
          content: `<p>Let's explore each join type with practical examples to understand their behavior and use cases.</p>`
        },
        {
          title: "1. 🔍 INNER JOIN",
          content: `<p><strong>Returns:</strong> Only records with matching keys in both tables.</p>
<p><strong>Use case:</strong> Show only customers who have placed orders.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT c.name, o.product
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID;</code></pre>`
        },
        {
          title: "2. 🧭 LEFT JOIN (or LEFT OUTER JOIN)",
          content: `<p><strong>Returns:</strong> All records from the left table + matches from the right.</p>
<p><strong>Use case:</strong> Find customers who haven't placed any orders.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT c.name, o.product
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID;</code></pre>`
        },
        {
          title: "3. 🔄 RIGHT JOIN (or RIGHT OUTER JOIN)",
          content: `<p><strong>Returns:</strong> All records from the right table + matches from the left.</p>
<p><strong>Use case:</strong> View all orders, even if the customer no longer exists in the system.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT c.name, o.product
FROM Customers c
RIGHT JOIN Orders o ON c.CustomerID = o.CustomerID;</code></pre>`
        },
        {
          title: "4. 🔄 FULL OUTER JOIN",
          content: `<p><strong>Returns:</strong> All records from both tables; fills NULLs where no match.</p>
<p><strong>Use case:</strong> Combine customer and order data, even if one side is missing.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT c.name, o.product
FROM Customers c
FULL OUTER JOIN Orders o ON c.CustomerID = o.CustomerID;</code></pre>`
        },
        {
          title: "5. 🪞 SELF JOIN",
          content: `<p><strong>Returns:</strong> Rows matched within the same table.</p>
<p><strong>Use case:</strong> Match employees with their managers.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT e.name AS Employee, m.name AS Manager
FROM Employees e
LEFT JOIN Employees m ON e.ManagerID = m.EmployeeID;</code></pre>`
        },
        {
          title: "6. 🧮 CROSS JOIN",
          content: `<p><strong>Returns:</strong> Every possible pair (Cartesian product).</p>
<p><strong>Use case:</strong> Generate all combinations — useful in simulations, permutations, etc.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT c.name, p.product
FROM Customers c
CROSS JOIN Products p;</code></pre>`
        },
        {
          title: "7. ⚠️ NATURAL JOIN",
          content: `<p><strong>Returns:</strong> Automatically joins on all columns with the same name.</p>
<p><strong>Use case:</strong> Quick join when both tables share same column names, though discouraged in strict environments.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name, product
FROM Customers
NATURAL JOIN Orders;</code></pre>
<p class="mt-4"><strong>✅ Tip:</strong> Natural joins are shorthand but can break when table structures evolve. Use with caution.</p>`
        },
        {
          title: "🔐 Key Best Practices",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>✅ Always define your ON condition clearly</strong> for precise joins.</li>
<li><strong>✅ Use COALESCE() or IS NULL</strong> to handle missing data in outer joins.</li>
<li><strong>✅ Index join columns</strong> (especially in large datasets) to boost performance.</li>
<li><strong>✅ Alias your tables</strong> for cleaner, readable queries.</li>
<li><strong>❌ Avoid NATURAL JOIN in production</strong> unless you're confident in the schema.</li>
<li><strong>⚠️ Double-check your join logic</strong> when mixing INNER, LEFT, and RIGHT joins.</li>
</ul>`
        },
        {
          title: "🧠 Final Thoughts",
          content: `<p>Joins are the cornerstone of relational databases, turning fragmented information into valuable insights. Mastering joins empowers you to navigate even the most complex data models with confidence.</p>`
        }
      ]
    },
    {
      heading: "INNER JOIN - Retrieving Matching Records",
      subheadings: [
        {
          title: "🔍 Understanding INNER JOIN",
          content: `<p>An INNER JOIN is used to retrieve only those rows that have matching values in both tables. If there's no match between the two tables based on the specified condition, the row is excluded from the result.</p>`
        },
        {
          title: "🧠 How It Works",
          content: `<p>A JOIN condition tells the database how two tables are related. It is usually based on a common column (like an ID or foreign key).</p>
<p class="mt-4">Only the rows that satisfy the JOIN condition (i.e., have a match in both tables) will be returned in the result set.</p>`
        },
        {
          title: "🔗 Join Condition Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>table1.column = table2.column</code></pre>
<p class="mt-4">This condition links the related rows in the two tables.</p>`
        },
        {
          title: "📐 Syntax",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">✅ ANSI SQL Standard:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT table1.column, table2.column
FROM table1
INNER JOIN table2
ON table1.common_column = table2.common_column;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ MySQL Equivalent:</h4>
<p>Same as ANSI:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT table1.column, table2.column
FROM table1
INNER JOIN table2
ON table1.common_column = table2.common_column;</code></pre>`
        },
        {
          title: "📊 Example Scenario",
          content: `<p>Let's consider two tables: Customers and Orders.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">Table: Customers</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">CustomerID</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Alice</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">2</td>
<td class="border border-gray-300 px-4 py-2">Bob</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">3</td>
<td class="border border-gray-300 px-4 py-2">Charlie</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">4</td>
<td class="border border-gray-300 px-4 py-2">Diana</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">Table: Orders</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">OrderID</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">CustomerID</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Product</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">101</td>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">102</td>
<td class="border border-gray-300 px-4 py-2">2</td>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">103</td>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Keyboard</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">104</td>
<td class="border border-gray-300 px-4 py-2">3</td>
<td class="border border-gray-300 px-4 py-2">Monitor</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ INNER JOIN Query",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT Customers.Name, Orders.Product
FROM Customers
INNER JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔍 Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Product</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Keyboard</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Charlie</td>
<td class="border border-gray-300 px-4 py-2">Monitor</td>
</tr>
</tbody>
</table>
<p class="mt-4"><strong>🎯 Diana does not appear in the result</strong> because she has no orders. Only matching rows are included.</p>`
        },
        {
          title: "💡 Popular Use Cases of INNER JOIN",
          content: `<ol class="list-decimal list-inside space-y-2 ml-4">
<li><strong>Customer Orders</strong><br>
Show customers and their order history.</li>
<li><strong>Employee Departments</strong><br>
Join Employees and Departments tables to show employee names with their department names.</li>
<li><strong>Product Suppliers</strong><br>
Link Products with Suppliers to list which supplier provides which product.</li>
</ol>`
        },
        {
          title: "✅ Summary",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Type</td>
<td class="border border-gray-300 px-4 py-2">INNER JOIN</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Matching</td>
<td class="border border-gray-300 px-4 py-2">Only matching rows from both tables</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Join Condition Needed</td>
<td class="border border-gray-300 px-4 py-2">Yes (ON table1.col = table2.col)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Syntax (MySQL/ANSI)</td>
<td class="border border-gray-300 px-4 py-2">Same for both</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Use Cases</td>
<td class="border border-gray-300 px-4 py-2">Orders, Departments, Inventory Joins</td>
</tr>
</tbody>
</table>`
        }
      ]
    },
    {
      heading: "SQL: Outer Join - Including Unmatched Records",
      subheadings: [
        {
          title: "🔍 Understanding OUTER JOIN",
          content: `<p>An OUTER JOIN is used when you want to include rows even if there is no matching record in the joined table. Unlike INNER JOIN, which returns only matched records, OUTER JOIN returns matched + unmatched rows depending on the type of OUTER JOIN used.</p>`
        },
        {
          title: "🔍 Types of OUTER JOIN",
          content: `<p>SQL supports three kinds of OUTER JOINS:</p>
<ol class="list-decimal list-inside space-y-1 ml-4">
<li><strong>✅ LEFT OUTER JOIN</strong> (or simply LEFT JOIN)</li>
<li><strong>✅ RIGHT OUTER JOIN</strong> (or simply RIGHT JOIN)</li>
<li><strong>✅ FULL OUTER JOIN</strong></li>
</ol>`
        },
        {
          title: "1️⃣ LEFT OUTER JOIN",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">🧠 Concept:</h4>
<p>Returns all records from the left table, and the matched records from the right table. If no match is found in the right table, it returns NULL.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📐 ANSI Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT t1.column, t2.column
FROM table1 t1
LEFT OUTER JOIN table2 t2
ON t1.common_column = t2.common_column;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🐬 MySQL Syntax: (same as ANSI)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT t1.column, t2.column
FROM table1 t1
LEFT JOIN table2 t2
ON t1.common_column = t2.common_column;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Example: Customers and Orders</h4>
<p><strong>✅ Query:</strong></p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT Customers.Name, Orders.Product
FROM Customers
LEFT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;</code></pre>
<p><strong>✅ Output:</strong></p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Product</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Keyboard</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Charlie</td>
<td class="border border-gray-300 px-4 py-2">Monitor</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Diana</td>
<td class="border border-gray-300 px-4 py-2 italic text-gray-500">NULL ← No order</td>
</tr>
</tbody>
</table>
<p class="mt-4"><strong>🔁 Returns all customers;</strong> for those without orders (like Diana), Product is NULL.</p>`
        },
        {
          title: "2️⃣ RIGHT OUTER JOIN",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">🧠 Concept:</h4>
<p>Returns all records from the right table, and the matched records from the left table. If no match is found in the left table, it returns NULL.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📐 ANSI Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT t1.column, t2.column
FROM table1 t1
RIGHT OUTER JOIN table2 t2
ON t1.common_column = t2.common_column;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🐬 MySQL Syntax: (same as ANSI)</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT t1.column, t2.column
FROM table1 t1
RIGHT JOIN table2 t2
ON t1.common_column = t2.common_column;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Example: Customers and Orders</h4>
<p><strong>✅ Query:</strong></p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT Customers.Name, Orders.Product
FROM Customers
RIGHT JOIN Orders
ON Customers.CustomerID = Orders.CustomerID;</code></pre>
<p><strong>✅ Output:</strong></p>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Product</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Keyboard</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Charlie</td>
<td class="border border-gray-300 px-4 py-2">Monitor</td>
</tr>
</tbody>
</table>
<p class="mt-4">Returns all orders — even if the customer record is missing (none in this case).</p>`
        },
        {
          title: "3️⃣ FULL OUTER JOIN",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">🧠 Concept:</h4>
<p>Returns all records when there is a match in either left or right table. If there is no match, it returns NULLs for the missing side.</p>
<p class="mt-4"><strong>⚠️ Note:</strong> Not supported natively in MySQL. Can be emulated using UNION.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">📐 ANSI Syntax (SQL Server, PostgreSQL, Oracle):</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT t1.column, t2.column
FROM table1 t1
FULL OUTER JOIN table2 t2
ON t1.common_column = t2.common_column;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🐬 MySQL Emulation:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT t1.column, t2.column
FROM table1 t1
LEFT JOIN table2 t2 ON t1.col = t2.col

UNION

SELECT t1.column, t2.column
FROM table1 t1
RIGHT JOIN table2 t2 ON t1.col = t2.col;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">📊 Example Output (from UNION of LEFT and RIGHT):</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Product</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Keyboard</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Charlie</td>
<td class="border border-gray-300 px-4 py-2">Monitor</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Diana</td>
<td class="border border-gray-300 px-4 py-2 italic text-gray-500">NULL</td>
</tr>
</tbody>
</table>
<p class="mt-4">You get every customer and every order—even if there's no matching pair.</p>`
        },
        {
          title: "✅ Summary Table: Types of Outer Joins",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Join Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Keeps All From</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Fills NULLs From</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Use Case Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">LEFT OUTER JOIN</td>
<td class="border border-gray-300 px-4 py-2">Left Table</td>
<td class="border border-gray-300 px-4 py-2">Right Table</td>
<td class="border border-gray-300 px-4 py-2">Find all customers, including those with no orders</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">RIGHT OUTER JOIN</td>
<td class="border border-gray-300 px-4 py-2">Right Table</td>
<td class="border border-gray-300 px-4 py-2">Left Table</td>
<td class="border border-gray-300 px-4 py-2">See all orders, even from deleted customers</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">FULL OUTER JOIN</td>
<td class="border border-gray-300 px-4 py-2">Both Tables</td>
<td class="border border-gray-300 px-4 py-2">Both Tables</td>
<td class="border border-gray-300 px-4 py-2">Combine both — complete data view</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📌 Popular Real-Life Use Cases",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>LEFT JOIN:</strong> Show all students with or without exam results.</li>
<li><strong>RIGHT JOIN:</strong> Show all shipments, even if product info is missing.</li>
<li><strong>FULL OUTER JOIN:</strong> Get a report of all employees and all departments, matched or not.</li>
</ul>`
        }
      ]
    },
    {
      heading: "SQL: Cartesian Join (Cross Join)",
      subheadings: [
        {
          title: "🧠 Understanding Cartesian Join (Cross Join)",
          content: `<p>A Cartesian Join (also known as a Cross Join) is a type of join that returns the Cartesian product of two tables. This means it pairs every row from the first table with every row from the second table — regardless of whether they are logically related or not.</p>`
        },
        {
          title: "🧠 Concept",
          content: `<p>When no join condition is specified between two tables, SQL performs a Cartesian Join by default.</p>
<p class="mt-4"><strong>💡 Each row from Table A is matched with every row from Table B.</strong></p>
<p class="mt-4">This type of join is often used for:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Testing or debugging queries</li>
<li>Generating all possible combinations</li>
<li>Identifying mismatched or orphan records when used with LEFT JOIN + filters</li>
</ul>`
        },
        {
          title: "📐 Mathematical Representation",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Number of Columns in Result</strong><br>
= Columns in Table 1 + Columns in Table 2</li>
<li><strong>Number of Rows in Result</strong><br>
= Rows in Table 1 × Rows in Table 2</li>
</ul>`
        },
        {
          title: "🧪 Syntax",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">✅ ANSI SQL Standard:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT *
FROM Table1
CROSS JOIN Table2;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ MySQL Equivalent:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT *
FROM Table1, Table2;</code></pre>
<p class="mt-4"><strong>⚠️ Be careful!</strong> If you forget to provide a JOIN condition, MySQL will return a Cartesian product by default.</p>`
        },
        {
          title: "📊 Example Tables",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">Table: Products</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ProductID</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ProductName</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">2</td>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">Table: Colors</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ColorID</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ColorName</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Black</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">2</td>
<td class="border border-gray-300 px-4 py-2">Silver</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">3</td>
<td class="border border-gray-300 px-4 py-2">White</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🔍 Cartesian Join Output",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT p.ProductName, c.ColorName
FROM Products p
CROSS JOIN Colors c;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🎯 Result:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ProductName</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ColorName</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
<td class="border border-gray-300 px-4 py-2">Black</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Laptop</td>
<td class="border border-gray-300 px-4 py-2">Silver</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
<td class="border border-gray-300 px-4 py-2">White</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Mouse</td>
<td class="border border-gray-300 px-4 py-2">Black</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
<td class="border border-gray-300 px-4 py-2">Silver</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Mouse</td>
<td class="border border-gray-300 px-4 py-2">White</td>
</tr>
</tbody>
</table>
<ul class="list-disc list-inside space-y-1 ml-4 mt-4">
<li><strong>✅ Rows returned</strong> = 2 products × 3 colors = 6</li>
<li><strong>✅ Columns</strong> = 1 (from Products) + 1 (from Colors) = 2</li>
</ul>`
        },
        {
          title: "🧰 Popular Real-World Use Cases",
          content: `<ol class="list-decimal list-inside space-y-2 ml-4">
<li><strong>Generating Combinations</strong><br>
E.g., all product-color or product-size combinations for inventory.</li>
<li><strong>Mock Testing</strong><br>
Testing forms or reports with every possible scenario.</li>
<li><strong>Cross-Referencing</strong><br>
For building pivot-like structures by pairing all categories vs. regions, etc.</li>
</ol>`
        },
        {
          title: "⚠️ Caution!",
          content: `<p>A Cartesian Join can produce extremely large datasets if both tables have many rows.</p>
<p class="mt-4"><strong>🚨 Always double-check your logic</strong> to ensure this join is intentional — not a result of forgetting a join condition.</p>`
        },
        {
          title: "✅ Summary",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Output Row Count</td>
<td class="border border-gray-300 px-4 py-2">Rows_T1 × Rows_T2</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Output Column Count</td>
<td class="border border-gray-300 px-4 py-2">Cols_T1 + Cols_T2</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Syntax (MySQL)</td>
<td class="border border-gray-300 px-4 py-2 font-mono">SELECT * FROM T1, T2;</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Syntax (ANSI SQL)</td>
<td class="border border-gray-300 px-4 py-2 font-mono">SELECT * FROM T1 CROSS JOIN T2;</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Primary Use</td>
<td class="border border-gray-300 px-4 py-2">Testing, simulation, combinations</td>
</tr>
</tbody>
</table>`
        }
      ]
    },
    {
      heading: "SQL: Natural Join - Automatic Column Matching",
      subheadings: [
        {
          title: "📘 Definition:",
          content: `<p>A <strong>NATURAL JOIN</strong> automatically joins two tables based on all columns with the same name and compatible data types in both tables. It eliminates the need to specify the join condition manually.</p>
<p class="mt-4">It behaves like:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>An <strong>INNER JOIN</strong>, if matching columns (based on name and type) exist in both tables.</li>
<li>A <strong>CROSS JOIN</strong>, if no matching column exists between the tables — combining every row of one table with every row of the other.</li>
</ul>`
        },
        {
          title: "🔍 Behavior Summary",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Condition</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Result Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Matching column exists</td>
<td class="border border-gray-300 px-4 py-2 font-semibold text-green-600">Behaves like INNER JOIN</td>
<td class="border border-gray-300 px-4 py-2">Joins only matching rows</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">No matching column</td>
<td class="border border-gray-300 px-4 py-2 font-semibold text-orange-600">Behaves like CROSS JOIN</td>
<td class="border border-gray-300 px-4 py-2">Joins all combinations of rows</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🔧 Syntax",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT column_list
FROM table1
NATURAL JOIN table2;</code></pre>
<p class="mt-4"><strong>⚠️ Note:</strong> You cannot use <code>ON</code> or <code>USING</code> with NATURAL JOIN. The matching happens automatically using same-named columns.</p>`
        },
        {
          title: "🧾 Example Tables:",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">Customers</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">customer_id</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">city</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">New York</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">2</td>
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">London</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">3</td>
<td class="border border-gray-300 px-4 py-2">Charlie</td>
<td class="border border-gray-300 px-4 py-2">Tokyo</td>
</tr>
</tbody>
</table>
<h4 class="text-lg font-semibold mt-4 mb-2">Orders</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">order_id</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">customer_id</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">product</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">101</td>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">102</td>
<td class="border border-gray-300 px-4 py-2">2</td>
<td class="border border-gray-300 px-4 py-2">Keyboard</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">103</td>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
</tr>
</tbody>
</table>
<p class="mt-4">Both tables have a column named <strong>customer_id</strong>.</p>`
        },
        {
          title: "✅ Query using NATURAL JOIN:",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name, product
FROM Customers
NATURAL JOIN Orders;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">product</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Laptop</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Mouse</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">Keyboard</td>
</tr>
</tbody>
</table>
<p class="mt-4">Matches customers with their orders using the shared column <strong>customer_id</strong>.</p>`
        },
        {
          title: "🧨 Caution: No Matching Column = CROSS JOIN",
          content: `<p>If the Orders table did not have a <strong>customer_id</strong> column, the NATURAL JOIN would behave like a <strong>CROSS JOIN</strong>, generating a Cartesian product (i.e., every row from Customers joined with every row from Orders).</p>
<div class="bg-orange-50 border-l-4 border-orange-400 p-4 mt-4">
<p class="text-orange-800"><strong>⚠️ Warning:</strong> This can create unexpectedly large result sets if you're not careful with your table structure!</p>
</div>`
        },
        {
          title: "✅ Best Practices and Warnings",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Always know your table structure.</strong> Unintended joins may occur if there are multiple columns with the same name but different semantics.</li>
<li><strong>NATURAL JOIN is concise but less explicit.</strong> For better control, prefer using INNER JOIN with ON conditions.</li>
<li><strong>Use NATURAL JOIN only when you are confident</strong> about schema consistency across both tables.</li>
</ul>
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
<p class="text-blue-800"><strong>💡 Recommendation:</strong> While NATURAL JOIN can save typing, explicit JOIN conditions with ON clauses are generally preferred in production code for clarity and maintainability.</p>
</div>`
        }
      ]
    },
    {
      heading: "JOIN: Self Join - Joining a Table with Itself",
      subheadings: [
        {
          title: "📖 Definition:",
          content: `<p>A <strong>SELF JOIN</strong> is a type of SQL join in which a table is joined with itself. It's useful when rows in the same table are related to each other.</p>`
        },
        {
          title: "🧠 When to Use SELF JOIN",
          content: `<p>Use a self join when:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>You want to compare rows within the same table.</li>
<li>You need hierarchical or relational data from the same table.</li>
<li>You want to find relationships like manager-employee, friend-of-friend, mentor-mentee, etc.</li>
</ul>`
        },
        {
          title: "🔧 Syntax",
          content: `<h4 class="text-lg font-semibold mt-4 mb-2">✅ ANSI Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT e1.column_name, e2.column_name
FROM table_name e1
JOIN table_name e2
ON e1.common_column = e2.common_column;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🐬 MySQL Syntax:</h4>
<p>Same as ANSI. MySQL fully supports aliases in joins:</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT e1.Name AS Employee, e2.Name AS Manager
FROM Employees e1
JOIN Employees e2
ON e1.ManagerID = e2.EmployeeID;</code></pre>
<p class="mt-4"><strong>✅ Note:</strong> To join n copies of the same table, you must write n - 1 join conditions and give each instance a different alias.</p>`
        },
        {
          title: "📊 Example Table: Employees",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">EmployeeID</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ManagerID</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">1</td>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">3</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">2</td>
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">3</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">3</td>
<td class="border border-gray-300 px-4 py-2">Charlie</td>
<td class="border border-gray-300 px-4 py-2 italic text-gray-500">NULL</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">4</td>
<td class="border border-gray-300 px-4 py-2">David</td>
<td class="border border-gray-300 px-4 py-2">1</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">5</td>
<td class="border border-gray-300 px-4 py-2">Eva</td>
<td class="border border-gray-300 px-4 py-2">2</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🔍 Example Query 1: Find employees with their managers",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT e1.Name AS Employee, e2.Name AS Manager
FROM Employees e1
JOIN Employees e2
ON e1.ManagerID = e2.EmployeeID;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Employee</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Manager</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Charlie</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">Charlie</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2">David</td>
<td class="border border-gray-300 px-4 py-2">Alice</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Eva</td>
<td class="border border-gray-300 px-4 py-2">Bob</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🔍 Example Query 2: Find employees working under the same manager",
          content: `<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT e1.Name AS Emp1, e2.Name AS Emp2, e1.ManagerID
FROM Employees e1
JOIN Employees e2
ON e1.ManagerID = e2.ManagerID
WHERE e1.EmployeeID <> e2.EmployeeID;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">✅ Output:</h4>
<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Emp1</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Emp2</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">ManagerID</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">3</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2">Bob</td>
<td class="border border-gray-300 px-4 py-2">Alice</td>
<td class="border border-gray-300 px-4 py-2">3</td>
</tr>
</tbody>
</table>
<p class="mt-4"><strong>🎯 Here, both employees report to the same manager — Charlie.</strong></p>`
        },
        {
          title: "🧠 Best Practices",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>Always use table aliases</strong> (e1, e2) to clearly distinguish between the same table's instances.</li>
<li><strong>Avoid infinite self-joins</strong>—make sure the join condition doesn't create circular references.</li>
<li><strong>Use IS NULL or LEFT JOIN</strong> if you want to include employees without managers (e.g., CEO-level).</li>
</ul>`
        }
      ]
    },
    {
      heading: "Transaction Control Language (TCL) in SQL",
      subheadings: [
        {
          title: "📖 Introduction to TCL",
          content: `<p>TCL is used to manage <strong>transactions</strong> in a database. A transaction is a single logical unit of work that consists of one or more DML (Data Manipulation Language) operations like INSERT, UPDATE, or DELETE.</p>
<p class="mt-4">TCL helps ensure data integrity and provides control over the changes made by these DML operations.</p>`
        },
        {
          title: "✅ 1. COMMIT",
          content: `<p>The <strong>COMMIT</strong> statement is used to save all changes made by the transaction permanently into the database.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>COMMIT;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Behavior:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Makes changes visible to all users.</li>
<li>Releases any locks held by the transaction.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>UPDATE Employees
SET salary = salary + 1000
WHERE department_id = 10;

COMMIT;</code></pre>
<p class="mt-4">Here, the salary update becomes permanent and cannot be undone.</p>`
        },
        {
          title: "🔄 2. ROLLBACK",
          content: `<p>The <strong>ROLLBACK</strong> statement is used to undo changes made in the current transaction before a COMMIT is issued.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>ROLLBACK;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Behavior:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Reverts all uncommitted changes made during the current transaction.</li>
<li>Takes the database back to its last committed state.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>DELETE FROM Employees
WHERE employee_id = 105;

-- If this was a mistake
ROLLBACK;</code></pre>
<p class="mt-4">This undoes the delete operation if COMMIT hasn't been issued yet.</p>`
        },
        {
          title: "🧷 3. SAVEPOINT",
          content: `<p>The <strong>SAVEPOINT</strong> command is used to set a restore point within a transaction. You can rollback to a specific savepoint without affecting all prior changes.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SAVEPOINT savepoint_name;</code></pre>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>UPDATE Employees SET salary = salary + 500 WHERE department_id = 10;
SAVEPOINT sp1;

UPDATE Employees SET salary = salary + 1000 WHERE department_id = 20;
SAVEPOINT sp2;

ROLLBACK TO sp1;  -- Undo second update, retain first one

COMMIT;</code></pre>
<p class="mt-4">This example shows partial rollback using a savepoint.</p>`
        },
        {
          title: "🔐 Summary of TCL Commands",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Reversible?</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Affects Database</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">COMMIT</td>
<td class="border border-gray-300 px-4 py-2">Makes changes permanent</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">ROLLBACK</td>
<td class="border border-gray-300 px-4 py-2">Undoes uncommitted changes</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No (to last COMMIT)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">SAVEPOINT</td>
<td class="border border-gray-300 px-4 py-2">Sets a point to roll back to within a transaction</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No (used for control)</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Important Notes",
          content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
<ul class="list-disc list-inside space-y-2 ml-4 text-blue-800">
<li><strong>TCL commands only apply to DML operations</strong> (INSERT, UPDATE, DELETE).</li>
<li><strong>DDL commands</strong> like CREATE, ALTER, and DROP are auto-committed and cannot be rolled back.</li>
</ul>
</div>`
        }
      ]
    },
    {
      heading: "🔑 Data Control Language (DCL) - Managing Access & Security",
      subheadings: [
        {
          title: "📖 Introduction to DCL",
          content: `<p><strong>Data Control Language (DCL)</strong> is used to regulate access to data in a database. In a multi-user environment, it's critical to control who can access or modify database objects like tables, views, procedures, and more.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔑 Purpose of DCL:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>To define user-level security and data access permissions.</li>
<li>To protect sensitive data from unauthorized access or manipulation.</li>
<li>To enable role-based control over database operations.</li>
</ul>
<p class="mt-4">DCL includes two major commands:</p>`
        },
        {
          title: "✅ 1. GRANT — Assigning Privileges",
          content: `<p>The <strong>GRANT</strong> statement is used to give specific permissions to users or roles so they can perform operations like SELECT, INSERT, UPDATE, and DELETE on database objects.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>GRANT privilege_list
ON object_name
TO user_or_role;</code></pre>
<ul class="list-disc list-inside space-y-1 ml-4 mt-4">
<li><strong>privilege_list:</strong> A list of operations to be permitted (e.g., SELECT, INSERT, UPDATE, ALL, etc.).</li>
<li><strong>object_name:</strong> The database object on which permissions are being granted (e.g., a table or view).</li>
<li><strong>user_or_role:</strong> The recipient of the permission (this could be a specific user or a database role).</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🧠 Explanation:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>The command tells the database: "Allow this user to perform these specific actions on this object."</li>
<li>This is useful when you want different users to have different levels of access to the same data (e.g., read-only vs. full access).</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">📌 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>GRANT SELECT, INSERT
ON Orders
TO sales_role;</code></pre>
<p class="mt-4"><strong>👉 This command gives permission to read data (SELECT) and add new records (INSERT) into the Orders table to the role sales_role. Any user assigned to this role inherits these privileges.</strong></p>`
        },
        {
          title: "⛔ 2. REVOKE — Withdrawing Privileges",
          content: `<p>The <strong>REVOKE</strong> statement is used to remove permissions previously granted using the GRANT command.</p>
<h4 class="text-lg font-semibold mt-4 mb-2">🔹 Syntax:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>REVOKE privilege_list
ON object_name
FROM user_or_role;</code></pre>
<ul class="list-disc list-inside space-y-1 ml-4 mt-4">
<li><strong>privilege_list:</strong> The operations to revoke (must match what was granted).</li>
<li><strong>object_name:</strong> The database object involved.</li>
<li><strong>user_or_role:</strong> The recipient whose permission is being removed.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">🧠 Explanation:</h4>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>This command tells the database: "Take away the ability to perform these actions from the specified user or role."</li>
<li>Used for tightening access control, especially when a user no longer needs access or after security reviews.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">📌 Example:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>REVOKE INSERT
ON Orders
FROM sales_role;</code></pre>
<p class="mt-4"><strong>👉 This command removes the ability to insert data into the Orders table from users with the sales_role. However, they can still view records if the SELECT privilege was not revoked.</strong></p>`
        },
        {
          title: "🔍 Common Privileges You Can Control",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Privilege</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">SELECT</td>
<td class="border border-gray-300 px-4 py-2">Allows reading/viewing data from a table</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">INSERT</td>
<td class="border border-gray-300 px-4 py-2">Allows adding new records to a table</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">UPDATE</td>
<td class="border border-gray-300 px-4 py-2">Allows modifying existing records</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">DELETE</td>
<td class="border border-gray-300 px-4 py-2">Allows removing records from a table</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">ALL</td>
<td class="border border-gray-300 px-4 py-2">Grants all available privileges on the object</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "✅ Additional Notes",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li>A privilege granted with GRANT remains until explicitly revoked.</li>
<li>You can also use <strong>WITH GRANT OPTION</strong> to allow a user to pass on privileges to others.</li>
</ul>
<h4 class="text-lg font-semibold mt-4 mb-2">Example with GRANT OPTION:</h4>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>GRANT SELECT ON Customers TO user1 WITH GRANT OPTION;</code></pre>
<ul class="list-disc list-inside space-y-2 ml-4 mt-4">
<li>The REVOKE command can only undo privileges that were explicitly granted.</li>
<li>DCL is often used by Database Administrators (DBAs) to manage user roles and security.</li>
</ul>`
        }
      ]
    },
    {
      heading: "SQL Normalization — Making Your Tables Efficient and Clean",
      subheadings: [
        {
          title: "📖 Introduction to Normalization",
          content: `<p><strong>Normalization</strong> is the systematic process of organizing data in a database to reduce redundancy (duplicate data) and prevent anomalies (update, insert, delete problems). The aim is to break down large tables into smaller, well-structured tables and establish clear relationships between them.</p>
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
<p class="text-blue-800 font-semibold">In short:</p>
<p class="text-blue-800"><strong>🔁 Big unorganized table ➡️ Smaller well-structured tables = Normalization</strong></p>
</div>`
        },
        {
          title: "🔍 Why Normalize?",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li>To eliminate repetition of data.</li>
<li>To maintain data integrity.</li>
<li>To ensure logical data storage.</li>
<li>To improve efficiency in queries and updates.</li>
</ul>`
        },
        {
          title: "⚙️ Functional Dependencies",
          content: `<p>Before understanding normal forms, it's important to know <strong>functional dependencies</strong>, which form the basis of normalization.</p>`
        },
        {
          title: "1. Total Functional Dependency",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li>All columns in a table completely depend on a single primary key.</li>
<li>This indicates a perfect design.</li>
<li><strong class="text-green-600">✅ No redundancy</strong></li>
</ul>
<div class="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
<p class="text-green-800"><strong>Example:</strong> In a student table, if StudentID uniquely determines Name, DOB, Marks, it's a total dependency.</p>
</div>`
        },
        {
          title: "2. Partial Functional Dependency",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li>When only part of a composite key determines the value of a column.</li>
<li>This happens when a table has a primary key with multiple columns, but some columns depend only on one part of that key.</li>
<li><strong class="text-red-600">🚫 Leads to data repetition and anomalies.</strong></li>
</ul>`
        },
        {
          title: "3. Transitive Functional Dependency",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li>A column depends on another non-primary key column, which in turn depends on the primary key.</li>
<li>This indirect relationship can lead to inconsistencies.</li>
</ul>
<div class="bg-orange-50 border-l-4 border-orange-400 p-4 mt-4">
<p class="text-orange-800"><strong>Example:</strong> StudentID ➝ Department ➝ DepartmentHead. DepartmentHead is indirectly dependent on StudentID.</p>
</div>`
        },
        {
          title: "🧱 Levels of Normalization (Normal Forms)",
          content: `<p>Database normalization progresses through several <strong>Normal Forms</strong>, each building upon the previous one to achieve better data organization.</p>`
        },
        {
          title: "🧩 1. First Normal Form (1NF)",
          content: `<p>A table is in <strong>1NF</strong> if:</p>
<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong class="text-green-600">✅</strong> It contains no repeating groups.</li>
<li><strong class="text-green-600">✅</strong> Each cell contains only atomic (single) values.</li>
<li><strong class="text-green-600">✅</strong> Each record is unique.</li>
</ul>
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
<p class="text-blue-800"><strong>🧠 Think:</strong> One value per cell, no arrays or comma-separated lists.</p>
</div>`
        },
        {
          title: "🧩 2. Second Normal Form (2NF)",
          content: `<p>A table is in <strong>2NF</strong> if:</p>
<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong class="text-green-600">✅</strong> It satisfies 1NF.</li>
<li><strong class="text-green-600">✅</strong> It removes partial dependencies (i.e., every non-key attribute is fully functionally dependent on the full primary key).</li>
</ul>
<p class="mt-4">This is most relevant for tables with composite primary keys.</p>
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
<p class="text-blue-800"><strong>🧠 Get rid of values that depend only on part of the key.</strong></p>
</div>`
        },
        {
          title: "🧩 3. Third Normal Form (3NF)",
          content: `<p>A table is in <strong>3NF</strong> if:</p>
<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong class="text-green-600">✅</strong> It satisfies 2NF.</li>
<li><strong class="text-green-600">✅</strong> It has no transitive dependencies (non-key fields should not depend on other non-key fields).</li>
</ul>
<p class="mt-4">This ensures that every non-key attribute is directly dependent only on the primary key.</p>
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
<p class="text-blue-800"><strong>🧠 Every field should rely only on the primary key, not other fields.</strong></p>
</div>`
        },
        {
          title: "🧩 4. Boyce-Codd Normal Form (BCNF)",
          content: `<p><strong>BCNF</strong>, also called <strong>3.5NF</strong>, is a stricter version of 3NF.</p>
<p class="mt-4">A table is in <strong>BCNF</strong> if:</p>
<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong class="text-green-600">✅</strong> It satisfies 3NF.</li>
<li><strong class="text-green-600">✅</strong> For every functional dependency X ➝ Y, X must be a super key.</li>
</ul>
<p class="mt-4">BCNF solves some rare edge cases where 3NF fails due to non-trivial dependencies involving candidate keys.</p>`
        },
        {
          title: "🧠 Summary Table",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Normal Form</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Conditions Required</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold text-blue-600">1NF</td>
<td class="border border-gray-300 px-4 py-2">No repeating groups, atomic values</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold text-blue-600">2NF</td>
<td class="border border-gray-300 px-4 py-2">1NF + No partial dependencies</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold text-blue-600">3NF</td>
<td class="border border-gray-300 px-4 py-2">2NF + No transitive dependencies</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold text-blue-600">BCNF</td>
<td class="border border-gray-300 px-4 py-2">3NF + Every determinant is a super key</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "💡 Key Takeaways",
          content: `<div class="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
<ul class="list-disc list-inside space-y-2 ml-4 text-green-800">
<li><strong>Normalization is progressive</strong> - each form builds on the previous one</li>
<li><strong>Most databases aim for 3NF</strong> - it provides good balance between efficiency and complexity</li>
<li><strong>BCNF is used for special cases</strong> - when 3NF isn't sufficient</li>
<li><strong>Over-normalization can hurt performance</strong> - sometimes denormalization is needed for optimization</li>
</ul>
</div>`
        }
      ]
    },
    {
      heading: "🧩 ER Diagrams & Schema Design Best Practices",
      subheadings: [
        {
          title: "📌 What is an ER Diagram (ERD)?",
          content: `<p>An <strong>ER Diagram (Entity-Relationship Diagram)</strong> is a visual representation of the data model that shows the entities, their attributes, and relationships among them. It's a blueprint for designing databases effectively.</p>`
        },
        {
          title: "🧱 Components of ER Diagram",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Component</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Entity</td>
<td class="border border-gray-300 px-4 py-2">Object or concept represented as a table.</td>
<td class="border border-gray-300 px-4 py-2">Customer, Order, Product</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Attribute</td>
<td class="border border-gray-300 px-4 py-2">Column or property of an entity.</td>
<td class="border border-gray-300 px-4 py-2">CustomerID, Name, Email</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Primary Key</td>
<td class="border border-gray-300 px-4 py-2">Uniquely identifies each row in a table.</td>
<td class="border border-gray-300 px-4 py-2">CustomerID</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Foreign Key</td>
<td class="border border-gray-300 px-4 py-2">Links one entity to another.</td>
<td class="border border-gray-300 px-4 py-2">CustomerID in Order</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Relationship</td>
<td class="border border-gray-300 px-4 py-2">Logical link between two or more entities.</td>
<td class="border border-gray-300 px-4 py-2">Customer places Order</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🖼️ Example ER Diagram",
          content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
<pre class="text-blue-800 font-mono">
[Customer] -------< places >-------- [Order]
   |                                     |
[CustomerID] (PK)                 [OrderID] (PK)
[Name]                           [CustomerID] (FK)
[Email]                          [OrderDate]
</pre>
</div>
<ul class="list-disc list-inside space-y-1 ml-4 mt-4">
<li>Customer can place multiple orders</li>
<li>Order belongs to one customer</li>
</ul>`
        },
        {
          title: "🧠 Why Use ER Diagrams?",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong>🔍 Clarifies relationships</strong> before building schema</li>
<li><strong>📐 Ensures normalization</strong> and avoids redundancy</li>
<li><strong>🔁 Helps in iterative refinement</strong> of schema</li>
<li><strong>👥 Improves communication</strong> between developers & stakeholders</li>
</ul>`
        },
        {
          title: "✅ Best Practices for Schema Design",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Practice</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2"><strong class="text-green-600">✅ Use Meaningful Table & Column Names</strong></td>
<td class="border border-gray-300 px-4 py-2">Use descriptive names like Customers, OrderDate, not tbl1, col2</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2"><strong class="text-green-600">✅ Always Define Primary Keys</strong></td>
<td class="border border-gray-300 px-4 py-2">Every table should have a unique identifier</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2"><strong class="text-green-600">✅ Use Foreign Keys for Relationships</strong></td>
<td class="border border-gray-300 px-4 py-2">Maintain referential integrity with foreign keys</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2"><strong class="text-green-600">✅ Normalize Data (up to 3NF)</strong></td>
<td class="border border-gray-300 px-4 py-2">Eliminate redundancy and anomalies</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2"><strong class="text-green-600">✅ Use Indexes Wisely</strong></td>
<td class="border border-gray-300 px-4 py-2">Index frequently searched or joined columns</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2"><strong class="text-green-600">✅ Avoid NULL Overuse</strong></td>
<td class="border border-gray-300 px-4 py-2">Only allow NULL where it's meaningful (e.g., optional fields)</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2"><strong class="text-green-600">✅ Use ENUM or Reference Tables for Categorical Data</strong></td>
<td class="border border-gray-300 px-4 py-2">Instead of free-text columns, use Gender, Status, etc. with lookup tables</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2"><strong class="text-green-600">✅ Document Relationships</strong></td>
<td class="border border-gray-300 px-4 py-2">Keep inline comments or separate ERD docs for clarity</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "⚠️ Common Mistakes to Avoid",
          content: `<ul class="list-disc list-inside space-y-2 ml-4">
<li><strong class="text-red-600">❌ Using a single table for everything</strong> (denormalized structure)</li>
<li><strong class="text-red-600">❌ Missing foreign key constraints</strong></li>
<li><strong class="text-red-600">❌ Using vague or overly short column names</strong> (col1, data)</li>
<li><strong class="text-red-600">❌ Storing multiple values in a single column</strong> ("red,blue,green")</li>
</ul>`
        },
        {
          title: "🧰 Tools to Design ER Diagrams",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Tool</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Link</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">dbdiagram.io</td>
<td class="border border-gray-300 px-4 py-2">Web-based</td>
<td class="border border-gray-300 px-4 py-2"><a href="https://dbdiagram.io" class="text-blue-600 hover:underline" target="_blank">https://dbdiagram.io</a></td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Draw.io / Diagrams.net</td>
<td class="border border-gray-300 px-4 py-2">Web/Offline</td>
<td class="border border-gray-300 px-4 py-2"><a href="https://diagrams.net" class="text-blue-600 hover:underline" target="_blank">https://diagrams.net</a></td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">MySQL Workbench</td>
<td class="border border-gray-300 px-4 py-2">GUI + ERD generator</td>
<td class="border border-gray-300 px-4 py-2">Installed with MySQL</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Lucidchart</td>
<td class="border border-gray-300 px-4 py-2">Professional diagrams</td>
<td class="border border-gray-300 px-4 py-2"><a href="https://lucidchart.com" class="text-blue-600 hover:underline" target="_blank">https://lucidchart.com</a></td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📌 Final Tip",
          content: `<div class="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
<p class="text-green-800 text-lg font-semibold">"If you can draw it, you can build it."</p>
<p class="text-green-800 mt-2">Always design your schema on paper or diagram first, then implement in SQL.</p>
</div>`
        }
      ]
    },
    {
      heading: "💬 SQL Interview Questions and Answers",
      subheadings: [
        {
          title: "📖 Introduction to SQL Interview Preparation",
          content: `<p>A complete guide to help you crack SQL interviews — from fundamentals to advanced topics — with unique, example-rich answers and no copyrighted or personal references.</p>`
        },
        {
          title: "🟢 Basic SQL Interview Questions",
          content: `<div class="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
<h4 class="text-green-800 font-semibold text-lg">Fundamental concepts every SQL developer should know</h4>
</div>`
        },
        {
          title: "📌 1. What is SQL?",
          content: `<p><strong>SQL (Structured Query Language)</strong> is the standard language used to communicate with relational databases. It allows users to:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Create database structures</li>
<li>Manipulate data</li>
<li>Query and filter information</li>
<li>Control access and transactions</li>
</ul>`
        },
        {
          title: "📌 2. What's the difference between DELETE, TRUNCATE, and DROP?",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Command</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Purpose</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Can Rollback</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Affects Table Structure</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">DELETE</td>
<td class="border border-gray-300 px-4 py-2">Removes selected rows</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">TRUNCATE</td>
<td class="border border-gray-300 px-4 py-2">Removes all rows</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
</tr>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">DROP</td>
<td class="border border-gray-300 px-4 py-2">Deletes table completely</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📌 3. What is a Primary Key?",
          content: `<p>A <strong>Primary Key</strong> uniquely identifies each record in a table. It must be:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Unique</li>
<li>Not NULL</li>
</ul>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>CREATE TABLE Books (
  ISBN VARCHAR(13) PRIMARY KEY,
  Title VARCHAR(100)
);</code></pre>`
        },
        {
          title: "📌 4. Difference between WHERE and HAVING clause?",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Clause</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Used For</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Filters On</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">WHERE</td>
<td class="border border-gray-300 px-4 py-2">Filter rows</td>
<td class="border border-gray-300 px-4 py-2">Individual rows</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">HAVING</td>
<td class="border border-gray-300 px-4 py-2">Filter groups</td>
<td class="border border-gray-300 px-4 py-2">Aggregated data</td>
</tr>
</tbody>
</table>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT department, COUNT(*)
FROM Employees
GROUP BY department
HAVING COUNT(*) > 5;</code></pre>`
        },
        {
          title: "📌 5. What are Aggregate Functions?",
          content: `<p>These functions perform calculations on groups of rows:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>COUNT()</strong> — counts values</li>
<li><strong>SUM()</strong> — totals numeric column</li>
<li><strong>AVG()</strong> — average value</li>
<li><strong>MAX() / MIN()</strong> — highest / lowest values</li>
</ul>`
        },
        {
          title: "🟡 Intermediate SQL Interview Questions",
        },
        {
          title: "📌 6. What is a Subquery?",
          content: `<p>A <strong>Subquery</strong> is a query nested within another query.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name
FROM Products
WHERE price > (SELECT AVG(price) FROM Products);</code></pre>`
        },
        {
          title: "📌 7. What is a JOIN? What types are there?",
          content: `<p>A <strong>JOIN</strong> combines data from two or more tables based on a related column.</p>
<p class="mt-4"><strong>Types include:</strong></p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>INNER JOIN</li>
<li>LEFT JOIN</li>
<li>RIGHT JOIN</li>
<li>FULL JOIN</li>
<li>SELF JOIN</li>
<li>CROSS JOIN</li>
<li>NATURAL JOIN</li>
</ul>`
        },
        {
          title: "📌 8. Difference between UNION and UNION ALL?",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Clause</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Removes Duplicates</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Performance</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">UNION</td>
<td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">✅ Yes</td>
<td class="border border-gray-300 px-4 py-2">Slower</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-mono font-semibold">UNION ALL</td>
<td class="border border-gray-300 px-4 py-2 text-red-600 font-semibold">❌ No</td>
<td class="border border-gray-300 px-4 py-2">Faster</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "📌 9. What is a View?",
          content: `<p>A <strong>View</strong> is a virtual table based on a result of a SQL query. It simplifies complex logic and enhances security.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>CREATE VIEW ActiveOrders AS
SELECT order_id, status FROM Orders
WHERE status = 'active';</code></pre>`
        },
        {
          title: "📌 10. What is Normalization?",
          content: `<p><strong>Normalization</strong> is the process of dividing large tables into smaller, well-structured tables to:</p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>Eliminate redundancy</li>
<li>Improve data integrity</li>
</ul>
<p class="mt-4"><strong>Types:</strong></p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li><strong>1NF:</strong> Remove repeating groups</li>
<li><strong>2NF:</strong> Eliminate partial dependency</li>
<li><strong>3NF:</strong> Remove transitive dependency</li>
<li><strong>BCNF:</strong> Enhance to handle complex keys</li>
</ul>`
        },
        {
          title: "🔴 Advanced SQL Interview Questions",
          
        },
        {
          title: "📌 11. What is a Transaction?",
          content: `<p>A <strong>Transaction</strong> is a sequence of operations treated as a single logical unit.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>BEGIN;
UPDATE Accounts SET balance = balance - 100 WHERE id = 1;
UPDATE Accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;</code></pre>
<p class="mt-4"><strong>Commands:</strong></p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>COMMIT</li>
<li>ROLLBACK</li>
<li>SAVEPOINT</li>
</ul>`
        },
        {
          title: "📌 12. What is Indexing?",
          content: `<p><strong>Indexing</strong> improves the speed of data retrieval.</p>
<p class="mt-4"><strong>Types:</strong></p>
<ul class="list-disc list-inside space-y-1 ml-4">
<li>B-Tree Index</li>
<li>Composite Index</li>
<li>Full-Text Index</li>
</ul>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>CREATE INDEX idx_name ON Employees(name);</code></pre>`
        },
        {
          title: "📌 13. What is a Correlated Subquery?",
          content: `<p>A <strong>Correlated Subquery</strong> uses values from the outer query and is evaluated for each row.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name FROM Employees e1
WHERE salary > (
  SELECT AVG(salary)
  FROM Employees e2
  WHERE e2.department = e1.department
);</code></pre>`
        },
        {
          title: "📌 14. What are Window Functions?",
          content: `<p>These functions calculate running totals, ranks, and averages over a partition of rows.</p>
<pre class="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto"><code>SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS salary_rank
FROM Employees;</code></pre>`
        },
        {
          title: "📌 15. Difference between EXISTS and IN?",
          content: `<table class="min-w-full border-collapse border border-gray-300 my-4">
<thead>
<tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">Feature</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">IN</th>
<th class="border border-gray-300 px-4 py-2 text-left font-semibold">EXISTS</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-300 px-4 py-2 font-semibold">Check Type</td>
<td class="border border-gray-300 px-4 py-2">Compares with list of values</td>
<td class="border border-gray-300 px-4 py-2">Checks for presence of rows</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 px-4 py-2 font-semibold">Use Case</td>
<td class="border border-gray-300 px-4 py-2">Small datasets</td>
<td class="border border-gray-300 px-4 py-2">Larger, indexed subqueries</td>
</tr>
</tbody>
</table>`
        },
        {
          title: "🎯 Interview Success Tips",
          content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
<h4 class="text-blue-800 font-semibold text-lg mb-2">💡 Pro Tips for SQL Interviews:</h4>
<ul class="list-disc list-inside space-y-2 ml-4 text-blue-800">
<li><strong>Practice writing queries by hand</strong> - Many interviews use whiteboards</li>
<li><strong>Explain your thought process</strong> - Walk through your logic step by step</li>
<li><strong>Know the differences</strong> between database systems (MySQL, PostgreSQL, SQL Server)</li>
<li><strong>Understand performance implications</strong> - When to use indexes, joins vs subqueries</li>
<li><strong>Be ready for optimization questions</strong> - How would you improve this query?</li>
</ul>
</div>`
        }
      ]
    },
    
  ],
};

export default sqlTutorial;
