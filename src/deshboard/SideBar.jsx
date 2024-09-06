import React from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiCloudUpload, HiInbox, HiShoppingBag, HiTable, HiUpload, HiUser, HiViewBoards } from "react-icons/hi";

import profileImg from '../assets/profile.jpg'
export const SideBar = () => {
    return (
      <div className='h-screen'>
          <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Sidebar.Logo href="#" img={profileImg} imgAlt="Flowbite logo">
                Flowbite
             </Sidebar.Logo>
              <Sidebar.Item href="/admin/deshboard" icon={HiChartPie}>
                Deshboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/deshboard/upload" icon={HiCloudUpload}>
                Upload Book
              </Sidebar.Item>
              <Sidebar.Item href="/admin/deshboard/manage" icon={HiInbox}>
                Manage Book
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Upgrade to Pro
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BiBuoy}>
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      );
}
