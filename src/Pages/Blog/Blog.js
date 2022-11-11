import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("The Photo || Blogs");
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
      <div className="w-full mx-auto space-y-4 text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Let's explore something special about JavaScript
        </h1>
      </div>
      <div className="pt-12 border-t dark:border-gray-700">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Difference SQL and NoSQL</h4>
            <p className="dark:text-gray-400">
              SQL databases are primarily called as Relational Databases
              (RDBMS); whereas NoSQL database are primarily called as
              non-relational or distributed database.
            </p>
            <p className="dark:text-gray-400">
              <strong>Scalability:</strong> <br />
              In almost all situations SQL databases are vertically scalable.
              This means that you can increase the load on a single server by
              increasing things like RAM, CPU or SSD. But on the other hand
              NoSQL databases are horizontally scalable. This means that you
              handle more traffic by sharding, or adding more servers in your
              NoSQL database. It is similar to adding more floors to the same
              building versus adding more buildings to the neighborhood. Thus
              NoSQL can ultimately become larger and more powerful, making these
              databases the preferred choice for large or ever-changing data
              sets
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">
              What is JWT, and how does it work?
            </h4>
            <p className="dark:text-gray-400">
              This is an open standard for transmitting information between
              parties.
            </p>
            <p className="dark:text-gray-400">
              <strong>Uses:</strong> <br />
              This is a secret key, which is provided by the server you are
              calling, at the time of your login there. After that, if you ask
              for any data there, in the behind you will also send that key to
              the server along with. Then the server will cross-match that key,
              if it is satisfied, you will get the data, otherwise, you will be
              forbidden
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">
              Difference between javascript and NodeJS?
            </h4>
            <p className="dark:text-gray-400">
              Javascript is a simple programming language that can be read in
              any browser. On the other hand, NodeJs is a runtime of JavaScript.
              It runs a program on the server side that you
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">
              How does NodeJs handle multiple request at the same time?
            </h4>
            <p className="dark:text-gray-400">
              NodeJs is using asynchronous programming. Which makes separates it
              from others. Like, when you request a server for any kind of data,
              one of the server element receive you request there that called
              Thread.
              <br />
              On the other server, they use that thread in doing all the tasks
              against your request. But NodeJs does work in a bit different way.
              <br />
              When NodeJs gets your request, it does not do your task. It sends
              your query to its subordinate for accomplishing the task, and
              after passing the task, it takes another request from another
              user. So he is always free. This is how NodeJs handle multiple
              requests at a time
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog;
