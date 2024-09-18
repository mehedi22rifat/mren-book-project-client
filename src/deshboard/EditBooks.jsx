import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import { UploadBooks } from './UploadBooks';
export const EditBooks = () => {

  const {id} = useParams();
  // console.log(id)
 
  const {bookTitle,authorName,category,imageURL,bookPDFURL,bookDescription} = useLoaderData()

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

   const handleFromSumbitData = (event) =>{
    event.preventDefault()
      const form = event.target;
      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.description.value;
      const bookPDFURL = form.BookPDFRUL.value;

      const updatebookObj = {
        bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
      }
      
      // update data
      fetch(`https://mren-server.vercel.app/book/${id}`,{
        method:'PATCH',
        headers:{
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(updatebookObj)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.modifiedCount > 0){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Book Update Successfull",
            showConfirmButton: false,
            timer: 1500
          });
          // form.reset();  
        }
      })

      // form.reset();
    
   }




  return (
    <div>
      <Helmet>
            <title>Book Store || Update Book</title>
          </Helmet>
      <h1 className="text-4xl text-center font-bold my-10">Uplade a book Data</h1>
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
              defaultValue={bookTitle}
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
              defaultValue={authorName}
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
              defaultValue={imageURL}
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
              // defaultValue={category}
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
            defaultValue={bookDescription}
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
            defaultValue={bookPDFURL}
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
