// DEXXSTORE Official Frontend & Admin Controller - dexxstore.online

// Default Database Initializer
const DEFAULT_DEXX_DB = {
  config: {
    siteName: "DEXXSTORE",
    domain: "dexxstore.online",
    discordInvite: "https://discord.gg/qhNQGnuDtu",
    heroHeading1: "คมดั่งคมดาบ",
    heroHeading2: "ไวดั่งสายฟ้า",
    heroSubtitle: "DEXXSTORE — ปลดล็อคขีดจำกัดความลื่นไหล FiveM & Online Games",
    heroDesc: "ตัวช่วยปรับแต่งระบบเกม FiveM, GTA V และ Online Games ด้วยเทคโนโลยีจูนเนอร์ขั้นสูง ลด Input Lag (0.5ms feel), เพิ่ม FPS สเปรย์ปืนตรง วงนัวตัวไหล, ปรับ Network TCP ปิงนิ่งสนิท ค่าขาว 100% ปลอดภัยทุกเซิร์ฟเวอร์",
    statFps: "+45-75%",
    statLag: "0.5 ms",
    statSafe: "100%",
    statUsers: "3,500+",
    adminDiscordIds: ["491549619587907585"]
  },
  products: [
    {
      id: "dexx-v4",
      name: "DEXX V4 (OPTIMIZER)",
      category: "fivem",
      categoryLabel: "Flagship Optimizer · FiveM / All Games",
      badge: "🔥 NEW V4 · KEYAUTH",
      subtitle: "DEXX V4 OPTIMIZER ระบบปรับแต่งแห่งอนาคต (KeyAuth License System)",
      tagline: "Rapid Trigger · Input Lag Fix · Network QoS · Power/Timer · ค่าขาว 100%",
      price: 390,
      priceLabel: "฿390",
      rating: "5.0",
      reviewCount: "New Release",
      image: "assets/images/product-dexxv4.jpg",
      highlight: "KeyAuth System | Rapid Trigger | MSI GPU Mode | Restore Defaults 1-Click",
      features: [
        "Rapid Trigger: ปรับแต่งสวิตช์ลั่นไวเหมือนคีย์บอร์ดแม่เหล็ก คมกริบทุกช็อต",
        "Win32 / Gpedit / CPU: ปรับแต่งแกนระบบ Windows ปลดล็อคพลังซีพียูทุกคอร์",
        "Input (Lag Fix): ขจัดความหน่วงเมาส์และคีย์บอร์ด ตอบสนองระดับ 0.5ms",
        "Network (QoS): จัดลำดับแพ็กเก็ตเกม ปิงต่ำลง นิ่ง ไม่ดีเลย์ ไร้ Packet Loss",
        "Power / Timer: โปรไฟล์ไฟพลังงานสูงสุด + System Timer Resolution เสถียรสุด",
        "Tools & Cache: ล้างขยะ แคช FiveM และเคลียร์แรม Standby List อัตโนมัติ",
        "MSI Utility GPU Mode: เร่งความเร็ว GPU Interruption Speed ดึงเฟรมเรตสูงสุด",
        "Restore Defaults: มีปุ่มคืนค่าเริ่มต้นระบบได้ตลอดเวลาในคลิกเดียว ปลอดภัย 100%",
        "KeyAuth Security: ระบบล็อกอิน License Key แท้ ปลอดภัย ค่าขาว 100% ไม่โดนแบน"
      ],
      compatibility: "Windows 10 / 11 (ทุกเวอร์ชัน / ทุก Build)",
      setupType: "ระบบ KeyAuth License Key พร้อมทีมงาน Remote Setup ดูแล 24 ชม.",
      options: [
        { id: "v4-standard", name: "DEXX V4 Standard Key (1 เครื่อง)", price: 390 },
        { id: "v4-lifetime", name: "DEXX V4 VIP Lifetime + อัปเดตตลอดชีพ", price: 590 }
      ]
    },
    {
      id: "dexx-ghxst",
      name: "DEXX GHXST (CONSOLE)",
      category: "fivem",
      categoryLabel: "Performance Console · FiveM & FPS",
      badge: "💀 HARDCORE · KEYAUTH",
      subtitle: "DEXXGHXST Performance Console & KeyAuth Lock Engine",
      tagline: "1-Click Boost · 0.500ms Timer · CitizenFX Low-Latency · QoS DSCP 46",
      price: 320,
      priceLabel: "฿320",
      rating: "5.0",
      reviewCount: "New Release",
      image: "assets/images/product-dexxghxst.png",
      highlight: "KeyAuth Lock | 0.500ms Precision Engine | CitizenFX Low-Latency | 1-Click All",
      features: [
        "1-Click All Recommended: ปรับแต่งทุกระบบเสร็จในคลิกเดียว ดึงความแรงสูงสุด",
        "Timer Resolution Service (STR): ระบบล็อกความละเอียดเวลา 0.500ms Precision Engine",
        "CitizenFX.ini Low-Latency: ปรับ Waitable SwapChain ให้ FiveM ตอบสนองไวที่สุด",
        "FiveM System & CPU Priority: ปรับความสำคัญ CPU สูงสุด ปิด CEF เคลียร์แคช",
        "QoS DSCP 46 Packet Priority: เร่งความสำคัญทราฟฟิก FiveM & GTA 5 ไม่ดีเลย์",
        "AFD Socket Buffers Tweak: ปรับบัฟเฟอร์การเชื่อมต่อเครือข่ายลดความหน่วง",
        "Ultimate Power Plan: ปลดล็อค CPU Boost 100% ลดการหน่วงของ Hardware",
        "RAM & Network Optimization: Optimize Working Sets, Flush DNS, TcpNoDelay",
        "Backup & Restore Point: สร้างจุดคืนค่าระบบ (DexxGhostBackup) อุ่นใจ 100%"
      ],
      compatibility: "Windows 10 / 11 (ทุกรุ่น / ทุกเวอร์ชัน)",
      setupType: "KeyAuth Lock Engine (HWID Verified) พร้อมสิทธิ์การใช้งานถาวร",
      options: [
        { id: "ghxst-standard", name: "DEXX GHXST Standard License", price: 320 },
        { id: "ghxst-lifetime", name: "DEXX GHXST VIP Lifetime + อัปเดตตลอดชีพ", price: 490 }
      ]
    },
    {
      id: "dexx-v3",
      name: "DEXX V3 (PRO)",
      category: "fivem",
      categoryLabel: "FiveM & GTA V",
      badge: "⚡ ยอดนิยมอันดับ 1",
      subtitle: "ตัวช่วยปรับแต่งระบบเกม ออกแบบมาเพื่อ FiveM / GTA V / Online Games",
      tagline: "เล่นง่ายมากขึ้น ค่าขาว 100% — PLAY SMOOTH NO LAG",
      price: 299,
      priceLabel: "฿299",
      rating: "5.0",
      reviewCount: "1,840+",
      image: "assets/images/product-dexxv3.jpg",
      highlight: "ค่าขาว 100% | Ultra Low Latency | Debloat 35+ Services",
      features: [
        "Low Latency: ปรับแต่ง Input Lag & System Timers ลดการหน่วงฉับไว",
        "Network Mode: TCP & Ping Optimizer ปิงต่ำลง นิ่ง ไม่ดีเลย์",
        "Services Debloat: ปิด 35+ บริการที่ไม่จำเป็น คืน RAM ให้ระบบเกม",
        "Clean & Boost: เคลียร์ Temp & FiveM Cache ขยะระบบเกลี้ยง",
        "Gaming Tweaks: ดึงประสิทธิภาพ FPS สูงสุด วงนัวไม่ดรอป",
        "Stability: เล่นลื่น ไม่มีหลุด เสถียรสุดขีด หัวแข็งโป๊ก"
      ],
      compatibility: "Windows 10 / 11 (ทุกเวอร์ชัน)",
      setupType: "Remote Setup ผ่าน UltraViewer หรือส่งไฟล์พร้อมคู่มือ",
      options: [
        { id: "v3-standard", name: "DEXX V3 Standard (1 เครื่อง)", price: 299 },
        { id: "v3-vip", name: "DEXX V3 VIP Lifetime + ซัพพอร์ตตลอดชีพ", price: 499 }
      ]
    },
    {
      id: "dexx-9800x3d",
      name: "DEXX 9800X3D",
      category: "cpu",
      categoryLabel: "Hardware & CPU Boost",
      badge: "⚔️ Ultimate Gaming Boost",
      subtitle: "Performance Optimization For Gamers (รองรับ 9800X3D และทุก CPU)",
      tagline: "ปรับแต่งครบ จบในตัวเดียว เล่นง่ายมากขึ้น ค่าขาว 100%",
      price: 350,
      priceLabel: "฿350",
      rating: "5.0",
      reviewCount: "1,220+",
      image: "assets/images/product-9800x3d.jpg",
      highlight: "ค่าขาว 100% | Regedit + Win32 | ClearTemp & PowerPlan",
      features: [
        "Network: ปรับค่าเน็ตขั้นสูง ลดดีเลย์ ตอบสนองฉับไว",
        "Regedit: ปรับรีจิสทรีวินโดว์เพื่อเกมมิ่งโดยเฉพาะ",
        "Win32: ปรับระบบแกน Windows ให้เบา ลื่นไหลขึ้น",
        "ClearTemp: สคริปต์ลบไฟล์ขยะ เคลียร์แคชระบบอัตโนมัติ",
        "PowerPlan: ตั้งค่าโปรไฟล์ไฟพลังงานสูงสุด Ultra High Performance",
        "รองรับ CPU ทุกตระกูล ทั้ง AMD Ryzen 9800X3D และ Intel Core ทุกรุ่น"
      ],
      compatibility: "AMD Ryzen ทุกรุ่น / Intel Core ทุกรุ่น (Win 10/11)",
      setupType: "Remote Setup หรือ Script 1-Click",
      options: [
        { id: "9800x3d-std", name: "DEXX 9800X3D Setup", price: 350 },
        { id: "9800x3d-bundle", name: "DEXX 9800X3D + Full Network Tweak Pack", price: 550 }
      ]
    },
    {
      id: "bullshit-gpedit",
      name: "Bullshit Gpedit + Network",
      category: "tweak",
      categoryLabel: "System & Network",
      badge: "🚀 Windows Performance",
      subtitle: "Windows Performance Gaming Network TWEAK",
      tagline: "แค่ปรับ...ก็เห็นผล! เล่นเกมได้เต็มประสิทธิภาพ",
      price: 250,
      priceLabel: "฿250",
      rating: "4.9",
      reviewCount: "980+",
      image: "assets/images/product-gpedit.jpg",
      highlight: "ค่าขาว 100% | Gpedit + Registry | TCP/IP & MTU Optimize",
      features: [
        "ปรับแต่ง GPEDIT: เพิ่มความลื่นไหล / ลด Input Lag ปลดล็อกข้อจำกัด Windows",
        "จัดการค่าเน็ต: ลด Ping / ลดหน่วง / เพิ่มความเสถียร ปรับ TCP/IP / DNS / MTU",
        "ปรับ Registry: เน้นเกม / ลด Latency เพิ่มประสิทธิภาพการเชื่อมต่อ",
        "ปิด Service ที่ไม่จำเป็น: ลดการกินทรัพยากรเครื่อง เพิ่มความเสถียร",
        "จัดการ Power Plan: โหมด High Performance FPS ลื่นขั้นสุด",
        "ระบบเสถียร: หัวแข็ง ไม่หลุดง่าย รีไว ตอบสนองรวดเร็ว"
      ],
      compatibility: "Windows 10 / 11 (21H2, 22H2, 23H2, 24H2)",
      setupType: "Remote Setup โดยทีมงาน 3-5 นาที",
      options: [
        { id: "gpedit-single", name: "Gpedit + Network Tweak", price: 250 },
        { id: "gpedit-full", name: "Full Windows Gamer Overhaul", price: 390 }
      ]
    }
  ],
  ticker: [
    "🔥 DEXX V4 OPTIMIZER RELEASED! พร้อมระบบ KeyAuth, Rapid Trigger & MSI GPU Mode",
    "💀 DEXX GHXST RELEASED! Performance Console & KeyAuth Lock Engine (0.500ms Precision Engine)",
    "DEXX V3 (PRO): ตัวช่วยปรับแต่ง FiveM / GTA V ค่าขาว 100% เล่นง่ายมากขึ้น",
    "DEXX 9800X3D: Ultimate Gaming Boost ปรับแต่งครบ จบในตัวเดียว",
    "Bullshit Gpedit + Network: แค่ปรับ...ก็เห็นผล! ลดปิง ลดแลค ทันตาเห็น",
    "ค่าขาว 100%: ปลอดภัย ไม่ใช่โปร ไม่แบนแน่นอน",
    "Discord Official: discord.gg/qhNQGnuDtu ซัพพอร์ตตลอด 24 ชม."
  ],
  reviews: [
    {
      id: "rev-1",
      name: "TK LEGACY X3D",
      game: "FiveM Player · DEXX V3",
      rating: 5,
      avatar: "TK",
      color: "cyan",
      text: "ลั่นมากครับ หัวแข็งโป๊ก วงนัวไม่กระตุกเลย เฟรมจาก 80 วิ่งไป 140+ นิ่งๆ แอดมินรีโมทมาแป๊บเดียว 3 นาทีเสร็จ ใครลังเลอยู่จัดเลยคุ้มจริง!"
    },
    {
      id: "rev-2",
      name: "Bew_GamerZ",
      game: "GTA V · DEXX 9800X3D",
      rating: 5,
      avatar: "BE",
      color: "blue",
      text: "วงนัวตายยาก หัวแข็งมาก +1 สเปรย์ปืนตรงขึ้นเยอะ การตอบสนองเมาส์ไวจัด ไม่หน่วง ไม่ดีเลย์ แนะนำร้านนี้เลยครับ ค่าขาวชัวร์ 100%"
    },
    {
      id: "rev-3",
      name: "SoYBoSS_TH",
      game: "Competitive FPS · Gpedit Tweak",
      rating: 5,
      avatar: "SO",
      color: "cyan",
      text: "ช่วยลดการกระตุกได้เยอะมาก เล่นลื่นมากครับ ลั่นๆ แค่ปรับปิงก็ลดลงเยอะ จากปิง 30+ เหลือ 14 ms นิ่งสนิท ไม่มีสไปค์เลย งานไวประทับใจครับ"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "สินค้าเป็น ค่าขาว 100% จริงไหม และจะโดนแบนหรือเปล่า?",
      answer: "ค่าขาว 100% แน่นอนครับ การปรับแต่งของ DEXXSTORE เป็นการ Optimize ในระดับ Windows System, Registry, Group Policy และ Network Parameters ไม่มีการแก้ไขไฟล์ของตัวเกม ไม่ใช่โปรแกรมโกง (No Hack / No Cheat) และไม่ถูกตรวจจับโดยระบบ Anti-Cheat ใดๆ ปลอดภัย 100%"
    },
    {
      id: "faq-2",
      question: "ลง Setup ให้ยังไง ต้องทำเองไหม?",
      answer: "ลูกค้าไม่ต้องทำเองเลยครับ หลังจากสั่งซื้อแล้ว ทางทีมงานแอดมินจะนัด Remote เข้าเครื่องผ่าน UltraViewer หรือ AnyDesk แล้วจัดการปรับแต่งให้โดยตรง ใช้เวลาเพียง 3-5 นาทีเท่านั้น หรือหากลูกค้าสะดวกทำเอง ทางร้านมีไฟล์สคริปต์ 1-Click พร้อมคู่มือภาษาไทยเข้าใจง่ายให้ครับ"
    },
    {
      id: "faq-3",
      question: "ซื้อครั้งเดียวใช้ได้นานแค่ไหน มีค่าบริการรายเดือนไหม?",
      answer: "สินค้าส่วนใหญ่ของ DEXXSTORE เป็นแบบถาวร (Lifetime) ซื้อครั้งเดียวใช้งานได้ตลอดชีพ ไม่มีค่าบริการรายเดือนแอบแฝง และได้รับสิทธิ์อัปเดตฟรีเมื่อมีแพทช์ใหม่"
    },
    {
      id: "faq-4",
      question: "ขั้นตอนการสั่งซื้อและชำระเงินทำอย่างไร?",
      answer: "ลูกค้าสามารถกดสั่งซื้อบนเว็บไซต์เพื่อคัดลอกรายละเอียดสินค้า แล้วคลิกเข้าสู่ Discord Server ทางการ: discord.gg/qhNQGnuDtu เพื่อเปิด Ticket แจ้งชำระเงินผ่าน PromptPay หรือโอนธนาคาร จากนั้นแอดมินจะจัดคิว Remote Setup ให้ทันทีครับ"
    }
  ]
};

