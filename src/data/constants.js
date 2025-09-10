import { Briefcase, Users, TrendingUp, BarChart3 } from "lucide-react";

export const JOBS_DATA = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png", // Google logo as image
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹12-18 LPA",
    posted: "2 days ago",
    favorite: false
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732229.png",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹10-16 LPA",
    posted: "4 days ago",
    favorite: false
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "TCS",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
    location: "Pune",
    type: "Remote",
    salary: "₹8-12 LPA",
    posted: "1 day ago",
    favorite: false
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Infosys",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732214.png",
    location: "Chennai",
    type: "Part-time",
    salary: "₹6-9 LPA",
    posted: "3 days ago",
    favorite: false
  },
];

export const COMPANIES_DATA = [
  { name: "Google", openings: 23, logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", openings: 15, logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "TCS", openings: 30, logo: "https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/media-kit/tcs-light-logo.png" },
  { name: "Infosys", openings: 12, logo: "https://static.vecteezy.com/system/resources/previews/020/190/469/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg" },
];

export const JOB_CATEGORIES = [
  { name: "Software Development", icon: "💻", jobs: 450 },
  { name: "Data Science", icon: "📊", jobs: 280 },
  { name: "UI/UX Design", icon: "🎨", jobs: 320 },
  { name: "Product Management", icon: "🚀", jobs: 180 },
  { name: "Marketing", icon: "📢", jobs: 92 },
  { name: "HR & Recruitment", icon: "👥", jobs: 41 },
  { name: "Sales", icon: "💰", jobs: 76 },
  { name: "Finance & Accounting", icon: "💵", jobs: 53 },
];

export const PREMIUM_FEATURES = [
  { title: "Unlimited Job Postings", description: "Post as many jobs as you like and reach more candidates.", icon: Briefcase },
  { title: "Hotlist Access", description: "View and manage premium candidate lists easily.", icon: Users },
  { title: "LinkedIn Integration", description: "Sync your listings with LinkedIn effortlessly.", icon: TrendingUp },
  { title: "Apollo Integration", description: "Access millions of professional profiles directly.", icon: BarChart3 },
];