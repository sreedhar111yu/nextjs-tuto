export default function ReviewDEtails({params}){
    return(
        <>
        Review  {params.reviewId} for product {params.productId}
        </>
    )
}

//localhost:3000/products/1/reviews/1   