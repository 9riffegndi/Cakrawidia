Berikut adalah dokumentasi lengkap untuk instalasi React.js dengan **Tailwind CSS**, **Daisy UI**, **Axios**, dan **Day.js**:

---

# **Dokumentasi Instalasi React.js dengan Tailwind CSS, Daisy UI, Axios, dan Day.js**

Dokumentasi ini membantu Anda menyiapkan proyek React dengan konfigurasi **Tailwind CSS**, **Daisy UI**, **Axios**, dan **Day.js** secara terstruktur.

---

## **1. Membuat Proyek React**
1. Buka terminal atau command prompt.
2. Jalankan perintah berikut untuk membuat proyek React baru:
   ```bash
   git clone https://github.com/9riffegndi/Cakrawidia.git
   ```
3. Masuk ke direktori proyek:
   ```bash
   cd cakrawidia
   ```

---

## **2. Instalasi Tailwind CSS**
### **Langkah-langkah:**
1. **Install Tailwind CSS dan Plugin Terkait**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
2. **Inisialisasi Konfigurasi Tailwind**:
   ```bash
   npx tailwindcss init
   ```
   Ini akan membuat file `tailwind.config.js`.

3. **Atur Konfigurasi Tailwind**:
   Edit file `tailwind.config.js` dan tambahkan konfigurasi berikut:
   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Tambahkan File CSS Tailwind**:
   Buat file `src/styles/tailwind.css` dan tambahkan:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Import CSS di `index.js`**:
   Tambahkan file Tailwind ke dalam `src/index.js`:
   ```javascript
   import './styles/tailwind.css';
   ```

---

## **3. Instalasi Daisy UI**
1. **Install Daisy UI**:
   ```bash
   npm install daisyui
   ```

2. **Tambahkan Daisy UI ke Konfigurasi Tailwind**:
   Edit file `tailwind.config.js` dan tambahkan plugin Daisy UI:
   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [require("daisyui")],
   };
   ```

---

## **4. Instalasi Axios**
1. **Install Axios**:
   ```bash
   npm install axios
   ```

2. **Membuat File API Services**:
   Buat file baru `src/services/api.js` untuk menyimpan fungsi API:
   ```javascript
   import axios from "axios";

   const API = axios.create({
     baseURL: "https://api.example.com",
   });

   export const fetchData = async (endpoint) => {
     try {
       const response = await API.get(endpoint);
       return response.data;
     } catch (error) {
       console.error("Error fetching data:", error);
       throw error;
     }
   };
   ```

---

## **5. Instalasi Day.js**
1. **Install Day.js**:
   ```bash
   npm install dayjs
   ```

2. **Membuat File Utility untuk Day.js**:
   Buat file baru `src/utils/dateUtils.js`:
   ```javascript
   import dayjs from "dayjs";

   export const formatDate = (date) => dayjs(date).format("DD-MM-YYYY");
   ```
---

## **6. Menjalankan Proyek**
Setelah semua instalasi selesai, jalankan proyek dengan perintah:
```bash
npm start
```

---

## **Contoh Penggunaan**
### **1. Daisy UI**
Gunakan komponen dari Daisy UI di file `src/App.js`:
```javascript
export default function App() {
  return (
    <div className="p-4">
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}
```

### **2. Axios**
Gunakan Axios untuk fetch data API:
```javascript
import { useEffect, useState } from "react";
import { fetchData } from "./services/api";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("/users")
      .then((users) => setData(users))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

### **3. Day.js**
Gunakan Day.js untuk memformat tanggal:
```javascript
import { formatDate } from "./utils/dateUtils";

const App = () => {
  const currentDate = new Date();

  return (
    <div>
      <h1>Current Date: {formatDate(currentDate)}</h1>
    </div>
  );
};

export default App;
```

---


## npm install react-helmet
