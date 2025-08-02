"use client";
import { useEffect, useState } from "react";
import Table from "./components/Table";

export type Advocate = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number;
};

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: any) => {
    const searchTerm = e.target.value.toLowerCase();

    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate: Advocate) => {
      if (!searchTerm) return advocate; // If no search term, show all advocates

      return (
        advocate.firstName.toLowerCase().includes(searchTerm) ||
        advocate.lastName.toLowerCase().includes(searchTerm) ||
        advocate.city.toLowerCase().includes(searchTerm) ||
        advocate.degree.toLowerCase().includes(searchTerm) ||
        advocate.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchTerm)
        ) ||
        advocate.yearsOfExperience
          .toString()
          .toLowerCase()
          .includes(searchTerm) ||
        advocate.phoneNumber.toString().toLowerCase().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
    <main className="p-6 m-6 place-self-center max-w-3xl relative flex flex-col">
      <h1>Solace Advocates</h1>
      <div>
        <input className="p-1 search-input-box" onChange={onChange} />
        <button className="p-1" onClick={onClick}>
          Reset Search
        </button>
      </div>
      <br />
      <br />
      <Table items={filteredAdvocates} />
    </main>
  );
}
