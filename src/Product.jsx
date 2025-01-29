import "react";
import PropTypes from "prop-types";

const Product = ({ image, title, description, price, oldPrice, badge }) => {
    return (
        <div className="product-card">
            {badge && <span className="badge sale-badge">{badge}</span>}
            <img src={image} alt={`Product: ${title}`} className="product-image"/>
            <h3 className="product-title">{title}</h3>
            <p className="product-description">{description}</p>
            <div className="product-price">
                <span className="current-price">{price}₾</span>
                {oldPrice && <span className="old-price">{oldPrice}₾</span>}
            </div>

        </div>
    );
};

Product.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,  // 🔄 price უნდა იყოს რიცხვი
    oldPrice: PropTypes.number,          // 🔄 oldPrice-ც რიცხვი უნდა იყოს
    badge: PropTypes.string,             // ✅ badge-მა უნდა მიიღოს ნებისმიერი ტექსტი
};

export default Product;
