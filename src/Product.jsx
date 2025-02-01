import PropTypes from "prop-types";

const Product = ({ image, title, description, price, oldPrice, badge }) => {
    return (
        <div className="product-card">
            {badge && <span className={`badge sale-badge ${badge.toLowerCase()}`}>{badge}</span>}
            <img
                src={image}
                alt={title ? `Product image of ${title}` : "Product image"}
                className="product-image"
            />
            <h3 className="product-title">{title}</h3>
            <p className="product-description">{description}</p>
            <div className="product-price">
                <span className="current-price">{price}₾</span>
                {oldPrice && oldPrice > 0 && <span className="old-price">{oldPrice}₾</span>}
            </div>
        </div>
    );
};

Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,  // 🔄 შესაძლებელი უნდა იყოს რიცხვიც და სტრინგიც
    oldPrice: PropTypes.number,
    badge: PropTypes.string,
};

export default Product;
