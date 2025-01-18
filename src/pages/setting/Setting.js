import { useState } from "react";
import Input from "../../components/input/Input";

const Settings = () => {
  const [imgValue, setImgValue] = useState("./imgs/woman.png");
  const [form, setform] = useState({
    name: "Davur",
    phone: "+1 555 888 8777",
    email: "exmple@gmail.com",
    accountNumber: "1234567890",
    accountName: "Bank of Usa",
    bankCode: "552244",
    openingTime: "08:56",
    closingTime: "10:56",
    color1: "#31c48d",
    color2: "#cd1d1d",
    color3: "#e3a008",
    colorTime1: "10:56",
    colorTime2: "10:56",
    colorTime3: "10:56",
  });
  const handleChane = (e) => {
    console.log(e.target.value);
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgValue(reader.result); // تحديث الصورة عند تحميل الملف
      };
      reader.readAsDataURL(file); // تحويل الملف إلى Base64
    }
  };

  return (
    <div className="px-10">
      <div className="flex flex-col md:flex-row gap-6 mb-16">
        <div className="bg-white p-7 rounded-lg shadow-md md:w-2/4 flex flex-col gap-10">
          <h2 className="text-4xl font-medium mb-8">Settings</h2>
          <div className="flex items-center gap-6">
            <div className="relative w-[150px] ">
              <img
                src={imgValue}
                alt=""
                width={"100%"}
                className="bg-slate-100 shadow-lg p-4"
              />
              <label
                htmlFor="img"
                className="absolute cursor-pointer hover:scale-90 bg-slate-100 p-2 rounded-full -top-4 -right-6"
              >
                <input
                  type="file"
                  id="img"
                  className="hidden"
                  onChange={handleChangeFile}
                />
                <img
                  src="./icons/gray-edit.png"
                  width={"20px"}
                  className=""
                  alt=""
                />
              </label>{" "}
            </div>
            <p className="w-[10rem] text-gray-400 text-xs">
              Logo Should have in 1:1 ratio for better viewing experience.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="ml-2 text-gray-500 font-semibold">
                Restaurant Name
              </label>
              <Input
                type="text"
                name="name"
                onChange={handleChane}
                value={form.name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="ml-2 text-gray-500 font-semibold">
                Restaurant Phone Number
              </label>
              <Input
                type="text"
                name="phone"
                onChange={handleChane}
                value={form.phone}
              />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label className="ml-2 text-gray-500 font-semibold">
                Restaurant Email Address
              </label>
              <Input
                type="email"
                name="email"
                onChange={handleChane}
                value={form.email}
              />
            </div>
            <hr />
            <h2 className="text-4xl font-medium mt-6 mb-4">Bank Details</h2>
            <div className="flex flex-col gap-2">
              <label className="ml-2 text-gray-500 font-semibold">
                Account Number
              </label>
              <Input
                type="text"
                name="accountNumber"
                onChange={handleChane}
                value={form.accountNumber}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="ml-2 text-gray-500 font-semibold">
                Account Name
              </label>
              <Input
                type="text"
                name="accountName"
                onChange={handleChane}
                value={form.accountName}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="ml-2 text-gray-500 font-semibold">
                Bank Code
              </label>
              <Input
                type="text"
                name="bankCode"
                onChange={handleChane}
                value={form.bankCode}
              />
            </div>
          </div>
        </div>

        {/* <!-- Right Side --> */}

        <div className="md:w-2/4">
          <div className="bg-white p-7 rounded-lg shadow-md flex flex-col gap-10">
            <h2 className="text-4xl font-medium">Restaurant Timings</h2>
            <div className="flex gap-4">
              <div className="md:w-2/4">
                <label className="ml-2 text-gray-500 mb-4 block font-semibold">
                  Opening Time
                </label>
                <Input
                  type="time"
                  name="openingTime"
                  onChange={handleChane}
                  value={form.openingTime}
                />
              </div>
              <div className="md:w-2/4">
                <label className="ml-2 text-gray-500 block mb-4 font-semibold">
                  Closing Time
                </label>
                <Input
                  type="time"
                  name="closingTime"
                  onChange={handleChane}
                  value={form.closingTime}
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-7 rounded-lg shadow-md mt-6">
            <h2 className="text-4xl font-medium mb-6">Restaurant Location</h2>

            <iframe
              className="justify-self-center"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50960.57122850026!2d37.43861679889486!3d37.032795084950905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e7f1d42e267d%3A0x55fe0d5c46d32b54!2z2YXYt9i52YUg2KfZhNmC2YTYudip!5e0!3m2!1sar!2str!4v1737195879956!5m2!1sar!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              title="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-white p-7 rounded-lg shadow-md mt-6">
            <h2 className="text-4xl mb-6 font-medium">Order Color Setting</h2>
            <div className="flex gap-2 justify-between">
              <div className="w-[35%] flex flex-col gap-3 ">
                <div className="flex gap-4 border-2 border-gray-100 relative justify-between">
                  <p className="py-[15px] px-3 text-gray-400">{form.color1}</p>
                  <input
                    type="color"
                    name="color1"
                    value={form.color1}
                    onChange={handleChane}
                    className="rotate-90 absolute appearance-none outline-0 ring-0 top-1 bg-transparent right-[-12px] border-0 w-[3.8rem] h-[2.8em] cursor-pointer"
                  />
                </div>
                <div className="flex gap-4 border-2 border-gray-100 relative justify-between">
                  <p className="py-[15px] px-3 text-gray-400">{form.color2}</p>
                  <input
                    type="color"
                    name="color2"
                    value={form.color2}
                    onChange={handleChane}
                    className="rotate-90 absolute ring-0 top-1 bg-transparent right-[-12px] border-0 w-[3.8rem] h-[2.8em] cursor-pointer"
                  />
                </div>
                <div className="flex gap-4 border-2 border-gray-100 relative  justify-between">
                  <p className="py-[15px] px-3 text-gray-400">{form.color3}</p>
                  <input
                    type="color"
                    name="color3"
                    value={form.color3}
                    onChange={handleChane}
                    className="rotate-90 absolute ring-0 top-1 bg-transparent right-[-12px] border-0 w-[3.8rem] h-[2.8em] cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-2/4 flex flex-col gap-3">
                <Input
                  type={"time"}
                  name="colorTime2"
                  value={form.colorTime2}
                  onChange={handleChane}
                />
                <Input
                  type={"time"}
                  name="colorTime2"
                  value={form.colorTime2}
                  onChange={handleChane}
                />
                <Input
                  type={"time"}
                  name="colorTime2"
                  value={form.colorTime2}
                  onChange={handleChane}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
