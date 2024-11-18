
import { Title } from '@/components/demo/Title';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { MoonStar, SunMoon } from 'lucide-react';


const components = [
    {
        "name": "Sidebar",
        "description": "Component Sidebar",
        "route": "/sidebar"
    },
    {
        "name": "Accordion",
        "description": "Component Accordion",
        "route": "/accordion"
    },
    {
        "name": "Alert",
        "description": "Component Alert",
        "route": "/alert"
    },
    {
        "name": "Alert Dialog",
        "description": "Component Alert Dialog",
        "route": "/alert-dialog"
    },
    {
        "name": "Aspect Ratio",
        "description": "Component Aspect Ratio",
        "route": "/aspect-ratio"
    },
    {
        "name": "Avatar",
        "description": "Component Avatar",
        "route": "/avatar"
    },
    {
        "name": "Badge",
        "description": "Component Badge",
        "route": "/badge"
    },
    {
        "name": "Breadcrumb",
        "description": "Component Breadcrumb",
        "route": "/breadcrumb"
    },
    {
        "name": "Button",
        "description": "Component Button",
        "route": "/button"
    },
    {
        "name": "Calendar",
        "description": "Component Calendar",
        "route": "/calendar"
    },
    {
        "name": "Card",
        "description": "Component Card",
        "route": "/card"
    },
    {
        "name": "Carousel",
        "description": "Component Carousel",
        "route": "/carousel"
    },
    {
        "name": "Chart",
        "description": "Component Chart",
        "route": "/chart"
    },
    {
        "name": "Checkbox",
        "description": "Component Checkbox",
        "route": "/checkbox"
    },
    {
        "name": "Collapsible",
        "description": "Component Collapsible",
        "route": "/collapsible"
    },
    {
        "name": "Combobox",
        "description": "Component Combobox",
        "route": "/combobox"
    },
    {
        "name": "Command",
        "description": "Component Command",
        "route": "/command"
    },
    {
        "name": "Context Menu",
        "description": "Component Context Menu",
        "route": "/context-menu"
    },
    {
        "name": "Data Table",
        "description": "Component Data Table",
        "route": "/data-table"
    },
    {
        "name": "Date Picker",
        "description": "Component Date Picker",
        "route": "/date-picker"
    },
    {
        "name": "Dialog",
        "description": "Component Dialog",
        "route": "/dialog"
    },
    {
        "name": "Drawer",
        "description": "Component Drawer",
        "route": "/drawer"
    },
    {
        "name": "Dropdown Menu",
        "description": "Component Dropdown Menu",
        "route": "/dropdown-menu"
    },
    {
        "name": "Form",
        "description": "Component Form",
        "route": "/form"
    },
    {
        "name": "Hover Card",
        "description": "Component Hover Card",
        "route": "/hover-card"
    },
    {
        "name": "Input",
        "description": "Component Input",
        "route": "/input"
    },
    {
        "name": "Input OTP",
        "description": "Component Input OTP",
        "route": "/input-otp"
    },
    {
        "name": "Label",
        "description": "Component Label",
        "route": "/label"
    },
    {
        "name": "Menubar",
        "description": "Component Menubar",
        "route": "/menubar"
    },
    {
        "name": "Navigation Menu",
        "description": "Component Navigation Menu",
        "route": "/navigation-menu"
    },
    {
        "name": "Pagination",
        "description": "Component Pagination",
        "route": "/pagination"
    },
    {
        "name": "Popover",
        "description": "Component Popover",
        "route": "/popover"
    },
    {
        "name": "Progress",
        "description": "Component Progress",
        "route": "/progress"
    },
    {
        "name": "Radio Group",
        "description": "Component Radio Group",
        "route": "/radio-group"
    },
    {
        "name": "Resizable",
        "description": "Component Resizable",
        "route": "/resizable"
    },
    {
        "name": "Scroll Area",
        "description": "Component Scroll Area",
        "route": "/scroll-area"
    },
    {
        "name": "Select",
        "description": "Component Select",
        "route": "/select"
    },
    {
        "name": "Separator",
        "description": "Component Separator",
        "route": "/separator"
    },
    {
        "name": "Sheet",
        "description": "Component Sheet",
        "route": "/sheet"
    },
    {
        "name": "Skeleton",
        "description": "Component Skeleton",
        "route": "/skeleton"
    },
    {
        "name": "Slider",
        "description": "Component Slider",
        "route": "/slider"
    },
    {
        "name": "Sonner",
        "description": "Component Sonner",
        "route": "/sonner"
    },
    {
        "name": "Switch",
        "description": "Component Switch",
        "route": "/switch"
    },
    {
        "name": "Table",
        "description": "Component Table",
        "route": "/table"
    },
    {
        "name": "Tabs",
        "description": "Component Tabs",
        "route": "/tabs"
    },
    {
        "name": "Textarea",
        "description": "Component Textarea",
        "route": "/textarea"
    },
    {
        "name": "Toast",
        "description": "Component Toast",
        "route": "/toast"
    },
    {
        "name": "Toggle",
        "description": "Component Toggle",
        "route": "/toggle"
    },
    {
        "name": "Toggle Group",
        "description": "Component Toggle Group",
        "route": "/toggle-group"
    },
    {
        "name": "Tooltip",
        "description": "Component Tooltip",
        "route": "/tooltip"
    }
];


