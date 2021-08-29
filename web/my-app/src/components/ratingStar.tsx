import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const labels: { [index: string]: string } = {
    0: 'Absolutt ubrukelig',
    0.5: 'Absolutt ubrukelig+',
    1: 'Forkastelig',
    1.5: 'Forkastelig+',
    2: 'Flaut',
    2.5: 'Flaut+',
    3: 'Dårlig',
    3.5: 'Dårlig+',
    4: 'Begrenset',
    4.5: 'Begrenset+',
    5: 'OK',
    5.5: 'OK+',
    6: 'Bra',
    6.5: 'Bra+',
    7: 'Sterk',
    7.5: 'Sterk+',
    8: 'Imponerende',
    8.5: 'Imponerende+',
    9: 'Overjordisk',
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
        <Grid container md={4}>
            <Box width="100%" justifyContent="center">
                <Typography component="legend">{props.text}</Typography>
            </Box>
            <Box pr={3} width="60%" borderColor="transparent" display="flex" flexDirection="row-reverse">
                <Rating size="small" precision={0.5} defaultValue={2} max={10} onChange={(event, newValue) => { setValue(newValue); }}
                    onChangeActive={(event, newHover) => { setHover(newHover); }} />
            </Box >
            {value !== null && <Box>
                {labels[hover !== -1 ? hover : value]}
            </Box>}
        </Grid >

    )
}
export const RatingComp = () => {
    const names: string[] = ["Fart", "Skudd", "Pasninger",
        "Dribbling", "Forsvar", "Fysikk", "Pinnerud-faktor"]
    return (
        <Grid container direction="column">
            {names.map((value) => {
                return (
                    <Grid container direction="row">
                        <Rater text={value} />
                    </Grid>)
            }
            )}
        </Grid>
    )
}