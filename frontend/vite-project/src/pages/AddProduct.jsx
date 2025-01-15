import React from 'react';
import axios from 'axios'; // Import Axios for making API requests
import ProductForm from '../components/ProductForm';

function AddProductPage() {
  const handleAddProduct = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/products/add', formData);
      console.log('Product added successfully:', response.data);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };
  return (
    <div>
      <h1 className="text-white text-2xl mb-4" text-align="centre">this ables to create a </h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  );
}
export default AddProductPage;
