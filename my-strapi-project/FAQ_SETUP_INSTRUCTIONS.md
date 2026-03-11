# FAQ Strapi Setup - Quick Reference

## ✅ Files Created

The FAQ Single Type has been successfully created in your Strapi project with the following structure:

### Component
```
my-strapi-project/src/components/shared/faq-item.json
```
- **Fields**: question, answer, order, showTable

### API Files
```
my-strapi-project/src/api/faq/
├── content-types/faq/schema.json
├── controllers/faq.ts
├── services/faq.ts
└── routes/faq.ts
```

## 🚀 Getting Started

### 1. Restart Strapi Server
The new content type needs Strapi to rebuild:
```bash
cd my-strapi-project
npm run develop
```

### 2. Access the FAQ Content Type
1. Go to Strapi Admin Panel (http://localhost:1337/admin)
2. Navigate to **Content Manager** → **Single Types** → **FAQ**

### 3. Set Permissions (Important!)
1. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
2. Click on **Public**
3. Scroll to **FAQ**
4. Check ✅ **find** permission
5. Click **Save**

## 📝 Managing FAQs

### Add Initial Content
1. In Content Manager → FAQ:
   - **Title**: "Frequently Asked Questions"
   - **Subtitle**: "Explore step-by-step guides..."
   - Click **Add new entry** under FAQs section

### Add FAQ Item
For each FAQ, fill in:
- **Question**: The FAQ question
- **Answer**: Full answer text (supports line breaks)
- **Order**: Number for sorting (e.g., 10, 20, 30...)
- **Show Table**: ✅ Check for Q6 (priority table question)

### Example FAQ Orders
- Q1: order = 10
- Q2: order = 20
- Q3: order = 30
- Q4: order = 40
- Q5: order = 50
- Q6: order = 60 (with showTable = true)
- Q7: order = 70
- Q8: order = 80
- Q9: order = 90

## 🔗 API Endpoint

Once set up, the FAQ data will be available at:
```
GET http://localhost:1337/api/faq?populate=faqs
```

## 📊 Response Format

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Frequently Asked Questions",
      "subtitle": "Explore step-by-step guides...",
      "faqs": [
        {
          "id": 1,
          "question": "What systems does ACT support?",
          "answer": "ACT provides comprehensive support...",
          "order": 10,
          "showTable": false
        }
      ],
      "createdAt": "2026-02-25T...",
      "updatedAt": "2026-02-25T...",
      "publishedAt": "2026-02-25T..."
    }
  },
  "meta": {}
}
```

## ✏️ Operations

### Add FAQ
1. Click **Add new entry** in the faqs component
2. Fill in question, answer, order, showTable
3. Click **Save** → **Publish**

### Edit FAQ
1. Click on the FAQ item to expand
2. Modify fields
3. Click **Save** → **Publish**

### Delete FAQ
1. Click trash icon on the right of the FAQ item
2. Click **Save** → **Publish**

### Reorder FAQs
Change the **order** field values, lower numbers appear first

## 🎯 Special Features

### Priority Table (Q6)
Set `showTable = true` for the question about response times. This will display a hardcoded priority table with:
- P1-P5 priority levels
- Response times
- Severity levels
- Impact descriptions

## 🛠️ Troubleshooting

### "FAQ not found in Content Manager"
→ Restart Strapi server: `npm run develop`

### "Permission denied" error
→ Enable Public find permission in Settings → Roles → Public → FAQ

### FAQs not sorting correctly
→ Make sure order field is a number and each FAQ has a different value

### Frontend not showing FAQs
→ Check that content is **Published** (not Draft)
→ Verify API URL is correct: `/api/faq?populate=faqs`

## 📝 Notes

- This is a **Single Type**, meaning only one FAQ page configuration exists
- All FAQs are managed within the repeatable `faqs` component
- The `showTable` boolean controls display of the priority response time table
- Use `order` field to control the sequence (recommended: increments of 10)

---

**Next Steps**: 
1. Restart Strapi
2. Set permissions
3. Add your FAQ content
4. Test the frontend at `/faq` route
