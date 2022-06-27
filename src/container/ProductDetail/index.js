const {useParams} = require("react-router-dom");
const {Button} = require("@mui/material");

function ProductDetail() {
    let { id } = useParams();
    console.log("id")
    console.log(id)
    return (
        <Button>
            {id}
        </Button>
    );
}

export default ProductDetail;