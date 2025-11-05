import { createContext, useContext, useState, ReactNode } from "react";

type Language = "EN" | "CH" | "IND" | "FR";

interface Translations {
  nav: {
    home: string;
    register: string;
    submit: string;
    track: string;
    crypto: string;
    fiat: string;
    support: string;
  };
  home: {
    title: string;
    subtitle: string;
    tagline: string;
    beginRegistration: string;
    trackStatus: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    processTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  register: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    phone: string;
    packageId: string;
    estimatedValue: string;
    payoutMethod: string;
    bankTransfer: string;
    cryptoWallet: string;
    termsTitle: string;
    term1: string;
    term2: string;
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
  submit: {
    title: string;
    subtitle: string;
    method1Title: string;
    method1Desc: string;
    method2Title: string;
    method2Desc: string;
    method3Title: string;
    method3Desc: string;
    nextTitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    securityTitle: string;
    security1: string;
    security2: string;
    security3: string;
    initiateButton: string;
  };
  track: {
    title: string;
    subtitle: string;
    facilitationCode: string;
    trackButton: string;
    statusTitle: string;
    status1: string;
    status2: string;
    status3: string;
    status4: string;
    notFound: string;
  };
  crypto: {
    title: string;
    subtitle: string;
    supportedTitle: string;
    currencyLabel: string;
    currencyPlaceholder: string;
    networkLabel: string;
    networkPlaceholder: string;
    walletLabel: string;
    walletPlaceholder: string;
    securityTitle: string;
    security1: string;
    security2: string;
    security3: string;
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
  fiat: {
    title: string;
    subtitle: string;
    accountName: string;
    accountNamePlaceholder: string;
    iban: string;
    ibanPlaceholder: string;
    swift: string;
    swiftPlaceholder: string;
    bankName: string;
    bankNamePlaceholder: string;
    country: string;
    countryPlaceholder: string;
    securityTitle: string;
    security1: string;
    security2: string;
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
  support: {
    title: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappButton: string;
    formTitle: string;
    formDesc: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    rtcCode: string;
    rtcCodePlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    guidelinesTitle: string;
    guideline1: string;
    guideline2: string;
    guideline3: string;
    submitButton: string;
    privacyTitle: string;
    privacyDesc: string;
    successMessage: string;
    errorMessage: string;
  };
  notFound: {
    title: string;
    message: string;
    returnHome: string;
  };
  whatsapp: {
    tooltip: string;
  };
}

const translations: Record<Language, Translations> = {
  EN: {
    nav: {
      home: "Home",
      register: "Register",
      submit: "Submit Package",
      track: "Track Cleansing",
      crypto: "Crypto Wallet",
      fiat: "Fiat Transfer",
      support: "Support"
    },
    home: {
      title: "EchoLAB™",
      subtitle: "Black Note Cleansing & Transmutation",
      tagline: "No trace. No return. Just liquidity.",
      beginRegistration: "Begin Registration",
      trackStatus: "Track Status",
      feature1Title: "Encrypted Protocol",
      feature1Desc: "Military-grade encryption for all transfers and communications. Your identity remains sovereign.",
      feature2Title: "72-Hour Processing",
      feature2Desc: "From package receipt to cleansed liquidity. Real-time tracking via RTC code.",
      feature3Title: "Multi-Currency Payout",
      feature3Desc: "Receive in fiat (SWIFT/IBAN) or crypto (BTC, ETH, USDT). Your choice, your sovereignty.",
      processTitle: "The Cleansing Process",
      step1Title: "Registration",
      step1Desc: "Submit package details and preferred payout method",
      step2Title: "Transfer Protocol",
      step2Desc: "Secure drop node or encrypted courier pickup initiated",
      step3Title: "Laboratory Analysis",
      step3Desc: "Package verified and RTC code generated",
      step4Title: "Transmutation",
      step4Desc: "Black notes cleansed through proprietary chemical process",
      step5Title: "Payout Dispatch",
      step5Desc: "81% value transferred to your chosen account",
      ctaTitle: "Ready to Begin?",
      ctaDesc: "Join the sovereign network of cleansed capital. No questions. No compromise.",
      ctaButton: "Access Registration Portal"
    },
    register: {
      title: "Client Registration Portal",
      subtitle: "Secure registration for package cleansing and transmutation",
      fullName: "Full Name / Company Name",
      email: "Email Address",
      phone: "Phone Number",
      packageId: "Package ID",
      estimatedValue: "Estimated Total Value (USD)",
      payoutMethod: "Preferred Payout Method",
      bankTransfer: "Bank Transfer (Fiat)",
      cryptoWallet: "Crypto Wallet",
      termsTitle: "Terms of Engagement",
      term1: "$250 upfront processing fee",
      term2: "19% cleansing fee deducted post-transmutation",
      submitButton: "Submit Registration",
      successMessage: "Registration submitted successfully. You will receive your RTC code via SMS.",
      errorMessage: "Please fill in all required fields."
    },
    submit: {
      title: "Package Submission & Transfer Protocol",
      subtitle: "Initiate secure transfer of your package to our cleansing facility",
      method1Title: "Secure Drop Node",
      method1Desc: "Anonymous drop-off at designated coordinates. GPS encrypted. No surveillance. No witnesses.",
      method2Title: "Encrypted Courier",
      method2Desc: "Technician dispatched to your location. Blind handoff protocol. Package secured in transit vault.",
      method3Title: "Blind Handoff",
      method3Desc: "Third-party intermediary. No names. No signatures. Package transferred via dead drop protocol.",
      nextTitle: "What Happens Next",
      step1: "Technician of Transfer assigned to your package",
      step2: "RTC tracking code generated and sent to your phone",
      step3: "Package arrives at laboratory for verification",
      step4: "72-hour cleansing cycle begins",
      securityTitle: "Security Protocol",
      security1: "All transfers are encrypted end-to-end",
      security2: "No CCTV. No records. No traces.",
      security3: "Your identity remains sovereign throughout the process",
      initiateButton: "Initiate Transfer Protocol"
    },
    track: {
      title: "Track Cleansing Status",
      subtitle: "Enter your facilitation code to view real-time package status",
      facilitationCode: "Facilitation Code (RTC)",
      trackButton: "Track Package",
      statusTitle: "Current Status",
      status1: "Package Received - Verification in progress",
      status2: "Laboratory Analysis - Chemical cleansing initiated",
      status3: "Transmutation Complete - Preparing payout dispatch",
      status4: "Payout Dispatched - 81% value transferred to your account",
      notFound: "No package found with this RTC code. Please verify and try again."
    },
    crypto: {
      title: "Crypto Wallet Setup",
      subtitle: "Configure your cryptocurrency wallet for cleansed capital payout",
      supportedTitle: "Supported Cryptocurrencies",
      currencyLabel: "Select Currency",
      currencyPlaceholder: "Choose cryptocurrency",
      networkLabel: "Network Type",
      networkPlaceholder: "Select network (e.g., ERC-20, TRC-20)",
      walletLabel: "Wallet Address",
      walletPlaceholder: "Enter your wallet address",
      securityTitle: "Security Notes",
      security1: "Double-check your wallet address before submission",
      security2: "We support BTC, ETH, USDT, and other major cryptocurrencies",
      security3: "Payout processed within 24 hours of cleansing completion",
      submitButton: "Register Wallet",
      successMessage: "Crypto wallet registered successfully. You will receive payout within 24 hours of completion.",
      errorMessage: "Please fill in all required fields."
    },
    fiat: {
      title: "Fiat Transfer Setup",
      subtitle: "Configure your bank account for cleansed capital payout via SWIFT/IBAN",
      accountName: "Account Holder Name",
      accountNamePlaceholder: "Full name as on bank account",
      iban: "IBAN Number",
      ibanPlaceholder: "International Bank Account Number",
      swift: "SWIFT/BIC Code",
      swiftPlaceholder: "Bank identifier code",
      bankName: "Bank Name",
      bankNamePlaceholder: "Name of your bank",
      country: "Country",
      countryPlaceholder: "Bank account country",
      securityTitle: "Security Protocol",
      security1: "All transfers are encrypted and verified",
      security2: "Payout processed within 48-72 hours of cleansing completion",
      submitButton: "Register Bank Account",
      successMessage: "Bank details registered successfully. Payout will be processed within 48-72 hours.",
      errorMessage: "Please fill in all required fields."
    },
    support: {
      title: "Encrypted Support",
      subtitle: "Secure channel for inquiries and assistance",
      whatsappTitle: "Direct Encrypted Chat",
      whatsappDesc: "Connect with our support team via encrypted WhatsApp channel for immediate assistance.",
      whatsappButton: "Open WhatsApp Support",
      formTitle: "Masked Inquiry Form",
      formDesc: "Submit an anonymous inquiry. All communications are encrypted and logged only by facilitation code.",
      name: "Name (Optional)",
      namePlaceholder: "Your name or alias",
      email: "Email Address",
      emailPlaceholder: "your@email.com",
      rtcCode: "RTC Code (Optional)",
      rtcCodePlaceholder: "Your tracking code if available",
      subject: "Subject",
      subjectPlaceholder: "Brief description of inquiry",
      message: "Message",
      messagePlaceholder: "Detailed inquiry...",
      guidelinesTitle: "Support Guidelines",
      guideline1: "Response time: 4-12 hours",
      guideline2: "Never share your RTC code publicly",
      guideline3: "For urgent matters, use WhatsApp channel",
      submitButton: "Submit Encrypted Inquiry",
      privacyTitle: "Privacy Guarantee",
      privacyDesc: "All support communications are end-to-end encrypted. No data is stored beyond facilitation period.",
      successMessage: "Inquiry submitted successfully. You will receive a response within 12 hours.",
      errorMessage: "Please fill in email and message fields."
    },
    notFound: {
      title: "404",
      message: "Oops! Page not found",
      returnHome: "Return to Home"
    },
    whatsapp: {
      tooltip: "Encrypted Support"
    }
  },
  CH: {
    nav: {
      home: "主页",
      register: "注册",
      submit: "提交包裹",
      track: "追踪清洗",
      crypto: "加密钱包",
      fiat: "法币转账",
      support: "支持"
    },
    home: {
      title: "EchoLAB™",
      subtitle: "黑钞清洗与转化",
      tagline: "无痕迹。无退货。只有流动性。",
      beginRegistration: "开始注册",
      trackStatus: "追踪状态",
      feature1Title: "加密协议",
      feature1Desc: "所有转账和通信采用军用级加密。您的身份保持主权。",
      feature2Title: "72小时处理",
      feature2Desc: "从包裹接收到清洗完成的流动性。通过RTC代码实时追踪。",
      feature3Title: "多币种支付",
      feature3Desc: "可接收法币（SWIFT/IBAN）或加密货币（BTC、ETH、USDT）。您的选择，您的主权。",
      processTitle: "清洗流程",
      step1Title: "注册",
      step1Desc: "提交包裹详情和首选支付方式",
      step2Title: "转移协议",
      step2Desc: "启动安全投递节点或加密快递取件",
      step3Title: "实验室分析",
      step3Desc: "包裹验证并生成RTC代码",
      step4Title: "转化",
      step4Desc: "通过专有化学工艺清洗黑钞",
      step5Title: "支付派送",
      step5Desc: "81%的价值转移到您选择的账户",
      ctaTitle: "准备开始了吗？",
      ctaDesc: "加入清洗资本的主权网络。无疑问。无妥协。",
      ctaButton: "访问注册门户"
    },
    register: {
      title: "客户注册门户",
      subtitle: "包裹清洗和转化的安全注册",
      fullName: "全名/公司名称",
      email: "电子邮件地址",
      phone: "电话号码",
      packageId: "包裹ID",
      estimatedValue: "估计总价值（美元）",
      payoutMethod: "首选支付方式",
      bankTransfer: "银行转账（法币）",
      cryptoWallet: "加密钱包",
      termsTitle: "参与条款",
      term1: "$250预付处理费",
      term2: "转化后扣除19%的清洗费",
      submitButton: "提交注册",
      successMessage: "注册提交成功。您将通过短信收到您的RTC代码。",
      errorMessage: "请填写所有必填字段。"
    },
    submit: {
      title: "包裹提交与转移协议",
      subtitle: "启动包裹安全转移到我们的清洗设施",
      method1Title: "安全投递节点",
      method1Desc: "在指定坐标匿名投递。GPS加密。无监控。无目击者。",
      method2Title: "加密快递",
      method2Desc: "技术人员派遣到您的位置。盲交接协议。包裹在运输保险库中安全。",
      method3Title: "盲交接",
      method3Desc: "第三方中介。无姓名。无签名。通过死投协议转移包裹。",
      nextTitle: "接下来会发生什么",
      step1: "转移技术人员分配到您的包裹",
      step2: "生成RTC追踪代码并发送到您的手机",
      step3: "包裹到达实验室进行验证",
      step4: "72小时清洗周期开始",
      securityTitle: "安全协议",
      security1: "所有转账都是端到端加密的",
      security2: "无闭路电视。无记录。无痕迹。",
      security3: "您的身份在整个过程中保持主权",
      initiateButton: "启动转移协议"
    },
    track: {
      title: "追踪清洗状态",
      subtitle: "输入您的促进代码以查看实时包裹状态",
      facilitationCode: "促进代码（RTC）",
      trackButton: "追踪包裹",
      statusTitle: "当前状态",
      status1: "包裹已收到 - 验证进行中",
      status2: "实验室分析 - 化学清洗已启动",
      status3: "转化完成 - 准备支付派送",
      status4: "支付已派送 - 81%的价值已转移到您的账户",
      notFound: "未找到此RTC代码的包裹。请验证后重试。"
    },
    crypto: {
      title: "加密钱包设置",
      subtitle: "配置您的加密货币钱包以接收清洗资本支付",
      supportedTitle: "支持的加密货币",
      currencyLabel: "选择货币",
      currencyPlaceholder: "选择加密货币",
      networkLabel: "网络类型",
      networkPlaceholder: "选择网络（例如，ERC-20、TRC-20）",
      walletLabel: "钱包地址",
      walletPlaceholder: "输入您的钱包地址",
      securityTitle: "安全提示",
      security1: "提交前请仔细检查您的钱包地址",
      security2: "我们支持BTC、ETH、USDT和其他主要加密货币",
      security3: "清洗完成后24小时内处理支付",
      submitButton: "注册钱包",
      successMessage: "加密钱包注册成功。完成后24小时内您将收到支付。",
      errorMessage: "请填写所有必填字段。"
    },
    fiat: {
      title: "法币转账设置",
      subtitle: "配置您的银行账户以通过SWIFT/IBAN接收清洗资本支付",
      accountName: "账户持有人姓名",
      accountNamePlaceholder: "银行账户上的全名",
      iban: "IBAN号码",
      ibanPlaceholder: "国际银行账号",
      swift: "SWIFT/BIC代码",
      swiftPlaceholder: "银行标识代码",
      bankName: "银行名称",
      bankNamePlaceholder: "您的银行名称",
      country: "国家",
      countryPlaceholder: "银行账户国家",
      securityTitle: "安全协议",
      security1: "所有转账都经过加密和验证",
      security2: "清洗完成后48-72小时内处理支付",
      submitButton: "注册银行账户",
      successMessage: "银行详情注册成功。将在48-72小时内处理支付。",
      errorMessage: "请填写所有必填字段。"
    },
    support: {
      title: "加密支持",
      subtitle: "查询和协助的安全渠道",
      whatsappTitle: "直接加密聊天",
      whatsappDesc: "通过加密WhatsApp频道与我们的支持团队联系以获得即时协助。",
      whatsappButton: "打开WhatsApp支持",
      formTitle: "匿名查询表",
      formDesc: "提交匿名查询。所有通信都经过加密，仅通过促进代码记录。",
      name: "姓名（可选）",
      namePlaceholder: "您的姓名或别名",
      email: "电子邮件地址",
      emailPlaceholder: "your@email.com",
      rtcCode: "RTC代码（可选）",
      rtcCodePlaceholder: "如果可用，您的追踪代码",
      subject: "主题",
      subjectPlaceholder: "查询简要说明",
      message: "消息",
      messagePlaceholder: "详细查询...",
      guidelinesTitle: "支持指南",
      guideline1: "响应时间：4-12小时",
      guideline2: "切勿公开分享您的RTC代码",
      guideline3: "紧急事项请使用WhatsApp频道",
      submitButton: "提交加密查询",
      privacyTitle: "隐私保证",
      privacyDesc: "所有支持通信都是端到端加密的。促进期之外不存储任何数据。",
      successMessage: "查询提交成功。您将在12小时内收到回复。",
      errorMessage: "请填写电子邮件和消息字段。"
    },
    notFound: {
      title: "404",
      message: "哎呀！找不到页面",
      returnHome: "返回主页"
    },
    whatsapp: {
      tooltip: "加密支持"
    }
  },
  IND: {
    nav: {
      home: "Beranda",
      register: "Daftar",
      submit: "Kirim Paket",
      track: "Lacak Pembersihan",
      crypto: "Dompet Kripto",
      fiat: "Transfer Fiat",
      support: "Dukungan"
    },
    home: {
      title: "EchoLAB™",
      subtitle: "Pembersihan & Transmutasi Uang Hitam",
      tagline: "Tanpa jejak. Tanpa pengembalian. Hanya likuiditas.",
      beginRegistration: "Mulai Pendaftaran",
      trackStatus: "Lacak Status",
      feature1Title: "Protokol Terenkripsi",
      feature1Desc: "Enkripsi tingkat militer untuk semua transfer dan komunikasi. Identitas Anda tetap berdaulat.",
      feature2Title: "Pemrosesan 72 Jam",
      feature2Desc: "Dari penerimaan paket hingga likuiditas yang dibersihkan. Pelacakan real-time melalui kode RTC.",
      feature3Title: "Pembayaran Multi-Mata Uang",
      feature3Desc: "Terima dalam fiat (SWIFT/IBAN) atau kripto (BTC, ETH, USDT). Pilihan Anda, kedaulatan Anda.",
      processTitle: "Proses Pembersihan",
      step1Title: "Pendaftaran",
      step1Desc: "Kirim detail paket dan metode pembayaran yang diinginkan",
      step2Title: "Protokol Transfer",
      step2Desc: "Node drop aman atau pengambilan kurir terenkripsi dimulai",
      step3Title: "Analisis Laboratorium",
      step3Desc: "Paket diverifikasi dan kode RTC dihasilkan",
      step4Title: "Transmutasi",
      step4Desc: "Uang hitam dibersihkan melalui proses kimia eksklusif",
      step5Title: "Pengiriman Pembayaran",
      step5Desc: "81% nilai ditransfer ke akun pilihan Anda",
      ctaTitle: "Siap Memulai?",
      ctaDesc: "Bergabunglah dengan jaringan berdaulat modal yang dibersihkan. Tanpa pertanyaan. Tanpa kompromi.",
      ctaButton: "Akses Portal Pendaftaran"
    },
    register: {
      title: "Portal Pendaftaran Klien",
      subtitle: "Pendaftaran aman untuk pembersihan dan transmutasi paket",
      fullName: "Nama Lengkap / Nama Perusahaan",
      email: "Alamat Email",
      phone: "Nomor Telepon",
      packageId: "ID Paket",
      estimatedValue: "Estimasi Total Nilai (USD)",
      payoutMethod: "Metode Pembayaran yang Diinginkan",
      bankTransfer: "Transfer Bank (Fiat)",
      cryptoWallet: "Dompet Kripto",
      termsTitle: "Syarat Keterlibatan",
      term1: "Biaya pemrosesan di muka $250",
      term2: "Biaya pembersihan 19% dipotong setelah transmutasi",
      submitButton: "Kirim Pendaftaran",
      successMessage: "Pendaftaran berhasil dikirim. Anda akan menerima kode RTC Anda melalui SMS.",
      errorMessage: "Harap isi semua bidang yang diperlukan."
    },
    submit: {
      title: "Pengiriman Paket & Protokol Transfer",
      subtitle: "Mulai transfer aman paket Anda ke fasilitas pembersihan kami",
      method1Title: "Node Drop Aman",
      method1Desc: "Drop-off anonim di koordinat yang ditentukan. GPS terenkripsi. Tanpa pengawasan. Tanpa saksi.",
      method2Title: "Kurir Terenkripsi",
      method2Desc: "Teknisi dikirim ke lokasi Anda. Protokol serah terima buta. Paket diamankan di brankas transit.",
      method3Title: "Serah Terima Buta",
      method3Desc: "Perantara pihak ketiga. Tanpa nama. Tanpa tanda tangan. Paket ditransfer melalui protokol dead drop.",
      nextTitle: "Apa yang Terjadi Selanjutnya",
      step1: "Teknisi Transfer ditugaskan ke paket Anda",
      step2: "Kode pelacakan RTC dihasilkan dan dikirim ke telepon Anda",
      step3: "Paket tiba di laboratorium untuk verifikasi",
      step4: "Siklus pembersihan 72 jam dimulai",
      securityTitle: "Protokol Keamanan",
      security1: "Semua transfer dienkripsi end-to-end",
      security2: "Tanpa CCTV. Tanpa catatan. Tanpa jejak.",
      security3: "Identitas Anda tetap berdaulat sepanjang proses",
      initiateButton: "Mulai Protokol Transfer"
    },
    track: {
      title: "Lacak Status Pembersihan",
      subtitle: "Masukkan kode fasilitasi Anda untuk melihat status paket real-time",
      facilitationCode: "Kode Fasilitasi (RTC)",
      trackButton: "Lacak Paket",
      statusTitle: "Status Saat Ini",
      status1: "Paket Diterima - Verifikasi sedang berlangsung",
      status2: "Analisis Laboratorium - Pembersihan kimia dimulai",
      status3: "Transmutasi Selesai - Mempersiapkan pengiriman pembayaran",
      status4: "Pembayaran Dikirim - 81% nilai ditransfer ke akun Anda",
      notFound: "Tidak ditemukan paket dengan kode RTC ini. Silakan verifikasi dan coba lagi."
    },
    crypto: {
      title: "Pengaturan Dompet Kripto",
      subtitle: "Konfigurasi dompet cryptocurrency Anda untuk pembayaran modal yang dibersihkan",
      supportedTitle: "Cryptocurrency yang Didukung",
      currencyLabel: "Pilih Mata Uang",
      currencyPlaceholder: "Pilih cryptocurrency",
      networkLabel: "Jenis Jaringan",
      networkPlaceholder: "Pilih jaringan (misalnya, ERC-20, TRC-20)",
      walletLabel: "Alamat Dompet",
      walletPlaceholder: "Masukkan alamat dompet Anda",
      securityTitle: "Catatan Keamanan",
      security1: "Periksa kembali alamat dompet Anda sebelum pengiriman",
      security2: "Kami mendukung BTC, ETH, USDT, dan cryptocurrency utama lainnya",
      security3: "Pembayaran diproses dalam 24 jam setelah penyelesaian pembersihan",
      submitButton: "Daftarkan Dompet",
      successMessage: "Dompet kripto berhasil didaftarkan. Anda akan menerima pembayaran dalam 24 jam setelah selesai.",
      errorMessage: "Harap isi semua bidang yang diperlukan."
    },
    fiat: {
      title: "Pengaturan Transfer Fiat",
      subtitle: "Konfigurasi rekening bank Anda untuk pembayaran modal yang dibersihkan melalui SWIFT/IBAN",
      accountName: "Nama Pemegang Rekening",
      accountNamePlaceholder: "Nama lengkap sesuai rekening bank",
      iban: "Nomor IBAN",
      ibanPlaceholder: "Nomor Rekening Bank Internasional",
      swift: "Kode SWIFT/BIC",
      swiftPlaceholder: "Kode identifikasi bank",
      bankName: "Nama Bank",
      bankNamePlaceholder: "Nama bank Anda",
      country: "Negara",
      countryPlaceholder: "Negara rekening bank",
      securityTitle: "Protokol Keamanan",
      security1: "Semua transfer dienkripsi dan diverifikasi",
      security2: "Pembayaran diproses dalam 48-72 jam setelah penyelesaian pembersihan",
      submitButton: "Daftarkan Rekening Bank",
      successMessage: "Detail bank berhasil didaftarkan. Pembayaran akan diproses dalam 48-72 jam.",
      errorMessage: "Harap isi semua bidang yang diperlukan."
    },
    support: {
      title: "Dukungan Terenkripsi",
      subtitle: "Saluran aman untuk pertanyaan dan bantuan",
      whatsappTitle: "Obrolan Terenkripsi Langsung",
      whatsappDesc: "Hubungi tim dukungan kami melalui saluran WhatsApp terenkripsi untuk bantuan segera.",
      whatsappButton: "Buka Dukungan WhatsApp",
      formTitle: "Formulir Pertanyaan Bertopeng",
      formDesc: "Kirim pertanyaan anonim. Semua komunikasi dienkripsi dan dicatat hanya dengan kode fasilitasi.",
      name: "Nama (Opsional)",
      namePlaceholder: "Nama atau alias Anda",
      email: "Alamat Email",
      emailPlaceholder: "your@email.com",
      rtcCode: "Kode RTC (Opsional)",
      rtcCodePlaceholder: "Kode pelacakan Anda jika tersedia",
      subject: "Subjek",
      subjectPlaceholder: "Deskripsi singkat pertanyaan",
      message: "Pesan",
      messagePlaceholder: "Pertanyaan detail...",
      guidelinesTitle: "Pedoman Dukungan",
      guideline1: "Waktu respons: 4-12 jam",
      guideline2: "Jangan pernah bagikan kode RTC Anda secara publik",
      guideline3: "Untuk masalah mendesak, gunakan saluran WhatsApp",
      submitButton: "Kirim Pertanyaan Terenkripsi",
      privacyTitle: "Jaminan Privasi",
      privacyDesc: "Semua komunikasi dukungan dienkripsi end-to-end. Tidak ada data yang disimpan melampaui periode fasilitasi.",
      successMessage: "Pertanyaan berhasil dikirim. Anda akan menerima respons dalam 12 jam.",
      errorMessage: "Harap isi bidang email dan pesan."
    },
    notFound: {
      title: "404",
      message: "Ups! Halaman tidak ditemukan",
      returnHome: "Kembali ke Beranda"
    },
    whatsapp: {
      tooltip: "Dukungan Terenkripsi"
    }
  },
  FR: {
    nav: {
      home: "Accueil",
      register: "S'inscrire",
      submit: "Soumettre le Colis",
      track: "Suivre le Nettoyage",
      crypto: "Portefeuille Crypto",
      fiat: "Transfert Fiat",
      support: "Assistance"
    },
    home: {
      title: "EchoLAB™",
      subtitle: "Nettoyage et Transmutation de Billets Noirs",
      tagline: "Aucune trace. Aucun retour. Juste de la liquidité.",
      beginRegistration: "Commencer l'Inscription",
      trackStatus: "Suivre le Statut",
      feature1Title: "Protocole Crypté",
      feature1Desc: "Cryptage de niveau militaire pour tous les transferts et communications. Votre identité reste souveraine.",
      feature2Title: "Traitement en 72 Heures",
      feature2Desc: "De la réception du colis à la liquidité nettoyée. Suivi en temps réel via le code RTC.",
      feature3Title: "Paiement Multi-Devises",
      feature3Desc: "Recevez en fiat (SWIFT/IBAN) ou crypto (BTC, ETH, USDT). Votre choix, votre souveraineté.",
      processTitle: "Le Processus de Nettoyage",
      step1Title: "Inscription",
      step1Desc: "Soumettre les détails du colis et la méthode de paiement préférée",
      step2Title: "Protocole de Transfert",
      step2Desc: "Nœud de dépôt sécurisé ou ramassage par coursier crypté initié",
      step3Title: "Analyse en Laboratoire",
      step3Desc: "Colis vérifié et code RTC généré",
      step4Title: "Transmutation",
      step4Desc: "Billets noirs nettoyés par processus chimique exclusif",
      step5Title: "Expédition du Paiement",
      step5Desc: "81% de la valeur transférée vers le compte de votre choix",
      ctaTitle: "Prêt à Commencer?",
      ctaDesc: "Rejoignez le réseau souverain du capital nettoyé. Aucune question. Aucun compromis.",
      ctaButton: "Accéder au Portail d'Inscription"
    },
    register: {
      title: "Portail d'Inscription Client",
      subtitle: "Inscription sécurisée pour le nettoyage et la transmutation de colis",
      fullName: "Nom Complet / Nom de l'Entreprise",
      email: "Adresse E-mail",
      phone: "Numéro de Téléphone",
      packageId: "ID du Colis",
      estimatedValue: "Valeur Totale Estimée (USD)",
      payoutMethod: "Méthode de Paiement Préférée",
      bankTransfer: "Virement Bancaire (Fiat)",
      cryptoWallet: "Portefeuille Crypto",
      termsTitle: "Conditions d'Engagement",
      term1: "Frais de traitement anticipés de 250$",
      term2: "Frais de nettoyage de 19% déduits après transmutation",
      submitButton: "Soumettre l'Inscription",
      successMessage: "Inscription soumise avec succès. Vous recevrez votre code RTC par SMS.",
      errorMessage: "Veuillez remplir tous les champs obligatoires."
    },
    submit: {
      title: "Soumission de Colis & Protocole de Transfert",
      subtitle: "Initier le transfert sécurisé de votre colis vers notre installation de nettoyage",
      method1Title: "Nœud de Dépôt Sécurisé",
      method1Desc: "Dépôt anonyme aux coordonnées désignées. GPS crypté. Aucune surveillance. Aucun témoin.",
      method2Title: "Coursier Crypté",
      method2Desc: "Technicien envoyé à votre emplacement. Protocole de remise aveugle. Colis sécurisé dans le coffre de transit.",
      method3Title: "Remise Aveugle",
      method3Desc: "Intermédiaire tiers. Aucun nom. Aucune signature. Colis transféré via protocole de dead drop.",
      nextTitle: "Ce qui se Passe Ensuite",
      step1: "Technicien de transfert assigné à votre colis",
      step2: "Code de suivi RTC généré et envoyé à votre téléphone",
      step3: "Le colis arrive au laboratoire pour vérification",
      step4: "Cycle de nettoyage de 72 heures commence",
      securityTitle: "Protocole de Sécurité",
      security1: "Tous les transferts sont cryptés de bout en bout",
      security2: "Aucune CCTV. Aucun enregistrement. Aucune trace.",
      security3: "Votre identité reste souveraine tout au long du processus",
      initiateButton: "Initier le Protocole de Transfert"
    },
    track: {
      title: "Suivre le Statut du Nettoyage",
      subtitle: "Entrez votre code de facilitation pour voir le statut du colis en temps réel",
      facilitationCode: "Code de Facilitation (RTC)",
      trackButton: "Suivre le Colis",
      statusTitle: "Statut Actuel",
      status1: "Colis Reçu - Vérification en cours",
      status2: "Analyse en Laboratoire - Nettoyage chimique initié",
      status3: "Transmutation Terminée - Préparation de l'expédition du paiement",
      status4: "Paiement Expédié - 81% de la valeur transférée vers votre compte",
      notFound: "Aucun colis trouvé avec ce code RTC. Veuillez vérifier et réessayer."
    },
    crypto: {
      title: "Configuration du Portefeuille Crypto",
      subtitle: "Configurez votre portefeuille de cryptomonnaie pour le paiement du capital nettoyé",
      supportedTitle: "Cryptomonnaies Prises en Charge",
      currencyLabel: "Sélectionner la Devise",
      currencyPlaceholder: "Choisir la cryptomonnaie",
      networkLabel: "Type de Réseau",
      networkPlaceholder: "Sélectionner le réseau (par ex., ERC-20, TRC-20)",
      walletLabel: "Adresse du Portefeuille",
      walletPlaceholder: "Entrez l'adresse de votre portefeuille",
      securityTitle: "Notes de Sécurité",
      security1: "Vérifiez l'adresse de votre portefeuille avant soumission",
      security2: "Nous prenons en charge BTC, ETH, USDT et autres cryptomonnaies majeures",
      security3: "Paiement traité dans les 24 heures suivant l'achèvement du nettoyage",
      submitButton: "Enregistrer le Portefeuille",
      successMessage: "Portefeuille crypto enregistré avec succès. Vous recevrez le paiement dans les 24 heures suivant l'achèvement.",
      errorMessage: "Veuillez remplir tous les champs obligatoires."
    },
    fiat: {
      title: "Configuration du Transfert Fiat",
      subtitle: "Configurez votre compte bancaire pour le paiement du capital nettoyé via SWIFT/IBAN",
      accountName: "Nom du Titulaire du Compte",
      accountNamePlaceholder: "Nom complet tel qu'il apparaît sur le compte bancaire",
      iban: "Numéro IBAN",
      ibanPlaceholder: "Numéro de Compte Bancaire International",
      swift: "Code SWIFT/BIC",
      swiftPlaceholder: "Code d'identification de la banque",
      bankName: "Nom de la Banque",
      bankNamePlaceholder: "Nom de votre banque",
      country: "Pays",
      countryPlaceholder: "Pays du compte bancaire",
      securityTitle: "Protocole de Sécurité",
      security1: "Tous les transferts sont cryptés et vérifiés",
      security2: "Paiement traité dans les 48-72 heures suivant l'achèvement du nettoyage",
      submitButton: "Enregistrer le Compte Bancaire",
      successMessage: "Détails bancaires enregistrés avec succès. Le paiement sera traité dans les 48-72 heures.",
      errorMessage: "Veuillez remplir tous les champs obligatoires."
    },
    support: {
      title: "Assistance Cryptée",
      subtitle: "Canal sécurisé pour les demandes et l'assistance",
      whatsappTitle: "Chat Crypté Direct",
      whatsappDesc: "Connectez-vous avec notre équipe d'assistance via le canal WhatsApp crypté pour une aide immédiate.",
      whatsappButton: "Ouvrir l'Assistance WhatsApp",
      formTitle: "Formulaire de Demande Masquée",
      formDesc: "Soumettez une demande anonyme. Toutes les communications sont cryptées et enregistrées uniquement par code de facilitation.",
      name: "Nom (Facultatif)",
      namePlaceholder: "Votre nom ou pseudonyme",
      email: "Adresse E-mail",
      emailPlaceholder: "votre@email.com",
      rtcCode: "Code RTC (Facultatif)",
      rtcCodePlaceholder: "Votre code de suivi si disponible",
      subject: "Sujet",
      subjectPlaceholder: "Brève description de la demande",
      message: "Message",
      messagePlaceholder: "Demande détaillée...",
      guidelinesTitle: "Directives d'Assistance",
      guideline1: "Temps de réponse: 4-12 heures",
      guideline2: "Ne partagez jamais votre code RTC publiquement",
      guideline3: "Pour les questions urgentes, utilisez le canal WhatsApp",
      submitButton: "Soumettre la Demande Cryptée",
      privacyTitle: "Garantie de Confidentialité",
      privacyDesc: "Toutes les communications d'assistance sont cryptées de bout en bout. Aucune donnée n'est stockée au-delà de la période de facilitation.",
      successMessage: "Demande soumise avec succès. Vous recevrez une réponse dans les 12 heures.",
      errorMessage: "Veuillez remplir les champs e-mail et message."
    },
    notFound: {
      title: "404",
      message: "Oups! Page non trouvée",
      returnHome: "Retour à l'Accueil"
    },
    whatsapp: {
      tooltip: "Assistance Cryptée"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("EN");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
