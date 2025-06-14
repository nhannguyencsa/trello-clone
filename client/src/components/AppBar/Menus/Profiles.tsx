import {
  UserRoundPen,
  CircleUserRound,
  UserPlus,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Profiles = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-5 h-5 cursor-pointer focus-visible:ring-0 hover:bg-transparent dark:hover:bg-transparent hover:shadow-none">
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png?f=webp&w=512" />
              <AvatarFallback>NN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50 mr-2">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UserRoundPen />
              <span>Profiles</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CircleUserRound />
              <span>My account</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserPlus />
              <span>Add another account</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Settings />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Profiles
