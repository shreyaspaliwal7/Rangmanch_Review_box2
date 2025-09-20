import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Navbar from '@/components/navbar';
import axios from "axios";

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Home() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [review, setreview] = React.useState("");
  const [rating, setrating] = React.useState(0)

  const handlechange = (e) => {
    setreview(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ review, rating }),
      });

      const data = await res.json();

      if (res.ok) {
        setreview("");
        setrating(0);
      } else {
        console.log("error")
      }
    } catch (err) {
      console.log("err")
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("/api/submitReview", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ review, rating }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       console.log("done")
  //       setreview("");
  //       setrating(0);
  //     } else {
  //       console.log("error")
  //     }
  //   } catch (err) {
  //     console.log("err")
  //   }
  // };

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-center items-center'>
        <img src=".\Jigyasa_poster2.png" className='w-[40vw] m-5' alt="" />
      </div>
      <div className='flex justify-center items-center mt-10 flex-col' >
        <div className='text-3xl' >Share your review</div>
        <div className='text-2xl text-gray-400 exp' >Rate your experience and tell us what you think</div>
        <div className='text-2xl m-8'>YOUR RATING</div>
        <Box className='mr-8 mb-5' sx={{ width: 300, display: 'flex', alignItems: 'center' }}>
          <Rating
            // onClick={(event, newValue) => {
            //   setnewvalue(value);
            //   console.log("Star clicked value:", newValue);
            // }}
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setrating(newValue);
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            // Increase star size here
            icon={<StarIcon sx={{ fontSize: 70 }} />}   // ⭐ Custom large size
            emptyIcon={<StarIcon sx={{ fontSize: 70, opacity: 0.55 }} />}
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </div>
      <div className='mt-5 flex justify-center items-center flex-col' >
        {/* <input type="text" className='w-1/2 h-40 p-5 mb-10 rounded-2xl border-2 overflow-x-scroll' placeholder='Enter Your Review' /> */}
        <textarea value={review} id="review" onChange={handlechange} className='w-1/2 p-5 mb-3 rounded-2xl border-2 ' name="review" rows="8" cols="60" placeholder="Tell us about your experience"></textarea>
        <button onClick={handleSubmit} className='cursor-pointer bg-blue-400 pl-10 pr-10 pt-3 pb-3 rounded-2xl mb-5 ' >Submit Review</button>
      </div>
    </div>
  );
}
