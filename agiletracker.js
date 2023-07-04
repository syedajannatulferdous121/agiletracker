class AgileTracker {
  constructor() {
    this.tasks = [];
    this.users = [];
  }

  createTask(task) {
    this.tasks.push(task);
  }

  assignTask(taskId, assigneeId) {
    const task = this.tasks.find((t) => t.id === taskId);
    const user = this.users.find((u) => u.id === assigneeId);

    if (task && user) {
      task.assignee = user.name;
    }
  }

  updateTaskStatus(taskId, status) {
    const task = this.tasks.find((t) => t.id === taskId);

    if (task) {
      task.status = status;
    }
  }

  getAllTasks() {
    return this.tasks;
  }

  addUser(user) {
    this.users.push(user);
  }

  getUserTasks(userId) {
    return this.tasks.filter((task) => task.assigneeId === userId);
  }

  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  }
}

// Create an instance of AgileTracker
const agileTracker = new AgileTracker();

// Prompt the user for task and user details
const taskId = prompt("Task ID:");
const taskTitle = prompt("Task Title:");
const taskDescription = prompt("Task Description:");
const assigneeId = prompt("Assignee ID:");
const taskStatus = prompt("Task Status:");

// Create a new task
agileTracker.createTask({
  id: taskId,
  title: taskTitle,
  description: taskDescription,
  assigneeId: assigneeId,
  status: taskStatus,
});

// Prompt the user for user details
const userId = prompt("User ID:");
const userName = prompt("User Name:");
const userEmail = prompt("User Email:");

// Add a new user
agileTracker.addUser({
  id: userId,
  name: userName,
  email: userEmail,
});

// Perform other operations on tasks and users

// Get all tasks
const allTasks = agileTracker.getAllTasks();
console.log("All Tasks:", allTasks);

// Get all users
const allUsers = agileTracker.getAllUsers();
console.log("All Users:", allUsers);

// Get tasks assigned to a user
const userTasks = agileTracker.getUserTasks(assigneeId);
console.log("User Tasks:", userTasks);

// Get tasks by status
const tasksInProgress = agileTracker.getTasksByStatus("In Progress");
console.log("Tasks in Progress:", tasksInProgress);
