'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    LayoutGrid, FileText, Image, Video, Menu, Bell, Search,
    Home, FileIcon, FolderIcon, Tag, Users, MessageSquare,
    Settings, BarChart, Search as SEOIcon, Package
} from 'lucide-react'
import { Title } from '@/components/demo/Title'

export default function CMSLayout() {
    const [activeSection, setActiveSection] = useState('dashboard')

    const navItems = [
        { name: 'Dashboard', icon: Home, key: 'dashboard' },
        { name: 'Articles', icon: FileText, key: 'articles' },
        { name: 'Pages', icon: FileIcon, key: 'pages' },
        { name: 'Media', icon: LayoutGrid, key: 'media' },
        { name: 'Categories', icon: FolderIcon, key: 'categories' },
        { name: 'Tags', icon: Tag, key: 'tags' },
        { name: 'Users', icon: Users, key: 'users' },
        { name: 'Comments', icon: MessageSquare, key: 'comments' },
        { name: 'Settings', icon: Settings, key: 'settings' },
        { name: 'Analytics', icon: BarChart, key: 'analytics' },
        { name: 'SEO', icon: SEOIcon, key: 'seo' },
        { name: 'Plugins', icon: Package, key: 'plugins' },
    ]

    return (
        <>
            <div className="p-20 bg-slate-200 my-4">
                <Title name="Screen CMS " />
            </div>
            <div className="flex h-screen bg-gray-100">

                {/* Sidebar Component */}
                <aside className="w-64 bg-white shadow-md overflow-y-auto">
                    <div className="p-4">
                        <h1 className="text-2xl font-bold text-gray-800">CMS Dashboard</h1>
                    </div>
                    <nav className="mt-6">
                        {navItems.map((item) => (
                            <Button
                                key={item.key}
                                variant={activeSection === item.key ? "secondary" : "ghost"}
                                className="w-full justify-start"
                                onClick={() => setActiveSection(item.key)}
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.name}
                            </Button>
                        ))}
                    </nav>
                </aside>

                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header Component */}
                    <header className="bg-white shadow-sm z-10">
                        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                            </Button>
                            <div className="flex items-center">
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="max-w-sm mr-2"
                                />
                                <Button size="icon" variant="ghost">
                                    <Search className="h-5 w-5" />
                                </Button>
                            </div>
                            <div className="flex items-center">
                                <Button size="icon" variant="ghost" className="mr-2">
                                    <Bell className="h-5 w-5" />
                                </Button>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </header>

                    {/* Main Content Component */}
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                        <div className="container mx-auto px-6 py-8">
                            <h3 className="text-gray-700 text-3xl font-medium mb-6">
                                {navItems.find(item => item.key === activeSection)?.name}
                            </h3>

                            {activeSection === 'dashboard' && <DashboardComponent />}
                            {activeSection === 'articles' && <ArticleManager />}
                            {activeSection === 'pages' && <PagesComponent />}
                            {activeSection === 'media' && <MediaManager />}
                            {activeSection === 'categories' && <CategoriesComponent />}
                            {activeSection === 'tags' && <TagsComponent />}
                            {activeSection === 'users' && <UsersComponent />}
                            {activeSection === 'comments' && <CommentsComponent />}
                            {activeSection === 'settings' && <SettingsComponent />}
                            {activeSection === 'analytics' && <AnalyticsComponent />}
                            {activeSection === 'seo' && <SEOComponent />}
                            {activeSection === 'plugins' && <PluginsComponent />}
                        </div>
                    </main>
                </div>
            </div>
        </>)
}

