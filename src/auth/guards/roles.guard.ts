import { Injectable, CanActivate, ExecutionContext, Inject, forwardRef } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { hasRoles } from "../decorators/roles.decorator";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/entities/user.entity";


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,

        @Inject(forwardRef(() => UsersService))
        private userService: UsersService
    ) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user: User = request.user;

        return this.userService.findOne(user.id).pipe(
            map((user: User) => {
                const hasRole = () => roles.indexOf(user.role.libelle) > -1;
                let hasPermission: boolean = false;

                if (hasRole()) {
                    hasPermission = true;
                };
                return user && hasPermission;
            })
        )
    }
}