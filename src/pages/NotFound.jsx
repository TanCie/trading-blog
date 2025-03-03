export default function NotFound() {
  return (
    <div className="mx-auto mt-30 text-center">
      <h1>404 - Page Not Found</h1>
      <p>
        The page might have encountered some issues. Please click on the main
        link again
      </p>
      <span>
        Go back to{" "}
        <a
          className="hover:text-blue-500 text-blue-700 hover:underline"
          href="https://trading-blog-six.vercel.app"
        >
          Home
        </a>{" "}
        page
      </span>
    </div>
  );
}
