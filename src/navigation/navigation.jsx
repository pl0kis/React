import React from "react";
import NavigationItem from "./navigationElem/NavigationElem";
import styles from "./navigation.module.css"

const navigation = [
    {
        href: "/home",
        label: "home",
        icon:"grid.svg"
    },
    {
        href: "/chats",
        label: "chats",
        icon:"message-circle.svg"
    },
    {
        href: "/contacts",
        label: "contacts",
        icon:"person.svg"
    },
    {
        href: "/notifications",
        label: "notifications",
        icon:"bell.svg"
    },
    {
        href: "/calendar",
        label: "calendar",
        icon:"calendar.svg"
    },
    {
        href: "/settings",
        label: "settings",
        icon:"settings-2.svg"
    },
]


function Navigation(probs) {
    console.log(probs)
    return (
        <nav>
            <ul>
                {navigation.map(({ href, label, icon }) => {
                    return <li key={href} className={styles.itemli}>
                        <NavigationItem href={href} label={label} icon={icon} />
                    </li>
                })}
            </ul>
        </nav>
    );
}

export default Navigation;