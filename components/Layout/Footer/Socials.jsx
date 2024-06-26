import SVG from "@/components/SVG"
import { facebook, instagram, twitter } from "@/utils/icons"

export default () => (
    <div className="flex gap-4">
        <SVG path={facebook} />
        <SVG path={twitter} />
        <SVG path={instagram} />
    </div>
)