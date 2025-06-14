import {
  Flame,
  PlugZap,
  Rocket,
  File,
  Square,
  Package,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Templates = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white cursor-pointer focus-visible:ring-0 hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none">
          Templates
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Rocket />
            <span>Quick Starts</span>
            <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PlugZap />
            <span>Plug & Play	</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <File />
            <span>One Pagers</span>
            <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Square />
            <span>Minimal Kits</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Package />
            <span>UI Packs</span>
            <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem>
          <Flame />
          <span>Creative Sets</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Templates

