'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell, MessageCircle, Search, Send, Paperclip, MoreVertical, Phone, Video, User, Smile, X, ChevronRight, MoreHorizontal } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Title } from '@/components/demo/Title'
import { AnimatePresence, motion } from 'framer-motion'



// chat layout 1
const renderChatLayoutOne = () => {
    const [selectedChat, setSelectedChat] = useState(null)
    const [messageInput, setMessageInput] = useState('')

    const chats = [
        { id: 1, name: 'John Doe', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Hey, how are you?', time: '5m ago', unread: 2 },
        { id: 2, name: 'Sarah Connor', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'The project is due tomorrow', time: '1h ago', unread: 0 },
        { id: 3, name: 'Tech Support', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Your ticket has been resolved', time: '1d ago', unread: 1 },
        { id: 4, name: 'Jane Smith', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Lunch at 1 PM?', time: '2d ago', unread: 0 },
        { id: 5, name: 'Team Channel', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'New announcement from HR', time: '3d ago', unread: 5 },
    ]

    const renderChatList = () => (
        <Card className="h-full">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Chats</CardTitle>
                    <Button variant="ghost" size="icon">
                        <MessageCircle className="h-4 w-4" />
                    </Button>
                </div>
                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search chats" className="pl-8" />
                </div>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px]">
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            className={`flex items-center space-x-4 p-4 cursor-pointer hover:bg-accent ${selectedChat === chat.id ? 'bg-accent' : ''}`}
                            onClick={() => setSelectedChat(chat.id)}
                        >
                            <Avatar>
                                <AvatarImage src={chat.avatar} alt={chat.name} />
                                <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <p className="text-sm font-medium">{chat.name}</p>
                                <p className="text-xs text-gray-500">{chat.lastMessage}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-xs text-gray-500">{chat.time}</p>
                                {chat.unread > 0 && (
                                    <Badge variant="destructive" className="mt-1">{chat.unread}</Badge>
                                )}
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    )

    const renderChatWindow = () => {
        const chat = chats.find(c => c.id === selectedChat)
        if (!chat) return null

        return (
            <Card className="h-full flex flex-col">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={chat.avatar} alt={chat.name} />
                                <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{chat.name}</CardTitle>
                                <CardDescription>Online</CardDescription>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                                <Phone className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Video className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Chat Options</DropdownMenuLabel>
                                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Search in Conversation</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                                    <DropdownMenuItem>Block User</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                    <ScrollArea className="h-[300px] pr-4">
                        {/* Placeholder messages */}
                        <div className="space-y-4">
                            <div className="flex justify-start">
                                <div className="bg-accent rounded-lg p-2 max-w-[70%]">
                                    <p className="text-sm">Hey, how's it going?</p>
                                    <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%]">
                                    <p className="text-sm">Hi! I'm doing well, thanks. How about you?</p>
                                    <p className="text-xs text-primary-foreground/70 mt-1">10:32 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-start">
                                <div className="bg-accent rounded-lg p-2 max-w-[70%]">
                                    <p className="text-sm">I'm good too. Did you finish the project?</p>
                                    <p className="text-xs text-gray-500 mt-1">10:33 AM</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%]">
                                    <p className="text-sm">Yes, I just submitted it. Can you review it when you have a chance?</p>
                                    <p className="text-xs text-primary-foreground/70 mt-1">10:35 AM</p>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter>
                    <form className="flex space-x-2 w-full" onSubmit={(e) => e.preventDefault()}>
                        <Button variant="outline" size="icon">
                            <Paperclip className="h-4 w-4" />
                        </Button>
                        <Input
                            placeholder="Type a message"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            className="flex-grow"
                        />
                        <Button type="submit">
                            <Send className="h-4 w-4 mr-2" />
                            Send
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        )
    }

    return (
        <>
            <div className="grid grid-cols-3 gap-6 h-[600px]">
                <div className="col-span-1">
                    {renderChatList()}
                </div>
                <div className="col-span-2">
                    {renderChatWindow()}
                </div>
            </div>
        </>
    )
}

