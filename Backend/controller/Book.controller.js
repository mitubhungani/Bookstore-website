// import Book from "../model/Book.model";

// export const getBook = (req, res) => {
//   try {
//     const book = Book.find();
//     res.status(200).json(book);
//   } catch (error) {
//     console.log("error", error);
//     res.status(500).json(error);
//   }
// };

import Book from "../model/Book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    console.log("book", book);

    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
