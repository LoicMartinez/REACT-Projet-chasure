import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import SideSearch from "./SideSearch";
import Api from "../../api/api";
import ProductPreview from "../../components/ProductPreview";
import {useNavigate} from "react-router-dom";
import {currentUserStatus} from "../../lib/currentUserStatus";

function CollectionPage({user}) {
    const navigation = useNavigate();

    const [product, setProduct] = useState([])
    const [collection, setCollection] = useState([])

    useEffect(() => {
        if (currentUserStatus(user, false)) { // If the user is not connected, we navigate to '/login'
            navigation('/login')
        }

        let tempProducts = [];

        Api.getCollection()
            .then(collections => {
                    setCollection(collections);
                    collections.map(collection => tempProducts = [...tempProducts, ...collection.product]);
            })
            .finally(() => setProduct(tempProducts))
    }, [])

    return (
        <Grid
            container
            spacing={1}
            flexDirection={"row"}
            mt={2}
        >
            <Grid item xs={3} ml={2}>
                <SideSearch collection={collection}/>
            </Grid>
            <Grid item xs={6}>
                {product.map((item) => ProductPreview(item))}
            </Grid>
        </Grid>
    )
}

export default CollectionPage