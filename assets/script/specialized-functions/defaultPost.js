//untuk mensetting post default ke local storage
const defaultPost = [
  {
    id: 0,
    judul: "Apa itu HTML ?",
    timestamp: 1663984001000,
    author: "Maulana Malik Ibrahim",
    heroImage: "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    tags: ["teknologi", "web", "html"],
    content: `
    <h3>Apa itu HTML?</h3>
    <p>HyperText Markup Language or HTML adalah bahasa markup standar untuk dokumen yang didesain untuk ditampilkan di web browser. Biasanya juga terdapat teknologi yang membantunya seperti Cascading Style Sheet dan scripting language seperti JavaScript.</p>
    <p>Web browser menerima HTML dokumen dari web server atau dari local storage dan merender dokumen menjadi multimedia web pages. HTML mendeskripsikan struktur dari sebuah web page secara semantik</p>
    <h3>Pengertian Tag HTML dan Fungsinya</h3>
    <p>Tag HTML memiliki dua tipe utama: <b>block-level</b> dan <b>inline tags</b></p>
    <ul>
      <li>Elemen block-level memakai semua ruang yang tersedia dan selalu membuat line baru didalam dokumen. Contoh dari tag block adalah heading dan paragraf</li>
      <li>Elemen inline hanya memakai space sesuai dengan kebutuhannya dan tidak membuat line baru di halaman. Biasanya elemen ini akan memformat isi konten dari elemen block-level. Contoh dari tag inline adalah link dan emphasized strings.</li>
    </ul>
    <h3>Apa perbedaan dari HTML dan HTML5?</h3>
    <p>Sejak pertama diperkenalkan, bahasa ini telah melewati perkembangan yang cukup signifikan. W3C terus merilis versi dan update terbaru sembari mencetak sejarah dan mengukuhkan keberadaannya.</p>
    <p>HTML4 (dikenal sebagai "HTML") dirilis pada tahun 1999 dan versi terbarunya diperkenalkan pada publik pada tahun 2014, yaitu <b>HTML5</b>, versi terbaru ini menambahkan lebih banyak fitur baru ke bahasa markup ini.</p>
    <p>HTML5 juga memperkenalkan beberapa perbaikan pada semantic. Tag semantic baru mengirimkan informasi pada browser tentang arti konten, yang tak hanya bermanfaat bagi pembaca, tapi juga mesin pencari.</p>
    `,
  },
  {
    id: 1,
    judul: "Apa itu CSS ?",
    timestamp: 1664070401000,
    author: "Maulana Malik Ibrahim",
    heroImage: "https://images.unsplash.com/photo-1524666643752-b381eb00effb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    tags: ["teknologi", "web", "css"],
    content: `
    <p>Cascading style sheet atau CSS merupakan W3C standar yang digunakan untuk mengatur visualisasi berkas yang ditulis pada HTML. Atau singkatnya CSS digunakan untuk menerapkan styling pada HTML.</p>
    <p>CSS adalah declarative language yang nantinya digunakan untuk mendeklarasikan suatu nilai yang nantinya digunakan untuk mengatur seperti apa sebuah elemen HTML ditampilkan pada browser.</p>
    <h3>Keuntungan Menggunakan CSS</h3>
    <p>Dengan menerapkan CSS, tampilan website akan menjadi lebih menarik. Berikut beberapa keuntungan ketika menerapkan CSS :</p>
    <ul>
    <li>Dapat mengontrol dan menerapkan layout secara presisi.</li>
    <li>Menghindari pekerjaan yang berulang ulang dalam menerapkan styling. Satu berkas CSS dapat ditetapkan pada beberapa berkas HTML.</li>
      <li>Didukung banyak browser.</li>
    </ul>
    `,
  },
  {
    id: 2,
    judul: "Apa itu JavaScript dan DOM?",
    timestamp: 1664092001000,
    author: "Maulana Malik Ibrahim",
    heroImage: "https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    tags: ["teknologi", "web", "javascript"],
    content: `
    <p>Berbeda dengan HTML dan CSS. JavaScript memanfaatkan logic dalam penulisan kodenya.</p>
    <p>Pengembangan website tidak hanya mengandalkan seni untuk membangun tampilannya yang cantik, melainkan juga memerlukan juga memerlukan bahasa pemrograman agar meningkatkan Fungsionalitas dan membuat website lebih interaktif.</p>
    <h3>Apa itu JavaScript?</h3>
    <p>Javascript merupakan bahasa pemrograman client-side sehingga seluruh prosesnya berjalan pada sisi pengguna bukan server. JavaScript diperlukan pada pengembangan website ketika kita membutuhkan suatu interaksi dari pengguna. Sesungguhnya website hanya menampilkan konten yang statis jika hanta menggunakan HTML dan CSS.</p>
    <p>Karena diolah pada sisi client, JavaScript sangat bergantung pada pengaturan dan kemampuan browser ketika melakukan sebuah proses (compiling atau rendering pada DOM). Bahkan pengguna dapat sepenuhnya tidak mengizinkan JavaScript berjalan pada browser dengan menonaktifkan dukungan JavaScript pada browser.</p>
    <h3>Apa itu DOM?</h3>
    <p>Document Object Model (DOM) memberikan kita jalan untuk mengakses dan memanipulasi konten pada dokumen. DOM merupakan application programming interface (API) untuk HTML, XML, atau SVG. Dengan DOM berkas HTML dapat direpresentasikan dalam bentuk objek yang dapat diakses oleh JavaScript (sebenarnya tidak hanta oleh JavaScript, DOM juga dapat diakses oleh bahasa pemrograman lain).</p>
    <p>Melalui DOM inilah JavaScript dapat memanipulasi elemen beserta attributnya pada HTML</p>
    `,
  },
];

if (localStorage.getItem("post") == null || localStorage.getItem("post") === "[]") {
  localStorage.setItem("post", JSON.stringify(defaultPost));
}
