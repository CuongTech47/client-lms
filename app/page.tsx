"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0); 
  return (
    <div>
      <Heading
        title="ELearning"
        description="ELeaning là một nền tảng để học sinh học tập và nhận được sự trợ giúp từ giáo viên"
        keywords="Programing,MERN,Redux,MongoDB"
      />
      <Header 
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Page;
