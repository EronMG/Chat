import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { storage } from "../firebase";
import Modal from "react-modal";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(currentUser.photoURL); // Initialize with the current user's photoURL

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpdatePhoto = async () => {
    if (selectedFile) {
      // Upload the file to Firebase Storage
      const storageRef = ref(storage, `profilePhotos/${currentUser.uid}`);
      await uploadBytes(storageRef, selectedFile);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);

      // Update the user's profile with the new photo URL
      await updateProfile(auth.currentUser, { photoURL: downloadURL });

      // Update the local state to reflect the change
      setPhotoURL(downloadURL);
    }
  };

  return (
    <div
      id="dark3"
      className="flex items-center border-b-[0.1px] border-[darkgray] p-[10px] h-[70px] justify-between text-[#ddddf7] relative"
    >
      <div className="flex gap-[30px]">
        <div className="flex gap-[5px]" onClick={openModal}>
          <img
            src={currentUser.photoURL}
            alt="user"
            className="bg-[#ddddf7] h-[24px] w-[24px] rounded-[50%] object-cover"
          />
          <span>{currentUser.displayName}</span>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: { backgroundColor: "rgba(0,0,0, 0.5)" },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          className="w-[300px] backdrop-blur-xl border-[1px] bg-opacity-10 bg-[white] outline-none p-[20px] rounded-[10px] h-[240px]"
        >
          <div className="flex flex-col h-full gap-[10px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between">
                <h2 className="text-[24px] text-[#5d5b8d] font-bold leading-[24px]">
                  {currentUser.displayName}
                </h2>
                <label
                  htmlFor="fileInput"
                  className="text-[20px] text-[#5d5b8d] cursor-pointer border-b-[1px] border-[gray]"
                >
                  Update photo
                </label>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  onClick={handleUpdatePhoto}
                  className="flex justify-start text-[18px] text-[green]"
                >
                  Confirm ✓
                </button>
              </div>
              <img
                src={photoURL}
                alt="urPhoto"
                className="w-[100px] h-[100px] object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-[20px] text-[#3e3c61]">
                Ваш E-mail:{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="text-[16px] text-[#3e3c61]"
                  href={`https://mail.google.com/mail/u/0/#inbox?`}
                >
                  {currentUser.email}
                </a>
              </span>
              <button
                onClick={() => signOut(auth)}
                className="text-[#ddddf7] text-[16px] bg-[#5d5b8d] border-none cursor-pointer px-[10px] rounded-[30px]"
              >
                logout
              </button>
            </div>
          </div>
        </Modal>
        <button
          onClick={() => signOut(auth)}
          className="text-[#ddddf7] text-[10px] bg-[#5d5b8d] border-none cursor-pointer px-[10px] absolute bottom-[0] sm:static left-[20px]"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
