import Book1Image from "../images/book1.png";
import Book2Image from "../images/book2.png";
import Book3Image from "../images/book3.png";
import Book4Image from "../images/book4.png";
import class1Image from "../images/class1.png";
import class2Image from "../images/class2.png";
import class3Image from "../images/class3.png";
import Class4Image from "../images/class4.png";
import Ch1Image from "../images/Ch1.jpg";
import Chi2Image from "../images/Chi2.jpg";
import Chi3Image from "../images/Chi3.jpg";
import Chi4Image from "../images/Chi4.jpg";
import { BiCategory } from "react-icons/bi";

export const children = [
  {
    id: 1,
    title: "Alphabets",
    author: "Paulo Coelho",
    price: "$19.99",
    image: Ch1Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt..",
    category: "Best Seeling",
  },
  {
    id: 2,
    title: "The MAthmatics",
    author: "Paulo Coelho",
    price: "$9.99",
    image: Chi2Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt..",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
  {
    id: 3,
    title: "PlayFun",
    author: "Paulo Coelho",
    price: "$4.99",
    image: Chi3Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt..",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
  {
    id: 4,
    title: "Fruit@ Vagetable",
    author: "Paulo Coelho",
    price: "$29.99",
    image: Chi4Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt...",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
  // {
  //   id: 13,
  //   title: "The Alchemist",
  //   author: "Paulo Coelho  ",
  //   price: "$19.99",
  //   image: Book2Image,
  //   description:
  //     "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt..",
  //   publisher: "HarperOne",
  // },
  // Add all your books here with their details
];

export const bestSelling = [
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    price: "$87.75",
    image: Book1Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt....",
    publisher: "Ace Books",
    category: "Best Seeling",
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$19.99",
    image: Book2Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt...",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
  {
    id: 7,
    title: "1988",
    author: "George  Orwell",
    price: "$39.99",
    image: Book3Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt...",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
  {
    id: 8,
    title: "Ikigait",
    author: "Hector Garcia",
    price: "36,00 $",
    image: Book4Image,
    description:
      "Ikigai reveals the secrets to their longevity and happiness: how they eat, how they move, how they work, how they foster collaboration and community, and—their best-kept secret—how they find the ikigai that brings satisfaction to their lives. And it provides practical tools to help you discover your own ikigai.",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
];
export const classic = [
  {
    id: 9,
    title: "Metafizik",
    author: "Aristoteles",
    price: "36,00 $",
    image: class1Image,
    description:
      "Metafizik (meaning Metaphysics in Turkish) by Aristotle is a foundational work in philosophy, exploring the nature of reality, existence, and the ultimate principles of the universe, with a focus on the study of being as being",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
  {
    id: 10,
    title: "Goethe",
    author: "Paulo Coelho",
    price: "$19.99",
    image: class2Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt.",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
  {
    id: 11,
    title: "BIR Grace",
    author: "Paulo Coelho",
    price: "$19.99",
    image: class3Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt. ",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
  {
    id: 12,
    title: "Zaman",
    author: "Paulo Coelho",
    price: "$19.99",
    image: Class4Image,
    description:
      "The Alchemist is a story of following one's dreams to find one's purpose in life. The main character, Santiago, is a Spanish shepherd boy who leaves behind his job and family to search for his Personal Legend, a hidden treasure that he believes is buried near the pyramids in Egypt.",
    publisher: "HarperOne",
    category: "Best Seeling",
  },
];
export const booksData = [...children, ...bestSelling, ...classic];
