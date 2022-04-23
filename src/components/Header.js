import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import SearchBar from './SearchBar';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={14}>
            <Typography variant='h3'>
                <Link to="/">
                    Dio Shopping
                </Link>    
            </Typography>
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <SearchBar/>              
            <Cart />            
        </Grid>
    )
}

export default Header;
