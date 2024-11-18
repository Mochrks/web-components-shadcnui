'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { FcGoogle } from "react-icons/fc";
import { RiMicrosoftFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const AuthPagesLoginRegister = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const onSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Mochrks Apps
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        {/* other teks */}
                        {/* <p className="text-lg">
                            &ldquo;This platform has revolutionized how we handle our daily operations. It's intuitive, powerful, and a joy to use.&rdquo;
                        </p> */}
                        <footer className="text-sm">Development</footer>
                    </blockquote>
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Welcome to Mochrks Apps
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Sign in to your account or create a new one
                        </p>
                    </div>
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Login</CardTitle>
                                    <CardDescription>
                                        Enter your email and password to access your account
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="youremail@example.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="*********"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="remember" />
                                        <label
                                            htmlFor="remember"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col">
                                    <Button className="w-full" onClick={onSubmit} disabled={isLoading}>
                                        {isLoading && (
                                            <>
                                                <motion.div
                                                    className="w-3 h-3 border-2 mr-3 border-white rounded-full border-t-transparent"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                            </>
                                        )}
                                        Sign In
                                        <ArrowRight className='ml-1 w-4 h-4' />
                                    </Button>
                                    <div className="relative my-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-background px-2 text-muted-foreground">
                                                Or continue with
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <Button variant="outline" className="w-full">
                                            <FcGoogle className='w-4 h-4 mr-2' />
                                            Google
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            <IoLogoGithub className='w-4 h-4 mr-2' />
                                            GitHub
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            <RiMicrosoftFill className='w-4 h-4 mr-2' />
                                            Microsoft
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="register">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Create an account</CardTitle>
                                    <CardDescription>
                                        Enter your details to create your account
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First name</Label>
                                            <Input id="first-name" placeholder='your first name' required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <Input id="last-name" placeholder='your last name ' required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="youremail@example.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder='********'
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" required />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            I agree to the{" "}
                                            <a href="#" className="text-primary underline">
                                                terms and conditions
                                            </a>
                                        </label>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" onClick={onSubmit} disabled={isLoading}>
                                        {isLoading && (
                                            <>
                                                <motion.div
                                                    className="w-3 h-3 border-2 mr-3 border-white rounded-full border-t-transparent"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                            </>
                                        )}
                                        Create Account
                                    </Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-primary">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-primary">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthPagesLoginRegister