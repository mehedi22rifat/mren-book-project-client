import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';
// import { UploadBooks } from './UploadBooks';
export const EditBooks = () => {

  const [updateData,setUpldateDate] = useState({});
  const id = useParams();
  console.log(id)

  //  useEffect(() =>{
  //   fetch(`http://localhost:5000/book/${id}`)
  //   .then(res => res.json())
  //   .then(data => setUpldateDate(data))
  //  },[])

   console.log(updateData)

  // const {bookTitle,authorName,category,imageURL,description,bookPDFURL} = useLoaderData();
  // console.log(bookTitle,authorName,category,imageURL,description,bookPDFURL)
  
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
      const UpdatebookObj = {bookTitle,authorName,imageURL,category,description,bookPDFURL}
      // console.log(bookObj);

    //   Upldate a books data in mongodb
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
          'Content-type':'application/json'
      },
      body:JSON.stringify(UpdatebookObj)
   })
   .then(res => res.json())
   .then(data =>{
    console.log(data)
    if (data.matchedCount > 0) {
      Swal.fire({
        title: "success!",
        text: "User Updated Successfull",
        icon: "success",
        confirmButtonText: "cool",
      });
    }
   })

  console.log(UpdatebookObj)
     
   }




  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-5">Uplade a book Data</h1>
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
              defaultValue={updateData.bookTitle}
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
              defaultValue={updateData.authorName}
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
              defaultValue={updateData.imageURL}
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
              defaultValue={updateData.category}
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
            defaultValue={updateData.description}
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
            defaultValue={updateData.bookPDFURL}
            type="text"
            placeholder="Book PDF URL"
            required
          />
        </div>
        <button type="submit" className="mt-5 bg-sky-600 btn font-bold text-white">Update Book</button>
      </form>
    </div>
  );
}
