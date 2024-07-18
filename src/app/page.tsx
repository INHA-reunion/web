// pages/index.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MemberI } from "@/types/memberI";
import Paging from "@/components/paging";
import SearchInput from "@/components/searchInput";

const dummyMembers: MemberI[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  groupId: (i % 3) + 1,
  name: `Member ${i + 1}`,
  department: `Department ${i % 5}`,
  studentId: 1000 + i,
  position: "Student",
  affiliation: "University",
  phoneNum: `010-0000-00${i}`,
  fax: `010-0000-00${i}`,
  email: `member${i + 1}@example.com`,
  groupName: `Group ${(i % 3) + 1}`,
}));

const Home: React.FC = () => {
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [members, setMembers] = useState<MemberI[]>(dummyMembers);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setMembers(dummyMembers);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handleEditMember = (memberId: number) => {
    router.push(`/edit-member/${memberId}`);
  };

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = filteredMembers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">장학금 관리 시스템</h1>
      </div>
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md mr-4"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              장학 단체 보기
              {showDropdown && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                    onClick={() => router.push("/reunion-groups/consignment")}
                  >
                    위탁
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                    onClick={() => router.push("/reunion-groups/individual")}
                  >
                    개인
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                    onClick={() =>
                      router.push("/reunion-groups/school-consignment")
                    }
                  >
                    학교 위탁
                  </button>
                </div>
              )}
            </button>
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md mr-4"
            onClick={() => router.push("/add-consignment-group")}
          >
            장학 단체 추가
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() => router.push("/add-member")}
          >
            회원 추가
          </button>
        </div>
        <SearchInput
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      </div>
      <ul>
        {currentMembers && currentMembers.length > 0
          ? currentMembers.map((member) => (
              <li
                key={member.id}
                className="my-4 py-3 px-4 rounded-lg shadow-md bg-white mb-2 hover:bg-gray-100"
              >
                <div className="flex justify-between">
                  <div className="text-xl font-bold">{member.name}</div>
                  <button
                    className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                    onClick={() => handleEditMember(member.id)}
                  >
                    수정
                  </button>
                </div>
                <div className="px-1 py-2 text-sm text-gray-500">
                  <p>학과: {member.department}</p>
                  <p>학번: {member.studentId}</p>
                  <p>직책: {member.position}</p>
                  <p>소속: {member.affiliation}</p>
                  <p>휴대폰: {member.phoneNum}</p>
                  <p>팩스: {member.fax}</p>
                  <p>이메일: {member.email}</p>
                </div>
              </li>
            ))
          : searchTerm && (
              <li className="py-2 px-4 rounded-lg shadow-md bg-white mb-2">
                검색 결과가 없습니다.
              </li>
            )}
      </ul>
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
