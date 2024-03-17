import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

export function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="text-xl px-6 py-5">
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:min-w-[45%] w-full font-main">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
            All fields are required unless otherwise noted.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="grid flex-1 gap-2 w-full">
              <Label htmlFor="link">espektro ID</Label>
              <Input
                name="espektroId"
                placeholder="Your Espektro ID"
                type="text"
                required
              />
            </div>
            <div className="grid flex-1 gap-2 w-full">
              <Label htmlFor="link">Name</Label>
              <Input name="name" placeholder="Your name" type="text" required />
            </div>
            <div className="grid flex-1 gap-2 w-full">
              <Label htmlFor="link">Email</Label>
              <Input name="email" placeholder="Your email" type="email" />
            </div>
            <div className="grid flex-1 gap-2 w-full">
              <Label htmlFor="link">password</Label>
              <Input
                name="password"
                placeholder="Create a password"
                type="password"
                required
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button type="submit">Register</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
