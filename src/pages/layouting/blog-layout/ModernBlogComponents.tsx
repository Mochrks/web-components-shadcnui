import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun, Clock, MessageCircle, Heart } from 'lucide-react'
import { Title } from '@/components/demo/Title'

// Sample blog data
const blogPosts = [
    { id: 1, title: "The Future of AI in Web Development", author: "Alice Johnson", date: "2023-05-15", category: "Technology", content: "Artificial Intelligence is revolutionizing the way we build and interact with websites...", image: "https://innovation.co.id/wp-content/uploads/2023/05/what-is-mtech-in-artificial-int-20230214023008.jpg", likes: 120, comments: 15 },
    { id: 2, title: "10 Must-Know JavaScript Tricks", author: "Bob Smith", date: "2023-05-10", category: "Programming", content: "Boost your JavaScript skills with these 10 essential tricks that every developer should know...", image: "https://blog.msbu.co.id/wp-content/uploads/2024/01/WhatsApp-Image-2024-05-31-at-1.51.25-PM-6.jpeg", likes: 85, comments: 8 },
    { id: 3, title: "The Rise of Sustainable Web Design", author: "Carol Williams", date: "2023-05-05", category: "Design", content: "Learn how sustainable web design practices are shaping the future of the internet...", image: "https://idwebhost.com/blog/wp-content/uploads/2018/05/Cara-Membuat-Web-Desain-untuk-Pemula-1.png", likes: 95, comments: 12 },
    { id: 4, title: "Building Scalable React Applications", author: "David Brown", date: "2023-04-30", category: "React", content: "Discover best practices for building large-scale React applications that can grow with your business...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNd9sl2NNYIjB0AV7_j5pyKazln2M0cMomtw&s", likes: 110, comments: 20 },
    { id: 5, title: "The Power of CSS Grid Layout", author: "Eva Martinez", date: "2023-04-25", category: "CSS", content: "Unlock the full potential of CSS Grid Layout and create stunning, responsive designs...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLelCLwAQfSVzRB9uxamLQ5INq_dEEL0FcLA&s", likes: 75, comments: 6 },
]

// 1. Grid Layout with Card Hover Effect
const GridLayout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
                <motion.div
                    key={post.id}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <CardTitle className="mt-4">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-gray-500 mb-2">{post.date} | {post.category}</p>
                            <p className="line-clamp-3">{post.content}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Avatar>
                                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={post.author} />
                                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium">{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Heart className="h-4 w-4" />
                                <span className="text-sm">{post.likes}</span>
                                <MessageCircle className="h-4 w-4 ml-2" />
                                <span className="text-sm">{post.comments}</span>
                            </div>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

// 2. Masonry Layout with Infinite Scroll
const MasonryLayout = () => {
    const [posts, setPosts] = useState(blogPosts)
    const [loading, setLoading] = useState(false)

    const loadMorePosts = () => {
        setLoading(true)
        setTimeout(() => {
            setPosts([...posts, ...blogPosts])
            setLoading(false)
        }, 1000)
    }

    return (
        <>


            <div className="columns-1 md:columns-2  gap-3">
                {posts.map((post, index) => (
                    <motion.div
                        key={`${post.id}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-6 break-inside-avoid h-[400px]"
                    >
                        <Card>
                            <CardHeader>
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                                <CardTitle className="mt-4">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-500 mb-2">{post.date} | {post.category}</p>
                                <p className="line-clamp-3">{post.content}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">Read More</Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}

            </div>
            <div className='flex justify-center w-full'>
                {loading ? (
                    <p className="text-center">Loading more posts...</p>
                ) : (
                    <Button onClick={loadMorePosts} className="w-48 mt-2">Load More</Button>
                )}
            </div>
        </>
    )
}

// 3. Timeline Layout with Animation
const TimelineLayout = () => {
    return (
        <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            {blogPosts.map((post, index) => (
                <motion.div
                    key={post.id}
                    className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{post.title}</CardTitle>
                                <p className="text-sm text-gray-500">{post.date}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-2">{post.content}</p>
                            </CardContent>
                            <CardFooter className="justify-between">
                                <Badge>{post.category}</Badge>
                                <Button variant="outline" size="sm">Read More</Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="w-1/12 flex justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// 4. Magazine Layout with Featured Article
const MagazineLayout = () => {
    const featuredPost = blogPosts[0]
    const otherPosts = blogPosts.slice(1)

    return (
        <div className="space-y-8">
            <Card className="overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-2/3">
                        <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-64 md:h-full object-cover" />
                    </div>
                    <div className="md:w-1/3 p-6">
                        <Badge className="mb-2">{featuredPost.category}</Badge>
                        <h2 className="text-2xl font-bold mb-2">{featuredPost.title}</h2>
                        <p className="text-sm text-gray-500 mb-4">{featuredPost.date} | By {featuredPost.author}</p>
                        <p className="mb-4">{featuredPost.content}</p>
                        <Button>Read Full Article</Button>
                    </div>
                </div>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader>
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
                            <CardTitle className="mt-4">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-2">{post.date} | {post.category}</p>
                            <p className="line-clamp-3">{post.content}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Read More</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

// 5. Minimalist Layout with Dark Mode Toggle
const MinimalistLayout = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold dark:text-white">Minimalist Blog</h1>
                        <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4 dark:text-white" />
                            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                            <Moon className="h-4 w-4 dark:text-white" />
                        </div>
                    </div>
                    <div className="space-y-12">
                        {blogPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <article className="border-b border-gray-200 dark:border-gray-700 pb-8">
                                    <h2 className="text-2xl font-bold mb-2 dark:text-white">{post.title}</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        {post.date} | {post.category} | By {post.author}
                                    </p>
                                    <p className="mb-4 dark:text-gray-300">{post.content}</p>
                                    <Button variant="link" className="p-0 h-auto dark:text-white">Read More</Button>
                                </article>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Main component to showcase all Blog components
export default function ModernBlogComponents() {
    return (
        <>
            <div className="py-5">
                <Title name="Screen Blog Layout " />
            </div>
            <div className="container mx-auto px-4 py-12 space-y-24">
                <section>
                    <h2 className="text-3xl font-bold mb-8">Grid Layout with Card Hover Effect</h2>
                    <GridLayout />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Masonry Layout with Infinite Scroll</h2>
                    <MasonryLayout />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Timeline Layout with Animation</h2>
                    <TimelineLayout />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Magazine Layout with Featured Article</h2>
                    <MagazineLayout />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Minimalist Layout with Dark Mode Toggle</h2>
                    <MinimalistLayout />
                </section>
            </div>
        </>
    )
}