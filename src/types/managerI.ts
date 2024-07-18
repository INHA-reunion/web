import { RecipientI } from "./recipientI";

export interface ManagerI {
  id: number;
  groupId: number;
  name: string;
  department: string;
  studentId: number;
  position: string; // 직책
  affiliation: string; // 소속
  phoneNum: string;
  fax: string;
  email: string;
  recipients: RecipientI[];
}
