// "use client"

// import { useSearchParams } from "next/navigation"
// import Navbar from "@/components/navbar"
// import RoadmapStep from "@/components/stepone";


// export default function JobDetailsPage() {
//   const searchParams = useSearchParams();

//   const title = searchParams.get("title");
//   const description = searchParams.get("description");
//   const salary = searchParams.get("salary");
//   const growth = searchParams.get("growth");

//   return (
//     <>
//       <Navbar />

//       {/* <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
//         <h1 className="text-3xl font-bold mb-4">{title}</h1>
//         <p className="text-gray-700 mb-4">{description}</p>
//         <p className="text-gray-700 mb-2">
//           <strong>Median Yearly Income:</strong> {salary}
//         </p>
//         <p className="text-gray-700 mb-2">
//           <strong>Projected Job Growth:</strong> {growth}
//         </p>
//       </div> */}

//       <div className="max-w-3xl mx-auto mt-8">
//         <RoadmapStep />
//           {/* // number={1}
//           // semester="Freshman Fall Semester"
//           // title="Programming Fundamentals"
//           // description="Take an Intro to CS class to learn programming fundamentals"
//          */}
//       </div>
//       {/* <RoadmapGenerator /> */}
      
//     </>
//   );
// }
// import Navbar from "@/components/navbar"
// import RoadmapGenerator from "@/components/stepone"

// export default function RoadmapPage() {
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">Career Roadmap Planner</h1>
//         <RoadmapGenerator />
//       </div>
//     </>
//   )
// }

// app/recommendation/page.tsx
// app/roadmap/page.tsx"use client""use client"
// pages/roadmap.js
"use client"

import { useSearchParams } from "next/navigation"
import StepOne from "@/components/stepone"
import Navbar from "@/components/navbar"

// Define all the roadmaps for different career paths
const allRoadmaps = {
  "Software Engineer": {
    title: "Software Engineer",
    steps: [
      {
        stage: "Step 1: Learn Programming Basics",
        description: "Start with a beginner-friendly language like Python or JavaScript.",
        duration: "1-2 months",
        keySkills: ["Variables", "Loops", "Conditionals", "Functions"],
        resources: ["freeCodeCamp", "Codecademy", "CS50 by Harvard"]
      },
      {
        stage: "Step 2: Master Data Structures & Algorithms",
        description: "Understand core concepts for technical interviews and problem-solving.",
        duration: "2-3 months",
        keySkills: ["Arrays", "Linked Lists", "Hash Maps", "Recursion"],
        resources: ["LeetCode", "Grokking the Coding Interview", "GeeksforGeeks"]
      },
      {
        stage: "Step 3: Learn Web Development",
        description: "Build web projects using frontend and backend tech.",
        duration: "3 months",
        keySkills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        resources: ["MDN Docs", "The Odin Project", "Full Stack Open"]
      },
      {
        stage: "Step 4: Build Real Projects",
        description: "Apply your skills by building portfolio-ready applications.",
        duration: "2-4 months",
        keySkills: ["APIs", "Databases", "Auth", "Deployment"],
        resources: ["GitHub", "Vercel", "Render"]
      },
      {
        stage: "Step 5: Prep for Internships & Jobs",
        description: "Polish your resume, network, and practice interviews.",
        duration: "1-2 months",
        keySkills: ["System Design", "Behavioral Interviews", "LeetCode"],
        resources: ["Tech Interview Handbook", "LinkedIn", "Hired.com"]
      }
    ]
  },
  "Computer engineering": {
    title: "Computer Engineering",
    steps: [
      {
        stage: "Step 1: Learn Digital Logic Design",
        description: "Start with basic digital logic and circuit design.",
        duration: "1-2 months",
        keySkills: ["Binary Systems", "Boolean Algebra", "Circuit Design"],
        resources: ["Coursera", "edX", "MIT OpenCourseWare"]
      },
      {
        stage: "Step 2: Study Microprocessors",
        description: "Understand how microprocessors work and their architecture.",
        duration: "2-3 months",
        keySkills: ["Microprocessors", "Assembly Language", "Embedded Systems"],
        resources: ["UDEMY", "Intel Documentation", "ARM Architecture"]
      },
      {
        stage: "Step 3: Learn Operating Systems",
        description: "Understand the fundamentals of operating systems and system calls.",
        duration: "3 months",
        keySkills: ["Operating Systems", "Memory Management", "Concurrency"],
        resources: ["Operating Systems: Three Easy Pieces", "MIT OpenCourseWare"]
      },
      {
        stage: "Step 4: Build Embedded Systems",
        description: "Learn how to build hardware and software integrated systems.",
        duration: "3-4 months",
        keySkills: ["Embedded Programming", "C Language", "Microcontroller"],
        resources: ["ARM University", "Embedded Systems Design by Peter Marwedel"]
      },
      {
        stage: "Step 5: Prepare for Internships & Jobs",
        description: "Polish your resume and practice problem-solving.",
        duration: "1-2 months",
        keySkills: ["System Design", "Problem Solving", "Embedded Systems"],
        resources: ["LinkedIn", "Tech Interview Handbook"]
      }
    ]
  }
  // Add more career paths here if needed
}

export default function RoadmapPage() {
  const searchParams = useSearchParams()
  const career = searchParams.get("career") || "Software Engineer" // Default to "Software Engineer"
  const roadmap = allRoadmaps[career]

  if (!roadmap) {
    return (
      <div className="p-10 text-center">
        <p>No roadmap found for the career path: {career}. Please choose a valid career.</p>
        <p>Available careers:</p>
        <ul>
          {Object.keys(allRoadmaps).map((careerKey) => (
            <li key={careerKey}>
              <a href={`/roadmap?career=${careerKey}`} className="text-blue-600 hover:underline">
                {careerKey}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#6d6bd3]">
          Roadmap for {roadmap.title}
        </h1>

        {roadmap.steps.map((step, index) => (
          <StepOne
            key={index}
            number={index + 1}
            semester={step.duration}
            title={step.stage}
            description={step.description}
            skills={step.keySkills}
            resources={step.resources}
          />
        ))}
      </div>
    </>
  )
}
