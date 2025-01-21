import { useState } from "react"
import { createContext } from "react"

const users = [
    {
        username: 'pechu',
        name: 'Esteban Pechuan',
        email: 'esteban.pechuan@gmail.com',
        password: 'Pechu.1234!',
        data: {
            "overview": {
                "currentBalance": 4836.00,
                "income": 3814.25,
                "expenses": 1700.50
            },
            "pots": {
                "totalSaved": 850,
                "details": [
                { "name": "Savings", "amount": 159 },
                { "name": "Gift", "amount": 40 },
                { "name": "Concert Ticket", "amount": 110 },
                { "name": "New Laptop", "amount": 10 }
                ]
            },
            "budgets": {
                "currentSpending": 338,
                "totalLimit": 975,
                "categories": [
                { "name": "Entertainment", "amount": 50 },
                { "name": "Bills", "amount": 750 },
                { "name": "Dining Out", "amount": 75 },
                { "name": "Personal Care", "amount": 100 }
                ]
            },
            "transactions": [
                {
                "name": "Emma Richardson",
                "type": "income",
                "amount": 75.50,
                "date": "2024-08-19"
                },
                {
                "name": "Savory Bites Bistro",
                "type": "expense",
                "amount": 55.50,
                "date": "2024-08-19"
                },
                {
                "name": "Daniel Carter",
                "type": "expense",
                "amount": 42.30,
                "date": "2024-08-18"
                },
                {
                "name": "Sun Park",
                "type": "income",
                "amount": 120.00,
                "date": "2024-08-17"
                },
                {
                "name": "Urban Services Hub",
                "type": "expense",
                "amount": 65.00,
                "date": "2024-08-17"
                },
                {
                "name": "Netflix Subscription",
                "type": "expense",
                "amount": 15.99,
                "date": "2024-08-16"
                },
                {
                "name": "Amazon Purchase",
                "type": "expense",
                "amount": 89.99,
                "date": "2024-08-15"
                },
                {
                "name": "Gym Membership",
                "type": "expense",
                "amount": 50.00,
                "date": "2024-08-15"
                },
                {
                "name": "Freelance Project",
                "type": "income",
                "amount": 200.00,
                "date": "2024-08-14"
                },
                {
                "name": "Starbucks Coffee",
                "type": "expense",
                "amount": 8.50,
                "date": "2024-08-14"
                }
            ],
            "bills": {
                "paidBills": 190.00,
                "totalUpcoming": 194.98,
                "dueSoon": 59.98,
                "details": [
                {
                    "name": "Electricity Bill",
                    "amount": 100.00,
                    "dueDate": "2024-08-25",
                    "status": "upcoming"
                },
                {
                    "name": "Water Bill",
                    "amount": 45.00,
                    "dueDate": "2024-08-28",
                    "status": "upcoming"
                },
                {
                    "name": "Internet Bill",
                    "amount": 49.99,
                    "dueDate": "2024-08-30",
                    "status": "due soon"
                },
                {
                    "name": "Rent",
                    "amount": 800.00,
                    "dueDate": "2024-09-01",
                    "status": "upcoming"
                },
                {
                    "name": "Phone Plan",
                    "amount": 30.00,
                    "dueDate": "2024-08-22",
                    "status": "paid"
                }
                ]
            }
            }
    },
    {
        username: 'ana',
        name: 'Ana Quiroga',
        email: 'ana.quiroga@gmail.com',
        password: 'Ana.1234!',
        data: {
            "overview": {
              "currentBalance": 6324.00,
              "income": 4521.75,
              "expenses": 2150.30
            },
            "pots": {
              "totalSaved": 1240,
              "details": [
                { "name": "Vacation Fund", "amount": 500 },
                { "name": "Emergency Fund", "amount": 300 },
                { "name": "Car Repairs", "amount": 250 },
                { "name": "Holiday Gifts", "amount": 190 }
              ]
            },
            "budgets": {
              "currentSpending": 475,
              "totalLimit": 1200,
              "categories": [
                { "name": "Groceries", "amount": 150 },
                { "name": "Transportation", "amount": 200 },
                { "name": "Dining Out", "amount": 300 },
                { "name": "Entertainment", "amount": 525 }
              ]
            },
            "transactions": [
              {
                "name": "Alice Johnson",
                "type": "income",
                "amount": 120.00,
                "date": "2024-09-10"
              },
              {
                "name": "SuperMart",
                "type": "expense",
                "amount": 98.75,
                "date": "2024-09-09"
              },
              {
                "name": "Gas Station",
                "type": "expense",
                "amount": 45.30,
                "date": "2024-09-09"
              },
              {
                "name": "Bob's Repair Shop",
                "type": "expense",
                "amount": 300.00,
                "date": "2024-09-08"
              },
              {
                "name": "Freelance Design",
                "type": "income",
                "amount": 350.00,
                "date": "2024-09-07"
              },
              {
                "name": "Streaming Service",
                "type": "expense",
                "amount": 12.99,
                "date": "2024-09-06"
              },
              {
                "name": "Local Café",
                "type": "expense",
                "amount": 15.20,
                "date": "2024-09-05"
              },
              {
                "name": "Freelance Writing",
                "type": "income",
                "amount": 250.00,
                "date": "2024-09-04"
              },
              {
                "name": "Bookstore",
                "type": "expense",
                "amount": 23.50,
                "date": "2024-09-03"
              },
              {
                "name": "Clothing Store",
                "type": "expense",
                "amount": 75.00,
                "date": "2024-09-03"
              }
            ],
            "bills": {
              "paidBills": 250.00,
              "totalUpcoming": 345.98,
              "dueSoon": 90.00,
              "details": [
                {
                  "name": "Electricity Bill",
                  "amount": 120.00,
                  "dueDate": "2024-09-15",
                  "status": "upcoming"
                },
                {
                  "name": "Water Bill",
                  "amount": 60.00,
                  "dueDate": "2024-09-18",
                  "status": "upcoming"
                },
                {
                  "name": "Gym Membership",
                  "amount": 49.99,
                  "dueDate": "2024-09-20",
                  "status": "due soon"
                },
                {
                  "name": "Rent",
                  "amount": 850.00,
                  "dueDate": "2024-10-01",
                  "status": "upcoming"
                },
                {
                  "name": "Phone Plan",
                  "amount": 30.00,
                  "dueDate": "2024-09-05",
                  "status": "paid"
                }
              ]
            }
          }
          
    }
]

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const login = (username, password) => {
        const actualUser = users.find(item => item.username === username && item.password === password)
        
        if (actualUser) {
            setUser(actualUser)
            return true
        }
        
        return false
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}