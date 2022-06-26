import {Button, Card, Grid, Typography} from "@mui/material";

function ProductPreview(product) {
    const style = {
        card: {
            width: 1,
            height:100 ,
            marginBottom: 1,
            display:'flex',
            alignItems: "center"
        }
    }
    return (
        <Card sx={style.card} xs={8}>
            <Grid container justifyContent={"space-between"} m={3}>
                <Grid item>
                    <Typography variant="h6">{product?.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">{product?.name}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6">{product?.price}€</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        Detail
                    </Button>
                </Grid>
            </Grid>

        </Card>
    )
}

export default ProductPreview