import {
  Brain,
  SquarePen,
  Images,
  Cloud,
  Computer,
  Blocks,
  Github,
  PlusCircle,
  Database,
  TentTree,
  Sailboat,
  ImagePlay,
  ChevronDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Starred = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-white cursor-pointer focus-visible:ring-0 hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none">
          Starred
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Brain />
            <span>AI Project</span>
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SquarePen />
            <span>Blogs</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Images />
            <span>Photography</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Cloud />
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Computer />
              <span className="pl-1">DevOps</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Blocks />
                  <span>Builds</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Database />
                  <span>Database</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Github />
            <span>GitHub</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <TentTree />
          <span>Landscapes</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Sailboat />
          <span>Travel Visuals</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ImagePlay />
          <span>Daily Snap</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Starred
