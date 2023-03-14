import React from "react";
import Navigation from "../components/navigation/Navigation";
import { Route, Routes as ReactRouterRouts } from "react-router-dom";
import HomePage from "../pages/Home.page";
import PostsPage from "../pages/Posts.page";
import PhotosPage from "../pages/Photos.page";
import Contacts from "../pages/Contacts.page";

export const AppRoutes = {
  home: {
    id: 1,
    path: "/",
    element: <HomePage />,
  },

  puplications: {
    id: 2,
    path: "/posts",
    element: <PostsPage />,
  },

  photo: {
    id: 3,
    path: "/photos",
    element: <PhotosPage />,
  },

  contacts: {
    id: 4,
    path: "/contacts",
    element: <Contacts />,
  },
};

const Routes = (props) => {
  return (
    <div>
      <Navigation />
      <ReactRouterRouts>
        {Object.values(AppRoutes).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </ReactRouterRouts>
    </div>
  );
};

export default Routes;
