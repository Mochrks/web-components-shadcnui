'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
    BarChart, MessageCircle, Ticket, FileQuestion, Users,
    Phone, Mail, MessageSquare, Star, Bell, Search, Send
} from 'lucide-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Title } from '@/components/demo/Title'

export default function CustomerSupportLayout() {
    const [activeTab, setActiveTab] = useState('dashboard')

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="p-20 bg-slate-200 my-4">
                <Title name="Screen Customer Support " />
            </div>
            <Header />
            <div className="flex-1 flex">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="flex-1 p-6">
                    {activeTab === 'dashboard' && <Dashboard />}
                    {activeTab === 'tickets' && <TicketList />}
                    {activeTab === 'live-chat' && <LiveChat />}
                    {activeTab === 'knowledge-base' && <KnowledgeBase />}
                    {activeTab === 'contact' && <ContactInformation />}
                </main>
            </div>
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Customer Support</h1>
                <div className="flex items-center space-x-4">
                    <NotificationCenter />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}

function Navigation({ activeTab, setActiveTab }) {
    const navItems = [
        { name: 'Dashboard', key: 'dashboard', icon: BarChart },
        { name: 'Tickets', key: 'tickets', icon: Ticket },
        { name: 'Live Chat', key: 'live-chat', icon: MessageCircle },
        { name: 'Knowledge Base', key: 'knowledge-base', icon: FileQuestion },
        { name: 'Contact', key: 'contact', icon: Phone },
    ]

    return (
        <nav className="w-64 bg-white shadow-sm">
            <div className="p-4 space-y-2">
                {navItems.map((item) => (
                    <Button
                        key={item.key}
                        variant={activeTab === item.key ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveTab(item.key)}
                    >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.name}
                    </Button>
                ))}
            </div>
        </nav>
    )
}

function Dashboard() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Support Dashboard</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
                        <Ticket className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">423</div>
                        <p className="text-xs text-muted-foreground">-5% from last week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3.2 hours</div>
                        <p className="text-xs text-muted-foreground">-12% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4.5/5</div>
                        <p className="text-xs text-muted-foreground">+0.3 from last quarter</p>
                    </CardContent>
                </Card>
            </div>
            <SupportTeam />
        </div>
    )
}

