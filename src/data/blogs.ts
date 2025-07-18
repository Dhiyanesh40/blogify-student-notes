export interface Blog {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  readTime: number;
}

export const dummyBlogs: Blog[] = [
  {
    id: "1",
    title: "Object-Oriented Programming Fundamentals",
    summary: "A comprehensive guide to OOP concepts including inheritance, polymorphism, encapsulation, and abstraction with practical examples.",
    content: `# Object-Oriented Programming Fundamentals

## Introduction
Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code in a more intuitive and maintainable way.

## Core Principles

### 1. Encapsulation
Encapsulation is the bundling of data and methods that operate on that data within a single unit (class).

\`\`\`python
class Student:
    def __init__(self, name, age):
        self._name = name  # protected attribute
        self._age = age
    
    def get_name(self):
        return self._name
    
    def set_age(self, age):
        if age > 0:
            self._age = age
\`\`\`

### 2. Inheritance
Inheritance allows a class to inherit properties and methods from another class.

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def speak(self):
        return f"{self.name} is speaking"

class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    def study(self):
        return f"{self.name} is studying"
\`\`\`

### 3. Polymorphism
Polymorphism allows objects of different types to be treated as objects of a common base type.

### 4. Abstraction
Abstraction hides complex implementation details while showing only essential features.

## Benefits of OOP
- **Modularity**: Code is organized into separate, interchangeable components
- **Reusability**: Classes can be reused across different programs
- **Maintainability**: Changes to one part don't affect other parts
- **Scalability**: Easy to add new features without breaking existing code

## Conclusion
Understanding OOP principles is crucial for writing clean, maintainable, and scalable code. Practice these concepts with real projects to master them.`,
    author: "Alex Chen",
    date: "2024-01-15",
    tags: ["Programming", "OOP", "Python", "Fundamentals"],
    readTime: 8
  },
  {
    id: "2",
    title: "Database Management Systems (DBMS) Complete Guide",
    summary: "Everything you need to know about DBMS including SQL, normalization, ACID properties, and database design principles.",
    content: `# Database Management Systems (DBMS) Complete Guide

## What is a DBMS?
A Database Management System (DBMS) is software that handles the storage, retrieval, and updating of data in a computer system.

## Types of Databases

### 1. Relational Databases (RDBMS)
- Uses tables to store data
- Follows ACID properties
- Examples: MySQL, PostgreSQL, Oracle

### 2. NoSQL Databases
- Document stores (MongoDB)
- Key-value stores (Redis)
- Column-family (Cassandra)
- Graph databases (Neo4j)

## SQL Fundamentals

### Basic Queries
\`\`\`sql
-- Select all students
SELECT * FROM students;

-- Select specific columns
SELECT name, age FROM students WHERE age > 18;

-- Join tables
SELECT s.name, c.course_name 
FROM students s 
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id;
\`\`\`

### Data Manipulation
\`\`\`sql
-- Insert data
INSERT INTO students (name, age, email) 
VALUES ('John Doe', 20, 'john@email.com');

-- Update data
UPDATE students SET age = 21 WHERE name = 'John Doe';

-- Delete data
DELETE FROM students WHERE age < 18;
\`\`\`

## Database Design

### Normalization
- **1NF**: Eliminate repeating groups
- **2NF**: Remove partial dependencies
- **3NF**: Remove transitive dependencies
- **BCNF**: Stronger version of 3NF

### ACID Properties
- **Atomicity**: All or nothing
- **Consistency**: Data integrity maintained
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Changes persist after system failure

## Best Practices
1. Use appropriate data types
2. Create proper indexes
3. Normalize appropriately
4. Use constraints for data integrity
5. Regular backups and maintenance

## Conclusion
DBMS knowledge is essential for any software developer. Understanding both SQL and NoSQL databases will make you a well-rounded developer.`,
    author: "Sarah Johnson",
    date: "2024-01-20",
    tags: ["Database", "SQL", "DBMS", "Backend"],
    readTime: 12
  },
  {
    id: "3",
    title: "Python Programming Cheat Sheet",
    summary: "Essential Python syntax, data structures, and common patterns every developer should know. Perfect for quick reference.",
    content: `# Python Programming Cheat Sheet

## Basic Syntax

### Variables and Data Types
\`\`\`python
# Variables (dynamic typing)
name = "Python"
age = 30
is_awesome = True
height = 5.9

# Type checking
print(type(name))  # <class 'str'>
\`\`\`

### String Operations
\`\`\`python
# String formatting
name = "World"
greeting = f"Hello, {name}!"  # f-strings (Python 3.6+)
greeting = "Hello, {}!".format(name)  # .format()
greeting = "Hello, %s!" % name  # % formatting

# Common methods
text = "  Python Programming  "
print(text.strip())  # Remove whitespace
print(text.lower())  # Lowercase
print(text.upper())  # Uppercase
print(text.replace("Python", "Java"))  # Replace
\`\`\`

## Data Structures

### Lists
\`\`\`python
# Creating and manipulating lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")  # Add to end
fruits.insert(0, "mango")  # Insert at index
fruits.remove("banana")  # Remove by value
fruits.pop()  # Remove last item

# List comprehensions
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]
\`\`\`

### Dictionaries
\`\`\`python
# Creating and using dictionaries
student = {
    "name": "Alice",
    "age": 20,
    "courses": ["Math", "Physics"]
}

# Accessing and modifying
print(student["name"])  # Get value
student["grade"] = "A"  # Add new key-value
student.update({"email": "alice@email.com"})  # Update multiple

# Dictionary comprehensions
squares_dict = {x: x**2 for x in range(5)}
\`\`\`

## Functions and Classes

### Functions
\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Lambda functions
square = lambda x: x**2
numbers = [1, 2, 3, 4, 5]
squared = list(map(square, numbers))
\`\`\`

### Classes
\`\`\`python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self._courses = []  # protected attribute
    
    def add_course(self, course):
        self._courses.append(course)
    
    def __str__(self):
        return f"Student: {self.name}, Age: {self.age}"
    
    @property
    def courses(self):
        return self._courses.copy()
\`\`\`

## Common Patterns

### File Operations
\`\`\`python
# Reading files
with open("file.txt", "r") as file:
    content = file.read()
    lines = file.readlines()

# Writing files
with open("output.txt", "w") as file:
    file.write("Hello, World!")
\`\`\`

### Exception Handling
\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
finally:
    print("This always runs")
\`\`\`

## Useful Libraries
- **NumPy**: Numerical computing
- **Pandas**: Data manipulation
- **Matplotlib**: Data visualization
- **Requests**: HTTP library
- **Flask/Django**: Web frameworks

## Tips for Better Python Code
1. Follow PEP 8 style guide
2. Use virtual environments
3. Write docstrings for functions
4. Use type hints for better code clarity
5. Practice list comprehensions and generators

Happy coding! 🐍`,
    author: "Mike Wilson",
    date: "2024-01-25",
    tags: ["Python", "Programming", "Cheat Sheet", "Reference"],
    readTime: 6
  },
  {
    id: "4",
    title: "Data Structures and Algorithms Study Notes",
    summary: "Comprehensive notes on essential data structures and algorithms including time complexity, sorting, searching, and graph algorithms.",
    content: `# Data Structures and Algorithms Study Notes

## Time Complexity (Big O Notation)

### Common Time Complexities
- **O(1)**: Constant time - accessing array element
- **O(log n)**: Logarithmic - binary search
- **O(n)**: Linear - scanning array
- **O(n log n)**: Linearithmic - merge sort
- **O(n²)**: Quadratic - nested loops
- **O(2ⁿ)**: Exponential - recursive fibonacci

## Essential Data Structures

### Arrays
\`\`\`python
# Dynamic array operations
arr = [1, 2, 3, 4, 5]
arr.append(6)      # O(1) amortized
arr.insert(0, 0)   # O(n)
arr.pop()          # O(1)
arr.pop(0)         # O(n)
\`\`\`

### Linked Lists
\`\`\`python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
    
    def insert_at_head(self, val):
        new_node = ListNode(val)
        new_node.next = self.head
        self.head = new_node
\`\`\`

### Stacks and Queues
\`\`\`python
# Stack (LIFO)
stack = []
stack.append(1)    # push
stack.append(2)
top = stack.pop()  # pop

# Queue (FIFO)
from collections import deque
queue = deque()
queue.append(1)     # enqueue
queue.append(2)
first = queue.popleft()  # dequeue
\`\`\`

### Hash Tables
\`\`\`python
# Python dictionary is a hash table
hash_table = {}
hash_table["key1"] = "value1"  # O(1) average
value = hash_table["key1"]     # O(1) average

# Handling collisions
from collections import defaultdict
counter = defaultdict(int)
for char in "hello":
    counter[char] += 1
\`\`\`

## Sorting Algorithms

### Bubble Sort - O(n²)
\`\`\`python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
\`\`\`

### Merge Sort - O(n log n)
\`\`\`python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result
\`\`\`

### Quick Sort - O(n log n) average
\`\`\`python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)
\`\`\`

## Searching Algorithms

### Binary Search - O(log n)
\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
\`\`\`

## Graph Algorithms

### Depth-First Search (DFS)
\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start)
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
\`\`\`

### Breadth-First Search (BFS)
\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        node = queue.popleft()
        print(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
\`\`\`

## Problem-Solving Strategies

### Two Pointers
\`\`\`python
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return []
\`\`\`

### Sliding Window
\`\`\`python
def max_sum_subarray(arr, k):
    if len(arr) < k:
        return None
    
    # Calculate sum of first window
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    # Slide the window
    for i in range(len(arr) - k):
        window_sum = window_sum - arr[i] + arr[i + k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
\`\`\`

## Study Tips
1. Practice coding problems daily
2. Understand time and space complexity
3. Start with simple problems, gradually increase difficulty
4. Learn to recognize patterns
5. Practice on platforms like LeetCode, HackerRank
6. Implement algorithms from scratch

## Resources
- **Books**: "Introduction to Algorithms" by CLRS
- **Online**: LeetCode, HackerRank, CodeSignal
- **Visualization**: VisuAlgo, Algorithm Visualizer

Remember: Consistent practice is key to mastering DSA! 💪`,
    author: "David Kim",
    date: "2024-01-30",
    tags: ["Algorithms", "Data Structures", "Computer Science", "Interview Prep"],
    readTime: 15
  },
  {
    id: "5",
    title: "Web Development Fundamentals: HTML, CSS, JavaScript",
    summary: "Complete guide to front-end web development covering HTML structure, CSS styling, and JavaScript interactivity with modern best practices.",
    content: `# Web Development Fundamentals: HTML, CSS, JavaScript

## HTML - Structure

### Semantic HTML5
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>Welcome to My Site</h1>
            <p>This is the main content area.</p>
        </section>
        
        <article>
            <h2>Blog Post Title</h2>
            <p>Article content goes here...</p>
        </article>
    </main>
    
    <aside>
        <h3>Sidebar</h3>
        <p>Additional information</p>
    </aside>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
\`\`\`

### Forms and Input
\`\`\`html
<form action="/submit" method="POST">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
    </div>
    
    <button type="submit">Send Message</button>
</form>
\`\`\`

## CSS - Styling

### CSS Selectors
\`\`\`css
/* Element selector */
h1 {
    color: blue;
}

/* Class selector */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* ID selector */
#header {
    background-color: navy;
}

/* Attribute selector */
input[type="email"] {
    border: 2px solid green;
}

/* Pseudo-classes */
a:hover {
    color: red;
}

/* Pseudo-elements */
p::first-line {
    font-weight: bold;
}
\`\`\`

### Flexbox Layout
\`\`\`css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.item {
    flex: 1;
    margin: 10px;
}

/* Flex properties */
.flexible-item {
    flex-grow: 1;    /* Grow factor */
    flex-shrink: 1;  /* Shrink factor */
    flex-basis: auto; /* Initial size */
}
\`\`\`

### CSS Grid
\`\`\`css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
}

.grid-item {
    background-color: lightblue;
    padding: 20px;
}

/* Grid areas */
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

### Responsive Design
\`\`\`css
/* Mobile-first approach */
.container {
    width: 100%;
    padding: 15px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
}
\`\`\`

## JavaScript - Interactivity

### Variables and Data Types
\`\`\`javascript
// Modern variable declarations
const name = "John";           // Constant
let age = 25;                 // Block-scoped variable
var oldStyle = "avoid";       // Function-scoped (avoid)

// Data types
const number = 42;
const string = "Hello World";
const boolean = true;
const array = [1, 2, 3, 4, 5];
const object = {
    name: "John",
    age: 25,
    isStudent: true
};
const nullValue = null;
const undefinedValue = undefined;
\`\`\`

### Functions
\`\`\`javascript
// Function declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}

// Function expression
const greet2 = function(name) {
    return \`Hello, \${name}!\`;
};

// Arrow function
const greet3 = (name) => \`Hello, \${name}!\`;

// Arrow function with multiple parameters
const add = (a, b) => a + b;

// Arrow function with body
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
\`\`\`

### DOM Manipulation
\`\`\`javascript
// Selecting elements
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');
const firstElement = document.querySelector('.myClass');

// Modifying content
element.textContent = 'New text content';
element.innerHTML = '<strong>Bold text</strong>';

// Modifying attributes
element.setAttribute('class', 'new-class');
element.classList.add('another-class');
element.classList.remove('old-class');
element.classList.toggle('toggle-class');

// Event listeners
element.addEventListener('click', function(event) {
    console.log('Element clicked!');
    event.preventDefault(); // Prevent default behavior
});

// Creating and appending elements
const newDiv = document.createElement('div');
newDiv.textContent = 'New div content';
newDiv.className = 'new-div';
document.body.appendChild(newDiv);
\`\`\`

### Modern JavaScript Features

#### Destructuring
\`\`\`javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, ...others } = {
    name: "John",
    age: 25,
    city: "New York",
    country: "USA"
};
\`\`\`

#### Spread Operator
\`\`\`javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
\`\`\`

#### Async/Await
\`\`\`javascript
// Fetch API with async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Using the function
fetchData().then(data => {
    console.log(data);
});
\`\`\`

## Best Practices

### HTML
- Use semantic elements
- Include proper meta tags
- Ensure accessibility (alt texts, ARIA labels)
- Validate your HTML

### CSS
- Follow a consistent naming convention (BEM, etc.)
- Use external stylesheets
- Optimize for performance
- Use CSS custom properties (variables)

### JavaScript
- Use strict mode: \`'use strict';\`
- Prefer const and let over var
- Use meaningful variable names
- Handle errors properly
- Comment your code

## Modern Development Tools
- **Build Tools**: Webpack, Vite, Parcel
- **CSS Frameworks**: Tailwind CSS, Bootstrap
- **JavaScript Frameworks**: React, Vue, Angular
- **Version Control**: Git
- **Package Managers**: npm, yarn

## Project Structure
\`\`\`
project/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── utils.js
├── images/
└── assets/
\`\`\`

Remember: Practice by building real projects! Start with simple static pages and gradually add more interactivity. 🚀`,
    author: "Emma Rodriguez",
    date: "2024-02-05",
    tags: ["Web Development", "HTML", "CSS", "JavaScript", "Frontend"],
    readTime: 18
  }
];

export function getBlogById(id: string): Blog | undefined {
  return dummyBlogs.find(blog => blog.id === id);
}

export function getBlogsByTag(tag: string): Blog[] {
  return dummyBlogs.filter(blog => 
    blog.tags.some(blogTag => blogTag.toLowerCase().includes(tag.toLowerCase()))
  );
}

export function searchBlogs(query: string): Blog[] {
  const lowerQuery = query.toLowerCase();
  return dummyBlogs.filter(blog => 
    blog.title.toLowerCase().includes(lowerQuery) ||
    blog.summary.toLowerCase().includes(lowerQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}