// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from './Cards';


function Bolgs() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        // const getBook = async () => {
        //     try {
        //         const res = await axios.get("http://localhost:5000/api/blogs");

        //         const data = res.data.filter((data) => data.category === "Free");
        //         console.log(data);
        //         setBook(data);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };

        const getBlogs = async () => {
            try {
                const res = await axios.get("https://mernbackend-main.onrender.com/api/blogs");
                // console.log(res.data); // Log all fetched data
                setBook(res.data); // Set all fetched data
            } catch (error) {
                console.log(error);
            }
        };
        getBlogs();
    }, []);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // const filterData = list.filter((data) => data.category === "Free");
    // console.log(filterData)
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-semibold text-xl pb-2 text-center">Recommended Blogs</h1>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                        corporis nulla non suscipit, iure neque earum?
                    </p> */}
                </div>

                <div>
                    <Slider {...settings}>
                        {
                            book.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Bolgs
