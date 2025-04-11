"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CreditCard, Plus, Trash2, Check, DollarSign, Wallet } from "lucide-react"
import { Header } from "@/components/ui/header"
import { PageTransition } from "@/components/animations/page-transition"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PaymentMethods() {
  const router = useRouter()
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "card",
      name: "Visa",
      number: "**** **** **** 1234",
      expiry: "12/25",
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      name: "Mastercard",
      number: "**** **** **** 5678",
      expiry: "06/24",
      isDefault: false,
    },
    {
      id: 3,
      type: "wallet",
      name: "محفظة دجلة",
      balance: "25,000",
      isDefault: false,
    },
  ])

  const [newCard, setNewCard] = useState({
    type: "card",
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  })

  const handleAddCard = () => {
    if (newCard.name && newCard.number && newCard.expiry && newCard.cvv) {
      setPaymentMethods([
        ...paymentMethods,
        {
          id: paymentMethods.length + 1,
          type: "card",
          name: newCard.name,
          number: "**** **** **** " + newCard.number.slice(-4),
          expiry: newCard.expiry,
          isDefault: false,
        },
      ])
      setNewCard({
        type: "card",
        name: "",
        number: "",
        expiry: "",
        cvv: "",
      })
    }
  }

  const deletePaymentMethod = (id: number) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id))
  }

  const setDefaultPaymentMethod = (id: number) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
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
      <Header title="طرق الدفع" showBack />

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">طرق الدفع المحفوظة</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-dijlah-teal hover:bg-dijlah-teal/90">
                <Plus className="h-4 w-4 mr-2" />
                إضافة بطاقة
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>إضافة بطاقة جديدة</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label htmlFor="name">اسم حامل البطاقة</Label>
                  <Input
                    id="name"
                    value={newCard.name}
                    onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
                    placeholder="الاسم كما يظهر على البطاقة"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="number">رقم البطاقة</Label>
                  <Input
                    id="number"
                    value={newCard.number}
                    onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                    placeholder="1234 5678 9012 3456"
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                    <Input
                      id="expiry"
                      value={newCard.expiry}
                      onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
                      placeholder="MM/YY"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={newCard.cvv}
                      onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                      placeholder="123"
                      className="mt-1"
                    />
                  </div>
                </div>
                <Button className="w-full bg-dijlah-teal hover:bg-dijlah-teal/90" onClick={handleAddCard}>
                  إضافة البطاقة
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <RadioGroup defaultValue={paymentMethods.find((m) => m.isDefault)?.id.toString()}>
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
            {paymentMethods.map((method) => (
              <motion.div
                key={method.id}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                className="card-hover"
              >
                <Card className={method.isDefault ? "border-2 border-dijlah-teal" : ""}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <RadioGroupItem
                          value={method.id.toString()}
                          id={`payment-${method.id}`}
                          className="mr-3"
                          onClick={() => setDefaultPaymentMethod(method.id)}
                        />
                        <div className="p-2 rounded-full bg-gray-100 mr-3">
                          {method.type === "card" ? (
                            <CreditCard className="h-6 w-6 text-dijlah-blue" />
                          ) : (
                            <Wallet className="h-6 w-6 text-dijlah-yellow" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{method.name}</h3>
                          {method.type === "card" ? (
                            <p className="text-gray-600">{method.number}</p>
                          ) : (
                            <p className="text-gray-600">
                              <span className="text-dijlah-teal font-medium">{method.balance}</span> د.ع
                            </p>
                          )}
                          {method.type === "card" && <p className="text-gray-500 text-sm">تنتهي في {method.expiry}</p>}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {!method.isDefault && (
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 text-red-500"
                            onClick={() => deletePaymentMethod(method.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                        {method.isDefault && (
                          <div className="bg-dijlah-teal/10 text-dijlah-teal px-2 py-1 rounded-full text-xs flex items-center">
                            <Check className="h-3 w-3 mr-1" />
                            افتراضي
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </RadioGroup>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">إضافة رصيد</h2>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-gray-100 mr-3">
                  <DollarSign className="h-6 w-6 text-dijlah-yellow" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">رصيدك الحالي</h3>
                  <p className="text-dijlah-teal font-bold text-xl">25,000 د.ع</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[5000, 10000, 25000, 50000, 100000, 200000].map((amount, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="border-2 hover:bg-dijlah-teal/10 hover:border-dijlah-teal"
                  >
                    {amount.toLocaleString()} د.ع
                  </Button>
                ))}
              </div>
              <Button className="w-full bg-dijlah-teal hover:bg-dijlah-teal/90">إضافة رصيد</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  )
}
