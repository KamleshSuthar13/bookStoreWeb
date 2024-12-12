import React, { useState, useEffect } from "react";
import Card from "./Card"
import axios from "axios"
import { Link } from "react-router";

const Coursescomp = () => {
  const [book, setBook] = useState([ ])
  useEffect(() => {
    const getBook = async() => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [])
  
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 container">
        <div className="mt-28 text-center items-center justify-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500 "> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            commodi ea accusamus eum officia, fugiat vel voluptates maxime
            placeat sed cupiditate autem nisi temporibus mollitia in itaque
            totam officiis sunt. Illo consectetur officiis voluptates fugiat
            odit, alias eveniet. Et necessitatibus maiores nesciunt officia, nam
            magni sunt saepe totam praesentium? Possimus aperiam porro omnis.
            Numquam aut eum qui, voluptatem fuga nostrum.
          </p>
          <Link to='/'>
          <button className="bg-pink-500 text-white rounded-md mt-6 px-4 py-2 hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                book.map((item) => (
                    <Card item={item} key={item.id}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Coursescomp;
