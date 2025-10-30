import React from 'react'
import WelcomeDashboard from './_components/WelcomeDashboard'
import CourseList from './_components/CourseList'

const page = () => {
  return (
    <div>
      <WelcomeDashboard></WelcomeDashboard>
      <CourseList></CourseList>
    </div>
  )
}

export default page