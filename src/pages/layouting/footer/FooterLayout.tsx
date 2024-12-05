"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Title } from "@/components/demo/Title"
// import { Icons } from "@/components/icons"

const footers = [
    {
        id: 1,
        name: "Minimalist Footer",
        component: MinimalistFooter,
    },
    {
        id: 2,
        name: "Multi-Column Footer",
        component: MultiColumnFooter,
    },
    {
        id: 3,
        name: "Animated Gradient Footer",
        component: AnimatedGradientFooter,
    },
    {
        id: 4,
        name: "Dark Mode Footer",
        component: DarkModeFooter,
    },
    {
        id: 5,
        name: "Newsletter Footer",
        component: NewsletterFooter,
    },
    {
        id: 6,
        name: "Social Media Footer",
        component: SocialMediaFooter,
    },
    {
        id: 7,
        name: "Animated Wave Footer",
        component: AnimatedWaveFooter,
    },
    {
        id: 8,
        name: "Mega Footer",
        component: MegaFooter,
    },
    {
        id: 9,
        name: "Floating Action Footer",
        component: FloatingActionFooter,
    },
    {
        id: 10,
        name: "Interactive Map Footer",
        component: InteractiveMapFooter,
    },
]

export default function FooterLayout() {
    const [selectedFooter, setSelectedFooter] = useState(footers[0])

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 ">
                <div className="p-20 bg-slate-200 my-4">
                    <Title name="Screen Footer Layout " />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {footers.map((footer) => (
                        <Button
                            key={footer.id}
                            variant={selectedFooter.id === footer.id ? "default" : "outline"}
                            onClick={() => setSelectedFooter(footer)}
                        >
                            {footer.name}
                        </Button>
                    ))}
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <selectedFooter.component />
                </div>
            </div>
        </div>
    )
}

