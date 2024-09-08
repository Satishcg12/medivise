import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

function aboutDoctor() {
  return (
    <section className="p-6 bg-muted rounded-lg grid gap-8 md:grid-cols-2 lg:gap-12">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl font-bold text-center md:text-left">
          About Dr. Satish Chaudhary
        </h2>
        <p className="mt-4 text-gray-600 text-center md:text-left">
          Dr. Jane Doe is a highly experienced pediatrician with over 15 years
          of practice. She is passionate about providing comprehensive and
          compassionate care to children and their families. Dr. Doe is known
          for her exceptional bedside manner and her ability to put her young
          patients at ease.
        </p>
      </div>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold flex items-center">
            <FaGraduationCap className="mr-2" /> Education
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <h3 className="font-medium">Medical Degree</h3>
              <p>University of California, Los Angeles</p>
            </li>
            <li>
              <h3 className="font-medium">Pediatric Residency</h3>
              <p>Children's Hospital Los Angeles</p>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold flex items-center">
            <FaBriefcase className="mr-2" /> Experience
          </h2>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <h3 className="font-medium">Pediatrician</h3>
              <p>Acme Medical Clinic, 2010 - Present</p>
            </li>
            <li>
              <h3 className="font-medium">Pediatric Resident</h3>
              <p>Children's Hospital Los Angeles, 2007 - 2010</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default aboutDoctor;
