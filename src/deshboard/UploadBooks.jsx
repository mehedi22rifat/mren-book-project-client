import React, { useState } from "react";
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import Swal from 'sweetalert2'

export const UploadBooks = () => {
  const bookCategorys = [
    "Fiction",
    "Nor-Fiction",
    "Programming",
    "Global-World",
    "Mistery",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Autobigoraphy",
    "History",
    "Momori",
    "Selp-Help",
    "Busness",
    "The News",
    "The Girl",
    "Boys",
    "Children Books",
    "Travle",
    "Religion",
    "Arth and design",
  ];
  const [selectBookCategory, setSelectBookCategory] = useState(
    bookCategorys[0]
  );
  const handleChangeSelectValue = (event) => {
    console.log(event.target.value);
    setSelectBookCategory(event.target.value);
  };

   const handleFromSumbitData = (e) =>{
    e.preventDefault()
      const form = e.target;
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const description = form.description.value;
      const bookPDFURL = form.BookPDFRUL.value;
      const bookObj = {bookTitle,authorName,imageURL,category,description,bookPDFURL}
    //   console.log(bookObj)

    //   upload books data in mongodb
     fetch('https://mren-server.vercel.app/upload-book',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(bookObj)
     })
     .then(res => res.json())
     .then(data =>{
      if(data.acknowledged===true){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book Upload Successfull",
          showConfirmButton: false,
          timer: 1500
        });
      form.reset();  
      }
        // form.reset();  
     })
   }




  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center font-bold my-5">Upload a book</h1>
      <form onSubmit={handleFromSumbitData} className="flex lg:w-[950px] flex-grow flex-col gap-4">
        <div className="flex gap-5">
          <div className="w-full">
            <div className="mb-2 clear-start">
              <Label htmlFor="text" value="Book Title" />
            </div>
            <TextInput
              className="w-full"
              name="bookTitle"
              id="name"
              type="text"
              placeholder="Book Name"
              required
              
            />
          </div>
          {/*  */}
          <div className="w-full">
            <div className="mb-2 clear-start">
              <Label htmlFor="author name" value="Author Name" />
            </div>
            <TextInput
              className="w-full"
              id="name"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-5">
          <div className="w-full">
            <div className="mb-2 clear-start">
              <Label htmlFor="text" value="Book ImageURL" />
            </div>
            <TextInput
              className="w-full"
              name="imageURL"
              id="name"
              type="text"
              placeholder="Book ImageURL"
              required
            />
          </div>
          {/*  */}
          <div className="w-full">
            <div className="mb-2 clear-start">
              <Label htmlFor="inputstate" value="BookCategory" />
            </div>
            <Select
              id="inputstate"
              name="categoryName"
              className="w-full rounded"
              value={selectBookCategory}
              onChange={handleChangeSelectValue}
            >
              {bookCategorys.map((options) => (
                <option key={options} value={options}>
                  {options}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/*  */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Descraption" />
          </div>
          <Textarea
            id="bookDescration"
            name="description"
            placeholder="Write your book descraption..."
            className="w-full"
            // value={'Book Descraption'}
            required
            rows={6}
          />
        </div>
        {/*  */}
        <div className="w-full">
          <div className="mb-2 clear-start">
            <Label htmlFor="text" value="BookPDFURL" />
          </div>
          <TextInput
            className="w-full"
            id="BookPDFURL"
            name="BookPDFRUL"
            type="text"
            placeholder="Book PDF URL"
            required
          />
        </div>
        <button type="submit" className="mt-5 bg-sky-600 btn font-bold text-white">Upload Book</button>
      </form>
    </div>
  );
};