// State Store with LocalStorage Persistence
class StoreManager {
  constructor() {
    this.STORAGE_KEY = "dexxstore_db_v1";
    this.AUTH_KEY = "dexxstore_auth_user";
    this.data = this.loadDB();
    this.currentUser = this.loadUser();
  }

  loadDB() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.products)) {
          if (!parsed.products.some(p => p.id === "dexx-v4")) {
            parsed.products.unshift(DEFAULT_DEXX_DB.products[0]);
          }
          if (!parsed.products.some(p => p.id === "dexx-ghxst")) {
            const ghxstProd = DEFAULT_DEXX_DB.products.find(p => p.id === "dexx-ghxst");
            if (ghxstProd) parsed.products.splice(1, 0, ghxstProd);
          }
          if (!parsed.config) parsed.config = DEFAULT_DEXX_DB.config;
          if (!Array.isArray(parsed.config.adminDiscordIds)) {
            parsed.config.adminDiscordIds = ["491549619587907585"];
          } else if (!parsed.config.adminDiscordIds.includes("491549619587907585")) {
            parsed.config.adminDiscordIds.push("491549619587907585");
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Failed to load local DB, using default.", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DEXX_DB));
  }

  saveDB() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error("Failed to save local DB", e);
    }
  }

  resetDB() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_DEXX_DB));
    this.saveDB();
  }

  loadUser() {
    try {
      const u = localStorage.getItem(this.AUTH_KEY);
      if (u) return JSON.parse(u);
    } catch (e) {}
    return null;
  }

  setUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(this.AUTH_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.AUTH_KEY);
    }
  }

  isAdmin() {
    if (!this.currentUser) return false;
    if (this.currentUser.role === "admin") return true;
    const adminList = (this.data && this.data.config && this.data.config.adminDiscordIds) || ["491549619587907585"];
    if (this.currentUser.discordId && adminList.includes(this.currentUser.discordId.trim())) return true;
    if (this.currentUser.id && adminList.includes(this.currentUser.id.trim())) return true;
    return false;
  }
}

