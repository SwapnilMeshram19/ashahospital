import React from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Doctors } from "./Doctors";
import { AdminLogin } from "./AdminLogin";
import { Specialities } from "./Specialities";
import { Event } from "./Event";
import { AddEvent } from "./AddEvent";
import { AddDoctor } from "./AddDoctors";

export const Pages = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/specialities" element={<Specialities />}></Route>
        <Route path="/admin-login" element={<AdminLogin />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/event/add" element={<AddEvent />}></Route>
        <Route path="/doctor/add" element={<AddDoctor />}></Route>
        {/* <Route path='/model' element={<AddSuccess/>}></Route> */}
      </Routes>
    </div>
  );
};
