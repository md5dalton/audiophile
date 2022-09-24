import React, { createContext, useState } from "react"
import data from "../../dist/assets/data.json"

const NotificationsContext = createContext()

export function NotificationsProvider ({ children }) {

    const [ notifications, setNotifications ] = useState(JSON.parse(sessionStorage.getItem("notifications")) || data)
    
    // const sort = array => array.sort((a, b) => a.read)

    const readNotification = id => {
        notifications[id].read = true
        setNotifications([...notifications])
        sessionStorage.setItem("notifications", JSON.stringify(notifications))
    }
    const readAll = () => {
        notifications.forEach(item => item.read = true)
        setNotifications([...notifications])
        sessionStorage.setItem("notifications", JSON.stringify(notifications))
    }

    const unreadCount = () => notifications.filter(item => !item.read).length

    return (
        <NotificationsContext.Provider value={{ notifications, readNotification, readAll, unreadCount }}>
            {children}
        </NotificationsContext.Provider>
    )
} 

export default NotificationsContext