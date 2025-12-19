import { toast } from "react-toastify";

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
  HomePage: {
    title: "Home Page",
    description: "",

    // Hero Section
    Hero: {
      title: "One Link. One Exhibition Hub.",
      buttonListService: "List Service",
      buttonPostProject: "Post Project",
      buttonCreateEvent: "Create an Event",
      buttonMarketPlace: "Find Suppliers",
      buttonGetStarted: "Get Started",
      buttonEventPage: "Explore Events",
    },

    // How it works section
    HowItWorks: {
      title: "How We Power Your Project",
      buildWithConfidence: "Kickstart your project with confidence.",
      buildWithConfidenceDescription:
        "Browse our handpicked network of trusted exhibition providers or let the Standify team recommend perfect-fit partners for your refined brief.",
      verifiedSuppliers: "Get matched with Ideal Partners",
      verifiedSuppliersDescription:
        `Find your perfect partner with total ease.
 Relax as tailored proposals arrive from our top-rated, fully vetted providers. Discover fresh ideas, compare competitive offers, and choose the one that aligns with your vision.
 All on your own terms and with complete confidentiality`,
      postYoutProject: "Collaborate and Succeed",
      postYoutProjectDescription:
        `Kick off your project with confidence from one integrated control hub.
 Chat, share files, and handle secure payments all in one seamless space designed to make collaboration effortless.`,
    },

    About: {
      title: "Who We Are?"
,
      list: {
        item1:
          "Standify is revolutionizing exhibition planning in the Gulf and MENA region",
        item2:
          "Born from the challenges of hidden costs, unreliable service providers, and complex logistics, we built a transparent platform that connects exhibitors directly with trusted, vetted service providers",
        item3:
          "Designed for the region with bilingual support and deep local expertise. Standify makes planning your exhibition seamless, reliable, and confident",
      },
    },

    Users: {
      title: "Powering Every Side of the Exhibition",
      exhibitor: "Exhibitors",
      exhibitorDescription:
        "Post your project and receive tailored quotes from our vetted network of regional experts, ready to execute your vision flawlessly",
      provider: "Service Providers",
      providerDescription:
        "Showcase your expertise and get directly discovered by quality clients with projects that match your skills.",
      organizer: "Organizers",
      organizerDescription:
        "Our platform lets you elevate your event remotely attract new audiences and re-engage past participants through a smooth and professional experience.",
    },

    EverythingYouNeed: {
      title: "All your problems solved at once.",
      description: `Everything your brands requires in your event`,
      buttonExplore: "Explore Full Feature List",
      boothDesign: "Design and Visualization",
      boothDesignDescription:
        "Bring your vision to life through creating detailed 3D models that perfect your brand awareness and visitor flow.",
      avRenter: "Tech an furniture",
      avRenterDescription:
        "All the equipment you need to complete your project, from furniture to digital activities, etc.",
      staffingSolution: "Expert Staffing",
      staffingSolutionDescription:
        "Find trained hosts and support teams to represent your brand and elevate the attendee experience.",
      brandingAndPrining: "Stand builder",
      brandingAndPriningDescription:
        "Create a cohesive brand experience. Build high-impact booths with trusted stand builders to ensure your stand is visually powerful and on brand.",
      branding: "Printing Solutions for Exhibitions",
      brandingDescription:
        "Everything you need for printing, in the palm of your hands and efficiently wrapped up",
      logistics: "Logistics & customs assistance",
      logisticsDescription:
        "Ensure smooth delivery of all stand materials with expert logistics partners handling transport, customs clearance, and on-site setup across the region.",
    },

    Brands: {
      title: "Brands Use Standify",
    },

    WhyUs: {
      title: "Why Choose Standify",
      description: `Experience the difference with our comprehensive platform designed
            specifically for the Middle East exhibition market, offering
            unmatched expertise and seamless connections`,
      regionalExpertise: "Regional Expertise",
      regionalExpertiseDescription:
        "Work with regional experts who speak your language and deliver on time with deep local market knowledge",
      privacyFirst: "Privacy First",
      privacyFirstDescription:
        "Privacy-first data protection with enterprise-grade security and a streamlined, fast process",
      transparentPricing: "Transparent Pricing",
      transparentPricingDescription:
        "Clear, upfront pricing with detailed proposal breakdowns and no hidden fees for every project",
      verifiedProviders: "Verified Providers",
      verifiedProvidersDescription:
        "All providers are thoroughly vetted, background-checked, and trusted for quality and reliability",
    },

    Events: {
      title: "Latest Events",
      buttonCTA: "Explore Events",
    },

    UserReview: {
      title: "What They Say About Standify",
    },

    Video: {
      title: "Check our Latest video",
      ctaTitle: "Ready to Exhibit in the Gulf?",
      buttonCTA: "Start now",
    },

    Team: {
      title: "Our Team",
      description: `Meet the committed team of industry professionals behind Standify,
            dedicated to transforming your next exhibition with world-class
            expertise.`,
    },
  },

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
