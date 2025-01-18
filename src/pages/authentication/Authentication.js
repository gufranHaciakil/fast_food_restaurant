import React, { useState } from "react";

const Authentication = () => {
  const [form, setForm] = useState({
    kitchen: "+91 123 874 489",
    kitchen2: "+91 123 874 489",
    emenu: "+91 123 874 489",
    emenu2: "+91 123 874 489",
    emenu3: "+91 123 874 489",
    desk: "+91 123 874 489",
    desk2: "+91 123 874 489",
    desk3: "+91 123 874 489",
    kiosk: "+91 123 874 489",
    kiosk2: "+91 123 874 489",
    kiosk3: "+91 123 874 489",
    review: "+91 123 874 489",
    review2: "+91 123 874 489",
    review3: "+91 123 874 489",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-7 authentication">
      <h1 className="font-semibold ">Authentication</h1>
      <form className="flex flex-col md:flex-row gap-10 mt-12 mb-20">
        <div className="md:w-2/4 ">
          <div className="bg-white p-7 shadow-sm rounded-md flex flex-col gap-8">
            <h2 className="text-lg text-rose-900 font-medium">KITCHEN APP</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="kitchen"
                value={form.kitchen}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="kitchen2"
                value={form.kitchen2}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
            </div>
            <p className="text-red-700">+ Add More</p>
          </div>
          <div className="bg-white p-7 shadow-sm mt-6 rounded-md flex flex-col gap-8">
            <h2 className="text-lg text-rose-900 font-medium">eMENU APP</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="emenu"
                value={form.emenu}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="emenu2"
                value={form.emenu2}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="emenu3"
                value={form.emenu3}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
            </div>
            <p className="text-red-700">+ Add More</p>
          </div>
          <div className="bg-white p-7 shadow-sm mt-6 rounded-md flex flex-col gap-8">
            <h2 className="text-lg text-rose-900 font-medium">DESK APP</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="desk"
                value={form.desk}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="desk2"
                value={form.desk2}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="desk3"
                value={form.desk3}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
            </div>
            <p className="text-red-700">+ Add More</p>
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="bg-white p-7 shadow-sm rounded-md flex flex-col gap-8">
            <h2 className="text-lg text-rose-900 font-medium">KIOSK APP</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="kiosk"
                value={form.kiosk}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="kiosk2"
                value={form.kiosk2}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="kiosk3"
                value={form.kiosk3}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
            </div>
            <p className="text-red-700">+ Add More</p>
          </div>
          <div className="bg-white p-7 mt-6 shadow-sm rounded-md flex flex-col gap-8">
            <h2 className="text-lg text-rose-900 font-medium">REVIEW APP</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="review"
                value={form.review}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="review2"
                value={form.review2}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
              <input
                type="text"
                name="review3"
                value={form.review3}
                onChange={handleChange}
                className="py-4 px-4 font-medium rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
              />
            </div>
            <p className="text-red-700">+ Add More</p>
          </div>
          <button
            type="button"
            className="bg-red-700 rounded-lg mt-6 border-4 border-white focus:border-red-400 text-zinc-50 p-4"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
