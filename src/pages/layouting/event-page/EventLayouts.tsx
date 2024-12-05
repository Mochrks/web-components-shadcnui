'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Title } from '@/components/demo/Title'

// Dummy data for event items
const eventItems = [
    {
        id: 1,
        title: 'TechConf 2024',
        date: '2024-06-15',
        time: '09:00 AM - 05:00 PM',
        location: 'San Francisco Convention Center',
        description: 'Join us for the biggest tech conference of the year, featuring keynotes from industry leaders and hands-on workshops.',
        image: 'https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg',
        schedule: [
            { time: '09:00 AM', title: 'Registration and Breakfast' },
            { time: '10:00 AM', title: 'Keynote: The Future of AI' },
            { time: '11:30 AM', title: 'Workshop: Building Scalable Apps' },
            { time: '01:00 PM', title: 'Lunch Break' },
            { time: '02:00 PM', title: 'Panel: Cybersecurity Challenges' },
            { time: '03:30 PM', title: 'Networking Session' },
            { time: '05:00 PM', title: 'Closing Remarks' },
        ],
    },
    {
        id: 2,
        title: 'Green Earth Expo',
        date: '2024-07-22',
        time: '10:00 AM - 06:00 PM',
        location: 'Central Park, New York',
        description: 'Explore sustainable living solutions and learn about the latest environmental technologies at this eco-friendly event.',
        image: 'https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg',
        schedule: [
            { time: '10:00 AM', title: 'Exhibition Opens' },
            { time: '11:00 AM', title: 'Seminar: Renewable Energy' },
            { time: '01:00 PM', title: 'Eco-friendly Cooking Demo' },
            { time: '03:00 PM', title: 'Panel: Climate Action' },
            { time: '05:00 PM', title: 'Closing Ceremony' },
        ],
    },
    {
        id: 3,
        title: 'Global Business Forum',
        date: '2024-09-10',
        time: '08:30 AM - 04:30 PM',
        location: 'London Business Center',
        description: 'Connect with industry leaders and gain insights into emerging market trends at this premier business networking event.',
        image: 'https://img.freepik.com/premium-vector/trendy-event-banner-template_85212-590.jpg',
        schedule: [
            { time: '08:30 AM', title: 'Registration and Networking' },
            { time: '09:30 AM', title: 'Opening Address' },
            { time: '10:30 AM', title: 'Keynote: Global Economic Outlook' },
            { time: '12:00 PM', title: 'Lunch and Networking' },
            { time: '01:30 PM', title: 'Panel: Innovation in Finance' },
            { time: '03:00 PM', title: 'Breakout Sessions' },
            { time: '04:30 PM', title: 'Closing Remarks' },
        ],
    },
]

