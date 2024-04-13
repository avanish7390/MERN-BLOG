import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import UserProvider from './context/userContext';
import './index.css';
import AuthorPosts from './pages/AuthorPosts';
import Authors from './pages/Authors';
import CategoryPosts from './pages/CategoryPosts';
import CreatePost from './pages/CreatePost';
import Dashboard from './pages/Dashboard';
import DeletePost from './pages/DeletePost';
import EditPost from './pages/EditPost';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';





const router = createBrowserRouter([
  {
   path: "/",
   element: <UserProvider><Layout /></UserProvider>,
   errorElement: <ErrorPage />,
   children: [
    {index: true, element: <Home />},
    {path: "posts/:id", element: <PostDetail />},
    {path: "register", element: <Register />},
    {path: "login", element: <Login />},
    {path: "profile/:id", element: <UserProfile />},
    {path: "authors", element: <Authors />},
    {path: "create", element: <CreatePost />},
    {path: "posts/:id/edit", element: <EditPost />},
    {path: "posts/:id/delete", element: <DeletePost />},
    {path: "posts/categories/:category", element: <CategoryPosts />},
    {path: "posts/users/:id", element: <AuthorPosts />},
    {path: "myposts/:id", element: <Dashboard />},
    {path: "logout", element: <Logout />},
   ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
