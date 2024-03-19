import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root',
})

export class UserShowServices {
    private users: User[] = [
        {
            id: 1,
            name: 'andriamasy',
            firstname: 'athanase',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere recusandae quisquam enim consequuntur officiis, aperiam, fugit nobis voluptates nihil ratione quaerat doloremque. Impedit vel praesentium odit assumenda veniam labore omnis.',
            imgUrl: '1',
            onlineStatus: true,
        },
        {
            id: 2,
            name: 'razanamaro',
            firstname: 'josephine',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere recusandae quisquam enim consequuntur officiis, aperiam, fugit nobis voluptates nihil ratione quaerat doloremque. Impedit vel praesentium odit assumenda veniam labore omnis.',
            imgUrl: '2',
            onlineStatus: false,
        },
        {
            id: 3,
            name: 'rakemba',
            firstname: 'tolotra',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere recusandae quisquam enim consequuntur officiis, aperiam, fugit nobis voluptates nihil ratione quaerat doloremque. Impedit vel praesentium odit assumenda veniam labore omnis.',
            imgUrl: '1',
            onlineStatus: false,
        },
        {
            id: 4,
            name: 'bemako',
            firstname: 'justine',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere recusandae quisquam enim consequuntur officiis, aperiam, fugit nobis voluptates nihil ratione quaerat doloremque. Impedit vel praesentium odit assumenda veniam labore omnis.',
            imgUrl: '2',
            onlineStatus: true,
        },
    ]

    getAllUsers (): User[] {
        return this.users;
    }

    getUser(id: number): User {
        const user = this.users.find(user => user.id === id);
        if(user) {
            return user;
        }else {
            throw new Error('L\'identifiant n\'existe pas');
        }
    }
}