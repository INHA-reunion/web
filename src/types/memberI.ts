export interface MemberI {
  id: number;
  groupId: number;
  name: string;
  department: string;
  studentId: number;
  position: string;
  affiliation: string;
  phoneNum: string;
  fax: string;
  email: string;
  groupName: string; // Assuming the API returns the group name
}
