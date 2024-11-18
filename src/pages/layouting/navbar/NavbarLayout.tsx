"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Home,
    Folder,
    CheckSquare,
    Calendar,
    FileText,
    BarChart2,
    X,
    Menu,
    Bell,
    Search,
    ChevronRight,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Package
} from "lucide-react"
import { Title } from "@/components/demo/Title"

const navbars = [
    { id: 1, name: "Minimalist Navbar", component: MinimalistNavbar },
    { id: 2, name: "Animated Dropdown Navbar", component: AnimatedDropdownNavbar },
    { id: 3, name: "Transparent Scroll Navbar", component: TransparentScrollNavbar },
    { id: 4, name: "Mega Menu Navbar", component: MegaMenuNavbar },
    { id: 5, name: "Sidebar Navbar", component: SidebarNavbar },
    { id: 6, name: "Search-focused Navbar", component: SearchFocusedNavbar },
    { id: 7, name: "Animated Hamburger Navbar", component: AnimatedHamburgerNavbar },
    { id: 8, name: "Sticky Navbar with Progress", component: StickyNavbarWithProgress },
    { id: 9, name: "Multi-level Dropdown Navbar", component: MultiLevelDropdownNavbar },
    { id: 10, name: "Animated Logo Navbar", component: AnimatedLogoNavbar },
]

export default function NavbarLayout() {
    const [selectedNavbar, setSelectedNavbar] = useState(navbars[0])

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="py-5">
                    <Title name="Screen Navbar Layout " />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {navbars.map((navbar) => (
                        <Button
                            key={navbar.id}
                            variant={selectedNavbar.id === navbar.id ? "default" : "outline"}
                            onClick={() => setSelectedNavbar(navbar)}
                        >
                            {navbar.name}
                        </Button>
                    ))}
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <selectedNavbar.component />
                </div>
            </div>
        </div>
    )
}

function MinimalistNavbar() {
    return (
        <nav className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
                <Package className="h-8 w-8" />
                <span className="text-xl font-bold">MinimalBrand</span>
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Services
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Contact
                </a>
            </div>
            <div className="md:hidden">
                <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                </Button>
            </div>
        </nav>
    )
}

function AnimatedDropdownNavbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const dropdownItems = [
        {
            name: "Products",
            items: ["Software", "Hardware", "Services"],
        },
        {
            name: "Solutions",
            items: ["Enterprise", "Small Business", "Startups"],
        },
        {
            name: "Resources",
            items: ["Documentation", "Tutorials", "Blog"],
        },
    ]

    return (
        <nav className="bg-white dark:bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Package className="h-8 w-8" />
                    <span className="text-xl font-bold">AnimatedNav</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    {dropdownItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                {item.name}
                            </button>
                            <AnimatePresence>
                                {activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2"
                                    >
                                        {item.items.map((subItem) => (
                                            <a
                                                key={subItem}
                                                href="#"
                                                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                <div className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}

function TransparentScrollNavbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white dark:bg-gray-800 shadow-md" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <Package className={`h-8 w-8 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`} />
                        <span className={`text-xl font-bold ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}>
                            TransparentNav
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {["Home", "About", "Services", "Contact"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`${isScrolled
                                    ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                    : "text-white hover:text-gray-200"
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`} />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function MegaMenuNavbar() {
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

    const megaMenuItems = [
        {
            name: "Products",
            columns: [
                {
                    title: "Software",
                    items: ["Web Apps", "Mobile Apps", "Desktop Apps"],
                },
                {
                    title: "Hardware",
                    items: ["Laptops", "Desktops", "Accessories"],
                },
                {
                    title: "Services",
                    items: ["Consulting", "Training", "Support"],
                },
            ],
        },
        {
            name: "Solutions",
            columns: [
                {
                    title: "By Industry",
                    items: ["Healthcare", "Finance", "Education"],
                },
                {
                    title: "By Business Size",
                    items: ["Enterprise", "SMB", "Startups"],
                },
                {
                    title: "By Need",
                    items: ["Analytics", "Security", "Automation"],
                },
            ],
        },
    ]

    return (
        <nav className="bg-white dark:bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Package className="h-8 w-8" />
                        <span className="text-xl font-bold">MegaNav</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {megaMenuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setActiveMegaMenu(item.name)}
                                onMouseLeave={() => setActiveMegaMenu(null)}
                            >
                                <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                    {item.name}
                                </button>
                                <AnimatePresence>
                                    {activeMegaMenu === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 mt-2 w-screen max-w-screen-xl bg-white dark:bg-gray-800 rounded-md shadow-lg py-6 px-4"
                                        >
                                            <div className="grid grid-cols-3 gap-8">
                                                {item.columns.map((column) => (
                                                    <div key={column.title}>
                                                        <h3 className="text-lg font-semibold mb-2">{column.title}</h3>
                                                        <ul className="space-y-2">
                                                            {column.items.map((subItem) => (
                                                                <li key={subItem}>
                                                                    <a
                                                                        href="#"
                                                                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                                                    >
                                                                        {subItem}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            About
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function SidebarNavbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const menuItems = [
        { name: "Dashboard", icon: Home },
        { name: "Projects", icon: Folder },
        { name: "Tasks", icon: CheckSquare },
        { name: "Calendar", icon: Calendar },
        { name: "Documents", icon: FileText },
        { name: "Reports", icon: BarChart2 },
    ]

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.aside
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-y-0 left-0 bg-white dark:bg-gray-800 w-64 shadow-lg z-50"
                    >
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                            <span className="text-xl font-bold">SideNav</span>
                            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                        <nav className="mt-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href="#"
                                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </nav>
                    </motion.aside>
                )}
            </AnimatePresence>
            <div className="flex-1">
                <header className="bg-white dark:bg-gray-800 shadow-sm">
                    <div className="flex items-center justify-between p-4">
                        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
                            <Menu className="h-6 w-6" />
                        </Button>
                        <div className="flex items-center space-x-4">
                            <Input type="search" placeholder="Search..." className="w-64" />
                            <Button variant="ghost" size="icon">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </header>
                <main className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Welcome to SideNav</h1>
                    <p>This is the main content area. The sidebar can be toggled using the menu button in the header.</p>
                </main>
            </div>
        </div>
    )
}

function SearchFocusedNavbar() {
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    return (
        <nav className="bg-white dark:bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <AnimatePresence>
                        {!isSearchFocused && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center space-x-4"
                            >
                                <Package className="h-8 w-8" />
                                <span className="text-xl font-bold">SearchNav</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="flex-1 mx-4">
                        <div className="relative">
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full"
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                            />
                            <Button variant="ghost" size="icon" className="absolute right-0 top-0">
                                <Search className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {!isSearchFocused && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="hidden md:flex space-x-4"
                            >
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                    Home
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                    Categories
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                    Deals
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                    Contact
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
}

function AnimatedHamburgerNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-300`

    return (
        <nav className="bg-white dark:bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Package className="h-8 w-8" />
                    <span className="text-xl font-bold">AnimatedNav</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                        Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                        About
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                        Services
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                        Contact
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        className="flex flex-col h-12 w-12 justify-center items-center group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            className={`${genericHamburgerLine} ${isOpen
                                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                        <div
                            className={`${genericHamburgerLine} ${isOpen
                                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

function StickyNavbarWithProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scroll = `${totalScroll / windowHeight}`

            setScrollProgress(parseFloat(scroll))
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <Package className="h-8 w-8" />
                        <span className="text-xl font-bold">StickyNav</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Home
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            About
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Services
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="h-1 bg-gray-200 dark:bg-gray-700">
                <div
                    className="h-1 bg-blue-500"
                    style={{
                        width: `${scrollProgress * 100}%`,
                        transition: "width 0.2s ease-in-out",
                    }}
                />
            </div>
        </nav>
    )
}

function MultiLevelDropdownNavbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    const menuItems = [
        {
            name: "Products",
            submenu: [
                {
                    name: "Software",
                    submenu: ["Web Apps", "Mobile Apps", "Desktop Apps"],
                },
                {
                    name: "Hardware",
                    submenu: ["Laptops", "Desktops", "Accessories"],
                },
            ],
        },
        {
            name: "Services",
            submenu: [
                {
                    name: "Consulting",
                    submenu: ["IT Strategy", "Digital Transformation", "Cybersecurity"],
                },
                {
                    name: "Support",
                    submenu: ["24/7 Helpdesk", "On-site Support", "Remote Assistance"],
                },
            ],
        },
        { name: "About" },
        { name: "Contact" },
    ]

    const renderSubmenu = (items: any[], level = 0) => (
        <ul className={`${level === 0 ? "absolute left-0" : "absolute left-full"} top-0 mt-2 space-y-2 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2`}>
            {items.map((item) => (
                <li key={item.name} className="relative group">
                    {typeof item === "string" ? (
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                            {item}
                        </a>
                    ) : (
                        <>
                            <a
                                href="#"
                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                            >
                                {item.name}
                                {item.submenu && <ChevronRight className="h-4 w-4 ml-2" />}
                            </a>
                            {item.submenu && renderSubmenu(item.submenu, level + 1)}
                        </>
                    )}
                </li>
            ))}
        </ul>
    )

    return (
        <nav className="bg-white dark:bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Package className="h-8 w-8" />
                        <span className="text-xl font-bold">MultiLevelNav</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                    {item.name}
                                </button>
                                <AnimatePresence>
                                    {activeDropdown === item.name && item.submenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {renderSubmenu(item.submenu)}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function AnimatedLogoNavbar() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <nav className="bg-white dark:bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div
                        className="flex items-center space-x-2"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.div
                            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Package className="h-8 w-8" />
                        </motion.div>
                        <motion.span
                            className="text-xl font-bol

d"
                            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            AnimatedLogo
                        </motion.span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Home
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            About
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Services
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                            Contact
                        </a>
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}