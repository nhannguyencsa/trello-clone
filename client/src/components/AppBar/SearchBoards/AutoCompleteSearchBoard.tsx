import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const AutoCompleteSearchBoard = () => {
  return (
    <div className="hidden md:flex relative w-30 max-w-sm text-white cursor-pointer">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 text-sm placeholder:text-white focus:border-wh text-white border border-white bg-transparent focus-visible:border-white focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}

export default AutoCompleteSearchBoard
