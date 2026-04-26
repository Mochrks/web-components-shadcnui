import { DollarSign, CreditCard, Activity, Users } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export function CardsDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Card Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/blog-post.png"
                  alt="Blog Post"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">Technology</Badge>
                  <span className="text-xs text-muted-foreground">5 min read</span>
                </div>
                <CardTitle>The Future of Modern Web Development</CardTitle>
                <CardDescription>
                  Exploring how AI and edge computing are reshaping the landscape of building web
                  applications in 2026.
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t pt-4">
                <Button variant="ghost" className="p-0 h-auto font-semibold">
                  Read more →
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                <img
                  src="/product-watch.png"
                  alt="Product Watch"
                  className="max-h-full object-contain mix-blend-multiply drop-shadow-xl"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Nexus Smartwatch Pro</CardTitle>
                    <CardDescription>Next-gen health tracking and connectivity.</CardDescription>
                  </div>
                  <div className="text-xl font-bold text-primary">$349.00</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Badge variant="secondary">Health</Badge>
                  <Badge variant="secondary">GPS</Badge>
                  <Badge variant="secondary">Waterproof</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2 border-t pt-4">
                <Button className="flex-1">Add to Cart</Button>
                <Button variant="outline">Wishlist</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>Best for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold">
                  $29<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Unlimited projects</li>
                  <li>✓ Priority support</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Custom integrations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Enterprise</CardTitle>
                  <Badge>Popular</Badge>
                </div>
                <CardDescription>For large-scale operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-3xl font-bold">
                  $99<span className="text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Everything in Pro</li>
                  <li>✓ Dedicated account manager</li>
                  <li>✓ Custom SLA</li>
                  <li>✓ SSO & SAML</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
                <CardDescription>Current sprint status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Design</span>
                    <span className="text-muted-foreground">100%</span>
                  </div>
                  <Progress value={100} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Development</span>
                    <span className="text-muted-foreground">72%</span>
                  </div>
                  <Progress value={72} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Testing</span>
                    <span className="text-muted-foreground">35%</span>
                  </div>
                  <Progress value={35} />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