const store = new StoreManager();
let currentProduct = store.data.products[0];
let currentSelectedOption = currentProduct.options ? currentProduct.options[0] : null;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initKatanaParticles();
  renderApp();
  initMobileMenu();
  initModals();
  initComparisonToggle();
  initFAQ();
});

// Render Everything Dynamically
function renderApp() {
  renderAuthNavbar();
  renderHeroAndConfig();
  renderTicker();
  renderProducts();
  renderReviews();
  renderFAQs();
}

// Render Auth Bar / Profile in Navbar
function renderAuthNavbar() {
  const container = document.getElementById("nav-auth-container");
  const mobileContainer = document.getElementById("mobile-auth-container");
  if (!container) return;

  if (store.currentUser) {
    const isAdm = store.isAdmin();
    container.innerHTML = `
      <div class="flex items-center gap-2">
        ${isAdm ? `
          <button onclick="openAdminDashboard()" class="admin-nav-pill">
            <i class="fa-solid fa-crown text-amber-300"></i>
            <span>DASHBOARD ADMIN</span>
          </button>
        ` : ''}
        <div class="relative">
          <div onclick="toggleUserDropdown()" class="discord-user-badge">
            <img src="${store.currentUser.avatar || 'assets/images/logo.jpg'}" alt="Avatar" class="discord-avatar-img">
            <div class="text-left hidden xl:block">
              <div class="text-xs font-bold text-white flex items-center gap-1">
                ${store.currentUser.username}
                ${isAdm ? '<span class="text-[9px] px-1 bg-red-500/20 text-red-400 border border-red-500/40 rounded">ADMIN</span>' : ''}
              </div>
              <div class="text-[10px] text-indigo-300">#${store.currentUser.discriminator || '0001'}</div>
            </div>
            <i class="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
          </div>

          <div id="user-dropdown" class="user-dropdown-menu">
            <div class="p-2 border-b border-slate-800 text-xs">
              <div class="font-bold text-white">${store.currentUser.username}</div>
              <div class="text-[11px] text-slate-400">${isAdm ? '👑 ผู้ดูแลระบบ (Admin)' : '🎮 สมาชิก (Member)'}</div>
            </div>
            ${isAdm ? `
              <button onclick="openAdminDashboard(); toggleUserDropdown(false)" class="w-full text-left p-2 text-xs font-semibold text-cyan-400 hover:bg-cyan-950/40 rounded-lg flex items-center gap-2 my-1">
                <i class="fa-solid fa-sliders"></i> แผงควบคุม Admin Dashboard
              </button>
            ` : ''}
            <button onclick="logoutDiscord()" class="w-full text-left p-2 text-xs font-semibold text-red-400 hover:bg-red-950/40 rounded-lg flex items-center gap-2">
              <i class="fa-solid fa-right-from-bracket"></i> ออกจากระบบ
            </button>
          </div>
        </div>
      </div>
    `;

    if (mobileContainer) {
      mobileContainer.innerHTML = `
        <div class="p-3 bg-slate-900 border border-cyan-500/30 rounded-xl flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <img src="${store.currentUser.avatar || 'assets/images/logo.jpg'}" class="w-8 h-8 rounded-full border border-cyan-400">
            <div>
              <div class="text-xs font-bold text-white">${store.currentUser.username}</div>
              <div class="text-[10px] text-cyan-400">${isAdm ? 'Admin Mode' : 'Connected Discord'}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            ${isAdm ? `<button onclick="openAdminDashboard()" class="px-2.5 py-1 text-xs bg-red-500/20 text-red-400 border border-red-500/40 rounded-lg font-bold">Admin</button>` : ''}
            <button onclick="logoutDiscord()" class="text-xs text-slate-400 hover:text-red-400"><i class="fa-solid fa-power-off"></i></button>
          </div>
        </div>
      `;
    }
  } else {
    // Guest view: Show "Login with Discord"
    container.innerHTML = `
      <div class="flex items-center gap-2.5">
        <button onclick="openDiscordAuthModal()" class="btn-katana-discord text-xs py-2 px-3.5">
          <i class="fa-brands fa-discord text-base"></i>
          <span>Login Discord</span>
        </button>
        <button onclick="openAdminPasscodeModal()" class="text-xs text-slate-400 hover:text-cyan-400 p-2" title="เข้าสู่ระบบ Admin">
          <i class="fa-solid fa-lock"></i>
        </button>
      </div>
    `;

    if (mobileContainer) {
      mobileContainer.innerHTML = `
        <button onclick="openDiscordAuthModal()" class="btn-katana-discord text-xs w-full justify-center py-2.5">
          <i class="fa-brands fa-discord"></i> เข้าสู่ระบบด้วย Discord
        </button>
      `;
    }
  }
}

