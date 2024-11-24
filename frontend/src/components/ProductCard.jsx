// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
    // Construct the full URL for the image
    const imageUrl = product.image.startsWith("http")
        ? product.image
        : `http://localhost:5000${product.image}`; // Adjust this URL to match your backend

    // Debugging: Log the constructed image URL
    console.log("Constructed Image URL:", imageUrl);

    return (
        <div className="product-card">
            <img
                src={imageUrl}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                    // Fallback image if the provided URL is broken
                    e.target.src = "https://via.placeholder.com/150";
                    console.error("Image failed to load:", imageUrl); // Log the error
                }}
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className="product-actions">
                <button onClick={() => onEdit(product)}>Edit</button>
                <button onClick={() => onDelete(product._id)}>Delete</button>
            </div>
        </div>
    );
};

export default ProductCard;
