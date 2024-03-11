interface User {
    _id: string,
    email: string,
    activated: boolean,
    activationLink: string,
    role: string;
}

export default User;
