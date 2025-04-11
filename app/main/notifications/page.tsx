"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Bell, Car, CreditCard, Gift, Info, X } from "lucide-react"
import { Header } from "@/components/ui/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Notifications() {
  const router = useRouter()
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "ride",
      title: "تم تأكيد رحلتك",
      message: "سيصل السائق خلال 5 دقائق",
      time: "منذ 10 دقائق",
      read: false,
    },
    {
      id: 2,
      type: "payment",
      title: "تم إضافة رصيد",
      message: "تم إضافة 10,000 د.ع إلى رصيدك",
      time: "منذ 3 ساعات",
      read: false,
    },
    {
      id: 3,
      type: "promo",
      title: "عرض خاص",
      message: "احصل على خصم 20% على رحلتك القادمة",
      time: "منذ يوم",
      read: true,
    },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "ride":
        return <Car className="h-6 w-6 text-dijlah-teal" />
      case "payment":
        return <CreditCard className="h-6 w-6 text-dijlah-blue" />
      case "promo":
        return <Gift className="h-6 w-6 text-dijlah-yellow" />
      case "system":
        return <Info className="h-6 w-6 text-gray-500" />
      default:
        return <Bell className="h-6 w-6 text-dijlah-teal" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="الإشعارات" showBack />

      <Tabs defaultValue="all" className="w-full px-4 pt-2 pb-20">
        <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/50 backdrop-blur-sm rounded-2xl p-1">
          <TabsTrigger value="all" className="data-[state=active]:bg-dijlah-teal data-[state=active]:text-white">
            الكل
          </TabsTrigger>
          <TabsTrigger value="unread" className="data-[state=active]:bg-dijlah-teal data-[state=active]:text-white">
            غير مقروءة
          </TabsTrigger>
          <TabsTrigger value="read" className="data-[state=active]:bg-dijlah-teal data-[state=active]:text-white">
            مقروءة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div 
            className="space-y-4 animate-fade-in"
          >
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  icon={getIcon(notification.type)}
                  onMarkAsRead={markAsRead}
                  onDelete={deleteNotification}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <Bell className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-gray-500">لا توجد إشعارات</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="unread">
          <div className="space-y-3">
            {notifications.filter((n) => !n.read).length > 0 ? (
              notifications
                .filter((n) => !n.read)
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    icon={getIcon(notification.type)}
                    onMarkAsRead={markAsRead}
                    onDelete={deleteNotification}
                  />
                ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <Bell className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-gray-500">لا توجد إشعارات غير مقروءة</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="read">
          <div className="space-y-3">
            {notifications.filter((n) => n.read).length > 0 ? (
              notifications
                .filter((n) => n.read)
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    icon={getIcon(notification.type)}
                    onMarkAsRead={markAsRead}
                    onDelete={deleteNotification}
                  />
                ))
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <Bell className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-gray-500">لا توجد إشعارات مقروءة</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface NotificationItemProps {
  notification: {
    id: number
    type: string
    title: string
    message: string
    time: string
    read: boolean
  }
  icon: React.ReactNode
  onMarkAsRead: (id: number) => void
  onDelete: (id: number) => void
}

function NotificationItem({ notification, icon, onMarkAsRead, onDelete }: NotificationItemProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 
        transform hover:-translate-y-1 animate-slide-up
        ${!notification.read ? "border-r-4 border-dijlah-teal" : ""}
      `}
      onClick={() => onMarkAsRead(notification.id)}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-lg text-gray-900">{notification.title}</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                onDelete(notification.id)
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-gray-600 mt-1 leading-relaxed">{notification.message}</p>
          <p className="text-gray-400 text-sm mt-3 font-medium">{notification.time}</p>
        </div>
      </div>
    </div>
  )
}
