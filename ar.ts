import FAQs from "./content/FAQs_ar";
import HomePage from "./content/HomePage_ar";
import { Translations } from "./utils/types";

const ar: Translations = {
  Header: {
    buttonHomePage: "الرئيسية",
    buttonMarketPlace: "السوق",
    buttonEventPage: "استكشاف الفعاليات",
    buttonPostService: "نشر خدمة",
    buttonPostProject: "نشر مشروع",
    buttonPostEvent: "نشر حدث",
    buttonInbox: "البريد الوارد",
    buttonAccount: "الحساب",
    buttonLogout: "تسجيل الخروج",
    buttonLoggingout: "جارٍ تسجيل الخروج...",
    buttonLogin: "تسجيل الدخول",
    buttonRegister: "إنشاء حساب",
    buttonLightMode: "الوضع الفاتح",
    buttonDarkMode: "الوضع الداكن",
    toastLogoutSuccess: "تم تسجيل الخروج بنجاح",
  },

  Footer: {
    aboutUs: "من نحن",
    contactUs: "اتصل بنا",
    termsOfService: "شروط الخدمة",
    privacyPolicy: "سياسة الخصوصية",
    stayUpdated: "ابقَ على اطلاع",
    emailPlaceholder: "أدخل البريد الإلكتروني",
    buttonSubscribeNow: "اشترك الآن",
    buttonSubscribeNowLoading: "اشترك الآن",
    categories: "الفئات",
    quickLink: "روابط سريعة",
  },
  FAQs,
  HomePage,

  Categories: {
    "Booth Design": "تصميم الأجنحة",
    "Booth Construction": "بناء الأجنحة",
    "Logistics & Transportation": "الخدمات اللوجستية والنقل",
    "Photography & Videography": "التصوير الفوتوغرافي وتصوير الفيديو",
    "Promotional Materials": "المواد الترويجية",
    "Event Staffing": "توظيف الفعاليات",
    "Technology Solutions": "الحلول التقنية",
    "Marketing & PR": "التسويق والعلاقات العامة",
  },

  Service: {
    // Status
    approved: "تمت الموافقة",
    rejected: "مرفوض",
    disabled: "معطل",
    pending: "في انتظار الموافقة",
    active: "نشط",
    inactive: "غير نشط",

    title: "نظرة عامة على الخدمة",
    category: "الفئة",
    price: "السعر",
    deliveryTime: "مدة التسليم",
    location: "الموقع",
    coverageArea: "نطاق التغطية",
    rating: "التقييم",
    reviews: "التقييمات",
    description: "الوصف",
    noDescriptionProvided: "لم يتم تقديم وصف.",
    features: "الميزات",
    requirements: "المتطلبات",
    noRequirements: "No specifications",
    gallery: "المعرض",
    noGallery: "لا توجد صور في المعرض.",
    vendor: "البائع",
    sending: "جارٍ الإرسال...",
    sendMessage: "إرسال رسالة",
    pleaseLogin: "يرجى <link>تسجيل الدخول</link> لإرسال رسالة إلى البائع.",
  },

  Review: {
    title: "تقييمات العملاء",
    reviews: "التقييمات",
    allReviews: "جميع التقييمات",
    stars: "النجوم",
    noReviews: "لا توجد تقييمات بعد لهذه الخدمة.",
    loading: "جارٍ التحميل...",
    loadMoreReviews: "تحميل المزيد من التقييمات",
  },

  LoginPage: {
    buttonSignUp: "إنشاء حساب",
    title: "تسجيل الدخول",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    recoverPassword: "استعادة كلمة المرور",
    buttonSubmitLoading: "جارٍ تسجيل الدخول...",
    buttonSubmit: "تسجيل الدخول",

    EmailVerificationDialog: {
      title: "يتطلب التحقق من البريد الإلكتروني",
      description: `يتطلب Standify بريدًا إلكترونيًا نشطًا للوصول إلى حسابك. 
    يرجى التحقق من بريدك الإلكتروني للمتابعة.`,
      successMessage: "تم إرسال رسالة التحقق! يرجى التحقق من صندوق الوارد.",
      buttonSubmit: "طلب رابط التحقق",
      buttonSubmitLoading: "جارٍ طلب رابط التحقق...",
    },
  },

  RecoverPasswordPage: {
    buttonLogin: "تسجيل الدخول",
    title: "استعادة كلمة المرور",
    description: `أدخل عنوان البريد الإلكتروني الذي سجلت به في Standify،
                  وستتلقى رسالة إلكترونية بمجرد التحقق.`,
    email: "عنوان البريد الإلكتروني",
    password: "كلمة المرور",
    recoverPassword: "استعادة كلمة المرور",
    buttonSubmit: "استعادة كلمة المرور",
    successTitle: "تم إرسال رابط الاستعادة",
    successMessage:
      "تحقق من بريدك الإلكتروني للحصول على رابط الاستعادة. شكرًا لاستخدامك Standify",
  },

  SignUpPage: {
    // User types
    exhibitor: "عارض",
    vendor: "بائع",
    organizer: "منظم",

    buttonLogin: "تسجيل الدخول",
    title: "إنشاء حساب",
    description: "لنبدأ معك",
    selectUserType: "اختر نوع المستخدم",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    terms:
      "<label>أوافق على </label> <tos>شروط الخدمة</tos> و <privacy>سياسة الخصوصية</privacy>",
    buttonSubmitLoading: "جارٍ إنشاء الحساب...",
    buttonSubmit: "إنشاء حساب",

    SignUpSuccessDialog: {
      title: "تم التسجيل بنجاح",
      description: `أرسل Standify رابط التحقق إلى بريدك الإلكتروني. 
    يرجى التحقق من بريدك الإلكتروني للمتابعة.`,
      buttonOkay: "حسنًا",
    },
  },

  EmailVerificationPage: {
    buttonSuccess: "متابعة إلى تسجيل الدخول",
    titleError: "فشل التحقق",
    buttonError: "طلب رسالة تحقق جديدة",
  },

  ResetPasswordPage: {
    title: "إعادة تعيين كلمة المرور",
    buttonLogin: "تسجيل الدخول الآن",
    newPassword: "كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور",
    passwordNotMatch: "كلمتا المرور غير متطابقتين",
    buttonSubmit: "إرسال",
    buttonSubmitLoading: "جارٍ الإرسال...",
    successMessage: "تمت إعادة تعيين كلمة المرور بنجاح",
  },

  Event: {
    sending: "Sending...",
    sendMessage: "Send Message",
    pleaseLogin:
      "Please <link>log in</link> to send a message to the organizer.",
  },
};

export default ar;
