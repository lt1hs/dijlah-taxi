"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Clock, Plus, AlertCircle } from "lucide-react"
import { Header } from "@/components/ui/header"
import { PageTransition } from "@/components/animations/page-transition"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ScheduledRides() {
  const router = useRouter()
  const [scheduledRides, setScheduledRides] = useState([
    {
      id: 1,
      from: "شارع المتنبي",
      to: "شارع الرشيد",
      date: "2023-06-15",
      time: "14:30",
      recurring: "يومي",
    },
    {
      id: 2,
      from: "المنزل",
      to: "المكتب",
      date: "2023-06-16",
      time: "08:00",
      recurring: "أيام العمل",
    },
  ])

  const [newRide, setNewRide] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    recurring: "مرة واحدة",
  })

  const handleAddRide = () => {
    if (newRide.from && newRide.to && newRide.date && newRide.time) {
      setScheduledRides([
        ...scheduledRides,
        {
          id: scheduledRides.length + 1,
          ...newRide,
        },
      ])
      setNewRide({
        from: "",
        to: "",
        date: "",
        time: "",
        recurring: "مرة واحدة",
      })
    }
  }

  const deleteRide = (id: number) => {
    setScheduledRides(scheduledRides.filter((ride) => ride.id !== id))
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <PageTransition className="min-h-screen bg-gray-50">
      <Header title="الرحلات المجدولة" showBack />

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">الرحلات القادمة</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-dijlah-teal hover:bg-dijlah-teal/90">
                <Plus className="h-4 w-4 mr-2" />
                جدولة رحلة
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>جدولة رحلة جديدة</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="from">من</Label>
                  <Input
                    id="from"
                    value={newRide.from}
                    onChange={(e) => setNewRide({ ...newRide, from: e.target.value })}
                    placeholder="نقطة الانطلاق"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="to">إلى</Label>
                  <Input
                    id="to"
                    value={newRide.to}
                    onChange={(e) => setNewRide({ ...newRide, to: e.target.value })}
                    placeholder="الوجهة"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="date">التاريخ</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newRide.date}
                    onChange={(e) => setNewRide({ ...newRide, date: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="time">الوقت</Label>
                  <Input
                    id="time"
                    type="time"
                    value={newRide.time}
                    onChange={(e) => setNewRide({ ...newRide, time: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="recurring">التكرار</Label>
                  <select
                    id="recurring"
                    value={newRide.recurring}
                    onChange={(e) => setNewRide({ ...newRide, recurring: e.target.value })}
                    className="w-full mt-1 p-2 border rounded-md"
                  >
                    <option value="مرة واحدة">مرة واحدة</option>
                    <option value="يومي">يومي</option>
                    <option value="أسبوعي">أسبوعي</option>
                    <option value="أيام العمل">أيام العمل</option>
                  </select>
                </div>
                <Button className="w-full bg-dijlah-teal hover:bg-dijlah-teal/90" onClick={handleAddRide}>
                  إضافة
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
          {scheduledRides.length > 0 ? (
            scheduledRides.map((ride) => (
              <motion.div
                key={ride.id}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                className="card-hover"
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-dijlah-teal mr-2" />

                        <span>{ride.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-dijlah-yellow mr-2" />
                        <span>{ride.time}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                        <span>{ride.from}</span>
                      </div>
                      <div className="border-r-2 border-dashed border-gray-300 h-4 mr-[5px]"></div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-dijlah-blue mr-2"></div>
                        <span>{ride.to}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="bg-gray-100 px-2 py-1 rounded-full text-xs">{ride.recurring}</div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 border-red-500"
                          onClick={() => deleteRide(ride.id)}
                        >
                          إلغاء
                        </Button>
                        <Button
                          size="sm"
                          className="bg-dijlah-teal hover:bg-dijlah-teal/90"
                          onClick={() => router.push("/select-start")}
                        >
                          تعديل
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">لا توجد رحلات مجدولة</p>
              <Button
                className="mt-4 bg-dijlah-teal hover:bg-dijlah-teal/90"
                onClick={() => document.querySelector<HTMLButtonElement>("[data-dialog-trigger]")?.click()}
              >
                جدولة رحلة جديدة
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </PageTransition>
  )
}
