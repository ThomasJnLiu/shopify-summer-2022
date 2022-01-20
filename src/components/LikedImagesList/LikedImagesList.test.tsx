import { render, screen } from "@testing-library/react";
import { LikedImagesList } from "./LikedImagesList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Liked images list component", () => {
  const mockStore = configureStore();
  let store;
  test("renders empty list message", () => {
    const initialState = { images: { likedImages: [] } };

    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <LikedImagesList />
      </Provider>
    );

    // Assert
    const noLikedImagesElement = screen.getByText("No Liked Images");
    expect(noLikedImagesElement).toBeInTheDocument();
  });
  test("renders liked images", () => {
    const initialState = {
      images: {
        likedImages: [
          {
            date: "string",
            explanation: "string",
            hdurl: "string",
            media_type: "image",
            service_version: "string",
            title: "string",
            url: "string",
          },
        ],
      },
    };

    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <LikedImagesList />
      </Provider>
    );

    const likedImagesElement = screen.getByRole("img");
    expect(likedImagesElement).toBeInTheDocument();
  });
});
