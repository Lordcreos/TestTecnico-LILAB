import { Avatar, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { getProductos } from '../../actions/ProductoActions';
import useStyles from '../../theme/useStyles';
import { ProductoArray } from '../data/dataPrueba';

const Productos = (props) => {

    const[paginadorProductos, setPaginadorProductos] = useState({
        count:0,
        pageIndex:0,
        pageSize:0,
        pageCount:0,
        data:[]
    });

    useEffect(()=>{
        const getListaProductos = async () =>{
           const response = await getProductos(); 
           setPaginadorProductos(response.data);
        }
        getListaProductos();
    },[]);

    const miArray = ProductoArray;
    const verProducto = (id) => {
        props.history.push("/detalleProducto/" + id);
    }

    const classes = useStyles();
    if (!paginadorProductos.data){
        return null;
    }

    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                Productos
            </Typography>
            <Grid container spacing={4}>
                { paginadorProductos.data.map(data => (
                <Grid item lg={3} md={4} sm={6} xs={12} key={data.key}>
                    <Card>
                        <CardMedia
                        className={classes.media}
                        image="img.pngv=636723781789170000"
                        title="mi producto"
                        >
                            <Avatar variant="square" className={classes.price}>
                                ${data.precio}
                            </Avatar>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" className={classes.text_card}>
                                {data.nombre}
                            </Typography>
                            <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={() => verProducto(data.id)}>
                                MAS DETALLES
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Productos;