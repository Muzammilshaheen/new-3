import React from 'react'

const page = () => {
  return(
    <figure className="md:flex bg-lime-400 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-500 rounded-full mx-auto" src="/rehan.jpg" alt="" width="184" height="312"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
  <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400 text-center text-4xl text-red-500 italicbg-auto">
        Muzammil shaheen
      </div>
      <div className="text-slate-700 dark:text-slate-500 text-center bg-white bg-white bg-contain rounded-full">
        Physical Education
      </div>
    </figcaption>
    <blockquote>
      <p className="text-lg font-medium bg-black rounded-full text-base px-10 py-10 border-y-amber-800 text-white">
        “Her classes are known for being energetic and inclusive, catering to students of all skill levels and encouraging them to reach their full potential. Maria integrates a variety of sports, exercises, and activities to keep students engaged and motivated, while also teaching them the value of maintaining a healthy lifestyle.

Maria is committed to creating a positive and supportive environment where students feel confident and excited to participate. She also places a strong emphasis on the development of social and emotional skills through physical education, such as leadership, cooperation, and resilience.”
      </p>
    </blockquote>
    
  </div>
</figure>
  )
}

export default page  