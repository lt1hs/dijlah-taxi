"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Phone, Shield, User, Plus, AlertTriangle, X } from "lucide-react"
import { Header } from "@/components/ui/header"
import { PageTransition } from "@/components/animations/page-transition"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Emergency() {
  const router = useRouter()
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      phone: "+964-7700-123456",
      relation: "أخ",
    },
    {
      id: 2,
      name: "سارة علي",
      phone: "+964-7701-987654",
      relation: "زوجة",
    },
  ])

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    relation: "",
  })

  const handleAddContact = () => {
    if (newContact.name && newContact.phone) {
      setContacts([
        ...contacts,
        {
          id: contacts.length + 1,
          ...newContact,
        },
      ])
      setNewContact({
        name: "",
        phone: "",
        relation: "",
      })
    }
  }

  const deleteContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
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
      <Header title="جهات الاتصال في حالات الطوارئ" showBack />

      <div className="p-4">
        <Card className="mb-6 bg-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="p-2 rounded-full bg-red-100 mr-3">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-700">زر الطوارئ</h3>
                <p className="text-red-600 mt-1">
                  في حالة الطوارئ، اضغط على زر الطوارئ أدناه للاتصال بخدمات الطوارئ ومشاركة موقعك مع جهات الاتصال
                  المحددة.
                </p>
                <Button className="mt-4 bg-red-600 hover:bg-red-700 w-full">
                  <Shield className="h-5 w-5 mr-2" />
                  اتصال طوارئ
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">جهات الاتصال</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-dijlah-teal hover:bg-dijlah-teal/90">
                <Plus className="h-4 w-4 mr-2" />
                إضافة جهة اتصال
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>إضافة جهة اتصال جديدة</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="name">الاسم</Label>
                  <Input
                    id="name"
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    placeholder="اسم جهة الاتصال"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    value={newContact.phone}
                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    placeholder="رقم الهاتف"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="relation">صلة القرابة</Label>
                  <Input
                    id="relation"
                    value={newContact.relation}
                    onChange={(e) => setNewContact({ ...newContact, relation: e.target.value })}
                    placeholder="صلة القرابة"
                    className="mt-1"
                  />
                </div>
                <Button className="w-full bg-dijlah-teal hover:bg-dijlah-teal/90" onClick={handleAddContact}>
                  إضافة
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <motion.div
                key={contact.id}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                className="card-hover"
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-gray-100 mr-3">
                          <User className="h-6 w-6 text-dijlah-blue" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{contact.name}</h3>
                          <p className="text-gray-600">{contact.phone}</p>
                          <div className="bg-gray-100 px-2 py-1 rounded-full text-xs inline-block mt-2">
                            {contact.relation}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-red-500"
                          onClick={() => deleteContact(contact.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-dijlah-teal"
                          onClick={() => window.open(`tel:${contact.phone}`)}
                        >
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <User className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">لا توجد جهات اتصال</p>
              <Button
                className="mt-4 bg-dijlah-teal hover:bg-dijlah-teal/90"
                onClick={() => document.querySelector<HTMLButtonElement>("[data-dialog-trigger]")?.click()}
              >
                إضافة جهة اتصال
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </PageTransition>
  )
}
