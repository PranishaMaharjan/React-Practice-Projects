import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { MdOutlineSearch } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const getContacts = async () => {
  //     try {
  //       const contactsCollection = collection(db, "contacts");
  //       const contactSnapshot = await getDocs(contactsCollection);
  //       console.log(contactSnapshot);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getContacts();
  // }, []);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = await collection(db, "contacts");
        const contactSnapshot = await getDocs(contactRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);

        console.log(contactSnapshot);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="m-4 relative flex items-center">
        <MdOutlineSearch className="absolute ml-1 text-3xl text-white" />
        <input
          type="text"
          className="border border-white h-10 rounded-md bg-transparent text-white pl-10"
        />
        <IoAddCircle className=" ml-1 text-6xl  text-white" />
      </div>
    </div>
  );
};

export default App;