window.toggleUserDropdown = function(force) {
  const menu = document.getElementById("user-dropdown");
  if (!menu) return;
  if (typeof force === "boolean") {
    menu.classList.toggle("show", force);
  } else {
    menu.classList.toggle("show");
  }
};

// Discord Authentication Logic
window.openDiscordAuthModal = function() {
  openModal("discord-auth-modal");
};

window.loginDiscord = function(role = "user", customName = null, discordId = null) {
  const adminList = (store.data && store.data.config && store.data.config.adminDiscordIds) || ["491549619587907585"];
  
  // Extract discordId from argument or DOM input if present
  let targetId = discordId;
  if (!targetId) {
    const inputIdElem = document.getElementById("discord-login-id");
    if (inputIdElem) targetId = inputIdElem.value.trim();
  }
  targetId = (targetId || "").trim();

  // Check if ID is authorized as admin
  const isAuthorizedAdmin = targetId === "491549619587907585" || adminList.includes(targetId) || role === "admin";
  const finalRole = isAuthorizedAdmin ? "admin" : "user";

  let defaultName = isAuthorizedAdmin ? "DEXX Administrator" : "DexxPlayer";
  if (targetId === "491549619587907585") {
    defaultName = "DEXX Owner (491549619587907585)";
  }

  const username = customName || defaultName;
  const avatar = isAuthorizedAdmin 
    ? "assets/images/logo.jpg" 
    : "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&auto=format&fit=crop&q=80";

  const userObj = {
    id: targetId || ("discord-" + Date.now()),
    discordId: targetId || (isAuthorizedAdmin ? "491549619587907585" : "user-" + Date.now()),
    username: username,
    discriminator: targetId ? targetId.slice(-4) : Math.floor(1000 + Math.random() * 9000),
    avatar: avatar,
    role: finalRole
  };

  store.setUser(userObj);
  closeModal("discord-auth-modal");
  closeModal("admin-passcode-modal");
  renderAuthNavbar();

  if (finalRole === "admin") {
    showToast(`👑 ยินดีต้อนรับแอดมิน (Discord ID: ${userObj.discordId})!`, "success");
    openAdminDashboard();
  } else {
    showToast(`ยินดีต้อนรับคุณ ${username}!`, "info");
  }
};

window.logoutDiscord = function() {
  store.setUser(null);
  renderAuthNavbar();
  showToast("ออกจากระบบเรียบร้อยแล้ว", "info");
};

window.openAdminPasscodeModal = function() {
  openModal("admin-passcode-modal");
};

window.verifyAdminPasscode = function() {
  const input = document.getElementById("admin-pass-input");
  const err = document.getElementById("admin-pass-error");
  if (!input) return;

  const code = input.value.trim();
  // Default master admin passcodes
  if (code === "dexx2026" || code === "admin" || code === "dexxstore") {
    err.classList.add("hidden");
    input.value = "";
    loginDiscord("admin", "DEXX Owner");
  } else {
    err.classList.remove("hidden");
  }
};

// Render Hero Texts and Config
function renderHeroAndConfig() {
  const c = store.data.config;
  const h1 = document.getElementById("hero-h1");
  const h2 = document.getElementById("hero-h2");
  const sub = document.getElementById("hero-sub");
  const desc = document.getElementById("hero-desc");
  const statFps = document.getElementById("stat-fps");
  const statLag = document.getElementById("stat-lag");
  const statSafe = document.getElementById("stat-safe");
  const statUsers = document.getElementById("stat-users");

  if (h1) h1.textContent = c.heroHeading1;
  if (h2) h2.textContent = c.heroHeading2;
  if (sub) sub.textContent = c.heroSubtitle;
  if (desc) desc.textContent = c.heroDesc;
  if (statFps) statFps.textContent = c.statFps;
  if (statLag) statLag.textContent = c.statLag;
  if (statSafe) statSafe.textContent = c.statSafe;
  if (statUsers) statUsers.textContent = c.statUsers;

  // Update all discord link buttons
  document.querySelectorAll('a[href*="discord.gg"]').forEach(a => {
    a.href = c.discordInvite;
  });
}

