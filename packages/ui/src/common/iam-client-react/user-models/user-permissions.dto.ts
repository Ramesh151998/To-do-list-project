import { MenusData } from "./menusData.dto";

export class UserPermissionsDto {
    userId: string;
    userName: string;
    roleId: string[];
    roleName: string[];
    menusData: MenusData[];

    constructor(userId: string, userName: string, roleId: string[], roleName: string[], menusData: MenusData[]) {
        this.userId = userId;
        this.userName = userName
        this.roleId = roleId
        this.roleName = roleName
        this.menusData = menusData
    }
}