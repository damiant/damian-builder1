"use client";
import React from "react";

interface FavoriteItemProps {
  image: string;
  title: string;
  buttonText: string;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ image, title, buttonText }) => {
  return (
    <div className="inline-flex flex-col items-center gap-2 w-[203px] h-[184px]">
      <img 
        className="w-[202.931px] h-[155.581px] rounded-[10px]" 
        src={image} 
        alt={title}
      />
      <div className="flex items-center gap-24 w-full">
        <div className="flex flex-col items-start gap-0.5">
          <div className="text-black font-medium text-[8.658px] leading-[13.529px] tracking-[-0.346px]" style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', fontSize: '9px' }}>
            {title}
          </div>
          <div className="text-[#7F7F7F] font-medium text-[6.494px] leading-[13.529px] tracking-[-0.26px]" style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', fontSize: '6px' }}>
            {buttonText}
          </div>
        </div>
        <svg 
          className="w-[8.658px] h-0 stroke-[0.812px] stroke-[#797979]" 
          width="10" 
          height="7" 
          viewBox="0 0 10 7" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9.29738 3.81229C9.45588 3.65379 9.45588 3.39681 9.29738 3.23831L6.71448 0.655422C6.55599 0.496922 6.29901 0.496922 6.14051 0.655422C5.98201 0.813921 5.98201 1.0709 6.14051 1.2294L8.43641 3.5253L6.14051 5.82121C5.98201 5.97971 5.98201 6.23668 6.14051 6.39518C6.29901 6.55368 6.55599 6.55368 6.71448 6.39518L9.29738 3.81229ZM0.35199 3.93117L9.01039 3.93117V3.11944L0.35199 3.11944L0.35199 3.93117Z" 
            fill="#797979"
          />
        </svg>
      </div>
    </div>
  );
};

const Favorites: React.FC = () => {
  return (
    <div className="w-[449px] h-[229px] relative">
      {/* Title */}
      <div className="absolute left-0 top-0 w-[134px] h-[17px]">
        <span className="text-black font-black text-[12.988px] leading-[16.234px] tracking-[0.52px]" style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', fontSize: '13px' }}>
          Young's Favourite
        </span>
      </div>
      
      {/* Yellow decorative underline */}
      <svg 
        className="absolute left-[86px] top-[9px] w-[51px] h-[9px] flex-shrink-0 fill-[#EBD96B]" 
        width="53" 
        height="10" 
        viewBox="0 0 53 10" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0.91095 9.10735C13.8985 -2.36503 40.5953 0.539144 52.3202 3.42528C48.6404 9.91909 16.5141 9.91908 0.91095 9.10735Z" 
          fill="#EBD96B"
        />
      </svg>

      {/* First favorite item */}
      <div className="absolute left-[21px] top-[45px]">
        <FavoriteItem
          image="https://api.builder.io/api/v1/image/assets/TEMP/31a25ae2dbc52f5997abb8d7d64c21f1ed7a1563?width=406"
          title="Trending on instagram"
          buttonText="Buy Now!"
        />
      </div>

      {/* Second favorite item */}
      <div className="absolute left-[246px] top-[45px]">
        <FavoriteItem
          image="https://api.builder.io/api/v1/image/assets/TEMP/507ff7b85b4622eb41ca48ea3a0ffe502e037575?width=406"
          title="All Under $40"
          buttonText="Buy Now!"
        />
      </div>
    </div>
  );
};

export default Favorites;
