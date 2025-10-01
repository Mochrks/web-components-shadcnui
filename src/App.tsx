"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Calendar } from "@/components/ui/calendar"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Check, ChevronRight, Info } from "lucide-react"

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
    return (
        <section className="space-y-3">
            <div>
                <h2 className="text-xl font-semibold text-pretty">{title}</h2>
                {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
            </div>
            <div className="rounded-lg border bg-card p-4">{children}</div>
        </section>
    )
}

export default function Page() {
    const [progress, setProgress] = useState(42)
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <main className="container mx-auto max-w-6xl px-4 py-8 space-y-10">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src="/placeholder-logo.svg" alt="Logo" width={32} height={32} />
                    <div>
                        <h1 className="text-2xl font-bold text-balance">Showcase Web UI MUI Components</h1>
                        <p className="text-sm text-muted-foreground"> by @mochrks</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Button variant="outline" className="gap-2 bg-transparent">
                        <ChevronRight className="size-4" />
                        Docs
                    </Button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Section title="Buttons" description="Primary actions and variants">
                    <div className="flex flex-wrap gap-3">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                        <Button variant="destructive">Destructive</Button>
                    </div>
                </Section>

                <Section title="Form Inputs" description="Inputs, textarea, select, switches">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Jane Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="jane@example.com" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="about">About</Label>
                            <Textarea id="about" placeholder="Tell us a bit about yourself..." />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select>
                                <SelectTrigger id="country">
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="id">Indonesia</SelectItem>
                                    <SelectItem value="sg">Singapore</SelectItem>
                                    <SelectItem value="us">United States</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center gap-2">
                            <Switch id="newsletter" />
                            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                        </div>
                    </div>
                </Section>

                <Section title="Selection Controls" description="Checkboxes and radios">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Checkbox id="c1" defaultChecked />
                            <Label htmlFor="c1">Accept terms</Label>
                        </div>
                        <RadioGroup defaultValue="a" className="grid grid-cols-3 gap-3">
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="a" id="a" />
                                <Label htmlFor="a">Option A</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="b" id="b" />
                                <Label htmlFor="b">Option B</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="c" id="c" />
                                <Label htmlFor="c">Option C</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </Section>

                <Section title="Feedback & Indicators" description="Alerts, progress, skeleton">
                    <div className="space-y-4">
                        <Alert>
                            <Info className="size-4" />
                            <AlertTitle>Heads up</AlertTitle>
                            <AlertDescription>Custom theme colors make this alert pop.</AlertDescription>
                        </Alert>
                        <div className="space-y-2">
                            <Progress value={progress} />
                            <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
                                    -10%
                                </Button>
                                <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                                    +10%
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-3 w-40" />
                                <Skeleton className="h-3 w-24" />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section title="Content & Display" description="Cards, avatar, badge, separator">
                    <div className="grid gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Alpha</CardTitle>
                                <CardDescription>Example card using the new theme.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium">Jane Doe</div>
                                        <div className="text-sm text-muted-foreground">Product Designer</div>
                                    </div>
                                </div>
                                <Badge className="gap-1">
                                    <Check className="size-3" /> Active
                                </Badge>
                            </CardContent>
                        </Card>
                        <Separator />
                        <div className="text-sm text-muted-foreground">Subtle content separation above.</div>
                    </div>
                </Section>

                <Section title="Navigation & Tabs" description="Tabs and hover cards">
                    <div className="space-y-4">
                        <Tabs defaultValue="overview">
                            <TabsList>
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="activity">Activity</TabsTrigger>
                                <TabsTrigger value="settings">Settings</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview">Overview content with refreshed colors.</TabsContent>
                            <TabsContent value="activity">Recent activity will appear here.</TabsContent>
                            <TabsContent value="settings">Settings section content.</TabsContent>
                        </Tabs>

                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button variant="link">Hover me</Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-64">A lightweight panel on hover with themed surface.</HoverCardContent>
                        </HoverCard>
                    </div>
                </Section>

                <Section title="Overlays" description="Tooltip, popover, dialog, drawer, sheet">
                    <TooltipProvider>
                        <div className="flex flex-wrap gap-3">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline">Tooltip</Button>
                                </TooltipTrigger>
                                <TooltipContent>Helpful hint</TooltipContent>
                            </Tooltip>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline">Popover</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-56">Popover content with rich info.</PopoverContent>
                            </Popover>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button>Dialog</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Confirm action</DialogTitle>
                                        <DialogDescription>This is a themed dialog example.</DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button variant="outline">Cancel</Button>
                                        <Button>Confirm</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button variant="secondary">Drawer</Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Drawer panel</DrawerTitle>
                                        <DrawerDescription>Slide-over area with surface tokens.</DrawerDescription>
                                    </DrawerHeader>
                                    <DrawerFooter>
                                        <DrawerClose asChild>
                                            <Button variant="outline">Close</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost">Sheet</Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Sheet</SheetTitle>
                                        <SheetDescription>Another overlay with theme consistency.</SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </TooltipProvider>
                </Section>

                <Section title="Data Display" description="Slider, table, command, calendar">
                    <div className="space-y-5">
                        <div className="space-y-2">
                            <Label>Volume</Label>
                            <Slider defaultValue={[40]} max={100} step={1} />
                        </div>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Design Work</TableCell>
                                    <TableCell>
                                        <Badge>In Progress</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">$1,200</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Development</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">Queued</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">$3,000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                        <Command className="rounded-lg border">
                            <CommandInput placeholder="Type a command or search..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    <CommandItem>Open palette</CommandItem>
                                    <CommandItem>Toggle theme</CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>

                        <div className="space-y-2">
                            <Label>Pick a date</Label>
                            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                        </div>
                    </div>
                </Section>
            </div>
        </main>
    )
}

function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Select value="system" disabled>
                <SelectTrigger className="w-[140px]" aria-label="Loading theme select">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
            </Select>
        )
    }

    return (
        <Select value={theme || "system"} onValueChange={(v) => setTheme(v)}>
            <SelectTrigger className="w-[140px]" aria-label="Select theme">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    )
}
