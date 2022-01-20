# 🚀 Spacestagram: Image Sharing From the Final Frontier

This app was created for Shopify's Summer 2022 Front End Developer Intern Design Challenge.

- [Access the Deployment](https://thomasjnl-shopify-summer-2022.netlify.app/)
- [Challenge Specifications](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit?usp=sharing)

## Table of Contents

- [Tools Used](#tools-used)
- [Testing](#testing)
- [Specified Features](#specified-features)
  - [Fetching and Displaying Image Data](#fetching-and-displaying-image-data)
  - [Liking and Unliking Images](#liking-and-unliking-images)
- [Extra Features](#extra-features)
  - [Image Searching using a Date-picker](#image-searching-using-a-date-picker)
  - [Shareable Links for Images](#shareable-links-for-images)
  - [Loading More Images](#loading-more-images)
  - [Saving Likes Between Reloads](#saving-likes-between-reloads)
  - [User Feedback using Toasts](#user-feedback-using-toasts)
- [Reflections](#reflections)

## Tools Used
- React.js 
  - React Router
  - Redux
  - Fetch API
- TypeScript
- Chakra UI
- Jest
- [NASA's APOD Image API](https://api.nasa.gov/)


## Testing
Unit tests have been written for the liked images list component in ```\src\components\LikedImagesList\LikedImagesList.test.tsx``` 

This tests that the component renders liked images correctly, and a "no liked images" message when there are no liked images. You can run this test by running: 

```yarn test```

## Specified Features
### Fetching and Displaying Image Data
![Fetching and Displaying Image Data](docs/displayImg.gif)
### Liking and Unliking Images
![Liking and Unliking Images](docs/likingUnliking.gif)

## Extra Features
### Image Searching using a Date-picker
![Image Searching using a Date-picker](docs/searching.gif)
### Shareable Links for Images
![Shareable Links for Images](docs/sharing.gif)
### Loading More Images
![Loading More Images](docs/loadingMore.gif)
### Saving Likes Between Reloads
Likes are saved to local storage so users can access them after leaving the site. 
### User Feedback using Toasts
![User Feedback using Toasts](docs/toasts.gif)

## Reflections
If I had more time, I'd like to write more tests, making sure all components are rendered correctly. I'd also write tests for the asynchronous functions, using mocks to ensure image data is rendered correctly when a response is received.

I'd also like to add animations to my app using Framer Motion, and create effects like images popping in when loaded, and the heart and share icon animating when clicked. 
