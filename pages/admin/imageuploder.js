import React, { useState } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import FullLayout from "../../src/layouts/FullLayout";
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Imageuploder = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);
    const res = await fetch("/api/uploadimg", {
      method: "POST",
      body
    });
    let response = await res.json()
    if (response.succses) {
      toast.success('Image Uploaded Succsesfully!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Head><title>{'Admin -- Upload An Image'}</title></Head>
      <ThemeProvider theme={theme}>
        <style jsx global>{`
            footer {
            display: none;
            }
            header {
              display: none;
              }
      `}</style>
        <FullLayout>
          <div>
            <div className="flex justify-center mt-8">
              <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                <div className="m-4">
                  <label className="inline-block mb-2 text-gray-500">Upload An Image</label>
                  {!createObjectURL && <div className="flex items-center justify-center w-full">
                    <label
                      className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Attach an Image</p>
                      </div>
                      <input type="file" className="opacity-0" name="myImage" onChange={uploadToClient} />
                    </label>
                  </div>}
                  {createObjectURL && <img src={createObjectURL} alt="" />}
                </div>
                <div className="flex justify-center p-2">
                  <button onClick={uploadToServer} className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Upload</button>
                </div>
              </div>
            </div>
          </div>
        </FullLayout>
      </ThemeProvider>
    </>
  );
}

export default Imageuploder