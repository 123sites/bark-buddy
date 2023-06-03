import React, {useState} from 'react';

// import DogForm from './DogForm';
// import DogImages from './DogImages';
// import DogSearch from './DogSearch';
// import Favorites from './Favorites';
import Footer from './Footer';
// import Header from './Header';
import Navbar from './Navbar';

import Dog from './pages/Dog';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Videos from './pages/Videos';

export default function WebpageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
  const changePage = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === 'Dog') {
      return <Dog handlePageChange = {handlePageChange} currentPage='dog'/>;
    }
    if (currentPage === 'Footer') {
      return <Footer handlePageChange = {handlePageChange} currentPage='footer'/>;
    }
    if (currentPage === 'Home') {
      return <Home handlePageChange = {handlePageChange} currentPage='home'/>;
    }
    if (currentPage === 'Login') {
      return <Login handlePageChange = {handlePageChange} currentPage='login'/>;
    }
    if (currentPage === 'Profile') {
      return <Profile handlePageChange = {handlePageChange} currentPage='profile'/>;
    }
    if (currentPage === 'Signup') {
      return <Signup handlePageChange = {handlePageChange} currentPage='signup'/>;
    }
    if (currentPage === 'Videos') {
      return <Videos handlePageChange = {handlePageChange} currentPage='videos'/>;
    }

  return (
    <div>

      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
      <Footer />
    </div>
  );
  }}