// Render Ticker
function renderTicker() {
  const track = document.getElementById("marquee-track");
  if (!track) return;

  const items = store.data.ticker;
  let html = "";
  for (let repeat = 0; repeat < 2; repeat++) {
    items.forEach(t => {
      html += `
        <span class="flex items-center gap-2">
          <i class="fa-solid fa-bolt text-cyan-400"></i>
          <span>${t}</span>
        </span>
        <span class="text-cyan-600">◆</span>
      `;
    });
  }
  track.innerHTML = html;
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = store.data.products.map(p => `
    <div class="product-item-card katana-card flex flex-col justify-between" data-category="${p.category}">
      <div>
        <div class="poster-katana-box" onclick="openLightbox('${p.image}', '${p.name}')">
          <img src="${p.image}" alt="${p.name}" class="w-full h-64 sm:h-72 object-cover object-top select-none">
          <div class="zoom-hint">
            <span class="px-4 py-2 rounded bg-black/80 text-cyan-400 text-xs font-bold flex items-center gap-2 border border-cyan-400">
              <i class="fa-solid fa-magnifying-glass-plus"></i> คลิกเพื่อดูโปสเตอร์เต็ม
            </span>
          </div>
          <span class="absolute top-3 left-3 px-3 py-1 bg-cyan-500/20 backdrop-blur-md text-cyan-300 border border-cyan-400/60 text-xs font-bold">
            ${p.badge}
          </span>
          <span class="absolute top-3 right-3 px-2.5 py-1 bg-emerald-500/20 backdrop-blur-md text-emerald-400 border border-emerald-500/40 text-[11px] font-bold">
            ค่าขาว 100%
          </span>
        </div>

        <div class="p-6 space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs text-cyan-400 font-bold tracking-wider uppercase font-orbitron">${p.categoryLabel || p.category}</span>
            <div class="flex items-center gap-1 text-amber-400 text-xs font-bold">
              <i class="fa-solid fa-star"></i>
              <span class="text-white">${p.rating || '5.0'}</span>
              <span class="text-slate-400 font-normal">(${p.reviewCount || '1,000+'})</span>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-black text-white font-orbitron italic">
              ${p.name}
            </h3>
            <p class="text-sm text-slate-300 mt-1 font-medium">
              ${p.subtitle}
            </p>
            <p class="text-xs text-cyan-400 mt-1 font-semibold italic">
              "${p.tagline}"
            </p>
          </div>

          <div class="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
            ${(p.features || []).slice(0, 5).map(f => `
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-bolt text-cyan-400 text-[11px]"></i>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="p-6 pt-0 space-y-3">
        <div class="flex items-baseline justify-between pt-4 border-t border-slate-800">
          <div>
            <span class="text-xs text-slate-400">ราคาเริ่มต้น</span>
            <div class="text-3xl font-black font-orbitron text-cyan-400">${p.priceLabel || '฿' + p.price}</div>
          </div>
          <span class="text-xs text-emerald-400 font-semibold">พร้อมทีมงาน Setup ฟรี</span>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          <button onclick="openProductDetail('${p.id}')" class="btn-katana-outline text-xs justify-center py-2.5">
            <i class="fa-solid fa-info-circle"></i> รายละเอียด
          </button>
          <button onclick="openOrderModal('${p.id}')" class="btn-katana-primary text-xs justify-center py-2.5">
            <i class="fa-solid fa-cart-shopping"></i> สั่งซื้อทันที
          </button>
        </div>
      </div>
    </div>
  `).join("");

  initProductsFilter();
}

// Render Customer Reviews
function renderReviews() {
  const container = document.getElementById("reviews-grid");
  if (!container) return;

  container.innerHTML = store.data.reviews.map(r => `
    <div class="p-6 katana-card space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm" style="clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);">
            ${r.avatar || r.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div class="font-bold text-white text-sm">${r.name}</div>
            <div class="text-xs text-slate-400">${r.game}</div>
          </div>
        </div>
        <div class="flex text-amber-400 text-xs">
          ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating || 5)}
        </div>
      </div>
      <p class="text-slate-300 text-sm leading-relaxed">
        "${r.text}"
      </p>
    </div>
  `).join("");
}

// Render FAQs
function renderFAQs() {
  const container = document.getElementById("faq-container");
  if (!container) return;

  container.innerHTML = store.data.faqs.map(f => `
    <div class="faq-item katana-card overflow-hidden transition-all">
      <button class="faq-trigger w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-400 transition-colors">
        <span class="flex items-center gap-3">
          <i class="fa-solid fa-shield-halved text-cyan-400"></i>
          <span>${f.question}</span>
        </span>
        <i class="fa-solid fa-chevron-down text-slate-500 faq-icon transition-transform duration-300"></i>
      </button>
      <div class="faq-answer hidden px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
        ${f.answer}
      </div>
    </div>
  `).join("");

  initFAQ();
}

// ==========================================
// ADMIN DASHBOARD CONTROLLERS (CAN EDIT ALL)
// ==========================================

window.openAdminDashboard = function(tabName = "products") {
  if (!store.isAdmin()) {
    openAdminPasscodeModal();
    return;
  }
  openModal("admin-dashboard-modal");
  switchAdminTab(tabName);
};

window.switchAdminTab = function(tabName) {
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  document.querySelectorAll(".admin-tab-pane").forEach(pane => {
    pane.classList.add("hidden");
  });

  const activePane = document.getElementById("tab-pane-" + tabName);
  if (activePane) activePane.classList.remove("hidden");

  if (tabName === "products") renderAdminProductsList();
  if (tabName === "settings") loadAdminSettingsForm();
  if (tabName === "ticker") renderAdminTickerList();
  if (tabName === "reviews") renderAdminReviewsList();
  if (tabName === "faqs") renderAdminFAQsList();
  if (tabName === "admins") renderAdminAdminsList();
};

// 1. Admin Products List
function renderAdminProductsList() {
  const tableBody = document.getElementById("admin-products-table-body");
  if (!tableBody) return;

  tableBody.innerHTML = store.data.products.map((p, idx) => `
    <tr>
      <td class="w-16">
        <img src="${p.image}" class="w-12 h-12 object-cover rounded-lg border border-cyan-500/40">
      </td>
      <td>
        <div class="font-bold text-white text-sm">${p.name}</div>
        <div class="text-xs text-cyan-400">${p.categoryLabel || p.category}</div>
      </td>
      <td class="font-bold font-orbitron text-cyan-400">${p.priceLabel || '฿' + p.price}</td>
      <td class="text-xs text-slate-400">${p.badge}</td>
      <td class="text-right">
        <button onclick="editProductModal('${p.id}')" class="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-500/40 text-xs font-bold mr-1">
          <i class="fa-solid fa-pen-to-square"></i> แก้ไข
        </button>
        <button onclick="deleteProduct('${p.id}')" class="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/40 text-xs font-bold">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `).join("");
}

// Open Edit Product Modal
window.editProductModal = function(productId = null) {
  const form = document.getElementById("product-edit-form");
  if (!form) return;

  let product = null;
  if (productId) {
    product = store.data.products.find(p => p.id === productId);
  }

  document.getElementById("prod-edit-id").value = product ? product.id : "prod-" + Date.now();
  document.getElementById("prod-edit-name").value = product ? product.name : "";
  document.getElementById("prod-edit-category").value = product ? product.category : "fivem";
  document.getElementById("prod-edit-catlabel").value = product ? (product.categoryLabel || "FiveM") : "FiveM";
  document.getElementById("prod-edit-price").value = product ? product.price : 299;
  document.getElementById("prod-edit-pricelabel").value = product ? (product.priceLabel || "฿299") : "฿299";
  document.getElementById("prod-edit-badge").value = product ? product.badge : "🔥 สินค้าใหม่";
  document.getElementById("prod-edit-image").value = product ? product.image : "assets/images/logo.jpg";
  document.getElementById("prod-edit-subtitle").value = product ? product.subtitle : "";
  document.getElementById("prod-edit-tagline").value = product ? product.tagline : "";
  document.getElementById("prod-edit-features").value = product ? (product.features || []).join("\n") : "Low Latency: ลดดีเลย์\nNetwork Mode: ลดปิง\nDebloat Services\nค่าขาว 100%";

  openModal("product-editor-modal");
};

window.saveProductForm = function(e) {
  if (e) e.preventDefault();

  const id = document.getElementById("prod-edit-id").value;
  const name = document.getElementById("prod-edit-name").value.trim();
  const category = document.getElementById("prod-edit-category").value;
  const catLabel = document.getElementById("prod-edit-catlabel").value.trim();
  const price = parseInt(document.getElementById("prod-edit-price").value) || 299;
  const priceLabel = document.getElementById("prod-edit-pricelabel").value.trim() || ("฿" + price);
  const badge = document.getElementById("prod-edit-badge").value.trim();
  const image = document.getElementById("prod-edit-image").value.trim();
  const subtitle = document.getElementById("prod-edit-subtitle").value.trim();
  const tagline = document.getElementById("prod-edit-tagline").value.trim();
  const features = document.getElementById("prod-edit-features").value.split("\n").map(s => s.trim()).filter(Boolean);

  const existingIdx = store.data.products.findIndex(p => p.id === id);
  const updatedProduct = {
    id: id,
    name: name,
    category: category,
    categoryLabel: catLabel,
    price: price,
    priceLabel: priceLabel,
    badge: badge,
    image: image,
    subtitle: subtitle,
    tagline: tagline,
    features: features,
    rating: "5.0",
    reviewCount: "1,000+",
    options: [
      { id: id + "-std", name: name + " (1 เครื่อง)", price: price },
      { id: id + "-vip", name: name + " VIP Lifetime", price: price + 200 }
    ]
  };

  if (existingIdx >= 0) {
    store.data.products[existingIdx] = updatedProduct;
  } else {
    store.data.products.push(updatedProduct);
  }

  store.saveDB();
  closeModal("product-editor-modal");
  renderProducts();
  renderAdminProductsList();
  showToast("บันทึกข้อมูลสินค้าเรียบร้อย!", "success");
};

window.deleteProduct = function(productId) {
  if (!confirm("คุณต้องการลบสินค้านี้ใช่หรือไม่?")) return;
  store.data.products = store.data.products.filter(p => p.id !== productId);
  store.saveDB();
  renderProducts();
  renderAdminProductsList();
  showToast("ลบสินค้าแล้ว", "info");
};

// 2. Admin Settings Form
function loadAdminSettingsForm() {
  const c = store.data.config;
  document.getElementById("set-sitename").value = c.siteName;
  document.getElementById("set-domain").value = c.domain;
  document.getElementById("set-discord").value = c.discordInvite;
  document.getElementById("set-h1").value = c.heroHeading1;
  document.getElementById("set-h2").value = c.heroHeading2;
  document.getElementById("set-sub").value = c.heroSubtitle;
  document.getElementById("set-desc").value = c.heroDesc;
  document.getElementById("set-stat-fps").value = c.statFps;
  document.getElementById("set-stat-lag").value = c.statLag;
  document.getElementById("set-stat-safe").value = c.statSafe;
  document.getElementById("set-stat-users").value = c.statUsers;
}

window.saveAdminSettings = function(e) {
  if (e) e.preventDefault();

  store.data.config = {
    ...store.data.config,
    siteName: document.getElementById("set-sitename").value.trim(),
    domain: document.getElementById("set-domain").value.trim(),
    discordInvite: document.getElementById("set-discord").value.trim(),
    heroHeading1: document.getElementById("set-h1").value.trim(),
    heroHeading2: document.getElementById("set-h2").value.trim(),
    heroSubtitle: document.getElementById("set-sub").value.trim(),
    heroDesc: document.getElementById("set-desc").value.trim(),
    statFps: document.getElementById("set-stat-fps").value.trim(),
    statLag: document.getElementById("set-stat-lag").value.trim(),
    statSafe: document.getElementById("set-stat-safe").value.trim(),
    statUsers: document.getElementById("set-stat-users").value.trim()
  };

  store.saveDB();
  renderHeroAndConfig();
  showToast("บันทึกการตั้งค่าหน้าเว็บแล้ว!", "success");
};

// 3. Admin Ticker List
function renderAdminTickerList() {
  const container = document.getElementById("admin-ticker-list");
  if (!container) return;

  container.innerHTML = store.data.ticker.map((item, idx) => `
    <div class="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
      <input type="text" value="${item}" onchange="updateTickerItem(${idx}, this.value)" class="cyber-input text-xs flex-1">
      <button onclick="removeTickerItem(${idx})" class="p-2 text-red-400 hover:text-red-300 text-xs">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join("");
}

