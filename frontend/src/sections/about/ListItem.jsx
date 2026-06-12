const ListItem = ({ icon, label }) => {
    if (!icon || !label) return null;

    const Icon = icon

    return (
        <li className="flex items-center gap-lg">
            <Icon className="w-lg h-lg text-primary" />
            <p className="text-body-sm text-text font-body ">{label}</p>
        </li>
    )
}

export default ListItem;