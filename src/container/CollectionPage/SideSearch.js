import {Card, Grid, Typography} from "@mui/material";

function SideSearch({collection}) {
    // TODO: Make a side bar for search
    const style = {
        card: {
            width: 1,
            height:100 ,
            marginBottom: 1,
            display:'flex',
            alignItems: "center",
        }
    }

    return (
            <Card sx={style.card}>
                <Grid container ml={2}>
                    <Grid item>
                        <Typography variant="h6">Recherche</Typography>
                    </Grid>
                </Grid>
            </Card>
    )
}

export default SideSearch