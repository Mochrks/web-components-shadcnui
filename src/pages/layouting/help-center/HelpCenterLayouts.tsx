import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, ChevronRight, Mail, Phone, MessageCircle, Book, HelpCircle, ArrowRight, User, Star, ThumbsUp, ThumbsDown, Send, Paperclip, Video, Calendar, Clock, ExternalLink, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Title } from '@/components/demo/Title'

// Dummy data for help articles and FAQs
const helpArticles = [
    { id: 1, title: 'Getting Started Guide', category: 'Basics', content: 'This guide will help you get started with our platform...' },
    { id: 2, title: 'How to Reset Your Password', category: 'Account', content: 'If you forgot your password, follow these steps...' },
    { id: 3, title: 'Troubleshooting Common Issues', category: 'Support', content: 'Here are solutions to common problems you might encounter...' },
    { id: 4, title: 'Billing and Subscription FAQ', category: 'Billing', content: 'Find answers to frequently asked questions about billing...' },
    { id: 5, title: 'Advanced Features Tutorial', category: 'Features', content: 'Learn how to use our advanced features...' },
]


// 1. AI-Powered Chatbot
const AIPoweredChatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I assist you today?", sender: "bot" },
    ])
    const [input, setInput] = useState("")

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: input, sender: "user" }])
            setInput("")
            // Simulate AI response
            setTimeout(() => {
                setMessages(prev => [...prev, { id: prev.length + 1, text: "I'm processing your request. How else can I help you?", sender: "bot" }])
            }, 1000)
        }
    }

    return (
        <Card className="w-full  mx-auto">
            <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>Get instant help from our AI chatbot</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] overflow-y-auto">
                {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div className={`max-w-[70%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                            {message.text}
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="flex gap-2">
                <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend}><Send className="w-4 h-4" /></Button>
            </CardFooter>
        </Card>
    )
}

// 2. Interactive Troubleshooter
const InteractiveTroubleshooter = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [resolved, setResolved] = useState(false)

    const steps = [
        { question: "Is your device turned on?", yes: 1, no: "Make sure your device is powered on." },
        { question: "Is the Wi-Fi connected?", yes: 2, no: "Connect to a Wi-Fi network and try again." },
        { question: "Have you tried restarting the app?", yes: 3, no: "Restart the app and see if the issue persists." },
        { question: "Is your app updated to the latest version?", yes: "Contact support", no: "Update your app and try again." },
    ]

    const handleAnswer = (answer) => {
        if (answer === 'yes') {
            if (typeof steps[currentStep].yes === 'number') {
                setCurrentStep(steps[currentStep].yes)
            } else {
                setResolved(true)
            }
        } else {
            setResolved(true)
        }
    }

    return (
        <Card className="w-full mx-auto mt-5 p-5">
            <CardHeader>
                <CardTitle>Interactive Troubleshooter</CardTitle>
                <CardDescription>Let's solve your problem step by step</CardDescription>
            </CardHeader>
            <CardContent>
                {!resolved ? (
                    <div className="space-y-4">
                        <p className="text-lg font-medium">{steps[currentStep].question}</p>
                        <div className="flex gap-4">
                            <Button onClick={() => handleAnswer('yes')}>Yes</Button>
                            <Button variant="outline" onClick={() => handleAnswer('no')}>No</Button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-lg font-medium mb-4">
                            {typeof steps[currentStep].yes === 'string' ? steps[currentStep].yes : steps[currentStep].no}
                        </p>
                        <Button onClick={() => { setCurrentStep(0); setResolved(false); }}>Start Over</Button>
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full" />
            </CardFooter>
        </Card>
    )
}

// 3. Video Tutorial Library
const VideoTutorialLibrary = () => {
    const tutorials = [
        { id: 1, title: "Getting Started", duration: "5:30", thumbnail: "https://img.freepik.com/free-psd/education-template-design_23-2151095367.jpg" },
        { id: 2, title: "Advanced Features", duration: "10:15", thumbnail: "https://img.freepik.com/free-psd/education-template-design_23-2151095367.jpg" },
        { id: 3, title: "Troubleshooting Guide", duration: "7:45", thumbnail: "https://img.freepik.com/free-psd/education-template-design_23-2151095367.jpg" },
        { id: 4, title: "Tips and Tricks", duration: "8:20", thumbnail: "https://img.freepik.com/free-psd/education-template-design_23-2151095367.jpg" },
    ]

    return (
        <Card className="w-full  mx-auto mt-5 p-5 ">
            <CardHeader>
                <CardTitle>Video Tutorial Library</CardTitle>
                <CardDescription>Learn through our comprehensive video guides</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tutorials.map((tutorial) => (
                        <div key={tutorial.id} className="group relative">
                            <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full rounded-lg" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="secondary">
                                    <Play className="w-6 h-6 mr-2" />
                                    Watch Now
                                </Button>
                            </div>
                            <h3 className="mt-2 font-semibold">{tutorial.title}</h3>
                            <p className="text-sm text-gray-500">{tutorial.duration}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

// 4. Knowledge Base Search
const KnowledgeBaseSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = () => {
        const results = helpArticles.filter(article =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setSearchResults(results)
    }

    return (
        <Card className="w-full mt-5 p-5  mx-auto">
            <CardHeader>
                <CardTitle>Knowledge Base</CardTitle>
                <CardDescription>Search our extensive knowledge base for answers</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2 mb-4">
                    <Input
                        placeholder="Search for help..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Button onClick={handleSearch}>Search</Button>
                </div>
                <div className="space-y-4">
                    {searchResults.map((article) => (
                        <Card key={article.id}>
                            <CardHeader>
                                <CardTitle>{article.title}</CardTitle>
                                <Badge>{article.category}</Badge>
                            </CardHeader>
                            <CardContent>
                                <p>{article.content.substring(0, 150)}...</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline">Read More</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

// 5. Community Forum
const CommunityForum = () => {
    const forumPosts = [
        { id: 1, title: "How to integrate API?", author: "JohnDoe", replies: 5, views: 120 },
        { id: 2, title: "Best practices for data security", author: "JaneSmith", replies: 8, views: 200 },
        { id: 3, title: "Troubleshooting login issues", author: "TechGuru", replies: 3, views: 80 },
    ]

    return (
        <Card className="w-full mt-5 p-5 mx-auto">
            <CardHeader>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>Connect with other users and share knowledge</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {forumPosts.map((post) => (
                        <Card key={post.id}>
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <CardDescription>Posted by {post.author}</CardDescription>
                            </CardHeader>
                            <CardFooter className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <span>{post.replies} replies</span>
                                    <span>{post.views} views</span>
                                </div>
                                <Button variant="outline">View Thread</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Start a New Discussion</Button>
            </CardFooter>
        </Card>
    )
}

// 6. Feedback and Suggestions
const FeedbackAndSuggestions = () => {
    const [feedback, setFeedback] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle feedback submission
        console.log("Feedback submitted:", feedback)
        setFeedback("")
    }

    return (
        <Card className="w-full p-5 mt-5  mx-auto">
            <CardHeader>
                <CardTitle>Feedback and Suggestions</CardTitle>
                <CardDescription>Help us improve our product</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Textarea
                        placeholder="Share your thoughts, ideas, or report issues..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="mb-4"
                    />
                    <Button type="submit" className="w-full">Submit Feedback</Button>
                </form>
            </CardContent>
        </Card>
    )
}

// 7. Interactive Product Tour
const InteractiveProductTour = () => {
    const [currentStep, setCurrentStep] = useState(0)

    const steps = [
        { title: "Welcome", content: "Welcome to our product tour! Let's explore the key features." },
        { title: "Dashboard", content: "This is your dashboard. Here you can see an overview of your account." },
        { title: "Projects", content: "Create and manage your projects in this section." },
        { title: "Reports", content: "Generate detailed reports and analytics here." },
        { title: "Settings", content: "Customize your account settings in this area." },
    ]

    return (
        <Card className="w-full p-5 mt-5 mx-auto">
            <CardHeader>
                <CardTitle>Interactive Product Tour</CardTitle>
                <CardDescription>Step {currentStep + 1} of {steps.length}</CardDescription>
            </CardHeader>
            <CardContent>
                <h3 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h3>
                <p>{steps[currentStep].content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">

                <Button
                    variant="outline"
                    onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                    disabled={currentStep === 0}
                >
                    Previous
                </Button>
                <Button
                    onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                    disabled={currentStep === steps.length - 1}
                >
                    {currentStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
            </CardFooter>
        </Card>
    )
}

// 8. Live Support Queue
const LiveSupportQueue = () => {
    const [inQueue, setInQueue] = useState(false)
    const [queuePosition, setQueuePosition] = useState(0)

    const joinQueue = () => {
        setInQueue(true)
        setQueuePosition(Math.floor(Math.random() * 10) + 1) // Simulate random queue position
    }

    return (
        <Card className="w-full mt-5 p-5 mx-auto">
            <CardHeader>
                <CardTitle>Live Support</CardTitle>
                <CardDescription>Get help from our support team in real-time</CardDescription>
            </CardHeader>
            <CardContent>
                {inQueue ? (
                    <div className="text-center">
                        <p className="text-2xl font-bold mb-2">Your position in queue:</p>
                        <p className="text-4xl font-bold text-blue-500 mb-4">{queuePosition}</p>
                        <p>Estimated wait time: {queuePosition * 2} minutes</p>
                    </div>
                ) : (
                    <p className="text-center mb-4">Click below to join the live support queue</p>
                )}
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={joinQueue} disabled={inQueue}>
                    {inQueue ? "In Queue" : "Join Live Support Queue"}
                </Button>
            </CardFooter>
        </Card>
    )
}

// 9. Help Center Dashboard
const HelpCenterDashboard = () => {
    return (
        <Card className="w-full p-5 mt-5 mx-auto">
            <CardHeader>
                <CardTitle>Help Center Dashboard</CardTitle>
                <CardDescription>Quick access to all support resources</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Knowledge Base</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Search our extensive library of help articles</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Explore</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Video Tutorials</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Watch step-by-step guide videos</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Watch</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Community Forum</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Connect with other users and share knowledge</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Join</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Live Chat</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Get real-time assistance from our support team</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Chat Now</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>FAQs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Find quick answers to common questions</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">View FAQs</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Reach out to our support team directly</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Contact</Button>
                        </CardFooter>
                    </Card>
                </div>
            </CardContent>
        </Card>
    )
}

// 10. Contextual Help Overlay
const ContextualHelpOverlay = () => {
    const [activeHelp, setActiveHelp] = useState(null)

    const helpItems = [
        { id: 'dashboard', title: 'Dashboard Overview', content: 'This is your main dashboard. Here you can see an overview of your account activity and quick links to main features.' },
        { id: 'projects', title: 'Projects Section', content: 'Manage all your projects here. You can create new projects, view project status, and access project details.' },
        { id: 'reports', title: 'Reports Generator', content: 'Generate various reports about your account activity, project progress, and team performance.' },
    ]

    return (
        <Card className="w-full mt-5 p-5 mx-auto">
            <CardHeader>
                <CardTitle>Contextual Help Overlay</CardTitle>
                <CardDescription>Get help for specific areas of the application</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {helpItems.map((item) => (
                        <div key={item.id} className="relative p-4 border rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">Simulated content area</p>
                            <Button
                                variant="outline"
                                size="sm"
                                className="absolute top-2 right-2"
                                onClick={() => setActiveHelp(item.id)}
                            >
                                <HelpCircle className="w-4 h-4" />
                            </Button>
                            {activeHelp === item.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 right-0 mt-2 p-4 bg-gray-200 border rounded-lg shadow-lg z-10"
                                >
                                    <h4 className="font-semibold mb-2">{item.title} Help</h4>
                                    <p>{item.content}</p>
                                    <Button size="sm" className="mt-2" onClick={() => setActiveHelp(null)}>Close</Button>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default function HelpCenterLayouts() {
    return (
        <div className="space-y-12 p-8">
            <div className="p-20 bg-slate-200 my-4">
                <Title name="Screen Help Center " />
            </div>
            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    Chat AI help Assistant
                </h2>
                <AIPoweredChatbot />
            </div>
            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    InteractiveTroubleshooter
                </h2>
                <InteractiveTroubleshooter />
            </div>
            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    VideoTutorialLibrary
                </h2>
                <VideoTutorialLibrary />
            </div>

            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    KnowledgeBaseSearch
                </h2>
                <KnowledgeBaseSearch />
            </div>
            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    CommunityForum
                </h2>
                <CommunityForum />
            </div>
            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    FeedbackAndSuggestions
                </h2>
                <FeedbackAndSuggestions />
            </div>

            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    InteractiveProductTour
                </h2>
                <InteractiveProductTour />
            </div>
            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    LiveSupport
                </h2>
                <LiveSupportQueue />
            </div>
            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    HelpCenterDashboard
                </h2>
                <HelpCenterDashboard />
            </div>
            <div className='mt-4'>
                <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    ContextualHelpOverlay
                </h2>
                <ContextualHelpOverlay />
            </div>
        </div>
    )
}