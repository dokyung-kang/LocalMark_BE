export const galleryResponseDTO = (data, currentPage, totalPage) => {

    const products = [];

    for (let i = 0; i < data.length; i++) {
        products.push({
            'product_id': data[i].product_id,
            'brand_id': data[i].brand_id,
            'product_name': data[i].product_name,
            'brand_name': data[i].brand_name,
            'region': data[i].region,
            'discount_rate': data[i].discount_rate,
            'price': data[i].price,
            'thumbnail_url' : data[i].thumbnail_url
        })
    }
    return {"products": products, "currentPage": currentPage, "totalPage" : totalPage};
}

export const productResponseDTO = (product, product_color, product_size) => {

    const colors = [];
    const sizes = [];

    for (let i = 0; i < product_color.length; i++) {
        colors.push(product_color[i].name);
    }
    for (let i = 0; i < product_size.length; i++) {
        sizes.push(product_size[i].size);
    }

    return {"product": product, "colors": colors, "sizes": sizes};
}