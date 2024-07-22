// import { useState } from "react";
// import { firebaseApp } from "../../firebase";
// import { LiaSpinnerSolid } from "react-icons/lia";
// import {
//   getFirestore,
//   collection,
//   doc,
//   setDoc,
//   query,
//   where,
//   getDocs,
// } from "firebase/firestore";

// import { toast } from "react-toastify";

// const EmailForm = () => {
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const db = getFirestore(firebaseApp);

//   const checkIfEmailExists = async (email) => {
//     const q = query(collection(db, "users"), where("email", "==", email));
//     const querySnapshot = await getDocs(q);
//     return !querySnapshot.empty;
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const putData = async (email) => {
//     setIsLoading(true);
//     try {
//       const emailExists = await checkIfEmailExists(email);
//       const emailValid = isValidEmail(email);
//       if (emailExists) {
//         toast.error("Email already exists");
//         return false;
//       } else if (!emailValid) {
//         toast.error("Please Enter Valid Email!");
//         return false;
//       } else {
//         const docRef = doc(collection(db, "users"), email);
//         await setDoc(docRef, { email });
//         toast.success("Subscribed successfully!");
//         return true;
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInput = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (email) {
//       await putData(email);
//       setEmail("");
//     } else {
//       toast.error("Email is required");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-[24rem] mx-auto md:m-0 bg-white rounded-lg flex justify-between"
//     >
//       <input
//         type="email"
//         placeholder="Your Email"
//         value={email}
//         onChange={handleInput}
//         onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
//         name="email"
//         className="border-none rounded-xl outline-none text-black p-3 w-full"
//       />
//       <button
//         type="submit"
//         className={`text-sm rounded-r-lg py-1 px-1 bg-slateGray text-white w-32 ${
//           isLoading
//             ? "cursor-not-allowed pointer-events-none"
//             : "cursor-pointer"
//         }`}
//       >
//         {isLoading ? (
//           <div className="border-white flex justify-center">
//             <LiaSpinnerSolid className="animate-spin-slow" size={30} />
//           </div>
//         ) : (
//           "Subscribe"
//         )}
//       </button>
//     </form>
//   );
// };

// export default EmailForm;


import { useState } from "react";
import { firebaseApp } from "../../firebase";
import { LiaSpinnerSolid } from "react-icons/lia";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { toast } from "react-toastify";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const db = getFirestore(firebaseApp);

  // const checkIfEmailExists = async (email) => {
  //   const q = query(collection(db, "users"), where("email", "==", email));
  //   const querySnapshot = await getDocs(q);
  //   return !querySnapshot.empty;
  // };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const putData = async (email) => {
    setIsLoading(true);
    try {
      // const emailExists = await checkIfEmailExists(email);
      const emailValid = isValidEmail(email);
      // if (emailExists) {
      //   toast.error("Email already exists");
      //   return false;
      // } else 
      if (!emailValid) {
        toast.error("Please Enter Valid Email!");
        return false;
      } else {
        const docRef = doc(collection(db, "users"));
        await setDoc(docRef, { email });
        toast.success("Subscribed successfully!");
        return true;
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error subscribing. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email) {
      await putData(email);
      setEmail("");
    } else {
      toast.error("Email is required");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[24rem] mx-auto md:m-0 bg-white rounded-lg flex justify-between"
    >
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={handleInput}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        name="email"
        className="border-none rounded-xl outline-none text-black p-3 w-full"
      />
      <button
        type="submit"
        className={`text-sm rounded-r-lg py-1 px-1 bg-slateGray text-white w-32 ${
          isLoading
            ? "cursor-not-allowed pointer-events-none"
            : "cursor-pointer"
        }`}
      >
        {isLoading ? (
          <div className="border-white flex justify-center">
            <LiaSpinnerSolid className="animate-spin-slow" size={30} />
          </div>
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
};

export default EmailForm;
