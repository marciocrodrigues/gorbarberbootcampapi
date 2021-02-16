import User from '@modules/users/infra/typeorm/entities/User';
import { injectable, inject } from 'tsyringe';

import { classToClass } from 'class-transformer';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvier: ICacheProvider,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    // caso queira usar o cache, descomentar a linha abaixo
    // let users = await this.cacheProvier.recover<User[]>(
    //   `providers-list:${user_id}`,
    // );

    let users;

    if (!users) {
      users = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });

      await this.cacheProvier.save(
        `providers-list:${user_id}`,
        classToClass(users),
      );
    }

    return users;
  }
}

export default ListProvidersService;
