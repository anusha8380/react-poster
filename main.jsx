import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader} from "./components/PostDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: "/:id", element: <PostDetails />, loader: postDetailsLoader }
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
