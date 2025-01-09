export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [{
                type: 'category'
            }]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'URL-friendly version of the product name',
            options: {
                source: 'name',
            },
        },
        {
            name: 'price',
            type: 'number',
            title: 'price',
        },
        {
            name: 'quantity',
            type: 'number',
            title: 'quantity',
        },
        {
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount Percentage',
        },
        {
            name: 'priceWithoutDiscount',
            type: 'number',
            title: 'Price Without Discount',
            description: 'Original price before discount'
        },
        {
            name:'rating',
            type:'number',
            title:'Rating',
            description:'Rating of the product'
        },
        {
            name: 'ratingCount',
            type: 'number',
            title: 'Rating Count',
            description: 'Number of ratings'
        },
        {
            name: 'images',
            type: 'image',
            title: 'Product Images',
            
          },
    ]
};