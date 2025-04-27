require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Setup transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route untuk menerima pesanan
app.post("/api/pesan", (req, res) => {
  const { nama, telepon, produk, jumlah, catatan } = req.body;

  const mailOptions = {
    from: `"Form Pemesanan Peternakan" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "Pesanan Baru dari Website Peternakan",
    html: `
      <h3>Pesanan Baru</h3>
      <ul>
        <li><strong>Nama:</strong> ${nama}</li>
        <li><strong>Telepon:</strong> ${telepon}</li>
        <li><strong>Produk:</strong> ${produk}</li>
        <li><strong>Jumlah:</strong> ${jumlah}</li>
        <li><strong>Catatan:</strong> ${catatan}</li>
      </ul>
    `
};

  // Kirim email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Gagal mengirim email:", error);
      res.status(500).json({ status: "gagal", message: "Email gagal dikirim." });
    } else {
      console.log("Email terkirim:", info.response);
      res.json({ status: "sukses", message: "Pemesanan berhasil dikirim via email." });
    }
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});