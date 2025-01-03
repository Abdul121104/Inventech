import React, { useState } from "react";
import axios from "axios";
import { TextField, Select, MenuItem, Button, Box, Typography, List, ListItem, ListItemText, Alert, Paper } from "@mui/material";

const TransactionForm = ({ onTransactionAdded }) => {
  const [type, setType] = useState("sale");
  const [items, setItems] = useState([]);
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleAddItem = () => {
    if (!productId || !quantity) {
      setError("Product ID and Quantity are required");
      return;
    }
    setError("");
    setItems([...items, { productId, quantity }]);
    setProductId("");
    setQuantity("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/transactions/add", {
        type,
        items,
      });
      console.log("Transaction added:", response.data);
      onTransactionAdded();
      setItems([]);
    } catch (err) {
      console.error("Error adding transaction:", err);
      setError("Failed to add transaction. Please try again.");
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 500, mx: "auto", p: 4, bgcolor: "#f9f9f9", borderRadius: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, color: "#333" }}>
        Add Transaction
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 1, color: "#333" }}>
            Transaction Type:
          </Typography>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            sx={{ bgcolor: "white", borderRadius: 1 }}
          >
            <MenuItem value="sale">Sale</MenuItem>
            <MenuItem value="purchase">Purchase</MenuItem>
          </Select>
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Product ID"
            variant="outlined"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            fullWidth
            placeholder="Enter Product ID"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Quantity"
            type="number"
            variant="outlined"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            fullWidth
            placeholder="Enter Quantity"
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
        </Box>

        <Button
          type="button"
          onClick={handleAddItem}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 2, textTransform: "none" }}
        >
          Add Item
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{ textTransform: "none" }}
        >
          Submit Transaction
        </Button>
      </form>

      {items.length > 0 && (
        <>
          <Typography variant="h6" sx={{ mt: 4, color: "#333" }}>
            Items:
          </Typography>
          <List sx={{ bgcolor: "#fff", borderRadius: 1, p: 2 }}>
            {items.map((item, index) => (
              <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
                <ListItemText primary={`Product ID: ${item.productId}, Quantity: ${item.quantity}`} sx={{ color: "#555" }} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Paper>
  );
};

export default TransactionForm;
