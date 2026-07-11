# 🤖 AI SQL Assistant

## 📌 Project Overview

AI SQL Assistant is an AI-powered analytics platform that enables users to upload CSV or Excel datasets and interact with them using natural language. The application automatically detects the dataset schema, creates database tables dynamically, stores the data in PostgreSQL, converts user questions into SQL queries using AI, executes the queries securely, and displays the results in a user-friendly interface with charts, insights, and export options.

---

# ✨ Features

## Dataset Upload
- Upload CSV (.csv) and Excel (.xlsx, .xls) files
- Automatic schema detection
- Dynamic table creation
- Automatic data insertion into PostgreSQL

## AI Features
- Natural Language to SQL Conversion
- AI-generated Business Insights
- SQL Query Validation
- Secure Query Execution
- Error Handling

## Analytics
- Display query results in a table
- Interactive charts and graphs
- Query history

## Export
- Export query results to Excel
- Export query results to PDF

## User Interface
- Professional Dashboard
- Responsive Layout
- Sidebar Navigation
- Dashboard Summary Cards

---

# 🛠️ Technology Stack

### Frontend
- React.js
- Axios
- Recharts
- CSS

### Backend
- FastAPI
- Python
- SQLAlchemy
- Pandas

### Database
- PostgreSQL

### AI Model
- Groq API
- Llama 3.3 70B Versatile

---

# 📂 Project Structure

```
ai-sql-assistant/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── models/
│   │   ├── utils/
│   │   └── main.py
│   │
│   ├── uploads/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/Rakiniya/ai-sql-assistant-v2.git
```

```bash
cd ai-sql-assistant-v2
```

---

## Backend Setup

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
DATABASE_URL=postgresql://username:password@localhost:5432/ai_sql_assistant

GROQ_API_KEY=your_groq_api_key
```

Run Backend

```bash
uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend
```

Install Dependencies

```bash
npm install
```

Run Frontend

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🚀 Application Workflow

```
Upload Dataset
      │
      ▼
Detect Dataset Schema
      │
      ▼
Create Database Table
      │
      ▼
Store Data in PostgreSQL
      │
      ▼
Ask Question in Natural Language
      │
      ▼
AI Generates SQL Query
      │
      ▼
Validate SQL Query
      │
      ▼
Execute Query
      │
      ▼
Display Results
      │
      ├── Table
      ├── Charts
      ├── AI Insight
      └── Export Options
```

---

# ✅ Assignment Requirements Implemented

### Mandatory Features

- ✔ Upload CSV/Excel Datasets
- ✔ Automatic Schema Detection
- ✔ Dynamic Table Creation
- ✔ PostgreSQL Database Storage
- ✔ AI-powered Chat Interface
- ✔ Prompt-to-SQL Conversion
- ✔ SQL Query Validation
- ✔ Query Execution
- ✔ Result Display
- ✔ Error Handling

### Bonus Features

- ✔ Query History
- ✔ AI-generated Insights
- ✔ Charts and Graphs
- ✔ Export to Excel/PDF

---

# 💬 Example Queries

- Show top 10 customers by revenue.
- Find duplicate records.
- Which month generated the highest sales?
- Show records with missing values.
- Generate a sales summary for the last quarter.

---

# 🔒 Security

- Only SELECT queries are allowed.
- SQL validation prevents unsafe queries.
- Dangerous SQL commands such as DROP, DELETE, UPDATE, INSERT, ALTER, and TRUNCATE are blocked.
- Database schema is validated before query execution.
- Exception handling provides safe error messages.

---

# 👨‍💻 Author

**Rakiniya K**

GitHub: https://github.com/Rakiniya

---

# 📄 License

This project was developed for educational and learning purposes.
