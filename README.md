# Trendlix FullStack End Task

This is a NextJS React app interview challenge. Please fork this repo, and push your code to a branch in your forked repo (following the instructions below).

**In this exercise you will be implementing a new page that will have a table displaying a bunch of products (Dashboard)**.

Note, it's not required to implement all these features, but implement what you can, Also, do the best you can for file structure and code best practices, Good Luck.

## May Help You

- [Figma design that will help you](https://www.figma.com/file/MEYieJxGsLkeQLnH0yVfMz/CRM-Dashboard-Customers-List-(Community)?type=design&node-id=501%3A2&mode=design&t=SXiPOUWADYbtjGEd-1)

## Requirements
- Create a page that has **user friendly style**.
- Must use **App router and tailwind**.
- User can **add update delete** any product.
- The table **must support** pagination, sorting and filter functionalities.
- The table **must support** searching by unit id functionally.
- Clicking on the image in the gallery column should open a **light box** viewing all the images for that product.
- Design DB passed on [the JSON Response](#Response).
- Feel free in designing the db with SQL or No-SQL with ORM or no but we recommend (Prisma | Mongoose).
- Make Serverless REST API to integrate with the dashboard.
- Let your imagination make the design of task responsive.

## Notes
- Feel free to add any cool tricks showing off your skills (testing, caching, SEO, rendering optimizations...).
- If anything is ambiguous or not clear, update the `README.MD` file with your assumptions
- The minimum number of records returned from the API must be **20**
## API Specification

### Response 
```js
[{
_id: "541kn1i4j51092j45i124nj" // The database generated id for the given record
productName: "Iphone 14 pro max",
price: 1000000 ,
category : "Mobile",
brand : "apple",
description: "The iPhone 14 Pro models are much more feature rich than the iPhone 14 models, offering camera technology improvements, better display capabilities, a faster A16 chip, and more. The 6.7 iPhone 14 Pro models features flat edges, stainless steel enclosure, a textured matte glass back, IP68 water resistance, and a Ceramic Shield-protected display. The 48-megapixel lens also enables a 2x Telephoto mode that uses the middle 12 megapixels for full-resolution photos with no digital zoom. This joins the existing 3x zoom enabled by the dedicated Telephoto lens, which has also been improved. The iPhone 14 Pro models support 5G connectivity and uses a new Qualcomm X65 modem",
"specifications":[{
"title" : "Audio Jack",
"value" : "Lightning Port"
},
{
"title" : "Operating System",
"value" : "iOS"
},
{
"title" : "RAM Size",
"value" : "6 GB"
}], 
forSale: true, // boolean identify product is shown on published e-commerce or no
photos:[
    'https://image1.com',
    'https://image1.com',
    'https://image1.com',
] // An array of urls for the product images
}]
```

### Inputs will help you
- `page`: A number to indicate the page needed.
- `limit`: An optional parameter to indicate the limit of the result set size
- `sort`: An optional parameter to sort by a certain field name 
- `order`: An optional parameter for sort direction (asc or desc)
- `id`: Used to filter the units with their unit id value


## Instructions for submit
1. Fork this repository
2. create feature branch like: `feature/<your-full-name>`
3. Open pull request from your branch on our repository
4. Created deployment and set the link on readme
5. Update Readme