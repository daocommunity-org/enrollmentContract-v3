import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { getAllMembers } from '../utils/contractInteractions';

interface Member {
  walletAddress: string;
  name: string;
  regno: string;
  enrollmentTime: number;
}

export function EnrolledMembersModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      const fetchedMembers = await getAllMembers();
      setMembers(fetchedMembers.sort((a:any, b:any) => b.enrollmentTime - a.enrollmentTime));
    };

    if (isOpen) {
      fetchMembers();
    }
  }, [isOpen]);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.walletAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[80vw]">
        <DialogHeader>
          <DialogTitle>Enrolled Members</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
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
              <TableHead>Enrollment Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.walletAddress}</TableCell>
                <TableCell>{member.regno}</TableCell>
                <TableCell>{member.enrollmentTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}