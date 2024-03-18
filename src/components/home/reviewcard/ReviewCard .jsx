import React from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
const ReviewCard = () => {
  const reviews = [
    {
      description:
        "This is a testimonial Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.",
      index: 0,
      name: "SOFIA BRICHET",
      company: "Some Company Name",
      src: "/src/images/FirstReview.png",
    },
    {
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see viverra quis.",
      index: 1,
      name: "JAMES THOMAS",
      company: "Some Company Name",
      src: "/src/images/SecondReview.png",
    },
  ];

  return (
    <div>
      <div style={{position: "relative"}}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            top: "9rem",
            color: "gray",
            borderRadius:'50%',
            left:'4em',
            border:'1px  solid gray'
          }}
        >
          <ChevronLeftRoundedIcon />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            color: "blue",
            right: "10em",
            top: "9rem",
            borderRadius:'50%',
            border:'1px solid blue'
          }}
        >
          {" "}
          <ChevronRightRoundedIcon />
        </div>
      </div>
      <div style={{backgroundColor: "white"}}>
              <h1 className="mb-8 font-bold text-xl flex justify-center mt-8 text-blue-600">
              Customers' tales: joy, discovery, excitement, magic, wonder
              </h1>
        <div className="flex justify-center mt-8">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="flex w-full">
                <div className="relative pr-3">
                  <div className="w-12 mx-1 rounded-full overflow-hidden">
                    <img src={review.src} alt="profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between gap-2">
                    <div>
                      <div className="max-w-96 text-3xl">
                        <span className="text-base mr-1" style={{color:'rgba(104, 111, 139, 1)'}}>{'"' + review.description + '"'}</span>
                      </div>
                      <div className="mt-3">
                        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                        <span>{review.name}</span>

                        <span>
                          <StarRateRoundedIcon style={{color: "blue"}} />
                        </span>
                        <span>
                          <StarRateRoundedIcon style={{color: "blue"}} />
                        </span>
                        <span>
                          <StarRateRoundedIcon style={{color: "blue"}} />
                        </span>
                        <span>
                          <StarRateRoundedIcon style={{color: "blue"}} />
                        </span>
                        <span>
                          <StarRateRoundedIcon style={{color: "blue"}} />
                        </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 py-1 pr-4">{review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-center">...</div>
      </div>
    </div>
  );
};

export default ReviewCard;
