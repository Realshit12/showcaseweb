# DEXXSTORE — Official Website & Admin System (dexxstore.online)

เว็บไซต์ทางการของ **DEXXSTORE** ร้านจำหน่ายตัวช่วยปรับแต่งระบบเกม FiveM, GTA V, Online Games และ Windows Gaming Tweaks ค่าขาว 100% พร้อมระบบ **Login with Discord** และ **Admin Dashboard** จัดการหน้าร้านได้ทุกจุด

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```
web dexxstore/
│
├── index.html                  # หน้าร้านหลัก (Hero, Products, Benchmarks, Reviews, FAQ, Modals)
├── admin.html                  # หน้าแผงควบคุม Admin Dashboard เต็มรูปแบบ
├── README.md                   # คู่มือการใช้งานระบบ
│
└── assets/
    ├── css/
    │   └── style.css           # สไตล์ Katana Cyberpunk, Discord Badges, Admin Tables & Forms
    ├── js/
    │   └── main.js             # ฐานข้อมูล Reactive Store, ระบบล็อกอิน Discord, CRUD ผู้ดูแลระบบ
    └── images/
        ├── logo.jpg            # โลโก้ซามูไรนีออนสายฟ้า (Official Brand Mascot)
        ├── hero-character.jpg  # ภาพตัวละคร Mascot หัวข้อ Hero Section
        ├── product-dexxv4.jpg     # ภาพโปรแกรม DEXX V4 (The Next-Gen Optimizer & KeyAuth)
        ├── product-dexxghxst.png  # ภาพโปรแกรม DEXX GHXST (Performance Console & KeyAuth Engine)
        ├── product-dexxv3.jpg     # โปสเตอร์สินค้า DEXX V3 (Boost Your Game)
        ├── product-9800x3d.jpg    # โปสเตอร์สินค้า DEXX 9800X3D Performance Boost
        └── product-gpedit.jpg     # โปสเตอร์สินค้า Bullshit Gpedit + Network TWEAK
```

---

## 🔑 ระบบ Login with Discord & สิทธิ์การใช้งาน

- **ปุ่ม "Login Discord" บน Navbar:**
  - คลิกเพื่อเปิดหน้าต่างเข้าสู่ระบบด้วยบัญชี Discord
  - สามารถล็อกอินเป็นสมาชิกร้านค้า (Member) หรือล็อกอินเป็น **Admin (ผู้ดูแลระบบ)**
- **การเข้าสู่โหมด Admin:**
  - คลิกไอคอนแม่กุญแจ 🔒 หรือกดเมนู "เข้าสู่ระบบด้วยรหัส Admin"
  - **Master Passcode:** `dexx2026` (หรือคลิกปุ่ม *ล็อกอิน Admin แบบ One-Click*)
  - เมื่อเป็น Admin จะมีปุ่มสีแดงทองเด่นชัดบน Navbar: **`👑 DASHBOARD ADMIN`**

---

## ⚡ ระบบ Admin Dashboard (Can Edit All)

สามารถเปิดแผงควบคุมได้จากปุ่มบน Navbar ในหน้าร้าน หรือเปิดผ่านไฟล์ [`admin.html`](http://localhost:8080/admin.html) โดยตรง:

1. **📦 จัดการสินค้า (Manage Products):**
   - เพิ่มสินค้าใหม่ (Add Product) / แก้ไขสินค้าเดิม (Edit Product)
   - ปรับราคา, ชื่อสินค้า, ป้ายกำกับ (Badge), คำโปรย, สโลแกน, และรายการฟีเจอร์เด่น
   - เปลี่ยน URL หรือพาธรูปภาพโปสเตอร์สินค้า
   - ลบสินค้าที่ไม่ต้องการได้ทันที
2. **⚙️ ตั้งค่าหน้าเว็บ & Hero (General Settings):**
   - แก้ไขชื่อร้านค้า, โดเมน (`dexxstore.online`), ลิงก์ Discord Official (`discord.gg/qhNQGnuDtu`)
   - แก้ไขหัวข้อหลัก Hero, คำบรรยายหน้าร้าน
   - แก้ไขตัวเลขสถิติ (+45-75% FPS, 0.5ms Lag, 100% Whitelist, 3,500+ ลูกค้า)
3. **📢 แถบประกาศวิ่ง (Marquee Ticker):**
   - เพิ่ม แก้ไข หรือลบข้อความข่าวสารที่วิ่งพาดผ่านกลางหน้าเว็บแบบเรียลไทม์
4. **⭐ จัดการรีวิวจากลูกค้า (Customer Reviews):**
   - เพิ่มรีวิวใหม่ หรือแก้ไขข้อความรีวิวและชื่อผู้ใช้ของลูกค้า
5. **❓ จัดการคำถามที่พบบ่อย (FAQs):**
   - เพิ่มหรือแก้ไขคำถาม-คำตอบบนหน้าเว็บ
6. **💾 สำรอง & รีเซ็ตข้อมูล (Database Backup & Reset):**
   - **ส่งออก JSON (Export):** บันทึกการแก้ไขทั้งหมดเป็นไฟล์ `.json` เก็บไว้ในเครื่อง
   - **นำเข้า JSON (Import):** กู้คืนหรือโหลดชุดข้อมูลใหม่
   - **รีเซ็ตค่าเริ่มต้น (Reset to Default):** ดึงข้อมูลออริจินัลกลับมาได้ในคลิกเดียว

---

## 🚀 วิธีเปิดทดสอบในเครื่อง

```bash
# รัน Local Server ผ่าน Python
python -m http.server 8080

# หน้าร้านหลัก:
http://localhost:8080/

# แผงควบคุม Admin Dashboard:
http://localhost:8080/admin.html
```
