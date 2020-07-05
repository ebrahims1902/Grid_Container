
import React from "react";

import Card from '../components/Card/Card'
import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px"
    }
})

export default function GridCard() {
    const classes = useStyles();
    return (

        <Grid container spacing={4} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={3}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card />
            </Grid>
        </Grid>
    );
};