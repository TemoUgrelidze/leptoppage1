import  { useState } from "react";
import productsData from "./products.json";
import ProductList from "./ProductList";
import Cart from "./Cart";
import CategoryFilter from "./CategoryFilter";
import "./App.css";

const App = () => {
    const [products] = useState(productsData.data);
    const [cart, setCart] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleSortChange = (e) => setSortOption(e.target.value);
    const handleSearchChange = (e) => setSearchQuery(e.target.value.toLowerCase());
    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setSelectedCategories((prev) =>
            prev.includes(value) ? prev.filter((cat) => cat !== value) : [...prev, value]
        );
    };

    const addToCart = (product) => setCart([...cart, product]);
    const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
    const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortOption) {
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "name-asc":
                return a.title.localeCompare(b.title);
            case "name-desc":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });

    const filteredProducts = sortedProducts.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery);
        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(product.category || "laptop");
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container">
            <h1 className="header">Products</h1>
            <CategoryFilter
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
            />
            <ProductList
                products={products}
                filteredProducts={filteredProducts}
                addToCart={addToCart}
                handleSearchChange={handleSearchChange}
                handleSortChange={handleSortChange}
                searchQuery={searchQuery}
                sortOption={sortOption}
            />
            <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                totalCartPrice={totalCartPrice}
            />
        </div>
    );
};

export default App;
