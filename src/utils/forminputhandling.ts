import { RowType } from "@/types/types";
import { instance } from "./RootClient";

// get data from the db
async function getData(currentPage: number, limit: number) {
  const { data } = await instance.get(
    `api/session?session_id_is_null=true&offset=${currentPage}&limit=${limit}`
  );
  return data;
}

// post data to the server
async function postFormData(formData: RowType) {
  const currentDate = new Date().toLocaleDateString();

  const res = await instance.post("/quiz", {
    dateCreated: currentDate,
    ...formData,
  });

  return res;
}

export { getData, postFormData };
