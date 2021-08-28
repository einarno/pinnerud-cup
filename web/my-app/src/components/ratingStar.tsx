import React from 'react';
import ReactDOM from 'react-dom';
import Rating from '@material-ui/lab/Rating';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const labels: { [index: string]: string } = {
    0: 'Forkastelig',
    0.5: 'Flaut',
    1: 'Flaut',
    1.5: 'Flaut+',
    2: 'Elendig',
    2.5: 'Elendig+',
    3: 'Dårlig',
    3.5: 'Dårlig+',
    4: 'Begrenset',
    4.5: 'Begrenset+',
    5: 'OK',
    5.5: 'OK+',
    6: 'Bra',
    6.5: 'Bra+',
    7: 'Sterkt',
    7.5: 'Sterkt',
    8: 'Imponerende+',
    8.5: 'Imponerende+',
    9:  'Overjordisk',
    9.5: 'Overjordisk+',
    10: 'Verdensklasse',
  };

interface raterProps {
    text: string
}
export const Rater = (props: raterProps) => {
    const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);
    return (
            <Grid container item justifyContent="center">
                    <Grid container item justifyContent="center">
                        <Typography component="legend">{props.text}</Typography>
                    </Grid>
                    <Box ml={2}> 
                        <Rating defaultValue={2} max={10} onChange={(event, newValue) => { setValue(newValue); }}
                                onChangeActive={(event, newHover) => {setHover(newHover);}}/>
                    </Box>
                    {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                
            </Grid>

    )
}
export const RatingComp = () => {
    return (
        <Grid container justifyContent="center">
            <Grid container item> 
                <Rater text="fart"/>
            </Grid >
            <Grid container item> 
                <Rater text="Skudd"/>
            </Grid >
            <Grid container item>  
                <Rater text="pasninger"/>
            </Grid>
            <Grid container item>  
                <Rater text="dribbling"/>
            </Grid>
            <Grid container item>  
                <Rater text="Forsvar"/>
            </Grid>
            <Grid container item>  
                <Rater text="Fysikk"/>
            </Grid>
            <Grid container item>  
                <Rater text="Pinnerud-faktor"/>
            </Grid> 
        </Grid>
    )
}