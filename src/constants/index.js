import { image } from "motion/react-client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

import certificate1 from "../assets/certificate/RevoU.png"
import certificate2 from "../assets/certificate/Excel.png"

export const HERO_CONTENT = `Saya merupakan lulusan Teknik Informatika di salah satu Universitas di Indonesia. Saya 
menguasai pemrograman Full Stack Developer dengan backend menggunakan Laravel dan frontend menggunakan React js. 
Saya juga pernah mengikuti Course Data Analytics and Software Development dari RevoU. Maka dari itu saya mempunyai
skill di bidang Data Analis juga. `;

export const ABOUT_TEXT = `Saya seorang yang bermotivasi tinggi dengan pola pikir berkembang yang kuat, sikap positif, 
dan semangat untuk belajar. Saya mempunyai pengalaman sebelumnya sebagai pengembang web menggunakan framework Laravel 
sebagai backend engineer. React, Js, Css, Html juga query SQL juga saya kuasai dalam mengembangkan web. Saya juga 
mempunyai 5 buah jurnal tentang Bussines Intelligence dan data mining yang terakreditasi Sinta 4. Sebelumya 
saya juga pernah mengikuti pelatihan Data Analytics and Software Development dari RevoU. Maka dari itu saya mempunyai skill dan minat dalam 
analisis data. Saya juga telah menyelesaikan studi strata 1 saya pada prodi Teknik Informatika dengan IPK mencapai
3.73 dan dinyatakan sebagai lulusan yang cumlaude. Saya bersemangat untuk bergabung dengan tim Anda dan memberikan kontribusi yang berharga.`;

export const EXPERIENCES = [
  {
    year: "Juli 2023 - September 2023",
    role: "Full Stack Developer",
    company: " Badan Pangan Nasional",
    description: `Pernah magang membuat sebuah website untuk membuat surat perjalanan dinas karyawan dalam divisi Pusat Data dan Informasi Pangan.`,
    technologies: ["Javascript", "Laravel", "HTML", "Css"],
  },
  {
    year: "Juli 2023 - Agustus 2023",
    role: "Full Stack Developer",
    company: " Ditjen Bina Pemerintahan Desa Kemendagri",
    description: `Kolaborasi dengan rekan untuk membuat sebuah website pelatihan/belajar online bagi para pengguna.`,
    technologies: ["PHP", "HTML", "Css", "Javascript"],
  },
  {
    year: "Agustus 2024 - Oktober 2024",
    role: "Admin",
    company: " Dropper",
    description: `Magang sebagai admin pada perusahaan jasa ekspedisi yang bernama Dropper. Dropper bekerja sama dengan
    perusahaan ekspedisi lain yaitu JNT dan SiCepat.`,
    technologies: [],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Website Perjalanan Dinas",
    image: project1,
    description:
      "Sebuah website yang dapat membuat surat perjalanan dinas karyawan divisi Pusat Data dan Informasi Pangan di Badan Pangan Nasional.",
    technologies: ["HTML", "CSS", "Javascript", "PHP-Laravel", "SQL"],
  },
  {
    title: "Online Learning Website p3k",
    image: project2,
    description:
      "Membuat sebuah website pembelajaran online user pada Ditjen Bina Pemerintahan Desa Kemendagri",
    technologies: ["HTML", "CSS", "PHP", "Javascript", "SQL"],
  },
  {
    title: "Website Visualisasi Data",
    image: project3,
    description:
      "Membuat sebuah website untuk memvisualisasikan data penjualan yang diambil dari Google Big Query dan dieksport menjadi file json.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Website Logistik",
    image: project4,
    description:
      "Website untuk Menampilkan, Menghapus, Menambah, Mengupdate data logistik barang yang dimiliki dan terintegrasi langsung dengan database.",
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "SQL"],
  },
];

export const CERTIFICATE = [
  {
    name: "Data Analytics & Software Development With AI",
    from: " RevoU",
    description: "Sebuah studi independen dari RevoU tentang bagaimana menjadi seorang data analis professional. Ditambah kursus dalam membuat sebuah website dengan HTML, CSS dan Javascript untuk menampilkan visualisasi data yang sudah dianalisis.",
    image: certificate1,
    technologies: ["HTML", "CSS", "Javascript", "Google Big Query", "Looker Studio", "SQL"]
  },
  {
    name: "Microsoft Office Specialist (Excel)",
    from: " Microsoft",
    description: "Mengerjakan sebuah test yang berisikan tentang bagaimana cara mengoperasikan excel dengan studi kasus dan soal-soal yang sudah disediakan oleh penyelenggara.",
    image: certificate2,
    technologies: ["MS.Excel"]
  },
];

export const CONTACT = {
  address: "Cipete Selatan, Cilandak, Jakarta Selatan (12410) - Jakarta ",
  phoneNo: "+62 83805781815 ",
  email: "allifrizki02@gmail.com",
};
