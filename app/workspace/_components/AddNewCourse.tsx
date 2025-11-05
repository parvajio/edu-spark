import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface FormData{
  courseName: string,
  courseDescription: string
}

export function AddNewCourse({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState();

  // const onHandleInputFormData = (field: string, value: string) => {
  //   setFormData(prev =>({
  //     // ...prev,
  //     [field]:value
  //   }))
  // }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Course Details</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">

            <div className="grid gap-3">
              <Label htmlFor="courseName">Course Name</Label>
              <Input id="courseName" name="courseName" placeholder="Enter Course Name" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="courseDescription">Course Description</Label>
              <Textarea id="courseDescription" name="courseDescription" placeholder="Enter course Description"></Textarea>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="nOfChapter">Number fo Chapters</Label>
              <Input id="nOfChapter" name="nOfChapter" placeholder="Enter number of chapter" />
            </div>

            <div className="flex gap-3">
              <Label>Include Video</Label>
              <Switch></Switch>
            </div>

            <div className="grid gap-3">
              <Label>Difficulty Level</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select dificulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Beginner</SelectItem>
                    <SelectItem value="banana">Moderate</SelectItem>
                    <SelectItem value="blueberry">Advanced</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="catgory">Category</Label>
              <Input id="catgory" name="catgory" placeholder="e.g., Technology, Business" />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="target">Target Audience</Label>
              <Textarea id="target" name="target" placeholder="Who is this course for?"></Textarea>
            </div>

          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
