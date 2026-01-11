import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormProfile from "../components/FormProfile";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfileById,
  updateProfile,
  deleteProfile,
  updateLocalProfile,
  clearProfile,
} from "../store/profileSlice";

export default function Profile({ footer }) {
  const dispatch = useDispatch();

  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const profileId = storedUser?.id;

  const { currentProfile, loading } = useSelector((state) => state.profile);

  // ambil profile saat halaman dibuka
  useEffect(() => {
    if (profileId) {
      dispatch(fetchProfileById(profileId));
    }
  }, [dispatch, profileId]);

  const handleSave = async () => {
    try {
      await dispatch(
        updateProfile({
          id: profileId,
          payload: currentProfile,
        })
      ).unwrap();

      alert("Profil berhasil diperbarui ✅");
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus profil ini? Tindakan ini tidak dapat dibatalkan."
    );

    if (!confirmDelete) return;

    try {
      await dispatch(deleteProfile(profileId)).unwrap();

      localStorage.removeItem("loggedInUser");
      dispatch(clearProfile());

      alert("Profil berhasil dihapus ✅");
      window.location.href = "/register";
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:pt-10 pt-7">
          Profil Saya
        </h1>

        <FormProfile
          profile={currentProfile || { username: "", email: "", password: "" }}
          setProfile={(data) => dispatch(updateLocalProfile(data))}
          handleSave={handleSave}
          loading={loading}
          handleDelete={handleDelete}
        />
      </div>

      <Footer footers={footer} />
    </div>
  );
}
