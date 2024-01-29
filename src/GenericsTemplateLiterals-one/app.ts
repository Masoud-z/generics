type User = {
  firstName: string;
  lastName: string;
  age: number;
};

type ActionTypes = `update-${keyof User}`;

type Actions<T, K extends keyof T & string> = {
  type: `update-${K}`;
  payload: T[K];
};

type UpdateNameAction = Actions<User, "firstName">;
