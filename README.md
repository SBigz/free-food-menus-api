## **Introduce 🍺**

Welcome to the forked version of the Free Food Menus API! This resource grants you access to an extensive range of food-related information for free. It includes approximately 700 dishes and 15 distinct menus. Engaging with the API is incredibly simple!

<br />

## **Our best menu 🍔**

- BBQ
- Breads
- Drinks
- Ice cream
- Porks
- etc...
  <br />
  <br />

**🍞 Usage:**

Navigate to the following URL, replacing `<params>` with the appropriate endpoint:
```
https://free-food-menus-api-two.vercel.app/<params>
```

**🍕 Examples:**

Here's how you might fetch data about burgers from the API:

```js
// Use fetch (Copy and paste to browser console to see result!)
fetch('https://free-food-menus-api-two.vercel.app/burgers')
  .then((response) => response.json())
  .then((data) => console.log(data));

// What we have?
[
  {
    id: ...,
    img: ...,
    name: ...,
    dsc: ...,
    price: ...,
    rate: ...,
    country: ...
  },
  ...
]
```

**🍣 Additional parameters**

```js
// Get all data of existing dishes
/all

// Pagination
/pagination

// And the resulting data might look like this
{
  bbqs: 59,
  best-foods: 60,
  ...
}
```

**🍻 Available parameters**

```js
/bbqs
/best-foods
/breads
/burgers
/chocolates
/desserts
/drinks
/fried-chicken
/ice-cream
/pizzas
/porks
/sandwiches
/sausages
/steaks
// And if you have suggestions for any other menus or dishes, please create a new issue.
// I will do my best to add them as soon as possible. Enjoy!!
```
**💠 Disclaimer**

Please note that I am not the original author of this API. I have forked it and am maintaining this version because the original API went down.

The original author of the API is [igdev116](https://github.com/igdev116), and you can find the original repository at [free-food-menus-api](https://github.com/igdev116/free-food-menus-api).
