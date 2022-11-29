import * as React from "react";
export interface specialitiesI {
  id?: number;
  name: string;
}
export const specialities: specialitiesI[] = [
  {
    name: "Anaesthesiology",
    id: 1,
  },
  {
    name: "Critical Care",
    id: 1,
  },
  {
    name: "Cardiology",
    id: 1,
  },
  {
    name: "Dentistry",
    id: 1,
  },
  {
    name: "Dermatology",
    id: 1,
  },
  {
    name: "Diabetology",
    id: 1,
  },
  {
    name: "Ear Nose & Throat Surgery (ENT)",
    id: 1,
  },
  {
    name: "Gastroenterology",
    id: 1,
  },
  {
    name: "General & Laproscopic Surgery",
    id: 1,
  },
  {
    name: "Gynecology",
    id: 1,
  },
  {
    name: "General Medicine",
    id: 1,
  },
  {
    name: "Nephrology & Urology",
    id: 1,
  },
  {
    name: "Neurology & Neurosurgery",
    id: 1,
  },
  {
    name: "Orthopedics",
    id: 1,
  },
];

export interface doctorSpecialitiesI {
  title: string;
}

export const doctorSpecialities: doctorSpecialitiesI[] = [
  { title: "General Physician" },
  { title: "General Surgeon" },
  { title: "Neuro Surgeon" },
  { title: "Orthopedician" },
  { title: "Gynaecologist" },
  { title: "Onco Surgeon" },
  { title: "Nephrologist" },
];
