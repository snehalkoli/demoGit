import React from 'react';
import BoatCard from '../card/BoatCard';
import Filters from '../cardleft/Filters';
import HomeBanner from './HomeBanner';
import Header from '../Header';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import ReviewCard from './reviewcard/ReviewCard ';
import Footer from '../footer/Footer';

const Home = () => {
  const homeLinks = [
    { label: 'Home', url: '#home' },
    { label: 'Favourite', url: '#favourite' },
    { label: 'Booking', url: '#booking' },
    { label: 'Profile', url: '#profile' },
    { label: 'Contact Us', url: '#contact', className: 'contactUs' }
  ];
  return (
    <>
      <Header links={homeLinks} />
      <div>
        <HomeBanner />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Filters />
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(243, 248, 255, 1)',
              height: '3em',
              width: '100%',
              marginTop: '10px',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_0_588)">
                    <path
                      d="M17.875 3.4375H4.125C3.7453 3.4375 3.4375 3.7453 3.4375 4.125V17.875C3.4375 18.2547 3.7453 18.5625 4.125 18.5625H17.875C18.2547 18.5625 18.5625 18.2547 18.5625 17.875V4.125C18.5625 3.7453 18.2547 3.4375 17.875 3.4375Z"
                      stroke="#4691F2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.125 2.0625V4.8125"
                      stroke="#4691F2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.875 2.0625V4.8125"
                      stroke="#4691F2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.4375 7.5625H18.5625"
                      stroke="#4691F2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5625 11L8.9375 10.3125V15.8125"
                      stroke="#4691F2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.8714 11.0008C11.9655 10.8388 12.0917 10.6978 12.2422 10.5863C12.3928 10.4749 12.5645 10.3953 12.7469 10.3526C12.9293 10.3099 13.1185 10.3049 13.3029 10.338C13.4873 10.371 13.663 10.4414 13.8193 10.5448C13.9755 10.6481 14.1089 10.7824 14.2114 10.9392C14.3139 11.096 14.3833 11.2721 14.4152 11.4567C14.4472 11.6412 14.4411 11.8304 14.3974 12.0126C14.3536 12.1947 14.2731 12.366 14.1608 12.5159L11.6875 15.8133H14.4375"
                      stroke="#4691F2"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_588">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h1>
                Add date & time to find your ideal boat for the best price
              </h1>
            </div>
            <div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_0_583)">
                  <path
                    d="M13.75 8.25L8.25 13.75"
                    stroke="#4691F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.25 8.25L13.75 13.75"
                    stroke="#4691F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z"
                    stroke="#4691F2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_583">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <BoatCard />
        </div>
      </div>
      <div
        style={{ backgroundColor: '#4691F21A;', width: '100%', height: '10px' }}
      ></div>
      <div
        style={{
          background: 'rgba(234, 236, 240, 1)',
          width: '100%',
          height: '2em'
        }}
      ></div>

      <div>
        <ReviewCard />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Home;
