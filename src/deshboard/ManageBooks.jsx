import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
export const ManageBooks = () => {
  const [manageBook,setManageBook] = useState([])
  
  useEffect(() =>{
    fetch('http://localhost:5000/all-books')
    .then(res=> res.json())
    .then(data => setManageBook(data))
  },[])

  // delete a book
 const handleDeleteBook = (id) =>{
     fetch(`http://localhost:5000/book/${id}`,{
      method:"DELETE",
     })
     .then(res => res.json())
     .then(data =>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
     })
 } 

  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-5'>Manage your books</h1>
    <div className="overflow-x-auto w-full">
      <Table className='lg:w-[950px] mt-10'>
        <Table.Head className=''>
        <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Title</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
           Edit
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
         {
          manageBook.map((book,index) =>  <Table.Row key={book._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>
            {index + 1}
          </Table.Cell>
          <Table.Cell>{book.bookTitle}</Table.Cell>
          <Table.Cell>{book.authorName}</Table.Cell>
          <Table.Cell>{book.category}</Table.Cell>
          <Table.Cell>$10</Table.Cell>
          <Table.Cell>
            <Link
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
            to={`/admin/deshboard/edit-books/${book._id}`}
            >
            Edit
           </Link>
           <button onClick={() => handleDeleteBook(book._id)} className='p-1 ml-2 bg-red-600 text-white font-bold rounded border-none'>Delete</button>
          </Table.Cell>
        </Table.Row>)
         }
        </Table.Body>
      </Table>
    </div>
    </div>
  );
}
