# Simple Online Store

A Tier 2-Intermediate project focused on building a functional front-end for a basic e-commerce application. This project emphasizes mastering core JavaScript concepts like **state management**, **dynamic rendering**, and **data processing** to simulate a real-world shopping experience.

---

##  Project Goals & User Stories

The primary goal is to allow users to **view products**, **add/remove items from a shopping cart**, **adjust quantities**, and **simulate the placement/cancellation of an order**.

### Core Functionality Implemented

* **View Products:** Navigate from the Landing Page to the Products Page using a **View Products** button.
* **Product Catalog:** See a card for each Product showing the thumbnail, name, price, short description, and a **Select** button.
* **Product Details:** Clicking **Select** shows a detailed view with a unique ID, long description, **Add to Cart** button, and **See More Products** button.
* **Cart Management:** User sees a confirmation message when a product is added to the cart.
* **Shopping Cart View:** A prominent **Shopping Cart** button displays a page listing added products (ID, name, price) with an adjustable **quantity input**.
* **Dynamic Total Calculation:** The cart displays a total purchase amount, calculated dynamically as $\sum (\text{Price} \times \text{Quantity})$.
* **Quantity Adjustment:** Changing the quantity input box instantly updates the total purchase amount.
* **Order Completion:** Clicking **Place Order** provides an order confirmation number.
* **Order Cancellation:** Clicking **Cancel Order** resets the cart quantities and total to zero.

---

## Key JavaScript Concepts & Implementation Details

This project is an excellent exercise in mastering core JavaScript concepts essential for building interactive web applications.

### 1. State Management: The Shopping Cart 

The application's dynamic behavior is driven by two primary states managed using JavaScript arrays and objects:

| State Variable | Structure | Purpose |
| :--- | :--- | :--- |
| **`Inventory`** | `Array<ProductObject>` | Static list of all available products (ID, Name, Price). |
| **`Cart`** | `Array<CartItemObject>` | Dynamic list storing only the `productId` and the user-specified `quantity`. |

### 2. Data Processing with Array Methods

Advanced array methods are used to manage and calculate data efficiently:

| Method | Application in the Store |
| :--- | :--- |
| **`.find()`** | Retrieves the full product data (especially the unit price) from the `Inventory` using the `productId` stored in the `Cart`. |
| **`.map()`** | Iterates over the `Inventory` or `Cart` to **generate the corresponding HTML elements** (Product Cards, Cart Rows) for display. |
| **`.reduce()`** | **Crucial for calculating the Total Price.** It sums the total of (Price $\times$ Quantity) for all items in the cart, simplifying the necessary financial calculations. |

### 3. Asynchronous Operations (The `fetch` API)

For handling the external loading of inventory (a bonus feature), asynchronous JavaScript is used.

* We use the **`fetch()` API** which returns a **Promise** to retrieve product data from a static file (e.g., `products.json`) or a mock API endpoint.
* The **`async`/`await`** syntax is implemented to handle the Promise resolution, ensuring that the application only attempts to render products *after* the inventory data has been successfully loaded into the JavaScript environment.

