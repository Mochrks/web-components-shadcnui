import { ChevronsUpDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DataTableDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Data Table</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: 1, name: 'Alice Johnson', role: 'Admin', status: 'Active' },
                  { id: 2, name: 'Bob Smith', role: 'User', status: 'Active' },
                  { id: 3, name: 'Charlie Brown', role: 'Editor', status: 'Inactive' },
                  { id: 4, name: 'Diana Prince', role: 'User', status: 'Active' },
                ].map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <Badge
                        variant={row.status === 'Active' ? 'outline' : 'secondary'}
                        className={row.status === 'Active' ? 'text-green-600 border-green-600' : ''}
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end items-center gap-4 text-sm text-muted-foreground">
            <span>
              Rows per page: 5 <ChevronsUpDown className="inline h-3 w-3" />
            </span>
            <span>1-4 of 4</span>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" disabled>
                <ChevronsUpDown className="h-4 w-4 rotate-90" />
              </Button>
              <Button variant="ghost" size="icon" disabled>
                <ChevronsUpDown className="h-4 w-4 -rotate-90" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
