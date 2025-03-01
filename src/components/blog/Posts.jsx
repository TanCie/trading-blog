const Posts = () => {
  const postHeadings = [
    "The Future of Web Development",
    "Mastering JavaScript in 2025",
    "UI/UX Trends You Need to Know",
    "Why TypeScript is the Future",
    "Building Scalable Web Apps",
    "Understanding React Server Components",
    "CSS Tricks for Modern Web Design",
    "The Power of Functional Programming",
    "How to Ace Your Next Tech Interview",
    "Best Practices for API Design",
  ];

  const postDates = [
    "March 1, 2025",
    "February 24, 2025",
    "January 15, 2025",
    "December 10, 2024",
    "November 5, 2024",
    "October 20, 2024",
    "September 30, 2024",
    "August 25, 2024",
    "July 12, 2024",
    "June 5, 2024",
  ];

  const postParagraphs = [
    "Web development is evolving rapidly, with new frameworks and tools emerging daily. Staying updated with trends is crucial for developers aiming for long-term success.",
    "JavaScript continues to dominate web development. Mastering its advanced features and latest updates can help you build efficient, high-performing applications.",
    "UI/UX trends shape the way users interact with digital products. Understanding the latest trends can help designers create engaging, seamless experiences.",
    "TypeScript improves code quality and maintainability. Learning TypeScript can enhance your productivity and help you build more scalable applications.",
    "Scalability is a key factor in modern web applications. Using best practices ensures your app can handle growing user demand effectively.",
    "React Server Components are transforming the way we build web apps. Learning how to use them efficiently can improve performance and user experience.",
    "CSS has evolved with powerful features like Grid and Flexbox. Knowing advanced CSS tricks can help you design stunning, responsive websites.",
    "Functional programming concepts can simplify JavaScript development. Understanding these principles can make your code cleaner and easier to manage.",
    "Tech interviews require strong problem-solving skills. Preparing for data structures, algorithms, and system design can help you land your dream job.",
    "APIs are the backbone of modern web applications. Following best practices in API design ensures security, scalability, and ease of integration.",
  ];

  const posts = postHeadings.map((heading, idx) => ({
    date: postDates[idx],
    title: heading,
    content: postParagraphs[idx],
  }));

  return (
    <div className="grid-cols-1 lg:grid-cols-2 grid space-y-10 space-x-10">
      {posts.map((post, idx) => (
        <div key={idx}>
          <div className="text-sm text-gray-500 my-1">{post.date}</div>
          <h2 className="font-semibold text-lg">{post.title}</h2>
          <p className="my-3 text-gray-600">
            {post.content.slice(0, 150)}...{" "}
            <a href="#" className="text-gray-500">
              Read more
            </a>
          </p>
          <a href="#" className="text-green-500 font-semibold text-sm">
            Read full post
          </a>
        </div>
      ))}
    </div>
  );
};

export default Posts;