window.addTickerItem = function() {
  store.data.ticker.push("ประกาศใหม่: เพิ่มข้อความได้ที่นี่");
  store.saveDB();
  renderTicker();
  renderAdminTickerList();
};

window.updateTickerItem = function(idx, val) {
  store.data.ticker[idx] = val.trim();
  store.saveDB();
  renderTicker();
};

window.removeTickerItem = function(idx) {
  store.data.ticker.splice(idx, 1);
  store.saveDB();
  renderTicker();
  renderAdminTickerList();
};

// 4. Admin Reviews List
function renderAdminReviewsList() {
  const container = document.getElementById("admin-reviews-list");
  if (!container) return;

  container.innerHTML = store.data.reviews.map((r, idx) => `
    <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <input type="text" value="${r.name}" onchange="updateReviewItem(${idx}, 'name', this.value)" class="cyber-input text-xs w-40 font-bold" placeholder="ชื่อลูกค้า">
          <input type="text" value="${r.game}" onchange="updateReviewItem(${idx}, 'game', this.value)" class="cyber-input text-xs w-48 text-cyan-400" placeholder="เกม / สินค้า">
        </div>
        <button onclick="removeReviewItem(${idx})" class="p-1.5 text-red-400 hover:text-red-300 text-xs">
          <i class="fa-solid fa-trash"></i> ลบ
        </button>
      </div>
      <textarea onchange="updateReviewItem(${idx}, 'text', this.value)" rows="2" class="cyber-input text-xs w-full" placeholder="ข้อความรีวิว">${r.text}</textarea>
    </div>
  `).join("");
}

window.addReviewItem = function() {
  store.data.reviews.push({
    id: "rev-" + Date.now(),
    name: "ลูกค้าใหม่",
    game: "FiveM Player · DEXX V3",
    rating: 5,
    avatar: "NEW",
    text: "บริการดีมากครับ เล่นง่ายขึ้น ลื่นหัวแตก สเปรย์ปืนตรง แนะนำเลยครับ!"
  });
  store.saveDB();
  renderReviews();
  renderAdminReviewsList();
};

window.updateReviewItem = function(idx, field, val) {
  store.data.reviews[idx][field] = val.trim();
  store.saveDB();
  renderReviews();
};

window.removeReviewItem = function(idx) {
  store.data.reviews.splice(idx, 1);
  store.saveDB();
  renderReviews();
  renderAdminReviewsList();
};

// 5. Admin FAQs List
function renderAdminFAQsList() {
  const container = document.getElementById("admin-faqs-list");
  if (!container) return;

  container.innerHTML = store.data.faqs.map((f, idx) => `
    <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
      <div class="flex items-center justify-between">
        <input type="text" value="${f.question}" onchange="updateFAQItem(${idx}, 'question', this.value)" class="cyber-input text-xs flex-1 font-bold mr-2" placeholder="คำถาม">
        <button onclick="removeFAQItem(${idx})" class="p-1.5 text-red-400 hover:text-red-300 text-xs">
          <i class="fa-solid fa-trash"></i> ลบ
        </button>
      </div>
      <textarea onchange="updateFAQItem(${idx}, 'answer', this.value)" rows="2" class="cyber-input text-xs w-full" placeholder="คำตอบ">${f.answer}</textarea>
    </div>
  `).join("");
}

