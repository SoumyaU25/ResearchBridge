import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { db } from "../../../Firebase";
import { auth } from "../../../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const MenteeProfile = () => {
  // const [profileData, setProfileData] = useState({});
  // const [isEditing, setIsEditing] = useState(false);
  // const [education, setEducation] = useState("");
  // const [about, setAbout] = useState("");
  // const [myWork, setMyWork] = useState("");

  // useEffect(() => {
  //   const fetchProfileData = async () => {
  //     const user = auth.currentUser;
  //     const docRef = doc(db, "mentees", user.uid);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       setProfileData(docSnap.data());
  //       setEducation(docSnap.data().qualification);
  //       setAbout(docSnap.data().about);
  //       setMyWork(docSnap.data().myWork);
  //     }
  //   };
  //   fetchProfileData();
  // }, []);

  // const handleEditProfile = async () => {
  //   const user = auth.currentUser;
  //   const docRef = doc(db, "mentees", user.uid);
  //   await updateDoc(docRef, {
  //     education,
  //     about,
  //     myWork
  //   });
  //   setIsEditing(false);
  // };

  // return (
  //   <div className="flex h-screen bg-gray-100">
  //     {/* Sidebar */}
      

  //     {/* Main Content */}
  //     <main className="flex-1 p-8">
  //       {/* Profile Header */}
  //       <div className="bg-white p-6 rounded-xl shadow-md flex items-center relative">
  //       <img
  //                       src="https://randomuser.me/api/portraits/women/44.jpg"
  //                       alt="User"
  //                       className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
  //                     />
  //         <div className="ml-6">
  //           <h1 className="text-xl font-bold text-gray-700 mb-4">Mentee-Name <span className="text-gray-400">(They/Them)</span></h1>
  //           <p className="text-gray-600">Qualification</p>
  //         </div>
  //         <FaRegEdit className="absolute top-4 right-4 text-gray-500 cursor-pointer" />
  //       </div>

  //       {/* Sections */}
  //       <div className="mt-6 space-y-4 text-gray-700 mb-4">
  //         <Section title="About" content="Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie..." />
  //         <Section title="My Work" content="Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie..." />
  //         <Section title="Contact Me" content="Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie...Pizza ipsum dolor meat lovers buffalo. Crust tomato Aussie green roll beef mozzarella green pie..." />
  //       </div>
  //     </main>
  //   </div>
  // );

  const [menteeData, setMenteeData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducation] = useState("");
  const [about, setAbout] = useState("");
  const [myWork, setMyWork] = useState("");

  useEffect(() => {
    const fetchMenteeData = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "mentees", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setMenteeData(docSnap.data());
        setEducation(docSnap.data().education || "");
        setAbout(docSnap.data().about || "");
        setMyWork(docSnap.data().myWork || "");
      }
    };

    fetchMenteeData();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    const docRef = doc(db, "mentees", user.uid);
    await updateDoc(docRef, {
      education,
      about,
      myWork
    });

    setMenteeData((prevData) => ({
      ...prevData,
      education,
      about,
      myWork,
    }));

    setIsEditing(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Profile Header */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center relative">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
          />
          <div className="ml-6">
            <h1 className="text-xl font-bold text-gray-700 mb-4">
              {menteeData.username || "Mentee-Name"} 
            </h1>
            <p className="text-gray-600">{menteeData.education || "Qualification"}</p>
          </div>
          <FaRegEdit className="absolute top-4 right-4 text-gray-500 cursor-pointer" onClick={() => setIsEditing(true)} />
        </div>

        {/* Sections */}
        <div className="mt-6 space-y-4 text-gray-700 mb-4">
          <Section title="About" content={about} isEditing={isEditing} setContent={setAbout} />
          <Section title="My Work" content={myWork} isEditing={isEditing} setContent={setMyWork} />
          <Section title="Contact Me" content={menteeData.email} isEditing={false} />
        </div>

        {isEditing && (
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Save Changes
          </button>
        )}
      </main>
    </div>
  );
};

// Section Component (Handles both normal view & edit mode)
const Section = ({ title, content, isEditing, setContent }) => (
  <div className="bg-white p-4 rounded-xl shadow-md">
    <h2 className="text-lg font-semibold">{title}</h2>
    {isEditing && setContent ? (
      <textarea
        className="w-full mt-2 p-2 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    ) : (
      <p className="text-gray-600 mt-2">{content || "No information provided"}</p>
    )}
  </div>
);

// Reusable Section Component
// const Section = ({ title, content }) => (
//   <div className="bg-white p-4 rounded-lg shadow">
//     <h2 className="font-bold text-lg">{title}</h2>
//     <p className="text-gray-600">{content}</p>
//   </div>
// );

export default MenteeProfile;
