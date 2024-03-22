import { AppError } from "@/errors";
import {
  UserDTO,
  IUserRepository,
  IUserService,
  UpdateUserDTO,
} from "@/modules/user";
import { StatusCodes } from "http-status-codes";

import { inject, injectable } from "tsyringe";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async findById(id: string): Promise<UserDTO> {
    const user = await this.userRepository.findByFilter({ _id: id });

    if (!user) throw new AppError(StatusCodes.NOT_FOUND, "User not found");

    return UserDTO.toDTO(user);
  }
  update(id: string, update: UpdateUserDTO): Promise<UserDTO> {
    throw new Error("Method not implemented.");
  }
}
