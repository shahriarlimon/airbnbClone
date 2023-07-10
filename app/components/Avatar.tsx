"use client";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return <Image height={30} width={30} src={"/images/placeholder.jpg"} alt="avatar" className="rounded-full" />;
};

export default Avatar;