window.addFAQItem = function() {
  store.data.faqs.push({
    id: "faq-" + Date.now(),
    question: "คำถามใหม่ที่พบบ่อย?",
    answer: "คำตอบสำหรับลูกค้า สอบถามแอดมินเพิ่มเติมได้ทาง Discord ตลอด 24 ชม."
  });
  store.saveDB();
  renderFAQs();
  renderAdminFAQsList();
};

window.updateFAQItem = function(idx, field, val) {
  store.data.faqs[idx][field] = val.trim();
  store.saveDB();
  renderFAQs();
};

window.removeFAQItem = function(idx) {
  store.data.faqs.splice(idx, 1);
  store.saveDB();
  renderFAQs();
  renderAdminFAQsList();
};

// 6. Admin Discord IDs Permissions Manager
function renderAdminAdminsList() {
  const container = document.getElementById("admin-discord-ids-list");
  if (!container) return;

  const adminList = (store.data && store.data.config && store.data.config.adminDiscordIds) || ["491549619587907585"];
  if (!adminList.includes("491549619587907585")) {
    adminList.unshift("491549619587907585");
  }

  container.innerHTML = adminList.map((id, idx) => {
    const isOwner = id === "491549619587907585";
    return `
      <div class="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border ${isOwner ? 'border-cyan-500/50 bg-cyan-950/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'border-slate-800'}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl ${isOwner ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-400' : 'bg-slate-800 text-slate-400'} flex items-center justify-center font-bold">
            <i class="${isOwner ? 'fa-solid fa-crown text-amber-400' : 'fa-brands fa-discord text-indigo-400'} text-lg"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold text-white text-sm">${id}</span>
              ${isOwner ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">OWNER / SUPER ADMIN</span>' : '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">ADMIN</span>'}
            </div>
            <div class="text-[11px] text-slate-400">
              ${isOwner ? 'บัญชีเจ้าของร้าน DEXXSTORE (สิทธิ์แอดมินสูงสุด เข้าถึงระบบควบคุมทุกส่วน)' : 'มีสิทธิ์เปิดแผงควบคุม Admin Dashboard และแก้ไขข้อมูล'}
            </div>
          </div>
        </div>
        <div>
          ${!isOwner ? `
            <button onclick="removeAdminDiscordId(${idx})" class="px-3 py-1.5 text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg">
              <i class="fa-solid fa-trash mr-1"></i> ลบสิทธิ์
            </button>
          ` : `
            <span class="text-xs text-amber-400 font-semibold px-2 flex items-center gap-1"><i class="fa-solid fa-shield-halved"></i> สิทธิ์ถาวร (Owner)</span>
          `}
        </div>
      </div>
    `;
  }).join("");
}

window.addAdminDiscordId = function() {
  const input = document.getElementById("new-admin-discord-id");
  if (!input) return;
  const newId = input.value.trim();
  if (!newId) {
    alert("กรุณากรอก Discord User ID");
    return;
  }
  if (!/^\d{17,20}$/.test(newId)) {
    if (!confirm("Discord ID โดยทั่วไปเป็นตัวเลข 17-20 หลัก ยืนยันจะเพิ่ม ID นี้ใช่หรือไม่?")) {
      return;
    }
  }

  if (!Array.isArray(store.data.config.adminDiscordIds)) {
    store.data.config.adminDiscordIds = ["491549619587907585"];
  }

  if (store.data.config.adminDiscordIds.includes(newId)) {
    alert("Discord ID นี้มีสิทธิ์แอดมินอยู่แล้ว");
    return;
  }

  store.data.config.adminDiscordIds.push(newId);
  store.saveDB();
  input.value = "";
  renderAdminAdminsList();
  showToast(`เพิ่มสิทธิ์แอดมินให้ Discord ID: ${newId} สำเร็จ!`, "success");
};

window.removeAdminDiscordId = function(idx) {
  const adminList = store.data.config.adminDiscordIds;
  if (!adminList || !adminList[idx]) return;
  const id = adminList[idx];
  if (id === "491549619587907585") {
    alert("ไม่สามารถลบสิทธิ์ของเจ้าของร้าน (Owner ID 491549619587907585) ได้");
    return;
  }
  if (!confirm(`ต้องการยกเลิกสิทธิ์แอดมินของ Discord ID: ${id} ใช่หรือไม่?`)) return;

  adminList.splice(idx, 1);
  store.saveDB();
  renderAdminAdminsList();
  showToast(`ลบสิทธิ์แอดมินของ ${id} แล้ว`, "info");
};

