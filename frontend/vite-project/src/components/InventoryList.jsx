import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  CircularProgress,
  Box,
  Alert,
  Divider,
  IconButton,
  InputBase,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setInventory(response.data);
        setFilteredInventory(response.data); // Initialize filtered inventory
        setLoading(false);
      } catch (error) {
        console.error('Error fetching inventory:', error);
        setError('Failed to load inventory. Please try again.');
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  useEffect(() => {
    // Filter the inventory based on the search term
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = inventory.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredInventory(results);
  }, [searchTerm, inventory]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ maxWidth: 800, mx: 'auto', p: 4, mt: 4 }}>
      <Typography 
  variant="h5" 
  sx={{ mb: 3, color: '#333', fontWeight: 'bold', textAlign: 'center' }}
>
  Inventory List
</Typography>

      {/* Search Bar */}
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: 3 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Inventory"
          inputProps={{ 'aria-label': 'search inventory' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
      {filteredInventory.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No products found.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#1976d2' }}>
                <TableCell sx={{ color: 'white' }}>#</TableCell>
                <TableCell sx={{ color: 'white' }}>Name</TableCell>
                <TableCell sx={{ color: 'white' }}>Quantity</TableCell>
                <TableCell sx={{ color: 'white' }}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredInventory.map((item, index) => (
                <TableRow
                  key={item._id}
                  sx={{ '&:nth-of-type(odd)': { bgcolor: '#f5f5f5' } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default InventoryList;