//  chat layout 2
const renderChatLayoutTwo = () => {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'John', content: 'Hey, how are you?', time: '10:00 AM' },
        { id: 2, sender: 'You', content: 'I\'m good, thanks! How about you?', time: '10:05 AM' },
        { id: 3, sender: 'John', content: 'Doing well! Did you finish the project?', time: '10:10 AM' },
        { id: 4, sender: 'You', content: 'Yes, I just submitted it. Can you review when you have a chance?', time: '10:15 AM' },
    ])
    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        if (input.trim()) {
            setMessages([...messages, { id: messages.length + 1, sender: 'You', content: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }])
            setInput('')
        }
    }

    return (
        <div className="flex h-[600px]  mx-auto border border-border rounded-lg overflow-hidden">
            <div className="w-1/3 border-r border-border bg-background">
                <div className="p-4 border-b border-border">
                    <Input placeholder="Search chats" className="w-full" />
                </div>
                <ScrollArea className="h-[calc(600px-65px)]">
                    {['John', 'Alice', 'Bob', 'Carol'].map((name, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 hover:bg-accent cursor-pointer">
                            <Avatar>
                                <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={name} />
                                <AvatarFallback>{name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <h3 className="font-semibold">{name}</h3>
                                <p className="text-sm text-muted-foreground">Last message...</p>
                            </div>
                            <span className="text-xs text-muted-foreground">12:34 PM</span>
                        </div>
                    ))}
                </ScrollArea>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John" />
                            <AvatarFallback>J</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="font-semibold">John</h2>
                            <p className="text-xs text-muted-foreground">Online</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                    </div>
                </div>
                <ScrollArea className="flex-1 p-4">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'} mb-4`}>
                            <div className={`max-w-[70%] p-3 rounded-lg ${message.sender === 'You' ? 'bg-primary text-primary-foreground' : 'bg-accent'}`}>
                                <p className="text-sm">{message.content}</p>
                                <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                            </div>
                        </div>
                    ))}
                </ScrollArea>
                <form onSubmit={sendMessage} className="flex items-center gap-2 p-4 border-t border-border">
                    <Button type="button" variant="ghost" size="icon"><Paperclip className="h-4 w-4" /></Button>
                    <Input
                        placeholder="Type a message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1"
                    />
                    <Button type="button" variant="ghost" size="icon"><Smile className="h-4 w-4" /></Button>
                    <Button type="submit"><Send className="h-4 w-4" /></Button>
                </form>
            </div>
        </div>
    )
}

