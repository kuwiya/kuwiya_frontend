# Kuwiya Frontend Web Application Documentation

Welcome to the documentation for the Kuwiya web application. This documentation will provide you with comprehensive information on how to understand, use, and extend the application. Kuwiya is built with React, Tailwind CSS, and Vite, and it aims to satisfy the taste of food enthusiasts while connecting customers to various restaurants.

## Table of Contents

1. Installation
2. Usage
   - Search for Restaurants
   - View Restaurant Listings
   - Explore Restaurant Details
   - Leave Reviews and Ratings
   - Personalized Recommendations
   - Claim Coupons Page Implementation
3. Contributing
4. Contact

## Installation

> To install and set up Kuwiya frontend web application on your local machine, follow these steps:

1. Clone the repository: git clone <https://github.com/KuwiyaHQ/Kuwiya_HQ_V001.git>
2. Navigate to the project directory: cd Front-End
3. Install the dependencies: npm install
4. Start the development server: npm run dev
5. Open your web browser and visit: http://localhost:5173

## Usage

Once the installation is complete, you can start using Kuwiya application. Below are the key features and functionalities provided by the application:

### Search for Restaurants

Kuwiya allows you to **search** for restaurants based on various criteria, including cuisine type, location, or specific dishes. To search for restaurants, follow these steps:

1. Enter your search criteria in the search bar.
2. Click the search button or press Enter.
3. The application will display a list of restaurants matching your search criteria.

### View Restaurant Listings

The application provides a list of **restaurant listings** based on your search criteria. Each listing includes essential details such as the restaurant name, cuisine type, ratings, and reviews. To view restaurant listings, follow these steps:

1. After performing a search, the application will display a list of restaurants.
2. Scroll through the list to explore different restaurant options.
3. Click on a restaurant listing to view its detailed information.

### Explore Restaurant Details

Kuwiya provides **comprehensive information** about each restaurant, including address, contact details, opening hours, menu, and user reviews. To explore restaurant details, follow these steps:

1. Click on a restaurant listing from the restaurant listings page.
2. The application will navigate to the restaurant details page.
3. On the restaurant details page, you can find information such as the restaurant's address, contact details, opening hours, and menu.
4. Scroll down to read user reviews and ratings for the restaurant.

### View Marketplace Data

The application provides a list of **marketplace data** based on your search criteria. The marketplace have different sections such as Available Discounted Meals which displays essential details such as the the position in terms of most liked, percentage off, restaurant name, cuisine name, price, ratings, and reviews.
The marketplace also contains the coupon section which displays the available coupons for different restaurants. The coupons displayed shows some necessary information about the individual coupon.
The marketplace contains the all items available section for different restaurants. This helps the user to easily know the available items on the database.

To view the user's desired searched informations on all sections, follow these steps:

1. After performing a search on the navbar search bar, the application will display a list of available items based on the search criteria.
2. Scroll through the sections to explore different marketplace options.
3. Click on a item listing from the marketplace section to view its detailed information.

### Leave Reviews and Ratings

As a user of the Kuwiya web application, **you can leave reviews and ratings** for restaurants based on your dining experiences. To leave a review and rating, follow these steps:

1. Navigate to the restaurant details page of the restaurant you want to review.
2. Scroll down to the review section.
3. Click on the "Leave a Review" button.
4. Fill in the required details, such as your name and review content.
5. Assign a rating to the restaurant.
6. Submit the review by clicking the "Submit" button.

### Personalized Recommendations

Kuwiya offers personalized **restaurant recommendations** based on your preferences, and favorite restaurants. To access personalized recommendations, follow these steps:

1. Once you have created an account and logged in, the application will provide personalized recommendations on the homepage or in a dedicated recommendations section.
2. Explore the recommended restaurants based on your unique preferences and dining history.

### Claim Coupons Page Implementation

Each Coupon rendered on the home page has been linked to a personalized coupon details page, that can be accesssed by clicking the **claim it** button , on this page the clicked coupon details as well as similar coupons from the offering restaurant can be viewed.

To run in development:

1. Start the development server: npm run dev
2. Start local server: npm run serve-json

### Add Restaurant Page Implementation

The add restaurant page implementation makes the restaurant owner register his/her restaurant and the data would be stored in Kuwiya's database. The page gives the restaurant owner the priviledge to select the subscription plan after inputting the details. The submit button sends the restaurant details to the database. The link to the add restaurant page can be found among the footer links of the webpages.

**Link to view in development** - <http://localhost:5173/claim-coupon/'couponid'>

## Contributing

If you want to contribute in any way [bugs, suggestions or new features], please follow the steps below:

1. Fork the repository.
2. Create a new branch for your contribution: git checkout -b my-contribution
3. Make your changes and perform necessary tests.
4. Commit your changes: git commit -m "Add my contribution"
5. Push to the branch: git push origin my-contribution
6. Open a pull request with a clear description of your changes.

## Contact

If you have any questions, suggestions, or need assistance with the Kuwiya web application, please contact our support team at <support@kuwiya.com>. We appreciate your feedback and are here to help you discover the best dining experiences!
