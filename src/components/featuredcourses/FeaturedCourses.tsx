"use client"
import React from 'react'
import courseData from "@/data/data.json"
import { BackgroundGradient } from '../ui/background-gradient'
import Link from 'next/link'

const FeaturedCourses = () => {
  
    interface Courses {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
    }

    const courseDataFilter =  courseData.courses.filter((course:Courses) => (
        course.isFeatured
    ))

  return (
    <div className='text-center'>
     <div>
        <h3 className='text-green-700 text-2xl'>FEATURED COURSES</h3>
        <h1 className='text-white text-5xl mt-5 mb-10'>Learn With the Best</h1>
     </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {courseDataFilter.map((course: Courses) => (
            <div key={course.id} className='flex justify-center'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {course.title}
              </h3>
              <p className="text-base text-black mt-4 mb-2 dark:text-neutral-200">
                {course.description}
              </p>
              <div className="flex justify-center mt-4">
                <button className="rounded-full p-3 lg:p-5 md:p-4 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
                    <Link href={`/courses/&{course.slug}`}>Learn More</Link>
                </button>
              </div>
            </BackgroundGradient>
            </div>
          ))}
    </div>
    </div>
  )
}

export default FeaturedCourses
