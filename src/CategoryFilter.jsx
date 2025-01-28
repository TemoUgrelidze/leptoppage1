import "react";
import PropTypes from "prop-types";

const categories = [
    { value: "mobile", label: "📱 Mobiles" },
    { value: "tablet", label: "📊 Tablets" },
    { value: "laptop", label: "💻 Laptops" },
];

const CategoryFilter = ({ selectedCategories, handleCategoryChange }) => {
    return (
        <div className="category-filter">
            <h3>Filter by Category</h3>
            {categories.map(({ value, label }) => (
                <label key={value} className="category-label">
                    <input
                        type="checkbox"
                        value={value}
                        checked={selectedCategories.includes(value)}
                        onChange={handleCategoryChange}
                        aria-label={`Filter by ${label}`}
                    />
                    {label}
                </label>
            ))}
        </div>
    );
};

CategoryFilter.propTypes = {
    selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
