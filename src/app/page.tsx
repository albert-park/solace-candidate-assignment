"use client";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import Header from "./components/Header";

export type Advocate = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number;
};

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
        setIsLoading(false);
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
        advocate.state.toLowerCase().includes(searchTerm) ||
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
    <main className="m-6 place-self-center max-w-3xl relative flex flex-col">
      <Header onChange={onChange} onClick={onClick} />
      {isLoading && <p className="m-6">Loading...</p>}
      {!isLoading && <Table items={filteredAdvocates} />}
    </main>
  );
}
