import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { CreateUserDto } from './user.dto';
import { FirebaseRepository } from 'src/firebase/firebase.service';

@Injectable()
export class UsersService {
  constructor(private readonly firebaseRepository: FirebaseRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userRef = await this.firebaseRepository
      .collection('users')
      .add(createUserDto);
    const userSnapshot = await userRef.get();
    const user = userSnapshot.data() as User;
    user.id = userRef.id;
    return user;
  }

  async findAll(): Promise<User[]> {
    const usersSnapshot = await this.firebaseRepository
      .collection('users')
      .get();
    const users: User[] = [];
    usersSnapshot.forEach((doc) => {
      const user = doc.data() as User;
      user.id = doc.id;
      users.push(user);
    });
    return users;
  }
  async findOne(id: string): Promise<User> {
    const userSnapshot = await this.firebaseRepository
      .collection('users')
      .doc(id)
      .get();
    const user = userSnapshot.data() as User;
    user.id = userSnapshot.id;
    return user;
  }
  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    await this.firebaseRepository
      .collection('users')
      .doc(id)
      .set(updateUserDto);
    return this.findOne(id);
  }
}
