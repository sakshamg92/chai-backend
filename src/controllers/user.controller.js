import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "i am saksham from controller",
  });
});

export { registerUser };