// Component 1: Modern Card Layout
const ModernCardLayout = () => {
    return (
        <div className="bg-gradient-to-br from-purple-100 to-indigo-100  py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventItems.map((event) => (
                        <motion.div
                            key={event.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span>{event.location}</span>
                                </div>
                                <p className="text-gray-700 mb-4">{event.description}</p>
                                <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300">
                                    Register Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Component 2: Timeline Layout
const TimelineLayout = () => {
    return (
        <div className="bg-gray-100  py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Event Timeline</h1>
                <div className="relative">
                    {eventItems.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className="mb-8 flex justify-between items-center w-full"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className={`w-6/12 ${index % 2 === 0 ? 'text-right px-5' : 'order-1 px-5'}`}>
                                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                                <p className="text-gray-600 mb-2">{event.date}</p>
                                <p className="text-gray-700">{event.description}</p>
                            </div>

                            <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : ''}`}>
                                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
                            </div>
                        </motion.div>
                    ))}
                    <div className="absolute h-full w-1 bg-indigo-300 left-1/2 transform -translate-x-1/2 top-0"></div>
                </div>
            </div>
        </div>
    )
}

// Component 3: Interactive Schedule Layout
const InteractiveScheduleLayout = () => {
    const [selectedEvent, setSelectedEvent] = useState(eventItems[0])
    const [expandedSessions, setExpandedSessions] = useState({})

    const toggleSession = (index) => {
        setExpandedSessions((prev) => ({ ...prev, [index]: !prev[index] }))
    }

    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Event Schedule</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4">Select Event</h2>
                            {eventItems.map((event) => (
                                <motion.button
                                    key={event.id}
                                    className={`w-full text-left p-4 rounded-lg mb-2 ${selectedEvent.id === event.id ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                    onClick={() => setSelectedEvent(event)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {event.title}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <motion.div
                            key={selectedEvent.id}
                            className="bg-white rounded-lg shadow-lg p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-3xl font-semibold mb-4">{selectedEvent.title}</h2>
                            <div className="flex items-center text-gray-600 mb-2">
                                <Calendar className="w-5 h-5 mr-2" />
                                <span>{selectedEvent.date}</span>
                            </div>
                            <div className="flex items-center text-gray-600 mb-4">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>{selectedEvent.location}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Schedule</h3>
                            {selectedEvent.schedule.map((session, index) => (
                                <motion.div
                                    key={index}
                                    className="mb-4 bg-gray-50 rounded-lg p-4 cursor-pointer"
                                    onClick={() => toggleSession(index)}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-semibold">{session.time}</p>
                                            <p>{session.title}</p>
                                        </div>
                                        {expandedSessions[index] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </div>
                                    <AnimatePresence>
                                        {expandedSessions[index] && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-2 text-gray-600"
                                            >
                                                <p>Additional details about this session would go here.</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Component 4: Immersive Hero Layout
const ImmersiveHeroLayout = () => {
    const [activeTab, setActiveTab] = useState('about')

    return (
        <div className="min-h-screen pt-20">
            <h1 className="text-4xl font-bold text-center mb-12">Event Heros</h1>
            <div className="relative h-screen">
                <img src={eventItems[0].image} alt={eventItems[0].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {eventItems[0].title}
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {eventItems[0].date} | {eventItems[0].location}
                        </motion.p>
                        <motion.button
                            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register Now
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className="bg-slate-300 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center mb-8">
                        <button
                            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('about')}
                        >
                            About
                        </button>
                        <button
                            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'schedule' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('schedule')}
                        >
                            Schedule
                        </button>
                        <button
                            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'speakers' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            onClick={() => setActiveTab('speakers')}
                        >
                            Speakers
                        </button>
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === 'about' && (
                                <div className="max-w-2xl mx-auto">
                                    <h2 className="text-3xl font-bold mb-4">About the Event</h2>
                                    <p className="text-gray-700">{eventItems[0].description}</p>
                                </div>
                            )}
                            {activeTab === 'schedule' && (
                                <div className="max-w-2xl mx-auto">
                                    <h2 className="text-3xl font-bold mb-4">Event Schedule</h2>
                                    {eventItems[0].schedule.map((session, index) => (
                                        <div key={index} className="mb-4">
                                            <p className="font-semibold">{session.time}</p>
                                            <p>{session.title}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'speakers' && (
                                <div className="max-w-2xl mx-auto">
                                    <h2 className="text-3xl font-bold mb-4">Featured Speakers</h2>
                                    <p className="text-gray-700">Information about speakers would go here.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

// Component 5: Multi-Event Dashboard
const MultiEventDashboard = () => {
    const [selectedEvent, setSelectedEvent] = useState(null)

    return (
        <div className="bg-blue-500  py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 text-white">Event Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                            {eventItems.map((event) => (
                                <motion.div
                                    key={event.id}
                                    className={`p-4 rounded-lg mb-4 cursor-pointer ${selectedEvent?.id === event.id ? 'bg-blue-100' : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                    onClick={() => setSelectedEvent(event)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <h3 className="font-semibold">{event.title}</h3>
                                    <p className="text-sm text-gray-600">{event.date}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        {selectedEvent ? (
                            <motion.div
                                key={selectedEvent.id}
                                className="bg-white rounded-lg shadow-lg p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-3xl font-semibold mb-4">{selectedEvent.title}</h2>
                                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    <span>{selectedEvent.date}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <span>{selectedEvent.time}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    <span>{selectedEvent.location}</span>
                                </div>
                                <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
                                <h3 className="text-xl font-semibold mb-4">Schedule</h3>
                                {selectedEvent.schedule.map((session, index) => (
                                    <div key={index} className="mb-2">
                                        <span className="font-semibold">{session.time}</span> - {session.title}
                                    </div>
                                ))}
                                <div className="mt-8 flex justify-between items-center">
                                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                                        Register
                                    </button>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-2 text-gray-600" />
                                        <span className="text-gray-600">250 attendees</span>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center h-full">
                                <p className="text-xl text-gray-500">Select an event to view details</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}


// new component

const events = [
    {
        id: 1,
        title: "AI & Machine Learning Summit",
        date: "2024-08-15",
        time: "09:00 AM - 06:00 PM",
        location: "Tech Hub, Silicon Valley",
        description: "Explore the latest advancements in AI and machine learning with industry experts.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Technology",
        attendees: 500,
        speakers: [
            { name: "Dr. Jane Smith", role: "AI Research Lead", avatar: "https://i.pravatar.cc/150?img=1" },
            { name: "John Doe", role: "ML Engineer", avatar: "https://i.pravatar.cc/150?img=2" },
        ],
        sessions: [
            { title: "Opening Keynote", time: "09:00 AM", speaker: "Dr. Jane Smith" },
            { title: "Future of Natural Language Processing", time: "10:30 AM", speaker: "John Doe" },
            { title: "AI Ethics Panel", time: "02:00 PM", speaker: "Panel Discussion" },
        ]
    },
    {
        id: 2,
        title: "Sustainable Energy Conference",
        date: "2024-09-22",
        time: "10:00 AM - 05:00 PM",
        location: "Green Convention Center, Berlin",
        description: "Join leaders in sustainable energy to discuss innovative solutions for a greener future.",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Environment",
        attendees: 350,
        speakers: [
            { name: "Emma Green", role: "Renewable Energy Expert", avatar: "https://i.pravatar.cc/150?img=3" },
            { name: "Michael Brown", role: "Climate Scientist", avatar: "https://i.pravatar.cc/150?img=4" },
        ],
        sessions: [
            { title: "The Future of Solar Energy", time: "10:00 AM", speaker: "Emma Green" },
            { title: "Innovations in Wind Power", time: "01:30 PM", speaker: "Michael Brown" },
            { title: "Panel: Policy and Sustainable Energy", time: "03:30 PM", speaker: "Panel Discussion" },
        ]
    },
    {
        id: 3,
        title: "Global Finance Forum",
        date: "2024-10-05",
        time: "08:30 AM - 04:30 PM",
        location: "World Trade Center, New York",
        description: "Discuss the future of global finance, cryptocurrencies, and economic trends.",
        image: "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "Finance",
        attendees: 600,
        speakers: [
            { name: "Sarah Johnson", role: "Fintech Innovator", avatar: "https://i.pravatar.cc/150?img=5" },
            { name: "Robert Chang", role: "Cryptocurrency Expert", avatar: "https://i.pravatar.cc/150?img=6" },
        ],
        sessions: [
            { title: "The Rise of Decentralized Finance", time: "09:00 AM", speaker: "Sarah Johnson" },
            { title: "Global Economic Outlook", time: "11:00 AM", speaker: "Robert Chang" },
            { title: "Blockchain in Banking", time: "02:00 PM", speaker: "Panel Discussion" },
        ]
    },
]

// Component 1: Interactive Event Map
const InteractiveEventMap = () => {
    const [selectedEvent, setSelectedEvent] = useState(null)

    return (
        <div className="bg-gradient-to-br from-purple-900 to-indigo-100  py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 text-white">Event Map</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-lg shadow-lg p-6 h-[600px] relative">
                            <img src="/placeholder.svg?height=600&width=800" alt="Event Map" className="w-full h-full object-cover rounded-lg" />
                            {events.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    className="absolute cursor-pointer"
                                    style={{ top: `${20 + index * 30}%`, left: `${20 + index * 30}%` }}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => setSelectedEvent(event)}
                                >
                                    <div className="bg-white rounded-full p-2 shadow-lg">
                                        <MapPin className="w-6 h-6 text-indigo-500" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <AnimatePresence mode="wait">
                            {selectedEvent ? (
                                <motion.div
                                    key={selectedEvent.id}
                                    className="bg-white rounded-lg shadow-lg p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-2xl font-semibold mb-4">{selectedEvent.title}</h2>
                                    <div className="flex items-center text-gray-600 mb-2">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span>{selectedEvent.date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 mb-2">
                                        <Clock className="w-4 h-4 mr-2" />
                                        <span>{selectedEvent.time}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>{selectedEvent.location}</span>
                                    </div>
                                    <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
                                    <Button className="w-full">Register Now</Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center h-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <p className="text-xl text-gray-500">Select an event on the map</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Component 2: Event Countdown Timer
const EventCountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 12, minutes: 45, seconds: 0 })

    // In a real application, you'd use useEffect to update the timer
    // For this example, we'll just use static data

    return (
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Next Big Event</h1>
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>{events[0].title}</CardTitle>
                        <CardDescription>{events[0].description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between items-center">
                            {Object.entries(timeLeft).map(([unit, value]) => (
                                <div key={unit} className="text-center">
                                    <div className="text-4xl font-bold">{value}</div>
                                    <div className="text-sm text-gray-500">{unit}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Learn More</Button>
                        <Button>Register Now</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

// Component 3: Event Search and Filter
const EventSearchAndFilter = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = ["All", "Technology", "Environment", "Finance"]

    const filteredEvents = events.filter(event =>
        (selectedCategory === "All" || event.category === selectedCategory) &&
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="bg-gradient-to-br from-green-100 to-blue-100  py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Find Your Next Event</h1>
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-grow">
                        <Input
                            type="text"
                            placeholder="Search events..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="flex gap-2">
                        {categories.map(category => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map(event => (
                        <Card key={event.id}>
                            <CardHeader>
                                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-t-lg" />
                            </CardHeader>
                            <CardContent>
                                <CardTitle>{event.title}</CardTitle>
                                <CardDescription>{event.description}</CardDescription>
                                <div className="flex items-center mt-4">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    <span className="text-sm text-gray-500">{event.date}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span className="text-sm text-gray-500">{event.location}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">View Details</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Component 4: Event Agenda Builder
const EventAgendaBuilder = () => {
    const [selectedSessions, setSelectedSessions] = useState([])

    const toggleSession = (session) => {
        setSelectedSessions(prev =>
            prev.some(s => s.title === session.title)
                ? prev.filter(s => s.title !== session.title)
                : [...prev, session]
        )
    }

    return (
        <div className="bg-gradient-to-br from-yellow-100 to-orange-100  py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Build Your Agenda</h1>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <Card>
                            <CardHeader>
                                <CardTitle>{events[0].title} Sessions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {events[0].sessions.map((session, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border-b last:border-b-0">
                                        <div>
                                            <h3 className="font-semibold">{session.title}</h3>
                                            <p className="text-sm text-gray-500">{session.time} - {session.speaker}</p>
                                        </div>
                                        <Button
                                            variant={selectedSessions.some(s => s.title === session.title) ? "default" : "outline"}
                                            onClick={() => toggleSession(session)}
                                        >
                                            {selectedSessions.some(s => s.title === session.title) ? "Remove" : "Add"}
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                    <div className="lg:w-1/3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Your Agenda</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {selectedSessions.length > 0 ? (

                                    selectedSessions.map((session, index) => (
                                        <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
                                            <h3 className="font-semibold">{session.title}</h3>
                                            <p className="text-sm text-gray-500">{session.time}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No sessions added yet</p>
                                )}
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" disabled={selectedSessions.length === 0}>
                                    Save Agenda
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Component 5: Event Networking Hub
const EventNetworkingHub = () => {
    const [activeTab, setActiveTab] = useState("attendees")

    const attendees = [
        { name: "Alice Johnson", role: "Software Engineer", company: "Tech Co", avatar: "https://i.pravatar.cc/150?img=1" },
        { name: "Bob Smith", role: "Product Manager", company: "Innovate Inc", avatar: "https://i.pravatar.cc/150?img=2" },
        { name: "Carol Williams", role: "Data Scientist", company: "AI Solutions", avatar: "https://i.pravatar.cc/150?img=3" },
    ]

    return (
        <div className="bg-gradient-to-br from-blue-100 to-purple-100  py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Event Networking Hub</h1>
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <Tabs defaultValue="attendees" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="attendees" onClick={() => setActiveTab("attendees")}>Attendees</TabsTrigger>
                                <TabsTrigger value="schedule" onClick={() => setActiveTab("schedule")}>Schedule</TabsTrigger>
                                <TabsTrigger value="messages" onClick={() => setActiveTab("messages")}>Messages</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </CardHeader>
                    <CardContent>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTab === "attendees" && (
                                    <div className="space-y-4">
                                        {attendees.map((attendee, index) => (
                                            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                                <Avatar>
                                                    <AvatarImage src={attendee.avatar} />
                                                    <AvatarFallback>{attendee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="font-semibold">{attendee.name}</h3>
                                                    <p className="text-sm text-gray-500">{attendee.role} at {attendee.company}</p>
                                                </div>
                                                <Button variant="outline" className="ml-auto">Connect</Button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {activeTab === "schedule" && (
                                    <div className="space-y-4">
                                        {events[0].sessions.map((session, index) => (
                                            <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                                <h3 className="font-semibold">{session.title}</h3>
                                                <p className="text-sm text-gray-500">{session.time} - {session.speaker}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {activeTab === "messages" && (
                                    <div className="text-center py-8">
                                        <p className="text-gray-500">No messages yet</p>
                                        <Button className="mt-4">Start a Conversation</Button>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default function EventLayouts() {
    return (
        <div>
            <div className="p-20 bg-slate-200 my-4">
                <Title name="Screen Event " />
            </div>
            <ModernCardLayout />
            <TimelineLayout />
            <InteractiveScheduleLayout />
            <ImmersiveHeroLayout />
            <MultiEventDashboard />
            <InteractiveEventMap />
            <EventCountdownTimer />
            <EventSearchAndFilter />
            <EventAgendaBuilder />
            <EventNetworkingHub />
        </div>
    )
}