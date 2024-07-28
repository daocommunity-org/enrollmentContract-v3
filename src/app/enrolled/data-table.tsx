"use client"

import React, { useState, useEffect } from 'react';

import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { getAllMembers } from '../../utils/contractInteractions';

interface Member {
    walletAddress: string;
    name: string;
    regno: string;
    message: string;
    enrollmentTime: number;
  }
  
  export function EnrolledMembersModal() {
    const [members, setMembers] = useState<Member[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      const fetchMembers = async () => {
        const fetchedMembers = await getAllMembers();
        setMembers(fetchedMembers.sort((a:any, b:any) => b.enrollmentTime - a.enrollmentTime));
      };
  
        fetchMembers();
    }, []);
  
    const filteredMembers = members.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.walletAddress.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <div className="mb-4 w-[30%]">
            <Input
            placeholder="Search by name or address"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Wallet Address</TableHead>
                <TableHead>Registration Number</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Enrollment Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.map((member, index) => (
                <TableRow key={index}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.walletAddress}</TableCell>
                  <TableCell>{member.regno}</TableCell>
                  <TableCell>{member.message}</TableCell>
                  <TableCell>{member.enrollmentTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div>
    );
  }
