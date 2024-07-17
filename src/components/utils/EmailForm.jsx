// lg:w-[24rem] md:w-[22rem] sm:w-[20rem] w-[18rem]
import { useState } from "react";
import { app } from "../../firebase";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const initialEmail = "";

const EmailForm = () => {
  const [email, setEmail] = useState(initialEmail);

  const db = getFirestore(app);

  const putData = async () => {
    if (email === undefined) {
      console.error("Email is undefined");
      return;
    }

    try {
      const docRef = doc(collection(db, "users"), email);
      await setDoc(docRef, { email });
      console.log("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data: ", error);
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
      console.error("Email is required");
    }
  };

  return (
    <div className=" max-w-[24rem] mx-auto md:m-0  bg-white rounded-lg flex justify-between">
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={handleInput}
        name="email"
        className="border-none rounded-xl  outline-none text-black p-3 w-full"
      />
      <button
        onClick={handleSubmit}
        className="text-sm rounded-r-lg py-1 px-1 bg-slateGray text-white w-32  "
      >
        Subscribe
      </button>
    </div>
  );
};

export default EmailForm;
