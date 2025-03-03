export default function NotFound() {
  return (
    <div className="w-2/3 p-20 bg-gray-800 text-white text-center mt-30">
      <h1>404 - Page Not Found</h1>
      <p>
        The page might have encountered some issues. Please click on the main link again
      </p>
      <span>
        Go back to{" "}
        <a
          className="hover:text-blue-500 hover:underline"
          href="https://trading-blog-six.vercel.app"
        >
          Home
        </a>{" "}
        page
      </span>
    </div>
  );
}
