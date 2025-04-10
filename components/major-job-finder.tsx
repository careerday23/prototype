// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
// import { Briefcase, ExternalLink, Search, Info } from "lucide-react"
// import { findJobsForMajor } from "@/lib/jobs-action"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Badge } from "@/components/ui/badge"
// import Link from "next/link";

// export default function MajorJobFinder() {
//   const [major, setMajor] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [jobCategories, setJobCategories] = useState<string[]>([])
//   const [hasSubmitted, setHasSubmitted] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError(null)

//     try {
//       const jobs = await findJobsForMajor(major)
//       setJobCategories(jobs)
//       setHasSubmitted(true)
//     } catch (error) {
//       console.error("Error fetching job data:", error)
//       setError("There was an error fetching job data. Please try again later.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto">
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle>Enter Your Major</CardTitle>
//           <CardDescription>We'll find the top job categories related to your field of study</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="major">Your Major</Label>
//               <div className="flex gap-2">
//                 <Input
//                   id="major"
//                   placeholder="e.g. Computer Science, Business, Psychology"
//                   value={major}
//                   onChange={(e) => setMajor(e.target.value)}
//                   required
//                   className="flex-1"
//                 />
//                 <Button type="submit" disabled={isLoading || !major.trim()}>
//                   {isLoading ? "Searching..." : <Search className="h-4 w-4" />}
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//       </Card>

//       {error && (
//         <Alert variant="destructive" className="mb-6">
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       )}

//       {hasSubmitted && !error && (
//         <Card>
//           <CardHeader>
//             <div className="flex items-center justify-between">
//               <CardTitle>Top Job Categories for {major}</CardTitle>
//               <Badge variant="outline" className="ml-2">
//                 Wikipedia Data
//               </Badge>
//             </div>
//             <CardDescription>Popular career paths related to your field of study</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             {jobCategories.length > 0 ? (
//               <ul className="space-y-3">
//                 {jobCategories.map((job, index) => (
//                   <li key={index} className="flex items-start gap-3 p-3 rounded-md bg-muted/50">
//                     <Briefcase className="h-5 w-5 mt-0.5 text-primary" />
//                     <span>{job}</span>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-center py-4">
//                 No job categories found for this major. Try a different major or more general term.
//               </p>
//             )}
//           </CardContent>
//           <CardFooter className="border-t pt-6 flex flex-col gap-4">
//             <Alert className="bg-blue-50 text-blue-800 border-blue-200">
//               <Info className="h-4 w-4" />
//               <AlertTitle>Want to explore career options?</AlertTitle>
//               <AlertDescription>
//                 Check out the Bureau of Labor Statistics Occupational Outlook Handbook for detailed career information,
//                 including job duties, education requirements, and salary data.
//               </AlertDescription>
//             </Alert>
//             <Link href="/recommendation">
//             <Button
            
//               variant="outline"
//               className="w-full flex items-center gap-2"
//               // onClick={() =>
//               //   window.open(`https://www.bls.gov/ooh/occupation-finder.htm?s=${encodeURIComponent(major)}`, "_blank")
//               // }
//             >
//               <ExternalLink className="h-4 w-4" />
//               Explore More
//             </Button>
//             </Link>
//           </CardFooter>
//         </Card>
//       )}
//     </div>
//   )
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { UserCircle } from "lucide-react";
import { findJobsForMajor } from "@/lib/jobs-action";

export default function UserProfileForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    major: "",
    age: "",
    university: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch jobs related to the entered major
    const jobs = await findJobsForMajor(formData.major);

    // Limit to top 3 jobs
    const top3Jobs = jobs.slice(0, 3);

    // Save to localStorage
    localStorage.setItem("recommendedJobs", JSON.stringify(top3Jobs));

    // Navigate to /recommendation page
    router.push("/recommendation");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card className="text-center p-6 rounded-xl">
        <CardHeader className="flex flex-col items-center">
          <UserCircle className="h-16 w-16 text-[#6d6bd3]" />
          <p className="text-gray-600 mt-2">
            We would love to learn more information about you!
          </p>
        </CardHeader>
        <CardContent className="text-left">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <Label htmlFor="firstName" className="mb-2">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="lastName" className="mb-2">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Label htmlFor="major" className="mb-2">
                Major
              </Label>
              <Input
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="age" className="mb-2">
                Age
              </Label>
              <Input
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="university" className="mb-2">
                University
              </Label>
              <Input
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                required
              />
            </div>

            <CardFooter className="flex justify-center pt-4">
              <Button
                type="submit"
                variant="default"
                className="bg-[#6d6bd3] hover:bg-[#5c5ac0] text-white px-6 py-2 rounded-lg"
              >
                Submit
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