// 7. Data Backup & Reset
window.exportDatabaseJSON = function() {
  const jsonStr = JSON.stringify(store.data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "dexxstore-config-" + new Date().toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(url);
  showToast("ส่งออกข้อมูลเว็บไซต์เรียบร้อย!", "success");
};

window.importDatabaseJSON = function() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && imported.products && imported.config) {
          store.data = imported;
          store.saveDB();
          renderApp();
          showToast("นำเข้าข้อมูลสำเร็จ!", "success");
        } else {
          alert("รูปแบบไฟล์ JSON ไม่ถูกต้อง");
        }
      } catch (err) {
        alert("ไม่สามารถอ่านไฟล์ JSON ได้: " + err.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
};

window.resetToDefaultDB = function() {
  if (!confirm("คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตข้อมูลทั้งหมดกลับเป็นค่าเริ่มต้น?")) return;
  store.resetDB();
  renderApp();
  renderAdminProductsList();
  loadAdminSettingsForm();
  renderAdminTickerList();
  renderAdminReviewsList();
  renderAdminFAQsList();
  showToast("รีเซ็ตเป็นค่าเริ่มต้นเรียบร้อย!", "info");
};

// ==========================================
// INTERACTIVE PARTICLES CANVAS
// ==========================================
function initKatanaParticles() {
  const canvas = document.getElementById("katana-particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 38;

  class DiamondParticle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 4 + 2;
      this.speedY = -(Math.random() * 0.8 + 0.2);
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.fadeSpeed = Math.random() * 0.008 + 0.004;
      this.color = Math.random() > 0.3 ? "#00f0ff" : "#38bdf8";
      this.rotation = Math.random() * Math.PI;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;
      this.opacity -= this.fadeSpeed;

      if (this.y < -10 || this.opacity <= 0 || this.x < -10 || this.x > width + 10) {
        this.reset();
        this.y = height + 10;
        this.opacity = Math.random() * 0.6 + 0.2;
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;

      ctx.beginPath();
      ctx.moveTo(0, -this.size * 1.5);
      ctx.lineTo(this.size, 0);
      ctx.lineTo(0, this.size * 1.5);
      ctx.lineTo(-this.size, 0);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new DiamondParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// Mobile Menu
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
    links.forEach(l => {
      l.addEventListener("click", () => menu.classList.add("hidden"));
    });
  }
}

// Product Tab Filter
function initProductsFilter() {
  const tabs = document.querySelectorAll(".filter-tab-btn");
  const cards = document.querySelectorAll(".product-item-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active-tab", "border-cyan-400", "text-cyan-400", "bg-cyan-950/40");
        t.classList.add("text-slate-400", "border-slate-800", "bg-slate-900/40");
      });
      tab.classList.remove("text-slate-400", "border-slate-800", "bg-slate-900/40");
      tab.classList.add("active-tab", "border-cyan-400", "text-cyan-400", "bg-cyan-950/40");

      const filter = tab.dataset.filter;
      cards.forEach(card => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Modals Handling
function initModals() {
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  document.querySelectorAll(".modal-katana-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.closest(".modal-container").classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// Product Detail Modal
window.openProductDetail = function(productId) {
  const product = store.data.products.find(p => p.id === productId);
  if (!product) return;

  currentProduct = product;
  currentSelectedOption = product.options ? product.options[0] : null;

  document.getElementById("modal-p-title").textContent = product.name;
  document.getElementById("modal-p-badge").textContent = product.badge;
  document.getElementById("modal-p-subtitle").textContent = product.subtitle;
  document.getElementById("modal-p-tagline").textContent = product.tagline;
  document.getElementById("modal-p-price").textContent = product.priceLabel || ("฿" + product.price);
  document.getElementById("modal-p-img").src = product.image;
  document.getElementById("modal-p-img").alt = product.name;

  const featContainer = document.getElementById("modal-p-features");
  featContainer.innerHTML = (product.features || []).map(f => `
    <li class="flex items-start gap-2.5 text-sm text-slate-300">
      <span class="text-cyan-400 mt-0.5"><i class="fa-solid fa-bolt"></i></span>
      <span>${f}</span>
    </li>
  `).join("");

  const optionsContainer = document.getElementById("modal-p-options");
  if (product.options && product.options.length > 0) {
    optionsContainer.innerHTML = product.options.map((opt, idx) => `
      <label class="flex items-center justify-between p-3 rounded-xl border ${idx === 0 ? 'border-cyan-400 bg-cyan-950/40' : 'border-slate-800 bg-slate-900/40'} cursor-pointer hover:border-cyan-400 transition-all">
        <div class="flex items-center gap-2.5">
          <input type="radio" name="product-plan" value="${opt.id}" ${idx === 0 ? 'checked' : ''} onchange="selectProductOption('${product.id}', '${opt.id}')" class="text-cyan-400 focus:ring-0">
          <span class="text-sm font-semibold text-slate-200">${opt.name}</span>
        </div>
        <span class="text-sm font-bold text-cyan-400 font-orbitron">฿${opt.price}</span>
      </label>
    `).join("");
  } else {
    optionsContainer.innerHTML = `<div class="text-xs text-slate-400">ราคามาตรฐาน: ฿${product.price}</div>`;
  }

  openModal("product-detail-modal");
};

window.selectProductOption = function(productId, optionId) {
  const prod = store.data.products.find(p => p.id === productId);
  if (!prod || !prod.options) return;
  const opt = prod.options.find(o => o.id === optionId);
  if (!opt) return;

  currentSelectedOption = opt;
  document.getElementById("modal-p-price").textContent = "฿" + opt.price;
};

window.openLightbox = function(imageSrc, title) {
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  if (img) img.src = imageSrc;
  if (caption) caption.textContent = title || "Dexxstore Product Poster";
  openModal("lightbox-modal");
};

// Quick Order Modal
window.openOrderModal = function(productId) {
  let prod = store.data.products.find(p => p.id === productId);
  if (!prod) prod = currentProduct;
  currentProduct = prod;

  if (!currentSelectedOption || !prod.options || !prod.options.some(o => o.id === currentSelectedOption.id)) {
    currentSelectedOption = (prod.options && prod.options[0]) || { name: prod.name, price: prod.price };
  }

  document.getElementById("order-item-name").textContent = currentProduct.name;
  document.getElementById("order-item-plan").textContent = currentSelectedOption.name;
  document.getElementById("order-item-price").textContent = "฿" + currentSelectedOption.price;
  document.getElementById("order-item-img").src = currentProduct.image;

  const orderTicketText = `⚡ สนใจสั่งซื้อสินค้า DEXXSTORE
- สินค้า: ${currentProduct.name}
- แพ็กเกจ: ${currentSelectedOption.name}
- ราคา: ฿${currentSelectedOption.price}
- เว็บไซต์: ${store.data.config.domain}
- รบกวนแอดมินเปิดตั๋ว / นัด Remote Setup ผ่าน UltraViewer ด้วยครับ`;

  document.getElementById("order-ticket-preview").value = orderTicketText;

  closeModal("product-detail-modal");
  openModal("order-modal");
};

window.copyOrderTicket = function() {
  const textarea = document.getElementById("order-ticket-preview");
  if (!textarea) return;

  navigator.clipboard.writeText(textarea.value).then(() => {
    showToast("คัดลอกข้อความสั่งซื้อแล้ว! ส่งให้แอดมินใน Discord ได้เลย", "success");
  }).catch(() => {
    textarea.select();
    document.execCommand("copy");
    showToast("คัดลอกข้อความสั่งซื้อแล้ว!", "success");
  });
};

window.copyDiscordLink = function() {
  navigator.clipboard.writeText(store.data.config.discordInvite).then(() => {
    showToast("คัดลอกลิงก์ Discord แล้ว!", "info");
  }).catch(() => {
    showToast("Discord: " + store.data.config.discordInvite, "info");
  });
};

function showToast(message, type = "info") {
  const toast = document.getElementById("toast-banner");
  const toastText = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");

  if (!toast || !toastText) return;

  toastText.textContent = message;
  if (type === "success") {
    toastIcon.className = "fa-solid fa-circle-check text-cyan-400 text-lg";
  } else {
    toastIcon.className = "fa-brands fa-discord text-indigo-400 text-lg";
  }

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3800);
}

function initComparisonToggle() {
  const btnBefore = document.getElementById("compare-btn-before");
  const btnAfter = document.getElementById("compare-btn-after");
  const boxBefore = document.getElementById("compare-view-before");
  const boxAfter = document.getElementById("compare-view-after");

  if (!btnBefore || !btnAfter || !boxBefore || !boxAfter) return;

  btnBefore.addEventListener("click", () => {
    btnBefore.classList.add("bg-red-500/20", "text-red-400", "border-red-500");
    btnBefore.classList.remove("text-slate-400", "border-transparent");

    btnAfter.classList.remove("bg-cyan-500/20", "text-cyan-400", "border-cyan-400");
    btnAfter.classList.add("text-slate-400", "border-transparent");

    boxBefore.classList.remove("hidden");
    boxAfter.classList.add("hidden");
  });

  btnAfter.addEventListener("click", () => {
    btnAfter.classList.add("bg-cyan-500/20", "text-cyan-400", "border-cyan-400");
    btnAfter.classList.remove("text-slate-400", "border-transparent");

    btnBefore.classList.remove("bg-red-500/20", "text-red-400", "border-red-500");
    btnBefore.classList.add("text-slate-400", "border-transparent");

    boxAfter.classList.remove("hidden");
    boxBefore.classList.add("hidden");
  });
}

function initFAQ() {
  document.querySelectorAll(".faq-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const icon = item.querySelector(".faq-icon");

      const isOpen = !answer.classList.contains("hidden");

      document.querySelectorAll(".faq-answer").forEach(a => a.classList.add("hidden"));
      document.querySelectorAll(".faq-icon").forEach(i => i.style.transform = "rotate(0deg)");

      if (!isOpen) {
        answer.classList.remove("hidden");
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
}
