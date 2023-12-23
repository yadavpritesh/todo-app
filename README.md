This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

The Todo App is a task management application designed to help users organize and prioritize their tasks efficiently. The application offers a dashboard layout, allowing users to manage tasks based on status priority. It provides a responsive and visually appealing interface with options to group and sort tasks in various ways.

## Key Feature

Grouping Options:
By Status: Group tickets based on their current status (e.g., ToDo, In Progress, Done).
By User: Arrange tickets according to the assigned user.
By Priority: Group tickets based on their priority level.

Sorting Options:
Users can sort the displayed tickets in two ways:

Priority: Arrange tickets in descending order of priority.
Title: Sort tickets in ascending order based on their title.

Priority Levels:
The application uses the following priority levels:
Urgent (Priority level 4)
High (Priority level 3)
Medium (Priority level 2)
Low (Priority level 1)
No priority (Priority level 0)

## Technology Stack
React
Next.js
Tailwind CSS
Next.js Themes for Dark Mode

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers](https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
