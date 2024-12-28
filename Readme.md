
## Introduction
This repository contains the code and resources for a Properties Listing application built using the Node.js, JavaScipt, Tailwind CSS & EJS Template Library</br> The project aims to provide users with a seamless platform to browse, list, and manage real estate properties efficiently.

## Technology Stack
- **MongoDB**: NoSQL database for storing property listings and user information.
- **Express**: Web framework for Node.js to build RESTful APIs.
- **EJS**: EJS (Embedded JavaScript) is a templating engine for generating dynamic HTML on the server. It embeds JavaScript directly into templates, enabling the creation of reusable and data-driven web pages efficiently.
- **Node.js**: JavaScript runtime for the backend server.


### Installation
Install dependencies
npm install

Starting the application
node app.js

### Features
• User authentication and authorization (JWT) <br/>
• Property listing and management <br/>
• Responsive design for mobile and desktop <br/>
• Smart recommendations and suggestions powered by AI <br/>

### Screeshots

Home Page

![alt text](<WhatsApp Image 2024-12-28 at 23.28.21_0baaa224.jpg>)


### Recommendation System Logic

![alt text](image.png)

This module implements a recommendation system for properties based on a user's viewing history, favorites, and preferences. Below is an overview of the logic:

### Key Steps

1. **Fetch User Data**
   - Retrieve user information, including their viewing history (`history`) and liked properties (`favorites`).
   - If the user is not found, return a 404 error.

2. **Fetch Properties**
   - Retrieve all properties from the database.

3. **Check User Activity**
   - If the user has no history or favorites, return a message prompting them to view or like properties.

4. **Generate Feature Vectors**
   - Create a list of all unique tags across all properties.
   - Convert each property's tags into a binary vector based on the presence of tags.

5. **Calculate User Preference Vector**
   - Combine the tags of the user's viewed and liked properties.
   - Compute an average feature vector to represent the user's preferences.

6. **Filter Properties**
   - Filter properties based on the user's explicit preferences (e.g., location, budget range, number of bedrooms).

7. **Calculate Similarity Scores**
   - For each filtered property:
     - Convert its tags into a feature vector.
     - Calculate its similarity to the user's preference vector using the cosine similarity metric.
   - Sort properties by similarity scores in descending order.

8. **Return Recommendations**
   - Return the list of recommended properties sorted by similarity.

### Helper Function

- **`getFeatureVector(tags, allTags)`**
  - Converts a list of tags into a binary vector based on the presence of tags in a master list of all unique tags.

### Error Handling

- Proper error responses for:
  - User not found.
  - Internal server errors during the recommendation generation process.

### Dependencies

- `User` and `Property` models for database interaction.
- `cosine-similarity` package for calculating similarity between vectors.


### Login Page

![alt text](<WhatsApp Image 2024-12-28 at 23.30.09_c3ed7820.jpg>)

### SignUp Page

![alt text](<WhatsApp Image 2024-12-28 at 23.30.20_5dc74823.jpg>)

### 404 Page

![alt text](<WhatsApp Image 2024-12-28 at 23.30.40_9a9544d5.jpg>)

### Responsive

### 404 Page

![alt text](<WhatsApp Image 2024-12-28 at 23.30.40_9a9544d5.jpg>)

### Propeties in MongoDB

![alt text](image-1.png)







