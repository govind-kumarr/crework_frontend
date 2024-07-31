# Crework Task Management

Crework Task Management is a comprehensive task management application designed to help teams and individuals organize, track, and manage their tasks efficiently. The application offers a user-friendly interface with features like task creation, updates, prioritization, and a calendar view. This README provides an overview of the application's features and instructions for getting started.

## Backend

The backend of Workflo is deployed on [Render](https://render.com/), providing a reliable and scalable infrastructure for the application. Source Code of [Backend](https://github.com/govind-kumarr/crework_backend)

![Screenshot (640)](https://github.com/user-attachments/assets/4cc5cbdf-1bcd-4b66-86ab-d1ef21b1d1d3)

## Features

### User Authentication
- **Sign Up**: New users can create an account by providing their full name, email, and password.![Screenshot (639)](https://github.com/user-attachments/assets/7530060c-4133-4cd1-b2a1-c58067afc196)
- **Sign In**: Existing users can log in using their email and password.![Screenshot 2024-07-31 152709](https://github.com/user-attachments/assets/2843a469-499c-4251-9923-a551923b27b4)
- **Session Management**: User sessions are securely managed with cookies, ensuring authenticated access to protected routes.
- **Logout**: Users can securely log out, with session cookies being cleared.

### Task Management
- **Task Creation**: Users can create new tasks with a title, description, priority, status, and deadline. Tasks are categorized into four columns: To do, In progress, Under review, and Finished.![Screenshot (642)](https://github.com/user-attachments/assets/a14c3532-0a18-4cab-9062-c4c531141015)
- **Task Update**: Users can update task details, including moving tasks between different status columns via drag-and-drop.![Screenshot (641)](https://github.com/user-attachments/assets/aaae88eb-7970-47e4-96d4-2559fb5c4668)
- **Task Deletion**: Tasks can be deleted when they are no longer needed.![Screenshot (643)](https://github.com/user-attachments/assets/f30af698-2ee2-4c3a-8fd3-6db0f072c7d5)
- **Drag and Drop**: Tasks can be easily reorganized across different status columns using a drag-and-drop interface.

### Task Details
- **Priority Levels**: Tasks can be assigned priority levels (Urgent, High, Medium, Low) to indicate their importance.
- **Deadlines**: Users can set deadlines for tasks, with date selection restricted to dates greater than today.
- **Detailed Descriptions**: Tasks can include detailed descriptions to provide additional context.

### User Interface
- **Customizable Input Focus**: Inputs like email and password fields show border highlights when focused, enhancing user interaction.
- **Scroll Management**: The application allows scrolling without showing scrollbars, maintaining a clean and streamlined interface.
- ![Screenshot (644)](https://github.com/user-attachments/assets/97076c84-35db-414e-acf5-f91e02ac7092)

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/govind-kumarr/crework_frontend
   cd crework_frontend
   npm run dev
