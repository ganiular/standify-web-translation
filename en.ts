import FAQs from "./content/FAQs_en";
import HomePage from "./content/HomePage_en";

const en = {
  Header: {
    buttonHomePage: "Home",
    buttonMarketPlace: "Marketplace",
    buttonEventPage: "Explore Event",
    buttonPostService: "Post Service",
    buttonPostProject: "Post Project",
    buttonPostEvent: "Post Event",
    buttonInbox: "Inbox",
    buttonAccount: "Account",
    buttonLogout: "Log out",
    buttonLoggingout: "Logging out...",
    buttonLogin: "Login",
    buttonRegister: "Register",
    buttonLightMode: "Light Mode",
    buttonDarkMode: "Dark Mode",
    toastLogoutSuccess: "Logged out successfully",
  },
  Footer: {
    aboutUs: "About Us",
    contactUs: "Contact Us",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    stayUpdated: "Stay Updated",
    emailPlaceholder: "Enter Email",
    buttonSubscribeNow: "Subscribe Now",
    buttonSubscribeNowLoading: "Subscribing...",
    categories: "Categories",
    quickLink: "Quick Links",
  },
  FAQs,
  HomePage,

  Categories: {
    "Booth Design": "Booth Design",
    "Booth Construction": "Booth Construction",
    "Logistics & Transportation": "Logistics & Transportation",
    "Photography & Videography": "Photography & Videography",
    "Promotional Materials": "Promotional Materials",
    "Event Staffing": "Event Staffing",
    "Technology Solutions": "Technology Solutions",
    "Marketing & PR": "Marketing & PR",
  },

  Service: {
    // Status
    approved: "Approved",
    rejected: "Rejected",
    disabled: "Disabled",
    pending: "Pending approval",
    active: "Active",
    inactive: "Inactive",

    title: "Service Overview",
    category: "Category",
    price: "Price",
    deliveryTime: "Delivery Time",
    location: "Location",
    coverageArea: "Coverage",
    rating: "Rating",
    reviews: "reviews",
    description: "Description",
    noDescriptionProvided: "No description provided.",
    features: "Features",
    requirements: "Requirements",
    noRequirements: "No specifications",
    gallery: "Gallery",
    noGallery: "No gallery images.",
    vendor: "Vendor",
    sending: "Sending...",
    sendMessage: "Send Message",
    pleaseLogin: "Please <link>log in</link> to send a message to the vendor.",
  },

  Review: {
    title: "Customer Reviews",
    reviews: "reviews",
    allReviews: "All Reviews",
    stars: "Stars",
    noReviews: "No reviews yet for this service.",
    loading: "Loading...",
    loadMoreReviews: "Load More Reviews",
  },

  LoginPage: {
    buttonSignUp: "Sign Up",
    title: "Sign In",
    email: "Email",
    password: "Password",
    recoverPassword: "Recover Password",
    buttonSubmitLoading: "Logging in...",
    buttonSubmit: "Login",

    // Email verification dialog
    EmailVerificationDialog: {
      title: "Email Verification Required",
      description: `Standify requires an active email address to access your account. 
            Please verify your email to continue.`,
      successMessage: "Verification email sent! Please check your inbox.",
      buttonSubmit: "Request verification link",
      buttonSubmitLoading: "Requesting verification link..",
    },
  },

  RecoverPasswordPage: {
    buttonLogin: "Login",
    title: "Password Recovery",
    description: `Enter the email address you registered 
                      with Standify, you will receive an email once verified.`,
    email: "Email address",
    password: "Password",
    recoverPassword: "Recover Password",
    buttonSubmit: "Recover Password",
    successTitle: "Recovery Link Sent",
    successMessage:
      "Check your email for recovery link. Thanks for using Standify",
  },

  SignUpPage: {
    // User types
    exhibitor: "Exhibitor",
    vendor: "Vendor",
    organizer: "Organizer",

    buttonLogin: "Login",
    title: "Sign Up",
    description: "Let’s Get You Started",
    selectUserType: "Select a user type",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    password: "Password",
    terms:
      "<label>I accept the</label> <tos>Terms of Service</tos> and the <privacy>Privacy Policy</privacy>",
    buttonSubmitLoading: "Signing up...",
    buttonSubmit: "Sign Up",

    SignUpSuccessDialog: {
      title: "Signup Successful",
      description: `Standify has sent verification link to your email. 
            Please check your email to continue.`,
      buttonOkay: "Okay",
    },
  },

  EmailVerificationPage: {
    buttonSuccess: "Continue to Login",
    titleError: "Verification failed",
    buttonError: "Request Verification Email",
  },

  ResetPasswordPage: {
    title: "Reset Password",
    buttonLogin: "Login Now",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    passwordNotMatch: "Password not match",
    buttonSubmit: "Submit",
    buttonSubmitLoading: "Submitting...",
    successMessage: "Password Reset Succesful",
  },

  Event: {
    sending: "Sending...",
    sendMessage: "Send Message",
    pleaseLogin:
      "Please <link>log in</link> to send a message to the organizer.",
  },
};

export default en;
