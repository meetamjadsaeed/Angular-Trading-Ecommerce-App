# E-Commerce Web Application

This project is an Angular-based e-commerce web application designed to cover all the basics to advanced concepts of Angular, including RxJS, Redux, and more. The project is a work in progress, and I will continue to add new features and fix bugs over time.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Development Server](#development-server)
- [Backend Setup](#backend-setup)
- [Technologies Used](#technologies-used)
- [Current Functionalities](#current-functionalities)
- [Future Enhancements](#future-enhancements)
- [Boilerplate](#boilerplate)

## Project Overview

This project aims to create a robust e-commerce platform using Angular. It includes various functionalities typical of e-commerce applications, such as authentication, product management, wishlist, order tracking, and more. The application is built using a boilerplate that provides a strong foundation with pre-configured environment settings, state management, and other essential features.

## Features

- Authentication
- Product Management (CRUD operations)
- Wishlist Management
- Order Tracking
- User Profile Management
- Category and Brand Management
- Discount and Coupon Management
- Review and Reply System
- Newsletter Subscription
- Contact Us Form
- FAQ Management
- Search Functionality
- Banner and Ad Management
- Blog Management
- Integration with payment gateways.
- different users (seller, normal user, admin)

## Setup and Installation

To set up and run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/meetamjadsaeed/Angular-Trading-Ecommerce-App.git
   cd Angular-Trading-Ecommerce-App
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend Setup

For the backend, we are using `json-server`. This allows you to set up a mock backend quickly without the need for a full-fledged server.

1. Install `json-server` globally:

   ```bash
   npm install -g json-server
   ```

2. Run `json-server` with the provided `db.json` file:
   ```bash
   npx json-server db.json
   ```

Your backend will be ready and running at `http://localhost:3000/`.

## Technologies Used

- **Angular 17**: The latest version of Angular for building scalable web applications.
- **NGXS**: State management library modeled after the CQRS pattern.
- **RxJS**: Reactive programming library for managing asynchronous data streams.
- **ngx-translate**: Library for easy internalization and localization.
- **json-server**: Tool to create a full fake REST API with zero coding.

## Current Functionalities

### Authentication

- **Auth**: { "status": "success", "message": "Authenticated" }
- **Register**: { "status": "success", "message": "User registered successfully" }
- **Login**: { "status": "success", "message": "User logged in successfully" }

### Product Management

- **Products**: CRUD operations on products, including discounts, ratings, and trade options.

### Wishlist Management

- **Wish List**: Manage user's wish list items.

### Order Tracking

- **Order**: Track order status and details.

### User Profile Management

- **Profile**: Update user profile information, change password.

### Additional Features

- **Categories**: Manage product categories.
- **Colors**: Manage product colors.
- **Hot Deals**: Special discounts on selected products.
- **Related Products**: Display related products.
- **Reviews and Replies**: User reviews and admin replies.
- **Contact Us**: Form for users to contact support.
- **Newsletter**: Subscription management.
- **FAQs**: Frequently asked questions.
- **Search**: Product search functionality.
- **Banners and Ads**: Manage promotional banners and advertisements.
- **Blogs**: Manage blog posts.

## Future Enhancements

- Enhanced admin dashboard for managing all aspects of the e-commerce platform.
- Advanced analytics and reporting features.
- Improved UI/UX with responsive design.
- More customization options for users and admins.

## Boilerplate

This project uses a boilerplate Angular 17 application as its foundation.

### Features Summary:

- **Base Structure**: Pre-configured environment for starting projects on Angular 17.
- **Authorization Module**: Base auth forms, services, guards, and state management.
- **State Management**: Managed by NGXS, with plugins for logging, storage, and router integration.
- **Internalization**: Easy internalization using ngx-translate.
- **Testing**: Pre-configured with Karma for unit testing.

For more details, visit the [Boilerplate Repository](https://github.com/vallettasoftware/boilerplate-angular?tab=readme-ov-file).