// notif inbox layout
const renderInbox = () => {
    const notifications = [
        { id: 1, type: 'message', content: 'New message from John Doe', time: '5m ago', read: false },
        { id: 2, type: 'like', content: 'Sarah liked your post', time: '1h ago', read: false },
        { id: 3, type: 'comment', content: 'New comment on your photo', time: '2h ago', read: true },
        { id: 4, type: 'friend', content: 'Friend request from Jane Smith', time: '1d ago', read: true },
        { id: 5, type: 'system', content: 'System maintenance scheduled', time: '2d ago', read: true },
    ]

    const renderNotificationIcon = (type) => {
        switch (type) {
            case 'message':
                return <MessageCircle className="h-6 w-6 text-blue-500" />
            case 'like':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-red-500">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            case 'comment':
                return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-500">
                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                </svg>
            case 'friend':
                return <User className="h-4 w-4 text-purple-500" />
            default:
                return <Bell className="h-4 w-4 text-gray-500" />
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Stay updated with your latest activities</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px]">
                    {notifications.map((notification) => (
                        <div key={notification.id} className={`flex items-center space-x-4 p-4 ${notification.read ? 'opacity-50' : ''}`}>
                            <div className="flex-shrink-0">
                                {renderNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-grow">
                                <p className="text-sm font-medium">{notification.content}</p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                            {!notification.read && (
                                <Badge variant="secondary" className='bg-green-500 text-white'>New</Badge>
                            )}
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    )
}


//  bell notification
const BellNotif = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(5);
    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
                <Bell className="h-7 w-7" />
                {count > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {count}
                    </span>
                )}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-background border border-border rounded-md shadow-lg z-10">
                    <div className="p-4 border-b border-border">
                        <h3 className="text-lg font-semibold">Notifications</h3>
                    </div>
                    <ul className="divide-y divide-border">
                        <li className="p-4 hover:bg-accent cursor-pointer">
                            <p className="text-sm">New message from John Doe</p>
                            <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
                        </li>
                        <li className="p-4 hover:bg-accent cursor-pointer">
                            <p className="text-sm">You have a new follower</p>
                            <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
                        </li>
                    </ul>
                    <div className="p-4 border-t border-border">
                        <button className="w-full text-center text-sm text-primary hover:underline">
                            View all notifications
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

const BellNotifTwo = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(3)

    const notifications = [
        { id: 1, title: "New message", description: "You have a new message from Alice", time: "2 minutes ago" },
        { id: 2, title: "Meeting reminder", description: "Team standup in 15 minutes", time: "15 minutes ago" },
        { id: 3, title: "Task completed", description: "Project X has been marked as complete", time: "1 hour ago" },
    ]

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
                <Bell className="h-6 w-6" />
                {count > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                        {count}
                    </span>
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-3 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                    >
                        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Notifications</h3>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                            {notifications.map((notification) => (
                                <motion.div
                                    key={notification.id}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                            <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                                        </div>
                                        <span className="text-xs text-gray-400">{notification.time}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="p-4 bg-gray-50">
                            <button className="w-full text-center text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center">
                                View all notifications
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}


const BellNotifThree = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(3)

    const notifications = [
        { id: 1, icon: User, title: "New follower", description: "John Doe started following you", time: "2 minutes ago" },
        { id: 2, icon: User, title: "Event reminder", description: "Team building event tomorrow", time: "1 hour ago" },
        { id: 3, icon: User, title: "New email", description: "You have 5 unread emails", time: "3 hours ago" },
    ]

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 bg-blue-500 text-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-[360deg] scale-110' : ''
                    }`}
            >
                <Bell className="h-6 w-6" />
                {count > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white animate-pulse">
                        {count}
                    </span>
                )}
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-4 bg-blue-500 text-white flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Notifications</h3>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                            {notifications.map((notification) => (
                                <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors">
                                    <div className="flex items-start space-x-3">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <notification.icon className="h-5 w-5 text-blue-500" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                            <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-gray-50">
                            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm font-medium">
                                View all notifications
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}


const BellNotifFour = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(2)
    const dropdownRef = useRef(null)

    const notifications = [
        { id: 1, content: "New message from Sarah", time: "Just now", read: false },
        { id: 2, content: "You have a new task assigned", time: "1 hour ago", read: false },
        { id: 3, content: "Weekly report is ready", time: "Yesterday", read: true },
    ]

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full transition-all duration-200"
            >
                <Bell className="h-6 w-6" />
                {count > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-blue-500 rounded-full">
                        {count}
                    </span>
                )}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                    <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-3 hover:bg-gray-50 transition-colors duration-200 ${notification.read ? 'opacity-50' : ''}`}
                            >
                                <p className="text-sm text-gray-800">{notification.content}</p>
                                <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 bg-gray-50 text-center">
                        <button className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                            View all
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

const BellNotifFive = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(4)

    const notifications = [
        { id: 1, type: 'like', content: "Alice liked your post", time: "5 minutes ago", icon: User, color: "text-pink-500" },
        { id: 2, type: 'comment', content: "Bob commented on your photo", time: "1 hour ago", icon: MessageCircle, color: "text-green-500" },
        { id: 3, type: 'follow', content: "Charlie started following you", time: "2 hours ago", icon: MessageCircle, color: "text-blue-500" },
        { id: 4, type: 'like', content: "David liked your comment", time: "1 day ago", icon: MessageCircle, color: "text-pink-500" },
    ]

    const handleAction = (type, id) => {
        console.log(`Action ${type} on notification ${id}`)
        setCount(count - 1)
        // Here you would typically update the notification status in your backend
    }

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <Bell className="h-6 w-6" />
                {count > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full border-2 border-white">
                        {count}
                    </span>
                )}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200">
                    <div className="p-4 bg-gray-50 flex justify-between items-center border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700">Notifications</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto p-2 space-y-2">
                        {notifications.map((notification) => (
                            <div key={notification.id} className="bg-white rounded-lg shadow p-4 transition-all duration-200 hover:shadow-md">
                                <div className="flex items-start space-x-3">
                                    <div className={`${notification.color} bg-opacity-10 p-2 rounded-full`}>
                                        <notification.icon className={`h-5 w-5 ${notification.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-800">{notification.content}</p>
                                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                    </div>
                                </div>
                                <div className="mt-3 flex justify-end space-x-2">
                                    <button
                                        onClick={() => handleAction('dismiss', notification.id)}
                                        className="px-2 py-1 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
                                    >

                                        Dismiss
                                    </button>
                                    <button
                                        onClick={() => handleAction(notification.type, notification.id)}
                                        className="px-2 py-1 text-xs text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors duration-200"
                                    >
                                        {notification.type === 'like' ? 'Like back' : notification.type === 'comment' ? 'Reply' : 'Follow back'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm font-medium">
                            View all notifications
                        </button>
                    </div>
                </div>
            )}
        </div>
    )

}

const BellNotifSix = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(3)

    const notifications = [
        { id: 1, title: "New message", description: "Alice sent you a message", time: "2 minutes ago" },
        { id: 2, title: "Meeting reminder", description: "Team standup in 15 minutes", time: "15 minutes ago" },
        { id: 3, title: "Task update", description: "Bob completed the project", time: "1 hour ago" },
    ]

    return (
        <div className="">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg"
                aria-label="Notifications"
            >
                <Bell className="h-6 w-6" />

            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className=" w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex justify-between items-center">
                            <h3 className="text-lg font-semibold">Notifications</h3>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200" aria-label="Close notifications">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                            {notifications.map((notification) => (
                                <motion.div
                                    key={notification.id}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                                    <p className="text-xs text-gray-500 mt-1">{notification.description}</p>
                                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="p-4 bg-gray-50">
                            <button className="w-full text-center text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center justify-center group">
                                View all notifications
                                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}

const BellNotifSeven = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(5)

    const notifications = [
        { id: 1, icon: User, color: 'bg-blue-500', label: 'Messages' },
        { id: 2, icon: User, color: 'bg-green-500', label: 'Events' },
        { id: 3, icon: User, color: 'bg-yellow-500', label: 'Friends' },
        { id: 4, icon: User, color: 'bg-purple-500', label: 'Settings' },
    ]

    return (
        <div className="">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 bg-gray-800 text-white rounded-full shadow-lg z-50 relative"
                aria-label="Notifications"
            >
                <Bell className="h-6 w-6" />
                {count > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                        {count}
                    </span>
                )}
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        {notifications.map((notification, index) => (
                            <motion.button
                                key={notification.id}
                                className={`absolute p-3 rounded-full text-white shadow-lg ${notification.color}`}
                                initial={{ x: 0, y: 0 }}
                                animate={{
                                    x: Math.cos((index * 2 * Math.PI) / notifications.length - Math.PI / 2) * 80,
                                    y: Math.sin((index * 2 * Math.PI) / notifications.length - Math.PI / 2) * 80,
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={notification.label}
                            >
                                <notification.icon className="h-6 w-6" />
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const BellNotifEight = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(3)

    const notifications = [
        { id: 1, title: "New message", description: "You have a new message from John", time: "2 minutes ago", color: "bg-blue-100 border-blue-300" },
        { id: 2, title: "Meeting reminder", description: "Your meeting starts in 30 minutes", time: "30 minutes ago", color: "bg-yellow-100 border-yellow-300" },
        { id: 3, title: "Task completed", description: "Project X has been marked as complete", time: "1 hour ago", color: "bg-green-100 border-green-300" },
    ]

    return (
        <div className="">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 bg-white text-gray-800 rounded-full shadow-lg"
                aria-label="Notifications"
            >
                <Bell className="h-6 w-6" />
                {/* {count > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                        {count}
                    </span>
                )} */}
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className=" w-80 space-y-4"
                    >
                        {notifications.map((notification, index) => (
                            <motion.div
                                key={notification.id}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-4 rounded-lg shadow-lg ${notification.color} border`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800">{notification.title}</h4>
                                        <p className="text-xs text-gray-600 mt-1">{notification.description}</p>
                                        <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                                    </div>
                                    <button
                                        onClick={() => setCount(count - 1)}
                                        className="text-gray-400 hover:text-gray-600"
                                        aria-label="Dismiss notification"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}

const BellNotifTen = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(4)

    const notifications = [
        { id: 1, title: "New follower", description: "John Doe started following you", time: "2 minutes ago" },
        { id: 2, title: "Comment on your post", description: "Alice left a comment on your post", time: "1 hour ago" },
        { id: 3, title: "New like", description: "Your photo received a new like", time: "3 hours ago" },
        { id: 4, title: "System update", description: "A new system update is available", time: "1 day ago" },
    ]

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className=" p-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Notifications"
            >
                <Bell className="h-6 w-6" />

            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600"
                                aria-label="Close notifications"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            {notifications.map((notification) => (
                                <motion.div
                                    key={notification.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-4 bg-gray-50 rounded-lg"
                                >
                                    <h3 className="text-sm font-semibold text-gray-800">{notification.title}</h3>
                                    <p className="text-xs text-gray-600 mt-1">{notification.description}</p>
                                    <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                                </motion.div>
                            ))}
                        </div>
                        <button className="mt-6 w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center">
                            View all
                            <ChevronRight className="h-4 w-4 ml-2" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

const NotificationAndMessaging = () => {
    const [activeTab, setActiveTab] = useState('inbox')
    return (
        <div className="container mx-auto py-2">
            <div className='flex flex-col w-full text-center gap-5 mb-20 bg-slate-200 p-20'>
                <Title name="Screen Notification And Messaging" />
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
                <TabsList className="grid w-full grid-cols-2 bg-gray-200">
                    <TabsTrigger value="inbox" className="flex items-center">
                        <Bell className="w-4 h-4 mr-2" />
                        Inbox
                    </TabsTrigger>
                    <TabsTrigger value="chat" className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="inbox" className="mt-6">
                    {renderInbox()}
                    <div className='flex justify-center pt-20 space-x-10'>
                        <BellNotif />
                        <BellNotifTwo />
                        <BellNotifThree />
                        <BellNotifFour />
                        <BellNotifFive />
                        <BellNotifSix />
                        <BellNotifSeven />
                        <BellNotifEight />
                        <BellNotifTen />
                    </div>
                </TabsContent>
                <TabsContent value="chat" className="mt-6 ">
                    <div className='w-full pt-10'>
                        {renderChatLayoutOne()}
                    </div>
                    <div className='w-full pt-20'>
                        {renderChatLayoutTwo()}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default NotificationAndMessaging