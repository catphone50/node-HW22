namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean
      ) {}

      toggleSuperAdmin(): void {
        this.isSuperAdmin = !this.isSuperAdmin;
      }
    }
  }
}

export default UserManagement;
