import {BaseService} from './BaseService.js'
export class TaskService extends BaseService{
  constructor() {
      super(); // gọi lại phương thức contructor của class cha
  }
  //Định nghĩa phương thức getAllTask
  getAllTask = () => {
    return this.get(`http://svcy.myclass.vn/api/ToDoList/GetAllTask`);
  }

  //Định nghĩa hàm đưa dữ liệu về backend
  addTask = (task) => {
    //<= đúng định dang backend quy định
    return this.post(`http://svcy.myclass.vn/api/ToDoList/AddTask`,task);
  }

  // Định nghĩa hàm xóa dữ liệu
  deleteTask = (taskName) => {
    return this.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`)
}

// xây dựng chức năng donetask, rejecktask
doneTask = (taskName) => {
    return this.put(`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`);
}

rejecTask = (taskName) => {
    return this.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`);
}
};