import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Coursescomp from '../Coursescomp'
import list from "../../../public/list.json"

const Course = () => {
  // console.log(list);
  
  return (
    <>
        <Navbar />
        <div className='min-h-screen '>
            <Coursescomp />
        </div>
        <Footer />
    </>
  )
}

export default Course
