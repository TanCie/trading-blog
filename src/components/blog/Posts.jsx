const Posts = () => {
  const postHeadings = [
    "Stock Market Trends to Watch in 2025",
    "Mastering Technical Analysis for Profitable Trades",
    "How Interest Rates Impact Stock Prices",
    "Building a Winning Investment Portfolio",
    "Cryptocurrency vs. Stocks: Where to Invest?",
    "The Psychology Behind Successful Trading",
    "Understanding Risk Management in Trading",
    "How to Read and Analyze Financial Statements",
    "Swing Trading vs. Day Trading: Which is Better?",
    "The Role of AI and Machine Learning in Trading",
    "How Economic Indicators Affect Market Movements",
    "The Best Trading Strategies for Beginners",
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
    "May 20, 2024",
    "April 15, 2024",
  ];

  const postParagraphs = [
    "The stock market is constantly evolving. Staying ahead of key trends can help investors make informed decisions and maximize profits.",
    "Technical analysis is an essential skill for traders. Learning to read charts and indicators can help predict market movements with accuracy.",
    "Interest rates play a crucial role in stock market behavior. Understanding their impact can help investors navigate changing economic conditions.",
    "Building a diverse investment portfolio reduces risk and enhances returns. Learn key strategies to create a well-balanced portfolio.",
    "Cryptocurrency and stocks offer different risks and rewards. Knowing where to invest depends on your risk tolerance and market understanding.",
    "Successful trading isn't just about numbers—it's about psychology. Controlling emotions and sticking to a strategy are key to consistent profits.",
    "Risk management is essential for long-term trading success. Discover strategies to minimize losses and protect your capital.",
    "Analyzing financial statements helps investors understand a company's true value. Learn the key metrics that drive stock prices.",
    "Swing trading and day trading each have pros and cons. Understanding their differences can help you choose the right approach for your style.",
    "AI and machine learning are revolutionizing trading strategies. Discover how automated systems and predictive models are shaping the future of investing.",
    "Economic indicators like GDP, inflation, and employment data influence the stock market. Learning to interpret them can help you anticipate market trends.",
    "New traders often struggle with strategy selection. Explore beginner-friendly approaches to start making profitable trades from day one.",
  ];

  const posts = postHeadings.map((heading, idx) => ({
    date: postDates[idx],
    title: heading,
    content: postParagraphs[idx],
  }));

  return (
    <div className="grid-cols-1 md:grid-cols-2 grid space-y-10 space-x-6 lg:space-x-10">
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