function TicketList() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Support Tickets</h2>
                <CreateTicketForm />
            </div>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { id: 'T-1001', subject: 'Login Issue', status: 'Open', created: '2023-05-01' },
                            { id: 'T-1002', subject: 'Billing Question', status: 'In Progress', created: '2023-05-02' },
                            { id: 'T-1003', subject: 'Feature Request', status: 'Closed', created: '2023-05-03' },
                        ].map((ticket) => (
                            <TableRow key={ticket.id}>
                                <TableCell>{ticket.id}</TableCell>
                                <TableCell>{ticket.subject}</TableCell>
                                <TableCell>
                                    <Badge variant={ticket.status === 'Open' ? 'destructive' : ticket.status === 'In Progress' ? 'default' : 'secondary'}>
                                        {ticket.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{ticket.created}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" onClick={() => alert(`View details for ticket ${ticket.id}`)}>View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}

function TicketDetails() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Ticket Details - T-1001</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold">Subject</h3>
                    <p>Login Issue</p>
                </div>
                <div>
                    <h3 className="font-semibold">Description</h3>
                    <p>I'm unable to log in to my account. It keeps saying "Invalid credentials" even though I'm sure my password is correct.</p>
                </div>
                <div>
                    <h3 className="font-semibold">Status</h3>
                    <Badge>Open</Badge>
                </div>
                <div>
                    <h3 className="font-semibold">Created</h3>
                    <p>2023-05-01 14:30</p>
                </div>
                <div>
                    <h3 className="font-semibold">Responses</h3>
                    <div className="space-y-2">
                        <div className="bg-gray-100 p-2 rounded">
                            <p className="font-semibold">Support Agent (2023-05-01 15:00)</p>
                            <p>Have you tried resetting your password?</p>
                        </div>
                        <div className="bg-gray-100 p-2 rounded">
                            <p className="font-semibold">Customer (2023-05-01 15:30)</p>
                            <p>Yes, I've tried that but it didn't work.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold">Add Response</h3>
                    <Textarea placeholder="Type your response here..." />
                    <Button className="mt-2">Send Response</Button>
                </div>
            </CardContent>
        </Card>
    )
}

function CreateTicketForm() {
    return (
        <Button onClick={() => {
            // This would typically open a modal or navigate to a new page
            alert("Open create ticket form")
        }}>
            Create New Ticket
        </Button>
    )
}

function LiveChat() {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Live Chat</h2>
            <Card className="flex-grow flex flex-col">
                <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
                    <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-2 max-w-[70%]">
                            <p className="text-sm">Hello! How can I help you today?</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-blue-100 rounded-lg p-2 max-w-[70%]">
                            <p className="text-sm">Hi, I'm having trouble with my recent order.</p>
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-2 max-w-[70%]">
                            <p className="text-sm">I'm sorry to hear that. Can you please provide your order number?</p>
                        </div>
                    </div>
                </CardContent>
                <div className="p-4 border-t">
                    <div className="flex space-x-2">
                        <Input placeholder="Type your message..." className="flex-grow" />
                        <Button size="icon">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

function KnowledgeBase() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Knowledge Base</h2>
            <div className="mb-4">
                <Input placeholder="Search articles..." />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {['Getting Started', 'Account Management', 'Billing', 'Product Features', 'Troubleshooting', 'API Documentation'].map((category) => (
                    <Card key={category}>
                        <CardHeader>
                            <CardTitle>{category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Article 1</li>
                                <li>Article 2</li>
                                <li>Article 3</li>
                            </ul>
                            <Button variant="link" className="mt-2">View All</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

function FAQSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                        <AccordionContent>
                            You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                        <AccordionContent>
                            We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express) and PayPal. For business accounts, we also offer invoicing options.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How can I cancel my subscription?</AccordionTrigger>
                        <AccordionContent>
                            You can cancel your subscription at any time from your account settings. Navigate to the "Billing" section and click on "Cancel Subscription". Your access will remain active until the end of your current billing period.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

function ContactInformation() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl  font-bold">Contact Us</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Customer Support</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>+1 (800) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>support@example.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MessageSquare className="h-4 w-4" />
                            <span>Live Chat (24/7)</span>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Business Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                        <p>Sunday: Closed</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

function SupportTeam() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Support Team</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                    {['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'].map((name) => (
                        <div key={name} className="flex flex-col items-center">
                            <Avatar className="h-12 w-12">
                                <AvatarFallback>{name[0]}</AvatarFallback>
                            </Avatar>
                            <span className="mt-1 text-sm font-medium">{name}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

function Feedback() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Help Us Improve</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-4">How would you rate your experience with our support team?</p>
                <div className="flex space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <Button key={rating} variant="outline" size="icon">
                            <Star className={`h-4 w-4 ${rating <= 3 ? 'text-gray-400' : 'text-yellow-400'}`} />
                        </Button>
                    ))}
                </div>
                <Textarea placeholder="Any additional feedback?" className="mb-4" />
                <Button>Submit Feedback</Button>
            </CardContent>
        </Card>
    )
}

function NotificationCenter() {
    return (
        <div className="relative">
            <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
            </Button>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
            </span>
        </div>
    )
}

function Footer() {
    return (
        <footer className="bg-gray-100 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">&copy; 2023 Your Company. All rights reserved.</p>
                <div className="flex space-x-4">
                    <Button variant="link" size="sm">Privacy Policy</Button>
                    <Button variant="link" size="sm">Terms of Service</Button>
                </div>
            </div>
        </footer>
    )
}