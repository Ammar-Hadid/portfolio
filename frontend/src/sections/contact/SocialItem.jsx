import { ArrowUpRight } from "lucide-react";

const SocialItem = ({ social }) => {
    if (!social) return null;

    const { href, label, icon: Icon, placeHolder } = social;

    if (!href || !label || !Icon) return null;

    const isExternal = href.startsWith("http");

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-md rounded-2xl p-sm -mx-sm transition-colors hover:bg-white/[.04]"
        >
            <span className="glass grid size-11 place-items-center rounded-xl">
                <Icon className="size-5 text-primary-light" />
            </span>

            <span className="flex flex-col">
                <span className="text-body-sm font-medium text-text">{label}</span>
                <span className="text-body-sm text-text-muted">{placeHolder}</span>
            </span>

            <ArrowUpRight className="ml-auto size-4 text-text-muted opacity-0 transition-all group-hover:opacity-100" />
        </a>
    )
}

export default SocialItem;
