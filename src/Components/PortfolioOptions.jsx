import { Link } from "react-router-dom";

const catagories = ["Game Development", "Illustrations"];

const PortfolioOptions = () => {

  return (
    <section id="catagories">
      <ul className="flex flex-wrap gap-2 justify-center">
        {catagories.map((category, index) => (
          <li key={index}>
            <Link to={category.toLowerCase().replace(/\s+/g, "-")}>
              <button class="bg-gray-100 hover:bg-gray-200 font-bold py-2 px-4 rounded"> {category} </button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PortfolioOptions;