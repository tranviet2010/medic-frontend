import { Pagination } from "../table/tableCore";

// variable color
export const MainColor = "#00ac47";
// export const MainColor = "#d81827";
export const TextColor = "#007D3D";
export const ActiveMenuItem = "#73C76E";
export const SubColor = "#DEF1E7";
export const White = "#fff";
export const Black = "#000";
export const Gray = "#ccc";
export const GrayBland = "#f9f9f9";
export const Orange = "#f3565d";
export const Red = "#cc0000";
export const Violet = "#4600FF";
export const Blue = "#1890ff";
export const BlackTransparent = "rgba(0, 0, 0, 0.3)";
export const BorderColor = "#DDDDDD";
export const paginationShared: Pagination = {
  page: 1,
  current: 1,
  pageSize: 5,
  limit: 10
}

export const status = [
  { id: 1, value: "Hoạt động" },
  { id: 0, value: "Tạm đóng" }
]