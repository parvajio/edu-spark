"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react'

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  return (
    <div>
      <h2 className='font-bold text-2xl my-5'>Course List</h2>
      {courseList.length == 0 ? (
        <div className='w-full py-10 bg-gray-200 flex flex-col justify-center items-center rounded-md gap-3'>
          <p>Look like you haven't created any courses yet</p>
          <Button asChild>
            <Link href={'/'}>+ Create Your first course</Link>
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default CourseList