// Dashboard Component
function DashboardComponent() {
    return (
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {['Total Posts', 'Total Pages', 'Total Users', 'Total Comments'].map((title, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{Math.floor(Math.random() * 1000)}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

// Article Manager Component
function ArticleManager() {
    return (
        <div className="mt-8">
            <Button className="mb-4">
                <FileText className="mr-2 h-4 w-4" /> New Article
            </Button>
            <div className="grid gap-6 mb-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Latest Articles</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {['Article 1', 'Article 2', 'Article 3'].map((article, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span>{article}</span>
                                    <Button variant="outline" size="sm">Edit</Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Article Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <p>Total Articles: 50</p>
                            <p>Published: 45</p>
                            <p>Drafts: 5</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

// Pages Component
function PagesComponent() {
    return (
        <div className="mt-8">
            <Button className="mb-4">
                <FileIcon className="mr-2 h-4 w-4" /> New Page
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>All Pages</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {['Home', 'About', 'Contact', 'Services'].map((page, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <span>{page}</span>
                                <Button variant="outline" size="sm">Edit</Button>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

// Media Manager Component
function MediaManager() {
    return (
        <div className="mt-8">
            <Tabs defaultValue="images" className="w-full">
                <TabsList>
                    <TabsTrigger value="images">Images</TabsTrigger>
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                </TabsList>
                <TabsContent value="images">
                    <div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                        {[...Array(12)].map((_, index) => (
                            <Card key={index}>
                                <CardContent className="p-2">
                                    <div className="aspect-square bg-gray-200 rounded-md flex items-center justify-center">
                                        <Image className="h-8 w-8 text-gray-400" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="videos">
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {[...Array(8)].map((_, index) => (
                            <Card key={index}>
                                <CardContent className="p-2">
                                    <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
                                        <Video className="h-8 w-8 text-gray-400" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

// Categories Component
function CategoriesComponent() {
    return (
        <div className="mt-8">
            <Button className="mb-4">
                <FolderIcon className="mr-2 h-4 w-4" /> New Category
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {['Technology', 'Travel', 'Food', 'Lifestyle'].map((category, index) => (
                            <li key={index} className="flex justify-between items-center">
                                <span>{category}</span>
                                <div>
                                    <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                                    <Button variant="outline" size="sm">Delete</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

// Tags Component
function TagsComponent() {
    return (
        <div className="mt-8">
            <Button className="mb-4">
                <Tag className="mr-2 h-4 w-4" /> New Tag
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python', 'Design'].map((tag, index) => (
                            <div key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                                {tag}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

// Users Component
function UsersComponent() {
    return (
        <div className="mt-8">
            <Button className="mb-4">
                <Users className="mr-2 h-4 w-4" /> New User
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {['John Doe', 'Jane Smith', 'Bob Johnson'].map((user, index) => (
                            <li key={index} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback>{user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <span className="ml-4">{user}</span>
                                </div>
                                <Button variant="outline" size="sm">Edit</Button>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

// Comments Component
function CommentsComponent() {
    return (
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Comments</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {['Great article!', 'Thanks for sharing', 'I have a question...'].map((comment, index) => (
                            <li key={index} className="flex items-start justify-between">
                                <div>
                                    <p className="font-medium">User {index + 1}</p>
                                    <p className="text-sm text-gray-500">{comment}</p>
                                </div>
                                <Button variant="outline" size="sm">Approve</Button>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

// Settings Component
function SettingsComponent() {
    return (
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="site-title" className="block text-sm font-medium text-gray-700">Site Title</label>
                            <Input id="site-title" defaultValue="My Awesome CMS" />
                        </div>
                        <div>
                            <label htmlFor="site-description" className="block text-sm font-medium text-gray-700">Site Description</label>
                            <Input id="site-description" defaultValue="A powerful content management system" />
                        </div>
                        <Button>Save Changes</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

// Analytics Component
function AnalyticsComponent() {
    return (
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Site Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-medium">Page Views</h4>
                            <p className="text-3xl  font-bold">10,234</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Unique Visitors</h4>
                            <p className="text-3xl font-bold">5,678</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Bounce Rate</h4>
                            <p className="text-3xl font-bold">45%</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

// SEO Component
function SEOComponent() {
    return (
        <div className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700">Meta Title</label>
                            <Input id="meta-title" placeholder="Enter meta title" />
                        </div>
                        <div>
                            <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700">Meta Description</label>
                            <Input id="meta-description" placeholder="Enter meta description" />
                        </div>
                        <div>
                            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Keywords</label>
                            <Input id="keywords" placeholder="Enter keywords, separated by commas" />
                        </div>
                        <Button>Update SEO Settings</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

// Plugins Component
function PluginsComponent() {
    return (
        <div className="mt-8">
            <Button className="mb-4">
                <Package className="mr-2 h-4 w-4" /> Add New Plugin
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>Installed Plugins</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {['SEO Optimizer', 'Social Media Sharing', 'Contact Form'].map((plugin, index) => (
                            <li key={index} className="flex items-center justify-between">
                                <span>{plugin}</span>
                                <div>
                                    <Button variant="outline" size="sm" className="mr-2">Settings</Button>
                                    <Button variant="outline" size="sm">Deactivate</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}