import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function ProductForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setFormData({ name: "", quantity: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        width="300px"
        margin="auto"
        sx={{ bgcolor: "background.paper", p: 3, borderRadius: 2 }}
      >
        {/* Add heading with black text color */}
        <Typography
          variant="h5"
          component="h2"
          align="center"
          gutterBottom
          sx={{ color: "black" }}
        >
          Add Product
        </Typography>

        <TextField
          id="name"
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          id="quantity"
          label="Quantity"
          type="number"
          variant="outlined"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <TextField
          id="price"
          label="Price"
          type="number"
          variant="outlined"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          size="large"
        >
          Add Product
        </Button>
      </Box>
    </form>
  );
}

export default ProductForm;
