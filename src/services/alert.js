import { toast } from "react-toastify";

export const createAlert = ({ text, type }) => toast(text, { type });
