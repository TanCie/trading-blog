import Card from "../components/blog/Card";
import Posts from "../components/blog/Posts";

const HomePage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-50">
      <div className="mx-auto w-[85%] min-h-screen p-4  text-gray-800">
        <h1 className="text-2xl font-semibold mt-4">Home</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-6">
          <Card
            head="Get Started"
            content="Kickstart your journey with easy-to-follow guides and resources to help you begin seamlessly."
          />
          <Card
            head="Community"
            content="Join a vibrant community of like-minded individuals, share knowledge, and collaborate on exciting projects."
          />
          <Card
            head="Visit Website"
            content="Explore our website for in-depth insights, latest updates, and valuable resources tailored for you."
          />
        </div>
        <div className="my-10">
          <h2 className="font-semibold mb-4">Latest Posts</h2>
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
