import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  private todos = [{ id: '1', title: 'Sample Todo', completed: false }];

  findOne(id: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }
    return todo;
  }

  findAll() {
    return [
      { id: '0', title: 'Sample Todo 0 (in-memory, no DB yet)' },
      { id: '1', title: 'Sample Todo 1 (in-memory, no DB yet)' },
      { id: '2', title: 'Sample Todo 2 (in-memory, no DB yet)' },
    ];
  }

  create(createTodoDto: CreateTodoDto) {
    return { id: '3', ...createTodoDto };
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return { id, ...updateTodoDto };
  }
}
