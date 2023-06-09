import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Videos from "./pages/Videos";
import Shelters from "./pages/Shelter";
// import Shelter from './pages/Shelters';
import Donate from "./pages/ShelterDonate";
import { ThemeProvider } from "../src/components/Theme/themeContext"; // willis
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Quiz from "./pages/Quiz";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        {" "}
        {/* willis */}
        <Router>
          <div className="min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/me" element={<Profile />} />
                <Route path="/profiles/:username" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/shelter" element={<Shelters />} />
                <Route path="/donation" element={<Donate />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>{" "}
    </ApolloProvider>
  );
}

export default App;
