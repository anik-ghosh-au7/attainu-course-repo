// utils
import response from "../utils/response";
import catchError from "../utils/catchError";

export default {
  // search notebooks by title ----------------------------------------------------------------
  searchController: catchError(async (req, res, next) => {
    response(res, [], "Search result", false, 200);
  }),
};
