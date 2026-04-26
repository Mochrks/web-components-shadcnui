import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/utils'

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export function NavigationMenuDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Navigation Menu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Mega Menu Navigation</Label>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md p-6 no-underline outline-none focus:shadow-md group"
                            href="#"
                          >
                            <img
                              src="/featured-menu.png"
                              alt="Featured"
                              className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                            <div className="relative z-10">
                              <div className="mb-1 text-lg font-bold text-white leading-tight">
                                ShadcnUI Premium
                              </div>
                              <p className="text-sm leading-tight text-white/80">
                                Crafted components for modern websites.
                              </p>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="#" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="#" title="Typography">
                        Styles for headings, paragraphs, lists etc.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { title: 'Alert Dialog', desc: 'A modal dialog that interrupts the user.' },
                        { title: 'Hover Card', desc: 'For sighted users to preview content.' },
                        { title: 'Progress', desc: 'Displays an indicator showing completion.' },
                        { title: 'Scroll Area', desc: 'Augments native scroll functionality.' },
                        { title: 'Tabs', desc: 'A set of layered sections of content.' },
                        { title: 'Tooltip', desc: 'A popup that displays information.' },
                      ].map((item) => (
                        <ListItem key={item.title} title={item.title} href="#">
                          {item.desc}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
