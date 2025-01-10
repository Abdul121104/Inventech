import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, AccordionSummary, AccordionDetails, Typography, CircularProgress, Box, Alert, Paper, Table, TableRow, TableCell, TableBody, TableHead } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/transactions");
        setTransactions(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setError("Failed to load transactions. Please try again.");
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ maxWidth: 800, mx: "auto", p: 4, mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, color: "#333", textAlign: "center", fontWeight: "bold" }}>
        Previous Transactions
      </Typography>
      {transactions.length === 0 ? (
        <Typography variant="body1" color="text.secondary" textAlign="center">
          No transactions available.
        </Typography>
      ) : (
        <Box>
          {transactions.map((transaction, index) => (
            <Accordion key={transaction._id} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: "bold", flex: 1 }}>{`#${index + 1} - ${transaction.type} (${new Date(transaction.date).toLocaleDateString()})`}</Typography>
                <Typography sx={{ color: "text.secondary", mr: 2 }}>
                  Total: ${transaction.totalTransactionPrice}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ mb: 2, fontWeight: "bold" }}>
                  Transaction Details:
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell>Product ID</TableCell> */}
                      <TableCell>Product Name</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transaction.items.map((item, itemIndex) => (
                      <TableRow key={itemIndex}>
                        {/* <TableCell>{item.productId}</TableCell> */}
                        <TableCell>{item.productName || "N/A"}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.price ? `$${item.price}` : "N/A"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default TransactionList;
