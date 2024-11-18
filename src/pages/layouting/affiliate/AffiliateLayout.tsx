'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    BarChart, DollarSign, Users, Link, FileText, HelpCircle,
    ChevronRight, Copy, Download, ExternalLink
} from 'lucide-react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function AffiliateLayout() {
    const [activeTab, setActiveTab] = useState('dashboard')

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <div className="flex-1 flex">
                <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="flex-1 p-6">
                    {activeTab === 'dashboard' && <Dashboard />}
                    {activeTab === 'register' && <RegistrationForm />}
                    {activeTab === 'commissions' && <CommissionTracker />}
                    {activeTab === 'materials' && <MarketingMaterials />}
                    {activeTab === 'profile' && <AffiliateProfile />}
                    {activeTab === 'support' && <SupportCenter />}
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
                <h1 className="text-2xl font-bold text-gray-900">Affiliate Program</h1>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>AF</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}

function Navigation({ activeTab, setActiveTab }) {
    const navItems = [
        { name: 'Dashboard', key: 'dashboard', icon: BarChart },
        { name: 'Register', key: 'register', icon: Users },
        { name: 'Commissions', key: 'commissions', icon: DollarSign },
        { name: 'Marketing Materials', key: 'materials', icon: FileText },
        { name: 'Profile', key: 'profile', icon: Users },
        { name: 'Support', key: 'support', icon: HelpCircle },
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
            <h2 className="text-2xl font-bold">Welcome, Affiliate!</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1,234.56</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Referrals</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">123</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5.67%</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pending Payout</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$567.89</div>
                    </CardContent>
                </Card>
            </div>
            <PerformanceChart />
            <LeaderboardTable />
        </div>
    )
}

function RegistrationForm() {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Affiliate Registration</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <Input id="firstName" placeholder="John" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <Input id="lastName" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                        <Input id="website" placeholder="https://yourwebsite.com" />
                    </div>
                    <div>
                        <label htmlFor="niche" className="block text-sm font-medium text-gray-700">Niche</label>
                        <Input id="niche" placeholder="e.g., Technology, Fashion, Health" />
                    </div>
                    <Button className="w-full">Register as Affiliate</Button>
                </form>
            </CardContent>
        </Card>
    )
}

function CommissionTracker() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Commission Tracker</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Commissions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Commission</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { date: '2023-05-01', product: 'Product A', commission: '$50.00', status: 'Paid' },
                                { date: '2023-05-03', product: 'Product B', commission: '$75.00', status: 'Pending' },
                                { date: '2023-05-05', product: 'Product C', commission: '$100.00', status: 'Processing' },
                            ].map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell>{item.product}</TableCell>
                                    <TableCell>{item.commission}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <PaymentHistory />
        </div>
    )
}

function PerformanceChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
                    <p className="text-gray-500">Performance Chart Placeholder</p>
                </div>
            </CardContent>
        </Card>
    )
}

function PaymentHistory() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Method</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { date: '2023-04-30', amount: '$500.00', method: 'PayPal' },
                            { date: '2023-03-31', amount: '$750.00', method: 'Bank Transfer' },
                            { date: '2023-02-28', amount: '$600.00', method: 'PayPal' },
                        ].map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>{item.method}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

function MarketingMaterials() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Marketing Materials</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Banners</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="bg-gray-200 h-20 rounded flex items-center justify-center">
                                Banner 1 (468x60)
                            </div>
                            <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
                                Banner 2 (300x250)
                            </div>
                        </div>
                        <Button className="mt-4">
                            <Download className="mr-2 h-4 w-4" /> Download All Banners
                        </Button>
                    </CardContent>
                </Card>
                <ReferralLinks />
            </div>
        </div>
    )
}

