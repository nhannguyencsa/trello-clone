"use client"

import { Button } from "@/components/ui/button"
import { FunnelIcon, GlobeHemisphereWestIcon, GoogleDriveLogoIcon, LightningIcon, SquaresFourIcon, UserPlusIcon } from "@phosphor-icons/react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const BoardBar = () => {
  return (
    <div className="flex items-center justify-between gap-4 w-full h-board-bar-height pr-3">
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-sm gap-2 cursor-pointer transition active:scale-95 text-white hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none">
          <div className="flex items-center gap-1">
            <SquaresFourIcon weight="fill" className="!w-5 !h-5"/>
            <span className="font-normal">Board 01</span>
          </div>
        </Button>

        <Button variant="ghost" className="text-sm gap-2 cursor-pointer transition active:scale-95 text-white hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none">
          <div className="flex items-center gap-1">
            <GlobeHemisphereWestIcon weight="fill" className="!w-5 !h-5"/>
            <span className="font-normal">Public</span>
          </div>
        </Button>

        <Button variant="ghost" className="text-sm gap-2 cursor-pointer transition active:scale-95 text-white hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none">
          <div className="flex items-center gap-1">
            <GoogleDriveLogoIcon weight="fill" className="!w-5 !h-5"/>
            <span className="font-normal">Add To Google Drive</span>
          </div>
        </Button>

        <Button variant="ghost" className="text-sm gap-2 cursor-pointer transition active:scale-95 text-white hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none">
          <div className="flex items-center gap-1">
            <LightningIcon weight="fill" className="!w-5 !h-5"/>
            <span className="font-normal">Automation</span>
          </div>
        </Button>

        <Button variant="ghost" className="text-sm gap-2 cursor-pointer transition active:scale-95 text-white hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none">
          <div className="flex items-center gap-1">
            <FunnelIcon weight="fill" className="!w-5 !h-5"/>
            <span className="font-normal">Filters</span>
          </div>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        {/* invite button */}
        <Button variant="ghost" className="text-sm gap-2 cursor-pointer transition active:scale-95 text-white hover:bg-transparent dark:hover:bg-transparent hover:text-white hover:shadow-none border border-white">
          <div className="flex items-center gap-1">
            <UserPlusIcon weight="fill" className="!w-5 !h-5"/>
            <span className="">Invite</span>
          </div>
        </Button>

        {/* avatars */}
        <div className="*:data-[slot=avatar]:ring-background flex">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="@leerob"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://plus.unsplash.com/premium_photo-1681488159219-e0f0f2542424?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="@sunshinecatus"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1741894785509-d87c84bdc275?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="@whowho"
            />
            <AvatarFallback>WW</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://plus.unsplash.com/premium_photo-1739178656557-16b949fea186?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="@cutehair"
            />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
            />
            <AvatarFallback className="bg-gray-300 text-white">+6</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

export default BoardBar