function MinimalistFooter() {
    return (
        <footer className="py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img src="https://mochrks.github.io/assets/img-photo/favicon1.png" alt="Company Logo" className="h-8 w-auto" />
                    </div>
                    <nav className="flex space-x-4">
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            About
                        </a>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Services
                        </a>
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Contact
                        </a>
                    </nav>
                </div>
                <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2023 Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

function MultiColumnFooter() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Tutorials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500 dark:text-gray-400">© 2023 Your Company. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <span className="sr-only">Facebook</span>
                                {/* <Icons.facebook className="h-6 w-6" /> */}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <span className="sr-only">Twitter</span>
                                {/* <Icons.twitter className="h-6 w-6" /> */}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <span className="sr-only">Instagram</span>
                                {/* <Icons.instagram className="h-6 w-6" /> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function AnimatedGradientFooter() {
    return (
        <footer className="py-12 relative overflow-hidden">
            <div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                style={{
                    backgroundSize: "400% 400%",
                    animation: "gradient 15s ease infinite",
                }}
            />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">About Us</h3>
                        <p className="text-white opacity-80">
                            We are a cutting-edge technology company dedicated to innovation and excellence in software development.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
                        <p className="text-white opacity-80 mb-2">123 Tech Street, Silicon Valley, CA 94000</p>
                        <p className="text-white opacity-80 mb-2">Phone: (123) 456-7890</p>
                        <p className="text-white opacity-80">Email: info@yourcompany.com</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
                    <p className="text-white opacity-80">© 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
            <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
        </footer>
    )
}

function DarkModeFooter() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle("dark")
    }

    return (
        <footer className={`py-12 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} transition-colors duration-300`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <img src="https://mochrks.github.io/assets/img-photo/favicon1.png" alt="Company Logo" className="h-8 w-auto" />
                    </div>
                    <nav className="flex space-x-4">
                        <a
                            href="#"
                            className={`text-sm ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className={`text-sm ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className={`text-sm ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            Contact
                        </a>
                    </nav>
                    <Button onClick={toggleDarkMode} variant="outline" size="sm">
                        {/* {isDarkMode ? <Icons.sun className="h-4 w-4" /> : <Icons.moon className="h-4 w-4" />} */}
                        <span className="ml-2">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                    </Button>
                </div>
                <Separator className={isDarkMode ? "bg-gray-800" : "bg-gray-200"} />
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        © 2023 Your Company. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className={`text-sm ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                            Privacy Policy
                        </a>
                        <a href="#" className={`text-sm ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                            Terms of Service
                        </a>
                        <a href="#" className={`text-sm ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}>
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function NewsletterFooter() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Subscribed with email:", email)
        setEmail("")
    }

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
                        <p className="text-gray-300 mb-6">
                            Subscribe to our newsletter for the latest updates, exclusive offers, and tech insights.
                        </p>
                        <form onSubmit={handleSubmit} className="flex">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow mr-2"
                                required
                            />
                            <Button type="submit">Subscribe</Button>
                        </form>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400">© 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

function SocialMediaFooter() {
    return (
        <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <img src="https://mochrks.github.io/assets/img-photo/favicon1.png" alt="Company Logo" className="h-8 w-auto" />
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200">
                            {/* <Icons.facebook className="h-6 w-6" /> */}
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200">
                            {/* <Icons.twitter className="h-6 w-6" /> */}
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200">
                            {/* <Icons.instagram className="h-6 w-6" /> */}
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200">
                            {/* <Icons.linkedin className="h-6 w-6" /> */}
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="#" className="text-white hover:text-gray-200 transition-colors duration-200">
                            {/* <Icons.youtube className="h-6 w-6" /> */}
                            <span className="sr-only">YouTube</span>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Tutorials
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-gray-300">© 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

function AnimatedWaveFooter() {
    return (
        <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-300">
                            We are a leading technology company dedicated to innovation and excellence in software development.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-300 mb-2">123 Tech Street, Silicon Valley, CA 94000</p>
                        <p className="text-gray-300 mb-2">Phone: (123) 456-7890</p>
                        <p className="text-gray-300">Email: info@yourcompany.com</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                {/* <Icons.facebook className="h-6 w-6" /> */}
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                {/* <Icons.twitter className="h-6 w-6" /> */}
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                {/* <Icons.instagram className="h-6 w-6" /> */}
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                {/* <Icons.linkedin className="h-6 w-6" /> */}
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-gray-400">© 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
            <style jsx>{`
        .waves {
          position: relative;
          width: 100%;
          height: 15vh;
          margin-bottom: -7px;
          min-height: 100px;
          max-height: 150px;
        }
        .parallax > use {
          animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        }
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }
      `}</style>
        </footer>
    )
}

function MegaFooter() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">About Us</h3>
                        <p className="text-gray-300 mb-4">
                            We are a leading technology company dedicated to innovation and excellence in software development.
                        </p>
                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                            Learn More
                        </Button>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Mobile App Development
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Cloud Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    AI & Machine Learning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Cybersecurity
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
                        <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="flex flex-col space-y-2">
                            <Input type="email" placeholder="Enter your email" className="bg-gray-800 text-white" />
                            <Button>Subscribe</Button>
                        </form>
                    </div>
                </div>
                <Separator className="bg-gray-700 my-8" />
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 mb-4 md:mb-0">© 2023 Your Company. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            {/* <Icons.facebook className="h-6 w-6" /> */}
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            {/* <Icons.twitter className="h-6 w-6" /> */}
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            {/* <Icons.instagram className="h-6 w-6" /> */}
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            {/* <Icons.linkedin className="h-6 w-6" /> */}
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                            {/* <Icons.youtube className="h-6 w-6" /> */}
                            <span className="sr-only">YouTube</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FloatingActionFooter() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
                    <div className="relative">
                        <Button
                            variant="outline"
                            className="text-black border-white hover:bg-white hover:text-gray-900"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Quick Actions
                            {/* <Icons.chevronUp className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} /> */}
                        </Button>
                        {isOpen && (
                            <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="py-2">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Contact Support
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        FAQs
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Privacy Policy
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        Terms of Service
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}

function InteractiveMapFooter() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                        <p className="text-gray-300 mb-4">
                            123 Tech Street, Silicon Valley, CA 94000
                            <br />
                            Phone: (123) 456-7890
                            <br />
                            Email: info@yourcompany.com
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                {/* <Icons.facebook className="h-6 w-6" /> */}
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                {/* <Icons.twitter className="h-6 w-6" /> */}
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                {/* <Icons.instagram className="h-6 w-6" /> */}
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                {/* <Icons.linkedin className="h-6 w-6" /> */}
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    <div className="h-64 bg-gray-800 rounded-lg overflow-hidden">
                        {/* Replace this div with an actual map component */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            Interactive Map Placeholder
                        </div>
                    </div>
                </div>
                <Separator className="bg-gray-700 my-8" />
                <div className="text-center">
                    <p className="text-gray-400">© 2023 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}