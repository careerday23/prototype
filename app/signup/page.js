"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import router for navigation
import Navbar from "@/components/navbar"; 
import "./signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MajorJobFinder from "@/components/major-job-finder";
import { Container } from "postcss";

export default function StudentQuestionnaire() {
  const router = useRouter(); // Initialize router

  const [formData, setFormData] = useState({
    fullName: "",
    college: "",
    year: "",
    major: "",
    careerInterest: "",
    academicGoals: "",
    minorsOrDoubleMajors: "",
    coursesTaken: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process the data here (e.g., send to backend)
    
    // Redirect to another page after form submission
    router.push("/recommendation"); // Change to the desired page URL
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4 md:p-24 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            {/* <h1 className="text-3xl font-bold tracking-tight">
              Academic Roadmap Generator
            </h1>
            <p className="text-muted-foreground">
              Enter your information to get a personalized academic roadmap
            </p> */}
            <MajorJobFinder />
          </div>
          </div>
          </main>
      {/* <div className="form-container">
        <div className="questionnaire-container">
          <h1 className="form-title">Student Questionnaire</h1>
          <p className="form-description">
            Please fill out the following details to help us understand your academic and career goals.
          </p>

          <form onSubmit={handleSubmit} className="form-body">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="college" className="form-label">College/University</label>
              <input
                type="text"
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your college/university"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="year" className="form-label">Year in College</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., Freshman, Sophomore"
                required
              />
            </div>

          

            <div className="form-group">
              <label htmlFor="careerInterest" className="form-label">Intended Career or Field of Interest</label>
              <input
                type="text"
                id="careerInterest"
                name="careerInterest"
                value={formData.careerInterest}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your intended career/field"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="academicGoals" className="form-label">Academic or Professional Goals for This Year</label>
              <textarea
                id="academicGoals"
                name="academicGoals"
                value={formData.academicGoals}
                onChange={handleChange}
                className="form-input"
                placeholder="What are your goals for this year?"
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="minorsOrDoubleMajors" className="form-label">Minors or Double Majors (if applicable)</label>
              <input
                type="text"
                id="minorsOrDoubleMajors"
                name="minorsOrDoubleMajors"
                value={formData.minorsOrDoubleMajors}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your minors or double majors"
              />
            </div>

            <div className="form-group">
              <label htmlFor="coursesTaken" className="form-label">Courses Taken So Far</label>
              <textarea
                id="coursesTaken"
                name="coursesTaken"
                value={formData.coursesTaken}
                onChange={handleChange}
                className="form-input"
                placeholder="Include course names and brief descriptions"
                rows="4"
              />
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div> */}

    </>
  );
}
