import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h2>1. Difference between javascript and nodejs:</h2>
                <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            </div>
            <div>
                <h2>2. When should you use nodejs and when should you use mongodb</h2>
                <p>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. zMongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</p>
            </div>
            <div>
                <h2>3. Differences between sql and nosql databases</h2>
                <ul>
                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</li>
                </ul>
            </div>
            <div>
                <h2>4. What is the purpose of jwt and how does it work? </h2>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. the server generates a token that certifies the user identity, and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity. This architecture proves to be very effective in modern Web Apps, where after the user is authenticated we perform API requests either to a REST or a GraphQL API. </p>
            </div>
        </div>
    );
};

export default Blogs;