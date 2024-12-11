import React from "react";

const Card = ({ item }) => {
  // console.log(item)

  return (
    <>
      <div className="mt-4 my-3 mx-2 ">
        <div className="card bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img className="h-72 w-96"
              src={item.image}
              alt="book"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.name}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-2 py-3">${item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 px-2 py-3">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
