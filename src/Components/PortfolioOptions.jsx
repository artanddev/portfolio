import { NavLink } from "react-router-dom";

const categories = ["Game Development", "2D Asset Work", "Illustrations", "Web and App Development"];

const PortfolioOptions = () => {
  return (
    <section id="categories">
      <ul className="flex flex-wrap flex-col md:flex-row gap-2 justify-center">
        {categories.map((category) => (
          <li key={category}>
            <NavLink
              to={category.toLowerCase().replace(/\s+/g, "-")}
              className={({ isActive }) =>
                `inline-flex items-center text-xl font-bold py-2 px-4 rounded
                  ${isActive
                    ? "bg-red-500 text-white hover:bg-red-700"
                    : "bg-gray-100 hover:bg-gray-200"
                  }`
              }
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PortfolioOptions;
