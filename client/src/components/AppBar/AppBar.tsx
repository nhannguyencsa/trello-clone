"use client"

import ModeSelect from "@/components/ModeSelect/ModeSelect"
import TrelloIcon from "@/../public/trello.svg"
import AppsIcon from "@/../public/apps.svg"
import Workspaces from "@/components/AppBar/Menus/Workspaces"
import Recent from "@/components/AppBar/Menus/Recent"
import Starred from "@/components/AppBar/Menus/Starred"
import Templates from "@/components/AppBar/Menus/Templates"
import { Button } from "@/components/ui/button"
import { CopyPlus, Bell, CircleHelp } from "lucide-react"
import AutoCompleteSearchBoard from "@/components/AppBar/SearchBoards/AutoCompleteSearchBoard"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Profiles from "@/components/AppBar/Menus/Profiles"

const AppBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-app-bar-height px-2 border-1 border-yellow-500">
      <div className="flex justify-between items-center gap-4 cursor-pointer">
        <AppsIcon className="w-6 h-6 text-white fill-current" />
        <div className="flex justify-between items-center gap-1 cursor-pointer">
          <TrelloIcon className="w-6 h-6 text-white fill-current" />
          <span className="text-xl font-bold text-white">Trello</span>
        </div>

        <div className="hidden md:flex">
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="ghost" className="text-white cursor-pointer hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none">
            <CopyPlus />
            Create
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <AutoCompleteSearchBoard />
        <ModeSelect />

        <div className="hidden md:flex">
          <HoverCard openDelay={100}>
            <HoverCardTrigger>
              <div className="relative w-fit cursor-pointer">
                <Bell className="w-4 h-4 text-white" />
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 dark:bg-orange-500" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent sideOffset={10} className="px-1.5 py-1.5 text-sm text-white bg-gray-800 rounded-sm w-auto border-none">
              Notifications
            </HoverCardContent>
          </HoverCard>
        </div>


        <div className="hidden md:flex">
          <HoverCard openDelay={100}>
            <HoverCardTrigger>
              <div className="relative w-fit cursor-pointer">
                <CircleHelp className="w-4 h-4 text-white" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent sideOffset={10} className="px-1.5 py-1.5 text-sm text-white bg-gray-800 rounded-sm w-auto border-none">
              Help
            </HoverCardContent>
          </HoverCard>
        </div>

        <Profiles />
      </div>
    </div>
  )
}

export default AppBar
