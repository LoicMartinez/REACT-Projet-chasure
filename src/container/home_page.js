import {Button, Card, Grid} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";

function HomePage() {
    const [count, setCount] = useState(0)

    return (
        <Grid container spacing={1} flexDirection={"row"}>
                <Card xs={2}>
                    mama
                </Card>
                <Card sx={{ width: 1 }} xs={8}>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            11
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            12
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            13
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            14
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            15
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            16
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            17
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            18
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button >
                            1
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            2
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            3
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            4
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            5
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            6
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            7
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            8
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            9
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button >
                            10
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            11
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            12
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            13
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            14
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            15
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            16
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            17
                        </Button>
                    </Grid>
                    <Grid item display={"flex"} xs={6}>
                        <Button >
                            18
                        </Button>
                    </Grid>
                </Card>
            </Grid>
    )
}

export default HomePage