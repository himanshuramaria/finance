# 💰 AI Finance Platform

> An AI-powered personal finance management platform that helps users track expenses, manage budgets, scan receipts, and gain intelligent financial insights.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8)
![Gemini](https://img.shields.io/badge/Google-Gemini_AI-orange)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Overview

AI Finance Platform is a modern full-stack web application that enables users to manage their personal finances efficiently. It combines traditional expense tracking with Artificial Intelligence to automate receipt scanning, categorize transactions, visualize spending patterns, and provide meaningful financial insights.

The application is designed with scalability, security, and performance in mind using the latest web technologies.

---

# ✨ Features

### 📊 Dashboard

- Interactive financial dashboard
- Income vs Expense overview
- Budget utilization
- Recent transactions
- Spending analytics

---

### 💳 Account Management

- Create multiple bank accounts
- Track balances
- View transaction history
- Account-wise analytics

---

### 💸 Transaction Management

- Add income
- Add expenses
- Categorize transactions
- Edit/Delete transactions
- Search transaction history

---

### 🤖 AI Receipt Scanner

Upload a receipt and let Google Gemini AI automatically:

- Extract merchant details
- Detect amount
- Identify transaction date
- Suggest category
- Autofill transaction form

---

### 📈 Budget Planning

- Monthly budget creation
- Budget progress tracking
- Remaining balance
- Spending alerts

---

### 📧 Email Notifications

Automated email reminders using Resend for financial updates.

---

### 🔐 Authentication

Secure authentication powered by Clerk.

- Sign Up
- Login
- Protected Routes
- User Profiles

---

### 🛡️ Security

- Arcjet bot protection
- Rate limiting
- Secure APIs
- Server Actions

---

## 🏗️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js 15 |
| Language | JavaScript |
| UI | Tailwind CSS + Shadcn UI |
| Authentication | Clerk |
| Database | PostgreSQL |
| ORM | Prisma |
| AI | Google Gemini API |
| Charts | Recharts |
| Background Jobs | Inngest |
| Email | Resend |
| Security | Arcjet |

---

# 📂 Project Structure

```
finance-platform
│
├── app/
│   ├── dashboard/
│   ├── account/
│   ├── transaction/
│   ├── api/
│
├── actions/
├── components/
├── hooks/
├── prisma/
├── lib/
├── emails/
├── data/
└── public/
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
DATABASE_URL=

DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

---

# 🛠️ Installation

Clone the repository

```bash
git clone https://github.com/himanshuramaria/finance.git
```

Move into the project

```bash
cd finance
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Start development server

```bash
npm run dev
```

---

# 📊 Application Flow

```
User Login
      │
      ▼
Dashboard
      │
      ├──────────────┐
      ▼              ▼
Accounts        Transactions
      │              │
      ▼              ▼
 Budget      AI Receipt Scanner
      │              │
      └──────┬───────┘
             ▼
     Analytics Dashboard
```

---

# 🤖 AI Workflow

```
Receipt Image
      │
      ▼
Gemini AI OCR
      │
      ▼
Extract Information
      │
      ▼
Auto-fill Transaction
      │
      ▼
Save to Database
```

---

# 📈 Future Improvements

- Multi-currency support
- Investment portfolio tracking
- AI financial advisor
- Bank account integration
- Expense forecasting
- Dark mode
- Mobile application
- PDF report generation

---

# 📸 Screenshots

> Add screenshots inside `/public/screenshots`

```
public/
└── screenshots/
    ├── dashboard.png
    ├── accounts.png
    ├── receipt-scanner.png
    ├── analytics.png
```

---

# 🧠 What I Learned

- Building scalable applications using Next.js App Router
- Database modeling with Prisma
- Authentication using Clerk
- Integrating Google Gemini AI
- Background job processing using Inngest
- Email automation with Resend
- Secure API development
- Building responsive UI using Tailwind CSS

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Himanshu Ramaria**

M.Tech AI & Data Science • MNNIT Allahabad

GitHub: https://github.com/himanshuramaria

LinkedIn: *(Add your profile link here)*

---

⭐ If you found this project helpful, don't forget to star the repository!