function ReferralLinks() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Referral Links</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Homepage</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <Input value="https://example.com/?ref=your_id" readOnly />
                            <Button className="ml-2">
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Page</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <Input value="https://example.com/product?ref=your_id" readOnly />
                            <Button className="ml-2">
                                <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function AffiliateProfile() {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Affiliate Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                            <AvatarFallback>AF</AvatarFallback>
                        </Avatar>
                        <Button>Change Avatar</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <Input id="firstName" defaultValue="John" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <Input id="lastName" defaultValue="Doe" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                        <Input id="website" defaultValue="https://johndoe.com" />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium  text-gray-700">Bio</label>
                        <Input id="bio" defaultValue="Passionate affiliate marketer specializing in tech products." />
                    </div>
                    <Button>Update Profile</Button>
                </form>
            </CardContent>
        </Card>
    )
}

function LeaderboardTable() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Rank</TableHead>
                            <TableHead>Affiliate</TableHead>
                            <TableHead>Earnings</TableHead>
                            <TableHead>Conversions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { rank: 1, name: 'Jane Smith', earnings: '$5,234', conversions: 156 },
                            { rank: 2, name: 'Mike Johnson', earnings: '$4,567', conversions: 134 },
                            { rank: 3, name: 'Sarah Brown', earnings: '$3,890', conversions: 112 },
                        ].map((item) => (
                            <TableRow key={item.rank}>
                                <TableCell>{item.rank}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.earnings}</TableCell>
                                <TableCell>{item.conversions}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

function SupportCenter() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Support Center</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="general" className="w-full">
                        <TabsList>
                            <TabsTrigger value="general">General</TabsTrigger>
                            <TabsTrigger value="commissions">Commissions</TabsTrigger>
                            <TabsTrigger value="technical">Technical</TabsTrigger>
                        </TabsList>
                        <TabsContent value="general">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold">How do I become an affiliate?</h3>
                                    <p>To become an affiliate, simply fill out the registration form in the "Register" section.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">What are the terms of the affiliate program?</h3>
                                    <p>Please refer to our Terms and Conditions page for detailed information about our affiliate program.</p>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="commissions">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold">How are commissions calculated?</h3>
                                    <p>Commissions are calculated based on the sales generated through your unique referral link.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">When do I get paid?</h3>
                                    <p>Payments are processed on a monthly basis, typically on the 1st of each month for the previous month's earnings.</p>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="technical">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold">How do I implement the referral links?</h3>
                                    <p>Simply copy the referral link provided in the "Marketing Materials" section and use it in your promotions.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Are there any plugins available for easy integration?</h3>
                                    <p>Yes, we offer plugins for popular platforms. Check the "Marketing Materials" section for more information.</p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Contact Support</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <Input id="subject" placeholder="Enter the subject of your inquiry" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <Input id="message" placeholder="Describe your issue or question" />
                        </div>
                        <Button>Submit Ticket</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

function TermsAndConditions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="prose max-w-none">
                    <h3>1. Acceptance of Terms</h3>
                    <p>By participating in our affiliate program, you agree to these terms and conditions.</p>

                    <h3>2. Commission Structure</h3>
                    <p>Affiliates earn a 10% commission on all qualified sales generated through their unique referral link.</p>

                    <h3>3. Payment Terms</h3>
                    <p>Payments are processed monthly for earnings exceeding $100. Amounts below $100 will be rolled over to the next payment cycle.</p>

                    <h3>4. Prohibited Activities</h3>
                    <p>Affiliates must not engage in spamming, false advertising, or any illegal activities while promoting our products.</p>

                    <h3>5. Termination</h3>
                    <p>We reserve the right to terminate any affiliate account for violation of these terms or for any other reason at our discretion.</p>
                </div>
            </CardContent>
        </Card>
    )
}

function Footer() {
    return (
        <footer className="bg-gray-100 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">&copy; 2023 Affiliate Program. All rights reserved.</p>
                <div className="flex space-x-4">
                    <Button variant="link" size="sm">Privacy Policy</Button>
                    <Button variant="link" size="sm" onClick={() => document.getElementById('terms').scrollIntoView()}>Terms & Conditions</Button>
                </div>
            </div>
        </footer>
    )
}