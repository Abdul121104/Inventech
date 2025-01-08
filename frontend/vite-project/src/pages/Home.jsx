import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ padding: '2rem' }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Welcome to the Inventory Management System
      </Typography>
      <Typography variant="h6" component="h2" paragraph align="center">
        Efficiently manage your products, transactions, and inventory with ease!
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Add Products
              </Typography>
              <Typography variant="body1">
                Easily add new products to your inventory. Specify product details like name, price, and quantity.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="/add-product">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                View Transactions
              </Typography>
              <Typography variant="body1">
                Track your inventory transactions. View sales, purchases, and other relevant actions in detail.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="/transactions">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Manage Inventory
              </Typography>
              <Typography variant="body1">
                Keep track of your stock, manage quantities, and ensure you never run out of critical products.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" href="/inventory">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
