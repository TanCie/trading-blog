import { SquareArrowOutUpRight } from "lucide-react";

const Card = ({ head, content }) => {
  return (
    <div className="bg-white font-sans text-gray-900 p-3 rounded-md shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg">{head}</h2>
        <a href="#">
          <SquareArrowOutUpRight size={16} className="text-gray-400 " />
        </a>
      </div>
      <p className="font-extralight">{content}</p>
    </div>
  );
};

export default Card;
