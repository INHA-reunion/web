export interface FinanceI {
  id: number;
  certificateId: number;
  trustFund: number; // 위탁금
  lastSemBalance: number; // 전학기 잔액
  operatingIncome: number; // 운용소득
  unpaidCumulative: number; // 미지급누계
  depositAmount?: number; // 입금액 (optional)
  depositDate?: Date; // 입금날짜 (optional)
  balance: number;
}
