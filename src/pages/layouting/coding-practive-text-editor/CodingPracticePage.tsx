'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PlayIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Title } from '@/components/demo/Title'

const CodingPracticePage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('javascript')
    const [code, setCode] = useState('')
    const [output, setOutput] = useState('')
    const [isCorrect, setIsCorrect] = useState(null)

    const languages = [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'cpp', label: 'C++' },
        { value: 'go', label: 'Go' },
        { value: 'php', label: 'PHP' },
    ]

    const codingQuestions = [
        {
            id: 1,
            title: 'FizzBuzz',
            difficulty: 'Easy',
            description: 'Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".',
            starterCode: {
                javascript: `function fizzBuzz() {
  // Your code here
}

// Test the function
fizzBuzz();`,
                python: `def fizz_buzz():
    # Your code here

# Test the function
fizz_buzz()`,
                java: `public class Solution {
    public static void fizzBuzz() {
        // Your code here
    }

    public static void main(String[] args) {
        fizzBuzz();
    }
}`,
                cpp: `#include <iostream>

void fizzBuzz() {
    // Your code here
}

int main() {
    fizzBuzz();
    return 0;
}`,
                go: `package main

import "fmt"

func fizzBuzz() {
    // Your code here
}

func main() {
    fizzBuzz()
}`,
                php: `<?php

function fizzBuzz() {
    // Your code here
}

// Test the function
fizzBuzz();

?>`,
            },
            testCases: [
                { input: '', expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\n' },
            ],
        },
        // Add more coding questions here
    ]

    const [currentQuestion, setCurrentQuestion] = useState(codingQuestions[0])

    useEffect(() => {
        setCode(currentQuestion.starterCode[selectedLanguage])
    }, [currentQuestion, selectedLanguage])

    const handleLanguageChange = (value) => {
        setSelectedLanguage(value)
        setCode(currentQuestion.starterCode[value])
    }

    const handleCodeChange = (value) => {
        setCode(value)
    }

    const runCode = () => {
        // In a real-world scenario, you would send the code to a backend service for execution
        // For this example, we'll simulate code execution and output
        setOutput('Executing code...\n')
        setTimeout(() => {
            const simulatedOutput = simulateCodeExecution(code, selectedLanguage)
            setOutput(simulatedOutput)
            checkOutput(simulatedOutput)
        }, 1000)
    }

    const simulateCodeExecution = (code, language) => {
        // This is a simplified simulation. In a real app, you'd use a proper code execution service.
        let output = ''
        try {
            if (language === 'javascript') {
                // Extremely unsafe, only for demonstration. Never use eval with user input in a real application.
                eval(`
          const console = {
            log: function(msg) {
              output += msg + '\\n';
            }
          };
          ${code}
        `)
            } else {
                output = "Code execution simulation: Output would appear here for " + language + " code.\n"
                output += "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz\n"
            }
        } catch (error) {
            output = "Error: " + error.message
        }
        return output
    }

    const checkOutput = (output) => {
        const expectedOutput = currentQuestion.testCases[0].expectedOutput
        setIsCorrect(output.trim() === expectedOutput.trim())
    }

    return (
        <div className="container mx-auto ">
            <div className='p-20 bg-slate-200 my-4'>
                <Title name="Screen Coding Practice Text Editor" />
            </div>
            <div className="grid grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{currentQuestion.title}</CardTitle>
                        <CardDescription>
                            Difficulty: <Badge variant="outline">{currentQuestion.difficulty}</Badge>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">{currentQuestion.description}</p>
                        <Separator className="my-4" />
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">Code Editor</h3>
                                <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select Language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {languages.map((lang) => (
                                            <SelectItem key={lang.value} value={lang.value}>
                                                {lang.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <SyntaxHighlighter
                                language={selectedLanguage}
                                style={atomDark}
                                customStyle={{
                                    height: '400px',
                                    overflow: 'auto',
                                }}
                                className="rounded-md"
                            >
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={runCode} className="w-full">
                            <PlayIcon className="w-4 h-4 mr-2" />
                            Run Code
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Output</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                            <pre className="whitespace-pre-wrap">{output}</pre>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter>
                        {isCorrect !== null && (
                            <Alert variant={isCorrect ? "default" : "destructive"}>
                                {isCorrect ? (
                                    <CheckCircleIcon className="h-4 w-4" />
                                ) : (
                                    <XCircleIcon className="h-4 w-4" />
                                )}
                                <AlertTitle>{isCorrect ? "Correct!" : "Incorrect"}</AlertTitle>
                                <AlertDescription>
                                    {isCorrect
                                        ? "Great job! Your solution passed the test case."
                                        : "Your solution didn't pass the test case. Try again!"}
                                </AlertDescription>
                            </Alert>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default CodingPracticePage