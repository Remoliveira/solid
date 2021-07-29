import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    
    const user = this.usersRepository.findById(user_id);

    if(!user){
      throw new Error("User dont exist");
      
    }

    if(user.admin === false){
      throw new Error("Admin privileges required");
      
    }
    
    const allUsers =  this.usersRepository.list()
    
    return allUsers;
    
  }
}

export { ListAllUsersUseCase };