const layoutData = [
    // layouting FE
    {
        name: 'Dashboards Pages layout',
        description: 'Dashboard Layout  for React applications.',
        route: '/dashboard-layout'
    },
    {
        name: 'Authentification Pages layout',
        description: 'Authentification Pages  for React applications.',
        route: '/authentification-layout'
    },
    {
        name: 'User Profile Pages layout',
        description: 'User Profile pages  for React applications.',
        route: '/user-profiles-layout'
    },
    {
        name: 'E-Commerce Pages layout',
        description: 'E-Commerce pages  for React applications.',
        route: '/e-commerce-layout'
    },
    {
        name: 'Multi Step form Pages layout',
        description: 'Multi Step form pages  for React applications.',
        route: '/multi-step-layout'
    },
    {
        name: 'Notification And Message Pages layout',
        description: 'Notification And Message pages  for React applications.',
        route: '/notif-message-layout'
    },
    {
        name: 'User Feedback & Rating Pages layout',
        description: 'User Feedback and Rating pages  for React applications.',
        route: '/feedback-rating-layout'
    },
    {
        name: 'Coding Practice Pages layout',
        description: 'Coding practice pages  for React applications.',
        route: '/coding-practice-layout'
    },
    {
        name: 'Carousel images Pages layout',
        description: 'Carousel images page  for React applications.',
        route: '/carousel-layout'
    },
    {
        name: 'Hero bg animation Pages layout',
        description: 'Hero Bg animation pages  for React applications.',
        route: '/hero-bg-layout'
    },
    {
        name: 'Loading Animations Pages layout',
        description: 'Loading Animations  for React applications.',
        route: '/loading-animation-layout'
    },
    {
        name: 'Alert Animations  Pages layout',
        description: 'Alert Animations  for React applications.',
        route: '/alert-layout'
    },
    {
        name: 'Modal Dialog Pages Layout',
        description: 'Modal dialog layout for React applications.',
        route: '/modal-dialog-layout'
    },
    {
        name: 'Footer  Pages Layout',
        description: 'Footer layout for React applications.',
        route: '/footer-layout'
    },
    {
        name: 'Navbar  Pages Layout',
        description: 'Navbar layout for React applications.',
        route: '/navbar-layout'
    },
    {
        "name": "FAQ Pages Layout",
        "description": "Frequently Asked Questions (FAQ) pages with collapsible sections.",
        "route": "/faq-pages-layout"
    },
    {
        "name": "Pricing Pages Layout",
        "description": "Pricing pages for product or service offerings.",
        "route": "/pricing-pages-layout"
    },
    {
        "name": "404 Error Pages Layout",
        "description": "Custom 404 error page with navigation options.",
        "route": "/404-error-layout"
    },
    {
        "name": "Testimonial Pages Layout",
        "description": "Testimonial pages to showcase user or client feedback.",
        "route": "/testimonial-pages-layout"
    },
    {
        "name": "Blog Pages Layout",
        "description": "Blog layout for displaying articles, posts, and comments.",
        "route": "/blog-pages-layout"
    },
    {
        "name": "Team Pages Layout",
        "description": "Layout to showcase team members with photos, descriptions, and their roles in the company.",
        "route": "/team-pages-layout"
    },
    {
        "name": "Roadmap Pages Layout",
        "description": "Layout to display a product or feature roadmap in an interactive timeline format.",
        "route": "/roadmap-pages-layout"
    },
    {
        "name": "Gallery Pages Layout",
        "description": "Layout to display photo or video galleries, commonly used for photography or art exhibit websites.",
        "route": "/gallery-pages-layout"
    },
    {
        "name": "Event Pages Layout",
        "description": "Layout for event pages, featuring event descriptions, schedules, and registration options.",
        "route": "/event-pages-layout"
    },
    {
        "name": "Help Center Pages Layout",
        "description": "Layout for a help center, typically including help articles, FAQs, and contact forms.",
        "route": "/help-center-layout"
    },
    {
        "name": "Learning Management System (LMS) Pages Layout",
        "description": " Layout for managing courses, lessons, quizzes, and student progress, used in e-learning platforms.",
        "route": "/lms-layout"
    },
    {
        "name": "Content Management System (CMS) Pages Layout",
        "description": "Layout for managing content, including articles, images, and videos.",
        "route": "/cms-layout"
    },
    {
        "name": "User  Onboarding Pages Layout",
        "description": "Layout for the onboarding process of new users, including tutorials and guides.",
        "route": "/user-onboarding-layout"
    },
    {
        "name": "Affiliate Program Pages Layout",
        "description": "Layout for the affiliate program, including registration and commission tracking.",
        "route": "/affiliate-program-layout"
    },
    {
        "name": "Customer Support Pages Layout",
        "description": "Layout for customer support, including ticketing systems and live chat.",
        "route": "/customer-support-layout"
    }
];



export const Home = () => {
    const { theme, toggleTheme } = useTheme();

    const renderCards = (data) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto">
            {data.map((item) => (
                <div key={item.route} className="bg-card p-5 border rounded-lg shadow-md w-full">
                    <h3 className="text-lg font-bold text-card-foreground">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Link to={item.route} className="mt-2 inline-block">
                        <Button>View Details</Button>
                    </Link>
                </div>
            ))}
        </div>
    );

    return (
        <div className="container h-full py-10">
            <div className="flex py-5 mb-10 justify-between items-center">
                <Title name="Web Components ShadcnUI" />
                <Button variant="outline" onClick={toggleTheme} className="h-10">
                    {theme === 'dark' ? <MoonStar /> : <SunMoon />}
                </Button>
            </div>

            <section className="mb-10">
                <h2 className="text-2xl font-bold py-10">Components Items </h2>
                {renderCards(components)}
            </section>

            <section>
                <h2 className="text-2xl font-bold py-10">Front-end Section Layout</h2>
                {renderCards(layoutData)}
            </section>
        </div>
    );
};

export default Home;