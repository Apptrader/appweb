import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import PartnersComponent from '../components/PartnersComponent';
import FooterComponent from '../components/FooterComponent';
import VideosListComponent from '../components/VideosListComponent';
import VideosHeaderComponent from '../components/VideosHeaderComponent';
import { useSelector } from 'react-redux';

const Videos = () => {
  const user = useSelector((state) => state?.user.userFound);
  const navigate = useNavigate();


  useEffect(() => {
    // Check if user.plan is null or not 1, 2, or 3
    if (!user.idPaidPlan) {
      // Navigate to loginUser page
      navigate('/loginUser');
    }
  }, [user.plan, navigate]);

  // Render the component if user.plan is valid
  return (
    <div className="bg-black">
      <NavbarComponent />
      <VideosHeaderComponent />
      <VideosListComponent />
      <PartnersComponent />
      <FooterComponent />
    </div>
  );
};

export default Videos;