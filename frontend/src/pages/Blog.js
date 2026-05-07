import React, { useEffect, useState } from "react";
import { blogAPI } from "../services/api";
import "../styles/Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await blogAPI.getAll();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading blog posts...</div>;

  return (
    <div className="blog">
      <div className="blog-header">
        <h1>Blog & News</h1>
        <p>Stay updated with latest insights and news</p>
      </div>

      <div className="blog-grid">
        {blogs.map((post) => (
          <article key={post._id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-meta">
              <span className="category">{post.category}</span>
              <span className="date">{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <h3>{post.title}</h3>
            <p className="excerpt">{post.excerpt}</p>
            <div className="blog-footer">
              <span className="views">👁️ {post.views} views</span>
              <a href={`/blog/${post.slug}`} className="read-more">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
