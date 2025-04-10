"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"

export default function RecommendedJobsPage() {
  const [recommendedJobs, setRecommendedJobs] = useState([])
  const router = useRouter()

  useEffect(() => {
    const savedJobs = localStorage.getItem("recommendedJobs")
    if (savedJobs) {
      setRecommendedJobs(JSON.parse(savedJobs))
    } else {
      const defaultJobs = [
        {
          title: "Computer Engineering",
          description: "Designs and develops computer systems and components.",
          salary: "$100,000",
          growth: "10%",
        },
        {
          title: "Software Engineering",
          description: "Develops and maintains software applications.",
          salary: "$110,000",
          growth: "12%",
        },
        {
          title: "Engineering",
          description: "Applies scientific principles to design and build structures and systems.",
          salary: "$95,000",
          growth: "8%",
        },
      ]
      setRecommendedJobs(defaultJobs)
      localStorage.setItem("recommendedJobs", JSON.stringify(defaultJobs))
    }
  }, [])

  const handleLearnMore = (job) => {
    router.push(`/roadmap?career=${encodeURIComponent(job.title)}`)
  }

  return (
    <>
      <Navbar />
      <div className="relative bg-gradient-to-br from-[#6d6bd3] via-[#6d6bd3] to-[#6d6bd3] h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/0f842a5615fc80362a29e48bd4ce0497.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative h-full flex items-center justify-center">
          <div className="text-white text-center z-10">
            <h1 className="text-4xl font-bold leading-tight mb-4">Top 3 Careers</h1>
            <p className="text-lg mb-4">This data was generated based on your major</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 p-6 space-y-6">
        {recommendedJobs.length > 0 ? (
          recommendedJobs.map((job, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white shadow-sm"
            >
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold flex items-center mb-2">
                  <span className="mr-2">💼</span> {job.title}
                </h3>
                <p className="text-gray-600">{job.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Median Yearly Income:</span> {job.salary}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Projected Job Growth:</span> {job.growth}
                </p>
                <button
                  onClick={() => handleLearnMore(job)}
                  className="mt-2 bg-[#6d6bd3] text-white px-4 py-2 rounded-md hover:bg-[#5a58b8] transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No recommendations available.</p>
        )}
      </div>
    </>
  )
}

// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import Navbar from "@/components/navbar"
// import RoadmapStep from "@/components/stepone"
// import { Loader2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"

// export default function RecommendedJobsPage() {
//   const [recommendedJobs, setRecommendedJobs] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [roadmap, setRoadmap] = useState(null)
//   const [selectedTitle, setSelectedTitle] = useState("")
//   const [career, setCareer] = useState(null)
//   const [error, setError] = useState(null)
//   const router = useRouter()

//   const handleLearnMore = async (job) => {
//     const { title, description, salary, growth } = job
//     setSelectedTitle(title)
//     setCareer({ title, description, income: salary, growth })
//     setLoading(true)
//     setError(null)

//     try {
//       const response = await fetch("/api/generate-roadmap", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, description }),
//       })

//       if (!response.ok) throw new Error("Failed to fetch roadmap")

//       const data = await response.json()
//       setRoadmap(data)
//       setLoading(false)

//       // Optionally save to localStorage
//       localStorage.setItem("careerRoadmap", JSON.stringify(data))
//     } catch (err) {
//       console.error("Error fetching roadmap:", err)
//       setError("There was an error generating the roadmap.")
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     const savedJobs = localStorage.getItem("recommendedJobs")
//     if (savedJobs) {
//       setRecommendedJobs(JSON.parse(savedJobs))
//     } else {
//       const myFakeJobs = [
//         {
//           title: "Computer engineering",
//           description: "Designs and develops computer systems and components.",
//           salary: "$100,000",
//           growth: "10%",
//         },
//         {
//           title: "Software engineering",
//           description: "Develops and maintains software applications.",
//           salary: "$110,000",
//           growth: "12%",
//         },
//         {
//           title: "Engineering",
//           description: "Applies scientific principles to design and build structures and systems.",
//           salary: "$95,000",
//           growth: "8%",
//         },
//       ]
//       setRecommendedJobs(myFakeJobs)
//     }
//     setLoading(false)
//   }, [])

//   return (
//     <>
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-br from-[#6d6bd3] via-[#6d6bd3] to-[#6d6bd3] h-[200px] overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://public.readdy.ai/ai/img_res/0f842a5615fc80362a29e48bd4ce0497.jpg')] bg-cover bg-center opacity-20"></div>
//         <div className="max-w-7xl mx-auto px-4 py-20 relative h-full flex items-center justify-center">
//           <div className="text-white text-center z-10">
//             <h1 className="text-4xl font-bold leading-tight mb-4">Top 3 Careers</h1>
//             <p className="text-lg mb-4">This data was generated based on your major</p>
//           </div>
//         </div>
//       </div>

//       {/* Recommended Jobs List */}
//       <div className="max-w-3xl mx-auto mt-10 p-6 space-y-6">
//         {loading && !roadmap ? (
//           <p className="text-center text-gray-500">Loading...</p>
//         ) : recommendedJobs.length > 0 ? (
//           recommendedJobs.map((job, index) => {
//             const { title, description, salary, growth } = job

//             return (
//               <div
//                 key={index}
//                 className="border rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white"
//               >
//                 <div className="md:col-span-2">
//                   <h3 className="text-lg font-semibold flex items-center mb-2">
//                     <span className="mr-2">💼</span> {title}
//                   </h3>
//                   <p className="text-gray-600">{description}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-gray-700 mb-1">
//                     <span className="font-semibold">Median Yearly Income:</span> {salary}
//                   </p>
//                   <p className="text-sm text-gray-700 mb-2">
//                     <span className="font-semibold">Projected Job Growth:</span> {growth}
//                   </p>
//                   <button
//                     onClick={() => handleLearnMore({ title, description, salary, growth })}
//                     className="mt-2 bg-[#6d6bd3] text-white px-4 py-2 rounded-md"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             )
//           })
//         ) : (
//           <p className="text-center text-gray-500">No recommendations available.</p>
//         )}
//       </div>

//       {/* Roadmap Section */}
//       {career && (
//         <div className="container mx-auto px-4 py-8">
//           <div className="max-w-4xl mx-auto">
//             <Link href="/">
//               <Button variant="outline" className="mb-6">
//                 ← Back to Careers
//               </Button>
//             </Link>

//             <div className="bg-white p-6 rounded-lg shadow mb-8">
//               <h1 className="text-3xl font-bold mb-4">{career.title}</h1>
//               <p className="text-gray-700 mb-4">{career.description}</p>
//               <p className="text-gray-700 mb-2">
//                 <strong>Median Yearly Income:</strong> {career.income}
//               </p>
//               <p className="text-gray-700 mb-2">
//                 <strong>Projected Job Growth:</strong> {career.growth}
//               </p>
//             </div>

//             <h2 className="text-2xl font-bold mb-6">Career Roadmap</h2>

//             {loading ? (
//               <div className="flex justify-center items-center py-12">
//                 <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
//                 <span className="ml-2 text-lg">Generating your personalized roadmap...</span>
//               </div>
//             ) : error ? (
//               <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
//                 <p className="font-bold">Error generating roadmap</p>
//                 <p>{error}</p>
//               </div>
//             ) : roadmap && roadmap.roadmap ? (
//               <div className="space-y-4">
//                 {roadmap.roadmap.map((step) => (
//                   <RoadmapStep
//                     key={step.number}
//                     number={step.number}
//                     semester={step.semester}
//                     title={step.title}
//                     description={step.description}
//                   />
//                 ))}
//               </div>
//             ) : null}
//           </div>
//         </div>
//       )}
//     </>
//   )
// }
