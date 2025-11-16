import * as Yup from 'yup';
export const toDoSchema = Yup.string()
.min(5, 'ToDo must be at least 5 characters long')
.max(100, 'ToDo cannot exceed 100 characters')
.required('ToDo is required');

export const decrValidationSchema = Yup.string()
.min(10, 'Description must be at least 10 characters long')
.max(500, 'Description cannot exceed 500 characters')
.required('Description is required');

export const ToDoItemSchema = Yup.object({
  title: toDoSchema,
  description: decrValidationSchema
});