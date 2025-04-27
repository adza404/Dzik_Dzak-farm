const produk = [
  {
    NIK: "DZ-001",
    nama: "Kambing Etawa",
    harga: "Rp 3.500.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Untuk perah & bibit",
    stok: true,
    gambar: "image/etawa.jpeg"
  },
  {
    NIK: "DZ-003",
    nama: "Kambing Etawa",
    harga: "Rp 3.500.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Untuk perah & bibit",
    stok: true,
    gambar: "image/etawa.jpeg"
  },
  {
    NIK: "DZ-004",
    nama: "Kambing Etawa",
    harga: "Rp 3.500.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Untuk perah & bibit",
    stok: true,
    gambar: "image/etawa.jpeg"
  },
  {
    NIK: "DZ-005",
    nama: "Kambing Etawa",
    harga: "Rp 3.500.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Untuk perah & bibit",
    stok: true,
    gambar: "image/etawa.jpeg"
  },
  {
    NIK: "DZ-006",
    nama: "Kambing Boer",
    harga: "Rp 4.000.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Pedaging unggul",
    stok: true,
    gambar: "image/boer.jpeg"
  },
  {
    NIK: "DZ-007",
    nama: "Kambing Boer",
    harga: "Rp 4.000.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Pedaging unggul",
    stok: true,
    gambar: "image/boer.jpeg"
  },
  {
    NIK: "DZ-008",
    nama: "Kambing Boer",
    harga: "Rp 4.000.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Pedaging unggul",
    stok: true,
    gambar: "image/boer.jpeg"
  },
  {
    NIK: "DZ-009",
    nama: "Kambing Boer",
    harga: "Rp 4.000.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Pedaging unggul",
    stok: true,
    gambar: "image/boer.jpeg"
  },
  {
    NIK: "DZ-010",
    nama: "Kambing Boer",
    harga: "Rp 4.000.000",
    umur: "umur : 3 bulan",
    kondisi: "kondisi : sehat",
    deskripsi: "Pedaging unggul",
    stok: true,
    gambar: "image/boer.jpeg"
  },

  //pupuk
  {
    NIK: "PDZ-001",
    nama: "Pupuk Kohe Padat",
    harga: "Rp 50.000 / karung",
    umur: "kadar PH : 7",
    kondisi: "aman untuk tanaman",
    deskripsi: "Organik",
    stok: true,
    gambar: "image/pupuk_padat.jpeg"
  },
  {
    NIK: "PDZ-002",
    nama: "Pupuk Kohe Cair",
    harga: "Rp 35.000 / liter",
    umur: "kadar PH : 6",
    kondisi: "aman untuk tanaman",
    deskripsi: "Untuk semprot",
    stok: false,
    gambar: "image/pupuk_cair.jpeg"
  }
];
  
const containerKambing = document.getElementById("produk-kambing");
const containerPupuk = document.getElementById("produk-pupuk");
  
produk.forEach(item => {
  const div = document.createElement("div");
  div.className = "produk-item";
  div.innerHTML = `
    <img src="${item.gambar}" alt="${item.nama}" class="produk-img" />
    <h4>${item.NIK}</h4>
    <h3>${item.nama}</h3>
    <p>${item.deskripsi}</p>
    <strong>${item.harga}</strong>
    <p>${item.umur}</p>
    <p>${item.kondisi}</p>
    <p class="${item.stok ? 'tersedia' : 'tidak-tersedia'}">
      ${item.stok ? 'Tersedia' : 'Tidak Tersedia'}
    </p>
    <button ${item.stok ? '' : 'disabled'} class="btn-pesan" onclick="tampilkanForm('${item.nama}')">
      ${item.stok ? 'Pesan Sekarang' : 'Stok Habis'}
    </button>
  `;

  if (item.nama.includes("Kambing")) {
    containerKambing.appendChild(div);
  } else if (item.nama.includes("Pupuk")) {
    containerPupuk.appendChild(div);
  }
});

document.getElementById("cari-produk").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  containerKambing.innerHTML = "";
  containerPupuk.innerHTML = "";

  produk
    .filter(item =>
      item.NIK.toLowerCase().includes(keyword) ||
      item.deskripsi.toLowerCase().includes(keyword)
    )
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "produk-item";
      div.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}" class="produk-img" />
        <h4>${item.NIK}</h4>
        <h3>${item.nama}</h3>
        <p>${item.deskripsi}</p>
        <strong>${item.harga}</strong>
        <p>${item.umur}</p>
        <p>${item.kondisi}</p>
        <p class="${item.stok ? 'tersedia' : 'tidak-tersedia'}">
          ${item.stok ? 'Tersedia' : 'Tidak Tersedia'}
        </p>
        <button ${item.stok ? '' : 'disabled'} class="btn-pesan" onclick="tampilkanForm('${item.nama}')">
          ${item.stok ? 'Pesan Sekarang' : 'Stok Habis'}
        </button>
      `;

      if (item.nama.includes("Kambing")) {
        containerKambing.appendChild(div);
      } else if (item.nama.includes("Pupuk")) {
        containerPupuk.appendChild(div);
      }
    });
});

function tampilkanForm(namaProduk) {
  document.getElementById("form-container").style.display = "block";
  const select = document.getElementById("produk");
  for (let option of select.options) {
    if (option.value === namaProduk) {
      option.selected = true;
      break;
    }
  }

  // Scroll ke form
  document.getElementById("form-container").scrollIntoView({ behavior: "smooth" });
}

function scrollProduk(arah, targetId) {
  const container = document.getElementById(targetId);
  const scrollAmount = 300;
  container.scrollBy({
    left: arah * scrollAmount,
    behavior: 'smooth'
  });
}


document.getElementById("form-pesan").addEventListener("submit", async function (e) {
    e.preventDefault();

  
    const data = {
      nama: document.getElementById("nama").value,
      telepon: document.getElementById("telepon").value,
      produk: document.getElementById("produk").value,
      jumlah: document.getElementById("jumlah").value,
      catatan: document.getElementById("alamat").value
    };

    console.log("🧾 Data yang dikirim:", data);
  
    try {
      const res = await fetch("http://localhost:3000/api/pesan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
      if (result.status === "sukses") {
        document.getElementById("pesan-sukses").style.display = "block";
        this.reset();
      }
    } catch (err) {
      alert("Gagal mengirim pesan.");
      console.error(err);
    }
});
  