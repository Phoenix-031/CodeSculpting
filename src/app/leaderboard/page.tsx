"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { log } from "console";

const LeaderBoard = () => {
  const [userData, setUserData] = useState<any[]>([]);

  const getUsersScore = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    console.log(data.users);
    // setUserData(data.users);

    const sortedUserData = data.users.sort(
      (a: any, b: any) => b.weight - a.weight
    );
    setUserData(sortedUserData);
    console.log(userData);
  };

  useEffect(() => {
    getUsersScore();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center my-8 mx-16">
        <div className="text-xl font-bold m-4">Leader Board</div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.map((user: any, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{user.fristName + " " + user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-right">{user.weight}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default LeaderBoard;
