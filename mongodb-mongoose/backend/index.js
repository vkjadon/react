import express from 'express';
import mongoose from 'mongoose';
import Blog from './models/blog.js';

import { connectDB, getDBConnection } from './db/db_config.js';

const app = express();

connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
})
.catch((error) => {
  console.error('Failed to connect to the database:', error.message);
  process.exit(1);
});


// Create a new blog post object

/*
const article = new Blog({
  title: 'Awesome Post!',
  slug: 'awesome-post',
  published: true,
  content: 'This is the best post ever',
  tags: ['featured', 'announcement'],
});
*/

// Insert the article in our MongoDB database
// await article.save();

// Create a new blog post and insert into database
const article = await Blog({
  title: 'Awesome Post C5 !',
  slug: 'awesome-post',
  published: true,
  content: 'This is the best post ever',
  tags: ['featured', 'announcement'],
});

// await article.save();

console.log(article);

// Find a single blog post
const firstArticle = await Blog.findOne({});
console.log(firstArticle);

// Update the first article's title
// firstArticle.title = "The Most Awesomest Post!!";
// await firstArticle.save();
// console.log(firstArticle);

// Find all blog posts
// const allArticles = await Blog.find({});
// console.log(allArticles);

// Delete the first article
await firstArticle.deleteOne().exec();
console.log('Deleted first article');

// Find all blog posts again to confirm deletion
// const remainingArticles = await Blog.find({});
// console.log(remainingArticles);


/*
(async () => {
  await connectDB(); // connect and store in variable

  // Example: use stored connection
  const db = getDBConnection();
  console.log(`Connected to database: ${db.name}`);

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
})();
*/